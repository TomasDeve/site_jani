import React from 'react';
import { Microscope, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Microscope className="h-6 w-6 text-bio-500" />
            <span className="font-bold text-xl text-white">Prof. Janielly Oliveira</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#home" className="hover:text-bio-400 transition-colors">Início</a>
            <a href="#about" className="hover:text-bio-400 transition-colors">Sobre</a>
            <a href="#classes" className="hover:text-bio-400 transition-colors">Aulas</a>
            <a href="#contact" className="hover:text-bio-400 transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Tomas Eugênio Souto Maior. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-2">
            <Code className="h-4 w-4 text-bio-600" />
            <p className="text-slate-400">
              Desenvolvido por <span className="font-semibold text-bio-400">Tomas Eugênio Souto Maior</span> (Desenvolvedor Full-Stack)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};