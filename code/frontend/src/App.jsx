import React, { useState, useEffect } from 'react';
import { MessageSquare, Globe, Cpu, LineChart, ChevronRight, Menu, X, Rocket, Send, ArrowRight, Check, Zap, Crown, Shield, Star, Phone, Mail, Users, Target, Eye, Award, Code } from 'lucide-react';

import logoZytech from './assets/logo.png';
import bgVideo from './assets/background.mp4';
import bgVideo2 from './assets/background2.mp4';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (currentPage === 'landing') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('landing');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigateTo('landing')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all overflow-hidden p-1">
               <img src={logoZytech} alt="Zytech Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold tracking-widest uppercase">Zy<span className="text-blue-500">tech</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full backdrop-blur-sm border border-white/5">
            <button onClick={() => navigateTo('landing')} className={`text-sm uppercase tracking-widest hover:text-blue-400 transition-colors ${currentPage === 'landing' ? 'text-blue-400' : ''}`}>Home</button>
            <button onClick={() => navigateTo('chatbot')} className={`text-sm uppercase tracking-widest hover:text-blue-400 transition-colors ${currentPage === 'chatbot' ? 'text-blue-400' : ''}`}>Soluções</button>
            <button onClick={handleContactClick} className="text-sm uppercase tracking-widest hover:text-blue-400 transition-colors">Contato</button>
            <button onClick={() => navigateTo('about')} className={`text-sm uppercase tracking-widest hover:text-blue-400 transition-colors ${currentPage === 'about' ? 'text-blue-400' : ''}`}>Sobre</button>
          </div>

          <div className="md:hidden text-white">
            <Menu size={24} />
          </div>
          <div className="hidden md:block w-10"></div>
        </div>
      </nav>
      {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
      {currentPage === 'chatbot' && <ChatbotPage navigateTo={navigateTo} />}
      {currentPage === 'plans' && <PlansPage navigateTo={navigateTo} />}
      <footer className="relative z-10 bg-slate-950 border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center p-1 opacity-50 hover:opacity-100 transition-all">
               <img src={logoZytech} alt="Zytech Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="text-gray-500 text-sm tracking-wider">
            &copy; 2025 ZYTECH SOFTWARES. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </footer>
    </div>
  );
}

function AboutPage({ navigateTo }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <span className="inline-block py-1 px-3 border border-blue-500/50 rounded-full text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 bg-blue-500/10 backdrop-blur-md">
            QUEM SOMOS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight max-w-4xl">
            Nós construímos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">inteligência</span> por trás do seu negócio.
          </h1>
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
                 <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                   Nascemos com um propósito claro: democratizar o acesso à inteligência artificial de alta performance. 
                   Não somos apenas desenvolvedores; somos arquitetos de ecossistemas digitais que funcionam enquanto você dorme.
                 </p>
               </div>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-1 bg-gradient-to-br from-blue-900 to-slate-900 border border-white/10 rounded-[2rem] p-8 flex items-center relative overflow-hidden">
               <Target className="absolute right-4 top-4 text-white/5 w-32 h-32 rotate-12" />
               <div className="relative z-10">
                 <h3 className="text-xl font-bold uppercase tracking-widest text-blue-300 mb-2 flex items-center gap-2"><Target size={18}/> Missão</h3>
                 <p className="text-white/90 font-light">Eliminar a ineficiência. Transformar cada interação digital em uma oportunidade de negócio real e mensurável.</p>
               </div>
            </div>
            <div className="col-span-1 md:col-span-3 lg:col-span-3 row-span-1 bg-white/5 border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
               <span className="text-4xl font-bold text-emerald-400 mb-1">98%</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest">Satisfação (CSAT)</span>
            </div>
             <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 bg-white/5 border border-white/10 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
               <span className="text-4xl font-bold text-purple-400 mb-1">24/7</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest">Suporte Ativo</span>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-1 backdrop-blur-lg bg-white/5 border border-white/10 rounded-[2rem] p-8 flex items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10">
                 <h3 className="text-xl font-bold uppercase tracking-widest text-purple-300 mb-2 flex items-center gap-2"><Eye size={18}/> Visão</h3>
                 <p className="text-gray-300 font-light">Ser a espinha dorsal tecnológica das empresas que liderarão o mercado na próxima década.</p>
               </div>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-7 row-span-1 bg-slate-900 border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 min-w-fit">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><Award size={24} /></div>
                  <span className="font-bold uppercase tracking-wider text-sm">Nossos Valores</span>
                </div>
                <div className="h-px w-full bg-white/10 md:hidden"></div>
                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                  {['Inovação', 'Transparência', 'Agilidade', 'Resultado'].map((val) => (
                    <span key={val} className="px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-wide text-gray-400 hover:text-white hover:border-blue-500 transition-colors cursor-default">
                      {val}
                    </span>
                  ))}
                </div>
            </div>
             <div className="col-span-1 md:col-span-12 lg:col-span-5 row-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Code size={64}/></div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-gray-500 mb-4">Tech DNA</h3>
                <div className="flex gap-4 text-gray-300 font-mono text-sm">
                   <span className="text-blue-400">React</span>
                   <span>•</span>
                   <span className="text-yellow-400">Python</span>
                   <span>•</span>
                   <span className="text-green-400">Node.js</span>
                   <span>•</span>
                   <span className="text-cyan-400">Tailwind</span>
                </div>
             </div>

          </div>
        </div>
      </section>
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">Pronto para o futuro?</h2>
          <button 
            onClick={() => navigateTo('landing')}
            className="px-10 py-5 bg-white text-slate-950 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Começar Agora
          </button>
        </div>
      </section>

    </div>
  );
}

