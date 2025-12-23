import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Zap, Crown, Shield, Bike, Store, MessageSquare, Database, Clock, TrendingUp, Check, Star, Building2, ShoppingBag
} from 'lucide-react';
import { ContactModal } from './SharedComponents';

const bgRedTheme = "https://images.unsplash.com/photo-1629737199462-8178129759d6?q=80&w=2070&auto=format&fit=crop";

export default function CommercePage({ navigateTo }) {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(null); 
  const [billingCycle, setBillingCycle] = useState('semiannual'); 
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getPrice = (basePrice) => {
    if (billingCycle === 'semiannual') return Math.floor(basePrice * 0.9); 
    if (billingCycle === 'annual') return Math.floor(basePrice * 0.75); 
    return basePrice;
  };

  const deliveryPlans = [
    {
      name: 'ZyStart Delivery',
      tag: 'Básico',
      price: 147,
      color: 'red',
      icon: <Shield className="text-red-500" size={24} />,
      desc: 'Atendimento inicial ágil para pequenos deliveries.',
      features: ['Cardápio Digital Simples', 'Pedidos via WhatsApp', 'Painel Básico', 'Mensagens de sua escolha']
    },
    {
      name: 'ZyControl Delivery',
      tag: 'Gestão',
      price: 397,
      color: 'orange',
      icon: <Database className="text-orange-500" size={24} />,
      desc: 'Controle total com automação para crescer.',
      features: ['Tudo do Start +', 'Dashboard', 'Relatórios Financeiros', 'Controle de Pedidos', 'Controle de Estoque']
    },
    {
      name: 'ZyBotAI Delivery',
      tag: 'Inteligência',
      price: 697,
      color: 'amber',
      popular: true,
      icon: <Zap className="text-amber-500" size={24} />,
      desc: 'Vendedor virtual 24h que aumenta o ticket médio.',
      features: ['Tudo do Control +', 'IA Vendedora', 'Sugestão', 'Dashboard', 'Controle de Pedidos Avançado']
    },
    {
      name: 'ZyCore Delivery',
      tag: 'Grandioso',
      price: 997,
      color: 'purple',
      icon: <Crown className="text-purple-500" size={24} />,
      desc: 'Potência máxima para grandes volumes e redes.',
      features: ['Tudo do BotAI +', 'Dashboard', 'API Oficial WhatsApp', 'Persona da AI', 'Escolha o seu modelo de atendimento']
    }
  ];

  const businessPlans = [
    {
      name: 'ZyStart Empresas',
      tag: 'Básico',
      price: 147,
      color: 'red',
      icon: <Store className="text-red-500" size={24} />,
      desc: 'Digitalize seus agendamentos e organize a casa.',
      features: ['Básico', 'Dashboard', 'Agendamento automático', 'Opção de horário']
    },
    {
      name: 'ZyControl Empresas',
      tag: 'Profissional',
      price: 247,
      color: 'orange',
      icon: <Store className="text-orange-500" size={24} />,
      desc: 'Profissionalize com site e pagamentos online.',
      features: ['Tudo do Start +', 'Site de agendamentos', 'Agendamentos Automáticos', 'Bloqueio de Agenda', 'Personalize seu calendário']
    },
    {
      name: 'ZyBotAI Empresas',
      tag: 'Automação',
      price: 397,
      color: 'amber',
      popular: true,
      icon: <MessageSquare className="text-amber-500" size={24} />,
      desc: 'Atendimento humanizado sem intervenção humana.',
      features: ['Tudo do Control +', 'IA Humanizada', 'Responde Dúvidas', 'Agendamento Personalizado', 'Dashboard']
    },
    {
      name: 'ZyCore Empresas',
      tag: 'Enterprise',
      price: 697,
      color: 'purple',
      icon: <TrendingUp className="text-purple-500" size={24} />,
      desc: 'Gestão completa para escalar seu serviço.',
      features: ['Tudo do BotAI +', 'Automação de Atendimento', 'Persona da AI', 'Deixe no seu estilo', 'Dashboard']
    }
  ];

  const currentPlans = activeTab === 'delivery' ? deliveryPlans : businessPlans;

  const handleSelection = (tab) => {
    setActiveTab(tab);
    setStep(2);
    setTimeout(() => {
      const plansSection = document.getElementById('plans-section');
      if (plansSection) plansSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-500/30">
      
      <div className="fixed inset-0 z-0">
        <img src={bgRedTheme} alt="Red Theme Background" className="w-full h-full object-cover opacity-20 mix-blend-hard-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#1a0505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        <button 
            onClick={() => navigateTo('landing')} 
            className="mb-12 flex items-center gap-2 text-xs font-bold text-red-500 hover:text-white transition-colors uppercase tracking-widest group"
        >
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={14} /> 
            Voltar ao Hub
        </button>

        <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                <MessageSquare size={12} /> Chatbots Inteligentes
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                O Atendimento do <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
                    Futuro é Agora
                </span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Automatize vendas, suporte e agendamentos com a tecnologia de IA mais avançada do mercado.
                Escolha seu segmento e transforme seu WhatsApp em uma máquina de resultados.
            </p>
        </div>

        {step === 1 && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24 animate-fade-in">
                <div 
                    onClick={() => handleSelection('delivery')}
                    className="group relative bg-zinc-900/50 border border-white/10 hover:border-red-500/50 rounded-[2.5rem] p-10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col items-center text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Bike size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Delivery</h3>
                    <p className="text-zinc-400 text-sm relative z-10">Para restaurantes, hamburguerias e dark kitchens que querem vender mais.</p>
                    <div className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-widest group-hover:bg-red-500 transition-colors relative z-10">
                        Ver Planos Delivery
                    </div>
                </div>

                <div 
                    onClick={() => handleSelection('business')}
                    className="group relative bg-zinc-900/50 border border-white/10 hover:border-orange-500/50 rounded-[2.5rem] p-10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col items-center text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-24 h-24 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Building2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Empresa & Serviços</h3>
                    <p className="text-zinc-400 text-sm relative z-10">Para clínicas, escritórios, barbearias e varejo que precisam de agendamento e suporte.</p>
                    <div className="mt-8 px-8 py-3 rounded-full bg-orange-600 text-white font-bold text-xs uppercase tracking-widest group-hover:bg-orange-500 transition-colors relative z-10">
                        Ver Planos Empresa
                    </div>
                </div>
            </div>
        )}

        {step === 2 && (
            <div id="plans-section" className="animate-fade-in-up">
                
                <div className="flex justify-center mb-12">
                    <button 
                        onClick={() => setStep(1)} 
                        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                    >
                        <ArrowRight className="rotate-180" size={14}/> Alterar Segmento ({activeTab === 'delivery' ? 'Delivery' : 'Empresa'})
                    </button>
                </div>

                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-zinc-900 border border-white/10 rounded-full p-1.5 gap-1">
                        {['monthly', 'semiannual', 'annual'].map((cycle) => (
                            <button 
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${billingCycle === cycle ? 'bg-red-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
                            >
                                {cycle === 'monthly' ? 'Mensal' : cycle === 'semiannual' ? 'Semestral (-10%)' : 'Anual (-25%)'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentPlans.map((plan, idx) => (
                        <div 
                            key={idx} 
                            className={`relative flex flex-col p-1 rounded-[2rem] transition-all duration-300 group hover:-translate-y-2 
                                ${plan.popular 
                                    ? 'bg-gradient-to-b from-red-600/20 to-zinc-900/80 shadow-[0_0_30px_rgba(220,38,38,0.15)] z-10 scale-105' 
                                    : 'bg-zinc-900/40 hover:bg-zinc-900/60'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg flex items-center gap-1 border border-red-400/20">
                                    <Star size={10} fill="currentColor" /> Recomendado
                                </div>
                            )}
                            
                            <div className="bg-zinc-950/80 rounded-[1.8rem] p-6 h-full flex flex-col backdrop-blur-xl border border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="mb-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-2xl bg-zinc-900 border border-white/5 ${plan.popular ? 'text-red-500' : 'text-zinc-400'} group-hover:text-white transition-colors`}>
                                            {plan.icon}
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400`}>{plan.tag}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-zinc-400 text-xs h-10 leading-relaxed line-clamp-2">{plan.desc}</p>
                                </div>

                                <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Investimento</div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-zinc-500 text-sm">R$</span>
                                        <span className={`text-3xl font-bold ${plan.popular ? 'text-red-500' : 'text-white'}`}>{getPrice(plan.price)}</span>
                                        <span className="text-zinc-600 text-xs">/mês</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-xs text-zinc-300">
                                            <div className={`mt-0.5 min-w-[14px] min-h-[14px] rounded-full flex items-center justify-center ${plan.popular ? 'bg-red-500/20 text-red-500' : 'bg-zinc-800 text-zinc-500'}`}>
                                                <Check size={8} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    onClick={() => { setSelectedPlan(plan.name); setModalOpen(true); }}
                                    className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg 
                                        ${plan.popular 
                                            ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white' 
                                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                        }`}
                                >
                                    Selecionar Plano
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

      </div>

      {modalOpen && <ContactModal plan={selectedPlan} onClose={() => setModalOpen(false)} />}
      
      <style>{`
        .text-red-500 { color: #ef4444; }
        .text-orange-500 { color: #f97316; }
        .text-amber-500 { color: #f59e0b; }
        .text-purple-500 { color: #a855f7; }
        .bg-red-600 { background-color: #dc2626; }
        .bg-orange-600 { background-color: #ea580c; }
      `}</style>
    </div>
  );
}