import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, Globe, Workflow, LineChart, ChevronRight, Menu, Store, Cpu, X
} from 'lucide-react';

import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import CommercePage from './CommercePage';
import WebsitesPage from './WebsitesPage';
import AutomationsPage from './AutomationsPage';
import ConsultoriaPage from './ConsultoriaPage';

import logoZytech from './assets/logo.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); 
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (currentPage === 'landing') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('landing');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('landing')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all p-1.5 border border-white/10">
               <img src={logoZytech} alt="Zytech Logo" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <span className="text-xl font-bold tracking-widest uppercase font-mono">Zy<span className="text-blue-500">tech</span></span>
          </div>

          <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
            <NavButton active={currentPage === 'landing'} onClick={() => navigateTo('landing')}>Home</NavButton>
            <NavButton active={currentPage === 'about'} onClick={() => navigateTo('about')}>Sobre</NavButton>
            
            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <NavButton active={currentPage === 'chatbot'} onClick={() => navigateTo('chatbot')} icon={<Store size={14}/>}>Comércio</NavButton>
            <NavButton active={currentPage === 'websites'} onClick={() => navigateTo('websites')} icon={<Globe size={14}/>}>Sites</NavButton>
            <NavButton active={currentPage === 'automations'} onClick={() => navigateTo('automations')} icon={<Workflow size={14}/>}>Automação</NavButton>
            <NavButton active={currentPage === 'consultoria'} onClick={() => navigateTo('consultoria')} icon={<LineChart size={14}/>}>Consultoria</NavButton>
          </div>

          <div className="hidden md:block">
            <button onClick={handleContactClick} className="px-6 py-2.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
                Contato
            </button>
          </div>

          <div className="md:hidden text-white">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
            <button onClick={() => navigateTo('landing')} className="text-left text-lg font-medium hover:text-blue-400">Home</button>
            <button onClick={() => navigateTo('about')} className="text-left text-lg font-medium hover:text-blue-400">Sobre</button>
            <div className="h-px w-full bg-white/10 my-2"></div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Soluções</div>
            <button onClick={() => navigateTo('chatbot')} className="flex items-center gap-3 text-left text-lg font-medium hover:text-blue-400"><Store size={18} className="text-blue-500"/> Comércio</button>
            <button onClick={() => navigateTo('websites')} className="flex items-center gap-3 text-left text-lg font-medium hover:text-blue-400"><Globe size={18} className="text-purple-500"/> Websites</button>
            <button onClick={() => navigateTo('automations')} className="flex items-center gap-3 text-left text-lg font-medium hover:text-blue-400"><Workflow size={18} className="text-amber-500"/> Automações</button>
            <button onClick={() => navigateTo('consultoria')} className="flex items-center gap-3 text-left text-lg font-medium hover:text-blue-400"><LineChart size={18} className="text-emerald-500"/> Consultoria</button>
            <button onClick={handleContactClick} className="mt-4 w-full py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-xl">Falar com Consultor</button>
          </div>
        )}
      </nav>

      <main className="relative z-0">
        {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
        {currentPage === 'chatbot' && <CommercePage navigateTo={navigateTo} />}
        {currentPage === 'websites' && <WebsitesPage navigateTo={navigateTo} />}
        {currentPage === 'automations' && <AutomationsPage navigateTo={navigateTo} />}
        {currentPage === 'consultoria' && <ConsultoriaPage navigateTo={navigateTo} />}
      </main>

      <footer className="relative z-10 bg-slate-950 border-t border-white/5 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center gap-3 opacity-80">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center p-1">
                        <img src={logoZytech} alt="Zytech Logo" className="w-full h-full object-contain filter brightness-0 invert" />
                    </div>
                    <span className="text-lg font-bold tracking-widest uppercase">Zy<span className="text-blue-500">tech</span></span>
                </div>
                <p className="text-gray-500 text-xs max-w-xs text-center md:text-left">
                    Transformando negócios através da inteligência artificial e design de alta performance.
                </p>
            </div>
            <div className="text-gray-600 text-xs tracking-wider">
                &copy; 2025 ZYTECH SOFTWARES. <br className="md:hidden"/>TODOS OS DIREITOS RESERVADOS.
            </div>
        </div>
      </footer>
    </div>
  );
}

const NavButton = ({ children, active, onClick, icon }) => (
    <button 
        onClick={onClick}
        className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${active ? 'bg-white/10 text-white shadow-inner' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
    >
        {icon}
        {children}
    </button>
);