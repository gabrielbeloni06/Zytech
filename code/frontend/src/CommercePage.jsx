import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Zap, Crown, Shield, Bike, Store, MessageSquare, Database, Clock, TrendingUp, Check, Star, Building2, ShoppingBag, Smartphone, Target, Lock, Activity
} from 'lucide-react';
import { ContactModal, CyberpunkChart } from './SharedComponents';

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
      name: 'ZyStart',
      tag: 'Essencial',
      price: 197,
      color: 'red',
      icon: <Shield className="text-red-500" size={24} />,
      desc: 'Atendimento inicial ágil para pequenos deliveries.',
      features: ['Cardápio Digital Simples', 'Pedidos via WhatsApp', 'Painel de Pedidos Básico', 'Link Personalizado']
    },
    {
      name: 'ZyControl',
      tag: 'Gestão',
      price: 297,
      color: 'orange',
      icon: <Database className="text-orange-500" size={24} />,
      desc: 'Controle total com automação para crescer.',
      features: ['Tudo do Start +', 'Gestão de Entregadores', 'Relatórios Financeiros', 'Impressão Automática', 'Controle de Estoque']
    },
    {
      name: 'ZyBotAI',
      tag: 'Inteligência',
      price: 397,
      color: 'amber',
      popular: true,
      icon: <Zap className="text-amber-500" size={24} />,
      desc: 'Vendedor virtual 24h que aumenta o ticket médio.',
      features: ['Tudo do Control +', 'IA Vendedora (ChatGPT)', 'Sugestão de Adicionais', 'Recuperação de Carrinho', 'Disparos em Massa']
    },
    {
      name: 'ZyCore',
      tag: 'Franquia',
      price: 697,
      color: 'purple',
      icon: <Crown className="text-purple-500" size={24} />,
      desc: 'Potência máxima para grandes volumes e redes.',
      features: ['Tudo do BotAI +', 'Múltiplos Atendentes', 'API Oficial WhatsApp', 'Programa de Fidelidade', 'Gerente de Contas']
    }
  ];

  const businessPlans = [
    {
      name: 'ZyStart',
      tag: 'Básico',
      price: 197,
      color: 'red',
      icon: <Store className="text-red-500" size={24} />,
      desc: 'Digitalize seus agendamentos e organize a casa.',
      features: ['Link de Agendamento', 'Lembretes WhatsApp', 'Gestão de Clientes', 'Histórico de Visitas']
    },
    {
      name: 'ZyControl',
      tag: 'Profissional',
      price: 297,
      color: 'orange',
      icon: <Store className="text-orange-500" size={24} />,
      desc: 'Profissionalize com site e pagamentos online.',
      features: ['Tudo do Start +', 'Site One-Page Incluso', 'Pagamento Online (Pix/Card)', 'Bloqueio de Agenda', 'Galeria de Fotos']
    },
    {
      name: 'ZyBotAI',
      tag: 'Automação',
      price: 397,
      color: 'amber',
      popular: true,
      icon: <MessageSquare className="text-amber-500" size={24} />,
      desc: 'Atendimento humanizado sem intervenção humana.',
      features: ['Tudo do Pro +', 'IA Humanizada', 'Responde Dúvidas', 'Reagendamento Auto', 'Triagem de Leads']
    },
    {
      name: 'ZyCore',
      tag: 'Enterprise',
      price: 697,
      color: 'purple',
      icon: <TrendingUp className="text-purple-500" size={24} />,
      desc: 'Gestão completa para escalar seu serviço.',
      features: ['Tudo da AI +', 'Automação de Marketing', 'Clube de Assinatura', 'Gestão Financeira', 'Dashboard BI']
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

  const scrollToSelection = () => {
      const el = document.getElementById('selection-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-500/30">
      
      <div className="fixed inset-0 z-0">
        <img src={bgRedTheme} alt="Red Theme Background" className="w-full h-full object-cover opacity-20 mix-blend-hard-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#1a0505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 pt-28 px-4 md:px-8 max-w-7xl mx-auto">
        
        <button 
            onClick={() => navigateTo('landing')} 
            className="mb-12 flex items-center gap-2 text-xs font-bold text-red-500 hover:text-white transition-colors uppercase tracking-widest group"
        >
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={14} /> 
            Voltar ao Hub
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24 animate-fade-in-up">
            
            <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest">
                    <Zap size={12} fill="currentColor" /> Tecnologia ZyTech v4.0
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                    Seu Cliente <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Não Espera.
                    </span>
                </h1>
                
                <p className="text-lg text-zinc-400 font-light leading-relaxed border-l-2 border-red-500/50 pl-6">
                    A demora no atendimento é o <strong className="text-white">maior assassino de vendas</strong> do mercado. 
                    Nossos Chatbots atendem em 3 segundos, tiram dúvidas, fecham pedidos e agendam horários enquanto você dorme.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><Clock size={20}/></div>
                        <div>
                            <div className="font-bold text-white">24/7</div>
                            <div className="text-xs text-zinc-500">Atendimento Full Time</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><TrendingUp size={20}/></div>
                        <div>
                            <div className="font-bold text-white">+40%</div>
                            <div className="text-xs text-zinc-500">Conversão de Leads</div>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={scrollToSelection}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-bold uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                    Ver Planos Disponíveis <ArrowRight size={18} />
                </button>
            </div>

            <div className="lg:w-1/2 relative flex justify-center">
                <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full"></div>
                <div className="relative w-[300px] h-[600px] bg-black border-4 border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>
                    <div className="w-full h-full bg-zinc-900 flex flex-col font-sans">
                        <div className="bg-zinc-800 p-4 pt-10 flex items-center gap-3 border-b border-white/5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-xs font-bold">ZY</div>
                            <div>
                                <div className="text-xs font-bold text-white">Atendente Virtual</div>
                                <div className="text-[10px] text-green-400 flex items-center gap-1">● Online</div>
                            </div>
                        </div>
                        <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                             <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-zinc-300 animate-fade-in">
                                Olá! 👋 Bem-vindo à ZyTech Burger. Gostaria de ver nosso cardápio?
                             </div>
                             <div className="bg-red-600/20 border border-red-500/20 p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-xs text-white animate-fade-in animation-delay-500">
                                Sim, quero fazer um pedido!
                             </div>
                             <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-zinc-300 animate-fade-in animation-delay-1000">
                                Perfeito! 🍔 Aqui estão nossas promoções de hoje.
                                <div className="mt-2 bg-black/40 rounded p-2 border border-white/5">
                                    <div className="h-20 bg-zinc-700 rounded mb-2 animate-pulse"></div>
                                    <div className="h-2 w-2/3 bg-zinc-700 rounded mb-1"></div>
                                    <div className="h-2 w-1/3 bg-red-500/50 rounded"></div>
                                </div>
                             </div>
                             <div className="absolute bottom-4 left-4 right-4 animate-fade-in animation-delay-1500">
                                <button onClick={scrollToSelection} className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                                    <ShoppingBag size={14} /> Fazer Pedido Agora
                                </button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-24 mb-32 border-t border-white/5 pt-20">
            
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest">
                        <Target size={16} /> O Problema Invisível
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Você perde dinheiro enquanto <span className="text-zinc-500 line-through">dorme</span> descansa.
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        O consumidor moderno é imediatista. Se você demora 10 minutos para responder no WhatsApp, ele já fechou com o concorrente. 
                        <br/><br/>
                        <strong className="text-white">A ZyTech elimina o tempo de espera.</strong> Seu negócio passa a operar 24 horas por dia, 7 dias por semana, capturando leads às 2 da manhã com a mesma eficiência das 2 da tarde.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-zinc-300"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Resposta instantânea (0 delay)</li>
                        <li className="flex items-center gap-2 text-zinc-300"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Sem perda de paciência do cliente</li>
                        <li className="flex items-center gap-2 text-zinc-300"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Triagem automática de curiosos</li>
                    </ul>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full"></div>
                    <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <span className="text-zinc-500 text-xs uppercase tracking-widest">Comparativo de Resposta</span>
                            <Clock className="text-red-500" size={20}/>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs mb-2 text-zinc-400">
                                    <span>Atendimento Humano Comum</span>
                                    <span className="text-red-400">~15 a 45 min</span>
                                </div>
                                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-900/50 w-3/4"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-2 text-white font-bold">
                                    <span className="flex items-center gap-2"><Zap size={12} className="text-yellow-400"/> Tecnologia ZyTech</span>
                                    <span className="text-green-400">Imediato (3s)</span>
                                </div>
                                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 text-orange-500 font-bold uppercase text-xs tracking-widest">
                        <Activity size={16} /> Qualidade Superior
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Não é um robô burro.<br/>
                        É <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Inteligência Real.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        Esqueça aqueles menus de "Digite 1 para financeiro". Nossa IA entende linguagem natural, gírias e contexto. Ela age como seu melhor vendedor: educada, persuasiva e incansável.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl">
                            <MessageSquare className="text-orange-500 mb-2" size={24}/>
                            <h4 className="font-bold text-white text-sm">Linguagem Natural</h4>
                            <p className="text-xs text-zinc-500 mt-1">Conversa fluida como um humano.</p>
                        </div>
                        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl">
                            <Database className="text-orange-500 mb-2" size={24}/>
                            <h4 className="font-bold text-white text-sm">Base de Conhecimento</h4>
                            <p className="text-xs text-zinc-500 mt-1">Aprende tudo sobre sua empresa.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                     <div className="relative aspect-square max-h-[400px] mx-auto bg-black rounded-full border border-zinc-800 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_70%)]"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-[0_0_50px_rgba(234,88,12,0.3)]">
                                <Zap size={48} className="text-white" />
                            </div>
                            <div className="text-2xl font-black text-white">Zytech AI</div>
                            <div className="text-xs text-orange-400 uppercase tracking-widest mt-1">Neural Processing</div>
                        </div>
                        <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute w-[180%] h-[180%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                     </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 text-green-500 font-bold uppercase text-xs tracking-widest">
                        <TrendingUp size={16} /> Retorno Sobre Investimento
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Matemática Simples:<br/>
                        Vende Mais, Custa Menos.
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        Quanto custa um funcionário para trabalhar 24h? Salário, encargos, férias... A ZyTech custa uma fração disso e nunca fica doente. O sistema se paga logo nas primeiras vendas recuperadas.
                    </p>
                    
                    <button onClick={scrollToSelection} className="group flex items-center gap-3 text-white border-b border-red-500 pb-1 hover:text-red-400 transition-colors">
                        <span className="font-bold tracking-wide">Quero Escalar Meu Negócio</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 bg-green-500/10 w-full h-full rounded-full blur-3xl"></div>
                        <CyberpunkChart />
                        <div className="absolute -bottom-4 -right-4 bg-zinc-900 border border-green-500/30 p-4 rounded-xl shadow-xl flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <div className="text-xs text-zinc-400 uppercase">Crescimento Médio</div>
                                <div className="text-xl font-bold text-white">+42.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div id="selection-section" className="scroll-mt-24 pt-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha seu Modelo de Negócio</h2>
                <p className="text-zinc-400">Personalizamos a inteligência artificial para o seu setor.</p>
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
        </div>

        {step === 2 && (
            <div id="plans-section" className="animate-fade-in-up scroll-mt-32">
                
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