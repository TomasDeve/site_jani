import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/4 -translate-y-1/4">
         <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#16a34a" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.5C60.4,46.1,49.9,55.7,38.1,63.6C26.3,71.5,13.2,77.6,0.5,76.8C-12.2,75.9,-24.4,68.1,-36.8,60.6C-49.2,53.1,-61.8,45.9,-70.5,35.2C-79.2,24.5,-84,10.3,-82.1,-2.9C-80.1,-16.1,-71.4,-28.3,-61.6,-38.3C-51.8,-48.3,-40.9,-56.1,-29.4,-64.8C-17.9,-73.5,-5.8,-83.1,5.3,-92.3L16.4,-101.5L27.5,-110.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 transform -translate-x-1/4 translate-y-1/4">
        <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0ea5e9" d="M41.5,-71.1C55.6,-63.9,69.9,-57.4,80.6,-47.4C91.3,-37.4,98.4,-23.9,96.4,-10.8C94.4,2.3,83.3,15,74.2,27.3C65.1,39.6,58.1,51.5,48.4,61.1C38.7,70.7,26.4,78,13.2,79.5C0,81,-14.1,76.7,-27.4,71.2C-40.7,65.7,-53.2,59,-63.3,49.5C-73.4,40,-81.1,27.7,-83.4,14.6C-85.7,1.5,-82.6,-12.4,-75.4,-24.2C-68.2,-36,-56.9,-45.7,-45.4,-54.2C-33.9,-62.7,-22.2,-70,-9.6,-71.5L2.9,-73L15.4,-74.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-bio-50 border border-bio-100 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-bio-600" />
              <span className="text-sm font-medium text-bio-800">Explore o mundo da vida</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Aprenda Biologia de forma <span className="text-transparent bg-clip-text bg-gradient-to-r from-bio-600 to-teal-500">Simples e Fascinante</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Bem-vindo ao portal da Professora Janielly Oliveira. Aqui descomplicamos a ciência da vida para você alcançar seus objetivos acadêmicos com paixão e excelência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#biobot" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-bio-600 hover:bg-bio-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Tirar Dúvida com IA
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#classes" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all duration-300">
                Ver Conteúdos
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-bio-200 to-teal-200 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
              
              {/* Image Container - Using organic shape via CSS */}
              <div className="relative w-full h-full glass-card rounded-[2rem] p-4 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="w-full h-full bg-slate-200 rounded-[1.5rem] overflow-hidden relative group">
                  <img 
                    src="https://i.ibb.co/BKsS5Vzd/unnamed.jpg" 
                    alt="Professora Janielly Oliveira" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium">Prof. Janielly Oliveira</p>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float hidden sm:block">
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-lg">
                     <Sparkles className="h-6 w-6 text-green-600" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-medium">Experiência</p>
                     <p className="text-sm font-bold text-slate-800">+10 Anos Ensinando</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};