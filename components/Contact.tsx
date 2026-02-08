import React from 'react';
import { Mail, Instagram, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Fale Comigo</h2>
          <p className="mt-4 text-slate-600">
            Dúvidas, parcerias ou agendamento de aulas? Entre em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-bio-100 p-3 rounded-lg text-bio-600">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Instagram</h3>
                <p className="text-slate-600 mb-1">Acompanhe dicas diárias nos stories</p>
                <a href="#" className="text-bio-600 hover:text-bio-700 font-medium">@prof.janiellyoliveira</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-bio-100 p-3 rounded-lg text-bio-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600 mb-1">Para contatos profissionais</p>
                <a href="mailto:contato@janiellybio.com" className="text-bio-600 hover:text-bio-700 font-medium">contato@janiellybio.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-bio-100 p-3 rounded-lg text-bio-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Localização</h3>
                <p className="text-slate-600">Atendimento presencial em escolas parceiras e aulas online para todo o Brasil.</p>
              </div>
            </div>
            
             <div className="bg-bio-50 p-6 rounded-xl border border-bio-100 mt-8">
                <p className="text-slate-700 italic">
                    "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
                </p>
                <p className="text-slate-500 text-sm mt-2 text-right">- Nelson Mandela</p>
            </div>
          </div>

          {/* Simple Form */}
          <form className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-bio-500 focus:border-bio-500 outline-none transition-all" placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-bio-500 focus:border-bio-500 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-bio-500 focus:border-bio-500 outline-none transition-all" placeholder="Como posso ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-bio-600 hover:bg-bio-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};