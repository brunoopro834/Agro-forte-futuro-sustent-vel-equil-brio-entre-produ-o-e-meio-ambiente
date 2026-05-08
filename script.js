// ============================================
// AGRO FORTE - JAVASCRIPT
// ============================================

// Páginas do site
const pages = {
    home: `
        <!-- Home já está no HTML principal -->
    `,
    solucoes: `
        <div class="page-container">
            <nav class="navbar">
                <div class="container navbar-content">
                    <div class="navbar-logo">
                        <span class="leaf-icon">🌿</span>
                        <span class="logo-text">Agro Forte</span>
                    </div>
                    <button class="btn btn-outline" onclick="navigateTo('home')" style="color: var(--primary); border-color: var(--primary);">← Voltar</button>
                </div>
            </nav>

            <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/technology-agro-JqizRRC8kQ3Ppn6nLmBNwX.webp');">
                <div class="hero-overlay"></div>
                <div class="container hero-content">
                    <h1 class="hero-title">Nossas Soluções Sustentáveis</h1>
                    <p class="hero-subtitle">Tecnologia, inovação e responsabilidade ambiental para transformar sua propriedade agrícola.</p>
                </div>
            </section>

            <section class="section-pilares" style="background: linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 100%);">
                <div class="container">
                    <div class="pilares-grid">
                        <div class="pilar-card">
                            <div class="pilar-icon">🚁</div>
                            <h3>Monitoramento com Drones</h3>
                            <p>Captura de dados em tempo real com câmeras multiespectrais para análise completa de suas culturas.</p>
                            <ul style="text-align: left; margin-top: 1rem; color: var(--gray-600);">
                                <li>✓ Resolução 4K</li>
                                <li>✓ Análise em tempo real</li>
                                <li>✓ Relatórios automáticos</li>
                            </ul>
                        </div>
                        <div class="pilar-card">
                            <div class="pilar-icon">💧</div>
                            <h3>Irrigação Inteligente</h3>
                            <p>Sistema de irrigação otimizado por IA que reduz consumo de água em até 60%.</p>
                            <ul style="text-align: left; margin-top: 1rem; color: var(--gray-600);">
                                <li>✓ Economia de água</li>
                                <li>✓ Sensores IoT</li>
                                <li>✓ Automação completa</li>
                            </ul>
                        </div>
                        <div class="pilar-card">
                            <div class="pilar-icon">📈</div>
                            <h3>Análise de Produtividade</h3>
                            <p>Previsões precisas de colheita e otimização de plantio com machine learning.</p>
                            <ul style="text-align: left; margin-top: 1rem; color: var(--gray-600);">
                                <li>✓ Previsões precisas</li>
                                <li>✓ Otimização de custos</li>
                                <li>✓ Aumento de rendimento</li>
                            </ul>
                        </div>
                        <div class="pilar-card">
                            <div class="pilar-icon">🌍</div>
                            <h3>Certificação Sustentável</h3>
                            <p>Processo completo de certificação ISO 14001, FSC e Rainforest Alliance.</p>
                            <ul style="text-align: left; margin-top: 1rem; color: var(--gray-600);">
                                <li>✓ Consultoria especializada</li>
                                <li>✓ Documentação completa</li>
                                <li>✓ Acesso a mercados premium</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-cta">
                <div class="container cta-content">
                    <h2 class="section-title" style="color: white;">Pronto para Transformar sua Propriedade?</h2>
                    <p>Entre em contato conosco para uma consultoria gratuita e descubra qual solução é ideal para seu negócio.</p>
                    <button class="btn btn-accent" onclick="navigateTo('contato')" style="margin-top: 1rem;">Solicitar Consultoria</button>
                </div>
            </section>

            <footer class="footer">
                <div class="container footer-content">
                    <div class="footer-section">
                        <h4>Agro Forte</h4>
                        <p>Transformando a agricultura brasileira através da sustentabilidade e inovação.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a onclick="navigateTo('sobre')">Sobre</a></li>
                            <li><a onclick="navigateTo('solucoes')">Soluções</a></li>
                            <li><a onclick="navigateTo('contato')">Contato</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contato</h4>
                        <p>📧 contato@agroforte.com.br</p>
                        <p>📱 (67) 3333-3333</p>
                        <p>📍 Mato Grosso do Sul, Brasil</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Agro Forte. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    `,
    sobre: `
        <div class="page-container">
            <nav class="navbar">
                <div class="container navbar-content">
                    <div class="navbar-logo">
                        <span class="leaf-icon">🌿</span>
                        <span class="logo-text">Agro Forte</span>
                    </div>
                    <button class="btn btn-outline" onclick="navigateTo('home')" style="color: var(--primary); border-color: var(--primary);">← Voltar</button>
                </div>
            </nav>

            <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/sustainable-harvest-P53iCpd4qvSfwyHiWsxEpZ.webp');">
                <div class="hero-overlay"></div>
                <div class="container hero-content">
                    <h1 class="hero-title">Sobre Agro Forte</h1>
                    <p class="hero-subtitle">Transformando a agricultura brasileira através da sustentabilidade, inovação e responsabilidade ambiental.</p>
                </div>
            </section>

            <section class="section-pilares">
                <div class="container">
                    <h2 class="section-title">Missão, Visão e Valores</h2>
                    <div class="pilares-grid">
                        <div class="pilar-card">
                            <div class="pilar-icon">🎯</div>
                            <h3>Nossa Missão</h3>
                            <p>Promover a agricultura sustentável que equilibra produção agrícola com preservação ambiental, garantindo alimento de qualidade para gerações futuras.</p>
                        </div>
                        <div class="pilar-card">
                            <div class="pilar-icon">💚</div>
                            <h3>Nossa Visão</h3>
                            <p>Ser referência global em soluções agrícolas sustentáveis, transformando propriedades em modelos de produção responsável e rentável.</p>
                        </div>
                        <div class="pilar-card">
                            <div class="pilar-icon">🌍</div>
                            <h3>Nossos Valores</h3>
                            <p>Sustentabilidade, inovação, responsabilidade social, transparência e excelência em tudo que fazemos.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-pilares" style="background: linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 100%);">
                <div class="container">
                    <h2 class="section-title">Nossa História</h2>
                    <div style="max-width: 42rem; margin: 0 auto; text-align: center; color: var(--gray-600); line-height: 1.8;">
                        <p style="margin-bottom: 1rem;">Agro Forte nasceu da convicção de que é possível produzir alimentos em abundância sem comprometer o planeta. Fundada em 2015, nossa empresa começou como um pequeno projeto de consultoria ambiental para propriedades rurais.</p>
                        <p style="margin-bottom: 1rem;">Ao longo dos anos, expandimos nossas operações e desenvolvemos soluções inovadoras que combinam tecnologia de ponta com práticas agrícolas sustentáveis. Hoje, trabalhamos com mais de 500 propriedades em todo o Brasil.</p>
                        <p style="margin-bottom: 1rem;">Nossa equipe é composta por agrônomos, engenheiros, especialistas em sustentabilidade e tecnologia, todos dedicados a criar um futuro melhor para a agricultura brasileira.</p>
                        <p>Acreditamos que o agro forte é aquele que cresce respeitando a natureza, gerando renda justa para os produtores e alimento de qualidade para a população.</p>
                    </div>
                </div>
            </section>

            <section class="section-cta">
                <div class="container cta-content">
                    <h2 class="section-title" style="color: white;">Quer Fazer Parte dessa Transformação?</h2>
                    <p>Conheça nossas soluções e descubra como podemos ajudar sua propriedade a crescer de forma sustentável.</p>
                    <div class="cta-buttons">
                        <button class="btn btn-accent" onclick="navigateTo('solucoes')">Conheça Nossas Soluções</button>
                        <button class="btn btn-outline" onclick="navigateTo('contato')">Entre em Contato</button>
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="container footer-content">
                    <div class="footer-section">
                        <h4>Agro Forte</h4>
                        <p>Transformando a agricultura brasileira através da sustentabilidade e inovação.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a onclick="navigateTo('sobre')">Sobre</a></li>
                            <li><a onclick="navigateTo('solucoes')">Soluções</a></li>
                            <li><a onclick="navigateTo('contato')">Contato</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contato</h4>
                        <p>📧 contato@agroforte.com.br</p>
                        <p>📱 (67) 3333-3333</p>
                        <p>📍 Mato Grosso do Sul, Brasil</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Agro Forte. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    `,
    contato: `
        <div class="page-container">
            <nav class="navbar">
                <div class="container navbar-content">
                    <div class="navbar-logo">
                        <span class="leaf-icon">🌿</span>
                        <span class="logo-text">Agro Forte</span>
                    </div>
                    <button class="btn btn-outline" onclick="navigateTo('home')" style="color: var(--primary); border-color: var(--primary);">← Voltar</button>
                </div>
            </nav>

            <section class="hero" style="background-image: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663136155245/TqdJCqKg8FHJd3QGcH5kXx/drone-fields-sunrise-eJfGuuRcqQAprdhr5tnd8Q.webp');">
                <div class="hero-overlay"></div>
                <div class="container hero-content">
                    <h1 class="hero-title">Entre em Contato</h1>
                    <p class="hero-subtitle">Estamos aqui para responder suas dúvidas e ajudar sua propriedade a crescer de forma sustentável.</p>
                </div>
            </section>

            <section class="section-stats">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number">📧</div>
                            <div class="stat-label">contato@agroforte.com.br</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">📱</div>
                            <div class="stat-label">(67) 3333-3333</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">📍</div>
                            <div class="stat-label">Mato Grosso do Sul, Brasil</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-pilares">
                <div class="container">
                    <h2 class="section-title">Envie uma Mensagem</h2>
                    <form id="contactForm" style="max-width: 42rem; margin: 0 auto;" onsubmit="handleFormSubmit(event)">
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;">Nome Completo</label>
                            <input type="text" name="nome" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 0.5rem; font-family: inherit;">
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                            <div>
                                <label style="display: block; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;">Email</label>
                                <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 0.5rem; font-family: inherit;">
                            </div>
                            <div>
                                <label style="display: block; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;">Telefone</label>
                                <input type="tel" name="telefone" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 0.5rem; font-family: inherit;">
                            </div>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;">Mensagem</label>
                            <textarea name="mensagem" required rows="6" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 0.5rem; font-family: inherit; resize: none;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar Mensagem</button>
                        <div id="formMessage" style="margin-top: 1rem; text-align: center; display: none; padding: 1rem; background: #E8F5E9; color: var(--primary); border-radius: 0.5rem;">
                            ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                        </div>
                    </form>
                </div>
            </section>

            <footer class="footer">
                <div class="container footer-content">
                    <div class="footer-section">
                        <h4>Agro Forte</h4>
                        <p>Transformando a agricultura brasileira através da sustentabilidade e inovação.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a onclick="navigateTo('sobre')">Sobre</a></li>
                            <li><a onclick="navigateTo('solucoes')">Soluções</a></li>
                            <li><a onclick="navigateTo('contato')">Contato</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contato</h4>
                        <p>📧 contato@agroforte.com.br</p>
                        <p>📱 (67) 3333-3333</p>
                        <p>📍 Mato Grosso do Sul, Brasil</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Agro Forte. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    `
};

