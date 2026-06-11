// === 0. FIX DE SCROLL (Sempre carregar no topo) ===
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        // === 1. MOUSE GLOW BACKGROUND AESTHETIC ===
        const mouseGlow = document.querySelector('.ia-mouse-glow');
        if (mouseGlow && window.innerWidth > 768) {
            document.addEventListener('mousemove', (e) => {
                mouseGlow.style.left = e.clientX + 'px';
                mouseGlow.style.top = e.clientY + 'px';
                mouseGlow.style.opacity = '1';
            });
            document.addEventListener('mouseleave', () => {
                mouseGlow.style.opacity = '0';
            });
        }

        // === 2. DADOS DOS SERVIÇOS ===
        // ═══ CONFIGURAÇÃO DE PREÇOS (mude aqui e reflete em todo o site) ═══
        const PRECOS = {
            modelos: { clean: 30, gradient: 30, glass: 30, sunset: 30, neon: 50, aurora: 70, obsidian: 120, personalizado: 120 },
            planos: { essencial: 75, profissional: 230, permanente: 400 },
            mensais: { essencial: 15, profissional: 45 },
            extras: { painelAdmin: 300 },
            regras: { entradaMinima: 150 },
            linktreePro: 29 // mensal (comparativo)
        };
        // ═══ FIM DA CONFIGURAÇÃO ═══

        const servicesData = [
            {
                id: 'biolink',
                category: 'biolink',
                title: 'Bio Link Instagram',
                badge: '✨ Modelos prontos',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>',
                shortDesc: 'Centralize todos os seus links em uma página profissional. Mais barato que o Linktree Pro.',
                fullDesc: 'Uma página única com todos os seus links importantes (WhatsApp, loja, redes sociais, etc). Perfeito para colocar na bio do Instagram e facilitar o acesso dos seus seguidores.',
                hasModels: true,
                iconBg: 'from-pink-100 to-rose-100',
                iconColor: 'text-rose-600'
            },
            {
                id: 'portfolio',
                category: 'web',
                title: 'Portfólio Digital',
                badge: null,
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>',
                shortDesc: 'Seu portfólio em formato de site — disponível 24h, com link para compartilhar.',
                fullDesc: 'Um site personalizado para apresentar seus trabalhos, projetos, habilidades e experiências de forma profissional e interativa. Diferente de um PDF, Canva, PowerPoint ou Google Apresentações, um site portfólio fica disponível 24h por dia com link próprio para compartilhar, se atualiza em tempo real e causa muito mais impacto em clientes e recrutadores. E se preferir, também posso entregar seu portfólio nesses outros formatos — PDF, Canva, PowerPoint ou Google Apresentações — basta me contar o que faz mais sentido para você. Ideal para fotógrafos, designers, artistas, freelancers, profissionais liberais e qualquer pessoa que queira se destacar.',
                hasModels: false,
                iconBg: 'from-violet-100 to-purple-100',
                iconColor: 'text-violet-600'
            },
            {
                id: 'institucional',
                category: 'web',
                title: 'Site Institucional',
                badge: null,
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>',
                shortDesc: 'Estabeleça presença digital sólida para sua empresa ou marca.',
                fullDesc: 'Presença digital completa para sua empresa ou negócio. Inclui páginas como Sobre, Serviços, Contato e o que mais precisar. Um painel administrativo (área de login para você editar textos, fotos e informações sozinho) pode ser incluído conforme a necessidade do projeto.',
                hasModels: false,
                iconBg: 'from-blue-100 to-indigo-100',
                iconColor: 'text-blue-600'
            },
            {
                id: 'forms',
                category: 'setup',
                title: 'Formulários Inteligentes',
                badge: '📋 Apps Script',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
                shortDesc: 'Receba pedidos, cadastros e inscrições organizados automaticamente.',
                fullDesc: 'Formulários personalizados feitos direto no Google Apps Script, com os dados salvos na sua planilha Google. Você recebe o formulário pronto e a planilha — sem custo de hospedagem.',
                hasModels: false,
                iconBg: 'from-emerald-100 to-green-100',
                iconColor: 'text-emerald-600'
            },
            {
                id: 'sistemas',
                category: 'web',
                title: 'Sistemas de Gestão',
                badge: null,
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',
                shortDesc: 'Dashboards e controles personalizados para seu negócio.',
                fullDesc: 'Dashboards e sistemas sob medida para controlar seu negócio: vendas, estoque, atendimentos, tarefas e muito mais. A área administrativa com login e controle total já faz parte do projeto.',
                hasModels: false,
                iconBg: 'from-orange-100 to-amber-100',
                iconColor: 'text-orange-600'
            },

            {
                id: 'planilhas',
                category: 'setup',
                title: 'Planilhas Automatizadas',
                badge: '📊 Produtividade',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
                shortDesc: 'Planilhas no Excel ou Google Sheets — para projetos acadêmicos, empresariais e muito mais.',
                fullDesc: 'Criação de planilhas profissionais no Excel ou Google Sheets para qualquer necessidade: projetos acadêmicos, controle financeiro, gestão de estoque, relatórios empresariais, cadastros e muito mais. Desenvolvo desde planilhas simples com fórmulas organizadas até soluções completas com dashboards, automações via Google Apps Script e integração com outras ferramentas do Google. O objetivo é eliminar trabalho manual repetitivo e deixar tudo organizado, fácil de usar e pronto para o dia a dia.',
                hasModels: false,
                iconBg: 'from-emerald-100 to-teal-100',
                iconColor: 'text-teal-600'
            },
            {
                id: 'frontend',
                category: 'setup',
                title: 'Desenvolvimento Front-end',
                badge: '💻 Design to Code',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>',
                shortDesc: 'Transformo seu design (Figma/Adobe XD) em site ou desenvolvo sua ideia do zero.',
                fullDesc: 'Você entrega o design no Figma, Adobe XD ou outra ferramenta e eu transformo em código perfeito — HTML/CSS/JS limpo, rápido e responsivo. Também pego sua ideia e desenvolvo do zero, ou melhoro um projeto que já existe. Se o projeto precisar de uma área administrativa (login para editar conteúdo), o valor será incluído no orçamento.',
                hasModels: false,
                iconBg: 'from-sky-100 to-cyan-100',
                iconColor: 'text-cyan-600'
            },
            {
                id: 'apresentacoes',
                category: 'setup',
                title: 'Slides & Apresentações',
                badge: '🎯 Novo',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>',
                shortDesc: 'Slides profissionais para trabalhos, pitches e apresentações — no formato que preferir.',
                fullDesc: 'Criação de apresentações profissionais para qualquer contexto: trabalhos acadêmicos, apresentações empresariais, pitches de negócio, relatórios institucionais e muito mais. Entrego no formato que fizer mais sentido para você — Canva, PowerPoint, Google Apresentações, PDF ou Docs. E se quiser algo que realmente impressione, também desenvolvo sua apresentação como um site interativo: animações, navegação por clique, acesso por link e visual único que nenhum slide comum consegue entregar.',
                hasModels: false,
                iconBg: 'from-fuchsia-100 to-pink-100',
                iconColor: 'text-fuchsia-600'
            },
            
            {
                id: 'custom',
                category: 'custom',
                title: 'Projeto Personalizado',
                badge: null,
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>',
                shortDesc: 'Tem uma ideia diferente? Vamos conversar sobre ela.',
                fullDesc: 'Tem uma ideia diferente? Conte-me sobre ela e vamos encontrar a melhor solução juntos.',
                hasModels: false,
                isDashed: true
            }
        ];

        // RENDERIZAR SERVIÇOS NA TELA
        const servicesGrid = document.getElementById('services-grid');
        if (servicesGrid) {
            servicesData.forEach((s, index) => {
                const isCustom = s.isDashed;
                const cardClasses = isCustom ? 'border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-white hover:border-brand-400' : 'bg-white border border-gray-100 hover:border-brand-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]';
                
                const badgeHtml = s.badge ? `<span class="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">${s.badge}</span>` : '';
                
                const iconBgClass = isCustom ? 'bg-gray-100 group-hover:bg-brand-100' : `bg-gradient-to-br ${s.iconBg}`;
                const iconColorClass = isCustom ? 'text-gray-400 group-hover:text-brand-600' : s.iconColor;

                servicesGrid.innerHTML += `
                    <div class="card-hover ${cardClasses} rounded-2xl p-6 relative cursor-pointer fade-in-element group" style="animation-delay: ${index * 0.1}s" onclick="openModal('${s.id}')" onkeydown="if(event.key==='Enter')openModal('${s.id}')" role="button" tabindex="0" aria-label="Ver detalhes de ${s.title}">
                        ${badgeHtml}
                        <div class="w-14 h-14 rounded-2xl ${iconBgClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg class="w-7 h-7 ${iconColorClass} transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">${s.icon}</svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${s.title}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed mb-4">${s.shortDesc}</p>
                        <div class="mt-5 flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            Selecionar <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                `;
            });
        }

        // === 3. LÓGICA DO MODAL DE ORÇAMENTO ===
        const modal = document.getElementById('orcamento-modal');
        const modalContainer = document.getElementById('modal-container');
        const btnWa = document.getElementById('btn-whatsapp');
        const btnWaText = document.getElementById('btn-whatsapp-text');
        
        let currentState = {
            service: null,
            model: null,
            plan: null,
            addon: false
        };

        function openModal(serviceId) {
            const service = servicesData.find(s => s.id === serviceId);
            currentState.service = service;
            currentState.model = null;
            currentState.plan = null;
            currentState.addon = false;

            // Fechar detalhes abertos dos planos
            document.querySelectorAll('#modal-scroll-area details[open]').forEach(function(d) {
                d.removeAttribute('open');
            });

            // Resetar toggles de período para semestral
            document.querySelectorAll('.plan-card[data-periodo]').forEach(function(card) {
                var planId = card.getAttribute('data-id');
                if (planId === 'essencial' || planId === 'profissional') {
                    togglePeriodo(planId, 'semestral');
                }
            });

            // Preencher header
            document.getElementById('modal-title').textContent = service.title;
            document.getElementById('modal-desc').textContent = service.fullDesc;

            // Mostrar/Esconder Passo 1 e ajustar aviso de valores
            const stepModels = document.getElementById('step-models');
            const stepPlans = document.getElementById('step-plans');
            const plansStandard = document.getElementById('plans-standard');
            const plansSetup = document.getElementById('plans-setup');
            const plansInstitucional = document.getElementById('plans-institucional');
            const warningText = document.getElementById('modal-warning-text');
            const greenText = document.getElementById('modal-green-text');
            const biolinkComparison = document.getElementById('biolink-comparison');

            if(service.category === 'custom') {
                stepModels.classList.add('hidden');
                stepPlans.classList.add('hidden');
                if (plansInstitucional) plansInstitucional.classList.add('hidden');
                if(greenText) {
                    greenText.innerHTML = '<strong>Sem compromisso</strong> - Me conte sua ideia e respondo em até 24h com uma proposta personalizada.';
                }
                if(warningText) {
                    warningText.innerHTML = '<strong>Serviço Personalizado</strong> - Vamos conversar sobre sua ideia e desenhar a melhor solução juntos.';
                }
                if(biolinkComparison) biolinkComparison.classList.add('hidden');
                const addonPanel = document.getElementById('addon-panel');
                if(addonPanel) addonPanel.classList.add('hidden');
            } else if(service.category === 'setup') {
                stepModels.classList.add('hidden');
                stepPlans.classList.remove('hidden');
                plansStandard.classList.add('hidden');
                plansSetup.classList.remove('hidden');
                if (plansInstitucional) plansInstitucional.classList.add('hidden');
                document.getElementById('numero-passo').textContent = '1';
                currentState.plan = 'unico';
                if(greenText) {
                    greenText.innerHTML = '<strong>Resposta rápida</strong> - Envie sua solicitação e receba uma proposta detalhada em até 24h.';
                }
                if(warningText) {
                    warningText.innerHTML = '<strong>Serviço Pontual</strong> - Pagamento único focado na entrega do resultado. Sem mensalidades de hospedagem.';
                }
                if(biolinkComparison) biolinkComparison.classList.add('hidden');
                const addonPanel2 = document.getElementById('addon-panel');
                if(addonPanel2) addonPanel2.classList.add('hidden');
            } else if(service.hasModels) {
                stepModels.classList.remove('hidden');
                stepPlans.classList.remove('hidden');
                plansStandard.classList.remove('hidden');
                plansSetup.classList.add('hidden');
                if (plansInstitucional) plansInstitucional.classList.add('hidden');
                document.getElementById('numero-passo').textContent = '2';
                if(greenText) {
                    greenText.innerHTML = '<strong>Apenas para orçamento</strong> - Você não está assumindo nenhum compromisso. Vamos conversar primeiro para entender sua necessidade.';
                }
                if(warningText) {
                    warningText.innerHTML = '<strong>Sobre os valores</strong> - Os modelos de Bio Link possuem valor fixo. O investimento total será a soma do modelo escolhido com o plano de entrega selecionado abaixo.';
                }
                if(biolinkComparison) biolinkComparison.classList.remove('hidden');
                const addonPanel = document.getElementById('addon-panel');
                if(addonPanel) addonPanel.classList.remove('hidden');
                resetAddonUI();
            } else if (service.id === 'institucional') {
                stepModels.classList.add('hidden');
                stepPlans.classList.remove('hidden');
                plansStandard.classList.add('hidden');
                plansSetup.classList.add('hidden');
                if (plansInstitucional) plansInstitucional.classList.remove('hidden');
                document.getElementById('numero-passo').textContent = '1';
                if (greenText) {
                    greenText.innerHTML = '<strong>Apenas para orçamento</strong> - Você não está assumindo nenhum compromisso. Vamos conversar primeiro para entender sua necessidade.';
                }
                if (warningText) {
                    warningText.innerHTML = '<strong>Sobre os valores</strong> - Os valores abaixo são referentes ao plano de hospedagem e entrega. O serviço de desenvolvimento é orçado separadamente conforme a complexidade do projeto.';
                }
                if (biolinkComparison) biolinkComparison.classList.add('hidden');
                const addonPanel4 = document.getElementById('addon-panel');
                if (addonPanel4) addonPanel4.classList.add('hidden');
            } else {
                stepModels.classList.add('hidden');
                stepPlans.classList.remove('hidden');
                plansStandard.classList.remove('hidden');
                plansSetup.classList.add('hidden');
                if (plansInstitucional) plansInstitucional.classList.add('hidden');
                document.getElementById('numero-passo').textContent = '1';
                if(greenText) {
                    greenText.innerHTML = '<strong>Apenas para orçamento</strong> - Você não está assumindo nenhum compromisso. Vamos conversar primeiro para entender sua necessidade.';
                }
                if(warningText) {
                    warningText.innerHTML = '<strong>Sobre os valores</strong> - Os valores abaixo são referentes ao plano de hospedagem e entrega. O serviço de desenvolvimento é orçado separadamente conforme a complexidade do projeto.';
                }
                if(biolinkComparison) biolinkComparison.classList.add('hidden');
                const addonPanel3 = document.getElementById('addon-panel');
                if(addonPanel3) {
                    if (service.id === 'portfolio') {
                        addonPanel3.classList.remove('hidden');
                        resetAddonUI();
                    } else {
                        addonPanel3.classList.add('hidden');
                    }
                }
            }

            // Atualiza UI para limpar estados anteriores de forma fluida
            updateSelectionUI();
            updateBtnWa();

            // Animação de entrada
            if (modal) {
                modal.classList.remove('hidden');
                // Scroll pro topo DEPOIS do modal ficar visível
                const scrollArea = document.getElementById('modal-scroll-area');
                if (scrollArea) scrollArea.scrollTop = 0;
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    if (modalContainer) modalContainer.classList.remove('scale-95');
                }, 10);
            }
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }

        function closeModal() {
            if (modal) modal.classList.add('opacity-0');
            if (modalContainer) modalContainer.classList.add('scale-95');
            setTimeout(() => {
                if (modal) modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
            }, 300);
        }

        document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const zoomModal = document.getElementById('zoom-modal');
                if (zoomModal && !zoomModal.classList.contains('hidden')) {
                    closeZoom();
                } else if (testerModal && !testerModal.classList.contains('hidden')) {
                    closeTester(false);
                } else if (pfModal && !pfModal.classList.contains('hidden')) {
                    closePortfolioModal();
                } else if (modal && !modal.classList.contains('hidden')) {
                    closeModal();
                }
            }
        });

        // Zoom global: continua rastreando o mouse mesmo fora da área da imagem
        document.addEventListener('mousemove', (e) => {
            if (!_activeZoomContainer) return;
            const level = getZoomLevel(_activeZoomContainer);
            if (level === 0) { _activeZoomContainer = null; return; }
            const img = _activeZoomContainer.querySelector('img.zoom-ready');
            const cursor = _activeZoomContainer.querySelector('.zoom-cursor');
            if (!img) return;
            const rect = _activeZoomContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // Clamp: o zoom não passa das bordas da imagem
            const pctX = Math.max(0, Math.min(100, (x / rect.width) * 100));
            const pctY = Math.max(0, Math.min(100, (y / rect.height) * 100));
            img.style.transformOrigin = `${pctX}% ${pctY}%`;
            if (cursor) {
                const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
                if (inside) {
                    cursor.style.left = `${x}px`;
                    cursor.style.top = `${y}px`;
                    cursor.style.opacity = '1';
                } else {
                    cursor.style.opacity = '0';
                }
            }
        });

        // Lógica Fluida de Seleção (Substituição Inteligente de Classes)
        function updateSelectionUI() {
            // Modelos
            document.querySelectorAll('.model-card').forEach(card => {
                const id = card.dataset.id;
                const isSelected = currentState.model === id;
                
                if (isSelected) {
                    card.classList.remove('border-gray-200', 'border-gray-300', 'hover:border-brand-300', 'hover:border-brand-400', 'hover:shadow-xl', 'z-0');
                    card.classList.add('border-brand-500', 'shadow-[0_12px_40px_-12px_rgba(0,119,230,0.4)]', 'scale-[1.03]', 'z-10');
                } else {
                    card.classList.remove('border-brand-500', 'shadow-[0_12px_40px_-12px_rgba(0,119,230,0.4)]', 'scale-[1.03]', 'z-10');
                    card.classList.add('hover:shadow-xl', 'z-0');
                    card.classList.add('border-gray-200', 'hover:border-brand-300');
                }
            });

            // Planos
            document.querySelectorAll('.plan-card').forEach(card => {
                const id = card.dataset.id;
                const isSelected = currentState.plan === id;
                const title = card.querySelector('.plan-title');

                if (isSelected) {
                    card.classList.remove('border-gray-200', 'hover:border-brand-300', 'hover:shadow-lg', 'z-0');
                    card.classList.add('border-brand-500', 'shadow-[0_12px_40px_-12px_rgba(0,119,230,0.4)]', 'scale-[1.02]', 'z-10');
                    if(title) title.classList.replace('text-gray-900', 'text-brand-600');
                } else {
                    card.classList.remove('border-brand-500', 'shadow-[0_12px_40px_-12px_rgba(0,119,230,0.4)]', 'scale-[1.02]', 'z-10');
                    card.classList.add('border-gray-200', 'hover:border-brand-300', 'hover:shadow-lg', 'z-0');
                    if(title) title.classList.replace('text-brand-600', 'text-gray-900');
                }
            });
        }

        // Eventos de Clique de Seleção
        document.querySelectorAll('.model-card').forEach(card => {
            card.addEventListener('click', function() {
                const id = this.dataset.id;
                currentState.model = (currentState.model === id) ? null : id;
                updateSelectionUI();
                updateBtnWa();
            });
        });

        document.querySelectorAll('.plan-card').forEach(card => {
            card.addEventListener('click', function() {
                const id = this.dataset.id;
                currentState.plan = (currentState.plan === id) ? null : id; // Toggle fluido
                updateSelectionUI();
                updateBtnWa();

                // Scroll + flash no addon se Bio Link ou Portfólio
                if(currentState.plan && currentState.service && (currentState.service.hasModels || currentState.service.id === 'portfolio')) {
                    const addonCard = document.getElementById('addon-card');
                    if(addonCard) {
                        setTimeout(() => {
                            addonCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            setTimeout(() => {
                                addonCard.classList.add('addon-flash');
                                addonCard.addEventListener('animationend', () => {
                                    addonCard.classList.remove('addon-flash');
                                }, { once: true });
                            }, 400);
                        }, 200);
                    }
                }
            });
        });

        function updateBtnWa() {
            if (!btnWa || !btnWaText) return;
            
            const s = currentState.service;
            let ready = false;

            if(s && s.category === 'custom') {
                ready = true;
            } else if(s && s.hasModels) {
                if(!currentState.model && !currentState.plan) btnWaText.textContent = "Selecione um modelo e um plano";
                else if(!currentState.model) btnWaText.textContent = "Selecione um modelo acima";
                else if(!currentState.plan) btnWaText.textContent = "Selecione um plano de entrega";
                else ready = true;
            } else {
                if(!currentState.plan) btnWaText.textContent = "Selecione um plano para continuar";
                else ready = true;
            }

            if(ready) {
                btnWa.disabled = false;
                btnWa.classList.remove('bg-gray-300', 'cursor-not-allowed');
                btnWa.classList.add('bg-brand-600', 'hover:bg-brand-700', 'shadow-lg', 'shadow-brand-500/30');
                
                // Mostrar total estimado para Bio Link (modelo + plano)
                if(s.hasModels && currentState.model && currentState.plan) {
                    const modelEl = document.querySelector(`.model-card[data-id="${currentState.model}"]`);
                    const planEl = document.querySelector(`.plan-card[data-id="${currentState.plan}"]`);
                    const modelPrice = modelEl ? parseFloat(modelEl.dataset.price) : NaN;
                    // Buscar o preço pelo text-[17px] para não pegar o título
                    const priceSpan = planEl ? planEl.querySelector('.text-\\[17px\\]') : null;
                    const planPriceText = priceSpan ? priceSpan.textContent.replace('R$','').trim() : '';
                    const planPrice = parseFloat(planPriceText);
                    
                    if(!isNaN(modelPrice) && !isNaN(planPrice)) {
                        const addonPrice = currentState.addon ? PRECOS.extras.painelAdmin : 0;
                        // Verificar se plano selecionado tem período mensal ativo
                        var planPeriodo = planEl ? planEl.closest('.plan-card') : null;
                        var periodoAtual = planPeriodo ? planPeriodo.getAttribute('data-periodo') : 'semestral';
                        var precoPlanoFinal = planPrice;
                        if (periodoAtual === 'mensal') {
                            var planIdAtual = planPeriodo ? planPeriodo.getAttribute('data-id') : '';
                            if (planIdAtual === 'essencial') precoPlanoFinal = PRECOS.mensais.essencial;
                            else if (planIdAtual === 'profissional') precoPlanoFinal = PRECOS.mensais.profissional;
                        }
                        const total = modelPrice + precoPlanoFinal + addonPrice;
                        const addonLabel = currentState.addon ? ' (c/ Painel Admin)' : '';
                        btnWaText.textContent = `Solicitar Orçamento — Total: R$ ${total}${addonLabel}`;
                    } else {
                        btnWaText.textContent = "Solicitar Orçamento via WhatsApp";
                    }
                } else {
                    btnWaText.textContent = s.category === 'custom' ? "Falar no WhatsApp" : "Solicitar Orçamento via WhatsApp";
                }
            } else {
                btnWa.disabled = true;
                btnWa.classList.add('bg-gray-300', 'cursor-not-allowed');
                btnWa.classList.remove('bg-brand-600', 'hover:bg-brand-700', 'shadow-lg', 'shadow-brand-500/30');
            }
        }

        if (btnWa) {
            btnWa.addEventListener('click', () => {
                if(btnWa.disabled) return;
                
                const serviceName = currentState.service.title;
                let msg = `Olá! Tenho interesse em solicitar um orçamento.\n\n`;
                msg += `▸ Serviço: ${serviceName}\n`;
                
                if (currentState.service.category !== 'custom') {
                    const planCard = document.querySelector(`.plan-card[data-id="${currentState.plan}"]`);
                    const planName = planCard.dataset.name;
                    const planDuration = planCard.dataset.duration;
                    const planPeriodo = planCard.dataset.periodo || 'semestral';
                    
                    if(currentState.service.hasModels) {
                        const modelEl = document.querySelector(`.model-card[data-id="${currentState.model}"]`);
                        const modelName = modelEl.dataset.name;
                        const modelPrice = modelEl.dataset.price;
                        if (isNaN(modelPrice)) {
                            msg += `▸ Modelo: ${modelName} (${modelPrice})\n`;
                        } else {
                            msg += `▸ Modelo: ${modelName} (R$ ${modelPrice})\n`;
                        }
                    }
                    
                    msg += `▸ Plano: ${planName} — ${planDuration}${planPeriodo === 'mensal' ? ' (mensal)' : ''}\n`;
                    if(currentState.addon && (currentState.service.hasModels || currentState.service.id === 'portfolio')) {
                        msg += `▸ Extra: Painel Administrativo (+R$ ${PRECOS.extras.painelAdmin})\n`;
                    }
                    msg += `\n`;
                } else {
                    msg += `\n`;
                }

                msg += `Aguardo seu retorno. Obrigado!`;

                const encodedMsg = encodeURIComponent(msg);
                const waUrl = `https://wa.me/5592992866146?text=${encodedMsg}`;
                
                window.open(waUrl, '_blank');
                
                // Refresh na página atual e força a voltar pro topo para limpar a interface
                setTimeout(() => {
                    closeModal();
                    currentState = { service: null, model: null, plan: null };
                }, 500);
            });
        }

        // === ADD-ON: PAINEL ADMIN ===
        function toggleAddon() {
            currentState.addon = !currentState.addon;
            const toggle = document.getElementById('addon-toggle');
            const dot = document.getElementById('addon-toggle-dot');
            const card = document.getElementById('addon-card');

            if(currentState.addon) {
                toggle.classList.replace('bg-gray-200', 'bg-brand-600');
                dot.classList.add('translate-x-5');
                card.classList.remove('border-gray-200');
                card.classList.add('border-brand-500', 'bg-brand-50/30');
            } else {
                toggle.classList.replace('bg-brand-600', 'bg-gray-200');
                dot.classList.remove('translate-x-5');
                card.classList.remove('border-brand-500', 'bg-brand-50/30');
                card.classList.add('border-gray-200');
            }
            updateBtnWa();
        }

        function resetAddonUI() {
            currentState.addon = false;
            const toggle = document.getElementById('addon-toggle');
            const dot = document.getElementById('addon-toggle-dot');
            const card = document.getElementById('addon-card');
            if(toggle) { toggle.classList.remove('bg-brand-600'); toggle.classList.add('bg-gray-200'); }
            if(dot) dot.classList.remove('translate-x-5');
            if(card) { card.classList.remove('border-brand-500', 'bg-brand-50/30'); card.classList.add('border-gray-200'); }
        }

        // === 4. HEADER SCROLL & MOBILE MENU ===
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (!header) return;
            if (window.scrollY > 20) {
                header.classList.add('glass-header', 'shadow-sm');
                header.classList.remove('border-transparent');
            } else {
                header.classList.remove('glass-header', 'shadow-sm');
                header.classList.add('border-transparent');
            }
        });

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconPath = document.getElementById('menu-icon-path');
        let isMenuOpen = false;

        function toggleMenu() {
            if (!mobileMenu || !menuIconPath) return;
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X icon
            } else {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger icon
            }
        }

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMenu);
        }
        
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMenu();
            }
        });

        // === 5. ANIMAÇÕES DE SCROLL FADE-IN ===
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 0.8s ease-out forwards ${entry.target.style.animationDelay || '0s'}`;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el));


        // === 6. LÓGICA DO TESTADOR DE MODELOS (BIO LINK BUILDER) ===
        const testerModal = document.getElementById('tester-modal');
        const testerContainer = document.getElementById('tester-container');
        
        let builderData = {
            theme: 'clean',
            layout: 'list',
            name: '@seunome',
            bio: 'Empreendedor Digital 🚀\nTransformando ideias em negócios.',
            links: [
                { id: 1, title: 'Meu Site Oficial' },
                { id: 2, title: 'Contato via WhatsApp' },
                { id: 3, title: 'Catálogo de Produtos' }
            ]
        };

        const themeStyles = {
            clean: {
                screen: 'bg-white',
                textName: 'text-gray-900',
                textBio: 'text-gray-600'
            },
            gradient: {
                screen: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
                textName: 'text-white drop-shadow-sm',
                textBio: 'text-white/90 drop-shadow-sm'
            },
            glass: {
                screen: 'bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-900 relative',
                textName: 'text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 drop-shadow-sm',
                textBio: 'text-gray-400 font-light'
            },
            sunset: {
                screen: 'bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500',
                textName: 'text-white drop-shadow-sm',
                textBio: 'text-white/90 drop-shadow-sm'
            },
            neon: {
                screen: 'bg-gradient-to-b from-gray-950 to-gray-900 relative',
                textName: 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]',
                textBio: 'text-emerald-300/70'
            },
            aurora: {
                screen: 'relative',
                textName: 'text-white drop-shadow-sm',
                textBio: 'text-white/80',
                screenStyle: 'background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);'
            },
            obsidian: {
                screen: 'relative',
                textName: 'text-yellow-400/90 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]',
                textBio: 'text-gray-400 font-light',
                screenStyle: 'background: #0a0a0a;'
            },
        };

        const PREMIUM_THEMES = ['neon', 'aurora', 'obsidian'];
        const PM_ICONS = ['link','mail','phone','instagram','whatsapp','message-square','star','heart','store','shopping-bag','camera','music','youtube','twitch','github','twitter','linkedin','globe','map-pin','calendar','video','image','zap','coffee','book','briefcase','terminal','cpu','gamepad-2','database','headphones','compass','backpack','scale','file-text'];

        function openTester(themeId) {
            if (PREMIUM_THEMES.includes(themeId)) {
                openTesterPremium(themeId);
                return;
            }
            builderData.theme = themeId;
            const themeInput = document.getElementById('builder-theme');
            if (themeInput) themeInput.value = themeId;
            const themeDisplay = document.getElementById('builder-theme-display');
            const nomeDisplay = { clean: 'Clean', gradient: 'Gradient', glass: 'Glass Premium', sunset: 'Sunset' };
            if (themeDisplay) themeDisplay.textContent = nomeDisplay[themeId] || themeId;
            const testerPrecoEl = document.getElementById('tester-modelo-preco');
            if (testerPrecoEl) {
                const preco = PRECOS.modelos[themeId];
                if (preco) {
                    testerPrecoEl.textContent = 'R$ ' + preco;
                    testerPrecoEl.classList.remove('hidden');
                } else {
                    testerPrecoEl.classList.add('hidden');
                }
            }

            builderUpdateState();
            renderBuilderLinks();
            
            const scrollArea = document.getElementById('tester-scroll-area');
            if (scrollArea) scrollArea.scrollTop = 0;
            const indicator = document.getElementById('mobile-scroll-indicator');
            if (indicator) {
                indicator.classList.remove('opacity-0', 'pointer-events-none');
                indicator.classList.add('opacity-100');
            }

            if (testerModal) {
                testerModal.classList.remove('hidden');
                setTimeout(() => {
                    testerModal.classList.remove('opacity-0');
                    if (testerContainer) testerContainer.classList.remove('scale-95');
                }, 10);
            }
            document.body.style.overflow = 'hidden';
        }

        // ── Tester Premium ──────────────────────────────────────────
        let pmCurrentTheme = null;

        const PM_DEFAULTS = {
            neon:    { links: ['Acessar Terminal','Projetos de Hardware','Twitch Stream','Ping / Contato'], linkIcons: ['terminal','cpu','gamepad-2','mail'], minis: ['Arquivos','Boost','Audio'], miniIcons: ['database','zap','headphones'] },
            aurora:  { links: ['Portfólio Fine Art','Presets Lightroom Night','Workshops na Islândia','YouTube: Vlogs de Neve'], linkIcons: ['image','camera','map-pin','video'], minis: ['Guia','Gear','Apoiar'], miniIcons: ['compass','backpack','coffee'] },
            obsidian:{ links: ['Áreas de Atuação','Agendar Consultoria','Artigos Jurídicos','Contato WhatsApp'], linkIcons: ['scale','calendar','file-text','message-square'], minis: ['Local','Casos','Site'], miniIcons: ['map-pin','briefcase','globe'] }
        };

        function openTesterPremium(themeId) {
            pmCurrentTheme = themeId;
            const modal = document.getElementById('tester-premium-modal');
            const container = document.getElementById('tester-premium-container');
            const iframe = document.getElementById('pm-iframe');
            const label = document.getElementById('pm-modelo-label');
            const nomes = { neon: 'Neon', aurora: 'Aurora', obsidian: 'Obsidian' };

            if (label) label.textContent = 'Modelo ' + (nomes[themeId] || themeId);
            const precoEl = document.getElementById('pm-modelo-preco');
            if (precoEl) {
                const preco = PRECOS.modelos[themeId];
                if (preco) {
                    precoEl.textContent = 'R$ ' + preco;
                    precoEl.classList.remove('hidden');
                } else {
                    precoEl.classList.add('hidden');
                }
            }
            const src = `assets/biolink/${themeId.charAt(0).toUpperCase() + themeId.slice(1)}.html`;
            if (iframe) iframe.src = src;

            const scrollArea = document.getElementById('tester-premium-scroll-area');
            if (scrollArea) scrollArea.scrollTop = 0;
            const indicator = document.getElementById('mobile-scroll-indicator-premium');
            if (indicator) {
                indicator.classList.remove('opacity-0', 'pointer-events-none');
                indicator.classList.add('opacity-100');
            }

            pmRenderPainel(themeId);

            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    if (container) container.classList.remove('scale-95');
                }, 10);
            }
            document.body.style.overflow = 'hidden';
        }

        function pmRenderPainel(themeId) {
            const def = PM_DEFAULTS[themeId] || PM_DEFAULTS.neon;

            // Reset campos de perfil
            const inputNome = document.getElementById('pm-input-nome');
            const inputSub = document.getElementById('pm-input-subtitulo');
            const inputBio = document.getElementById('pm-input-bio');
            if (inputNome) inputNome.value = '';
            if (inputSub) inputSub.value = '';
            if (inputBio) inputBio.value = '';

            // Render links
            const linksEl = document.getElementById('pm-links-container');
            if (linksEl) {
                linksEl.innerHTML = def.links.map((texto, i) => `
                    <div class="flex gap-1.5 items-center">
                        <select onchange="pmSend('link-icon', this.value, ${i})" class="text-xs border border-gray-200 rounded-lg px-1.5 py-2 outline-none focus:border-brand-400 bg-white shrink-0 w-[90px]">
                            ${PM_ICONS.map(ic => `<option value="${ic}"${ic === def.linkIcons[i] ? ' selected' : ''}>${ic}</option>`).join('')}
                        </select>
                        <input type="text" value="${texto}" oninput="pmSend('link-texto', this.value, ${i})" placeholder="Texto do link" class="flex-1 text-xs border border-gray-200 rounded-lg px-2 py-2 outline-none focus:border-brand-400 min-w-0">
                        <input type="url" placeholder="URL" oninput="pmSend('link-href', this.value, ${i})" class="w-[80px] text-xs border border-gray-200 rounded-lg px-2 py-2 outline-none focus:border-brand-400 shrink-0">
                    </div>`).join('');
            }

            // Render minis
            const minisEl = document.getElementById('pm-minis-container');
            if (minisEl) {
                minisEl.innerHTML = def.minis.map((texto, i) => `
                    <div class="flex gap-1.5 items-center">
                        <select onchange="pmSend('mini-icon', this.value, ${i})" class="text-xs border border-gray-200 rounded-lg px-1.5 py-2 outline-none focus:border-brand-400 bg-white shrink-0 w-[90px]">
                            ${PM_ICONS.map(ic => `<option value="${ic}"${ic === def.miniIcons[i] ? ' selected' : ''}>${ic}</option>`).join('')}
                        </select>
                        <input type="text" value="${texto}" oninput="pmSend('mini-texto', this.value, ${i})" placeholder="Texto" class="flex-1 text-xs border border-gray-200 rounded-lg px-2 py-2 outline-none focus:border-brand-400 min-w-0">
                        <input type="url" placeholder="URL" oninput="pmSend('mini-href', this.value, ${i})" class="w-[80px] text-xs border border-gray-200 rounded-lg px-2 py-2 outline-none focus:border-brand-400 shrink-0">
                    </div>`).join('');
            }
        }

        function pmSend(campo, valor, index) {
            const iframe = document.getElementById('pm-iframe');
            if (!iframe || !iframe.contentWindow) return;
            iframe.contentWindow.postMessage({ type: 'pm-update', campo, valor, index }, '*');
        }

        function pmUpdateAvatar(input) {
            const file = input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                const src = e.target.result;
                const preview = document.getElementById('pm-preview-avatar');
                if (preview) preview.src = src;
                pmSend('avatar', src);
            };
            reader.readAsDataURL(file);
        }

        function closeTesterPremium(selectModel = false) {
            const modal = document.getElementById('tester-premium-modal');
            const container = document.getElementById('tester-premium-container');
            const iframe = document.getElementById('pm-iframe');
            if (modal) modal.classList.add('opacity-0');
            if (container) container.classList.add('scale-95');
            const inputNome = document.getElementById('pm-input-nome');
            const inputSub = document.getElementById('pm-input-subtitulo');
            const inputBio = document.getElementById('pm-input-bio');
            if (inputNome) inputNome.value = '';
            if (inputSub) inputSub.value = '';
            if (inputBio) inputBio.value = '';
            if (selectModel && pmCurrentTheme) {
                currentState.model = pmCurrentTheme;
                updateSelectionUI();
                updateBtnWa();
            }
            setTimeout(() => {
                if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
                if (iframe) iframe.src = '';
                document.body.style.overflow = '';
            }, 300);
        }

        function closeTester(selectModel = false) {
            if (testerModal) testerModal.classList.add('opacity-0');
            if (testerContainer) testerContainer.classList.add('scale-95');
            
            if (selectModel) {
                // Atualiza o estado com o tema atual do tester e reflete visualmente
                currentState.model = builderData.theme;
                updateSelectionUI();
                updateBtnWa();
            }

            setTimeout(() => {
                if (testerModal) testerModal.classList.add('hidden');
                // Se o modal de orçamento estiver aberto, mantemos o overflow hidden do body
                if(modal && modal.classList.contains('hidden')) {
                    document.body.style.overflow = 'auto';
                }
            }, 300);
        }

        // Lógica para esconder a seta flutuante no scroll (modelos premium)
        function handlePremiumTesterScroll() {
            const scrollArea = document.getElementById('tester-premium-scroll-area');
            const indicator = document.getElementById('mobile-scroll-indicator-premium');
            if (!indicator || !scrollArea) return;
            if (scrollArea.scrollTop > 50) {
                indicator.classList.remove('opacity-100');
                indicator.classList.add('opacity-0', 'pointer-events-none');
            } else {
                indicator.classList.remove('opacity-0', 'pointer-events-none');
                indicator.classList.add('opacity-100');
            }
        }

        // Lógica para esconder a seta flutuante no scroll
        function handleTesterScroll() {
            const scrollArea = document.getElementById('tester-scroll-area');
            const indicator = document.getElementById('mobile-scroll-indicator');
            if (!indicator || !scrollArea) return;

            // Se o scroll passar de 50px, esconde a seta
            if (scrollArea.scrollTop > 50) {
                indicator.classList.remove('opacity-100');
                indicator.classList.add('opacity-0', 'pointer-events-none');
            } else {
                indicator.classList.remove('opacity-0', 'pointer-events-none');
                indicator.classList.add('opacity-100');
            }
        }

        // Atualiza o estado lendo os inputs da esquerda
        function builderUpdateState() {
            const themeEl = document.getElementById('builder-theme');
            const layoutEl = document.getElementById('builder-layout');
            const nameEl = document.getElementById('builder-name');
            const bioEl = document.getElementById('builder-bio');

            if (themeEl) builderData.theme = themeEl.value || builderData.theme;
            if (layoutEl) builderData.layout = layoutEl.value;
            if (nameEl) builderData.name = nameEl.value || '@seunome';
            if (bioEl) builderData.bio = bioEl.value || 'Sua bio aparece aqui';

            // Atualizar os títulos dos links
            builderData.links.forEach(link => {
                const input = document.getElementById(`link-input-${link.id}`);
                if (input) link.title = input.value || 'Link';
            });

            renderPhonePreview();
        }

        // Renderiza os inputs de edição de link no painel esquerdo
        function renderBuilderLinks() {
            const container = document.getElementById('builder-links-container');
            if (!container) return;

            container.innerHTML = '';
            
            builderData.links.forEach((link, index) => {
                container.innerHTML += `
                    <div class="flex items-center gap-2 bg-white p-2 rounded-xl border border-gray-200 shadow-sm group">
                        <div class="text-gray-300 cursor-move px-1">⋮⋮</div>
                        <input type="text" id="link-input-${link.id}" value="${link.title}" oninput="builderUpdateState()" placeholder="Título do Botão" class="flex-1 text-sm outline-none bg-transparent font-medium text-gray-700">
                        <button onclick="builderRemoveLink(${link.id})" class="text-red-400 hover:text-red-600 p-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Remover este link">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
                `;
            });
        }

        function builderAddLink() {
            const newId = builderData.links.length > 0 ? Math.max(...builderData.links.map(l => l.id)) + 1 : 1;
            builderData.links.push({ id: newId, title: 'Novo Link' });
            renderBuilderLinks();
            renderPhonePreview();
        }

        function builderRemoveLink(id) {
            builderData.links = builderData.links.filter(l => l.id !== id);
            renderBuilderLinks();
            renderPhonePreview();
        }

        // Aplica o estado ao visual do Celular (Direita)
        function renderPhonePreview() {
            const screen = document.getElementById('phone-screen');
            const nameDisplay = document.getElementById('phone-name-display');
            const bioDisplay = document.getElementById('phone-bio-display');
            const avatarContainer = document.getElementById('phone-avatar-container');
            const linksContainer = document.getElementById('phone-links-display');

            if (!screen || !nameDisplay || !bioDisplay || !avatarContainer || !linksContainer) return;

            const style = themeStyles[builderData.theme];

            // Atualizar Textos
            nameDisplay.textContent = builderData.name;
            bioDisplay.innerHTML = builderData.bio.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
            
            // Gerar avatar com iniciais baseadas no nome (Adapta o visual se for tema Glass Premium)
            const initials = builderData.name.replace('@', '').split(' ').filter(p => p.trim()).map(p => p[0]).join('').substring(0,2).toUpperCase() || 'SN';
            
            let avatarClass = 'bg-[#a3e635] text-slate-900';
            if (builderData.theme === 'glass') {
                avatarClass = 'bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] border-2 border-white/10';
            }
            
            avatarContainer.innerHTML = `<div class="w-full h-full ${avatarClass} flex items-center justify-center rounded-full">${initials}</div>`;

            // Resetar e aplicar classes de tema base
            screen.className = `relative w-[300px] h-[600px] border-[14px] border-gray-900 rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500 z-0 ${style.screen}`;
            if (style.screenStyle) { screen.style.cssText = style.screenStyle; } else { screen.style.cssText = ''; }
            nameDisplay.className = `font-bold text-xl text-center mb-1 tracking-tight transition-all duration-500 z-10 ${style.textName}`;
            bioDisplay.className = `text-[13px] text-center mb-8 opacity-90 leading-relaxed whitespace-pre-line transition-all duration-500 z-10 ${style.textBio}`;

            // Efeito de iluminação premium exclusivo para o modelo Glass no background do celular
            let decorativeLighting = '';
            if (builderData.theme === 'glass') {
                decorativeLighting = `
                    <div class="absolute -top-20 -right-20 w-48 h-48 bg-white/[0.03] blur-3xl rounded-full pointer-events-none z-[-1]"></div>
                    <div class="absolute bottom-10 -left-10 w-40 h-40 bg-brand-500/[0.05] blur-3xl rounded-full pointer-events-none z-[-1]"></div>
                `;
            }

            // Configurar Layout dos links e estilos base
            let linkBaseClass = '';
            if (builderData.layout === 'list') {
                linksContainer.className = "w-full flex flex-col gap-3 transition-all duration-500 z-10 relative";
                linkBaseClass = "w-full py-4 px-6 flex items-center justify-center rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-[13px] tracking-wide cursor-pointer";
            } else if (builderData.layout === 'grid2') {
                linksContainer.className = "w-full grid grid-cols-2 gap-3 transition-all duration-500 z-10 relative";
                linkBaseClass = "w-full aspect-square flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-[11px] text-center leading-tight cursor-pointer";
            } else if (builderData.layout === 'grid3') {
                linksContainer.className = "w-full grid grid-cols-3 gap-2 transition-all duration-500 z-10 relative";
                linkBaseClass = "w-full aspect-square flex flex-col items-center justify-center p-2 rounded-[1rem] transition-all duration-300 transform hover:-translate-y-1 font-semibold text-[9px] text-center leading-tight break-words cursor-pointer";
            }

            // Aplicar estilo de tema aos botões de link
            let linkClass = linkBaseClass;
            if (builderData.theme === 'clean') {
                linkClass += ' bg-white border border-gray-200 text-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md';
            } else if (builderData.theme === 'gradient' || builderData.theme === 'sunset') {
                linkClass += ' bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/30';
            } else if (builderData.theme === 'glass' || builderData.theme === 'obsidian') {
                linkClass += ' bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 text-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:from-white/[0.12] hover:to-white/[0.05] hover:border-white/20 hover:text-white';
            } else if (builderData.theme === 'neon') {
                linkClass += ' bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.15)] hover:bg-emerald-400/20';
            } else if (builderData.theme === 'aurora') {
                linkClass += ' bg-white/10 backdrop-blur-md border border-purple-400/30 text-white shadow-lg hover:bg-white/20';
            }

            // Renderizar botões no celular
            linksContainer.innerHTML = decorativeLighting;
            builderData.links.forEach(link => {
                const isGrid = builderData.layout.startsWith('grid');
                const safeTitle = link.title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                linksContainer.innerHTML += `
                    <div class="${linkClass}">
                        ${isGrid ? `<div class="w-8 h-8 rounded-full mb-3 mx-auto transition-all duration-500 ${builderData.theme === 'clean' ? 'bg-gray-100' : 'bg-white/20'}"></div>` : ''}
                        <span>${safeTitle}</span>
                    </div>
                `;
            });
        }

        // === PORTFÓLIO MODAL ===
        const portfolioProjects = [
            {
                title: 'EJUD Flow',
                badge: 'Sistema de Gestão',
                desc: 'Sistema Kanban desenvolvido para a Escola Judicial do Tribunal de Justiça do Estado do Amazonas (EJUD/TJAM). Permite o controle visual de demandas internas através de colunas de status, com drag-and-drop, filtros por responsável e histórico de movimentação. O sistema reduziu o tempo de acompanhamento de tarefas e trouxe mais transparência para a equipe.',
                techs: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
                gradient: 'from-blue-100 to-brand-100',
                images: ['assets/portfolio/ejud-flow-painel1.png', 'assets/portfolio/ejud-flow-demanda2.png', 'assets/portfolio/ejud-flow-dashboard3.png'],
                captions: ['Painel Kanban com as demandas organizadas por status', 'Página para criação de nova demanda', 'Dashboard com métricas reais das divisões']
            },
            {
                title: 'Sâmela Matozinho - Consultoria Acadêmica',
                badge: 'Site Institucional',
                desc: 'Site profissional desenvolvido para consultora acadêmica especializada em orientação de TCC, artigos e formatação ABNT. O projeto inclui página de serviços, formulário de contato integrado ao WhatsApp e otimização para aparecer nas buscas do Google em Manaus.',
                techs: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'SEO', 'Google Meu Negócio'],
                gradient: 'from-teal-100 to-[#00c2cb]/20',
                images: ['assets/portfolio/samela.png'],
                captions: ['Visão completa do site —  Sâmela Matozinho - Consultoria Acadêmica']
            },
            {
                title: 'Brigada de Incêndio — TJAM',
                badge: 'Formulário Inteligente',
                desc: 'Formulário de inscrição personalizado desenvolvido a pedido do 1º Tenente do Corpo de Bombeiros do TJAM. O sistema permite que alunos escolham suas turmas visualizando a quantidade de vagas disponíveis em tempo real — conforme alguém se inscreve, as vagas diminuem automaticamente. Quando uma turma lota, o sistema bloqueia novas inscrições. Também possui opção para troca de turma. Construído do zero com Google Apps Script conectado a uma planilha, substituindo soluções limitadas em inglês que não atendiam a necessidade.',
                techs: ['Google Apps Script', 'Google Sheets', 'HTML', 'CSS', 'JavaScript'],
                gradient: 'from-red-100 to-orange-100',
                images: ['assets/portfolio/brigada-incendio-1.png', 'assets/portfolio/brigada-incendio-2.png'],
                captions: ['Formulário de inscrição com vagas em tempo real', 'Planilha recebendo os dados das inscrições automaticamente']
            },
            {
                title: 'Bio Link Instagram',
                badge: 'Bio Link',
                type: 'biolink-models',
                desc: 'Serviço de Bio Link com 7 modelos prontos para escolher: Clean (minimalista), Gradient (vibrante com glassmorphism), Glass Premium (escuro e sofisticado), Sunset (gradiente quente), Neon (cyberpunk com partículas animadas), Aurora (luzes polares com efeito glassmorphism) e Obsidian (dark premium minimalista). Cada modelo é totalmente responsivo, com animações exclusivas e personalização de links, nome, bio e redes sociais.',
                techs: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Design UI/UX'],
                gradient: 'from-purple-100 to-[#6c5ce7]/20',
                images: []
            }
        ];

        const pfModal = document.getElementById('portfolio-modal');
        const pfModalContainer = document.getElementById('portfolio-modal-container');

        let pfCurrentSlide = 0;

        function openPortfolioModal(index) {
            const project = portfolioProjects[index];
            if (!project || !pfModal) return;
            pfCurrentSlide = 0;

            document.getElementById('pf-modal-title').textContent = project.title;
            document.getElementById('pf-modal-badge').textContent = project.badge;
            document.getElementById('pf-modal-desc').textContent = project.desc;

            const imgContainer = document.getElementById('pf-modal-img-container');

            // Tipo especial: Bio Link com modelos
            if (project.type === 'biolink-models') {
                imgContainer.className = 'w-full space-y-4';
                imgContainer.innerHTML = `
                    <div class="grid grid-cols-4 gap-2" id="biolink-model-selector">
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-brand-500 shadow-lg transition-all group" onclick="selectBiolinkModel('clean', this)">
                            <div class="aspect-[9/16] bg-white flex flex-col items-center justify-center p-2">
                                <div class="w-8 h-8 rounded-full bg-gray-800 mb-1.5"></div>
                                <div class="w-12 h-1 rounded bg-gray-800 mb-0.5"></div>
                                <div class="w-8 h-1 rounded bg-gray-800 mb-2"></div>
                                <div class="w-full space-y-1"><div class="h-4 bg-gray-50 border border-gray-200 rounded-md"></div><div class="h-4 bg-gray-50 border border-gray-200 rounded-md"></div><div class="h-4 bg-gray-50 border border-gray-200 rounded-md"></div></div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Clean</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('gradient', this)">
                            <div class="aspect-[9/16] bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-2">
                                <div class="w-8 h-8 rounded-full bg-white/30 mb-1.5"></div>
                                <div class="w-12 h-1 rounded bg-white/40 mb-0.5"></div>
                                <div class="w-8 h-1 rounded bg-white/40 mb-2"></div>
                                <div class="w-full space-y-1"><div class="h-4 bg-white/15 border border-white/30 rounded-md"></div><div class="h-4 bg-white/15 border border-white/30 rounded-md"></div><div class="h-4 bg-white/15 border border-white/30 rounded-md"></div></div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Gradient</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('glass', this)">
                            <div class="aspect-[9/16] bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-900 flex flex-col items-center justify-center p-2 relative">
                                <div class="w-8 h-8 rounded-full bg-white/10 border border-white/10 mb-1.5"></div>
                                <div class="w-12 h-1 rounded bg-white/10 mb-0.5"></div>
                                <div class="w-8 h-1 rounded bg-white/10 mb-2"></div>
                                <div class="w-full space-y-1"><div class="h-4 bg-white/[0.06] border border-white/10 rounded-md"></div><div class="h-4 bg-white/[0.06] border border-white/10 rounded-md"></div><div class="h-4 bg-white/[0.06] border border-white/10 rounded-md"></div></div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Glass Premium</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('sunset', this)">
                            <div class="aspect-[9/16] flex flex-col items-center justify-center p-2" style="background: linear-gradient(135deg, #ff6b35, #f7931e, #ff6b9d)">
                                <div class="w-8 h-8 rounded-full mb-1.5" style="background: rgba(255,255,255,0.3); border: 1px solid rgba(255,255,255,0.5)"></div>
                                <div class="w-12 h-1 rounded mb-0.5" style="background: rgba(255,255,255,0.5)"></div>
                                <div class="w-8 h-1 rounded mb-2" style="background: rgba(255,255,255,0.35)"></div>
                                <div class="w-full space-y-1"><div class="h-4 rounded-md" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3)"></div><div class="h-4 rounded-md" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3)"></div><div class="h-4 rounded-md" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3)"></div></div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Sunset</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('neon', this)">
                            <div class="aspect-[9/16] flex flex-col items-center justify-center p-2 relative" style="background: linear-gradient(180deg, #06060c, #0a0a18)">
                                <div class="absolute inset-0" style="background: radial-gradient(ellipse at 50% 80%, rgba(0,229,255,0.15) 0%, transparent 70%)"></div>
                                <div class="w-8 h-8 rounded-full mb-1.5 relative" style="border: 1px solid rgba(255,0,85,0.6); background: #111; box-shadow: 0 0 10px rgba(255,0,85,0.3)"></div>
                                <div class="w-12 h-1 rounded mb-0.5" style="background: rgba(0,229,255,0.5); box-shadow: 0 0 4px rgba(0,229,255,0.5)"></div>
                                <div class="w-8 h-1 rounded mb-2" style="background: rgba(0,229,255,0.3)"></div>
                                <div class="w-full space-y-1">
                                    <div class="h-4 rounded flex items-center px-1 gap-1" style="background: rgba(0,229,255,0.04); border: 1px solid rgba(0,229,255,0.15)"><div class="w-2 h-2 rounded-sm" style="background: rgba(0,229,255,0.3)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.15)"></div></div>
                                    <div class="h-4 rounded flex items-center px-1 gap-1" style="background: rgba(0,229,255,0.04); border: 1px solid rgba(0,229,255,0.15)"><div class="w-2 h-2 rounded-sm" style="background: rgba(0,229,255,0.3)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.15)"></div></div>
                                    <div class="h-4 rounded flex items-center px-1 gap-1" style="background: rgba(0,229,255,0.04); border: 1px solid rgba(0,229,255,0.15)"><div class="w-2 h-2 rounded-sm" style="background: rgba(0,229,255,0.3)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.15)"></div></div>
                                </div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Neon</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('aurora', this)">
                            <div class="aspect-[9/16] flex flex-col items-center justify-center p-2 relative overflow-hidden" style="background: #030712">
                                <div class="absolute pointer-events-none" style="top:0; left:-20%; width:140%; height:30%; background: linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(0,245,212,0.25), transparent); filter: blur(6px); transform: rotate(-15deg)"></div>
                                <div class="w-8 h-8 rounded-full mb-1.5 relative" style="background: #1a1a2e; box-shadow: 0 0 0 2px rgba(0,245,212,0.5), 0 0 8px rgba(0,245,212,0.2)"></div>
                                <div class="w-12 h-1 rounded mb-0.5" style="background: rgba(255,255,255,0.6)"></div>
                                <div class="w-8 h-1 rounded mb-2" style="background: rgba(0,245,212,0.4)"></div>
                                <div class="w-full space-y-1">
                                    <div class="h-4 rounded-lg flex items-center px-1 gap-1" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08)"><div class="w-2 h-2 rounded-full" style="background: rgba(0,245,212,0.4)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.2)"></div></div>
                                    <div class="h-4 rounded-lg flex items-center px-1 gap-1" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08)"><div class="w-2 h-2 rounded-full" style="background: rgba(0,245,212,0.4)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.2)"></div></div>
                                    <div class="h-4 rounded-lg flex items-center px-1 gap-1" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08)"><div class="w-2 h-2 rounded-full" style="background: rgba(0,245,212,0.4)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.2)"></div></div>
                                </div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Aurora</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('obsidian', this)">
                            <div class="aspect-[9/16] flex flex-col items-center justify-center p-2 relative" style="background: #0a0a0a">
                                <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)"></div>
                                <div class="w-8 h-8 rounded-full mb-1.5" style="background: linear-gradient(135deg, #1a1a1a, #2a2a2a); border: 1px solid rgba(255,215,0,0.3); box-shadow: 0 0 10px rgba(255,215,0,0.1)"></div>
                                <div class="w-12 h-1 rounded mb-0.5" style="background: rgba(255,255,255,0.45)"></div>
                                <div class="w-8 h-1 rounded mb-2" style="background: rgba(255,215,0,0.2)"></div>
                                <div class="w-full space-y-1">
                                    <div class="h-4 rounded-lg flex items-center px-1 gap-1" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07)"><div class="w-2 h-2 rounded" style="background: rgba(255,215,0,0.2)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.15)"></div></div>
                                    <div class="h-4 rounded-lg flex items-center px-1 gap-1" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07)"><div class="w-2 h-2 rounded" style="background: rgba(255,215,0,0.2)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.15)"></div></div>
                                    <div class="h-4 rounded-lg flex items-center px-1 gap-1" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07)"><div class="w-2 h-2 rounded" style="background: rgba(255,215,0,0.2)"></div><div class="flex-1 h-0.5 rounded" style="background: rgba(255,255,255,0.15)"></div></div>
                                </div>
                            </div>
                            <div class="bg-white p-1.5 text-center border-t border-gray-100">
                                <span class="text-[10px] font-bold text-gray-900">Obsidian</span>
                            </div>
                        </button>
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="w-[320px] h-[580px] border-[12px] border-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
                            <iframe id="biolink-iframe" src="assets/biolink/Bio_Link_Instagram_-_Clean.html" class="w-full h-full border-0" title="Preview Bio Link"></iframe>
                        </div>
                    </div>
                `;
            } else if (project.images && project.images.length > 0) {
                imgContainer.className = 'w-full space-y-3';
                const caption0 = project.captions ? project.captions[0] : '';
                if (project.images.length === 1) {
                    const safeCaption0 = (caption0 || '').replace(/'/g, "\\'");
                    imgContainer.innerHTML = `
                        <div class="img-zoom-container w-full rounded-2xl border border-gray-100 shadow-sm bg-gray-50 relative" onclick="handleImgClick(event)" oncontextmenu="handleImgRightClick(event)" ontouchstart="handleImgTouchStart(event)" ontouchmove="handleImgTouchMove(event)" ontouchend="handleImgTouchEnd(event)">
                            <img src="${project.images[0]}" alt="Screenshot de ${project.title}" class="zoom-ready w-full h-auto max-h-[60vh] object-contain mx-auto">
                            <div class="zoom-cursor"></div>
                            <button onclick="event.stopPropagation(); openZoom('${project.images[0]}', '${safeCaption0}')" title="Abrir imagem em tela cheia" class="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-brand-600 hover:bg-white transition-all shadow-sm z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                            </button>
                        </div>
                        ${caption0 ? `<div class="flex items-center gap-2 px-1"><div class="w-1 h-1 rounded-full bg-brand-500 shrink-0"></div><span class="text-xs text-gray-500 italic">${caption0}</span></div>` : ''}
                        <div class="flex items-center gap-1.5 px-1 mt-0.5">
                            <span class="text-[10px] text-gray-400 select-none hidden sm:inline">Clique: zoom &nbsp;·&nbsp; 2º clique: mais zoom &nbsp;·&nbsp; Botão direito: sair</span>
                            <span class="text-[10px] text-gray-400 select-none sm:hidden">Toque: zoom · 2º toque: mais zoom · 3º toque: sair</span>
                        </div>
                    `;
                } else {
                    imgContainer.innerHTML = `
                        <div class="img-zoom-container w-full rounded-2xl border border-gray-100 shadow-sm bg-gray-50 relative" onclick="handleImgClick(event)" oncontextmenu="handleImgRightClick(event)" ontouchstart="handleImgTouchStart(event)" ontouchmove="handleImgTouchMove(event)" ontouchend="handleImgTouchEnd(event)">
                            <img id="pf-slide-img" src="${project.images[0]}" alt="Screenshot de ${project.title}" class="zoom-ready w-full h-auto max-h-[60vh] object-contain mx-auto transition-opacity duration-300">
                            <div class="zoom-cursor"></div>
                            <button onclick="event.stopPropagation(); openZoom(document.getElementById('pf-slide-img').src, document.getElementById('pf-caption')?.querySelector('span')?.textContent || '')" title="Abrir imagem em tela cheia" class="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-brand-600 hover:bg-white transition-all shadow-sm z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                            </button>
                            <button onclick="event.stopPropagation(); pfSlide(-1)" class="pf-nav-btn absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-500 hover:text-brand-600 transition-all z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button onclick="event.stopPropagation(); pfSlide(1)" class="pf-nav-btn absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-500 hover:text-brand-600 transition-all z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                        <div class="flex items-center justify-between px-1">
                            <div id="pf-caption" class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-brand-500 shrink-0"></div><span class="text-xs text-gray-500 italic">${caption0}</span></div>
                            <div class="flex items-center gap-1.5">
                                ${project.images.map((_, i) => `<div class="pf-dot w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-500' : 'bg-gray-300'} transition-colors cursor-pointer" onclick="pfSlide(${i - 0}, true)"></div>`).join('')}
                            </div>
                        </div>
                        <div class="flex items-center gap-1.5 px-1 mt-0.5">
                            <span class="text-[10px] text-gray-400 select-none hidden sm:inline">Clique: zoom &nbsp;·&nbsp; 2º clique: mais zoom &nbsp;·&nbsp; Botão direito: sair</span>
                            <span class="text-[10px] text-gray-400 select-none sm:hidden">Toque: zoom · 2º toque: mais zoom · 3º toque: sair</span>
                        </div>
                    `;
                }
            } else {
                imgContainer.className = 'w-full aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-sm';
                imgContainer.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center"><span class="text-gray-400 text-sm font-medium bg-white/80 px-4 py-2 rounded-lg">Screenshot em breve</span></div>`;
            }

            // Tecnologias
            const techsContainer = document.getElementById('pf-modal-techs');
            techsContainer.innerHTML = project.techs.map(t => `<span class="px-3 py-1.5 bg-brand-50 text-brand-700 text-xs font-semibold rounded-lg">${t}</span>`).join('');

            pfModal.classList.remove('hidden');
            setTimeout(() => {
                pfModal.classList.remove('opacity-0');
                pfModalContainer.classList.remove('scale-95');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function pfSlide(dir, absolute) {
            const project = portfolioProjects.find(p => document.getElementById('pf-modal-title').textContent === p.title);
            if (!project || !project.images || project.images.length <= 1) return;
            if (absolute) {
                pfCurrentSlide = dir;
            } else {
                pfCurrentSlide = (pfCurrentSlide + dir + project.images.length) % project.images.length;
            }
            const img = document.getElementById('pf-slide-img');
            if (img) {
                const container = img.closest('.img-zoom-container');
                if (container) applyZoomLevel(container, 0);
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = project.images[pfCurrentSlide];
                    img.style.opacity = '1';
                }, 150);
            }
            // Atualizar legenda
            const captionEl = document.getElementById('pf-caption');
            if (captionEl && project.captions && project.captions[pfCurrentSlide]) {
                captionEl.innerHTML = `<div class="w-1 h-1 rounded-full bg-brand-500 shrink-0"></div><span class="text-xs text-gray-500 italic">${project.captions[pfCurrentSlide]}</span>`;
            }
            // Atualizar dots
            document.querySelectorAll('.pf-dot').forEach((dot, i) => {
                dot.className = `pf-dot w-2 h-2 rounded-full ${i === pfCurrentSlide ? 'bg-brand-500' : 'bg-gray-300'} transition-colors cursor-pointer`;
            });
        }

        const biolinkFiles = {
            clean: 'assets/biolink/Bio_Link_Instagram_-_Clean.html',
            gradient: 'assets/biolink/Bio_Link_Instagram_-_Gradient.html',
            glass: 'assets/biolink/Bio_Link_Instagram_-_Glass_Premium.html',
            sunset: 'assets/biolink/Sunset.html',
            neon: 'assets/biolink/Neon.html',
            aurora: 'assets/biolink/Aurora.html',
            obsidian: 'assets/biolink/Obsidian.html'
        };

        function selectBiolinkModel(model, el) {
            const iframe = document.getElementById('biolink-iframe');
            if (iframe) iframe.src = biolinkFiles[model];
            document.querySelectorAll('.biolink-btn').forEach(btn => {
                btn.classList.remove('border-brand-500', 'shadow-lg');
                btn.classList.add('border-gray-200');
            });
            el.classList.remove('border-gray-200');
            el.classList.add('border-brand-500', 'shadow-lg');
        }

        // === ZOOM HELPERS ===
        let _activeZoomContainer = null;

        function getZoomLevel(container) {
            return parseInt(container.dataset.zoomLevel || '0');
        }

        function applyZoomLevel(container, level, e) {
            const img = container.querySelector('img.zoom-ready');
            const cursor = container.querySelector('.zoom-cursor');
            container.dataset.zoomLevel = level;
            container.classList.remove('zoom-active', 'zoom-l1', 'zoom-l2');
            if (level === 0) {
                if (_activeZoomContainer === container) _activeZoomContainer = null;
                if (img) img.style.transformOrigin = 'center center';
                if (cursor) cursor.style.opacity = '0';
            } else {
                _activeZoomContainer = container;
                container.classList.add('zoom-active', `zoom-l${level}`);
                if (e && img) {
                    const rect = container.getBoundingClientRect();
                    const cx = e.clientX !== undefined ? e.clientX : rect.left + rect.width / 2;
                    const cy = e.clientY !== undefined ? e.clientY : rect.top + rect.height / 2;
                    const x = cx - rect.left;
                    const y = cy - rect.top;
                    img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
                    if (cursor) {
                        cursor.style.left = `${x}px`;
                        cursor.style.top = `${y}px`;
                        cursor.style.opacity = '1';
                    }
                }
            }
        }

        // === ZOOM DE IMAGEM (MODAL FULLSCREEN) ===
        function openZoom(src, caption) {
            const zoomModal = document.getElementById('zoom-modal');
            const zoomImg = document.getElementById('zoom-img');
            const zoomCaption = document.getElementById('zoom-caption');
            const zoomWrapper = document.getElementById('zoom-img-wrapper');
            if (!zoomModal || !zoomImg) return;
            if (zoomWrapper) applyZoomLevel(zoomWrapper, 0);
            zoomImg.src = src;
            if (zoomCaption) zoomCaption.textContent = caption || '';
            zoomModal.classList.remove('hidden');
            setTimeout(() => {
                zoomModal.classList.remove('opacity-0');
                if (zoomWrapper) {
                    zoomWrapper.classList.remove('scale-95');
                    zoomWrapper.classList.add('scale-100');
                }
            }, 10);
        }

        function closeZoom() {
            const zoomModal = document.getElementById('zoom-modal');
            const zoomWrapper = document.getElementById('zoom-img-wrapper');
            if (!zoomModal) return;
            zoomModal.classList.add('opacity-0');
            if (zoomWrapper) {
                applyZoomLevel(zoomWrapper, 0);
                zoomWrapper.classList.remove('scale-100');
                zoomWrapper.classList.add('scale-95');
            }
            setTimeout(() => zoomModal.classList.add('hidden'), 200);
        }

        // === HANDLERS DO MODAL FULLSCREEN ===
        function handleModalZoom(e) {
            const wrapper = e.currentTarget;
            const img = wrapper.querySelector('img.zoom-ready');
            const cursor = wrapper.querySelector('.zoom-cursor');
            if (!img || !cursor) return;
            if (getZoomLevel(wrapper) === 0) { cursor.style.opacity = '0'; return; }
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursor.style.opacity = '1';
        }

        function resetModalZoom() {
            const wrapper = document.getElementById('zoom-img-wrapper');
            if (wrapper) applyZoomLevel(wrapper, 0);
        }

        function handleModalZoomClick(e) {
            e.stopPropagation();
            const wrapper = e.currentTarget;
            const level = getZoomLevel(wrapper);
            applyZoomLevel(wrapper, level >= 2 ? 0 : level + 1, e);
        }

        function handleModalZoomRightClick(e) {
            e.preventDefault();
            e.stopPropagation();
            const wrapper = e.currentTarget;
            if (getZoomLevel(wrapper) > 0) applyZoomLevel(wrapper, 0);
        }

        let _modalTouchStart = null;
        function handleModalTouchStart(e) {
            if (e.touches.length !== 1) return;
            _modalTouchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
            e.stopPropagation();
        }
        function handleModalTouchMove(e) {
            const wrapper = e.currentTarget;
            if (getZoomLevel(wrapper) === 0 || e.touches.length !== 1) return;
            e.preventDefault();
            e.stopPropagation();
            const img = wrapper.querySelector('img.zoom-ready');
            if (!img) return;
            const rect = wrapper.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            img.style.transformOrigin = `${Math.max(0, Math.min(100, (x / rect.width) * 100))}% ${Math.max(0, Math.min(100, (y / rect.height) * 100))}%`;
        }
        function handleModalTouchEnd(e) {
            const wrapper = e.currentTarget;
            if (!_modalTouchStart || e.touches.length !== 0) return;
            const dx = Math.abs(e.changedTouches[0].clientX - _modalTouchStart.x);
            const dy = Math.abs(e.changedTouches[0].clientY - _modalTouchStart.y);
            const dt = Date.now() - _modalTouchStart.t;
            _modalTouchStart = null;
            if (dx < 10 && dy < 10 && dt < 350) {
                const level = getZoomLevel(wrapper);
                applyZoomLevel(wrapper, level >= 2 ? 0 : level + 1, { clientX: e.changedTouches[0].clientX, clientY: e.changedTouches[0].clientY });
                e.preventDefault();
                e.stopPropagation();
            }
        }

        // === ZOOM DO CONTAINER (PORTFOLIO) ===
        function handleImgZoom(e) {
            const container = e.currentTarget;
            const img = container.querySelector('img.zoom-ready');
            const cursor = container.querySelector('.zoom-cursor');
            if (!img || !cursor) return;
            if (getZoomLevel(container) === 0) { cursor.style.opacity = '0'; return; }
            // Sobre setas de navegação: esconde cursor mas mantém zoom ativo
            if (e.target.closest('.pf-nav-btn')) { cursor.style.opacity = '0'; return; }
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursor.style.opacity = '1';
        }

        function resetImgZoom(container) {
            applyZoomLevel(container, 0);
        }

        function hideZoomCursor(container) {
            const cursor = container.querySelector('.zoom-cursor');
            if (cursor) cursor.style.opacity = '0';
        }

        function handleImgClick(e) {
            const container = e.currentTarget;
            if (e.target.closest('.pf-nav-btn') || e.target.closest('button')) return;
            const level = getZoomLevel(container);
            applyZoomLevel(container, level >= 2 ? 0 : level + 1, e);
        }

        function handleImgRightClick(e) {
            const container = e.currentTarget;
            if (getZoomLevel(container) > 0) {
                e.preventDefault();
                applyZoomLevel(container, 0);
            }
        }

        // === ZOOM TOUCH (MOBILE — PORTFOLIO) ===
        let _touchStart = null;

        function handleImgTouchStart(e) {
            if (e.touches.length !== 1) return;
            _touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
        }

        function handleImgTouchMove(e) {
            const container = e.currentTarget;
            if (getZoomLevel(container) === 0 || e.touches.length !== 1) return;
            e.preventDefault();
            const img = container.querySelector('img.zoom-ready');
            if (!img) return;
            const rect = container.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            img.style.transformOrigin = `${Math.max(0, Math.min(100, (x / rect.width) * 100))}% ${Math.max(0, Math.min(100, (y / rect.height) * 100))}%`;
        }

        function handleImgTouchEnd(e) {
            const container = e.currentTarget;
            if (!_touchStart || e.touches.length !== 0) return;
            const dx = Math.abs(e.changedTouches[0].clientX - _touchStart.x);
            const dy = Math.abs(e.changedTouches[0].clientY - _touchStart.y);
            const dt = Date.now() - _touchStart.t;
            _touchStart = null;
            if (dx < 10 && dy < 10 && dt < 350) {
                const level = getZoomLevel(container);
                applyZoomLevel(container, level >= 2 ? 0 : level + 1, { clientX: e.changedTouches[0].clientX, clientY: e.changedTouches[0].clientY });
                e.preventDefault();
            }
        }

        function closePortfolioModal() {
            if (!pfModal) return;
            pfModal.classList.add('opacity-0');
            pfModalContainer.classList.add('scale-95');
            setTimeout(() => {
                pfModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // === MOBILE CAROUSEL 3D (Réplica do Desktop) ===
        let currentMobSlide = 0;
        const totalMobSlides = 3;
        let mobInterval;

        function updateMobCarousel() {
            const prevSlide = (currentMobSlide - 1 + totalMobSlides) % totalMobSlides;
            const nextSlide = (currentMobSlide + 1) % totalMobSlides;

            for (let i = 0; i < totalMobSlides; i++) {
                const el = document.getElementById(`mob-slide-${i}`);
                if (!el) return;

                if (i === currentMobSlide) {
                    el.style.transform = 'translateX(0) translateY(0) scale(1) rotate(0deg)';
                    el.style.zIndex = '30';
                    el.style.opacity = '1';
                    el.style.filter = 'blur(0px)';
                } else if (i === nextSlide) {
                    el.style.transform = 'translateX(90px) translateY(15px) scale(0.85) rotate(3deg)';
                    el.style.zIndex = '20';
                    el.style.opacity = '0.5';
                    el.style.filter = 'blur(4px)';
                } else if (i === prevSlide) {
                    el.style.transform = 'translateX(-90px) translateY(15px) scale(0.85) rotate(-3deg)';
                    el.style.zIndex = '20';
                    el.style.opacity = '0.5';
                    el.style.filter = 'blur(4px)';
                }
            }
        }

        function setMobSlide(index) {
            currentMobSlide = index;
            updateMobCarousel();
            clearInterval(mobInterval);
            startMobCarousel();
        }

        function startMobCarousel() {
            mobInterval = setInterval(() => {
                currentMobSlide = (currentMobSlide + 1) % totalMobSlides;
                updateMobCarousel();
            }, 3500);
        }

        if (document.getElementById('mob-slide-0') && window.innerWidth < 1024) {
            setTimeout(updateMobCarousel, 50);
            startMobCarousel();
        }

        // === 7. HERO CAROUSEL ANIMATION ===
        let currentHeroSlide = 0;
        const totalHeroSlides = 3;
        let heroInterval;

        function updateHeroCarousel() {
            const prevSlide = (currentHeroSlide - 1 + totalHeroSlides) % totalHeroSlides;
            const nextSlide = (currentHeroSlide + 1) % totalHeroSlides;

            for (let i = 0; i < totalHeroSlides; i++) {
                const el = document.getElementById(`hero-slide-${i}`);
                if (!el) return;

                if (i === currentHeroSlide) {
                    // Centro (Focado)
                    el.style.transform = 'translateX(0) translateY(0) scale(1) rotate(0deg)';
                    el.style.zIndex = '30';
                    el.style.opacity = '1';
                    el.style.filter = 'blur(0px)';
                } else if (i === nextSlide) {
                    // Direita (Fundo Embaçado)
                    el.style.transform = 'translateX(140px) translateY(20px) scale(0.85) rotate(3deg)';
                    el.style.zIndex = '20';
                    el.style.opacity = '0.5';
                    el.style.filter = 'blur(4px)';
                } else if (i === prevSlide) {
                    // Esquerda (Fundo Embaçado)
                    el.style.transform = 'translateX(-140px) translateY(20px) scale(0.85) rotate(-3deg)';
                    el.style.zIndex = '20';
                    el.style.opacity = '0.5';
                    el.style.filter = 'blur(4px)';
                }
            }
        }

        function setHeroSlide(index) {
            currentHeroSlide = index;
            updateHeroCarousel();
            // Reseta o timer se o usuário clicar
            clearInterval(heroInterval);
            startHeroCarousel();
        }

        function startHeroCarousel() {
            heroInterval = setInterval(() => {
                currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
                updateHeroCarousel();
            }, 3500); // Rotação automática a cada 3.5s
        }

        // Toggle período (semestral/mensal) nos planos
        function togglePeriodo(planId, periodo) {
            var card = document.querySelector('.plan-card[data-id="'+planId+'"]');
            if (!card) return;
            card.setAttribute('data-periodo', periodo);

            card.querySelectorAll('.periodo-btn').forEach(function(btn) {
                if (btn.getAttribute('data-per') === periodo) {
                    btn.classList.add('periodo-ativa');
                    btn.classList.remove('bg-gray-100','text-gray-500','hover:bg-gray-200');
                } else {
                    btn.classList.remove('periodo-ativa');
                    btn.classList.add('bg-gray-100','text-gray-500','hover:bg-gray-200');
                }
            });

            var isMensal = periodo === 'mensal';
            var precoEl = card.querySelector('.plan-preco');
            var labelEl = card.querySelector('.plan-periodo-label');
            var badgeEl = card.querySelector('.plan-pagamento-badge');
            var descEl = card.querySelector('.plan-desc');
            var duracaoEl = card.querySelector('.plan-duracao');

            if (planId === 'essencial') {
                if (precoEl) precoEl.textContent = isMensal ? 'R$ ' + PRECOS.mensais.essencial : 'R$ ' + PRECOS.planos.essencial;
                if (labelEl) labelEl.textContent = isMensal ? '/ mês' : '/ 6 meses';
                if (badgeEl) { badgeEl.textContent = isMensal ? 'Renovação mensal (Pix)' : 'Pgto único (Pix/Cartão)'; badgeEl.className = isMensal ? 'text-[9px] mt-1 font-semibold px-2 py-0.5 rounded text-brand-600 bg-brand-50' : 'text-[9px] mt-1 font-semibold px-2 py-0.5 rounded text-gray-500 bg-gray-100'; }
                if (descEl) descEl.textContent = isMensal ? 'Hospedagem mês a mês com suporte contínuo e atendimento via WhatsApp. Renove quando quiser. O valor do desenvolvimento é orçado à parte.' : 'Hospedagem por 6 meses com pagamento único, suporte contínuo e atendimento via WhatsApp. O valor do desenvolvimento é orçado à parte.';
                if (duracaoEl) duracaoEl.textContent = isMensal ? 'Site no ar por 1 mês (renovável)' : 'Site no ar por 6 meses';
                card.setAttribute('data-duration', isMensal ? '1 mês (Renovável)' : '6 meses (Pgto Único)');
                var hintEl = card.querySelector('.plan-hint');
                if (hintEl) hintEl.textContent = isMensal ? 'ou R$ ' + PRECOS.planos.essencial + ' por 6 meses (economia de R$ ' + (PRECOS.mensais.essencial * 6 - PRECOS.planos.essencial) + ')' : 'ou R$ ' + PRECOS.mensais.essencial + '/mês (sem desconto)';
            } else if (planId === 'profissional') {
                if (precoEl) precoEl.textContent = isMensal ? 'R$ ' + PRECOS.mensais.profissional : 'R$ ' + PRECOS.planos.profissional;
                if (labelEl) labelEl.textContent = isMensal ? '/ mês' : '/ 6 meses';
                if (badgeEl) { badgeEl.textContent = isMensal ? 'Renovação mensal (Pix)' : 'Em até 6x (c/ taxas da operadora)'; badgeEl.className = isMensal ? 'text-[9px] mt-1 font-semibold px-2 py-0.5 rounded text-brand-600 bg-brand-50' : 'text-[9px] mt-1 font-semibold px-2 py-0.5 rounded text-brand-600 bg-brand-50'; }
                if (descEl) descEl.textContent = isMensal ? 'Acompanhamento e atualizações mês a mês. Renove quando quiser.' : 'Acompanhamento e atualizações por 6 meses. O valor do desenvolvimento é orçado à parte.';
                if (duracaoEl) duracaoEl.textContent = isMensal ? 'Site no ar por 1 mês (renovável)' : 'Site no ar por 6 meses';
                card.setAttribute('data-duration', isMensal ? '1 mês (Renovável)' : '6 meses (Até 6x)');
                var hintEl = card.querySelector('.plan-hint');
                if (hintEl) hintEl.textContent = isMensal ? 'ou R$ ' + PRECOS.planos.profissional + ' por 6 meses (economia de R$ ' + (PRECOS.mensais.profissional * 6 - PRECOS.planos.profissional) + ')' : 'ou R$ ' + PRECOS.mensais.profissional + '/mês (sem desconto)';
            }

            if (typeof updateBtnWa === 'function') updateBtnWa();
        }

        // Popula preços dinâmicos no HTML
        function popularPrecos() {
            document.querySelectorAll('[data-preco]').forEach(function(el) {
                var k = el.getAttribute('data-preco');
                var v = '';
                if (k === 'clean') v = 'R$ ' + PRECOS.modelos.clean;
                else if (k === 'gradient') v = 'R$ ' + PRECOS.modelos.gradient;
                else if (k === 'glass') v = 'R$ ' + PRECOS.modelos.glass;
                else if (k === 'sunset') v = 'R$ ' + PRECOS.modelos.sunset;
                else if (k === 'neon') v = 'R$ ' + PRECOS.modelos.neon;
                else if (k === 'aurora') v = 'R$ ' + PRECOS.modelos.aurora;
                else if (k === 'obsidian') v = 'R$ ' + PRECOS.modelos.obsidian;
                else if (k === 'essencial') v = 'R$ ' + PRECOS.planos.essencial;
                else if (k === 'profissional') v = 'R$ ' + PRECOS.planos.profissional;
                else if (k === 'permanente') v = 'R$ ' + PRECOS.planos.permanente;
                else if (k === 'painelAdmin') v = 'a partir de R$ ' + PRECOS.extras.painelAdmin + ' (único)';
                else if (k === 'essencialMes') v = el.classList.contains('plan-hint') ? 'ou R$ ' + PRECOS.mensais.essencial + '/mês (sem desconto)' : 'R$ ' + PRECOS.mensais.essencial + '/mês';
                else if (k === 'profissionalMes') v = el.classList.contains('plan-hint') ? 'ou R$ ' + PRECOS.mensais.profissional + '/mês (sem desconto)' : 'R$ ' + PRECOS.mensais.profissional + '/mês';
                else if (k === 'linktreeMes') v = 'R$ ' + PRECOS.linktreePro;
                else if (k === 'linktreeSem') v = '= R$ ' + (PRECOS.linktreePro * 6) + ' por semestre';
                else if (k === 'muryloMin') v = 'A partir de R$ ' + (PRECOS.modelos.clean + PRECOS.planos.essencial);
                if (v) el.textContent = v;
            });
            document.querySelectorAll('.model-card[data-id="clean"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.clean); });
            document.querySelectorAll('.model-card[data-id="gradient"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.gradient); });
            document.querySelectorAll('.model-card[data-id="glass"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.glass); });
            document.querySelectorAll('.model-card[data-id="sunset"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.sunset); });
            document.querySelectorAll('.model-card[data-id="neon"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.neon); });
            document.querySelectorAll('.model-card[data-id="aurora"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.aurora); });
            document.querySelectorAll('.model-card[data-id="obsidian"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.obsidian); });
            document.querySelectorAll('.model-card[data-id="personalizado"]').forEach(function(el) { el.setAttribute('data-price', PRECOS.modelos.personalizado); });
        }
        popularPrecos();

        // Pausa o carousel ao passar o mouse
        document.querySelectorAll('.hero-slide').forEach(slide => {
            slide.addEventListener('mouseenter', () => clearInterval(heroInterval));
            slide.addEventListener('mouseleave', () => startHeroCarousel());
        });

        // Inicializa se os elementos existirem na tela
        if (document.getElementById('hero-slide-0')) {
            setTimeout(updateHeroCarousel, 50); // Delay suave na inicialização
            startHeroCarousel();
        }