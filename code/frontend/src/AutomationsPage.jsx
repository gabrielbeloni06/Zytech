import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Workflow, Layers, RefreshCw, Zap, Bot, Database, Mail, FileSpreadsheet, AlertTriangle, CheckCircle2, Clock, DollarSign, Cog } from 'lucide-react';
import { AutomationContactModal, CyberpunkChart } from './SharedComponents';

const bgAuto = "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop";

const WorkflowEngine = () => {
    return (
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <div className="absolute border border-emerald-500/20 w-[120%] h-[120%] rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute border border-emerald-500/10 w-[160%] h-[160%] rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
            
            <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
                <defs>
                    <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                
                <circle r="3" fill="#10b981">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M100,100 L250,250" />
                </circle>
                <circle r="3" fill="#10b981">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M400,100 L250,250" />
                </circle>
                <circle r="3" fill="#10b981">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M250,250 L100,400" />
                </circle>
                 <circle r="3" fill="#10b981">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M250,250 L400,400" />
                </circle>
            </svg>

            <div className="absolute top-[10%] left-[10%] bg-black border border-emerald-500/30 p-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-float">
                <FileSpreadsheet className="text-emerald-400" size={24}/>
            </div>
            <div className="absolute top-[10%] right-[10%] bg-black border border-emerald-500/30 p-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-float animation-delay-500">
                <Mail className="text-emerald-400" size={24}/>
            </div>
            <div className="absolute bottom-[10%] left-[10%] bg-black border border-emerald-500/30 p-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-float animation-delay-1000">
                <Database className="text-emerald-400" size={24}/>
            </div>
            <div className="absolute bottom-[10%] right-[10%] bg-black border border-emerald-500/30 p-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-float animation-delay-1500">
                <DollarSign className="text-emerald-400" size={24}/>
            </div>

            <div className="relative z-10 w-32 h-32 bg-black border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)]">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-pulse"></div>
                <Bot size={48} className="text-emerald-400" />
                <div className="absolute -bottom-8 bg-emerald-900/80 px-3 py-1 rounded text-[10px] text-emerald-300 font-mono border border-emerald-500/30">
                    ZY-AUTO ACTIVE
                </div>
            </div>
        </div>
    );
};

