import React, { useState } from 'react';
import { Check, Star, X, MessageSquare, Mail, Workflow, ArrowRight, Zap } from 'lucide-react';

export const ContactModal = ({ plan, onClose, data }) => {
  const handleBackdropClick = (e) => { if (e.target === e.currentTarget) onClose(); };
  
  const getWhatsAppMessage = () => {
    if (data) {
        return `Olá! Gostaria de contratar o desenvolvimento de um Website com a seguinte configuração:%0A%0A` +
               `*Plano Base:* ${data.tier}%0A` +
               `*Ciclo:* ${data.billingCycle === 'monthly' ? 'Mensal' : data.billingCycle === 'semiannual' ? 'Semestral' : 'Anual'}%0A` +
               `*Adicionais:* ${data.addons.length > 0 ? data.addons.join(', ') : 'Nenhum'}%0A` +
               `*Investimento Total:* R$ ${data.totalPrice}`;
    }
    return `Olá! Tenho interesse em contratar o plano *${plan}* da Zytech. Poderia me dar mais detalhes?`;
  };

  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-fade-in-up overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500"></div>
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full"><X size={20} /></button>
        
        <div className="text-center mb-8 mt-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Excelente Escolha!</h2>
          <p className="text-gray-400 text-sm">
            Você está interessado em: <br/>
            <strong className="text-white text-lg">{data ? `Website ${data.tier}` : plan}</strong>
          </p>
          {data && <p className="text-emerald-400 font-bold mt-2">Total: R$ {data.totalPrice}</p>}
        </div>

        <div className="space-y-3">
          <a 
            href={`https://wa.me/553180209584?text=${getWhatsAppMessage()}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 group transform hover:-translate-y-1"
          >
            <MessageSquare size={20} /> Finalizar no WhatsApp
          </a>
          <a href="mailto:contato.zytech@gmail.com" 
            className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors">
            <Mail size={20} /> Enviar Email
          </a>
        </div>
        <div className="mt-6 text-center border-t border-white/5 pt-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Atendimento Humano & Imediato</p>
        </div>
      </div>
    </div>
  );
};

export const ServiceCard = ({ icon, title, desc, active, onClick, tag, delay }) => {
  return (
    <div 
      onClick={active ? onClick : undefined} 
      className={`group relative p-8 rounded-3xl border border-white/5 backdrop-blur-md bg-white/[0.02] transition-all duration-500 ease-out overflow-hidden h-full flex flex-col
        ${active ? 'cursor-pointer hover:bg-slate-800/40 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150 pointer-events-none"></div>
      
      <div className="relative z-10 mb-auto">
        <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-gray-400 shadow-lg">
          {icon}
        </div>
        
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
          {tag && <span className="text-[10px] font-bold uppercase bg-blue-500/20 px-2 py-1 rounded text-blue-300 border border-blue-500/20">{tag}</span>}
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>

      {active && (
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors">
          Explorar Solução <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform"/>
        </div>
      )}
    </div>
  );
};

export const PricingCard = ({ title, icon, description, children, delay, featured, color, price, subPrice, iconBg, onHire }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    blue: { border: 'group-hover:border-blue-500/50', btn: 'bg-blue-600 hover:bg-blue-500', text: 'text-blue-400' },
    amber: { border: 'border-amber-500/50', btn: 'bg-gradient-to-r from-amber-500 to-orange-600', text: 'text-amber-400' },
    purple: { border: 'group-hover:border-purple-500/50', btn: 'bg-purple-600 hover:bg-purple-500', text: 'text-purple-400' },
    cyan: { border: 'group-hover:border-cyan-500/50', btn: 'bg-cyan-600 hover:bg-cyan-500', text: 'text-cyan-400' },
    emerald: { border: 'group-hover:border-emerald-500/50', btn: 'bg-emerald-600 hover:bg-emerald-500', text: 'text-emerald-400' },
    rose: { border: 'group-hover:border-rose-500/50', btn: 'bg-rose-600 hover:bg-rose-500', text: 'text-rose-400' },
    pink: { border: 'group-hover:border-pink-500/50', btn: 'bg-pink-600 hover:bg-pink-500', text: 'text-pink-400' }
  };

  const theme = colors[color] || colors.blue;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ease-out flex flex-col h-full
        ${featured 
          ? 'bg-slate-900/90 border-amber-500/30 scale-100 md:scale-105 shadow-2xl z-10' 
          : `bg-slate-950/40 border-white/5 ${theme.border} hover:bg-slate-900/60 hover:-translate-y-2`
        } backdrop-blur-md`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
          <Star size={10} fill="currentColor" /> Recomendado
        </div>
      )}

      <div className="mb-6 flex justify-between items-start">
        <div className={`p-4 rounded-2xl transition-transform duration-500 ${isHovered ? 'scale-110' : ''} ${iconBg || 'bg-white/5 border border-white/10'}`}>
          {icon}
        </div>
        {featured && <div className="text-amber-400 animate-pulse"><Star size={20} fill="currentColor" /></div>}
      </div>

      <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">{title}</h3>
      <div className="mb-6">
          <span className="text-[10px] text-gray-500 uppercase tracking-wide block mb-1">A partir de:</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-bold tracking-tight ${featured ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200' : 'text-white'}`}>
              {typeof price === 'number' ? `R$ ${price}` : price}
            </span>
            <span className="text-sm text-gray-500 font-medium">{subPrice}</span>
          </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8 min-h-[60px]">
        {description}
      </p>

      <div className="flex-grow mb-8">
        {children}
      </div>

      <button 
        onClick={onHire} 
        className={`relative overflow-hidden w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-lg group text-white ${theme.btn}`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Contratar Agora <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
        </span>
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
      </button>
    </div>
  );
};

