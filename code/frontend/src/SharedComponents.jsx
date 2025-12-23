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
        ${active ? 'cursor-pointer hover:bg-slate-800/40 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2' : 'opacity-60'}`} 
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