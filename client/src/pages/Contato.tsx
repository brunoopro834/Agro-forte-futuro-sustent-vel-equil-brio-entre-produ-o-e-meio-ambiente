import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Contato() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    setTimeout(() => {
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-2xl font-bold text-primary" style={{fontFamily: 'Poppins'}}>Agro Forte</span>
          </div>
          <Button onClick={() => navigate("/")} variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-fields-sunrise-eJfGuuRcqQAprdhr5tnd8Q.webp"
            alt="Contato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative container py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins'}}>
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Estamos aqui para responder suas dúvidas e ajudar sua propriedade a crescer de forma sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-gradient-green">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "contato@agroforte.com.br"
              },
              {
                icon: Phone,
                title: "Telefone",
                info: "(67) 3333-3333"
              },
              {
                icon: MapPin,
                title: "Localização",
                info: "Mato Grosso do Sul, Brasil"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white p-4 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2" style={{fontFamily: 'Poppins'}}>{item.title}</h3>
                  <p className="text-foreground/70">{item.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center" style={{fontFamily: 'Poppins'}}>Envie uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(67) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Conte-nos sobre sua propriedade e como podemos ajudar..."
                ></textarea>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Button
                  type="submit"
                  className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </Button>
              </div>

              {enviado && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
