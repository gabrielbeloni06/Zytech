import React, { useEffect } from 'react';
import { ArrowRight, Zap, TrendingUp, Database } from 'lucide-react';
import bgConsultoria from './assets/consulting.jpg';
import { CyberpunkChart } from './SharedComponents';

export default function ConsultoriaPage({ navigateTo }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-black flex flex-col justify-center">
            <div className="absolute inset-0 z-0">
                 <img src={bgConsultoria} alt="Consultoria BG" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors mb-8 text-sm uppercase tracking-wider group">
                    <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} /> Voltar para Home
                </button>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="animate-fade-in-up space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-4 animate-pulse">
                                <Zap size={12} /> SYSTEM_READY // V.2.04
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                                Dominância <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 filter drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                                    Digital
                                </span>
                            </h1>
                        </div>
                        
                        <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-pink-500/50 pl-6 max-w-lg">
                            Transformamos dados caóticos em estratégias letais. Nossa consultoria não sugere, ela <strong className="text-white">implementa</strong> o futuro da sua operação com arquitetura de software escalável e inteligência de mercado.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 transition-all group cursor-default">
                                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors">
                                    <TrendingUp className="text-cyan-400" size={20} />
                                </div>
                                <h3 className="font-bold text-white uppercase text-xs tracking-wider mb-1">Growth Hacking</h3>
                                <p className="text-[10px] text-gray-500">Escala baseada em experimentação rápida.</p>
                            </div>
                             <div className="bg-slate-900/50 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-pink-500/50 transition-all group cursor-default">
                                <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-pink-500/20 transition-colors">
                                    <Database className="text-pink-400" size={20} />
                                </div>
                                <h3 className="font-bold text-white uppercase text-xs tracking-wider mb-1">Data Architecture</h3>
                                <p className="text-[10px] text-gray-500">Estruturação de dados para IA.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a 
                                href="https://wa.me/553180209584?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20de%20consultoria%20estratégica." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] group transform hover:-translate-y-1"
                            >
                                Iniciar Protocolo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </div>
                    </div>

                    <div className="w-full h-full flex items-center justify-center animate-fade-in-up animation-delay-500">
                        <CyberpunkChart />
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in opacity-50 hover:opacity-100 transition-opacity">
                    <div>
                        <div className="text-3xl font-black text-white mb-1">R$ 15M+</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Receita Gerada</div>
                    </div>
                     <div>
                        <div className="text-3xl font-black text-white mb-1">+400%</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">ROI Médio</div>
                    </div>
                     <div>
                        <div className="text-3xl font-black text-white mb-1">85</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Projetos Entregues</div>
                    </div>
                     <div>
                        <div className="text-3xl font-black text-white mb-1">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Monitoramento</div>
                    </div>
                </div>
            </div>
        </div>
    );
}