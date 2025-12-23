import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Zap, Crown, Shield, Bike, Store, MessageSquare, Bell, 
  LayoutTemplate, Database, Clock, TrendingUp, ChevronDown, Star
} from 'lucide-react';
import { ContactModal } from './SharedComponents.jsx';
import bgCommerce from './assets/commerce.jpg';

export default function CommercePage({ navigateTo }) {
  const [activeTab, setActiveTab] = useState('delivery');
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
      name: 'ZyStart',
      tag: 'Essencial',
      price: 147,
      color: 'blue',
      icon: <Shield size={24} />,
      desc: 'Organize seus pedidos e saia do papel.',
      features: ['Cardápio Digital Rápido', 'Recebimento no WhatsApp', 'Painel de Pedidos', 'Link Personalizado']
    },
    {
      name: 'ZyControl',
      tag: 'Gestão',
      price: 397,
      color: 'cyan',
      icon: <Database size={24} />,
      desc: 'Controle total da operação e logística.',
      features: ['Tudo do Start +', 'Gestão de Motoboys', 'Impressão Automática', 'Relatórios Financeiros', 'Controle de Estoque']
    },
    {
      name: 'ZyBotAI',
      tag: 'Inteligência',
      price: 697,
      color: 'amber',
      popular: true,
      icon: <Zap size={24} />,
      desc: 'Vendedor virtual que trabalha 24h por dia.',
      features: ['Tudo do Control +', 'IA Vendedora (ChatGPT)', 'Sugestão de Adicionais', 'Recuperação de Carrinho']
    },
    {
      name: 'ZyCore',
      tag: 'Franquia',
      price: 1297,
      color: 'purple',
      icon: <Crown size={24} />,
      desc: 'Potência máxima para grandes volumes.',
      features: ['Tudo do BotAI +', 'Múltiplos Atendentes', 'API Oficial WhatsApp', 'Programa de Fidelidade', 'Gerente de Contas']
    }
  ];

  const servicePlans = [
    {
      name: 'Agenda Start',
      tag: 'Básico',
      price: 147,
      color: 'blue',
      icon: <Store size={24} />,
      desc: 'Agenda digital simples e eficiente.',
      features: ['Link de Agendamento', 'Lembretes WhatsApp', 'Gestão de Clientes', 'Histórico de Visitas']
    },
    {
      name: 'Agenda Pro',
      tag: 'Profissional',
      price: 397,
      color: 'cyan',
      icon: <LayoutTemplate size={24} />,
      desc: 'Profissionalize seu negócio com site incluso.',
      features: ['Tudo do Start +', 'Site One-Page Incluso', 'Pagamento Online', 'Bloqueio de Agenda', 'Galeria de Fotos']
    },
    {
      name: 'Secretária AI',
      tag: 'Automação',
      price: 697,
      color: 'emerald',
      popular: true,
      icon: <MessageSquare size={24} />,
      desc: 'Atendimento humanizado sem intervenção humana.',
      features: ['Tudo do Pro +', 'IA Humanizada', 'Responde Dúvidas', 'Reagendamento Auto', 'Triagem de Leads']
    },
    {
      name: 'ZyBusiness',
      tag: 'Enterprise',
      price: 1297,
      color: 'rose',
      icon: <TrendingUp size={24} />,
      desc: 'Gestão completa para escalar seu serviço.',
      features: ['Tudo da AI +', 'Automação de Marketing', 'Clube de Assinatura', 'Gestão Financeira', 'Dashboard BI']
    }
  ];

  const currentPlans = activeTab === 'delivery' ? deliveryPlans : servicePlans;

  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-indigo-500/30">
      
      <div className="fixed inset-0 z-0">
        <img src={bgCommerce} alt="Background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        <button 
            onClick={() => navigateTo('landing')} 
            className="mb-12 flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest group"
        >
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={14} /> 
            Voltar ao Hub
        </button>

        <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Store size={12} /> Soluções Comerciais v2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                O Sistema Operacional <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Do Seu Negócio
                </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Centralize pedidos, agendamentos e atendimento em uma única plataforma inteligente. 
                Escolha seu segmento e veja a mágica acontecer.
            </p>
        </div>

        <div className="flex justify-center mb-20">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-2 rounded-2xl inline-flex gap-2 shadow-2xl relative z-20">
                <button 
                    onClick={() => setActiveTab('delivery')}
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 w-40 md:w-52 justify-center ${activeTab === 'delivery' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                    <Bike size={20} /> Delivery
                </button>
                <button 
                    onClick={() => setActiveTab('services')}
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 w-40 md:w-52 justify-center ${activeTab === 'services' ? 'bg-pink-600 text-white shadow-lg shadow-pink-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                    <Store size={20} /> Serviços
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
            <FeatureHighlight 
                icon={<Clock />} 
                title="Resposta Instantânea" 
                desc="Atendimento em < 3 segundos. Cliente respondido é cliente comprado." 
                color={activeTab === 'delivery' ? 'indigo' : 'pink'}
            />
            <FeatureHighlight 
                icon={<Database />} 
                title="CRM Automático" 
                desc="Salve dados, preferências e histórico de cada cliente automaticamente." 
                color={activeTab === 'delivery' ? 'indigo' : 'pink'}
            />
            <FeatureHighlight 
                icon={<TrendingUp />} 
                title="Escala de Vendas" 
                desc="Aumente seu ticket médio com sugestões inteligentes e upsell." 
                color={activeTab === 'delivery' ? 'indigo' : 'pink'}
            />
        </div>

        <div id="plans-container" className="scroll-mt-32">
            <div className="flex justify-center mb-12">
                <div className="inline-flex bg-slate-900 border border-white/10 rounded-full p-1.5 gap-1">
                    {['monthly', 'semiannual', 'annual'].map((cycle) => (
                        <button 
                            key={cycle}
                            onClick={() => setBillingCycle(cycle)}
                            className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${billingCycle === cycle ? 'bg-white text-slate-900' : 'text-slate-500 hover:text-white'}`}
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
                        className={`relative flex flex-col p-1 rounded-[2rem] transition-all duration-300 group hover:-translate-y-2 ${plan.popular ? 'bg-gradient-to-b from-amber-500/50 to-slate-900/50 shadow-2xl z-10' : 'bg-slate-800/30 hover:bg-slate-800/50'}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg flex items-center gap-1">
                                <Star size={10} fill="black" /> Recomendado
                            </div>
                        )}
                        
                        <div className="bg-slate-900/90 rounded-[1.8rem] p-6 h-full flex flex-col backdrop-blur-xl border border-white/5">
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-2xl bg-${plan.color}-500/10 text-${plan.color}-400 ring-1 ring-${plan.color}-500/20`}>{plan.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-xs h-8 leading-relaxed line-clamp-2">{plan.desc}</p>
                            </div>

                            <div className="mb-6 pt-4 border-t border-white/5">
                                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Investimento</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-slate-500 text-sm">R$</span>
                                    <span className={`text-3xl font-bold text-${plan.color}-400`}>{getPrice(plan.price)}</span>
                                    <span className="text-slate-600 text-xs">/mês</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                                        <div className={`mt-0.5 min-w-[14px] min-h-[14px] rounded-full bg-${plan.color}-500/20 flex items-center justify-center`}>
                                            <Check size={8} className={`text-${plan.color}-400`} strokeWidth={4} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => { setSelectedPlan(plan.name); setModalOpen(true); }}
                                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg bg-white/5 hover:bg-${plan.color}-600 text-white border border-white/10 hover:border-transparent group-hover:scale-[1.02] active:scale-95`}
                            >
                                Selecionar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {modalOpen && <ContactModal plan={selectedPlan} onClose={() => setModalOpen(false)} />}
      
      <style>{`
        .text-indigo-400 { color: #818cf8; }
        .text-pink-400 { color: #f472b6; }
        .text-cyan-400 { color: #22d3ee; }
        .text-amber-400 { color: #fbbf24; }
        .text-purple-400 { color: #c084fc; }
        .text-emerald-400 { color: #34d399; }
        .text-rose-400 { color: #fb7185; }
        .bg-indigo-500\\/10 { background-color: rgba(99, 102, 241, 0.1); }
        .bg-cyan-500\\/10 { background-color: rgba(34, 211, 238, 0.1); }
        .bg-amber-500\\/10 { background-color: rgba(251, 191, 36, 0.1); }
        .bg-purple-500\\/10 { background-color: rgba(192, 132, 252, 0.1); }
        .bg-emerald-500\\/10 { background-color: rgba(52, 211, 153, 0.1); }
        .bg-rose-500\\/10 { background-color: rgba(251, 113, 133, 0.1); }
      `}</style>
    </div>
  );
}

const FeatureHighlight = ({ icon, title, desc, color }) => (
    <div className={`bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-${color}-500/30 transition-all group`}>
        <div className={`w-10 h-10 rounded-lg bg-${color}-500/10 flex items-center justify-center text-${color}-400 mb-4 group-hover:scale-110 transition-transform`}>
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <h3 className="text-base font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
    </div>
);