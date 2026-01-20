import React, { useEffect, useState } from 'react';
import { Rocket, Target, Eye, Award, Code, Terminal, Cpu, Zap, Fingerprint, LayoutGrid, ArrowUpRight } from 'lucide-react';
import bgVideo2 from './assets/background2.mp4';
const CodeTerminal = () => {
    return (
        <div className="font-mono text-xs leading-relaxed text-gray-400 p-2">
            <div className="flex gap-1.5 mb-3 border-b border-white/10 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-1">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">ZyTech</span> = <span className="text-yellow-400">new</span> <span className="text-emerald-400">Agency</span>() {'{'}</p>
                <p className="pl-4">mission: <span className="text-orange-400">'Transformar Negócios'</span>,</p>
                <p className="pl-4">stack: ['React', 'Python', 'AI'],</p>
                <p className="pl-4">uptime: <span className="text-blue-400">99.9</span>,</p>
                <p className="pl-4"><span className="text-purple-400">init</span>: <span className="text-blue-400">()</span> {'=>'} {'{'}</p>
                <p className="pl-8"><span className="text-gray-500">// Otimizando performance...</span></p>
                <p className="pl-8"><span className="text-emerald-400">return</span> <span className="text-orange-400">"Resultados Reais"</span>;</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-green-500">➜</span>
                    <span className="animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
};

export default function AboutPage({ navigateTo }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      
      <header className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay">
            <source src={bgVideo2} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 mt-10">
            <div className="flex flex-col md:flex-row items-end gap-8">
                <div className="md:w-2/3">
                    <span className="inline-flex items-center gap-2 py-1 px-3 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 bg-blue-500/5 backdrop-blur-md animate-fade-in">
                        <Fingerprint size={12} /> Quem Somos
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
                        Não somos Agência.<br/>
                        Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Laboratório.</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
                        A ZyTech nasceu da fusão entre a ciência da computação e a estratégia de vendas. 
                        Enquanto o mercado chuta, nós codificamos.
                    </p>
                </div>
            </div>
        </div>
      </header>

      <section className="py-20 relative bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
            
            <div className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 bg-slate-900/50 border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between hover:border-blue-500/30 transition-all group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20">
                    <Rocket size={24} />
                 </div>
                 <h2 className="text-3xl font-bold text-white mb-4">Engenharia aplicada ao Marketing</h2>
                 <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    Muitas empresas focam apenas no visual. Nós focamos na <strong>infraestrutura</strong>. 
                    Acreditamos que um site bonito que não vende é apenas arte digital. 
                    Nossa missão é construir ecossistemas que funcionam como máquinas de receita previsível.
                 </p>
               </div>
               
               <div className="relative z-10 mt-8 flex items-center gap-2 text-sm text-blue-400 font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Conheça nossa metodologia <ArrowUpRight size={16} />
               </div>
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-4 row-span-2 bg-black border border-white/10 rounded-[2rem] p-6 flex flex-col relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                        <Terminal size={12} /> ZyTech_Core.js
                    </div>
                    <div className="flex gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div> 
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div> 
                    </div>
                </div>
                <div className="flex-grow bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden">
                    <CodeTerminal />
                </div>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center hover:bg-white/[0.04] transition-colors relative overflow-hidden">
               <Target className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12" />
               <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Foco Total</h3>
               <div className="text-2xl font-bold text-white">Performance First</div>
               <p className="text-sm text-gray-400 mt-2 z-10 relative">Não aceitamos código sujo ou carregamento lento. Velocidade é dinheiro.</p>
            </div>

             <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/20 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center hover:border-emerald-500/40 transition-colors group">
               <div className="p-3 bg-emerald-500/10 rounded-full mb-3 text-emerald-500 group-hover:scale-110 transition-transform">
                   <Cpu size={24} />
               </div>
               <span className="text-4xl font-bold text-white mb-1">100%</span>
               <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Digital & Autônomo</span>
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-4 row-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 flex items-center justify-between gap-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-1 flex items-center gap-2"><Eye size={14}/> Visão de Futuro</h3>
                    <p className="text-white font-medium">Ser a espinha dorsal tecnológica de PMEs em crescimento.</p>
                </div>
                <div className="h-12 w-12 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/10 shrink-0">
                    <Zap size={20} className="text-purple-400 fill-current" />
                </div>
            </div>

            <div className="col-span-1 md:col-span-12 lg:col-span-12 row-span-1 bg-slate-900 border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 min-w-fit">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
                        <Code size={24} />
                    </div>
                    <div>
                        <span className="font-bold uppercase tracking-wider text-sm text-white block">Tech DNA</span>
                        <span className="text-[10px] text-gray-500 uppercase">Nossas Ferramentas</span>
                    </div>
                </div>
                
                <div className="h-px w-full bg-white/10 md:hidden"></div>
                
                <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full">
                    {[
                        { name: 'React', color: 'text-blue-400', border: 'hover:border-blue-500/50' },
                        { name: 'Python', color: 'text-yellow-400', border: 'hover:border-yellow-500/50' },
                        { name: 'Node.js', color: 'text-green-400', border: 'hover:border-green-500/50' },
                        { name: 'OpenAI API', color: 'text-emerald-400', border: 'hover:border-emerald-500/50' },
                        { name: 'AWS', color: 'text-orange-400', border: 'hover:border-orange-500/50' },
                        { name: 'Tailwind', color: 'text-cyan-400', border: 'hover:border-cyan-500/50' }
                    ].map((tech) => (
                        <div key={tech.name} className={`px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-bold uppercase tracking-wide text-gray-300 ${tech.border} hover:bg-white/10 transition-all cursor-default flex items-center gap-2 group`}>
                            <span className={`w-1.5 h-1.5 rounded-full bg-current ${tech.color} opacity-50 group-hover:opacity-100`}></span>
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>
      
      <div className="border-t border-white/5 bg-black py-8">
          <div className="container mx-auto px-6 text-center">
              <p className="text-gray-500 text-xs font-mono">
                  CODED IN <span className="text-white font-bold">BRAZIL</span> • DEPLOYED TO THE WORLD
              </p>
          </div>
      </div>
    </div>
  );
}