export const AutomationContactModal = ({ tier, onClose }) => {
    const handleBackdropClick = (e) => { if (e.target === e.currentTarget) onClose(); };
    
    return (
      <div onClick={handleBackdropClick} className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-md animate-fade-in p-4">
        <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-1 w-full max-w-lg relative shadow-2xl animate-fade-in-up">
            <div className={`absolute inset-0 bg-gradient-to-br from-${tier.color}-500/20 to-purple-500/20 rounded-[2rem] pointer-events-none`}></div>
            <div className="bg-slate-900 rounded-[1.8rem] p-8 relative overflow-hidden h-full">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"><X size={24} /></button>
                
                <div className="flex flex-col items-center text-center mb-8">
                    <div className={`w-20 h-20 rounded-full bg-${tier.color}-500/10 border border-${tier.color}-500/30 flex items-center justify-center mb-6 text-${tier.color}-400 shadow-[0_0_30px_rgba(0,0,0,0.3)]`}>
                        <Workflow size={40} />
                    </div>
                    <div className={`text-${tier.color}-400 text-xs font-bold uppercase tracking-[0.2em] mb-2`}>Plano Selecionado</div>
                    <h2 className="text-3xl font-bold text-white uppercase">{tier.name}</h2>
                </div>

                <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/5 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Investimento Estimado</p>
                    <div className="text-3xl font-bold text-white mb-2">R$ {tier.price}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Projetos de automação exigem uma análise técnica preliminar para desenhar o fluxo ideal.
                    </p>
                </div>

                <a href={`https://wa.me/553180209584?text=Olá,%20tenho%20interesse%20no%20plano%20de%20Automação%20${tier.name}.`} target="_blank" rel="noopener noreferrer" 
                    className={`flex items-center justify-center gap-3 w-full py-4 bg-${tier.color}-600 hover:bg-${tier.color}-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-${tier.color}-500/30 group uppercase tracking-wider text-sm`}>
                    <MessageSquare size={18} /> Iniciar Consultoria
                </a>
            </div>
        </div>
      </div>
    );
};

export const CyberpunkChart = () => {
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