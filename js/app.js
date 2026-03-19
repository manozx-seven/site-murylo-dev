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
                shortDesc: 'Apresente seus trabalhos de forma elegante e impressione clientes.',
                fullDesc: 'Site para apresentar seus trabalhos, projetos e habilidades de forma profissional. Ideal para fotógrafos, designers, artistas e freelancers.',
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
                fullDesc: 'Presença digital completa para sua empresa ou negócio. Inclui páginas como Sobre, Serviços, Contato e o que mais precisar.',
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
                fullDesc: 'Formulários personalizados feitos direto no Google Apps Script, com os dados salvos na sua planilha Google. Você recebe o formulário pronto e a planilha — sem custo de hospedagem. A partir de R$ 60.',
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
                fullDesc: 'Dashboards e sistemas sob medida para controlar seu negócio: vendas, estoque, atendimentos, tarefas e muito mais.',
                hasModels: false,
                iconBg: 'from-orange-100 to-amber-100',
                iconColor: 'text-orange-600'
            },
            {
                id: 'gmn',
                category: 'setup',
                title: 'Google Meu Negócio',
                badge: '🔥 Alta demanda',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>',
                shortDesc: 'Configuração profissional para ser encontrado na sua região.',
                fullDesc: 'Otimização completa do seu perfil no Google Maps. Aumente as visitas físicas e contatos locais sem investir em anúncios. A partir de R$ 80.',
                hasModels: false,
                iconBg: 'from-red-100 to-rose-100',
                iconColor: 'text-red-600'
            },
            {
                id: 'planilhas',
                category: 'setup',
                title: 'Planilhas Automatizadas',
                badge: '📊 Produtividade',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
                shortDesc: 'Organização via Google Sheets com automações em Apps Script.',
                fullDesc: 'Criação de dashboards, fórmulas complexas e automações via Google Apps Script para economizar horas do seu dia. Tudo dentro do Google Sheets, sem ferramentas externas.',
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
                fullDesc: 'Você entrega o design no Figma, Adobe XD ou outra ferramenta e eu transformo em código perfeito — HTML/CSS/JS limpo, rápido e responsivo. Também pego sua ideia e desenvolvo do zero, ou melhoro um projeto que já existe.',
                hasModels: false,
                iconBg: 'from-sky-100 to-cyan-100',
                iconColor: 'text-cyan-600'
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

            // Preencher header
            document.getElementById('modal-title').textContent = service.title;
            document.getElementById('modal-desc').textContent = service.fullDesc;

            // Mostrar/Esconder Passo 1 e ajustar aviso de valores
            const stepModels = document.getElementById('step-models');
            const stepPlans = document.getElementById('step-plans');
            const plansStandard = document.getElementById('plans-standard');
            const plansSetup = document.getElementById('plans-setup');
            const warningText = document.getElementById('modal-warning-text');
            const greenText = document.getElementById('modal-green-text');
            const biolinkComparison = document.getElementById('biolink-comparison');

            if(service.category === 'custom') {
                stepModels.classList.add('hidden');
                stepPlans.classList.add('hidden');
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
            } else {
                stepModels.classList.add('hidden');
                stepPlans.classList.remove('hidden');
                plansStandard.classList.remove('hidden');
                plansSetup.classList.add('hidden');
                document.getElementById('numero-passo').textContent = '1';
                if(greenText) {
                    greenText.innerHTML = '<strong>Apenas para orçamento</strong> - Você não está assumindo nenhum compromisso. Vamos conversar primeiro para entender sua necessidade.';
                }
                if(warningText) {
                    warningText.innerHTML = '<strong>Sobre os valores</strong> - Os valores abaixo são referentes ao plano de hospedagem e entrega. O serviço de desenvolvimento é orçado separadamente conforme a complexidade do projeto.';
                }
                if(biolinkComparison) biolinkComparison.classList.add('hidden');
                const addonPanel3 = document.getElementById('addon-panel');
                if(addonPanel3) addonPanel3.classList.add('hidden');
            }

            // Atualiza UI para limpar estados anteriores de forma fluida
            updateSelectionUI();
            updateBtnWa();

            // Retorna o scroll do modal para o topo
            const scrollArea = document.getElementById('modal-scroll-area');
            if (scrollArea) scrollArea.scrollTop = 0;

            // Animação de entrada
            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    if (modalContainer) modalContainer.classList.remove('scale-95');
                }, 10);
            }
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            if (modal) modal.classList.add('opacity-0');
            if (modalContainer) modalContainer.classList.add('scale-95');
            setTimeout(() => {
                if (modal) modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
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

        // Lógica Fluida de Seleção (Substituição Inteligente de Classes)
        function updateSelectionUI() {
            // Modelos
            document.querySelectorAll('.model-card').forEach(card => {
                const id = card.dataset.id;
                const isSelected = currentState.model === id;
                
                if (isSelected) {
                    card.classList.remove('border-gray-200', 'border-gray-300', 'hover:border-brand-300', 'hover:border-brand-400', 'hover:shadow-xl', 'z-0');
                    card.classList.add('border-brand-500', 'shadow-[0_12px_40px_-12px_rgba(0,119,230,0.4)]', 'scale-[1.03]', 'z-10');
                    if (id === 'personalizado') {
                        card.classList.remove('border-dashed', 'bg-gray-50', 'hover:bg-white');
                        card.classList.add('border-solid', 'bg-brand-50');
                    }
                } else {
                    card.classList.remove('border-brand-500', 'shadow-[0_12px_40px_-12px_rgba(0,119,230,0.4)]', 'scale-[1.03]', 'z-10');
                    card.classList.add('hover:shadow-xl', 'z-0');
                    if (id === 'personalizado') {
                        card.classList.remove('border-solid', 'bg-brand-50');
                        card.classList.add('border-gray-300', 'hover:border-brand-400', 'border-dashed', 'bg-gray-50', 'hover:bg-white');
                    } else {
                        card.classList.add('border-gray-200', 'hover:border-brand-300');
                    }
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
                currentState.model = (currentState.model === id) ? null : id; // Toggle fluido
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

                // Scroll + flash no addon se Bio Link
                if(currentState.plan && currentState.service && currentState.service.hasModels) {
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
                        const addonPrice = currentState.addon ? 200 : 0;
                        const total = modelPrice + planPrice + addonPrice;
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
                    
                    msg += `▸ Plano: ${planName} — ${planDuration}\n`;
                    if(currentState.addon) {
                        msg += `▸ Extra: Painel Administrativo (+R$ 200)\n`;
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
            }
        };

        function openTester(themeId) {
            builderData.theme = themeId;
            const themeSelect = document.getElementById('builder-theme');
            if (themeSelect) themeSelect.value = themeId;
            
            builderUpdateState(); // Prepara os dados
            renderBuilderLinks(); // Renderiza os inputs da esquerda
            
            // Retorna o scroll ao topo e exibe a seta se for mobile
            const scrollArea = document.getElementById('tester-scroll-area');
            if (scrollArea) scrollArea.scrollTop = 0;
            const indicator = document.getElementById('mobile-scroll-indicator');
            if (indicator) {
                indicator.classList.remove('opacity-0', 'pointer-events-none');
                indicator.classList.add('opacity-100');
            }

            // Animação de entrada
            if (testerModal) {
                testerModal.classList.remove('hidden');
                setTimeout(() => {
                    testerModal.classList.remove('opacity-0');
                    if (testerContainer) testerContainer.classList.remove('scale-95');
                }, 10);
            }
            document.body.style.overflow = 'hidden';
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

            if (themeEl) builderData.theme = themeEl.value;
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
            } else if (builderData.theme === 'gradient') {
                linkClass += ' bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/30';
            } else if (builderData.theme === 'glass') {
                linkClass += ' bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 text-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:from-white/[0.12] hover:to-white/[0.05] hover:border-white/20 hover:text-white';
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
                desc: 'Serviço de Bio Link com 3 modelos prontos para escolher: Clean (minimalista), Gradient (vibrante com glassmorphism) e Glass Premium (escuro e sofisticado). Cada modelo é totalmente responsivo, com animações suaves e personalização de links, nome, bio e redes sociais.',
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
                    <div class="grid grid-cols-3 gap-3" id="biolink-model-selector">
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-brand-500 shadow-lg transition-all group" onclick="selectBiolinkModel('clean', this)">
                            <div class="aspect-[9/16] bg-white flex flex-col items-center justify-center p-3">
                                <div class="w-10 h-10 rounded-full bg-gray-800 mb-2"></div>
                                <div class="w-14 h-1.5 rounded bg-gray-800 mb-1"></div>
                                <div class="w-10 h-1.5 rounded bg-gray-800 mb-3"></div>
                                <div class="w-full space-y-1.5"><div class="h-6 bg-gray-50 border border-gray-200 rounded-lg"></div><div class="h-6 bg-gray-50 border border-gray-200 rounded-lg"></div></div>
                            </div>
                            <div class="bg-white p-2 text-center border-t border-gray-100">
                                <span class="text-xs font-bold text-gray-900">Clean</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('gradient', this)">
                            <div class="aspect-[9/16] bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-3">
                                <div class="w-10 h-10 rounded-full bg-white/30 mb-2"></div>
                                <div class="w-14 h-1.5 rounded bg-white/40 mb-1"></div>
                                <div class="w-10 h-1.5 rounded bg-white/40 mb-3"></div>
                                <div class="w-full space-y-1.5"><div class="h-6 bg-white/15 border border-white/30 rounded-lg"></div><div class="h-6 bg-white/15 border border-white/30 rounded-lg"></div></div>
                            </div>
                            <div class="bg-white p-2 text-center border-t border-gray-100">
                                <span class="text-xs font-bold text-gray-900">Gradient</span>
                            </div>
                        </button>
                        <button class="biolink-btn cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand-300 transition-all group" onclick="selectBiolinkModel('glass', this)">
                            <div class="aspect-[9/16] bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-900 flex flex-col items-center justify-center p-3 relative">
                                <div class="absolute top-0 right-0 w-16 h-16 bg-white/[0.03] blur-xl rounded-full"></div>
                                <div class="w-10 h-10 rounded-full bg-white/10 border border-white/10 mb-2"></div>
                                <div class="w-14 h-1.5 rounded bg-white/10 mb-1"></div>
                                <div class="w-10 h-1.5 rounded bg-white/10 mb-3"></div>
                                <div class="w-full space-y-1.5"><div class="h-6 bg-white/[0.06] border border-white/10 rounded-lg"></div><div class="h-6 bg-white/[0.06] border border-white/10 rounded-lg"></div></div>
                            </div>
                            <div class="bg-white p-2 text-center border-t border-gray-100">
                                <span class="text-xs font-bold text-gray-900">Glass Premium</span>
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
                        <div class="img-zoom-container w-full rounded-2xl border border-gray-100 shadow-sm bg-gray-50 relative" onmousemove="handleImgZoom(event)" onmouseleave="resetImgZoom(this)" onclick="handleImgClick(event, '${project.images[0]}', '${safeCaption0}')" oncontextmenu="handleImgRightClick(event)" ontouchstart="handleImgTouchStart(event)" ontouchmove="handleImgTouchMove(event)" ontouchend="handleImgTouchEnd(event)">
                            <img src="${project.images[0]}" alt="Screenshot de ${project.title}" class="zoom-ready w-full h-auto max-h-[60vh] object-contain mx-auto">
                            <div class="zoom-cursor"></div>
                            <button onclick="event.stopPropagation(); openZoom('${project.images[0]}', '${safeCaption0}')" class="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-brand-600 hover:bg-white transition-all shadow-sm z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                            </button>
                        </div>
                        ${caption0 ? `<div class="flex items-center gap-2 px-1"><div class="w-1 h-1 rounded-full bg-brand-500 shrink-0"></div><span class="text-xs text-gray-500 italic">${caption0}</span></div>` : ''}
                    `;
                } else {
                    imgContainer.innerHTML = `
                        <div class="img-zoom-container w-full rounded-2xl border border-gray-100 shadow-sm bg-gray-50 relative" onmousemove="handleImgZoom(event)" onmouseleave="resetImgZoom(this)" onclick="handleImgClick(event, document.getElementById('pf-slide-img').src, document.getElementById('pf-caption')?.querySelector('span')?.textContent || '')" oncontextmenu="handleImgRightClick(event)" ontouchstart="handleImgTouchStart(event)" ontouchmove="handleImgTouchMove(event)" ontouchend="handleImgTouchEnd(event)">
                            <img id="pf-slide-img" src="${project.images[0]}" alt="Screenshot de ${project.title}" class="zoom-ready w-full h-auto max-h-[60vh] object-contain mx-auto transition-opacity duration-300">
                            <div class="zoom-cursor"></div>
                            <button onclick="event.stopPropagation(); openZoom(document.getElementById('pf-slide-img').src, document.getElementById('pf-caption')?.querySelector('span')?.textContent || '')" class="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-brand-600 hover:bg-white transition-all shadow-sm z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                            </button>
                            <button onclick="event.stopPropagation(); pfSlide(-1)" onmouseenter="resetImgZoom(this.parentElement)" class="pf-nav-btn absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-500 hover:text-brand-600 transition-all z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button onclick="event.stopPropagation(); pfSlide(1)" onmouseenter="resetImgZoom(this.parentElement)" class="pf-nav-btn absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-500 hover:text-brand-600 transition-all z-10 cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                        <div class="flex items-center justify-between px-1">
                            <div id="pf-caption" class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-brand-500 shrink-0"></div><span class="text-xs text-gray-500 italic">${caption0}</span></div>
                            <div class="flex items-center gap-1.5">
                                ${project.images.map((_, i) => `<div class="pf-dot w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-500' : 'bg-gray-300'} transition-colors cursor-pointer" onclick="pfSlide(${i - 0}, true)"></div>`).join('')}
                            </div>
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
            glass: 'assets/biolink/Bio_Link_Instagram_-_Glass_Premium.html'
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

        // === ZOOM DE IMAGEM ===
        function openZoom(src, caption) {
            const zoomModal = document.getElementById('zoom-modal');
            const zoomImg = document.getElementById('zoom-img');
            const zoomCaption = document.getElementById('zoom-caption');
            if (!zoomModal || !zoomImg) return;
            zoomImg.src = src;
            if (zoomCaption) zoomCaption.textContent = caption || '';
            zoomModal.classList.remove('hidden');
            setTimeout(() => {
                zoomModal.classList.remove('opacity-0');
                zoomImg.classList.remove('scale-95');
                zoomImg.classList.add('scale-100');
            }, 10);
        }

        function closeZoom() {
            const zoomModal = document.getElementById('zoom-modal');
            const zoomImg = document.getElementById('zoom-img');
            if (!zoomModal) return;
            zoomModal.classList.add('opacity-0');
            if (zoomImg) {
                zoomImg.classList.remove('scale-100');
                zoomImg.classList.add('scale-95');
            }
            setTimeout(() => zoomModal.classList.add('hidden'), 200);
        }

        // === ZOOM HOVER (ESTILO LOJA) ===
        function handleImgZoom(e) {
            const container = e.currentTarget;
            const img = container.querySelector('img.zoom-ready');
            const cursor = container.querySelector('.zoom-cursor');
            if (!img || !cursor) return;

            // Se não está em modo zoom ou mouse está nas setas, esconder cursor
            if (!container.classList.contains('zoom-active') || e.target.closest('.pf-nav-btn')) {
                img.style.transformOrigin = 'center center';
                cursor.style.opacity = '0';
                return;
            }

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;

            img.style.transformOrigin = `${percentX}% ${percentY}%`;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursor.style.opacity = '1';
        }

        function resetImgZoom(container) {
            const img = container.querySelector('img.zoom-ready');
            const cursor = container.querySelector('.zoom-cursor');
            if (img) img.style.transformOrigin = 'center center';
            if (cursor) cursor.style.opacity = '0';
            container.classList.remove('zoom-active');
        }

        function handleImgClick(e, src, caption) {
            const container = e.currentTarget;
            if (e.target.closest('.pf-nav-btn') || e.target.closest('button')) return;

            if (container.classList.contains('zoom-active')) {
                container.classList.remove('zoom-active');
                const img = container.querySelector('img.zoom-ready');
                const cursor = container.querySelector('.zoom-cursor');
                if (img) img.style.transformOrigin = 'center center';
                if (cursor) cursor.style.opacity = '0';
                openZoom(src, caption);
            } else {
                container.classList.add('zoom-active');
                const cursor = container.querySelector('.zoom-cursor');
                const img = container.querySelector('img.zoom-ready');
                if (cursor && img) {
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    cursor.style.left = `${x}px`;
                    cursor.style.top = `${y}px`;
                    cursor.style.opacity = '1';
                    img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
                }
            }
        }

        function handleImgRightClick(e) {
            const container = e.currentTarget;
            if (container.classList.contains('zoom-active')) {
                e.preventDefault();
                container.classList.remove('zoom-active');
                const img = container.querySelector('img.zoom-ready');
                if (img) img.style.transformOrigin = 'center center';
            }
        }

        // === ZOOM TOUCH (MOBILE) ===
        let touchZoomActive = false;

        function handleImgTouchStart(e) {
            const container = e.currentTarget;
            if (e.touches.length !== 1) return;

            if (!touchZoomActive) {
                // Primeiro toque: ativa zoom no ponto
                touchZoomActive = true;
                container.classList.add('zoom-active');
                const cursor = container.querySelector('.zoom-cursor');
                const img = container.querySelector('img.zoom-ready');
                if (cursor) cursor.style.opacity = '0'; // Esconder cursor no mobile
                if (img) {
                    const rect = container.getBoundingClientRect();
                    const x = e.touches[0].clientX - rect.left;
                    const y = e.touches[0].clientY - rect.top;
                    img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
                }
                e.preventDefault();
            }
        }

        function handleImgTouchMove(e) {
            const container = e.currentTarget;
            if (!touchZoomActive || e.touches.length !== 1) return;
            e.preventDefault();

            const img = container.querySelector('img.zoom-ready');
            if (!img) return;

            const rect = container.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
            const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));

            img.style.transformOrigin = `${percentX}% ${percentY}%`;
        }

        function handleImgTouchEnd(e) {
            const container = e.currentTarget;
            if (!touchZoomActive) return;

            // Se o dedo soltou, desativa zoom
            if (e.touches.length === 0) {
                // Segundo toque rápido abre fullscreen (double tap)
                const now = Date.now();
                if (container._lastTouchEnd && (now - container._lastTouchEnd) < 300) {
                    touchZoomActive = false;
                    container.classList.remove('zoom-active');
                    const img = container.querySelector('img.zoom-ready');
                    if (img) img.style.transformOrigin = 'center center';
                    const src = img ? img.src : '';
                    const caption = document.getElementById('pf-caption')?.querySelector('span')?.textContent || '';
                    openZoom(src, caption);
                    container._lastTouchEnd = 0;
                    return;
                }
                container._lastTouchEnd = now;

                // Soltar dedo: desativa zoom
                setTimeout(() => {
                    if (touchZoomActive) {
                        touchZoomActive = false;
                        container.classList.remove('zoom-active');
                        const img = container.querySelector('img.zoom-ready');
                        if (img) img.style.transformOrigin = 'center center';
                    }
                }, 300);
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