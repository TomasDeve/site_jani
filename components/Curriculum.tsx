import React from 'react';
import { TOPICS } from '../constants';

export const Curriculum: React.FC = () => {
  return (
    <section id="classes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-bio-600 font-semibold uppercase tracking-wider text-sm">Áreas de Estudo</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 sm:text-4xl">O Que Você Vai Aprender</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Uma abordagem completa dos principais temas da biologia exigidos no ensino médio e exames admissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS.map((topic) => (
            <div key={topic.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-transparent hover:border-bio-500 group">
              <div className="w-12 h-12 bg-bio-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bio-100 transition-colors">
                <topic.Icon className="h-6 w-6 text-bio-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{topic.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action for Private Classes */}
        <div className="mt-16 text-center">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-bio-400 to-teal-400">
                <div className="bg-white rounded-full px-8 py-4">
                    <p className="text-slate-800 font-medium">
                        Precisa de um reforço específico? 
                        <a href="#contact" className="text-bio-600 font-bold ml-2 hover:underline">Agende uma aula particular →</a>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};