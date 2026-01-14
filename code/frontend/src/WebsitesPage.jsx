import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Layout, Globe, ShoppingCart, Search, PenTool, Star, LineChart, Settings, Monitor, Smartphone, Zap, Code, Shield, MousePointer
} from 'lucide-react';
import { ContactModal, CyberpunkChart } from './SharedComponents';

const SearchIcon = (props) => <Search {...props} />;
const PenToolIcon = (props) => <PenTool {...props} />;

const bgBlueTheme = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

export default function WebsitesPage({ navigateTo }) {
  const [step, setStep] = useState(1); 
  const [selectedTier, setSelectedTier] = useState(null);
  const [addons, setAddons] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [billingCycle, setBillingCycle] = useState('semiannual');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getPrice = (basePrice) => {
    if (billingCycle === 'semiannual') return Math.floor(basePrice * 0.9);
    if (billingCycle === 'annual') return Math.floor(basePrice * 0.75);
    return basePrice;
  };

  const tiers = [
    { id: 'start', name: 'Website Start', price: 900, color: 'blue', icon: <Layout size={32}/>, desc: 'Landing Page única de alta conversão. Perfeita para campanhas e lançamentos.', features: ['Design Responsivo (Mobile First)', 'Hospedagem de Alta Performance', '1 Página Longa (Landing Page)', 'Botão WhatsApp Flutuante', 'Certificado SSL (Segurança)'] },
    { id: 'control', name: 'Website Control', price: 2500, color: 'purple', icon: <Globe size={32}/>, desc: 'Site institucional completo. Ideal para empresas que precisam apresentar serviços.', features: ['Até 5 Páginas Internas', 'Blog / Área de Notícias', 'Formulários de Contato Avançados', 'SEO Técnico Otimizado', 'Painel para Editar Conteúdo'] },
    { id: 'core', name: 'Website Core', price: 5000, color: 'pink', icon: <ShoppingCart size={32}/>, desc: 'Portal robusto ou E-commerce. Para quem vai vender online.', features: ['Loja Virtual Completa', 'Área de Membros / Login', 'Integração com Pagamentos', 'Sistema de Filtros Avançado', 'Gestão de Estoque'] },
  ];

  const availableAddons = [
    { id: 'seo_plus', name: 'SEO Ultra Otimizado', price: 500, icon: <SearchIcon size={18}/> },
    { id: 'copy', name: 'Copywriting Profissional', price: 800, icon: <PenToolIcon size={18}/> },
    { id: 'logo', name: 'Identidade Visual (Logo)', price: 1200, icon: <Star size={18}/> },
    { id: 'analytics', name: 'Dashboard Analytics', price: 600, icon: <LineChart size={18}/> },
  ];

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    setStep(2);
    setTimeout(() => {
        const el = document.getElementById('config-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleAddon = (addonId) => {
    setAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
  };

  const finishOrder = () => {
    const total = getPrice(selectedTier.price) + availableAddons.reduce((acc, curr) => acc + (addons[curr.id] ? curr.price : 0), 0);
    const data = {
        tier: selectedTier.name,
        billingCycle,
        addons: availableAddons.filter(a => addons[a.id]).map(a => a.name),
        totalPrice: total
    };
    setOrderData(data);
    setModalOpen(true);
  };

  const scrollToSelection = () => {
    const el = document.getElementById('selection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
        
        <div className="fixed inset-0 z-0">
            <img src={bgBlueTheme} alt="Blue Theme Background" className="w-full h-full object-cover opacity-20 mix-blend-hard-light" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#050a1a]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        </div>

      <div className="relative z-10 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        <button 
            onClick={() => navigateTo('landing')} 
            className="mb-12 flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-white transition-colors uppercase tracking-widest group"
        >
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={14} /> 
            Voltar ao Hub
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24 animate-fade-in-up">
            
            <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                    <Globe size={12} fill="currentColor" /> Web Development V2.0
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                    Sua Empresa <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                        Merece o Mundo.
                    </span>
                </h1>
                
                <p className="text-lg text-zinc-400 font-light leading-relaxed border-l-2 border-blue-500/50 pl-6">
                    Seu site é seu vendedor número 1. Se ele é lento ou feio, <strong className="text-white">você perde dinheiro</strong>. 
                    Criamos ecossistemas digitais de alta performance focados em uma única coisa: converter visitantes em clientes.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Zap size={20}/></div>
                        <div>
                            <div className="font-bold text-white">0.5s</div>
                            <div className="text-xs text-zinc-500">Carregamento Ultra-Rápido</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Search size={20}/></div>
                        <div>
                            <div className="font-bold text-white">SEO</div>
                            <div className="text-xs text-zinc-500">Otimizado para Google</div>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={scrollToSelection}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                    Criar Meu Projeto <ArrowRight size={18} />
                </button>
            </div>

            <div className="lg:w-1/2 relative flex justify-center perspective-1000">
                <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full"></div>
                
                <div className="relative w-full max-w-[600px] z-10 transform rotate-y-12 transition-transform duration-700 hover:rotate-0">

                    <div className="bg-zinc-900 rounded-t-2xl p-2 border-4 border-zinc-800 border-b-0 shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-800 rounded-b-lg z-20"></div>

                        <div className="bg-slate-950 aspect-[16/10] rounded-lg overflow-hidden relative flex flex-col">

                            <div className="bg-zinc-800/80 h-6 flex items-center px-3 gap-1.5 border-b border-white/5">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div className="ml-4 bg-zinc-900/50 w-2/3 h-3 rounded-full flex items-center px-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            
                            <div className="flex-1 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shine pointer-events-none"></div>
                                
                                <div className="p-8 flex items-center h-full">
                                    <div className="space-y-4 w-2/3">
                                        <div className="h-8 w-3/4 bg-white/10 rounded animate-pulse"></div>
                                        <div className="h-3 w-full bg-white/5 rounded"></div>
                                        <div className="h-3 w-5/6 bg-white/5 rounded"></div>
                                        <div className="flex gap-2 mt-4">
                                            <div className="h-8 w-24 bg-blue-600 rounded"></div>
                                            <div className="h-8 w-24 bg-white/5 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 pl-4">
                                        <div className="w-full aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                                            <Globe className="text-blue-400 animate-spin-slow" size={32} />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 right-4 bg-zinc-900 border border-green-500/30 px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 animate-fade-in animation-delay-1000">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-green-400">Venda Realizada +R$147</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 h-4 rounded-b-xl shadow-lg relative mx-1">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-zinc-700 rounded-b-md"></div>
                    </div>
                    <div className="absolute -bottom-10 left-4 right-4 h-8 bg-blue-500/20 blur-xl rounded-[100%]"></div>
                </div>
            </div>
        </div>

         <div className="space-y-24 mb-32 border-t border-white/5 pt-20">
            
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest">
                        <Monitor size={16} /> O Problema da Lentidão
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        53% dos usuários desistem se o site demora <span className="text-red-500">3 segundos.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        A internet não perdoa amadores. Sites lentos não apenas irritam clientes, eles são punidos pelo Google e desaparecem das buscas.
                        <br/><br/>
                        <strong className="text-white">Na ZyTech, performance é obsessão.</strong> Utilizamos tecnologias como Next.js e React (as mesmas do Facebook e Netflix) para garantir carregamento instantâneo.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-zinc-300"><Check size={14} className="text-blue-500"/> Score 95+ no Google PageSpeed</li>
                        <li className="flex items-center gap-2 text-zinc-300"><Check size={14} className="text-blue-500"/> Imagens Otimizadas Automaticamente</li>
                    </ul>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-red-600/5 blur-3xl rounded-full"></div>
                    <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <span className="text-zinc-500 text-xs uppercase tracking-widest">Tempo de Carregamento</span>
                            <Settings className="text-zinc-500" size={20}/>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between text-xs mb-2 text-zinc-400">
                                    <span>Sites Comuns (Wordpress/Wix)</span>
                                    <span className="text-red-400">~5.2s a 8.0s</span>
                                </div>
                                <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden relative">
                                    <div className="h-full bg-red-900/50 w-full flex items-center justify-end pr-2">
                                        <span className="text-[9px] text-red-300">LENTO</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-2 text-white font-bold">
                                    <span className="flex items-center gap-2"><Zap size={12} className="text-yellow-400"/> Tecnologia ZyTech (Next.js)</span>
                                    <span className="text-blue-400">~0.5s a 1.2s</span>
                                </div>
                                <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[15%] shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-end pr-2">
                                        <span className="text-[9px] text-white font-bold">RÁPIDO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 text-purple-500 font-bold uppercase text-xs tracking-widest">
                        <Smartphone size={16} /> Mundo Mobile
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Seu site precisa caber no <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">bolso do cliente.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        Mais de 80% das visitas acontecem pelo celular. Desenvolvemos com a metodologia "Mobile First": seu site é desenhado primeiro para smartphones, garantindo uma experiência perfeita de toque, rolagem e leitura.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl hover:bg-zinc-900 transition-colors">
                            <MousePointer className="text-purple-500 mb-2" size={24}/>
                            <h4 className="font-bold text-white text-sm">UX Design</h4>
                            <p className="text-xs text-zinc-500 mt-1">Navegação intuitiva que guia para a compra.</p>
                        </div>
                        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl hover:bg-zinc-900 transition-colors">
                            <Shield className="text-purple-500 mb-2" size={24}/>
                            <h4 className="font-bold text-white text-sm">SSL Blindado</h4>
                            <p className="text-xs text-zinc-500 mt-1">Segurança total para dados dos clientes.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-center">
                     <div className="relative w-64 h-[500px] border-4 border-zinc-800 bg-black rounded-[3rem] shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 w-full h-8 bg-zinc-800 z-20 flex justify-center pt-2">
                            <div className="w-20 h-4 bg-black rounded-full"></div>
                        </div>
                        
                        <div className="w-full h-full relative overflow-hidden bg-slate-950 flex flex-col pt-8">
                            <div className="px-4 py-2 flex items-center justify-between border-b border-white/5">
                                <div className="w-4 h-4 rounded bg-purple-500"></div>
                                <div className="w-4 h-4 bg-white/10 rounded"></div>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="w-full aspect-video bg-white/5 rounded-xl animate-pulse"></div>
                                <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                                <div className="w-full h-2 bg-white/5 rounded"></div>
                                <div className="w-full h-2 bg-white/5 rounded"></div>
                                <div className="w-full h-12 bg-purple-600 rounded-xl mt-8 flex items-center justify-center text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(147,51,234,0.4)]">Comprar Agora</div>
                            </div>

                            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                                <Code size={48} className="text-purple-500 mb-4" />
                                <div className="text-xs font-mono text-purple-300">Compiling Layout...</div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 text-green-500 font-bold uppercase text-xs tracking-widest">
                        <LineChart size={16} /> Visibilidade & Vendas
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Do anonimato à <br/>
                        <span className="text-green-500">Autoridade Digital.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        Um site profissional é a base de qualquer estratégia de marketing. Sem ele, seus anúncios no Instagram e Google são desperdiçados. Com a ZyTech, você captura leads qualificados e constrói um ativo que valoriza sua marca.
                    </p>
                    
                    <button onClick={scrollToSelection} className="group flex items-center gap-3 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                        <span className="font-bold tracking-wide">Quero Construir Minha Autoridade</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 bg-blue-500/10 w-full h-full rounded-full blur-3xl"></div>
                        <CyberpunkChart />
                        <div className="absolute -bottom-4 -right-4 bg-zinc-900 border border-blue-500/30 p-4 rounded-xl shadow-xl flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-500">
                                <Globe size={24} />
                            </div>
                            <div>
                                <div className="text-xs text-zinc-400 uppercase">Tráfego Orgânico</div>
                                <div className="text-xl font-bold text-white">+210%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="selection-section" className="scroll-mt-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha sua Estrutura</h2>
                <p className="text-zinc-400">Transparência total. Sem custos ocultos.</p>
            </div>

            <div className="max-w-6xl mx-auto bg-zinc-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-fade-in">
                
                <div className="w-full md:w-2/3 p-8 md:p-12 relative">
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-white mb-2">1. Qual o tamanho do projeto?</h2>
                            <p className="text-zinc-500 mb-8 text-sm">Selecione o modelo que melhor se adapta ao seu momento atual.</p>
                            
                            <div className="grid gap-6">
                                {tiers.map((tier) => (
                                    <div 
                                        key={tier.id}
                                        onClick={() => handleTierSelect(tier)}
                                        className="group relative p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-blue-500/50 cursor-pointer transition-all hover:bg-black/60 flex items-center justify-between gap-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                                    >
                                        <div className={`p-4 rounded-xl bg-${tier.color}-500/10 text-${tier.color}-500 group-hover:bg-${tier.color}-500 group-hover:text-white transition-colors`}>
                                            {tier.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg text-white mb-1">{tier.name}</h3>
                                            <p className="text-zinc-400 text-xs hidden sm:block">{tier.desc}</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {tier.features.slice(0,3).map((f, i) => (
                                                    <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded text-zinc-500 border border-white/5">{f}</span>
                                                ))}
                                                <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-zinc-500">+</span>
                                            </div>
                                        </div>
                                        <div className="text-right min-w-fit">
                                            <div className="text-xs text-zinc-500 mb-1">A partir de</div>
                                            <div className={`text-2xl font-bold text-${tier.color}-400`}>R$ {getPrice(tier.price)}</div>
                                        </div>
                                        <ArrowRight className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 flex justify-center">
                                <div className="inline-flex bg-black/40 border border-white/10 rounded-lg p-1">
                                    {['monthly', 'semiannual', 'annual'].map((cycle) => (
                                        <button 
                                            key={cycle} 
                                            onClick={() => setBillingCycle(cycle)}
                                            className={`px-4 py-2 rounded-md text-xs font-bold uppercase transition-all ${billingCycle === cycle ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-white'}`}
                                        >
                                            {cycle === 'monthly' ? 'Mensal' : cycle === 'semiannual' ? 'Semestral' : 'Anual'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-center text-[10px] text-zinc-600 mt-2">*Ciclo referente à manutenção (se aplicável).</p>
                        </div>
                    )}

                    {step === 2 && selectedTier && (
                        <div id="config-section" className="animate-fade-in h-full flex flex-col">
                            <button onClick={() => setStep(1)} className="text-sm text-zinc-500 hover:text-white flex items-center gap-2 mb-6"><ArrowRight className="rotate-180" size={14}/> Alterar Plano Base</button>
                            <h2 className="text-2xl font-bold text-white mb-2">2. Turbine seu Site</h2>
                            <p className="text-zinc-500 mb-8 text-sm">Adicione serviços profissionais para acelerar seus resultados.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {availableAddons.map((addon) => (
                                    <div 
                                        key={addon.id}
                                        onClick={() => toggleAddon(addon.id)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${addons[addon.id] ? `bg-blue-500/10 border-blue-500 text-white` : 'bg-black/20 border-white/10 text-zinc-400 hover:border-white/30'}`}
                                    >
                                        <div className={`p-2 rounded-lg ${addons[addon.id] ? 'bg-blue-500 text-white' : 'bg-white/5 text-zinc-500'}`}>
                                            {addon.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-bold text-sm">{addon.name}</div>
                                            <div className="text-xs opacity-70">+ R$ {addon.price}</div>
                                        </div>
                                        {addons[addon.id] && <Check size={16} className="text-blue-400" />}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest">Investimento Total</div>
                                    <div className="text-3xl font-bold text-white">
                                        R$ {getPrice(selectedTier.price) + availableAddons.reduce((acc, curr) => acc + (addons[curr.id] ? curr.price : 0), 0)}
                                    </div>
                                </div>
                                <button onClick={finishOrder} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                    Gerar Proposta <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/3 bg-black/40 border-l border-white/10 p-8 md:p-12 flex flex-col relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Resumo do Projeto</h3>
                        
                        {selectedTier ? (
                            <div className="space-y-6 animate-fade-in">
                                <div>
                                    <div className="text-xs text-zinc-500 mb-1 uppercase">Plano Base</div>
                                    <div className="text-xl font-bold text-white flex items-center gap-2">
                                        {selectedTier.name} 
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${selectedTier.color}-500/20 text-${selectedTier.color}-400 border border-${selectedTier.color}-500/20`}>v2.0</span>
                                    </div>
                                    <div className="text-sm text-zinc-400">R$ {getPrice(selectedTier.price)}</div>
                                </div>
                                
                                {Object.keys(addons).some(k => addons[k]) && (
                                    <div>
                                        <div className="text-xs text-zinc-500 mb-2 uppercase">Adicionais</div>
                                        <ul className="space-y-3">
                                            {availableAddons.filter(a => addons[a.id]).map(addon => (
                                                <li key={addon.id} className="text-sm text-zinc-300 flex justify-between items-center border-b border-white/5 pb-2">
                                                    <span>{addon.name}</span>
                                                    <span className="text-zinc-500 font-mono text-xs">R${addon.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="p-4 bg-blue-900/10 rounded-xl border border-blue-500/20 mt-8">
                                    <div className="flex gap-3 mb-2">
                                        <Shield className="text-blue-400" size={16} />
                                        <span className="text-xs font-bold text-blue-300 uppercase">Garantia ZyTech</span>
                                    </div>
                                    <p className="text-[10px] text-zinc-400 leading-relaxed">
                                        Entregamos o código fonte. Hospedagem de alta performance inclusa no primeiro mês. Suporte vitalício para bugs.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col justify-center items-center text-center opacity-30">
                                <Layout size={48} className="text-white mb-4" />
                                <p className="text-sm text-white">Selecione uma estrutura à esquerda para configurar.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

      </div>

      {modalOpen && <ContactModal data={orderData} onClose={() => setModalOpen(false)} />}
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(-12deg); }
      `}</style>
    </div>
  );
}