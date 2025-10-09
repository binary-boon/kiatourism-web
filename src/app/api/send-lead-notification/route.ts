import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { lead } = await req.json()
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email configuration - define emailData first
    const emailData = {
      from: 'Kia Tourism <notifications@kiatourism.com>',
      to: ['admin@kiatourism.com', 'sales@kiatourism.com'],
      subject: `New Lead: ${lead.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 5px;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: bold;
                color: #667eea;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
              }
              .footer {
                background: #1f2937;
                color: #9ca3af;
                padding: 20px;
                text-align: center;
                border-radius: 0 0 10px 10px;
                font-size: 12px;
              }
              .badge {
                display: inline-block;
                padding: 5px 10px;
                background: #10b981;
                color: white;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🎉 New Lead Received!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Kia Tourism and Hotels</p>
              </div>
              
              <div class="content">
                <p style="margin-top: 0;">
                  <span class="badge">NEW</span> 
                  A new contact form submission has been received.
                </p>
                
                <div class="field">
                  <span class="label">Full Name</span>
                  <span class="value">${lead.fullName}</span>
                </div>
                
                <div class="field">
                  <span class="label">Email</span>
                  <span class="value">
                    <a href="mailto:${lead.email}" style="color: #667eea;">${lead.email}</a>
                  </span>
                </div>
                
                <div class="field">
                  <span class="label">Phone</span>
                  <span class="value">
                    <a href="tel:${lead.phone}" style="color: #667eea;">${lead.phone}</a>
                  </span>
                </div>
                
                <div class="field">
                  <span class="label">Subject</span>
                  <span class="value">${lead.subject}</span>
                </div>
                
                <div class="field">
                  <span class="label">Message</span>
                  <span class="value">${lead.message.replace(/\n/g, '<br>')}</span>
                </div>
                
                <div class="field">
                  <span class="label">Preferred Contact Method</span>
                  <span class="value">${lead.preferredContactMethod}</span>
                </div>
                
                <div class="field">
                  <span class="label">Submitted At</span>
                  <span class="value">${new Date(lead.createdAt).toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}</span>
                </div>
                
                <div style="margin-top: 30px; text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/leads/${lead.id}" 
                     style="display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    View in Admin Panel
                  </a>
                </div>
              </div>
              
              <div class="footer">
                <p style="margin: 0;">This is an automated notification from Kia Tourism and Hotels</p>
                <p style="margin: 5px 0 0 0;">Please respond to the customer within 24 hours</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send email using Resend
    await resend.emails.send({
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    })

    console.log('📧 Email notification sent:', {
      to: emailData.to,
      subject: emailData.subject,
      leadId: lead.id,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending lead notification:', error)
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    )
  }
}
