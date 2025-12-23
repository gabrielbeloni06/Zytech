import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Zap, Crown, Shield, Bike, Store, MessageSquare, Database, Clock, TrendingUp
} from 'lucide-react';
import { ContactModal } from './SharedComponents';
import bgVideo from './assets/background.mp4'; 

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
      icon: <Shield className="text-blue-400" size={24} />,
      desc: 'Ideal para quem está começando e precisa organizar pedidos.',
      features: ['Cardápio Digital Simples', 'Pedidos no WhatsApp', 'Painel de Gestão', 'Impressão de Pedidos', 'Link Personalizado']
    },
    {
      name: 'ZyControl',
      tag: 'Gestão',
      price: 397,
      color: 'cyan',
      icon: <Database className="text-cyan-400" size={24} />,
      desc: 'Para operações que precisam de controle total e agilidade.',
      features: ['Tudo do Start +', 'Gestão de Entregadores', 'Relatórios Financeiros', 'Controle de Estoque', 'Cupons de Desconto']
    },
    {
      name: 'ZyBotAI',
      tag: 'Inteligência',
      price: 697,
      color: 'amber',
      popular: true,
      icon: <Zap className="text-amber-400" size={24} />,
      desc: 'IA que vende por você. Aumente seu ticket médio.',
      features: ['Tudo do Control +', 'IA Vendedora (ChatGPT)', 'Sugestão de Adicionais', 'Recuperação de Carrinho', 'Disparos em Massa']
    },
    {
      name: 'ZyCore',
      tag: 'Franquia',
      price: 1297,
      color: 'purple',
      icon: <Crown className="text-purple-400" size={24} />,
      desc: 'Ecossistema completo para grandes volumes.',
      features: ['Tudo do BotAI +', 'Múltiplos Atendentes', 'API Oficial WhatsApp', 'App do Entregador', 'Suporte Prioritário 24/7']
    }
  ];

  const servicePlans = [
    {
      name: 'Agenda Start',
      tag: 'Básico',
      price: 147,
      color: 'blue',
      icon: <Store className="text-blue-400" size={24} />,
      desc: 'Acabe com o papel e caneta. Agenda digital simples.',
      features: ['Link de Agendamento', 'Lembretes WhatsApp', 'Gestão de Clientes', 'Histórico de Visitas']
    },
    {
      name: 'Agenda Pro',
      tag: 'Profissional',
      price: 397,
      color: 'cyan',
      icon: <LayoutTemplate className="text-cyan-400" size={24} />,
      desc: 'Site profissional com pagamento antecipado.',
      features: ['Tudo do Start +', 'Site One-Page Incluso', 'Pagamento Online (Pix/Card)', 'Bloqueio de Agenda', 'Galeria de Fotos']
    },
    {
      name: 'Secretária AI',
      tag: 'Automação',
      price: 697,
      color: 'emerald',
      popular: true,
      icon: <MessageSquare className="text-emerald-400" size={24} />,
      desc: 'Atendimento 24h que tira dúvidas e agenda sozinho.',
      features: ['Tudo do Pro +', 'IA Humanizada', 'Responde Dúvidas', 'Reagendamento Auto', 'Triagem de Leads']
    },
    {
      name: 'ZyBusiness',
      tag: 'Enterprise',
      price: 1297,
      color: 'rose',
      icon: <TrendingUp className="text-rose-400" size={24} />,
      desc: 'Escale seu negócio com marketing e dados.',
      features: ['Tudo da AI +', 'Automação de Marketing', 'Clube de Assinatura', 'Gestão Financeira', 'Dashboard BI Completo']
    }
  ];

  const currentPlans = activeTab === 'delivery' ? deliveryPlans : servicePlans;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-x-hidden pb-32">
       
       <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        
        <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Transforme seu <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Atendimento em Vendas</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Pare de perder tempo respondendo "qual o preço?" e "tem horário?". <br/>
                Nossa tecnologia organiza, atende e vende por você.
            </p>
        </div>

        <div className="flex justify-center mb-16">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl inline-flex gap-2 relative">
                <button 
                    onClick={() => setActiveTab('delivery')}
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === 'delivery' ? 'bg-amber-500 text-black shadow-lg shadow-amber-900/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    <Bike size={20} /> Para Delivery
                </button>
                <button 
                    onClick={() => setActiveTab('services')}
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === 'services' ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-900/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    <Store size={20} /> Para Serviços
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-white/5 shadow-xl hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6"><Clock /></div>
                <h3 className="text-lg font-bold text-white mb-2">Atendimento Imediato</h3>
                <p className="text-gray-400 text-sm">Seu cliente é atendido em menos de 3 segundos, 24 horas por dia. Nunca mais perca uma venda por demora.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-white/5 shadow-xl hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6"><Database /></div>
                <h3 className="text-lg font-bold text-white mb-2">Organização Automática</h3>
                <p className="text-gray-400 text-sm">{activeTab === 'delivery' ? 'Pedidos organizados, impressos e enviados para a cozinha.' : 'Agenda organizada, lembretes enviados e pagamentos confirmados.'}</p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-white/5 shadow-xl hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6"><TrendingUp /></div>
                <h3 className="text-lg font-bold text-white mb-2">Aumento de Receita</h3>
                <p className="text-gray-400 text-sm">{activeTab === 'delivery' ? 'A IA oferece bebidas e sobremesas, aumentando o ticket médio.' : 'Redução drástica de No-Show com lembretes automáticos.'}</p>
            </div>
        </div>

        <div className="mb-8 flex justify-center">
            <div className="inline-flex bg-slate-900/80 border border-white/10 rounded-full p-1">
                {['monthly', 'semiannual', 'annual'].map((cycle) => (
                    <button 
                        key={cycle}
                        onClick={() => setBillingCycle(cycle)}
                        className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${billingCycle === cycle ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        {cycle === 'monthly' ? 'Mensal' : cycle === 'semiannual' ? 'Semestral (-10%)' : 'Anual (-25%)'}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPlans.map((plan, idx) => (
                <div key={idx} className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-300 ${plan.popular ? 'bg-slate-800/60 border-amber-500/30 shadow-2xl scale-105 z-10' : 'bg-slate-900/40 border-white/5 hover:bg-slate-900/80 hover:border-white/10'}`}>
                    {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-lg">
                            Mais Escolhido
                        </div>
                    )}
                    
                    <div className="mb-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-${plan.color}-500/10 text-${plan.color}-400`}>{plan.icon}</div>
                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded bg-${plan.color}-500/10 text-${plan.color}-400 border border-${plan.color}-500/20`}>{plan.tag}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 text-xs h-10 leading-relaxed">{plan.desc}</p>
                    </div>

                    <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">A partir de:</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-gray-500">R$</span>
                            <span className={`text-3xl font-bold text-${plan.color}-400`}>{getPrice(plan.price)}</span>
                            <span className="text-gray-600 text-xs">/mês</span>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-gray-300">
                                <Check size={14} className={`text-${plan.color}-500 flex-shrink-0 mt-0.5`} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button 
                        onClick={() => { setSelectedPlan(plan.name); setModalOpen(true); }}
                        className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg bg-${plan.color}-600 hover:bg-${plan.color}-500 text-white`}
                    >
                        Escolher Plano
                    </button>
                </div>
            ))}
        </div>

      </div>

      {modalOpen && <ContactModal plan={selectedPlan} onClose={() => setModalOpen(false)} />}
    </div>
  );
}