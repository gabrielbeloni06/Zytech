import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Workflow, Layers, RefreshCw, Zap } from 'lucide-react';
import bgAuto from './assets/automation.jpg';
import { PricingCard, AutomationContactModal } from './SharedComponents';

export default function AutomationsPage({ navigateTo }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [billingCycle, setBillingCycle] = useState('semiannual');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const getPrice = (basePrice) => {
        if (billingCycle === 'semiannual') return Math.floor(basePrice * 0.9); 
        if (billingCycle === 'annual') return Math.floor(basePrice * 0.75); 
        return basePrice;
    };

    return (
        <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 z-0">
                <img src={bgAuto} alt="Automation BG" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider">
                    <ArrowRight className="rotate-180" size={16} /> Voltar para Home
                </button>

                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                            <Cpu size={32} className="text-cyan-400 animate-pulse" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold uppercase mb-6 tracking-tighter text-white">
                        Fluxos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Inteligentes</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">Elimine o trabalho manual. Conectamos seus softwares para trabalharem sozinhos em uma sinfonia digital.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 text-center">
                        <div className="mx-auto w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 text-cyan-400">
                            <Layers size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Integração Total</h3>
                        <p className="text-gray-400 text-sm">Seu CRM fala com seu Email, que fala com seu WhatsApp. Tudo sincronizado.</p>
                    </div>
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 text-center">
                        <div className="mx-auto w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 text-purple-400">
                            <RefreshCw size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Tarefas Recorrentes</h3>
                        <p className="text-gray-400 text-sm">Cobranças, Follow-ups e Relatórios gerados sem intervenção humana.</p>
                    </div>
                    <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 text-center">
                        <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Zero Erros</h3>
                        <p className="text-gray-400 text-sm">Elimine a falha humana de processos críticos da sua operação.</p>
                    </div>
                </div>

                <div className="flex justify-center mb-16 animate-fade-in-up animation-delay-500">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex flex-wrap justify-center gap-1 sm:gap-0 relative">
                    <button onClick={() => setBillingCycle('monthly')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Mensal</button>
                    <button onClick={() => setBillingCycle('semiannual')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'semiannual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Semestral <span className="ml-1 text-[10px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded border border-green-500/30">-10%</span></button>
                    <button onClick={() => setBillingCycle('annual')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'annual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Anual <span className="ml-1 text-[10px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded border border-green-500/30">-25%</span></button>
                  </div>
                </div>

                <div className="max-w-md mx-auto relative group">
                    <div className={`absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-purple-900 rounded-[2rem] blur opacity-40 group-hover:opacity-100 transition duration-700`}></div>
                    
                    <div className="relative bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 h-full flex flex-col hover:bg-slate-800/90 transition-colors backdrop-blur-xl">
                        <div className="flex justify-between items-start mb-8">
                            <div className={`w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                <Workflow size={32}/>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-cyan-500/30 text-cyan-400 bg-cyan-500/5`}>
                                Personalizado
                            </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold uppercase tracking-wide mb-2 text-white">ZyAuto Start</h3>
                        <div className="mb-6">
                            <span className="text-xs text-gray-500 font-normal block mb-1">A partir de:</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-gray-400">R$</span>
                                <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400`}>{getPrice(197)}</span>
                                <span className="text-sm font-normal text-gray-500">/setup</span>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed border-b border-white/5 pb-8">
                            Solução sob medida para o seu negócio. Integramos CRMs, Planilhas, E-mails e muito mais.
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_currentColor]"></div>
                                Automação de Tarefas Repetitivas
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_currentColor]"></div>
                                Integração entre Softwares
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_currentColor]"></div>
                                Disparos e Alertas Inteligentes
                            </li>
                        </ul>

                        <button 
                            onClick={() => setModalOpen(true)}
                            className={`w-full py-4 rounded-xl border border-cyan-500/50 text-cyan-300 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-900 hover:border-transparent transition-all shadow-[0_0_20px_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] group-hover:scale-[1.02] active:scale-95`}
                        >
                            Iniciar Projeto
                        </button>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <AutomationContactModal tier={{name: 'ZyAuto Personalizado', price: getPrice(197), color: 'cyan'}} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
}