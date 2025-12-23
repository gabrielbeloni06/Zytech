import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Layout, Globe, ShoppingCart, Search, PenTool, Star, LineChart, Settings, Monitor, Smartphone, Zap
} from 'lucide-react';
import bgWeb from './assets/website.jpg';
import { PricingCard, ContactModal } from './SharedComponents';

const SearchIcon = (props) => <Search {...props} />;
const PenToolIcon = (props) => <PenTool {...props} />;

export default function WebsitesPage({ navigateTo }) {
  const [step, setStep] = useState(1); 
  const [selectedTier, setSelectedTier] = useState(null);
  const [addons, setAddons] = useState({});
  const [orderData, setOrderData] = useState(null);
  const [billingCycle, setBillingCycle] = useState('semiannual');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getPrice = (basePrice) => {
    if (billingCycle === 'semiannual') return Math.floor(basePrice * 0.9);
    if (billingCycle === 'annual') return Math.floor(basePrice * 0.75);
    return basePrice;
  };

  const tiers = [
    { id: 'start', name: 'Website Start', price: 900, color: 'blue', desc: 'Landing Page única de alta conversão.', features: ['Design Responsivo', 'Hospedagem Inclusa', '1 Página'] },
    { id: 'control', name: 'Website Control', price: 2500, color: 'purple', desc: 'Site institucional completo com blog.', features: ['Design Premium', 'SEO Básico', '5 Páginas', 'Blog'] },
    { id: 'core', name: 'Website Core', price: 5000, color: 'pink', desc: 'Portal robusto ou E-commerce.', features: ['Painel Admin', 'SEO Avançado', 'Loja Virtual', 'Login de Usuário'] },
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
    setTimeout(() => document.getElementById('configurator').scrollIntoView({behavior: 'smooth'}), 100);
  };

  const toggleAddon = (addonId) => {
    setAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
  };

  const finishOrder = () => {
    const orderId = 'ZY-WEB-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    let total = getPrice(selectedTier.price);
    availableAddons.forEach(a => { if(addons[a.id]) total += a.price; });

    const finalJson = {
        orderId,
        service: 'Website Development',
        tier: selectedTier.name,
        billingCycle,
        basePrice: getPrice(selectedTier.price),
        addons: availableAddons.filter(a => addons[a.id]).map(a => a.name),
        totalPrice: total,
        timestamp: new Date().toISOString()
    };
    setOrderData(finalJson);
    setStep(3);
  };

  const getWhatsAppLink = () => {
    if (!orderData) return "#";
    const message = `*NOVO PEDIDO DE WEBSITE*\n\nEsse é meu Pedido de Website com o seguinte JSON:\n\n\`\`\`json\n${JSON.stringify(orderData, null, 2)}\n\`\`\``;
    return `https://wa.me/553180209584?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
            <img src={bgWeb} alt="Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider">
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </button>

        <div className="text-center mb-20 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-blue-300 mb-4 backdrop-blur-md shadow-lg">Zytech Web Studio</span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6">
                Sua Vitrine <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                    Digital
                </span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light">
                Um site lento custa clientes. Nós construímos experiências digitais ultrarrápidas, otimizadas para SEO e desenhadas para converter visitantes em compradores.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                    <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Performance Extrema</h3>
                <p className="text-gray-400 text-sm">Carregamento instantâneo. O Google ama sites rápidos, e seus clientes também.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                    <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mobile First</h3>
                <p className="text-gray-400 text-sm">Design responsivo que funciona perfeitamente em qualquer dispositivo, do celular ao desktop.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 text-pink-400">
                    <Monitor size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Design Persuasivo</h3>
                <p className="text-gray-400 text-sm">Layouts estudados para guiar o olhar do usuário até o botão de compra ou contato.</p>
            </div>
        </div>

        <div id="configurator" className="bg-slate-900/80 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl">
            {step === 1 && (
                <div className="animate-fade-in-up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Escolha a Estrutura</h2>
                        <div className="flex justify-center">
                        <div className="bg-slate-950 border border-white/10 p-1.5 rounded-full flex flex-wrap justify-center gap-1 sm:gap-0 relative">
                            <button onClick={() => setBillingCycle('monthly')} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Mensal</button>
                            <button onClick={() => setBillingCycle('semiannual')} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'semiannual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Semestral</button>
                            <button onClick={() => setBillingCycle('annual')} className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'annual' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Anual</button>
                        </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tiers.map((tier, idx) => (
                            <div key={tier.id} className="h-full">
                                <PricingCard 
                                    title={tier.name} 
                                    icon={idx === 0 ? <Layout size={24}/> : idx === 1 ? <Globe size={24}/> : <ShoppingCart size={24}/>}
                                    iconBg={null}
                                    description={tier.desc} 
                                    delay={idx * 100} 
                                    featured={idx === 1} 
                                    color={tier.color} 
                                    price={getPrice(tier.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
                                    subPrice={`/${billingCycle === 'monthly' ? 'mês' : billingCycle === 'semiannual' ? 'mês (6x)' : 'mês (12x)'}`} 
                                    onHire={() => handleTierSelect(tier)}
                                >
                                    <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                        {tier.features.map((feat, i) => (
                                            <li key={i} className="flex gap-3 items-center">
                                                <Check size={16} className={`text-${tier.color}-500`} /> 
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

            {step === 2 && selectedTier && (
                <div className="max-w-4xl mx-auto animate-fade-in relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-3xl -z-10"></div>
                    
                    <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white flex gap-2 items-center text-xs uppercase font-bold tracking-widest mb-8 transition-colors"><ArrowRight className="rotate-180" size={14}/> Alterar Plano</button>
                    
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

                        <div className="w-full md:w-80 bg-slate-950/80 rounded-2xl p-6 h-fit border border-white/20 shadow-xl">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Resumo do Pedido</h3>
                            <div className="flex justify-between text-sm mb-2 text-gray-300">
                                <span>{selectedTier.name} (Base)</span>
                                <span>R$ {getPrice(selectedTier.price)}</span>
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
                                <span className="text-2xl font-bold text-white">R$ {getPrice(selectedTier.price) + availableAddons.reduce((acc, curr) => acc + (addons[curr.id] ? curr.price : 0), 0)}</span>
                            </div>
                            <button onClick={finishOrder} className={`w-full py-4 bg-gradient-to-r ${getGradient(selectedTier.color)} text-white rounded-xl font-bold uppercase tracking-wider flex justify-center items-center gap-2 shadow-lg hover:scale-105 transition-transform`}>
                                Gerar Pedido <ArrowRight size={18}/>
                            </button>
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
    </div>
  );
}