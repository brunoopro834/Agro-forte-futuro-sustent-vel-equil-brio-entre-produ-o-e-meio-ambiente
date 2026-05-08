import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Droplets, TrendingUp, Zap, Users, Globe, Award, BookOpen, MessageCircle, CheckCircle, ArrowRight, Star, X } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modernismo Sustentável com Estética Verde Expandida
 * - Paleta verde enriquecida com gradientes e elementos decorativos
 * - Conteúdo expandido com casos de sucesso, blog, FAQ e certificações
 * - Animações suaves e efeitos visuais que reforçam o tema ambiental
 */

export default function Home() {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
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
          <div className="hidden md:flex items-center gap-8">
            <a href="#pilares" className="text-foreground hover:text-primary transition-colors underline-animated">Pilares</a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors underline-animated">Galeria</a>
            <a href="#tecnologia" className="text-foreground hover:text-primary transition-colors underline-animated">Tecnologia</a>
            <a href="#casos" className="text-foreground hover:text-primary transition-colors underline-animated">Casos</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors underline-animated">FAQ</a>
          </div>
          <Button onClick={() => navigate("/contato")} className="bg-accent text-accent-foreground hover:bg-opacity-90">Contato</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/hero-agro-forte-DKtdWZrENnKCFFYBwickGd.webp"
            alt="Campo verde sustentável"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative container py-32 md:py-48">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins'}}>
              Agro Forte, Futuro Sustentável
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Equilíbrio entre produção agrícola e preservação ambiental. Tecnologia, inovação e responsabilidade para alimentar o mundo sem comprometer o planeta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate("/sobre")} className="btn-primary text-lg">Explore Nossa Missão</Button>
              <Button onClick={() => navigate("/solucoes")} variant="outline" className="text-white border-white hover:bg-white/10 text-lg">
                Conheça as Soluções
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-green py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center fade-in-up">
              <div className="text-5xl font-bold text-primary mb-2" style={{fontFamily: 'Poppins'}}>8.5M</div>
              <p className="text-foreground/70 font-medium">Hectares de agricultura sustentável</p>
            </div>
            <div className="text-center fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-primary mb-2" style={{fontFamily: 'Poppins'}}>45%</div>
              <p className="text-foreground/70 font-medium">Redução de emissões de carbono</p>
            </div>
            <div className="text-center fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-primary mb-2" style={{fontFamily: 'Poppins'}}>2.3B</div>
              <p className="text-foreground/70 font-medium">Toneladas de alimentos produzidos</p>
            </div>
            <div className="text-center fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-primary mb-2" style={{fontFamily: 'Poppins'}}>92%</div>
              <p className="text-foreground/70 font-medium">Preservação de recursos naturais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section id="pilares" className="py-20 section-accent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" style={{fontFamily: 'Poppins'}}>Os Cinco Pilares da Sustentabilidade</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Construímos o futuro do agro sobre fundações sólidas de inovação, responsabilidade e equilíbrio ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Leaf, title: "Plantio Direto", desc: "Reduz erosão e melhora a qualidade do solo" },
              { icon: Droplets, title: "Gestão de Água", desc: "Irrigação inteligente e preservação de nascentes" },
              { icon: Zap, title: "Bioinsumos", desc: "Controle de pragas sem químicos prejudiciais" },
              { icon: TrendingUp, title: "Precisão Agrícola", desc: "Drones, sensores e GPS para máxima eficiência" },
              { icon: Globe, title: "ILPF", desc: "Integração Lavoura-Pecuária-Floresta" }
            ].map((pilar, idx) => (
              <Card key={idx} className="card-elevated text-center hover:scale-105 transition-transform duration-300 bg-white">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-green-accent p-4 rounded-full">
                    <pilar.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary" style={{fontFamily: 'Poppins'}}>{pilar.title}</h3>
                <p className="text-sm text-foreground/70">{pilar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Drones - Máquinas Agrícolas Section */}
      <section id="galeria" className="relative min-h-screen bg-black overflow-hidden">
        {/* Grid 2x2 com imagens em tela cheia */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0">
          {[
            {
              img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-tractor-plowing-juastFJ9krtX2YQFscs7NH.webp",
              title: "Trator em Ação",
              desc: "Preparação de solo com precisão"
            },
            {
              img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-harvester-working-22b5AUosUwyK9r58d4xUkS.webp",
              title: "Colheitadeira em Operação",
              desc: "Colheita eficiente e sustentável"
            },
            {
              img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-sprayer-application-ndQJDDFcHbWtidedFP7pyG.webp",
              title: "Pulverizador Inteligente",
              desc: "Aplicação de bioinsumos com precisão"
            },
            {
              img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-machinery-fleet-gowmud5JTZKrXvd8ytoJhj.webp",
              title: "Frota de Máquinas",
              desc: "Operações integradas e coordenadas"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden h-full w-full cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3" style={{fontFamily: 'Poppins'}}>{item.title}</h3>
                <p className="text-lg text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay com informações centralizadas */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white z-10 pointer-events-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Poppins'}}>Máquinas Agrícolas em Ação</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">Veja a tecnologia e a precisão das máquinas modernas trabalhando em harmonia com a natureza</p>
            <Button onClick={() => setShowGalleryModal(true)} className="bg-accent text-accent-foreground hover:bg-opacity-90 text-lg px-8 py-3">Explorar Galeria Completa</Button>
          </div>
        </div>
      </section>

      {/* Modal de Galeria Completa */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-6xl w-full my-8">
            <div className="sticky top-0 flex items-center justify-between p-6 bg-gradient-green border-b">
              <h2 className="text-3xl font-bold text-primary" style={{fontFamily: 'Poppins'}}>Galeria Completa de Máquinas Agrícolas</h2>
              <button onClick={() => setShowGalleryModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition">
                <X className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-tractor-plowing-juastFJ9krtX2YQFscs7NH.webp", title: "Trator em Ação" },
                  { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-harvester-working-22b5AUosUwyK9r58d4xUkS.webp", title: "Colheitadeira" },
                  { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-sprayer-application-ndQJDDFcHbWtidedFP7pyG.webp", title: "Pulverizador" },
                  { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-machinery-fleet-gowmud5JTZKrXvd8ytoJhj.webp", title: "Frota de Máquinas" },
                  { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-fields-sunrise-eJfGuuRcqQAprdhr5tnd8Q.webp", title: "Campos ao Amanhecer" },
                  { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/hero-agro-forte-DKtdWZrENnKCFFYBwickGd.webp", title: "Paisagem Integrada" }
                ].map((item, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-48">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-lg font-bold text-white" style={{fontFamily: 'Poppins'}}>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tecnologia Section */}
      <section id="tecnologia" className="py-20 relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/technology-agro-JqizRRC8kQ3Ppn6nLmBNwX.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6" style={{fontFamily: 'Poppins'}}>Tecnologia a Serviço da Sustentabilidade</h2>
            <p className="text-lg text-gray-100 mb-6">
              A inovação tecnológica é fundamental para conciliar produtividade agrícola com preservação ambiental. Utilizamos ferramentas avançadas para monitorar, otimizar e proteger nossos recursos.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { title: "Drones de Monitoramento", desc: "Captura de dados em tempo real para análise de saúde das culturas" },
                { title: "Sensores IoT", desc: "Monitoramento contínuo de umidade, temperatura e nutrientes" },
                { title: "IA e Machine Learning", desc: "Previsões precisas para otimizar plantio e colheita" }
              ].map((tech, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-2 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white" style={{fontFamily: 'Poppins'}}>{tech.title}</h4>
                    <p className="text-sm text-gray-200">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button onClick={() => navigate("/solucoes")} className="bg-accent text-accent-foreground hover:bg-opacity-90">Conheça Nossas Soluções</Button>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso Section */}
      <section id="casos" className="py-20 section-accent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" style={{fontFamily: 'Poppins'}}>Casos de Sucesso</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Conheça histórias reais de agricultores que transformaram suas propriedades com práticas sustentáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Fazenda Verde Brasil", 
                location: "Mato Grosso do Sul",
                result: "+40% produtividade",
                desc: "Implementação de ILPF aumentou produção e preservou 500 hectares de floresta nativa."
              },
              { 
                title: "Sítio Sustentável do Vale", 
                location: "São Paulo",
                result: "-60% uso de água",
                desc: "Sistema de irrigação inteligente reduziu consumo de água mantendo produtividade."
              },
              { 
                title: "Cooperativa Agro Forte", 
                location: "Paraná",
                result: "+35% renda",
                desc: "Certificação de sustentabilidade abriu novos mercados premium para produtos."
              }
            ].map((caso, idx) => (
              <Card key={idx} className="card-green-accent bg-white hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1" style={{fontFamily: 'Poppins'}}>{caso.title}</h3>
                    <p className="text-sm text-foreground/60">{caso.location}</p>
                  </div>
                  <Award className="w-8 h-8 text-accent flex-shrink-0" />
                </div>
                <div className="bg-gradient-green p-3 rounded-lg mb-4">
                  <p className="text-sm font-bold text-primary text-center">{caso.result}</p>
                </div>
                <p className="text-foreground/70">{caso.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solo e Biodiversidade Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/soil-conservation-MQMSnUZiwX3cPW8mxWvoBv.webp"
                alt="Solo saudável e biodiversidade"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6" style={{fontFamily: 'Poppins'}}>Solo Saudável, Planeta Próspero</h2>
              <p className="text-lg text-foreground/70 mb-6">
                O solo é a base da vida. Práticas de conservação garantem que gerações futuras tenham acesso a terras férteis e produtivas.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Estrutura do Solo", desc: "Mantemos a integridade física do solo para melhor infiltração de água." },
                  { title: "Biodiversidade Microbiana", desc: "Promovemos ecossistemas de solo ricos em microrganismos benéficos." },
                  { title: "Sequestro de Carbono", desc: "Solos bem manejados armazenam carbono e mitigam mudanças climáticas." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-green p-4 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-primary mb-2" style={{fontFamily: 'Poppins'}}>{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solo Saudável Section */}
      <section className="py-20 relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/soil-conservation-qH3pNXqJKXvHbkJqPvLxeS.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6" style={{fontFamily: 'Poppins'}}>Solo Saudável, Planeta Próspero</h2>
            <p className="text-lg text-gray-100 mb-6">
              O solo é a base da vida. Práticas de conservação garantem que gerações futuras tenham acesso a terras férteis e produtivas.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Estrutura do Solo", desc: "Mantemos a integridade física do solo para melhor infiltração de água." },
                { title: "Biodiversidade Microbiana", desc: "Promovemos ecossistemas de solo ricos em microrganismos benéficos." },
                { title: "Sequestro de Carbono", desc: "Solos bem manejados armazenam carbono e mitigam mudanças climáticas." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 p-4 rounded-lg border-l-4 border-white">
                  <h4 className="font-semibold text-white mb-2" style={{fontFamily: 'Poppins'}}>{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preservação Florestal Section */}
      <section className="py-20 relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/forest-preservation-7kSWLnDDs83srmd2ekqzKw.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6" style={{fontFamily: 'Poppins'}}>Preservação Florestal e Biodiversidade</h2>
            <p className="text-lg text-gray-100 mb-6">
              A agricultura sustentável coexiste com florestas nativas. Preservamos ecossistemas, protegemos espécies e mantemos o equilíbrio ambiental.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Corredores Ecológicos", desc: "Conectamos áreas de floresta para circulação de fauna e flora." },
                { title: "Proteção de Nascentes", desc: "Garantimos que fontes de água permaneçam limpas e abundantes." },
                { title: "Reflorestamento Estratégico", desc: "Plantamos espécies nativas para restaurar ecossistemas degradados." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3 mt-1">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1" style={{fontFamily: 'Poppins'}}>{item.title}</h4>
                    <p className="text-sm text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificações Section */}
      <section className="py-20 relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-machinery-fleet-gowmud5JTZKrXvd8ytoJhj.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" style={{fontFamily: 'Poppins'}}>Certificações e Reconhecimentos</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Nossos compromissos com a sustentabilidade são validados por organismos internacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌍", title: "ISO 14001", desc: "Gestão Ambiental" },
              { icon: "✓", title: "FSC Certificado", desc: "Floresta Sustentável" },
              { icon: "⭐", title: "Rainforest Alliance", desc: "Agricultura Responsável" },
              { icon: "🏆", title: "B Corp Certified", desc: "Negócio de Impacto" }
            ].map((cert, idx) => (
              <div key={idx} className="text-center p-6 bg-white/10 rounded-lg border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Poppins'}}>{cert.title}</h3>
                <p className="text-sm text-gray-200">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Recursos Section */}
      <section className="py-20 relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-fields-sunrise-eJfGuuRcqQAprdhr5tnd8Q.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" style={{fontFamily: 'Poppins'}}>Recursos e Artigos</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Conheça mais sobre práticas sustentáveis e inovações no agro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Guia Completo: Plantio Direto", date: "15 de Abril, 2026", reads: "1.2K" },
              { title: "Tecnologia IoT na Agricultura", date: "10 de Abril, 2026", reads: "2.5K" },
              { title: "Impacto da ILPF no Carbono", date: "05 de Abril, 2026", reads: "890" }
            ].map((article, idx) => (
              <Card key={idx} className="card-elevated bg-white/10 border border-white/20 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                  <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors" style={{fontFamily: 'Poppins'}}>{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{article.date}</span>
                  <span>{article.reads} leituras</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-river-landscape-2QrHKcFYHjKNwLJGEJLZvV.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Poppins'}}>Perguntas Frequentes</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Tire suas dúvidas sobre agricultura sustentável e nossas soluções.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Como começar a implementar práticas sustentáveis?", a: "Começe com uma consultoria gratuita. Nossos especialistas analisarão sua propriedade e recomendarão as melhores práticas para seu contexto específico." },
              { q: "Qual é o retorno financeiro da agricultura sustentável?", a: "Estudos mostram que propriedades sustentáveis têm 30-50% mais rentabilidade a longo prazo, além de acesso a mercados premium." },
              { q: "Quanto tempo leva para ver resultados?", a: "Os primeiros resultados aparecem em 6-12 meses. A transformação completa leva 2-3 anos, mas o processo é contínuo." },
              { q: "Quais certificações são mais importantes?", a: "ISO 14001, FSC e Rainforest Alliance são as mais reconhecidas internacionalmente e abrem portas para mercados premium." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/10 p-8 rounded-lg border-l-4 border-white hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Poppins'}}>{faq.q}</h4>
                    <p className="text-lg text-gray-200">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunidade Section */}
      <section className="py-20 section-accent">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/sustainable-harvest-P53iCpd4qvSfwyHiWsxEpZ.webp"
                alt="Comunidade agrícola sustentável"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6" style={{fontFamily: 'Poppins'}}>Pessoas no Centro do Futuro</h2>
              <p className="text-lg text-foreground/70 mb-6">
                A sustentabilidade não é apenas ambiental, é também social e econômica. Apoiamos agricultores, comunidades e gerações futuras.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Users, title: "Educação e Capacitação", desc: "Treinamos agricultores em práticas sustentáveis e tecnologias modernas." },
                  { icon: TrendingUp, title: "Renda Justa", desc: "Garantimos preços justos e mercados estáveis para produtores sustentáveis." },
                  { icon: Star, title: "Qualidade de Vida", desc: "Promovemos bem-estar nas comunidades rurais através de programas sociais." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-gradient-green-accent rounded-full p-2 mt-1">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary" style={{fontFamily: 'Poppins'}}>{item.title}</h4>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button onClick={() => navigate("/contato")} className="btn-primary">Junte-se ao Movimento</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-green-dark text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'Poppins'}}>O Futuro do Agro é Sustentável</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Juntos, podemos criar um modelo agrícola que alimenta o mundo, preserva o planeta e prospera economicamente. Comece sua transformação hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/contato")} className="bg-accent text-accent-foreground hover:bg-opacity-90 text-lg px-8 py-3">
              Comece Agora
            </Button>
            <Button onClick={() => navigate("/sobre")} variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-3">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span className="font-bold text-lg" style={{fontFamily: 'Poppins'}}>Agro Forte</span>
              </div>
              <p className="text-sm opacity-70">Futuro Sustentável: Equilíbrio entre Produção e Meio Ambiente. Transformando o agro brasileiro.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{fontFamily: 'Poppins'}}>Sobre</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition">Nossa Missão</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Valores</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Equipe</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{fontFamily: 'Poppins'}}>Soluções</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition">Tecnologia</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Consultoria</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Certificação</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Treinamento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{fontFamily: 'Poppins'}}>Contato</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>📧 info@agroforte.com.br</li>
                <li>📱 +55 (11) 3000-0000</li>
                <li>📍 São Paulo, Brasil</li>
                <li>🌐 www.agroforte.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2026 Agro Forte. Todos os direitos reservados. | Sustentabilidade para o Futuro</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
