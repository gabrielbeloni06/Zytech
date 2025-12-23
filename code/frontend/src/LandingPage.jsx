import React, { useState } from 'react';
import { MessageSquare, Globe, Cpu, LineChart, ArrowRight, Mail, Phone, Send, Zap, ChevronDown } from 'lucide-react';
import bgVideo from './assets/background.mp4';
import { ServiceCard } from './SharedComponents';

export default function LandingPage({ navigateTo }) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const text = `*NOVO CONTATO VIA SITE*\n\n*Nome:* ${contactForm.name}\n*Email:* ${contactForm.email}\n*Mensagem:* ${contactForm.message}`;
    const url = `https://wa.me/553180209584?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <Zap size={14} className="fill-blue-400" /> Tecnologia de Ponta
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white leading-[0.9] drop-shadow-2xl">
            O Futuro do <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">Atendimento</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Automatize, venda e cresça. A Zytech transforma visitantes em clientes com inteligência artificial e design de alta performance.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => navigateTo('chatbot')} className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">Conhecer Soluções <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold uppercase tracking-widest transition-all backdrop-blur-md">
                Falar com Consultor
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
            <ChevronDown size={32} />
        </div>
      </header>

      <section className="py-32 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">Nossos <span className="text-blue-500">Serviços</span></h2>
                  <p className="text-gray-400 max-w-md">Soluções modulares para cada etapa do crescimento do seu negócio.</p>
              </div>
              <div className="h-px bg-white/10 flex-grow ml-8 mb-4 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<MessageSquare size={32} className="text-blue-400" />} title="Comércio" desc="Atendimento automatizado para Delivery e Serviços gerais." active={true} onClick={() => navigateTo('chatbot')} delay="0" />
            <ServiceCard icon={<Globe size={32} className="text-purple-400" />} title="Websites" desc="Landing pages de alta conversão e design futurista." active={true} onClick={() => navigateTo('websites')} tag="Disponível" delay="100" />
            <ServiceCard icon={<Cpu size={32} className="text-amber-400" />} title="Automações" desc="Integrações que eliminam tarefas repetitivas do seu negócio." active={true} onClick={() => navigateTo('automations')} tag="Disponível" delay="200" />
            <ServiceCard icon={<LineChart size={32} className="text-emerald-400" />} title="Consultoria" desc="Análise de dados e estratégias digitais para escalar." active={true} onClick={() => navigateTo('consultoria')} tag="Novo" delay="300" />
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative overflow-hidden bg-slate-900/30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-slate-950/80 border border-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 bg-gradient-to-br from-blue-950/50 to-slate-950/50 flex flex-col justify-between border-r border-white/5">
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-wide mb-6 text-white">Vamos Conversar?</h3>
                <p className="text-gray-400 mb-12 font-light text-lg">Seu negócio está pronto para o próximo nível? Preencha o formulário e a equipe Zytech entrará em contato.</p>
                <div className="space-y-6">
                  <a href="mailto:contato.zytech@gmail.com" className="flex items-center gap-4 text-sm text-gray-300 hover:text-white transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={20} /></div>
                      <div>
                          <div className="text-xs uppercase text-gray-500 font-bold">Email</div>
                          contato.zytech@gmail.com
                      </div>
                  </a>
                  <a href="https://wa.me/553180209584?text=Olá,%20vim%20pelo%20site" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-300 hover:text-white transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all"><Phone size={20} /></div>
                      <div>
                          <div className="text-xs uppercase text-gray-500 font-bold">WhatsApp</div>
                          +55 (31) 8020-9584
                      </div>
                  </a>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/5"><p className="text-xs text-gray-500 uppercase tracking-widest">Localização</p><p className="text-white font-bold">Belo Horizonte, MG</p></div>
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
                        placeholder="Seu nome completo"
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
                        placeholder="seu@email.com" 
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
                        placeholder="Como podemos ajudar seu negócio a crescer?"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    ></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-white text-slate-950 font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors flex items-center justify-center gap-3 rounded-xl shadow-lg group">
                    Enviar Mensagem <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}