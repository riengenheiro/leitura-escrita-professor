import { MessageCircle } from 'lucide-react'

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519989863544'

export function DEWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-btn-primary hover:opacity-90 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all group"
      aria-label="Dúvidas? Fale conosco no WhatsApp"
      title="Dúvidas? Fale conosco"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Dúvidas? Fale conosco
      </span>
    </a>
  )
}
