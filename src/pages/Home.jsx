import React, { useState, useEffect } from 'react';
import { Heart, Brain, Flame, Leaf, Check, MessageCircle, Phone, MapPin, ChevronDown, ShoppingCart, Star, HelpCircle, ArrowUp, Menu, X, Download } from 'lucide-react';

// --- IMPORTAÇÃO DOS ARQUIVOS DE MÍDIA ---
// Importando da pasta src/assets
import OleoDeChiaImg from '../assets/OleoDeChia.png';
import OleoDeChiaComGergelinImg from '../assets/OleoDeChiaComGergelin.png';
import OleoDeChiaComSemAboboraImg from '../assets/OleoDeChiaComSemAbobora.png';
import OleoDeChiaComAbacateImg from '../assets/OleoDeChiaComAbacate.png';
import SaladaImg from '../assets/salada.png';
import TempereVideo from '../assets/tempere a vida.mp4';
// O 'Catalogo-Oleo-de-Chia.pdf' deve estar na pasta 'public' para o link href funcionar.

// --- DADOS DOS PRODUTOS ---
// Baseado no seu arquivo HTML e PDF de preços
const productData = [
  {
    id: 1,
    name: "Óleo de Chia Extra Virgem",
    description: "Fonte superior de ômega-3 vegetal. Ideal para saladas e pratos frios.",
    imageUrl: OleoDeChiaImg, // Atualizado para usar a variável importada
    oldPrice: 39.90,
    newPrice: 33.91,
    whatsappText: "Olá! Gostaria de comprar o Óleo de Chia Extra Virgem"
  },
  {
    id: 2,
    name: "Chia com Gergelim",
    description: "Fusão oriental que reforça a imunidade e promove saúde óssea.",
    imageUrl: OleoDeChiaComGergelinImg, // Atualizado para usar a variável importada
    oldPrice: 46.57,
    newPrice: 39.58,
    whatsappText: "Olá! Gostaria de comprar o Óleo de Chia com Gergelim"
  },
  {
    id: 3,
    name: "Chia com Abóbora",
    description: "Rico em zinco, ideal para saúde masculina e fortalecimento imunológico.",
    imageUrl: OleoDeChiaComSemAboboraImg, // Atualizado para usar a variável importada
    oldPrice: 66.59,
    newPrice: 56.60,
    whatsappText: "Olá! Gostaria de comprar o Óleo de Chia com Semente de Abóbora"
  },
  {
    id: 4,
    name: "Chia com Abacate",
    description: "Fonte de beleza e hidratação, com sabor suave e textura aveludada.",
    imageUrl: OleoDeChiaComAbacateImg, // Atualizado para usar a variável importada
    oldPrice: 46.57,
    newPrice: 39.58,
    whatsappText: "Olá! Gostaria de comprar o Óleo de Chia com Abacate"
  }
];

// --- DADOS DOS BENEFÍCIOS ---
const benefitData = [
  {
    icon: Heart,
    title: "Saúde Cardiovascular",
    description: "Ricos em ômega-3, ajudam a reduzir o colesterol ruim e controlar a pressão arterial."
  },
  {
    icon: Brain,
    title: "Função Cerebral",
    description: "Nutrem os neurônios, melhorando a cognição, memória e saúde mental."
  },
  {
    icon: Flame,
    title: "Ação Anti-inflamatória",
    description: "Combatem processos inflamatórios silenciosos, base de muitas doenças crônicas."
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Prensados a frio, sem solventes, conservantes ou aditivos químicos."
  }
];

// --- DADOS DO FAQ ---
const faqData = [
  {
    question: "Como faço para comprar?",
    answer: "É simples! Basta clicar em qualquer botão 'Comprar no WhatsApp' nesta página, que você será direcionado para nosso atendimento. Lá, nossa equipe irá orientar sobre os produtos, formas de pagamento e entrega."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos PIX (com 15% de desconto), cartão de crédito (parcelado) e boleto bancário. O desconto no PIX é aplicado automaticamente no atendimento pelo WhatsApp."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Para a capital de São Paulo: 1-2 dias úteis. Demais localidades: 3-10 dias úteis, dependendo da região. Também oferecemos retirada gratuita na Av. Paulista, 807 - Loja 40."
  },
  {
    question: "Posso usar os óleos para cozinhar?",
    answer: "Não recomendamos o uso para frituras ou cozimento em altas temperaturas, pois isso destrói os nutrientes. Nossos óleos são ideais para saladas, pratos frios e finalização de preparos."
  }
];

// --- COMPONENTE DO PRODUTO ---
function ProductCard({ product }) {
  const WHATSAPP_NUMBER = "5511988865882"; // Coloque seu número aqui
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappText)}`;
  const discount = Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover" // Esta altura fixa com object-cover está correta para cards
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/e0e0e0/707070?text=Imagem+Indisponível'; }}
        />
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          -{discount}%
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

        <div className="mb-4">
          <span className="text-sm text-gray-500 line-through mr-2">
            R$ {product.oldPrice.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-2xl font-extrabold text-green-700">
            R$ {product.newPrice.toFixed(2).replace('.', ',')}
          </span>
          <span className="block text-sm font-semibold text-orange-600">
            15% de desconto no PIX
          </span>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
}

// --- COMPONENTE FAQ ---
function FaqItem({ faq, index, openIndex, setOpenIndex }) {
  const isOpen = index === openIndex;

  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 text-left font-semibold text-lg text-gray-800"
          onClick={() => setOpenIndex(isOpen ? -1 : index)}
          aria-expanded={isOpen}
        >
          <span>{faq.question}</span>
          <ChevronDown
            className={`w-5 h-5 text-green-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </button>
      </h2>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div className="pb-5 pr-4">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE DE SCROLL TO TOP ---
