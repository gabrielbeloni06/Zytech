import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, Globe, Cpu, LineChart, ChevronRight, Menu, X, Rocket, Send, 
  ArrowRight, Check, Zap, Crown, Shield, Star, Phone, Mail, Users, Target, 
  Eye, Award, Code, Layout, Workflow, ShoppingCart, Server, ExternalLink, Database, Settings, Play,
  TrendingUp, PieChart, Activity, Store, Bike, Calendar, Bell
} from 'lucide-react';

// Imports locais mantidos conforme solicitado
import logoZytech from './assets/logo.png';
import bgVideo from './assets/background.mp4';
import bgVideo2 from './assets/background2.mp4';
import bgWeb from './assets/website.jpg';
import bgAuto from './assets/automation.jpg';
import bgConsultoria from './assets/consulting.jpg'; 

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
               <img src={logoZytech} alt="Zytech Logo" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <span className="text-xl font-bold tracking-widest uppercase">Zy<span className="text-blue-500">tech</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full backdrop-blur-sm border border-white/5">
            <button onClick={() => navigateTo('landing')} className={`text-sm uppercase tracking-widest hover:text-blue-400 transition-colors ${currentPage === 'landing' ? 'text-blue-400' : ''}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`text-sm uppercase tracking-widest hover:text-blue-400 transition-colors ${currentPage === 'about' ? 'text-blue-400' : ''}`}>Sobre</button>
            <div className="relative group/nav">
                <button className={`text-sm uppercase tracking-widest hover:text-blue-400 transition-colors flex items-center gap-1 ${['chatbot', 'websites', 'automations', 'plans', 'consultoria'].includes(currentPage) ? 'text-blue-400' : ''}`}>
                    Soluções <ChevronRight size={14} className="rotate-90" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover/nav:block w-48">
                    <div className="bg-slate-900 border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1 backdrop-blur-xl">
                        <button onClick={() => navigateTo('chatbot')} className="text-xs uppercase text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"><Store size={14}/> Comércio</button>
                        <button onClick={() => navigateTo('websites')} className="text-xs uppercase text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"><Globe size={14}/> Websites</button>
                        <button onClick={() => navigateTo('automations')} className="text-xs uppercase text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"><Workflow size={14}/> Automações</button>
                        <button onClick={() => navigateTo('consultoria')} className="text-xs uppercase text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"><LineChart size={14}/> Consultoria</button>
                    </div>
                </div>
            </div>

            <button onClick={handleContactClick} className="text-sm uppercase tracking-widest hover:text-blue-400 transition-colors">Contato</button>
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
      {currentPage === 'websites' && <WebsitesPage navigateTo={navigateTo} />}
      {currentPage === 'automations' && <AutomationsPage navigateTo={navigateTo} />}
      {currentPage === 'consultoria' && <ConsultoriaPage navigateTo={navigateTo} />}

      <footer className="relative z-10 bg-slate-950 border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center p-1 opacity-50 hover:opacity-100 transition-all">
               <img src={logoZytech} alt="Zytech Logo" className="w-full h-full object-contain filter brightness-0 invert" />
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

function ChatbotPage({ navigateTo }) {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const deliveryPlans = [
    { name: 'Básico', price: '197,00', color: 'blue', icon: <Shield size={32} />, desc: 'Atendimento inicial para delivery.', features: ['Cardápio Digital', 'Pedidos no WhatsApp', 'Sem Taxas por pedido'] },
    { name: 'Smart', price: '499,90', color: 'amber', icon: <Zap size={32} />, desc: 'IA que vende por você.', features: ['IA de Vendas', 'Sugestão de adicionais', 'Integração iFood', 'Relatórios'] },
    { name: 'Premium', price: '1099,90', color: 'purple', icon: <Crown size={32} />, desc: 'Gestão completa de franquias.', features: ['Múltiplos Atendentes', 'API Oficial', 'CRM de Clientes', 'Dashboard Avançado'] },
  ];

  const otherPlans = [
    { name: 'Gestão Control', price: '299,90', color: 'cyan', icon: <Database size={32} />, desc: 'Organização sem Inteligência Artificial.', features: ['Dashboard de Pedidos', 'CRM Básico', 'Link de Pagamento', 'Sem IA (Menu Fixo)'] },
    { name: 'IA Agendamento', price: '599,90', color: 'emerald', icon: <Calendar size={32} />, desc: 'Automatize sua agenda com IA.', features: ['IA Tira Dúvidas', 'Agendamento Automático', 'Sincronização Google Calendar', 'Triagem de Clientes'] },
    { name: 'Full Manager', price: '899,90', color: 'rose', icon: <Bell size={32} />, desc: 'A solução definitiva para serviços.', features: ['Tudo do Plano Agendamento', 'Lembretes Automáticos (No-Show)', 'Campanhas de Retorno', 'Gestão Financeira'] },
  ];

  const handleIndustrySelect = (type) => {
    setSelectedIndustry(type);
    setStep(2);
  };

  const openContactModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
       <div className="absolute inset-0 z-0">
            <img src={bgWeb} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-950/90 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.8)_100%)]"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider">
            <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </button>

        <div className="text-center mb-10 animate-fade-in-up">
           <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6 drop-shadow-2xl">
               {step === 1 ? 'Qual o seu ' : 'Planos para '} 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                   {step === 1 ? 'Negócio?' : selectedIndustry === 'delivery' ? 'Delivery' : 'Serviços'}
               </span>
           </h1>
           <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
               {step === 1 
                ? 'Selecione o segmento para visualizarmos as melhores soluções de automação.' 
                : 'Tecnologia de ponta adaptada para a realidade da sua empresa.'}
           </p>
        </div>

        {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up">
                <div 
                    onClick={() => handleIndustrySelect('delivery')}
                    className="group bg-slate-900/60 border border-white/10 rounded-3xl p-10 cursor-pointer hover:bg-slate-800/80 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
                >
                    <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                        <Bike size={48} className="text-amber-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Delivery</h3>
                    <p className="text-gray-400">Pizzarias, Hamburguerias, Sushi e Restaurantes.</p>
                    <div className="mt-6 px-6 py-2 rounded-full border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest group-hover:bg-amber-500 group-hover:text-black transition-all">Ver Planos</div>
                </div>

                <div 
                    onClick={() => handleIndustrySelect('other')}
                    className="group bg-slate-900/60 border border-white/10 rounded-3xl p-10 cursor-pointer hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
                >
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                        <Store size={48} className="text-emerald-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Outros Comércios</h3>
                    <p className="text-gray-400">Clínicas, Barbearias, Escritórios e Varejo.</p>
                    <div className="mt-6 px-6 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest group-hover:bg-emerald-500 group-hover:text-black transition-all">Ver Planos</div>
                </div>
            </div>
        )}

        {step === 2 && (
            <div className="animate-fade-in">
                <div className="flex justify-center mb-12">
                    <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 border-b border-transparent hover:border-white transition-all pb-1">
                        <ArrowRight className="rotate-180" size={14} /> Alterar Segmento
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {(selectedIndustry === 'delivery' ? deliveryPlans : otherPlans).map((plan, idx) => (
                        <div key={idx} className="relative group/glow">
                            {idx === 1 && <div className={`absolute -inset-1 bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 rounded-[2rem] blur-xl opacity-40 group-hover/glow:opacity-70 transition duration-1000 animate-pulse`}></div>}
                            
                            <PricingCard 
                                title={`Modelo ${plan.name}`} 
                                icon={plan.icon} 
                                iconBg={idx === 1 ? `bg-gradient-to-br from-${plan.color}-400 to-${plan.color}-600 text-white border-none shadow-lg` : null}
                                description={plan.desc} 
                                delay={idx * 100} 
                                featured={idx === 1} 
                                color={plan.color} 
                                price={plan.price} 
                                subPrice="/mês" 
                                onHire={() => openContactModal(plan.name)}
                            >
                                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <Check size={16} className={`text-${plan.color}-500`} /> 
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-400">
                                    <p className={`mb-2 font-bold text-${plan.color}-300`}>Ideal para:</p>
                                    <p>{selectedIndustry === 'delivery' ? 'Operações de delivery.' : 'Gestão de agenda e clientes.'}</p>
                                </div>
                            </PricingCard>
                        </div>
                    ))}
                </div>
            </div>
        )}
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
          <a href={`https://wa.me/553186550113?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${plan}%20da%20Zytech`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 group"><MessageSquare size={20} /> Chamar no WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
          <p className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors"><Mail size={20} />contato.zytech@gmail.com</p>
        </div>
        <div className="mt-6 text-center"><p className="text-xs text-gray-500">Tempo médio de resposta: <span className="text-green-400">5 minutos</span></p></div>
      </div>
    </div>
  );
}