export default function AutomationsPage({ navigateTo }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [billingCycle, setBillingCycle] = useState('semiannual');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const getPrice = (basePrice) => {
        if (billingCycle === 'semiannual') return Math.floor(basePrice * 0.9); 
        if (billingCycle === 'annual') return Math.floor(basePrice * 0.75); 
        return basePrice;
    };

    const scrollToPricing = () => {
        const el = document.getElementById('pricing-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen bg-black text-white font-mono overflow-x-hidden selection:bg-emerald-500/30">
            
            <div className="fixed inset-0 z-0">
                <img src={bgAuto} alt="Automation BG" className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
            </div>

            <div className="relative z-10 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-emerald-500 hover:text-white transition-colors mb-16 text-xs uppercase tracking-widest font-sans group">
                    <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={14} /> Voltar ao Hub
                </button>

                <div className="flex flex-col lg:flex-row gap-20 items-center mb-32 animate-fade-in-up">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/30 rounded bg-emerald-900/20 text-emerald-400 text-[10px] uppercase tracking-widest mb-6 animate-pulse">
                            <Workflow size={12} /> ZyAuto Protocol v1.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8 font-sans">
                            Delete o <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                                Trabalho Manual.
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 font-sans font-light leading-relaxed border-l-2 border-emerald-500/30 pl-6">
                            Sua equipe gasta 30% do tempo copiando e colando dados. Nós conectamos seu WhatsApp, CRM e Financeiro em um fluxo autônomo e à prova de erros.
                        </p>

                        <div className="flex gap-4">
                            <button 
                                onClick={scrollToPricing}
                                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold uppercase tracking-widest text-xs rounded transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] font-sans flex items-center gap-2 group"
                            >
                                Automatizar Agora <Zap size={16} className="group-hover:fill-black" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex justify-center">
                        <WorkflowEngine />
                    </div>
                </div>

                <div className="py-20 border-y border-emerald-500/10 mb-20 bg-emerald-900/5 -mx-4 md:-mx-8 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
                                <AlertTriangle size={16} /> Falha no Sistema Humano
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">O Custo Invisível do <span className="text-red-500">"Ctrl+C, Ctrl+V"</span></h2>
                            <p className="text-gray-400 mb-6 font-sans">
                                Um erro de digitação em uma planilha pode custar um cliente. Esquecer de enviar um boleto quebra seu fluxo de caixa. Humanos cansam, esquecem e erram.
                            </p>
                            <div className="bg-black/50 border border-red-500/20 p-6 rounded-xl space-y-4">
                                <div className="flex items-center gap-4 text-sm text-gray-400 font-sans">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    Perda de Leads por demora no cadastro
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-400 font-sans">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    Inconsistência de dados financeiros
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-400 font-sans">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    Funcionários caros fazendo tarefas de robô
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-2xl flex flex-col items-center text-center opacity-60 grayscale hover:grayscale-0 transition-all">
                                    <FileSpreadsheet size={40} className="text-red-500 mb-4" />
                                    <div className="text-red-400 font-bold mb-1">Manual</div>
                                    <div className="text-xs text-red-500/70">Lento & Falho</div>
                                </div>
                                <div className="bg-emerald-900/10 border border-emerald-500/30 p-6 rounded-2xl flex flex-col items-center text-center scale-110 shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-black">
                                    <Bot size={40} className="text-emerald-500 mb-4" />
                                    <div className="text-emerald-400 font-bold mb-1">ZyAuto</div>
                                    <div className="text-xs text-emerald-500/70">Instantâneo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-16 items-center mb-32">
                    <div className="md:w-1/2">
                         <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4">
                                <Layers size={16} /> Arquitetura de Fluxo
                            </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">Nós fazemos seus apps <span className="text-emerald-500">conversarem.</span></h2>
                        <p className="text-gray-400 mb-8 font-sans">
                            Não importa a ferramenta que você usa. A ZyTech cria pontes invisíveis que movem dados de um lado para o outro sem intervenção humana.
                        </p>
                        
                        <div className="space-y-6 font-sans">
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center rounded-lg text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                                    <Database size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">CRM & Vendas</h3>
                                    <p className="text-sm text-gray-500">Lead caiu no site -> Vai pro CRM -> Recebe Zap -> Vendedor notificado.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center rounded-lg text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                                    <RefreshCw size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Financeiro & Cobrança</h3>
                                    <p className="text-sm text-gray-500">Venda fechada -> Nota Fiscal emitida -> Boleto enviado -> Baixa automática.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="relative p-8 bg-black border border-emerald-500/20 rounded-3xl overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <Cog className="animate-spin-slow text-emerald-500" size={100} />
                            </div>
                            <div className="relative z-10 space-y-4 font-mono text-xs">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <span className="text-emerald-500">01</span>
                                    <span>DETECT_NEW_LEAD(source: "Website")</span>
                                </div>
                                <div className="h-4 w-[1px] bg-emerald-500/20 ml-2"></div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="text-emerald-500">02</span>
                                    <span className="text-white">CREATE_CONTACT(CRM_ID)</span>
                                    <CheckCircle2 size={10} className="text-emerald-500" />
                                </div>
                                <div className="h-4 w-[1px] bg-emerald-500/20 ml-2"></div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="text-emerald-500">03</span>
                                    <span className="text-white">SEND_WHATSAPP_TEMPLATE("Welcome")</span>
                                    <CheckCircle2 size={10} className="text-emerald-500" />
                                </div>
                                <div className="h-4 w-[1px] bg-emerald-500/20 ml-2"></div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="text-emerald-500">04</span>
                                    <span className="text-white">NOTIFY_TEAM(Slack, "Sales Channel")</span>
                                    <CheckCircle2 size={10} className="text-emerald-500" />
                                </div>
                                <div className="mt-4 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded text-emerald-400 animate-pulse">
                                    > PROCESS COMPLETED IN 0.4s
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="pricing-section" className="flex flex-col items-center text-center scroll-mt-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 font-sans">
                        Quanto custa <span className="text-emerald-500">não fazer nada?</span>
                    </h2>
                    
                    <div className="w-full max-w-md bg-black border border-emerald-500/30 rounded-2xl p-1 relative group hover:scale-105 transition-transform duration-300">
                        <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-700"></div>
                        
                        <div className="relative bg-zinc-900 rounded-xl p-8 h-full flex flex-col items-center text-center overflow-hidden">
                            
                            <div className="flex bg-black border border-emerald-500/20 p-1 rounded-lg mb-8 font-sans w-full justify-center">
                                {['monthly', 'semiannual', 'annual'].map((cycle) => (
                                    <button 
                                        key={cycle}
                                        onClick={() => setBillingCycle(cycle)}
                                        className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all flex-1 ${billingCycle === cycle ? 'bg-emerald-600 text-black shadow-lg' : 'text-gray-500 hover:text-emerald-400'}`}
                                    >
                                        {cycle === 'monthly' ? 'Mensal' : cycle === 'semiannual' ? '-10%' : '-25%'}
                                    </button>
                                ))}
                            </div>

                            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                <Bot size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-sans uppercase">ZyAuto Custom</h3>
                            <p className="text-gray-400 text-xs mb-8 font-sans leading-relaxed px-4">
                                Desenvolvimento sob medida. Análise de processos, mapeamento de gargalos e implementação do robô.
                            </p>

                            <div className="w-full border-y border-emerald-500/10 py-6 mb-8 font-sans bg-black/20">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">A partir de</div>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-emerald-600 text-sm">R$</span>
                                    <span className="text-5xl font-bold text-white">{getPrice(197)}</span>
                                    <span className="text-gray-500 text-sm">/mês</span>
                                </div>
                                <div className="text-[10px] text-emerald-500/50 mt-2 font-mono bg-emerald-900/10 inline-block px-2 py-1 rounded">
                                    + Setup Único (Sob Consulta)
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 w-full text-left px-4">
                                <li className="flex items-center gap-3 text-xs text-gray-300 font-sans"><CheckCircle2 size={12} className="text-emerald-500"/> Mapeamento de Processos</li>
                                <li className="flex items-center gap-3 text-xs text-gray-300 font-sans"><CheckCircle2 size={12} className="text-emerald-500"/> Integração de até 3 Apps</li>
                                <li className="flex items-center gap-3 text-xs text-gray-300 font-sans"><CheckCircle2 size={12} className="text-emerald-500"/> Dashboard de Monitoramento</li>
                                <li className="flex items-center gap-3 text-xs text-gray-300 font-sans"><CheckCircle2 size={12} className="text-emerald-500"/> Suporte Técnico Prioritário</li>
                            </ul>

                            <button 
                                onClick={() => setModalOpen(true)}
                                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] font-sans flex items-center justify-center gap-2 group"
                            >
                                Agendar Consultoria Técnica <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {modalOpen && (
                <AutomationContactModal tier={{name: 'ZyAuto Custom', price: getPrice(197), color: 'emerald'}} onClose={() => setModalOpen(false)} />
            )}
            
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-1500 { animation-delay: 1.5s; }
                .animate-spin-slow { animation: spin 10s linear infinite; }
            `}</style>
        </div>
    );
}