function ScrollToTopButton({ onScrollTo }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => onScrollTo('#home')}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-green-700 focus:outline-none"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}


// --- COMPONENTE PRINCIPAL DA PÁGINA ---
export default function Home() {

  // Função de rolagem suave
  const handleScrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 80; // Altura do navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (selector === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // State do FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  return (
    <>
      {/* SEÇÃO HERO */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6 leading-tight">
              Saúde e Sabor em Cada Gota
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Descubra o poder dos óleos nutracêuticos especiais.
              Qualidade pura, prensada a frio, para sua vitalidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => handleScrollTo('#products')}
                className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5"
              >
                Ver Produtos
              </button>
              <button
                onClick={() => handleScrollTo('#benefits')}
                className="bg-transparent border-2 border-green-700 text-green-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-green-700 hover:text-white"
              >
                Benefícios
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={SaladaImg} // Imagem atualizada
              alt="Mulher sorrindo com uma salada e óleo nutracêutico"
              className="rounded-2xl shadow-2xl w-full max-w-lg h-auto" // <-- MUDANÇA AQUI: Adicionado w-full e max-w-lg
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e0e0e0/707070?text=Imagem+Principal'; }}
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO BENEFÍCIOS */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              Por que Escolher Nossos Óleos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Produtos 100% naturais, prensados a frio, que preservam todos os nutrientes e oferecem benefícios reais para sua saúde.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitData.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:bg-green-50">
                <div className="inline-flex items-center justify-center bg-green-600 text-white rounded-full p-4 mb-5">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO PRODUTOS */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              Nossos Produtos Exclusivos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossa linha completa e escolha seu favorito.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO DE CATÁLOGO */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
                Nosso Catálogo Completo
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Veja todos os detalhes, informações nutricionais e benefícios de cada produto em nosso catálogo digital.
              </p>
              <a
                href="Catalogo-Oleo-de-Chia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Catálogo (PDF)
              </a>
            </div>
            {/* <-- MUDANÇA AQUI: Adicionado padding e flex para centralizar e diminuir a imagem */}
            <div className="order-1 md:order-2 flex items-center justify-center p-8 md:p-12">
              <img
                src={OleoDeChiaComSemAboboraImg}
                alt="Catálogo de produtos Nutracelticos"
                className="w-full h-auto max-w-xs rounded-2xl shadow-lg" // <-- MUDANÇA AQUI: max-w-xs (320px)
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e0e0e0/707070?text=Catálogo'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO DE VÍDEO */}
      <section id="video-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              Tempere sua Vida com Saúde
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja como é simples transformar sua refeição em um ato de cuidado.
            </p>
          </div>
          {/* <-- MUDANÇA AQUI: Reduzido de max-w-3xl para max-w-2xl --> */}
          <div className="max-w-2xl mx-auto">
            <video
              src={TempereVideo}
              className="w-full h-auto rounded-2xl shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
              poster={SaladaImg} // Usa a imagem de salada como pôster
            >
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* SEÇÃO COMO USAR */}
      <section id="how-to-use" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              Como Usar Nossos Óleos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simples, prático e delicioso - transforme suas refeições!
            </p>
          </div>
          <div className="relative grid md:grid-cols-4 gap-8">
            {/* Linha de conexão */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200" style={{ transform: 'translateY(-2.5rem)' }}></div>

            {["Escolha seu Óleo", "Regue sua Salada", "Não Aqueça", "Conserve Corretamente"].map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-green-600 text-white rounded-full font-extrabold text-3xl mb-4 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{step}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 && "Selecione o óleo com seu paladar e necessidades."}
                  {index === 1 && "Use para temperar saladas, finalizar pratos ou em smoothies."}
                  {index === 2 && "Preserve os nutrientes usando apenas em preparações frias."}
                  {index === 3 && "Após aberto, mantenha refrigerado e protegido da luz."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DEPOIMENTOS */}
      <section id="testimonials" className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de quem já experimentou.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Silva", location: "São Paulo, SP", text: "Comprei o óleo de chia com gergelim e estou amando! Além de dar um sabor incrível na salada, sinto que minha saúde melhorou muito." },
              { name: "Carlos Oliveira", location: "Rio de Janeiro, RJ", text: "Uso o de chia com abóbora há 3 meses e notei diferença na minha energia. O atendimento pelo WhatsApp foi super rápido!" },
              { name: "Ana Costa", location: "Belo Horizonte, MG", text: "Adorei a praticidade de comprar pelo WhatsApp e pagar com PIX. Recebi em 2 dias e o produto é de alta qualidade. Recomendo!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-orange-400" />
                  <Star className="w-5 h-5 text-orange-400" />
                  <Star className="w-5 h-5 text-orange-400" />
                  <Star className="w-5 h-5 text-orange-400" />
                  <Star className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={`https://placehold.co/40x40/cccccc/707070?text=${testimonial.name.charAt(0)}`}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos produtos e processo de compra.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openFaqIndex}
                setOpenIndex={setOpenFaqIndex}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA (CALL TO ACTION) */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Invista na Sua Saúde Agora!
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
            Compre agora pelo WhatsApp e garanta 15% de desconto no pagamento via PIX. Frete grátis para SP capital em compras acima de R$ 100.
          </p>
          <a
            href={`https://wa.me/5511988865882?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido dos óleos nutracêuticos")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5"
          >
            Fazer Pedido Agora
          </a>
        </div>
      </section>

      {/* Botão de Voltar ao Topo */}
      <ScrollToTopButton onScrollTo={handleScrollTo} />
    </>
  );
}