function PricingCard({ title, icon, description, children, delay, featured, color, price, subPrice, iconBg, onHire }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const borderColors = { 
      blue: 'hover:border-blue-500/50', 
      amber: 'border-amber-500/50', 
      purple: 'hover:border-purple-500/50',
      cyan: 'hover:border-cyan-500/50',
      emerald: 'hover:border-emerald-500/50',
      rose: 'hover:border-rose-500/50'
  };
  const btnColors = { 
      blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20', 
      amber: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:brightness-110 shadow-amber-900/30 text-white', 
      purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-900/20',
      cyan: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/20',
      emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20',
      rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-900/20'
  };

  const safeBorder = borderColors[color] || borderColors.blue;
  const safeBtn = btnColors[color] || btnColors.blue;

  return (
    <div className={`relative p-8 rounded-[2rem] border transition-all duration-500 ease-out flex flex-col backdrop-blur-xl ${featured ? 'bg-slate-900/80 border-amber-500/30 z-10 scale-100 md:scale-110 shadow-2xl' : 'bg-white/[0.03] border-white/5 hover:bg-slate-900/60 hover:-translate-y-2'} ${safeBorder}`} style={{ animationDelay: `${delay}ms` }}>
      {featured && <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_5px_15px_rgba(245,158,11,0.4)] flex items-center gap-2"><Star size={12} className="fill-white" /> Escolha Popular</div>}
      <div className={`mb-6 p-4 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-110 ${iconBg || 'bg-white/5 border border-white/10'}`}>{icon}</div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{title}</h3>
      <div className="mb-4">
          <span className="text-xs text-gray-500 font-normal block -mb-1">A partir de:</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{price}</span>
            <span className="text-sm text-gray-500 font-normal">{subPrice}</span>
          </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8 min-h-[100px]">{description}</p>
      <button onClick={onHire} className={`relative overflow-hidden w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs mb-6 transition-all shadow-lg group ${safeBtn}`}>
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

function ConsultoriaPage({ navigateTo }) {
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
                                href="https://wa.me/553186550113?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20de%20consultoria%20estratégica." 
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

function WebsitesPage({ navigateTo }) {
  const [step, setStep] = useState(1); 
  const [selectedTier, setSelectedTier] = useState(null);
  const [addons, setAddons] = useState({});
  const [orderData, setOrderData] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const tiers = [
    { id: 'basic', name: 'Básico', price: 500, color: 'blue', desc: 'Landing Page única, ideal para lançamentos.', features: ['Design Responsivo', 'Hospedagem Inclusa', '1 Página'] },
    { id: 'inter', name: 'Standard', price: 2000, color: 'purple', desc: 'Site institucional com até 5 páginas e blog.', features: ['Design Premium', 'SEO Básico', '5 Páginas', 'Blog'] },
    { id: 'adv', name: 'Business', price: 5000, color: 'pink', desc: 'Portal completo com CMS e área de membros.', features: ['Painel Admin', 'SEO Avançado', '10+ Páginas', 'Login de Usuário'] },
    { id: 'pro', name: 'Enterprise', price: 8000, color: 'amber', desc: 'Ecommerce ou aplicação web complexa.', features: ['Banco de Dados', 'API Própria', 'Pagamentos Online', 'App PWA'] },
  ];

  const availableAddons = [
    { id: 'seo_plus', name: 'SEO Ultra Otimizado', price: 500 },
    { id: 'copy', name: 'Copywriting Profissional', price: 800 },
    { id: 'logo', name: 'Criação de Identidade Visual', price: 1200 },
    { id: 'analytics', name: 'Dashboard de Analytics Custom', price: 600 },
  ];

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    setStep(2);
  };

  const toggleAddon = (addonId) => {
    setAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
  };

  const finishOrder = () => {
    const orderId = 'ZY-WEB-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    let total = selectedTier.price;
    availableAddons.forEach(a => { if(addons[a.id]) total += a.price; });

    const finalJson = {
        orderId,
        service: 'Website Development',
        tier: selectedTier.name,
        basePrice: selectedTier.price,
        addons: availableAddons.filter(a => addons[a.id]).map(a => a.name),
        totalPrice: total,
        timestamp: new Date().toISOString()
    };
    setOrderData(finalJson);
    setStep(3);
  };

  const getGradient = (color) => {
      const map = {
          blue: 'from-blue-500 to-cyan-400',
          purple: 'from-purple-500 to-pink-500',
          pink: 'from-pink-500 to-rose-500',
          amber: 'from-amber-400 to-orange-500'
      };
      return map[color] || map.blue;
  };

  const getShadow = (color) => {
      const map = {
          blue: 'group-hover:shadow-blue-500/50',
          purple: 'group-hover:shadow-purple-500/50',
          pink: 'group-hover:shadow-pink-500/50',
          amber: 'group-hover:shadow-amber-500/50'
      };
      return map[color] || map.blue;
  };

  const getWhatsAppLink = () => {
    if (!orderData) return "#";
    const message = `*NOVO PEDIDO DE WEBSITE*\n\nEsse é meu Pedido de Website com o seguinte JSON:\n\n\`\`\`json\n${JSON.stringify(orderData, null, 2)}\n\`\`\``;
    return `https://wa.me/553186550113?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src={bgWeb} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider">
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </button>

        <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-blue-300 mb-4 backdrop-blur-md shadow-lg">Zytech Web Studio</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Crie seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">Império Digital</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">Selecione a fundação do seu projeto e personalize cada detalhe.</p>
        </div>

        {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
                {tiers.map((tier, idx) => (
                    <div 
                        key={tier.id} 
                        onClick={() => handleTierSelect(tier)} 
                        className={`
                            group relative bg-slate-900/60 border border-white/10 rounded-3xl p-8 cursor-pointer 
                            hover:-translate-y-3 transition-all duration-300 flex flex-col h-full backdrop-blur-md
                            hover:bg-slate-800/80 shadow-2xl ${getShadow(tier.color)}
                        `}
                    >
                        <div className={`absolute -inset-[1px] bg-gradient-to-r ${getGradient(tier.color)} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`}></div>
                        
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradient(tier.color)} flex items-center justify-center mb-6 shadow-lg text-white`}>
                            {idx === 0 ? <Layout size={24}/> : idx === 1 ? <Globe size={24}/> : idx === 2 ? <Database size={24}/> : <ShoppingCart size={24}/>}
                        </div>

                        <h3 className="text-2xl font-bold uppercase mb-2 tracking-wide">{tier.name}</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{tier.desc}</p>
                        
                        <div className="mb-6">
                            <span className="text-xs text-gray-500 font-normal block mb-1">A partir de:</span>
                            <div className="text-3xl font-bold text-white tracking-tight">R$ {tier.price}</div>
                        </div>

                        <ul className="text-sm text-gray-300 space-y-3 mb-8 border-t border-white/10 pt-6">
                            {tier.features.map(f => <li key={f} className="flex gap-3 items-center"><div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getGradient(tier.color)}`}></div> {f}</li>)}
                        </ul>
                        
                        <button className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 group-hover:border-transparent`}>
                            Configurar
                        </button>
                    </div>
                ))}
            </div>
        )}

        {step === 2 && selectedTier && (
            <div className="max-w-4xl mx-auto animate-fade-in relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-3xl -z-10"></div>
                
                <div className="bg-slate-900/80 border border-white/20 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${getGradient(selectedTier.color)}`}></div>
                    
                    <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white flex gap-2 items-center text-xs uppercase font-bold tracking-widest mb-8 transition-colors"><ChevronRight className="rotate-180" size={14}/> Alterar Plano</button>
                    
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold uppercase mb-2">Personalize seu <span className={`text-transparent bg-clip-text bg-gradient-to-r ${getGradient(selectedTier.color)}`}>{selectedTier.name}</span></h2>
                            <p className="text-gray-400 mb-8">Adicione superpoderes ao seu projeto. Selecione os itens desejados.</p>

                            <div className="space-y-4">
                                {availableAddons.map(addon => (
                                    <div 
                                        key={addon.id} 
                                        onClick={() => toggleAddon(addon.id)}
                                        className={`
                                            group p-5 rounded-2xl border cursor-pointer flex justify-between items-center transition-all duration-300
                                            ${addons[addon.id] 
                                                ? `bg-${selectedTier.color === 'amber' ? 'orange' : selectedTier.color}-500/20 border-${selectedTier.color === 'amber' ? 'orange' : selectedTier.color}-500 shadow-[0_0_15px_rgba(0,0,0,0.2)]` 
                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}
                                        `}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${addons[addon.id] ? 'bg-white text-slate-900' : 'bg-white/5 text-gray-400'}`}>
                                                {addon.id === 'seo_plus' && <SearchIcon size={20}/>}
                                                {addon.id === 'copy' && <PenToolIcon size={20}/>}
                                                {addon.id === 'logo' && <Star size={20}/>}
                                                {addon.id === 'analytics' && <LineChart size={20}/>}
                                                {!['seo_plus','copy','logo','analytics'].includes(addon.id) && <Settings size={20}/>}
                                            </div>
                                            <div>
                                                <div className={`font-bold text-sm ${addons[addon.id] ? 'text-white' : 'text-gray-300'}`}>{addon.name}</div>
                                                <div className={`text-xs ${addons[addon.id] ? 'text-white/70' : 'text-gray-500'}`}>+ R$ {addon.price}</div>
                                            </div>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${addons[addon.id] ? `bg-white border-white` : 'border-gray-600 group-hover:border-gray-400'}`}>
                                            {addons[addon.id] && <Check size={14} className="text-slate-900 stroke-[3]"/>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-80 bg-black/40 rounded-2xl p-6 h-fit border border-white/5">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Resumo do Pedido</h3>
                            <div className="flex justify-between text-sm mb-2 text-gray-300">
                                <span>{selectedTier.name} (Base)</span>
                                <span>R$ {selectedTier.price}</span>
                            </div>
                            {availableAddons.filter(a => addons[a.id]).map(a => (
                                <div key={a.id} className="flex justify-between text-xs mb-2 text-gray-400">
                                    <span>+ {a.name}</span>
                                    <span>R$ {a.price}</span>
                                </div>
                            ))}
                            <div className="h-px bg-white/10 my-4"></div>
                            <div className="flex justify-between items-end mb-8">
                                <span className="text-sm font-bold text-gray-300">Total Estimado</span>
                                <span className="text-2xl font-bold text-white">R$ {selectedTier.price + availableAddons.reduce((acc, curr) => acc + (addons[curr.id] ? curr.price : 0), 0)}</span>
                            </div>
                            <button onClick={finishOrder} className={`w-full py-4 bg-gradient-to-r ${getGradient(selectedTier.color)} text-white rounded-xl font-bold uppercase tracking-wider flex justify-center items-center gap-2 shadow-lg hover:scale-105 transition-transform`}>
                                Gerar Pedido <ArrowRight size={18}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {step === 3 && orderData && (
            <div className="max-w-2xl mx-auto text-center animate-fade-in-up pt-12">
                <div className="relative inline-block mb-8">
                    <div className="absolute -inset-4 bg-green-500/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Check size={48} className="text-white" />
                    </div>
                </div>
                <h2 className="text-4xl font-bold uppercase mb-4 tracking-tight">Pedido Confirmado!</h2>
                <p className="text-gray-300 mb-10 text-lg">Seu projeto foi inicializado no sistema. O comprovante JSON foi gerado.</p>
                
                <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 text-left font-mono text-xs text-green-400 overflow-x-auto shadow-2xl relative mb-8">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-white/10 text-white rounded-bl-xl uppercase font-bold tracking-widest text-[10px]">System Output</div>
                    <pre>{JSON.stringify(orderData, null, 2)}</pre>
                </div>

                <div className="flex justify-center gap-4">
                    <button onClick={() => navigateTo('landing')} className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors uppercase text-xs font-bold tracking-widest">Voltar para Home</button>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-500 transition-colors uppercase text-xs font-bold tracking-widest text-white shadow-lg flex items-center gap-2">
                        Falar com Engenheiro <MessageSquare size={16}/>
                    </a>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

function AutomationsPage({ navigateTo }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAutoTier, setSelectedAutoTier] = useState(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const tiers = [
        { name: 'Básico', price: '600', color: 'cyan', icon: <Zap size={24}/>, desc: 'Automação de e-mails, planilhas e tarefas simples.', features: ['Automação única', 'Integração com APIs', 'Alertas por Email'] },
        { name: 'Intermediário', price: '1.499', color: 'purple', icon: <Workflow size={24}/>, desc: 'Integração CRM, WhatsApp API e Dashboards BI.', features: ['Mais de uma Automação', 'Automações Modernas', 'Disparos Sociais', 'Suporte Prioritário'] },
        { name: 'Avançado', price: '2.999', color: 'emerald', icon: <Server size={24}/>, desc: 'IA Agents, Web Scraping e Sistemas Complexos.', features: ['Fluxos Ilimitados', 'IA Personalizada', 'Servidor Dedicado', 'Suporte Premium'] },
    ];

    const openAutoModal = (tier) => {
        setSelectedAutoTier(tier);
        setModalOpen(true);
    };

    return (
        <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 z-0">
                <img src={bgAuto} alt="Automation BG" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div key={idx} className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-b from-${tier.color}-500 to-${tier.color}-900 rounded-[2rem] blur opacity-40 group-hover:opacity-100 transition duration-700`}></div>
                            
                            <div className="relative bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 h-full flex flex-col hover:bg-slate-800/90 transition-colors backdrop-blur-xl">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-${tier.color}-500/10 border border-${tier.color}-500/30 flex items-center justify-center text-${tier.color}-400 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                        {tier.icon}
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-${tier.color}-500/30 text-${tier.color}-400 bg-${tier.color}-500/5`}>
                                        Tier {idx + 1}
                                    </div>
                                </div>
                                
                                <h3 className="text-3xl font-bold uppercase tracking-wide mb-2 text-white">{tier.name}</h3>
                                <div className="flex flex-col mb-6">
                                    <span className="text-xs text-gray-500 font-normal block mb-1">A partir de:</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-gray-400">R$</span>
                                        <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-${tier.color}-400`}>{tier.price}</span>
                                        <span className="text-sm font-normal text-gray-500">/setup</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed border-b border-white/5 pb-8">{tier.desc}</p>
                                
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-${tier.color}-400 shadow-[0_0_5px_currentColor] text-${tier.color}-400`}></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    onClick={() => openAutoModal(tier)}
                                    className={`w-full py-4 rounded-xl border border-${tier.color}-500/50 text-${tier.color}-300 font-bold uppercase tracking-widest hover:bg-${tier.color}-500 hover:text-slate-900 hover:border-transparent transition-all shadow-[0_0_20px_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(var(--color-${tier.color}-500),0.4)] group-hover:scale-[1.02] active:scale-95`}
                                >
                                    Iniciar Projeto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalOpen && selectedAutoTier && (
                <AutomationContactModal tier={selectedAutoTier} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
}

function AutomationContactModal({ tier, onClose }) {
    const handleBackdropClick = (e) => { if (e.target === e.currentTarget) onClose(); };
    
    return (
      <div onClick={handleBackdropClick} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in p-4">
        <div className="bg-slate-950 border border-white/10 rounded-[2rem] p-1 w-full max-w-lg relative shadow-[0_0_100px_rgba(0,255,255,0.1)] animate-fade-in-up">
            <div className={`absolute inset-0 bg-gradient-to-br from-${tier.color}-500/20 to-purple-500/20 rounded-[2rem] pointer-events-none`}></div>
            
            <div className="bg-slate-900/90 rounded-[1.8rem] p-8 relative overflow-hidden">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"><X size={24} /></button>
                
                <div className="flex flex-col items-center text-center mb-8">
                    <div className={`w-20 h-20 rounded-full bg-${tier.color}-500/10 border border-${tier.color}-500/30 flex items-center justify-center mb-6 text-${tier.color}-400 shadow-[0_0_30px_rgba(0,0,0,0.3)]`}>
                        <Workflow size={40} />
                    </div>
                    <div className={`text-${tier.color}-400 text-xs font-bold uppercase tracking-[0.2em] mb-2`}>Plano Selecionado</div>
                    <h2 className="text-3xl font-bold text-white uppercase">{tier.name}</h2>
                </div>

                <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/5">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                        <span className="text-gray-400 text-sm">Setup Inicial</span>
                        <span className="text-white font-bold text-lg">R$ {tier.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed text-center">
                        Projetos de automação exigem uma análise técnica preliminar. Nosso time de engenharia irá desenhar o fluxo ideal para sua necessidade.
                    </p>
                </div>

                <a 
                    href={`https://wa.me/553186550113?text=Olá,%20tenho%20interesse%20no%20plano%20de%20Automação%20${tier.name}.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center justify-center gap-3 w-full py-4 bg-${tier.color}-600 hover:bg-${tier.color}-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-${tier.color}-500/30 group uppercase tracking-wider text-sm`}
                >
                    <MessageSquare size={18} />
                    Conectar Sistema
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
      </div>
    );
}

const CyberpunkChart = () => {
    const pointsPink = "0,60 16.6,50 33.3,50 50,30 66.6,10 83.3,20 100,40";
    const pointsCyan = "0,90 16.6,70 33.3,10 50,50 66.6,80 83.3,90 100,90";

    const areaPink = `0,100 ${pointsPink} 100,100`;
    const areaCyan = `0,100 ${pointsCyan} 100,100`;

    return (
        <div className="relative w-full aspect-[16/10] bg-slate-900/80 border border-slate-700 rounded-xl p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
             <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             
             <div className="absolute top-4 left-6 z-20">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-pink-400 font-mono tracking-wider">PROJECTED</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-75"></span>
                    <span className="text-xs font-bold text-cyan-400 font-mono tracking-wider">ACTUAL</span>
                 </div>
             </div>

             <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 preserve-3d" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradPink" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradCyan" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <polygon points={areaPink} fill="url(#gradPink)" className="animate-fade-in opacity-50" />
                <polygon points={areaCyan} fill="url(#gradCyan)" className="animate-fade-in opacity-50" />

                <polyline 
                    points={pointsPink} 
                    fill="none" 
                    stroke="#ec4899" 
                    strokeWidth="1.5" 
                    filter="url(#glow)"
                    className="drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                     <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="2s" fill="freeze" />
                </polyline>

                <polyline 
                    points={pointsCyan} 
                    fill="none" 
                    stroke="#22d3ee" 
                    strokeWidth="1.5" 
                    filter="url(#glow)"
                    className="drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="2.5s" fill="freeze" />
                </polyline>

                {[
                    {x:0,y:60}, {x:16.6,y:50}, {x:33.3,y:50}, {x:50,y:30}, {x:66.6,y:10}, {x:83.3,y:20}, {x:100,y:40}
                ].map((p,i) => (
                    <g key={`p-${i}`}>
                        <circle cx={p.x} cy={p.y} r="1.5" fill="#ec4899" className="animate-ping" style={{animationDuration: '3s', animationDelay: `${i*0.2}s`}} />
                        <circle cx={p.x} cy={p.y} r="1" fill="white" />
                    </g>
                ))}
                
                {[
                    {x:0,y:90}, {x:16.6,y:70}, {x:33.3,y:10}, {x:50,y:50}, {x:66.6,y:80}, {x:83.3,y:90}, {x:100,y:90}
                ].map((p,i) => (
                     <g key={`c-${i}`}>
                        <circle cx={p.x} cy={p.y} r="1.5" fill="#22d3ee" className="animate-ping" style={{animationDuration: '2s', animationDelay: `${i*0.1}s`}} />
                        <circle cx={p.x} cy={p.y} r="1" fill="white" />
                    </g>
                ))}

             </svg>

             <div className="absolute bottom-2 left-0 w-full flex justify-between px-4 text-[8px] text-slate-500 font-mono">
                <span>START</span>
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>END</span>
             </div>
        </div>
    );
};

const SearchIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const PenToolIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;

function AboutPage({ navigateTo }) {
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

function LandingPage({ navigateTo }) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const text = `*NOVO CONTATO VIA SITE*\n\n*Nome:* ${contactForm.name}\n*Email:* ${contactForm.email}\n*Mensagem:* ${contactForm.message}`;
    const url = `https://wa.me/553186550113?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-lg">O Futuro do <br/> Atendimento</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">Automatize, venda e cresça. A Zytech transforma visitantes em clientes com inteligência artificial e design de alta performance.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => navigateTo('chatbot')} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">Conhecer Soluções <ArrowRight size={18} /></button>
            <button className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-full font-medium tracking-wide transition-all backdrop-blur-sm">Falar com Consultor</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
      </header>
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">Nossos Serviços</h2><div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<MessageSquare size={32} className="text-blue-400" />} title="Comércio" desc="Atendimento automatizado para Delivery e Serviços gerais." active={true} onClick={() => navigateTo('chatbot')} delay="0" />
            <ServiceCard icon={<Globe size={32} className="text-purple-400" />} title="Websites" desc="Landing pages de alta conversão e design futurista." active={true} onClick={() => navigateTo('websites')} tag="Disponível" delay="100" />
            <ServiceCard icon={<Cpu size={32} className="text-amber-400" />} title="Automações" desc="Integrações que eliminam tarefas repetitivas do seu negócio." active={true} onClick={() => navigateTo('automations')} tag="Disponível" delay="200" />
            <ServiceCard icon={<LineChart size={32} className="text-emerald-400" />} title="Consultoria" desc="Análise de dados e estratégias digitais para escalar." active={true} onClick={() => navigateTo('consultoria')} tag="Novo" delay="300" />
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
                  <a href="mailto:contato.zytech@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"><div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={16} /></div>contato.zytech@gmail.com</a>
                  <a href="https://wa.me/553186550113?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20as%20soluções%20Zytech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"><div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-green-500 group-hover:text-white transition-all"><Phone size={16} /></div>+55 (31) 86550113</a>
                </div>
              </div>
              <div className="mt-12"><p className="text-xs text-gray-500 uppercase tracking-widest">Localização</p><p className="text-white">Belo Horizonte, MG</p></div>
            </div>
            <div className="w-full md:w-1/2 p-10 bg-slate-950/50">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nome</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                        placeholder="Seu nome"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                        placeholder="seu@email.com" 
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Mensagem</label>
                    <textarea 
                        rows="4" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                        placeholder="Como podemos ajudar?"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    ></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">Enviar <Send size={16} className="group-hover:translate-x-1 transition-transform" /></button>
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
            <div className="flex gap-4">
                <button onClick={() => navigateTo('plans')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 group">Ver Planos Disponíveis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></button>
                <a href="https://google.com.br" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded font-bold uppercase tracking-widest transition-all border border-white/20 flex items-center gap-2">
                    Testar Agora <ExternalLink size={18}/>
                </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-md aspect-[3/4] bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-4 pb-4 border-b border-white/5 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-1"><Cpu className="text-white" /></div>
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
  const [billingCycle, setBillingCycle] = useState('monthly'); 

  const prices = {
    basic: { monthly: "R$ 197,00", semiannual: "R$ 177,30", annual: "R$ 147,75" },
    smart: { monthly: "R$ 499,90", semiannual: "R$ 449,90", annual: "R$ 374,90" },
    premium: { monthly: "R$ 1099,90", semiannual: "R$ 989,90", annual: "R$ 824,90" }
  };

  const openContactModal = (planName) => { setSelectedPlan(`${planName} (${billingCycle === 'monthly' ? 'Mensal' : billingCycle === 'semiannual' ? 'Semestral' : 'Anual'})`); setModalOpen(true); };
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
       <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")' }}>
         <div className="absolute inset-0 bg-slate-950/90 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.8)_100%)]"></div>
       </div>
      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('chatbot')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider"><ArrowRight className="rotate-180" size={16} /> Voltar para Soluções</button>
        <div className="text-center mb-10 animate-fade-in-up">
           <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6 drop-shadow-2xl">Escolha seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ChatBot</span> para Whatsapp</h1>
           <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">Modelos de IA desenhados para escalar operações. Escolha o ciclo ideal para o seu negócio.</p>
        </div>
        <div className="flex justify-center mb-16 animate-fade-in-up animation-delay-500">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex flex-wrap justify-center gap-1 sm:gap-0 relative">
            <button onClick={() => setBillingCycle('monthly')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Mensal</button>
            <button onClick={() => setBillingCycle('semiannual')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'semiannual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Semestral <span className="ml-1 text-[10px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded border border-green-500/30">-10%</span></button>
            <button onClick={() => setBillingCycle('annual')} className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'annual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Anual <span className="ml-1 text-[10px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded border border-green-500/30">-25%</span></button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard title="Modelo Básico" icon={<Shield size={32} className="text-blue-400" />} description="Entrada perfeita para automação de atendimento." delay="0" color="blue" price={prices.basic[billingCycle]} subPrice="/mês" onHire={() => openContactModal('Modelo Básico')}>
             <ul className="space-y-4 text-sm text-gray-300 mb-8">
               <li className="flex gap-3 items-center"><Check size={16} className="text-blue-500" /> Respostas Rápidas</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-blue-500" /> Pré definição</li>
               <li className="flex gap-3 items-center"><Check size={16} className="text-blue-500" /> Escolha suas opções</li>
             </ul>
             <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-400"><p className="mb-2 font-bold text-blue-200">Especificações:</p><p>Bot baseado em regras simples. Ideal para triagem inicial.</p><p>Valor da Instalação: R$497,00</p></div>
          </PricingCard>
          <div className="relative group/glow">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] blur-xl opacity-40 group-hover/glow:opacity-70 transition duration-1000 animate-pulse"></div>
            <PricingCard title="Modelo Smart" icon={<Zap size={32} className="text-amber-950" />} iconBg="bg-gradient-to-br from-amber-400 to-orange-500 text-white border-none shadow-[0_0_15px_rgba(251,191,36,0.5)]" description="IA Generativa que aprende e vende por você 24h." delay="100" featured={true} color="amber" price={prices.smart[billingCycle]} subPrice="/mês" onHire={() => openContactModal('Modelo Smart')}>
               <ul className="space-y-4 text-sm text-gray-200 mb-8">
                 <li className="flex gap-3 items-center"><Star size={16} className="text-amber-400 fill-amber-400" /> <strong>IA ChatGPT-4 Integrada</strong></li>
                 <li className="flex gap-3 items-center"><Check size={16} className="text-amber-400" /> Melhor atendimento para seus clientes</li>
                 <li className="flex gap-3 items-center"><Check size={16} className="text-amber-400" /> Treinamento com seus dados</li>
                 <li className="flex gap-3 items-center"><Check size={16} className="text-amber-400" /> Sabe lidar com diversas situações diferentes</li>
               </ul>
               <div className="mt-4 border-t border-white/10 pt-4 text-xs text-gray-300"><p className="mb-2 font-bold text-amber-200">Especificações:</p><p>Processamento de Linguagem Natural (NLP). Atendimento diversificado.</p><p>Valor da Instalação: R$999,90</p></div>
            </PricingCard>
          </div>
          <PricingCard title="Modelo Premium" icon={<Crown size={32} className="text-purple-400" />} description="Ecossistema completo de vendas e CRM." delay="200" color="purple" price={prices.premium[billingCycle]} subPrice="/mês" onHire={() => openContactModal('Modelo Premium')}>
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
          <p className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors"><Mail size={20} />contato.zytech@gmail.com</p>
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