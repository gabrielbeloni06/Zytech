import React, { useState, useEffect } from 'react';
import { MessageSquare, Globe, Cpu, LineChart, ArrowRight, Mail, Phone, Send, Zap, ChevronDown, Clock, ShieldAlert, Target, CheckCircle2 } from 'lucide-react';
import bgVideo from './assets/background.mp4'; 
import { ServiceCard } from './SharedComponents';

const HolographicCore = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-slate-900/50 rounded-3xl border border-white/5 shadow-2xl">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="relative z-10 w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse"></div>
        <div className="w-full h-full border-2 border-blue-400/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-[80%] h-[80%] border-2 border-purple-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] z-20">
            <Zap className="text-white fill-white animate-pulse" size={24} />
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1/3 flex flex-col justify-center gap-8 pl-8 z-0">
         {[1, 2, 3].map((i) => (
             <div key={i} className="flex items-center gap-2 animate-fade-in" style={{animationDelay: `${i * 200}ms`}}>
                 <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                 <div className="h-[2px] w-24 bg-gradient-to-r from-red-500/0 via-red-500/50 to-transparent"></div>
             </div>
         ))}
         <div className="absolute left-10 text-[10px] text-red-400 uppercase tracking-widest font-bold -rotate-90">Lead Perdido</div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/3 flex flex-col justify-center gap-8 items-end pr-8 z-0">
         {[1, 2, 3].map((i) => (
             <div key={i} className="flex items-center gap-2 animate-fade-in" style={{animationDelay: `${i * 300}ms`}}>
                 <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500/50 to-green-500/0"></div>
                 <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"></div>
             </div>
         ))}
         <div className="absolute right-10 text-[10px] text-green-400 uppercase tracking-widest font-bold rotate-90">Venda Realizada</div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs font-mono text-blue-300 bg-black/40 px-4 py-2 rounded-full border border-blue-500/20 backdrop-blur-sm">
        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> PROCESSING</span>
        <span className="text-white/20">|</span>
        <span>UPTIME: 99.9%</span>
      </div>
    </div>
  );
};

