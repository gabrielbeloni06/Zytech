import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Layout, Globe, ShoppingCart, Search, PenTool, Star, LineChart, Settings, Monitor, Smartphone, Zap
} from 'lucide-react';
import bgWeb from './assets/website.jpg';
import { ContactModal } from './SharedComponents';

const SearchIcon = (props) => <Search {...props} />;
const PenToolIcon = (props) => <PenTool {...props} />;

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

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-slate-950 text-white font-sans">
        <div className="absolute inset-0 z-0">
            <img src={bgWeb} alt="Background" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={() => navigateTo('landing')} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider group">
          <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} /> Voltar para Home
        </button>

        <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tight">
                Websites que <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                    Convertem
                </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                Não construímos apenas sites bonitos. Construímos máquinas de vendas digitais otimizadas para performance e SEO.
            </p>
        </div>

        <div className="max-w-6xl mx-auto bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
            
            <div className="w-full md:w-2/3 p-8 md:p-12">
                {step === 1 && (
                    <div className="animate-fade-in">
                        <h2 className="text-2xl font-bold text-white mb-2">1. Escolha a Estrutura</h2>
                        <p className="text-gray-400 mb-8 text-sm">Qual o tamanho do seu projeto digital?</p>
                        
                        <div className="grid gap-6">
                            {tiers.map((tier) => (
                                <div 
                                    key={tier.id}
                                    onClick={() => handleTierSelect(tier)}
                                    className="group relative p-6 rounded-2xl bg-slate-950 border border-white/10 hover:border-blue-500/50 cursor-pointer transition-all hover:bg-slate-800 flex items-center justify-between gap-6"
                                >
                                    <div className={`p-4 rounded-xl bg-${tier.color}-500/10 text-${tier.color}-400 group-hover:bg-${tier.color}-500 group-hover:text-white transition-colors`}>
                                        {tier.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg text-white mb-1">{tier.name}</h3>
                                        <p className="text-gray-400 text-xs">{tier.desc}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {tier.features.slice(0,3).map((f, i) => (
                                                <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-500">{f}</span>
                                            ))}
                                            <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-500">+</span>
                                        </div>
                                    </div>
                                    <div className="text-right min-w-fit">
                                        <div className="text-xs text-gray-500 mb-1">A partir de</div>
                                        <div className={`text-2xl font-bold text-${tier.color}-400`}>R$ {getPrice(tier.price)}</div>
                                        <div className="text-[10px] text-gray-600">Taxa única</div>
                                    </div>
                                    <ArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex bg-slate-950 border border-white/10 rounded-lg p-1">
                                {['monthly', 'semiannual', 'annual'].map((cycle) => (
                                    <button 
                                        key={cycle} 
                                        onClick={() => setBillingCycle(cycle)}
                                        className={`px-4 py-2 rounded-md text-xs font-bold uppercase transition-all ${billingCycle === cycle ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                                    >
                                        {cycle === 'monthly' ? 'Mensal' : cycle === 'semiannual' ? 'Semestral' : 'Anual'}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className="text-center text-[10px] text-gray-600 mt-2">*Ciclo referente à manutenção (se aplicável).</p>
                    </div>
                )}

                {step === 2 && selectedTier && (
                    <div className="animate-fade-in h-full flex flex-col">
                        <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-white flex items-center gap-2 mb-6"><ArrowRight className="rotate-180" size={14}/> Voltar</button>
                        <h2 className="text-2xl font-bold text-white mb-2">2. Turbine seu Projeto</h2>
                        <p className="text-gray-400 mb-8 text-sm">Adicione serviços profissionais para acelerar seus resultados.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {availableAddons.map((addon) => (
                                <div 
                                    key={addon.id}
                                    onClick={() => toggleAddon(addon.id)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${addons[addon.id] ? `bg-blue-500/10 border-blue-500 text-white` : 'bg-slate-950 border-white/10 text-gray-400 hover:border-white/30'}`}
                                >
                                    <div className={`p-2 rounded-lg ${addons[addon.id] ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-500'}`}>
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

                        <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
                            <div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Total do Projeto</div>
                                <div className="text-3xl font-bold text-white">
                                    R$ {getPrice(selectedTier.price) + availableAddons.reduce((acc, curr) => acc + (addons[curr.id] ? curr.price : 0), 0)}
                                </div>
                            </div>
                            <button onClick={finishOrder} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2">
                                Gerar Proposta <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full md:w-1/3 bg-slate-950 border-l border-white/10 p-8 md:p-12 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
                <div className="relative z-10">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Resumo</h3>
                    
                    {selectedTier ? (
                        <div className="space-y-6">
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Plano Base</div>
                                <div className="text-xl font-bold text-white">{selectedTier.name}</div>
                                <div className="text-sm text-blue-400">R$ {getPrice(selectedTier.price)}</div>
                            </div>
                            
                            {Object.keys(addons).some(k => addons[k]) && (
                                <div>
                                    <div className="text-xs text-gray-500 mb-2">Adicionais</div>
                                    <ul className="space-y-2">
                                        {availableAddons.filter(a => addons[a.id]).map(addon => (
                                            <li key={addon.id} className="text-sm text-gray-300 flex justify-between">
                                                <span>{addon.name}</span>
                                                <span className="text-gray-500">R$ {addon.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-500/20">
                                <div className="flex gap-3 mb-2">
                                    <Zap className="text-blue-400" size={16} />
                                    <span className="text-xs font-bold text-blue-300 uppercase">Garantia ZyTech</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Todos os sites incluem hospedagem de alta performance, SSL gratuito e suporte técnico especializado.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-center items-center text-center opacity-50">
                            <Layout size={48} className="text-gray-600 mb-4" />
                            <p className="text-sm text-gray-500">Selecione uma estrutura para começar a configurar seu projeto.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>

      {modalOpen && <ContactModal data={orderData} onClose={() => setModalOpen(false)} />}
    </div>
  );
}