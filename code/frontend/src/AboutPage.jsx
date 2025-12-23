import React, { useEffect } from 'react';
import { Rocket, Target, Eye, Award, Code } from 'lucide-react';
import bgVideo2 from './assets/background2.mp4';

export default function AboutPage({ navigateTo }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-60">
            <source src={bgVideo2} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 mt-20">
          <span className="inline-block py-1 px-3 border border-blue-500/50 rounded-full text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 bg-blue-500/10 backdrop-blur-md">QUEM SOMOS</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight max-w-4xl">Nós construímos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">inteligência</span> por trás do seu negócio.</h1>
        </div>
      </header>
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
            <div className="col-span-1 md:col-span-6 lg:col-span-7 row-span-2 bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between hover:border-blue-500/30 transition-colors group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-all"></div>
               <div>
                 <Rocket size={40} className="text-blue-500 mb-6" />
                 <h2 className="text-3xl font-bold uppercase tracking-wide mb-6">A Revolução Zytech</h2>
                 <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">Nascemos com um propósito claro: democratizar o acesso à inteligência artificial de alta performance.</p>
               </div>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-1 bg-gradient-to-br from-blue-900 to-slate-900 border border-white/10 rounded-[2rem] p-8 flex items-center relative overflow-hidden">
               <Target className="absolute right-4 top-4 text-white/5 w-32 h-32 rotate-12" />
               <div className="relative z-10"><h3 className="text-xl font-bold uppercase tracking-widest text-blue-300 mb-2 flex items-center gap-2"><Target size={18}/> Missão</h3><p className="text-white/90 font-light">Eliminar a ineficiência. Transformar cada interação digital em uma oportunidade.</p></div>
            </div>
            <div className="col-span-1 md:col-span-3 lg:col-span-3 row-span-1 bg-white/5 border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
               <span className="text-4xl font-bold text-emerald-400 mb-1">98%</span><span className="text-xs text-gray-400 uppercase tracking-widest">Satisfação (CSAT)</span>
            </div>
             <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 bg-white/5 border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
               <span className="text-4xl font-bold text-purple-400 mb-1">24/7</span><span className="text-xs text-gray-400 uppercase tracking-widest">Suporte Ativo</span>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-1 backdrop-blur-lg bg-white/5 border border-white/10 rounded-[2rem] p-8 flex items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10"><h3 className="text-xl font-bold uppercase tracking-widest text-purple-300 mb-2 flex items-center gap-2"><Eye size={18}/> Visão</h3><p className="text-gray-300 font-light">Ser a espinha dorsal tecnológica das empresas que liderarão o mercado.</p></div>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-7 row-span-1 bg-slate-900 border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 min-w-fit"><div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><Award size={24} /></div><span className="font-bold uppercase tracking-wider text-sm">Nossos Valores</span></div>
                <div className="h-px w-full bg-white/10 md:hidden"></div>
                <div className="flex flex-wrap justify-center md:justify-end gap-3">{['Inovação', 'Transparência', 'Agilidade', 'Resultado'].map((val) => (<span key={val} className="px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-wide text-gray-400 hover:text-white hover:border-blue-500 transition-colors cursor-default">{val}</span>))}</div>
            </div>
             <div className="col-span-1 md:col-span-12 lg:col-span-5 row-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Code size={64}/></div><h3 className="text-lg font-bold uppercase tracking-widest text-gray-500 mb-4">Tech DNA</h3>
                <div className="flex gap-4 text-gray-300 font-mono text-sm"><span className="text-blue-400">React</span><span>•</span><span className="text-yellow-400">Python</span><span>•</span><span className="text-green-400">Node.js</span><span>•</span><span className="text-cyan-400">Tailwind</span></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}