import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,38%)] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 animate-pulse-glow"
    style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    aria-label="WhatsApp"
  >
    <MessageCircle className="text-white w-6 h-6 sm:w-7 sm:h-7" />

  </a>
);

export default WhatsAppButton;
