import React, { useState } from 'react';
import { Leaf, Phone, Menu, X } from 'lucide-react';

// --- COMPONENTE DO NAVBAR ---
export default function Navbar({ onScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_NUMBER = "5511988865882";
  const WHATSAPP_GREETING = "Olá! Gostaria de saber mais sobre os óleos nutracêuticos";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

  const navLinks = [
    { name: "Benefícios", href: "#benefits" },
    { name: "Produtos", href: "#products" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onScrollTo('#home')}
          >
            <Leaf className="h-8 w-8 text-green-700" />
            <span className="text-2xl font-extrabold text-green-800 ml-2">
              Nutracelticos
            </span>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => onScrollTo(item.href)}
                className="text-gray-600 hover:text-green-700 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-green-700 focus:outline-none focus:text-green-700"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onScrollTo(item.href);
                  setIsOpen(false);
                }}
                className="text-gray-600 hover:bg-green-50 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-3 rounded-lg font-bold text-sm shadow-lg transition-all duration-300 hover:bg-green-600 w-full flex items-center justify-center mt-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}