import React, { useState, useEffect } from 'react';
import { LANDING_CONFIG } from './landingConfig';
import {
  ShieldCheck,
  Truck,
  ShoppingBag,
  CheckCircle2,
  Star,
  Play,
  X,
  ChevronDown,
  Clock,
  Lock,
  Sparkles,
  MapPin,
  Award,
  Zap,
  Check,
  ZoomIn,
  ArrowRight,
  CreditCard,
  Banknote,
  QrCode,
  ShieldAlert,
  MessageCircle,
  HelpCircle,
  Droplets,
  AlertTriangle,
  XCircle,
  Car
} from 'lucide-react';

export default function App() {
  // Estado da Lightbox Modal de Reviews
  const [selectedReview, setSelectedReview] = useState(null);
  // Estado do FAQ (acordeão)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  // Estado do Sticky Mobile CTA (aparece após rolar o Hero)
  const [showStickyCta, setShowStickyCta] = useState(false);
  // Notificação toast de prova social recente
  const [recentBuyer, setRecentBuyer] = useState(null);
  const [showRecentBuyer, setShowRecentBuyer] = useState(false);

  // Monitora scroll para o Sticky CTA Mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar lightbox ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedReview(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Simulação de compras recentes (Gatilho de Prova Social e Urgência CRO)
  useEffect(() => {
    const buyers = [
      { name: 'Ricardo Silveira', city: 'São Paulo - SP', kit: 'Kit 2 Frascos (Mais Vendido)', time: 'há 3 minutos' },
      { name: 'Carlos Eduardo', city: 'Curitiba - PR', kit: 'Kit 2 Frascos', time: 'há 6 minutos' },
      { name: 'Gustavo Moreira', city: 'Belo Horizonte - MG', kit: 'Kit 3 Frascos (Combo Max)', time: 'há 11 minutos' },
      { name: 'Fabrício Mendes', city: 'Campinas - SP', kit: 'Kit 1 Frasco (500ml)', time: 'há 15 minutos' },
      { name: 'Leandro Castro', city: 'Rio de Janeiro - RJ', kit: 'Kit 2 Frascos (Mais Vendido)', time: 'há 22 minutos' }
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      setRecentBuyer(buyers[currentIndex]);
      setShowRecentBuyer(true);

      const hideTimer = setTimeout(() => {
        setShowRecentBuyer(false);
      }, 5000);

      currentIndex = (currentIndex + 1) % buyers.length;
      return () => clearTimeout(hideTimer);
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  // Rolar suavemente para a seção de ofertas
  const scrollToOffers = (e) => {
    if (e) e.preventDefault();
    const section = document.getElementById('ofertas');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      {/* =========================================================================
          BARRA DE ANÚNCIO SUPERIOR (URGÊNCIA & VALOR IMEDIATO CRO)
      ========================================================================= */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-semibold shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300"></span>
          </span>
          <span className="tracking-wide">
            {LANDING_CONFIG.topBanner?.text || "RESINA EXTREME: PAGUE SOMENTE AO RECEBER NA SUA PORTA!"}
          </span>
          <span className="hidden sm:inline bg-blue-900/60 text-blue-100 text-xs px-2 py-0.5 rounded-full ml-1 border border-blue-400/30">
            {LANDING_CONFIG.topBanner?.badge || "Estoque Limitado"}
          </span>
        </div>
      </div>

      {/* =========================================================================
          CABEÇALHO DA MARCA / AUTORIDADE
      ========================================================================= */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-9 z-30 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <img
                src={LANDING_CONFIG.brand?.logo || "/images/logo.png"}
                alt={LANDING_CONFIG.brand?.name || "HubTech Store"}
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full w-fit">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Distribuidor Oficial
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Pague na Entrega Autorizado</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <a href="#beneficios" className="hover:text-blue-600 transition-colors">Benefícios</a>
            <a href="#como-aplicar" className="hover:text-blue-600 transition-colors text-blue-600 font-bold">Modo de Aplicar</a>
            <a href="#transparencia" className="hover:text-blue-600 transition-colors">Transparência</a>
            <a href="#videos" className="hover:text-blue-600 transition-colors">Em Vídeo</a>
            <a href="#depoimentos" className="hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#ofertas" className="hover:text-blue-600 transition-colors">Ofertas</a>
          </nav>

          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-600/30 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            Pedir na Entrega
          </a>
        </div>
      </header>

      {/* =========================================================================
          SEÇÃO 1: HERO SECTION (APRESENTAÇÃO E OFERTA IMEDIATA)
      ========================================================================= */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-200">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-400/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Coluna de Texto & Oferta Imediata */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge de Destaque Obrigatório */}
              <div className="inline-flex items-center gap-2 bg-blue-100/90 border border-blue-300/80 text-blue-900 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-4 shadow-sm animate-pulse-slow">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 -ml-4"></span>
                <span>{LANDING_CONFIG.hero.badge}</span>
              </div>

              {/* Headline Forte */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                {LANDING_CONFIG.hero.headline}
              </h1>

              {/* Subheadline com autoridade */}
              <p className="text-base sm:text-lg text-slate-600 mb-5 leading-relaxed max-w-2xl">
                {LANDING_CONFIG.hero.subheadline}
              </p>

              {/* Pílulas de Destaque Automotivo */}
              <div className="flex flex-wrap gap-2 mb-6">
                {LANDING_CONFIG.hero.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Caixa de Preço Âncora & Promocional em Destaque */}
              <div className="w-full bg-white border border-blue-200 rounded-2xl p-4 sm:p-5 mb-6 shadow-md shadow-blue-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                  Lote Promocional
                </div>

                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="text-slate-400 line-through text-base sm:text-lg font-medium">
                    {LANDING_CONFIG.hero.priceAnchor}
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                    por apenas {LANDING_CONFIG.hero.priceCurrent}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {LANDING_CONFIG.hero.priceInstallments} • <span className="text-emerald-700 font-semibold">Rende 8 a 10 Aplicações</span>
                </div>
              </div>

              {/* Selo de Confiança Visual Obrigatório */}
              <div className="w-full bg-emerald-50/90 border-l-4 border-emerald-500 rounded-r-xl p-3.5 mb-6 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-emerald-900 font-semibold leading-snug">
                  {LANDING_CONFIG.hero.trustBadge}
                </div>
              </div>

              {/* CTA Principal que leva direto para a Seção 5 (Tabela de Ofertas/Kits) */}
              <a
                href="#ofertas"
                onClick={scrollToOffers}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-extrabold text-base sm:text-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all text-center animate-shimmer"
              >
                <span>{LANDING_CONFIG.hero.ctaText}</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              {/* Mini Social Proof & Estoque */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1 text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800 ml-1">{LANDING_CONFIG.hero.reviewsRating}</span>
                  <span className="text-slate-400">({LANDING_CONFIG.hero.reviewsCount})</span>
                </div>
                <span className="inline-block w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-1.5 font-medium text-rose-600">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Restam apenas {LANDING_CONFIG.hero.stockRemaining} frascos no lote com frete grátis</span>
                </div>
              </div>

            </div>

            {/* Coluna da Foto do Produto */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow decorativo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/20 to-blue-600/20 rounded-3xl blur-xl" />

                {/* Card do Produto */}
                <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200/90 text-center">
                  
                  {/* Badge no topo da imagem */}
                  <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                    <Droplets className="w-3.5 h-3.5 text-blue-400" />
                    Efeito Hidrorrepelente
                  </div>

                  <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Pague ao Receber
                  </div>

                  {/* Foto do Produto: /public/images/hero-product.png */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center group mb-4">
                    <img
                      src={LANDING_CONFIG.hero.productImage}
                      alt="Frasco Resina Extreme Original"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Informações de garantia e rendimento na foto */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600 font-medium">
                    <div className="flex flex-col items-center">
                      <Sparkles className="w-4 h-4 text-blue-600 mb-0.5" />
                      <span>Rende até 10x</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-slate-200">
                      <Clock className="w-4 h-4 text-blue-600 mb-0.5" />
                      <span>Dura 1 a 2 Meses</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Car className="w-4 h-4 text-blue-600 mb-0.5" />
                      <span>Qualquer Veículo</span>
                    </div>
                  </div>

                </div>

                {/* Card flutuante de conferência */}
                <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 font-bold">
                    ✓
                  </div>
                  <div className="text-left text-xs">
                    <div className="font-bold text-slate-900">Frasco Lacrado na Sua Mão</div>
                    <div className="text-slate-500">Pague no ato: Pix, Cartão ou Dinheiro</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          BENEFÍCIOS DO PRODUTO (O QUE A RESINA EXTREME FAZ NA PINTURA)
      ========================================================================= */}
      <section id="beneficios" className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
              Tratamento Automotivo Completo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              {LANDING_CONFIG.productBenefits.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {LANDING_CONFIG.productBenefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LANDING_CONFIG.productBenefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-blue-500/20 font-bold text-base">
                    0{idx + 1}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Faixa de Compatibilidade */}
          <div className="mt-10 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-md">
            <Car className="w-6 h-6 text-blue-400 shrink-0" />
            <span className="text-sm sm:text-base font-bold">
              {LANDING_CONFIG.productBenefits.vehicleCompatibility}
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 4 (SUBSTITUÍDA CONFORME SOLICITADO):
          COMO APLICAR A RESINA EXTREME (MODO DE USAR EM 4 PASSOS)
      ========================================================================= */}
      <section id="como-aplicar" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white border-b border-slate-200 scroll-mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-100 border border-blue-300 px-3.5 py-1 rounded-full">
              Fácil e Rápido
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              {LANDING_CONFIG.howToApply.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {LANDING_CONFIG.howToApply.subtitle}
            </p>
          </div>

          {/* Cards das 4 Etapas do Modo de Usar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_CONFIG.howToApply.steps.map((step, index) => {
              const getIcon = () => {
                switch (index) {
                  case 0:
                    return <Droplets className="w-7 h-7 text-blue-600" />;
                  case 1:
                    return <SprayCanIcon className="w-7 h-7 text-blue-600" />;
                  case 2:
                    return <Clock className="w-7 h-7 text-blue-600" />;
                  case 3:
                  default:
                    return <Sparkles className="w-7 h-7 text-emerald-600" />;
                }
              };

              return (
                <div
                  key={step.stepNumber}
                  className={`relative rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                    index === 3
                      ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-300 shadow-lg shadow-emerald-500/10'
                      : 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Cabeçalho do Card com Ícone e Badge do Passo */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                        {getIcon()}
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
                        {step.stepBadge}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1 block">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index === 3 && (
                    <div className="mt-4 pt-3 border-t border-emerald-200 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Brilho Espelhado Imediato
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Destaque de Rendimento e Durabilidade */}
          <div className="mt-12 bg-white border border-blue-200 rounded-2xl p-5 text-center max-w-2xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {LANDING_CONFIG.howToApply.yieldAlert}
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO DE TRANSPARÊNCIA: INFORMAÇÕES IMPORTANTES
          Quebra objeções, gera credibilidade máxima e evita devoluções
      ========================================================================= */}
      <section id="transparencia" className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-700 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              {LANDING_CONFIG.transparency.alertBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              {LANDING_CONFIG.transparency.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {LANDING_CONFIG.transparency.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LANDING_CONFIG.transparency.items.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 border transition-all ${
                  item.isWarning
                    ? 'bg-rose-50/50 border-rose-200 text-slate-800'
                    : 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2 rounded-xl shrink-0 ${item.isWarning ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {item.isWarning ? <XCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className={`font-extrabold text-base mb-1.5 ${item.isWarning ? 'text-rose-900' : 'text-emerald-900'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center text-xs text-slate-500 max-w-2xl mx-auto">
            🛡️ <strong>Nosso Compromisso:</strong> Queremos clientes satisfeitos de verdade. Por isso explicamos exatamente os resultados reais antes de você receber na sua porta.
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 2: DEMONSTRAÇÃO EM VÍDEO (SOCIAL PROOF & USO)
          Formato Shorts/Reels 9:16 com 4 cards em grid 2x2 desktop / mobile
      ========================================================================= */}
      <section id="videos" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-950 border border-blue-800 px-3.5 py-1 rounded-full">
              Resultados em Vídeo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 mb-3">
              {LANDING_CONFIG.videoSection.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {LANDING_CONFIG.videoSection.subtitle}
            </p>
          </div>

          {/* Grid responsivo 2x2 no desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_CONFIG.videoSection.videos.map((video, idx) => (
              <div
                key={video.id}
                className="bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Contêiner de Proporção Fixa 9:16 (YouTube Shorts / Reels) */}
                <div className="relative w-full aspect-[9/16] bg-slate-950 overflow-hidden">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0 object-cover"
                  />

                  {/* Header do vídeo (estilo Shorts) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Play className="w-3 h-3 text-red-500 fill-red-500" />
                      Shorts #{idx + 1}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-slate-300 text-[10px] px-2 py-0.5 rounded-full">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 line-clamp-2">
                      {video.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{video.views}</span>
                    <span className="text-emerald-400 font-medium">Uso Real</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 3: PROVA SOCIAL (DEPOIMENTOS E PRINTS COM LIGHTBOX MODAL)
          Grid com 6 slots para fotos de feedback dinâmicas
      ========================================================================= */}
      <section id="depoimentos" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
              Avaliações de Clientes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              {LANDING_CONFIG.reviewsSection.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {LANDING_CONFIG.reviewsSection.subtitle}
            </p>
          </div>

          {/* Grid com 6 slots de Depoimentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LANDING_CONFIG.reviewsSection.reviews.map((rev) => (
              <div
                key={rev.id}
                onClick={() => setSelectedReview(rev)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* Imagem do Depoimento com indicador de zoom */}
                <div className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  <img
                    src={rev.src}
                    alt={rev.alt}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/15 transition-colors pointer-events-none" />
                  
                  {/* Botão de Ampliar / Lightbox */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 p-2 rounded-full shadow opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all z-10">
                    <ZoomIn className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* Tag do Tipo de Pagamento */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 z-10 border border-slate-700/60 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {rev.tag}
                  </div>
                </div>

                {/* Conteúdo textual da avaliação */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Estrelas */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-slate-400 font-medium ml-2">{rev.time}</span>
                    </div>

                    <p className="text-sm text-slate-700 italic leading-relaxed line-clamp-3">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{rev.author}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" /> {rev.location}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 group-hover:underline">
                      Ver print completo
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          MODAL LIGHTBOX (ZOOM EM TELA CHEIA PARA OS DEPOIMENTOS)
      ========================================================================= */}
      {selectedReview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar (X) */}
            <button
              onClick={() => setSelectedReview(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 z-20 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full transition-transform active:scale-90 shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagem Ampliada */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden max-h-[60vh] sm:max-h-[65vh]">
              <img
                src={selectedReview.src}
                alt={selectedReview.alt}
                className="w-full h-full object-contain max-h-[60vh] sm:max-h-[65vh]"
              />
            </div>

            {/* Detalhes do depoimento na base da modal */}
            <div className="p-5 sm:p-6 bg-white border-t border-slate-200 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="font-extrabold text-slate-900 text-base">{selectedReview.author}</div>
                  <span className="text-xs text-slate-400">• {selectedReview.location}</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedReview.tag}
                </div>
              </div>

              <div className="flex items-center gap-1 mb-2">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-slate-500 ml-1">{selectedReview.time}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                "{selectedReview.comment}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SEÇÃO 5: OFERTAS E KITS DE COMPRA (#ofertas)
          3 cards lado a lado: Kit 1 (1 frasco), Kit 2 (Mais Vendido), Kit 3 (Melhor Custo-Benefício)
      ========================================================================= */}
      <section id="ofertas" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white border-b border-slate-200 scroll-mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-100 border border-blue-300 px-3.5 py-1 rounded-full">
              Tabela de Ofertas Oficiais
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              {LANDING_CONFIG.offersSection.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {LANDING_CONFIG.offersSection.subtitle}
            </p>
          </div>

          {/* Grid dos 3 Kits */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {LANDING_CONFIG.offersSection.kits.map((kit) => {
              const whatsappLink = LANDING_CONFIG.whatsapp.links[kit.buttonLinkKey] || LANDING_CONFIG.whatsapp.links.kit1;

              return (
                <div
                  key={kit.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    kit.highlight
                      ? 'bg-white border-2 border-blue-600 shadow-2xl shadow-blue-600/15 lg:-translate-y-3 z-10'
                      : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Badge de Destaque no topo do card */}
                  {kit.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md shadow-blue-600/30 whitespace-nowrap">
                      {kit.badge}
                    </div>
                  )}

                  {!kit.highlight && (
                    <div className="inline-block bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 self-start">
                      {kit.badge}
                    </div>
                  )}

                  <div>
                    {/* Título e Quantidade */}
                    <div className="mb-4">
                      <h3 className="text-xl font-extrabold text-slate-900">{kit.name}</h3>
                      <div className="text-sm font-semibold text-blue-600 mt-0.5">{kit.quantity}</div>
                    </div>

                    {/* Preços */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span className="line-through">{kit.priceOld}</span>
                        <span className="bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded">
                          {kit.discountPercent}
                        </span>
                      </div>

                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {kit.priceCurrent}
                      </div>

                      <div className="text-xs text-blue-700 font-bold mt-1">
                        {kit.pricePerUnit}
                      </div>

                      <div className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-200">
                        {kit.installments}
                      </div>

                      <div className="mt-2 text-xs font-extrabold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {kit.savings}
                      </div>
                    </div>

                    {/* Lista de Benefícios */}
                    <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700">
                      {kit.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botão de Compra Individual */}
                  <div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-md active:scale-98 ${
                        kit.highlight
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 animate-shimmer'
                          : 'bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{kit.ctaText}</span>
                    </a>

                    <div className="text-center mt-3 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span>Pague apenas ao receber na sua porta</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
            🔒 <strong>Risco Zero:</strong> Você só paga ao entregador quando a encomenda estiver na sua mão. Aceitamos Pix, Cartão ou Dinheiro no ato da entrega!
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 6: EXPLICATIVO: O QUE É CASH ON DELIVERY (PAGUE NA ENTREGA)
          Quebra de objeções em 3 tópicos + elementos gráficos de segurança
      ========================================================================= */}
      <section id="seguranca" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-950 border border-blue-800 px-3.5 py-1 rounded-full">
              Segurança Máxima
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 mb-3">
              {LANDING_CONFIG.cashOnDeliverySection.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {LANDING_CONFIG.cashOnDeliverySection.subtitle}
            </p>
          </div>

          {/* Explicação visual em 3 tópicos principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {LANDING_CONFIG.cashOnDeliverySection.topics.map((topic) => (
              <div
                key={topic.number}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 font-extrabold text-xl flex items-center justify-center mb-6">
                    {topic.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Elementos gráficos de segurança: Cadeado, Escudo e Aperto de mão */}
          <div className="bg-gradient-to-r from-blue-950/80 via-slate-800 to-blue-950/80 border border-blue-800/60 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Cadeado de Segurança</div>
                  <div className="text-xs text-slate-400 mt-1">Nenhum dado financeiro ou de cartão é inserido online no site.</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Garantia HubTech de 90 Dias</div>
                  <div className="text-xs text-slate-400 mt-1">Proteção contra defeitos e direito à devolução incondicional.</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/30">
                  <HandshakeIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Aperto de Mão / Entrega Segura</div>
                  <div className="text-xs text-slate-400 mt-1">Você segura o pacote antes de realizar o pagamento na sua porta.</div>
                </div>
              </div>

            </div>
          </div>

          {/* Formas de pagamento aceitas */}
          <div className="mt-10 bg-slate-800/60 border border-slate-700 rounded-2xl p-5 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-300">
            <span className="text-slate-400 font-medium">O entregador leva maquininha:</span>
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4 text-blue-400" />
              <span>Pix Instantâneo</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <span>Cartão de Débito</span>
            </div>
            <div className="flex items-center gap-2">
              <Banknote className="w-4 h-4 text-emerald-400" />
              <span>Dinheiro</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 7: PERGUNTAS FREQUENTES (FAQ) - QUEBRA DE OBJEÇÕES DE RESINA EXTREME
      ========================================================================= */}
      <section id="duvidas" className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              Perguntas Frequentes sobre a Resina Extreme
            </h2>
            <p className="text-slate-600 text-sm">
              Tudo o que você precisa saber para comprar e aplicar com total tranquilidade.
            </p>
          </div>

          <div className="space-y-4">
            {LANDING_CONFIG.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaqIndex === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dúvida específica? Fale no WhatsApp */}
          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm text-slate-500 mb-3">
              Ficou com alguma dúvida sobre seu veículo ou entrega?
            </p>
            <a
              href={LANDING_CONFIG.whatsapp.links.duvidas}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Falar no WhatsApp com Atendente HubTech
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          RODAPÉ DE AUTORIDADE E DADOS EMPRESARIAIS
      ========================================================================= */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-white px-3 py-1.5 rounded-xl inline-flex items-center shadow-sm mb-3">
                <img
                  src={LANDING_CONFIG.brand?.logo || "/images/logo.png"}
                  alt={LANDING_CONFIG.brand?.name || "HubTech Store"}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 max-w-md">
                {LANDING_CONFIG.footer.shippingNotice}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 font-semibold text-xs">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Site Seguro SSL</span>
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-blue-400" /> Rastreamento 100%</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-400" /> 90 Dias de Garantia</span>
            </div>
          </div>

          <div className="pt-8 text-center text-slate-500 space-y-2 text-[11px]">
            <p>{LANDING_CONFIG.footer.legalText}</p>
            <p>{LANDING_CONFIG.footer.disclaimer}</p>
            <p className="text-slate-400">Dúvidas ou Suporte: {LANDING_CONFIG.footer.supportEmail}</p>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          STICKY MOBILE CTA BAR (ALTA CONVERSÃO MOBILE-FIRST)
      ========================================================================= */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 sm:hidden shadow-2xl flex items-center justify-between gap-3 animate-slideUp">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-medium">Pague na Entrega</span>
            <span className="text-base font-extrabold text-blue-600 leading-tight">
              {LANDING_CONFIG.hero.priceCurrent}
            </span>
          </div>

          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md text-center flex items-center justify-center gap-1.5 animate-pulse-slow"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Pedir sem Cartão Agora</span>
          </a>
        </div>
      )}

      {/* =========================================================================
          TOAST DE PROVA SOCIAL RECENTE (COMPRAS EM TEMPO REAL)
      ========================================================================= */}
      {showRecentBuyer && recentBuyer && (
        <div className="fixed bottom-16 sm:bottom-6 left-4 z-40 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3.5 shadow-xl max-w-xs animate-slideRight flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
            ✓
          </div>
          <div className="text-left text-xs">
            <div className="font-bold text-slate-900 leading-tight">
              {recentBuyer.name}
            </div>
            <div className="text-slate-500 text-[11px]">
              Pediu {recentBuyer.kit}
            </div>
            <div className="text-emerald-700 font-semibold text-[10px] flex items-center gap-1 mt-0.5">
              <span>{recentBuyer.city}</span> • <span>{recentBuyer.time}</span>
            </div>
          </div>
          <button
            onClick={() => setShowRecentBuyer(false)}
            aria-label="Fechar notificação"
            className="text-slate-400 hover:text-slate-600 p-1 ml-auto"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}

// Subcomponente de Ícone SprayCan para a aplicação
function SprayCanIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <rect width="8" height="14" x="13" y="7" rx="2" />
      <path d="m13 11 8-2" />
      <path d="M17 3v4" />
    </svg>
  );
}

// Subcomponente de Ícone Handshake
function HandshakeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4L16 11" />
      <path d="m18 11 3 3" />
      <path d="m6 12 3-3" />
      <path d="m7 7 2-2a1 1 0 0 1 1.4 0l4.3 4.3a1 1 0 0 1 0 1.4L12 13" />
      <path d="m2 14 6 6" />
      <path d="m14 4 6 6" />
    </svg>
  );
}
