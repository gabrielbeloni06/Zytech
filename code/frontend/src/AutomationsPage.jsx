import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Workflow, Layers, RefreshCw, Zap, Bot, Share2 } from 'lucide-react';
import bgAuto from './assets/automation.jpg';
import { AutomationContactModal } from './SharedComponents';

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
        <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-black text-white font-mono">
            
            <div className="absolute inset-0 z-0">
                <img src={bgAuto} alt="Automation BG" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-emerald-500 hover:text-white transition-colors mb-16 text-xs uppercase tracking-widest font-sans">
                    <ArrowRight className="rotate-180" size={14} /> Voltar para o Sistema
                </button>

                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 border border-emerald-500/30 rounded bg-emerald-900/20 text-emerald-400 text-[10px] uppercase tracking-widest mb-6 animate-pulse">
                            ZyAuto Protocol v1.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8 font-sans">
                            Delete o <br/>
                            <span className="text-emerald-500">Trabalho Manual</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-12 font-sans font-light leading-relaxed border-l-2 border-emerald-500/30 pl-6">
                            Sua empresa está perdendo dinheiro com tarefas repetitivas. Conectamos seus softwares (CRM, WhatsApp, Email, Sheets) em um fluxo autônomo.
                        </p>

                        <div className="space-y-6 mb-12 font-sans">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center rounded-lg text-emerald-400 shrink-0">
                                    <Layers />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Integração Universal</h3>
                                    <p className="text-sm text-gray-500">Fazemos o RD Station falar com o Trello, que fala com o Slack.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center rounded-lg text-emerald-400 shrink-0">
                                    <RefreshCw />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Processos Recorrentes</h3>
                                    <p className="text-sm text-gray-500">Cobranças, emissão de notas e follow-ups automáticos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex flex-col items-center">
                        <div className="flex bg-black border border-emerald-500/20 p-1 rounded-lg mb-8 font-sans">
                            {['monthly', 'semiannual', 'annual'].map((cycle) => (
                                <button 
                                    key={cycle}
                                    onClick={() => setBillingCycle(cycle)}
                                    className={`px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${billingCycle === cycle ? 'bg-emerald-600 text-black' : 'text-gray-500 hover:text-emerald-400'}`}
                                >
                                    {cycle === 'monthly' ? 'Mensal' : cycle === 'semiannual' ? 'Semestral' : 'Anual'}
                                </button>
                            ))}
                        </div>

                        <div className="w-full max-w-md bg-black border border-emerald-500/30 rounded-xl p-1 relative group">
                          
                            <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-700"></div>
                            
                            <div className="relative bg-black rounded-lg p-8 h-full flex flex-col items-center text-center overflow-hidden">
                                
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-pulse-slow">
                                    <Bot size={40} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 font-sans uppercase">ZyAuto Custom</h3>
                                <p className="text-gray-500 text-xs mb-8 max-w-xs font-sans">Desenvolvemos o robô exato para a necessidade da sua operação.</p>

                                <div className="w-full border-y border-emerald-500/10 py-6 mb-8 font-sans">
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Investimento Inicial</div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-emerald-600 text-lg">A partir de R$</span>
                                        <span className="text-5xl font-bold text-white">{getPrice(197)}</span>
                                    </div>
                                    <div className="text-[10px] text-emerald-500/50 mt-1">Setup + Mensalidade de manutenção</div>
                                </div>

                                <button 
                                    onClick={() => setModalOpen(true)}
                                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold uppercase tracking-widest text-xs rounded transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] font-sans"
                                >
                                    Iniciar Projeto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <AutomationContactModal tier={{name: 'ZyAuto Custom', price: getPrice(197), color: 'emerald'}} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
}