function LandingPage({ navigateTo }) {
  return (
    <>
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-16">
          <p className="text-blue-400 tracking-[0.3em] text-sm uppercase mb-4 animate-fade-in-up">Tecnologia de Ponta</p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-lg">
            O Futuro do <br/> Atendimento
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Automatize, venda e cresça. A Zytech transforma visitantes em clientes com inteligência artificial e design de alta performance.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('chatbot')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2"
            >
              Conhecer Soluções <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full font-medium tracking-wide transition-all backdrop-blur-sm">
              Falar com Consultor
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
      </header>
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">Nossos Serviços</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<MessageSquare size={32} className="text-blue-400" />} title="Chatbots IA" desc="Atendimento 24/7 com inteligência artificial que aprende e converte." active={true} onClick={() => navigateTo('chatbot')} delay="0" />
            <ServiceCard icon={<Globe size={32} className="text-purple-400" />} title="Websites" desc="Landing pages de alta conversão e design futurista." active={false} tag="Em Breve" delay="100" />
            <ServiceCard icon={<Cpu size={32} className="text-amber-400" />} title="Automações" desc="Integrações que eliminam tarefas repetitivas do seu negócio." active={false} tag="Em Breve" delay="200" />
            <ServiceCard icon={<LineChart size={32} className="text-emerald-400" />} title="Consultoria" desc="Análise de dados e estratégias digitais para escalar." active={false} tag="Em Breve" delay="300" />
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 bg-gradient-to-br from-blue-900/40 to-slate-900/40 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">Vamos Conversar?</h3>
                <p className="text-gray-300 mb-8 font-light">Seu negócio está pronto para o próximo nível? Preencha o formulário e a equipe Zytech entrará em contato.</p>
                <div className="space-y-4">
                  <a href="mailto:contatozytechbh@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={16} /></div>
                    contatozytechbh@gmail.com
                  </a>
                  <a href="https://wa.me/553186550113?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20as%20soluções%20Zytech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-green-500 group-hover:text-white transition-all"><Phone size={16} /></div>
                    +55 (31) 86550113
                  </a>
                </div>
              </div>
              <div className="mt-12">
                 <p className="text-xs text-gray-500 uppercase tracking-widest">Localização</p>
                 <p className="text-white">Belo Horizonte, MG</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-10 bg-slate-950/50">
              <form className="space-y-6">
                <div><label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nome</label><input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Seu nome" /></div>
                <div><label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label><input type="email" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="seu@email.com" /></div>
                <div><label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Mensagem</label><textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea></div>
                <button type="button" className="w-full py-3 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">Enviar <Send size={16} className="group-hover:translate-x-1 transition-transform" /></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ChatbotPage({ navigateTo }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 flex-grow">
        <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider">
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">Atendimento <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Inteligente</span></h1>
            <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">Os chatbots da Zytech não apenas respondem perguntas. Eles qualificam leads, agendam reuniões e fecham vendas diretamente no WhatsApp ou no seu site.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</div><span className="text-gray-300">Disponibilidade 24/7 sem filas de espera.</span></li>
              <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</div><span className="text-gray-300">Integração com ChatGPT para respostas naturais.</span></li>
              <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</div><span className="text-gray-300">Banco de dados para armazenar pedidos.</span></li>
            </ul>
            <button onClick={() => navigateTo('plans')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 group">Ver Planos Disponíveis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></button>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-md aspect-[3/4] bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-4 pb-4 border-b border-white/5 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-1"><img src={logoZytech} className="w-full h-full object-contain" alt="bot icon" /></div>
                  <div><div className="font-bold text-sm">Zytech Assist</div><div className="text-xs text-green-400 flex items-center gap-1">● Online</div></div>
                </div>
                <div className="flex-1 space-y-4 text-sm">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none max-w-[80%] animate-fade-in">Olá! Bem-vindo à Zytech. Como podemos acelerar suas vendas hoje?</div>
                  <div className="bg-blue-600/20 border border-blue-500/30 p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-right text-blue-100 animate-fade-in animation-delay-500">Gostaria de saber mais sobre automação de vendas.</div>
                   <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none max-w-[80%] animate-fade-in animation-delay-1000">Perfeito! Nossos bots aumentam a conversão em até 40%. Quer ver uma demonstração?</div>
                  <div className="flex gap-1 pl-2 pt-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div><div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5"><div className="h-10 bg-white/5 rounded-full w-full"></div></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlansPage({ navigateTo }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openContactModal = (planName) => { setSelectedPlan(planName); setModalOpen(true); };
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
       <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")' }}>
         <div className="absolute inset-0 bg-slate-950/90 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.8)_100%)]"></div>
       </div>
      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('chatbot')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider"><ArrowRight className="rotate-180" size={16} /> Voltar para Soluções</button>
        <div className="text-center mb-16 animate-fade-in-up">
           <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6 drop-shadow-2xl">Escolha seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ChatBot</span> para Whatsapp</h1>
           <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">Modelos de IA desenhados para escalar operações. Do atendimento básico à automação corporativa completa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard title="Modelo Básico" icon={<Shield size={32} className="text-blue-400" />} description="Entrada perfeita para automação de atendimento." delay="0" color="blue" price="R$197,00 " subPrice="/mês" onHire={() => openContactModal('Modelo Básico')}>
             <ul className="space-y-4 text-sm text-gray-300 mb-8">
               <li className="flex gap-3 items-center"><Check size={16} className="text-blue-500" /> Respostas Rápidas</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-blue-500" /> Pré definição</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-blue-500" /> Escolha suas opções</li>
             </ul>
             <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-400"><p className="mb-2 font-bold text-blue-200">Especificações:</p><p>Bot baseado em regras simples. Ideal para triagem inicial.</p><p>Valor da Instalação: R$497,00</p></div>
          </PricingCard>

          <div className="relative group/glow">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur-xl opacity-40 group-hover/glow:opacity-70 transition duration-1000 animate-pulse"></div>
            <PricingCard title="Modelo Smart" icon={<Zap size={32} className="text-amber-950" />} iconBg="bg-gradient-to-br from-amber-400 to-orange-500 text-white border-none shadow-[0_0_15px_rgba(251,191,36,0.5)]" description="IA Generativa que aprende e vende por você 24h." delay="100" featured={true} color="amber" price="R$499,90" subPrice="/mês" onHire={() => openContactModal('Modelo Smart')}>
               <ul className="space-y-4 text-sm text-gray-200 mb-8">
                 <li className="flex gap-3 items-center"><Star size={16} className="text-amber-400 fill-amber-400" /> <strong>IA ChatGPT-4 Integrada</strong></li>
                 <li className="flex gap-3 items-center"><Check size={16} className="text-amber-400" /> Melhor atendimento para seus clientes</li>
                 <li className="flex gap-3 items-center"><Check size={16} className="text-amber-400" /> Treinamento com seus dados</li>
                 <li className="flex gap-3 items-center"><Check size={16} className="text-amber-400" /> Sabe lidar com diversas situações diferentes</li>
               </ul>
               <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-300"><p className="mb-2 font-bold text-amber-200">Especificações:</p><p>Processamento de Linguagem Natural (NLP). Atendimento diversificado.</p><p>Valor da Instalação: R$999,90</p></div>
            </PricingCard>
          </div>

          <PricingCard title="Modelo Premium" icon={<Crown size={32} className="text-purple-400" />} description="Ecossistema completo de vendas e CRM." delay="200" color="purple" price="R$1099,90" subPrice="/mes" onHire={() => openContactModal('Modelo Premium')}>
             <ul className="space-y-4 text-sm text-gray-300 mb-8">
               <li className="flex gap-3 items-center"><Check size={16} className="text-purple-500" /> Tudo do Smart +</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-purple-500" /> Conforto máximo</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-purple-500" /> Banco de Dados</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-purple-500" /> Automação</li>
             </ul>
             <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-400"><p className="mb-2 font-bold text-purple-200">Especificações:</p><p>Infraestrutura dedicada. Disparos em massa validados. Salva dados.</p><p>Valor da Instalação: R$2499,90</p></div>
          </PricingCard>
        </div>
      </div>
      {modalOpen && <ContactModal plan={selectedPlan} onClose={() => setModalOpen(false)} />}
    </div>
  );
}

function ContactModal({ plan, onClose }) {
  const handleBackdropClick = (e) => { if (e.target === e.currentTarget) onClose(); };
  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-fade-in-up overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500"></div>
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X size={24} /></button>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"><MessageSquare size={32} className="text-white" /></div>
          <h2 className="text-2xl font-bold text-white mb-2">Ótima Escolha!</h2>
          <p className="text-gray-400 text-sm">Você selecionou o <span className="text-blue-400 font-bold">{plan}</span>.</p>
        </div>
        <p className="text-gray-300 text-center mb-8 leading-relaxed">Para garantir o melhor atendimento e personalização, a contratação é feita diretamente com nossos consultores especialistas.</p>
        <div className="space-y-3">
          <a href="https://wa.me/553186550113?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Zytech" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 group"><MessageSquare size={20} /> Chamar no WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
          <p className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors"><Mail size={20} />contatozytechbh@gmail.com</p>
        </div>
        <div className="mt-6 text-center"><p className="text-xs text-gray-500">Tempo médio de resposta: <span className="text-green-400">5 minutos</span></p></div>
      </div>
    </div>
  );
}

function PricingCard({ title, icon, description, children, delay, featured, color, price, subPrice, iconBg, onHire }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const borderColors = { blue: 'hover:border-blue-500/50', amber: 'border-amber-500/50', purple: 'hover:border-purple-500/50' };
  const btnColors = { blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20', amber: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:brightness-110 shadow-amber-900/30 text-white', purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-900/20' };

  return (
    <div className={`relative p-8 rounded-[2rem] border transition-all duration-500 ease-out flex flex-col backdrop-blur-xl ${featured ? 'bg-slate-900/80 border-amber-500/30 z-10 scale-100 md:scale-110 shadow-2xl' : 'bg-white/[0.03] border-white/5 hover:bg-slate-900/60 hover:-translate-y-2'} ${borderColors[color]}`} style={{ animationDelay: `${delay}ms` }}>
      {featured && <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_5px_15px_rgba(245,158,11,0.4)] flex items-center gap-2"><Star size={12} className="fill-white" /> Escolha Popular</div>}
      <div className={`mb-6 p-4 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-110 ${iconBg || 'bg-white/5 border border-white/10'}`}>{icon}</div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4"><span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{price}</span><span className="text-sm text-gray-500 font-normal">{subPrice}</span></div>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8 min-h-[100px]">{description}</p>
      <button onClick={onHire} className={`relative overflow-hidden w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs mb-6 transition-all shadow-lg group ${btnColors[color]}`}>
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        <span className="relative z-10">Contratar Plano</span>
      </button>
      <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer group/toggle flex items-center justify-between py-2 border-t border-white/5">
        <span className="text-xs uppercase tracking-widest text-gray-500 group-hover/toggle:text-white transition-colors">{isExpanded ? 'Ocultar Detalhes' : 'Ver todos recursos'}</span>
        <div className={`p-1 rounded-full bg-white/5 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-white/20' : ''}`}><ChevronRight size={14} className="text-gray-400" /></div>
      </div>
      <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>{children}</div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, active, onClick, tag, delay }) {
  return (
    <div onClick={active ? onClick : undefined} className={`group relative p-8 rounded-2xl border border-white/5 backdrop-blur-md bg-white/[0.02] transition-all duration-500 ease-out overflow-hidden ${active ? 'cursor-pointer hover:bg-white/[0.05] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:-translate-y-2' : 'opacity-70 grayscale hover:grayscale-0 hover:opacity-100'}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition duration-500"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div className="flex justify-between items-start"><h3 className="text-xl font-bold uppercase tracking-wider mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>{tag && <span className="text-[10px] uppercase bg-white/10 px-2 py-1 rounded text-gray-400">{tag}</span>}</div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
        {active && <div className="flex items-center gap-2 text-sm font-bold text-blue-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">SAIBA MAIS <ChevronRight size={16} /></div>}
      </div>
    </div>
  );
}