export default function LandingPage({ navigateTo }) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const text = `*NOVO CONTATO VIA SITE*\n\n*Nome:* ${contactForm.name}\n*Email:* ${contactForm.email}\n*Mensagem:* ${contactForm.message}`;
    const url = `https://wa.me/553180209584?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const scrollToSolutions = () => {
      const el = document.getElementById('solutions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-blue-500/30">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-slate-950"></div> 
           <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Zap size={14} className="fill-blue-400" /> Tecnologia ZyTech v4.0
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white leading-[0.9] drop-shadow-2xl">
            Pare de Perder <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x">
                Vendas Agora.
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Seu cliente não espera. Automatize seu atendimento, modernize seu site e escale sua operação enquanto seus concorrentes dormem.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={scrollToSolutions} className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">Ver Soluções <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold uppercase tracking-widest transition-all backdrop-blur-md flex items-center gap-2 hover:border-white/30"
            >
                Falar com Especialista
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md border-t border-white/5 py-4 overflow-hidden">
            <div className="container mx-auto flex justify-center md:justify-between gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest px-6">
                <span className="hidden md:flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Sistema Online</span>
                <div className="flex gap-8">
                    <span>+10k Leads Processados</span>
                    <span className="text-blue-500 font-bold">+R$ 500k Gerados</span>
                    <span>24/7 Ativo</span>
                </div>
            </div>
        </div>
      </header>

      <section className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        O "Velho Jeito" está <br/>
                        <span className="text-red-500">Matando seu Negócio.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        O mercado mudou. Se você ainda depende de planilhas manuais, sites lentos e atendimento que só funciona em horário comercial, você já está atrás.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                            <Clock className="text-red-500 shrink-0" size={24} />
                            <div>
                                <h4 className="text-red-200 font-bold text-sm uppercase">Lentidão na Resposta</h4>
                                <p className="text-red-400/60 text-xs mt-1">Cliente espera 30min e compra no concorrente.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                            <ShieldAlert className="text-red-500 shrink-0" size={24} />
                            <div>
                                <h4 className="text-red-200 font-bold text-sm uppercase">Amadorismo Digital</h4>
                                <p className="text-red-400/60 text-xs mt-1">Sites feios e sem segurança destroem sua credibilidade.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    <HolographicCore />
                </div>
            </div>
        </div>
      </section>

      <section id="solutions" className="py-32 bg-slate-950 relative scroll-mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                  <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                        <Target size={14} /> Ecossistema ZyTech
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
                      Escolha sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Arma.</span>
                  </h2>
                  <p className="text-gray-400 max-w-md">4 Pilares fundamentais para transformar sua operação digital.</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-grow ml-8 mb-4 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
                icon={<MessageSquare size={32} className="text-blue-400" />} 
                title="Chatbots" 
                desc="Atendimento 24h que vende por você no WhatsApp." 
                active={true} 
                onClick={() => navigateTo('chatbot')} 
                delay="0" 
            />
            <ServiceCard 
                icon={<Globe size={32} className="text-purple-400" />} 
                title="Websites" 
                desc="Páginas de alta conversão projetadas para vender." 
                active={true} 
                onClick={() => navigateTo('websites')} 
                tag="Essencial" 
                delay="100" 
            />
            <ServiceCard 
                icon={<Cpu size={32} className="text-amber-400" />} 
                title="Automações" 
                desc="Integrações que eliminam o trabalho manual chato." 
                active={true} 
                onClick={() => navigateTo('automations')} 
                tag="Produtividade" 
                delay="200" 
            />
            <ServiceCard 
                icon={<LineChart size={32} className="text-emerald-400" />} 
                title="Consultoria" 
                desc="Análise estratégica para escalar seu faturamento." 
                active={true} 
                onClick={() => navigateTo('consultoria')} 
                tag="VIP" 
                delay="300" 
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative overflow-hidden bg-slate-900/30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-slate-950/80 border border-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/2 p-12 bg-gradient-to-br from-blue-950/20 to-slate-950/50 flex flex-col justify-between border-r border-white/5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <CheckCircle2 size={12} /> Disponível Agora
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-wide mb-6 text-white">Vamos Escalar?</h3>
                <p className="text-gray-400 mb-12 font-light text-lg">
                    Não espere o próximo mês. Preencha o formulário e receba uma análise gratuita de como a IA pode ajudar seu negócio.
                </p>
                <div className="space-y-6">
                  <a href="mailto:contato.zytech@gmail.com" className="flex items-center gap-4 text-sm text-gray-300 hover:text-white transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={20} /></div>
                      <div>
                          <div className="text-xs uppercase text-gray-500 font-bold">Email Comercial</div>
                          contato.zytech@gmail.com
                      </div>
                  </a>
                  <a href="https://wa.me/553180209584?text=Olá,%20vim%20pelo%20site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-300 hover:text-white transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all"><Phone size={20} /></div>
                      <div>
                          <div className="text-xs uppercase text-gray-500 font-bold">WhatsApp Direto</div>
                          +55 (31) 8020-9584
                      </div>
                  </a>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Base de Operações</p>
                    <p className="text-white font-bold">Belo Horizonte, MG</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">CNPJ</p>
                    <p className="text-white font-bold">58.411.336/0001-30</p>
                  </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-12 bg-slate-950 relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold ml-1">Nome</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600" 
                        placeholder="Como podemos te chamar?"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold ml-1">Email</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600" 
                        placeholder="seu@melhoremail.com" 
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold ml-1">Mensagem</label>
                    <textarea 
                        rows="4" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none placeholder:text-gray-600" 
                        placeholder="Descreva brevemente o que sua empresa precisa..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    ></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-white text-slate-950 font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors flex items-center justify-center gap-3 rounded-xl shadow-lg group hover:shadow-white/20">
                    Enviar Solicitação <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}