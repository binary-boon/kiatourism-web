export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface ChatSession {
  sessionId: string
  messages: Message[]
  userName?: string
  userEmail?: string
  userPhone?: string
  startedAt: Date
  lastActivityAt: Date
}

export interface LeadData {
  name?: string
  email?: string
  phone?: string
  message: string
  conversationHistory: Array<{
    role: 'user' | 'assistant'
    content: string
  }>
  sessionId: string
  capturedAt: Date
}

export interface ChatAPIResponse {
  message: string
  leadCaptured: boolean
  shouldEscalate: boolean
  sessionId: string
}

export interface ChatAPIRequest {
  message: string
  sessionId: string
  conversationHistory?: Array<{
    role: 'user' | 'assistant'
    content: string
  }>
  userName?: string
  userEmail?: string
  userPhone?: string
}