// Função para navegar entre páginas
function navigateTo(page) {
    if (page === 'home') {
        // Recarrega a página principal
        window.location.hash = '';
        location.reload();
    } else {
        window.location.hash = page;
        renderPage(page);
    }
}

// Função para renderizar a página
function renderPage(page) {
    const container = document.getElementById('pagesContainer');
    
    if (pages[page]) {
        container.innerHTML = pages[page];
        container.style.display = 'block';
        
        // Esconde a home
        const homeContent = document.querySelector('nav, section, footer');
        if (homeContent && page !== 'home') {
            document.body.innerHTML = pages[page];
        }
        
        // Scroll para o topo
        window.scrollTo(0, 0);
    }
}

// Verificar hash ao carregar a página
window.addEventListener('hashchange', () => {
    const page = window.location.hash.slice(1) || 'home';
    if (page !== 'home') {
        renderPage(page);
    }
});

// Carregar página inicial se houver hash
window.addEventListener('load', () => {
    const page = window.location.hash.slice(1);
    if (page && page !== 'home') {
        renderPage(page);
    }
});

// Função para abrir modal de galeria
function openGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.add('active');
}

// Função para fechar modal de galeria
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora
window.addEventListener('click', (event) => {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeGalleryModal();
    }
});

// Função para toggle FAQ
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    // Fechar outros FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.faq-icon').forEach(item => {
        if (item !== icon) {
            item.classList.remove('active');
        }
    });
    
    // Toggle atual
    answer.classList.toggle('active');
    icon.classList.toggle('active');
}

// Função para enviar formulário
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Simular envio
    console.log('Formulário enviado:', {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        mensagem: formData.get('mensagem')
    });
    
    // Mostrar mensagem de sucesso
    const messageDiv = document.getElementById('formMessage');
    messageDiv.style.display = 'block';
    
    // Limpar formulário
    form.reset();
    
    // Esconder mensagem após 3 segundos
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('Agro Forte - Site carregado com sucesso!');
