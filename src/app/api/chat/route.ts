import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { Resend } from 'resend'

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
const resend = new Resend(process.env.RESEND_API_KEY)

// System prompt for the AI assistant
const SYSTEM_PROMPT = `You are a friendly and helpful travel assistant for Kia Tourism, an Indian travel booking agency based in India.

COMPANY INFORMATION:
- Company Name: Kia Tourism
- Specializations:
  1. Seamless business travel solutions with premium accommodations
  2. Curated wedding packages and destination planning services
  3. Flexible independent travel arrangements (FIT/JIT Bookings)
  4. Reliable and comfortable transport solutions for all travel needs

DESTINATIONS WE SERVE:
- Udaipur (City of Lakes - perfect for weddings and royal experiences)
- Ahmedabad (Business hub and cultural center)
- Jaipur (Pink City - heritage and royal weddings)
- Delhi (Capital city - business and leisure)
- Mumbai (Financial capital - business travel)
- Surat (Diamond city - business travel)
- Vadodara (Cultural city)
- Jodhpur (Blue City - desert weddings and heritage)

COMMON SERVICES & FAQs:

**Business Travel Solutions:**
- Corporate event management and planning
- Premium hotel accommodations for business travelers
- Conference and meeting arrangements
- Group bookings for corporate teams
- Airport transfers and local transportation

**Wedding Packages:**
- Destination wedding planning in royal palaces and heritage hotels
- Complete wedding coordination from venue to logistics
- Guest accommodation management
- Transportation for wedding parties
- Customized packages for Udaipur, Jaipur, and Jodhpur weddings
- Pre-wedding and post-wedding tour arrangements

**Independent Travel (FIT/JIT):**
- Customized itineraries based on preferences
- Flexible booking options
- Solo traveler packages
- Family vacation planning
- Honeymoon packages

**Transportation Services:**
- Airport pick-up and drop services
- Luxury car rentals (Sedans, SUVs, Tempo Travelers)
- Inter-city transfers
- Multi-day tour vehicles with experienced drivers
- 24/7 support during travel

**Booking Process:**
1. Initial consultation to understand requirements
2. Customized package proposal
3. Confirmation and payment
4. Pre-travel support and documentation
5. 24/7 assistance during travel

**General Policies:**
- Advance booking recommended (at least 2-4 weeks for best rates)
- Flexible cancellation policies (varies by service)
- 24/7 customer support
- Secure payment options
- Full refund for cancellations made 30+ days in advance (terms apply)
- Partial refunds for cancellations 15-30 days before travel

YOUR ROLE AND BEHAVIOR:
1. Be warm, friendly, and conversational (not formal)
2. Ask clarifying questions to understand customer needs
3. Provide helpful information about destinations and services
4. Share relevant travel tips and suggestions
5. Build rapport before asking for contact details

LEAD QUALIFICATION PROCESS:
When a visitor shows genuine interest (mentions specific dates, destinations, or asks detailed questions), naturally ask for:
- Their name
- Email address
- Phone number (optional but preferred)

Say something like: "I'd love to help you further! Could you share your name and email so I can send you detailed information and our team can create a personalized package for you?"

IMPORTANT BOUNDARIES - NEVER PROVIDE:
❌ Specific prices or package costs
❌ Exact availability for dates
❌ Confirmed bookings or reservations
❌ Detailed quotations

INSTEAD, when asked about pricing, availability, or specific bookings:
✅ Say: "Great question! Pricing varies based on your specific requirements, travel dates, and group size. Let me connect you with our team who can provide accurate pricing and availability."
✅ Then offer two options:
   1. "I can have our team email you a detailed quote - just share your email address"
   2. "You can directly chat with our team on WhatsApp for immediate assistance"

CONVERSATION STYLE:
- Use emojis occasionally (✈️, 🌍, 💍, 🚗, ✨) but don't overdo it
- Keep responses concise but informative (2-4 sentences usually)
- Ask one question at a time
- Show enthusiasm about helping plan their journey
- Use "we" when referring to Kia Tourism services
- If they mention budget constraints, assure them we have flexible options

ESCALATION TRIGGERS - Immediately offer human contact when:
- Customer asks for specific pricing
- Customer asks about availability for specific dates
- Customer wants to make a booking
- Customer has complex custom requirements
- Customer expresses urgency
- Customer seems frustrated or dissatisfied

Remember: Your goal is to qualify leads and create warm handoffs to the human team, not to close sales yourself.`

// Detect if user is asking about pricing, availability, or ready to book
function shouldEscalateToHuman(message: string): boolean {
  const escalationKeywords = [
    'price', 'cost', 'how much', 'pricing', 'quote', 'quotation',
    'available', 'availability', 'book', 'booking', 'reserve', 'reservation',
    'budget', 'package cost', 'charges', 'fees', 'rates',
    'confirm', 'confirmation', 'specific dates', 'exact date'
  ]
  
  const lowerMessage = message.toLowerCase()
  return escalationKeywords.some(keyword => lowerMessage.includes(keyword))
}

// Extract contact info from conversation
function extractContactInfo(message: string): {
  email?: string
  phone?: string
  name?: string
} {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
  const phoneRegex = /(\+?\d{1,4}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}|\+?\d{10,}/g
  
  const emails = message.match(emailRegex)
  const phones = message.match(phoneRegex)
  
  return {
    email: emails?.[0],
    phone: phones?.[0],
  }
}

