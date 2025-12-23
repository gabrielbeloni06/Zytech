import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Zap, Crown, Shield, Bike, Store, MessageSquare, Bell, LayoutTemplate, Database, Clock
} from 'lucide-react';
import bgWeb from './assets/website.jpg';
import { PricingCard, ContactModal } from './SharedComponents';

export default function CommercePage({ navigateTo }) {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState(null); 
  const [subCategory, setSubCategory] = useState(null); 
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('semiannual'); 

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getPrice = (basePrice) => {
    if (billingCycle === 'semiannual') return Math.floor(basePrice * 0.9); 
    if (billingCycle === 'annual') return Math.floor(basePrice * 0.75); 
    return basePrice;
  };

  const deliveryPlans = {
    simple: [
      { name: 'ZyStart', price: 147, color: 'blue', icon: <Shield size={32} />, desc: 'Atendimento essencial sem IA.', features: ['Cardápio Digital Simples', 'Pedidos no WhatsApp', 'Painel de Pedidos'] }
    ],
    advanced: [
      { name: 'ZyControl', price: 397, color: 'cyan', icon: <Database size={32} />, desc: 'Controle total com automação básica.', features: ['IA de Triagem', 'Gestão de Entregadores', 'Relatórios Básicos'] },
      { name: 'ZyBotAI', price: 697, color: 'amber', icon: <Zap size={32} />, desc: 'IA Avançada de Vendas.', features: ['IA ChatGPT-4', 'Sugestão de Adicionais', 'Recuperação de Carrinho'] },
      { name: 'ZyCore', price: 1297, color: 'purple', icon: <Crown size={32} />, desc: 'O núcleo completo da sua operação.', features: ['Múltiplos Atendentes', 'API iFood', 'CRM Fidelidade', 'App do Entregador'] }
    ]
  };

  const commercePlans = {
    simple: [
      { name: 'ZyStart', price: 147, color: 'blue', icon: <Calendar size={32} />, desc: 'Agendamento simplificado sem site.', features: ['Link de Agenda', 'Lembretes WhatsApp', 'Gestão de Clientes'] }
    ],
    advanced: [
      { name: 'ZyControl', price: 397, color: 'cyan', icon: <LayoutTemplate size={32} />, desc: 'Agendamento integrado ao seu site.', features: ['Site One-Page Incluso', 'Agendamento Online', 'Pagamento Antecipado'] },
      { name: 'ZyBotAI', price: 697, color: 'emerald', icon: <MessageSquare size={32} />, desc: 'Atendente Virtual Inteligente.', features: ['IA Tira Dúvidas 24h', 'Reagendamento Automático', 'Triagem de Leads'] },
      { name: 'ZyCore', price: 1297, color: 'rose', icon: <Bell size={32} />, desc: 'Ecossistema completo de serviços.', features: ['Campanhas de Marketing', 'Clube de Assinatura', 'Gestão Financeira', 'Dashboard BI'] }
    ]
  };

  const handleIndustrySelect = (type) => {
    setSelectedIndustry(type);
    setStep(2);
    // Smooth scroll to next step if needed
    setTimeout(() => document.getElementById('step-container').scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleSubCategorySelect = (type) => {
    setSubCategory(type);
    setStep(3);
    setTimeout(() => document.getElementById('plans-container').scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const openContactModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const activePlans = selectedIndustry && subCategory && (selectedIndustry === 'delivery' ? deliveryPlans[subCategory] : commercePlans[subCategory]);

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-slate-950">
       <div className="absolute inset-0 z-0">
            <img src={bgWeb} alt="Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider group">
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} /> Voltar para Home
        </button>

        {/* HERO SECTION WITH PERSUASION */}
        <div className="text-center mb-24 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Store size={14} /> Soluções para Comércio
           </div>
           <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-white">
               Venda Mais.<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                   Atenda Melhor.
               </span>
           </h1>
           <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
               De delivery a clínicas, nossa tecnologia organiza seus pedidos, agenda seus clientes e elimina o caos do WhatsApp.
           </p>
        </div>

        {/* PERSUASION GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-32 border-b border-white/5 pb-20">
             <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                    <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sem Fila de Espera</h3>
                <p className="text-gray-400 text-sm">Seu cliente não quer esperar. Atendimento imediato 24/7 aumenta a conversão em até 40%.</p>
             </div>
             <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                    <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dados Centralizados</h3>
                <p className="text-gray-400 text-sm">Histórico de pedidos, preferências e dados do cliente salvos automaticamente.</p>
             </div>
             <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 text-amber-400">
                    <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Venda Sugestiva</h3>
                <p className="text-gray-400 text-sm">Nossa IA sugere acompanhamentos e adicionais na hora certa, aumentando seu ticket médio.</p>
             </div>
        </div>

        {/* STEP 1: INDUSTRY SELECTION */}
        <div id="step-container" className="bg-slate-900/80 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Selecione seu Ramo</h2>
                <p className="text-gray-400">Para personalizarmos a oferta ideal.</p>
            </div>

            {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up">
                    <div onClick={() => handleIndustrySelect('delivery')} className="group bg-slate-800/50 border border-white/10 rounded-3xl p-10 cursor-pointer hover:bg-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                            <Bike size={48} className="text-amber-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Delivery</h3>
                        <p className="text-gray-400 mb-8">Pizzarias, Hamburguerias, Sushi.</p>
                        <div className="px-8 py-3 rounded-full border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest group-hover:bg-amber-500 group-hover:text-black transition-all">Ver Soluções</div>
                    </div>
                    <div onClick={() => handleIndustrySelect('other')} className="group bg-slate-800/50 border border-white/10 rounded-3xl p-10 cursor-pointer hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                            <Store size={48} className="text-emerald-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Outros Comércios</h3>
                        <p className="text-gray-400 mb-8">Clínicas, Escritórios, Varejo.</p>
                        <div className="px-8 py-3 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest group-hover:bg-emerald-500 group-hover:text-black transition-all">Ver Soluções</div>
                    </div>
                </div>
            )}

            {/* STEP 2: SUB-CATEGORY SELECTION */}
            {step === 2 && (
                <div className="animate-fade-in">
                    <div className="flex justify-center mb-12">
                        <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 border-b border-transparent hover:border-white transition-all pb-1"><ArrowRight className="rotate-180" size={14} /> Voltar para Ramos</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div onClick={() => handleSubCategorySelect('simple')} className="group bg-slate-800/50 border border-white/10 rounded-3xl p-10 cursor-pointer hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                                <Shield size={40} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedIndustry === 'delivery' ? 'Essencial (Sem IA)' : 'Agendamento Direto'}</h3>
                            <p className="text-gray-400 mb-6">Soluções diretas e funcionais para quem está começando.</p>
                            <div className="px-6 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">Selecionar</div>
                        </div>
                        <div onClick={() => handleSubCategorySelect('advanced')} className="group bg-slate-800/50 border border-white/10 rounded-3xl p-10 cursor-pointer hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                                <Cpu size={40} className="text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedIndustry === 'delivery' ? 'Power AI (Com IA)' : 'Gestão Inteligente'}</h3>
                            <p className="text-gray-400 mb-6">Automação avançada, site incluso e inteligência artificial.</p>
                             <div className="px-6 py-2 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest">Selecionar</div>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: PLANS DISPLAY */}
            {step === 3 && activePlans && (
                <div id="plans-container" className="animate-fade-in">
                    <div className="flex justify-center mb-8 gap-8">
                        <button onClick={() => setStep(2)} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 border-b border-transparent hover:border-white transition-all pb-1">
                            <ArrowRight className="rotate-180" size={14} /> Voltar para Tipos
                        </button>
                    </div>

                    <div className="flex justify-center mb-16">
                    <div className="bg-slate-950 border border-white/10 p-1.5 rounded-full flex flex-wrap justify-center gap-1 sm:gap-0 relative">
                        <button onClick={() => setBillingCycle('monthly')} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Mensal</button>
                        <button onClick={() => setBillingCycle('semiannual')} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'semiannual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Semestral <span className="ml-1 text-[9px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded border border-green-500/30">-10%</span></button>
                        <button onClick={() => setBillingCycle('annual')} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'annual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Anual <span className="ml-1 text-[9px] text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded border border-green-500/30">-25%</span></button>
                    </div>
                    </div>

                    <div className={`grid gap-8 items-start justify-center ${activePlans.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-3'}`}>
                        {activePlans.map((plan, idx) => (
                            <div key={idx} className="h-full">
                                <PricingCard 
                                    title={plan.name} 
                                    icon={plan.icon} 
                                    iconBg={(activePlans.length === 3 && idx === 1) ? `bg-gradient-to-br from-${plan.color}-400 to-${plan.color}-600 text-white border-none shadow-lg` : null}
                                    description={plan.desc} 
                                    delay={idx * 100} 
                                    featured={activePlans.length === 3 && idx === 1} 
                                    color={plan.color} 
                                    price={getPrice(plan.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
                                    subPrice={`/${billingCycle === 'monthly' ? 'mês' : billingCycle === 'semiannual' ? 'mês (6x)' : 'mês (12x)'}`} 
                                    onHire={() => openContactModal(plan.name)}
                                >
                                    <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                        {plan.features.map((feat, i) => (
                                            <li key={i} className="flex gap-3 items-center">
                                                <div className={`w-5 h-5 rounded-full bg-${plan.color}-500/20 flex items-center justify-center text-${plan.color}-500`}>
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </PricingCard>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
      {modalOpen && <ContactModal plan={selectedPlan} onClose={() => setModalOpen(false)} />}
    </div>
  );
}