import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5592999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,38%)] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 animate-pulse-glow"
    aria-label="WhatsApp"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

export default WhatsAppButton;
