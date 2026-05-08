import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Zap, Droplets, TrendingUp, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function Solucoes() {
  const [, navigate] = useLocation();

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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/technology-agro-JqizRRC8kQ3Ppn6nLmBNwX.webp"
            alt="Nossas Soluções"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative container py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins'}}>
              Nossas Soluções Sustentáveis
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Tecnologia, inovação e responsabilidade ambiental para transformar sua propriedade agrícola.
            </p>
          </div>
        </div>
      </section>

      {/* Soluções Grid */}
      <section className="py-20 bg-gradient-green">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Zap,
                title: "Monitoramento com Drones",
                desc: "Captura de dados em tempo real com câmeras multiespectrais para análise completa de suas culturas.",
                details: ["Resolução 4K", "Análise em tempo real", "Relatórios automáticos"]
              },
              {
                icon: Droplets,
                title: "Irrigação Inteligente",
                desc: "Sistema de irrigação otimizado por IA que reduz consumo de água em até 60%.",
                details: ["Economia de água", "Sensores IoT", "Automação completa"]
              },
              {
                icon: TrendingUp,
                title: "Análise de Produtividade",
                desc: "Previsões precisas de colheita e otimização de plantio com machine learning.",
                details: ["Previsões precisas", "Otimização de custos", "Aumento de rendimento"]
              },
              {
                icon: Globe,
                title: "Certificação Sustentável",
                desc: "Processo completo de certificação ISO 14001, FSC e Rainforest Alliance.",
                details: ["Consultoria especializada", "Documentação completa", "Acesso a mercados premium"]
              }
            ].map((solucao, idx) => {
              const Icon = solucao.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary" style={{fontFamily: 'Poppins'}}>{solucao.title}</h3>
                  </div>
                  <p className="text-foreground/70 mb-6">{solucao.desc}</p>
                  <ul className="space-y-2">
                    {solucao.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/60">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary mb-6" style={{fontFamily: 'Poppins'}}>Pronto para Transformar sua Propriedade?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consultoria gratuita e descubra qual solução é ideal para seu negócio.
          </p>
          <Button onClick={() => navigate("/contato")} className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3">
            Solicitar Consultoria
          </Button>
        </div>
      </section>
    </div>
  );
}
