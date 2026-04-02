import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,38%)] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 animate-pulse-glow"
    aria-label="WhatsApp"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

export default WhatsAppButton;
