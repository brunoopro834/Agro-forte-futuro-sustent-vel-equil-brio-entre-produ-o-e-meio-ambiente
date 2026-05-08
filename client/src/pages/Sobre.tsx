import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Heart, Target, Users, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function Sobre() {
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/sustainable-harvest-P53iCpd4qvSfwyHiWsxEpZ.webp"
            alt="Sobre Agro Forte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative container py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins'}}>
              Sobre Agro Forte
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Transformando a agricultura brasileira através da sustentabilidade, inovação e responsabilidade ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Nossa Missão",
                desc: "Promover a agricultura sustentável que equilibra produção agrícola com preservação ambiental, garantindo alimento de qualidade para gerações futuras."
              },
              {
                icon: Heart,
                title: "Nossa Visão",
                desc: "Ser referência global em soluções agrícolas sustentáveis, transformando propriedades em modelos de produção responsável e rentável."
              },
              {
                icon: Globe,
                title: "Nossos Valores",
                desc: "Sustentabilidade, inovação, responsabilidade social, transparência e excelência em tudo que fazemos."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-green p-6 rounded-full">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4" style={{fontFamily: 'Poppins'}}>{item.title}</h3>
                  <p className="text-foreground/70 text-lg">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-gradient-green">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center" style={{fontFamily: 'Poppins'}}>Nossa História</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg text-foreground/70">
              <p>
                Agro Forte nasceu da convicção de que é possível produzir alimentos em abundância sem comprometer o planeta. Fundada em 2015, nossa empresa começou como um pequeno projeto de consultoria ambiental para propriedades rurais.
              </p>
              <p>
                Ao longo dos anos, expandimos nossas operações e desenvolvemos soluções inovadoras que combinam tecnologia de ponta com práticas agrícolas sustentáveis. Hoje, trabalhamos com mais de 500 propriedades em todo o Brasil.
              </p>
              <p>
                Nossa equipe é composta por agrônomos, engenheiros, especialistas em sustentabilidade e tecnologia, todos dedicados a criar um futuro melhor para a agricultura brasileira.
              </p>
              <p>
                Acreditamos que o agro forte é aquele que cresce respeitando a natureza, gerando renda justa para os produtores e alimento de qualidade para a população.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary mb-6" style={{fontFamily: 'Poppins'}}>Quer Fazer Parte dessa Transformação?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Conheça nossas soluções e descubra como podemos ajudar sua propriedade a crescer de forma sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/solucoes")} className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3">
              Conheça Nossas Soluções
            </Button>
            <Button onClick={() => navigate("/contato")} variant="outline" className="text-lg px-8 py-3">
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
