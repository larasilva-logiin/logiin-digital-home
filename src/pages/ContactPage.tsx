import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const serviceOptions = [
  "Câmeras de Segurança (CFTV)",
  "Alarmes",
  "Controle de Acesso",
  "Fechaduras Eletrônicas",
  "Automação Residencial",
  "Interfones e Vídeo Porteiro",
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-dark text-center">
        <div className="container-max">
          <AnimatedSection>
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">Contato</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Fale <span className="text-gradient">com a gente</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl mx-auto">
              Estamos prontos para ajudar. Preencha o formulário ou entre em contato diretamente.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-xl border border-border p-6 sm:p-8">
                <h2 className="font-heading text-xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Nome completo" required />
                    <Input type="email" placeholder="E-mail" required />
                  </div>
                  <Input placeholder="Telefone (WhatsApp)" required />
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Sua mensagem..." rows={5} required />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold"
                  >
                    {loading ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">Informações de contato</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> (11) 99999-9999</li>
                  <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> contato@logiin.com.br</li>
                  <li className="flex items-start gap-3"><MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" /> São Paulo, SP — Brasil</li>
                  <li className="flex items-center gap-3"><Clock size={18} className="text-primary" /> Tempo médio de resposta: 2 horas</li>
                </ul>
              </div>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-brand-whatsapp/10 border border-brand-whatsapp/20 rounded-xl p-6 hover:bg-brand-whatsapp/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-whatsapp flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">WhatsApp direto</p>
                  <p className="text-xs text-muted-foreground">Clique para iniciar uma conversa</p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="bg-muted rounded-xl aspect-video flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Mapa — São Paulo, SP</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
