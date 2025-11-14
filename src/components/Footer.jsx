import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

// --- COMPONENTE DO FOOTER ---
export default function Footer({ onScrollTo }) {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        {/* Coluna 1: Sobre */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">Nutracelticos</h3>
          <p className="text-sm text-gray-400 max-w-md">
            Saúde e bem-estar através de produtos naturais de alta qualidade. Oferecemos os melhores óleos nutracêuticos para transformar sua alimentação e qualidade de vida.
          </p>
        </div>

        {/* Coluna 2: Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => onScrollTo('#products')} className="hover:text-orange-400 transition-colors">Produtos</button></li>
            <li><button onClick={() => onScrollTo('#benefits')} className="hover:text-orange-400 transition-colors">Benefícios</button></li>
            <li><button onClick={() => onScrollTo('#faq')} className="hover:text-orange-400 transition-colors">Perguntas Frequentes</button></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-green-400" />
              (11) 98886-5882
            </li>
            <li className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2 text-green-400" />
              Seg-Sex: 9h-18h
            </li>
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" />
              Av. Paulista, 807 - Loja 40<br />São Paulo - SP
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-gray-700 mt-12 pt-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nutracelticos.com.br - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}