import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Sobre a Professora</h2>
          <div className="w-24 h-1.5 bg-bio-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Formação Acadêmica</h3>
            <p className="text-slate-600">
              Licenciada em Ciências Biológicas com especialização em Genética e Biologia Molecular. Constante atualização em congressos e simpósios.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-bio-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom -z-10"></div>
            <div className="w-16 h-16 bg-bio-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
              <Award className="h-8 w-8 text-bio-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white transition-colors">Metodologia Exclusiva</h3>
            <p className="text-slate-600 group-hover:text-bio-50 transition-colors">
              Uso de mapas mentais, gamificação e tecnologia para tornar o aprendizado leve, visual e eficiente para o ENEM e vestibulares.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Materiais Didáticos</h3>
            <p className="text-slate-600">
              Autora de apostilas focadas e listas de exercícios comentadas que já ajudaram centenas de alunos a atingirem suas metas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-bio-50 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8">
           <div className="flex-1">
             <h3 className="text-2xl font-bold text-bio-900 mb-4">Minha Missão</h3>
             <p className="text-bio-800 text-lg leading-relaxed">
               "Acredito que a biologia não é apenas uma disciplina escolar, mas a chave para entendermos a nós mesmos e o mundo ao nosso redor. Meu objetivo é despertar essa curiosidade científica em cada aluno, transformando aulas em jornadas de descoberta."
             </p>
             <div className="mt-6 flex items-center gap-4">
               <div className="h-px bg-bio-300 flex-1"></div>
               <span className="text-bio-700 font-handwriting italic font-semibold">Janielly Oliveira</span>
             </div>
           </div>
           <div className="w-full md:w-1/3">
             <img src="https://picsum.photos/400/300" alt="Professora em sala de aula" className="rounded-xl shadow-md w-full object-cover h-64" />
           </div>
        </div>
      </div>
    </section>
  );
};