"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Avaliação Domiciliar",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = [
      "Olá, Dra. Shan!",
      `Nome: ${formData.name || "Paciente"}`,
      `Telefone: ${formData.phone || "Não informado"}`,
      `Assunto/Queixa: ${formData.subject}`,
      `Mensagem: ${formData.message || "Não informada"}`,
    ].join("\n");

    const link = `https://wa.me/5531986959594?text=${encodeURIComponent(formattedText)}`;
    window.open(link, "_blank");
  };

  return (
    <section id="contato" className="landing-section py-14 md:py-20">
      <div className="landing-container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Agendamento & Informações
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Entre em contato para tirar dúvidas ou agendar sua visita domiciliar.
          </p>
        </div>

        {!showForm ? (
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
            <a
              href="https://wa.me/5531986959594?text=Ol%C3%A1%2C%20Dra.%20Shan!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar."
              target="_blank"
              rel="noopener noreferrer"
              className="landing-card flex flex-col items-center gap-4 p-6 text-center hover:bg-primary/5"
            >
              <MessageSquare className="size-8 text-primary" />
              <span>
                <strong className="block text-base text-foreground">Direto via WhatsApp</strong>
                <span className="mt-1 block text-sm text-muted-foreground">Fale diretamente com a Dra. Shan.</span>
              </span>
            </a>
            <Button
              type="button"
              variant="outline"
              className="h-auto min-h-40 flex-col gap-4 p-6 text-center"
              onClick={() => setShowForm(true)}
            >
              <Send className="size-8 text-primary" />
              <span>
                <strong className="block text-base text-foreground">Através do site</strong>
                <span className="mt-1 block text-sm font-normal text-muted-foreground">Preencha o formulário de contato.</span>
              </span>
            </Button>
          </div>
        ) : (
          <>
            <div className="mx-auto w-full max-w-3xl">
              <Card className="border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-xl font-bold text-foreground">
                    Solicitar Contato Personalizado
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">
                    Preencha os campos abaixo para enviar uma mensagem detalhada diretamente para o WhatsApp da Dra. Shankefany:
                  </p>
                </CardHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-semibold">
                        Seu Nome Completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ex: Maria Santos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs font-semibold">
                        Telefone / WhatsApp
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Ex: (31) 98888-7777"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-xs font-semibold">
                      Motivo do Atendimento / Queixa Principal
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Ex: Dor na coluna lombar, pós-operatório de joelho, idoso..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-semibold">
                      Observações ou melhor horário para contato (Opcional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Conte um pouco sobre sua necessidade ou histórico de dores..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submit button */}
                  <Button type="submit" size="lg" className="w-full justify-center font-bold gap-2">
                    <Send className="size-4" />
                    <span>Enviar Solicitação via WhatsApp</span>
                  </Button>

                  <p className="text-center text-[11px] text-muted-foreground pt-1">
                    🔒 Seus dados serão utilizados unicamente para retorno do seu contato profissional.
                  </p>
                </form>
              </Card>
            </div>

          </>
        )}

      </div>
    </section>
  );
}
