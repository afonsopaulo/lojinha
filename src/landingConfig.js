// ============================================================================
// CONFIGURAÇÃO CENTRAL DA LANDING PAGE - RESINA EXTREME (CASH ON DELIVERY)
// Edite facilmente textos, links de WhatsApp, fotos e preços neste arquivo.
// ============================================================================

export const LANDING_CONFIG = {
  // Identidade da Marca e Logo
  brand: {
    name: "HubTech Store",
    logo: "/images/logo.png",
    tagline: "Distribuidor Oficial Resina Extreme"
  },

  // Barra de Anúncio Superior
  topBanner: {
    text: "RESINA EXTREME: PAGUE SOMENTE AO RECEBER NA SUA PORTA!",
    badge: "Estoque Limitado"
  },

  // Informações de Contato e WhatsApp
  whatsapp: {
    phoneNumber: "5586988357719", // Altere para o seu número com DDD (ex: 5511999999999)
    defaultSupportMessage: "Olá! Gostaria de tirar uma dúvida sobre a Resina Extreme com Pague na Entrega.",
    links: {
      kit1: "https://wa.me/5586988357719?text=Ol%C3%A1%21+Gostaria+de+fazer+o+pedido+do+Kit+1+%281+Frasco+Resina+Extreme+-+R%24+127%2C90%29+com+Pague+na+Entrega.",
      kit2: "https://wa.me/5586988357719?text=Ol%C3%A1%21+Quero+aproveitar+a+oferta+do+Kit+2+Frascos+Resina+Extreme+%28Mais+Vendido+-+R%24+197%2C90%29+com+Pague+na+Entrega.",
      kit3: "https://wa.me/5586988357719?text=Ol%C3%A1%21+Quero+o+Melhor+Custo-Benef%C3%ADcio%3A+Kit+3+Frascos+Resina+Extreme+%28R%24+267%2C90%29+com+Pague+na+Entrega.",
      duvidas: "https://wa.me/5586988357719?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+atendimento+sobre+a+aplica%C3%A7%C3%A3o+da+Resina+Extreme."
    }
  },

  // 1. DADOS DO PRODUTO E HERO SECTION
  hero: {
    badge: "Pague Somente ao Receber na Sua Porta",
    headline: "Brilho Espelhado, Efeito Vitrificado no Seu Veículo!",
    subheadline: "O tratamento automotivo que faz a água e a sujeira escorrerem sem grudar na lataria. Aumenta a profundidade da cor e protege a pintura. Rende até 10 aplicações e dura até 2 meses!",
    productImage: "/images/img1.jpeg",
    priceAnchor: "De R$ 120,00",
    priceCurrent: "R$ 99,99",
    priceInstallments: "ou até 12x de R$ 10,37 no cartão na entrega",
    trustBadge: "Risco Zero: Você só paga ao entregador quando a encomenda estiver na sua mão!",
    stockRemaining: 14,
    satisfactionRate: "99.4%",
    reviewsRating: "4.9 / 5.0",
    reviewsCount: "3.420 veículos tratados",
    ctaText: "VER OFERTAS E PEDIR COM PAGUE NA ENTREGA",
    pills: [
      "💧 Hidrorrepelência Extrema",
      "✨ Efeito Vitrificação",
      "🚗 Carros, Motos e Caminhões",
      "🎨 Qualquer Cor de Veículo"
    ]
  },

  // 2. BENEFÍCIOS E CARACTERÍSTICAS DA RESINA EXTREME
  productBenefits: {
    title: "O Que a Resina Extreme Faz Pelo Seu Veículo?",
    subtitle: "A cada aplicação, um verdadeiro banho de vitrificação e proteção de alta performance.",
    items: [
      {
        title: "Hidrorrepelência Superior",
        desc: "A água bate e escorre instantaneamente em pequenas gotas. Evita que a lama e a sujeira grudem na pintura, facilitando qualquer lavagem futura."
      },
      {
        title: "Intensifica a Cor e o Brilho",
        desc: "Restaura o brilho espelhado da pintura preservada e realça a profundidade do tom original, dando aspecto de carro novo que acabou de sair do polimento."
      },
      {
        title: "Película Protetora Anti-Tempo",
        desc: "Cria uma barreira transparente contra raios UV do sol, chuva ácida, sereno, poeira e fezes de pássaros."
      },
      {
        title: "Efeito de Vitrificação Prática",
        desc: "Você obtém o acabamento premium de um vitrificador profissional sem precisar de politriz ou mão de obra cara."
      },
      {
        title: "Rendimento de 8 a 10 Aplicações",
        desc: "Cada frasco rende de 8 a 10 aplicações completas. Custo por aplicação inferior a R$ 13,00!"
      },
      {
        title: "Durabilidade de 1 a 2 Meses",
        desc: "Cada aplicação protege o veículo por 30 a 60 dias, dependendo da exposição ao tempo e rotina de uso."
      }
    ],
    vehicleCompatibility: "Compatível com Carros, Motos e Caminhões de qualquer cor ou ano."
  },

  // 3. TRANSPARÊNCIA E INFORMAÇÕES IMPORTANTES (VERDADE SOBRE RESULTADOS)
  transparency: {
    title: "⚠ Informações Importantes & Honestidade Absoluta",
    subtitle: "Falamos a verdade que outras marcas escondem: saiba exatamente o que a Resina Extreme faz.",
    alertBadge: "Transparência HubTech Store",
    items: [
      {
        isWarning: true,
        title: "NÃO Recupera Pintura Queimada",
        description: "Assim como qualquer outro produto sério do mercado, a Resina Extreme NÃO tem o poder de reconstruir uma pintura onde o verniz já foi totalmente perdido ou craquelado pelo sol."
      },
      {
        isWarning: true,
        title: "Sobre Riscos no Veículo",
        description: "A Resina Extreme ajuda a disfarçar riscos superficiais leves (marcas de pano/swirls), melhorando significativamente a aparência visual. Entretanto, ela NÃO remove riscos profundos que atingiram a lataria."
      },
      {
        isWarning: false,
        title: "Restaura o Brilho em Pinturas Preservadas",
        description: "Se a pintura e o verniz do seu carro ainda estiverem íntegros, a Resina Extreme intensifica a cor, remove a opacidade e proporciona um brilho espelhado espetacular."
      },
      {
        isWarning: false,
        title: "Proteção Contínua Preventiva",
        description: "Cria uma película resistente que protege a pintura contra o desgaste das intempéries, mantendo o carro protegido e muito mais fácil de lavar."
      }
    ]
  },

  // 4. DEMONSTRAÇÃO EM VÍDEO (SOCIAL PROOF & USO)
  // Formato vertical estilo Shorts/Reels (9:16)
  videoSection: {
    title: "Veja a Resina Extreme em Ação Real",
    subtitle: "Confira o teste de hidrorrepelência com água escorrendo e o brilho espelhado na lataria.",
    videos: [
      {
        id: "video-1",
        title: "Olha como ficou!",
        subtitle: "Veja o antes e depois do carro após a aplicação da Resina Extreme.",
        embedUrl: "https://www.youtube-nocookie.com/embed/5UFvELMgVv8?controls=1&rel=0",
        duration: "0:25",
        views: "24.8k visualizações"
      },
      {
        id: "video-2",
        title: "Efeito Vitrificação na Prática!",
        subtitle: "Assista ao teste da água escorrendo com a película protetora da Resina Extreme.",
        embedUrl: "https://www.youtube-nocookie.com/embed/Mc8Z1KrWMNw?controls=1&rel=0",
        duration: "0:30",
        views: "41.3k visualizações"
      },
      {
        id: "video-3",
        title: "Resultado Real em Vídeo!",
        subtitle: "Descubra o poder e o acabamento impecável da Resina Extreme.",
        embedUrl: "https://www.youtube-nocookie.com/embed/0gZtL9JmtJg?controls=1&rel=0",
        duration: "0:38",
        views: "52.1k visualizações"
      },
      {
        id: "video-4",
        title: "Brilho Espelhado e Proteção!",
        subtitle: "Confira o resultado impressionante da Resina Extreme na lataria.",
        embedUrl: "https://www.youtube-nocookie.com/embed/oeA-C919Sn0?controls=1&rel=0",
        duration: "1:02",
        views: "36.5k visualizações"
      }
    ]
  },

  // 5. PROVA SOCIAL (DEPOIMENTOS E PRINTS DE CLIENTES)
  reviewsSection: {
    title: "Quem comprou a Resina Extreme, aprovou",
    subtitle: "Resultados reais em carros e motos de clientes de todo o Brasil. Clique nos prints para ampliar.",
    reviews: [
      {
        id: 1,
        src: "/images/reviews/001.jpeg",
        alt: "Print de WhatsApp de cliente mostrando o brilho nos veículos",
        author: "Fernanda Silveira",
        location: "São Paulo - SP",
        rating: 5,
        time: "Recebido há 2 dias",
        tag: "Pagou no Pix ao Entregador",
        comment: "Olha como estão lindos. Brilhosos! Sim o produto é bom mesmo. Fiquei muito satisfeita com o resultado nos veículos."
      },
      {
        id: 2,
        src: "/images/reviews/002.jpeg",
        alt: "Print de WhatsApp com reflexo espelhado na lataria",
        author: "Rodrigo Carvalho",
        location: "Belo Horizonte - MG",
        rating: 5,
        time: "Recebido há 4 dias",
        tag: "Pagou no Cartão ao Entregador",
        comment: "Obg o produto é muito bom parabéns! O espelhamento na lataria ficou impecável, entrega rápida e segura."
      },
      {
        id: 3,
        src: "/images/reviews/003.jpeg",
        alt: "Print de WhatsApp de cliente agradecendo o produto",
        author: "Lucas Almeida",
        location: "Campinas - SP",
        rating: 5,
        time: "Recebido há 1 semana",
        tag: "Compra Verificada COD",
        comment: "Só passando para agradecer! Produto muito bom mesmo, me conquistou com seus produtos, futuramente pretendo solicitar mais. Obrigado mesmo!"
      }
    ]
  },

  // 6. SEÇÃO 4: MODO DE APLICAR (SUBSTITUIÇÃO SOLICITADA PELO USUÁRIO)
  // Textos isolados e fáceis de editar
  howToApply: {
    title: "🚗 Como Aplicar a Resina Extreme (Modo de Usar)",
    subtitle: "Aplicação prática e rápida em 4 passos simples. Você mesmo aplica em casa em poucos minutos!",
    yieldAlert: "Cada frasco rende, em média: 8 a 10 aplicações completas. Duração de 1 a 2 meses por aplicação.",
    steps: [
      {
        stepNumber: "01",
        stepBadge: "1⃣ Passo 1",
        title: "Lave o Carro",
        subtitle: "Remoção de Impurezas",
        description: "Lave o carro normalmente com xampu automotivo para remover todas as impurezas, poeira e sujeiras da superfície.",
        icon: "Droplets"
      },
      {
        stepNumber: "02",
        stepBadge: "2⃣ Passo 2",
        title: "Borrife com o Carro Molhado",
        subtitle: "Aplicação Direta",
        description: "Com o carro ainda molhado, borrife a Resina Extreme por toda a superfície da lataria de maneira uniforme.",
        icon: "SprayCan"
      },
      {
        stepNumber: "03",
        stepBadge: "3⃣ Passo 3",
        title: "Aguarde e Seque com Microfibra",
        subtitle: "Ação da Resina",
        description: "Aguarde alguns minutos para a fórmula agir e fixar na pintura. Depois, seque suavemente com uma toalha de microfibra limpa.",
        icon: "Clock"
      },
      {
        stepNumber: "04",
        stepBadge: "4⃣ Passo 4",
        title: "Finalize Lustrando para o Brilho ✨",
        subtitle: "Acabamento Impecável",
        description: "Finalize lustrando a lataria com outra toalha de microfibra seca para revelar aquele brilho espelhado impecável e vitrificado.",
        icon: "Sparkles"
      }
    ]
  },

  // 7. OFERTAS E KITS DE COMPRA (SEÇÃO #ofertas)
  offersSection: {
    title: "Escolha o Seu Kit da Resina Extreme com Frete Grátis e Pague na Entrega",
    subtitle: "Lote promocional exclusivo. Sem necessidade de cartão agora: você só paga na porta da sua casa!",
    kits: [
      {
        id: "kit-1",
        name: "Kit 1: Experimente",
        badge: "1 Frasco (Até 10 Aplicações)",
        highlight: false,
        quantity: "1 Frasco (500ml)",
        priceOld: "R$ 120,00",
        priceCurrent: "R$ 99,99",
        pricePerUnit: "R$ 99,99 por frasco",
        installments: "ou até 12x de R$ 10,37 no cartão ao receber",
        savings: "Economia de R$ +20,00",
        discountPercent: "16% OFF",
        freeShipping: true,
        features: [
          "1x Frasco Resina Extreme (500ml)",
          "Rende de 8 a 10 aplicações completas",
          "Até 1 ano de proteção para o seu carro",
          "Compatível com qualquer cor e modelo",
          "Frete Grátis com Código de Rastreio",
          "Pague Somente na Porta de Casa"
        ],
        ctaText: "Pedir 1 Frasco com Pague na Entrega",
        buttonLinkKey: "kit1"
      },
      {
        id: "kit-2",
        name: "Kit 2: Leve 2 Frascos",
        badge: "🔥 MAIS VENDIDO (82% DOS CLIENTES)",
        highlight: true, // Destaque visual azul royal com badge
        quantity: "2 Frascos (1.000ml no total)",
        priceOld: "R$ 240,00",
        priceCurrent: "R$ 124,99",
        pricePerUnit: "Apenas R$ 62,50 por frasco",
        installments: "ou até 12x de R$ 12,96 no cartão ao receber",
        savings: "Economia de R$ 74,99 (31% OFF)",
        discountPercent: "31% OFF",
        freeShipping: true,
        features: [
          "2x Frascos Resina Extreme (500ml cada)",
          "Rende até 20 aplicações completas",
          "Ideal para manter 2 carros ou motos",
          "Super economia de R$ 260,10",
          "Frete Expresso",
          "Pague Somente na Porta de Casa"
        ],
        ctaText: "QUERO A OFERTA MAIS VENDIDA",
        buttonLinkKey: "kit2"
      },
      {
        id: "kit-3",
        name: "Kit 3: Leve 3 Frascos",
        badge: "🏆 MELHOR CUSTO-BENEFÍCIO",
        highlight: false,
        quantity: "3 Frascos (1.500ml no total)",
        priceOld: "R$ 297,00",
        priceCurrent: "R$ 147,00",
        pricePerUnit: "Incríveis R$ 49,00 por frasco",
        installments: "ou até 12x de R$ 15,24 no cartão ao receber",
        savings: "Economia de R$ 150,00 (Maior Desconto)",
        discountPercent: "51% OFF",
        freeShipping: true,
        features: [
          "3x Frascos Resina Extreme (500ml cada)",
          "Rende até 30 aplicações completas",
          "Maior desconto por unidade da loja",
          "Estoque para anos de cuidado automotivo",
          "Frete Expresso",
          "Pague Somente na Porta de Casa"
        ],
        ctaText: "Quero o Maior Desconto",
        buttonLinkKey: "kit3"
      }
    ]
  },

  // 8. EXPLICATIVO: O QUE É CASH ON DELIVERY (PAGUE NA ENTREGA)
  cashOnDeliverySection: {
    title: "O Que é 'Pague na Entrega' e Por Que é 100% Seguro?",
    subtitle: "Compre com tranquilidade: você só paga quando o frasco estiver em suas mãos.",
    topics: [
      {
        number: "1",
        title: "Faça seu pedido sem cartão agora mesmo",
        description: "Você não digita número de cartão, nem senha, nem dados confidenciais na internet. Seu pedido é gerado apenas com o seu nome e endereço de entrega.",
        icon: "ShieldAlertOff"
      },
      {
        number: "2",
        title: "Seu pacote é enviado com frete rápido e código de rastreio",
        description: "Assim que despachado, você recebe todas as atualizações no WhatsApp para acompanhar a rota do entregador até o seu endereço.",
        icon: "TruckFast"
      },
      {
        number: "3",
        title: "Você confere e só paga diretamente ao entregador na sua porta",
        description: "Quando o entregador tocar sua campainha, você pega sua encomenda em mãos, confere o frasco lacrado e realiza o pagamento via Pix, Cartão ou Dinheiro.",
        icon: "BadgeCheck"
      }
    ]
  },

  // 9. PERGUNTAS FREQUENTES (FAQ) - RESINA EXTREME & PAGUE NA ENTREGA
  faqs: [
    {
      question: "A Resina Extreme recupera pintura queimada de sol?",
      answer: "Não! É fundamental ser 100% transparente: a Resina Extreme NÃO recupera pintura queimada onde o verniz já foi totalmente perdido ou craquelado. Ela restaura o brilho e intensifica a cor em pinturas com verniz preservado."
    },
    {
      question: "Ela remove riscos do carro?",
      answer: "A Resina Extreme ajuda a disfarçar riscos superficiais e marcas leves (como marcas de pano/lavagem), melhorando significativamente o aspecto visual da lataria. Porém, ela não remove riscos profundos que atingiram a lata."
    },
    {
      question: "Quanto rende cada frasco e qual a durabilidade?",
      answer: "Cada frasco rende, em média, de 8 a 10 aplicações completas em carros médios. Cada aplicação tem durabilidade de 1 a 2 meses com efeito de hidrorrepelência e proteção ativos."
    },
    {
      question: "Pode ser usada em motos, caminhões e qualquer cor de pintura?",
      answer: "Sim! A Resina Extreme é 100% compatível com carros, motos e caminhões, funcionando perfeitamente em pinturas pretas, brancas, prata, vermelhas ou qualquer outra tonalidade."
    },
    {
      question: "Preciso pagar algum valor antes de o produto chegar?",
      answer: "Não! Absolutamente nada. Você não paga frete adiantado nem valor de produto no site. Você só realiza o pagamento diretamente ao entregador quando a encomenda estiver nas suas mãos."
    },
    {
      question: "Quais formas de pagamento o entregador aceita na minha porta?",
      answer: "O entregador leva maquininha móvel atualizada. Você pode pagar via Pix (QR Code na hora), Cartão de Débito, Cartão de Crédito (podendo parcelar) ou Dinheiro em espécie."
    }
  ],

  // 10. RODAPÉ E DADOS DA EMPRESA
  footer: {
    brandName: "HubTech Store Oficial",
    brandLogo: "/images/logo.png",
    legalText: "Todos os direitos reservados. CNPJ: 42.109.845/0001-92 | Razão Social: HubTech Store Comércio e Logística Ltda.",
    disclaimer: "Este site não é afiliado ao Facebook, Google ou YouTube. Os resultados podem variar de acordo com o estado prévio da pintura e modo de aplicação.",
    supportEmail: "suporte@hubtechstore.com.br",
    shippingNotice: "Envios com seguro e rastreio para todo o território nacional."
  }
};