// Send lead notification email
async function sendLeadNotification(leadData: {
  name?: string
  email?: string
  phone?: string
  message: string
  conversationHistory: any[]
  sessionId: string
}) {
  try {
    const conversationText = leadData.conversationHistory
      .map(msg => `${msg.role === 'user' ? 'Customer' : 'AI'}: ${msg.content}`)
      .join('\n\n')

    await resend.emails.send({
      from: 'Kia Tourism Chatbot <admin@kiatourism.com>', // Change this to your verified domain
      to: 'admin@kiatourism.com',
      subject: `🎯 New Lead from Chatbot: ${leadData.name || 'Anonymous'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #ec4899 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 6px; border-left: 4px solid #f97316; }
            .conversation { background: white; padding: 15px; margin: 15px 0; border-radius: 6px; max-height: 400px; overflow-y: auto; }
            .message { margin: 10px 0; padding: 10px; border-radius: 6px; }
            .user-message { background: #fef3c7; }
            .ai-message { background: #e0f2fe; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
            .whatsapp-btn { display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">🎯 New Lead Captured!</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">From Kia Tourism AI Chatbot</p>
            </div>
            
            <div class="content">
              <div class="info-box">
                <h3 style="margin-top: 0; color: #f97316;">Contact Information</h3>
                <p><strong>Name:</strong> ${leadData.name || 'Not provided'}</p>
                <p><strong>Email:</strong> ${leadData.email || 'Not provided'}</p>
                <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
                <p><strong>Session ID:</strong> ${leadData.sessionId}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>

              <div class="info-box">
                <h3 style="margin-top: 0; color: #f97316;">Latest Message</h3>
                <p>${leadData.message}</p>
              </div>

              <div class="conversation">
                <h3 style="margin-top: 0; color: #f97316;">Full Conversation</h3>
                ${leadData.conversationHistory.map(msg => `
                  <div class="message ${msg.role === 'user' ? 'user-message' : 'ai-message'}">
                    <strong>${msg.role === 'user' ? '👤 Customer' : '🤖 AI Assistant'}:</strong>
                    <p style="margin: 5px 0 0 0;">${msg.content}</p>
                  </div>
                `).join('')}
              </div>

              <div style="text-align: center; margin-top: 20px;">
                ${leadData.phone ? `
                  <a href="https://wa.me/${leadData.phone.replace(/\D/g, '')}" class="whatsapp-btn">
                    💬 Contact via WhatsApp
                  </a>
                ` : ''}
              </div>
            </div>

            <div class="footer">
              <p>This lead was automatically captured by Kia Tourism AI Chatbot</p>
              <p>Respond promptly to convert this lead! ⚡</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    
    return true
  } catch (error) {
    console.error('Error sending lead notification:', error)
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { 
      message, 
      sessionId, 
      conversationHistory = [],
      userName,
      userEmail,
      userPhone 
    } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Extract contact info from message if not already provided
    const extractedInfo = extractContactInfo(message)
    const email = userEmail || extractedInfo.email
    const phone = userPhone || extractedInfo.phone

    // Check if this is an escalation scenario
    const shouldEscalate = shouldEscalateToHuman(message)
    
    // Build conversation context for AI
    const conversationContext = conversationHistory
      .map((msg: any) => `${msg.role}: ${msg.content}`)
      .join('\n')

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 500,
      },
    })

    // Prepare the full prompt
    const fullPrompt = `${SYSTEM_PROMPT}

CONVERSATION HISTORY:
${conversationContext}

CURRENT USER MESSAGE:
${message}

${shouldEscalate ? `
IMPORTANT: The user is asking about pricing, availability, or wants to book. You MUST:
1. Acknowledge their interest
2. Explain that you'll connect them with the team for accurate information
3. Offer email and WhatsApp options
4. If they haven't shared contact info, ask for their email to send details
` : ''}

Respond naturally and helpfully:`

    // Get AI response
    const result = await model.generateContent(fullPrompt)
    const response = result.response
    const aiMessage = response.text()

    // Determine if we should capture this as a lead
    let leadCaptured = false
    
    // Capture lead if:
    // 1. User provided contact info, OR
    // 2. User is asking about pricing/booking (escalation scenario)
    if ((email || phone) && shouldEscalate) {
      leadCaptured = await sendLeadNotification({
        name: userName,
        email,
        phone,
        message,
        conversationHistory: [...conversationHistory, { role: 'user', content: message }],
        sessionId,
      })
    }

    // Prepare response with WhatsApp link if escalating
    let finalMessage = aiMessage
    
    if (shouldEscalate) {
      const whatsappNumber = '919057570079' // Replace with actual WhatsApp number
      const encodedMessage = encodeURIComponent(
        `Hi, I was chatting with your AI assistant and I'm interested in learning more about your services.`
      )
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      
      finalMessage += `\n\n💬 [Chat with our team on WhatsApp](${whatsappLink})`
    }

    return NextResponse.json({
      message: finalMessage,
      leadCaptured,
      shouldEscalate,
      sessionId,
    })

  } catch (error: any) {
    console.error('Chat API error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process message',
        details: error.message 
      },
      { status: 500 }
    )
  }
}

// Add OPTIONS handler for CORS
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
