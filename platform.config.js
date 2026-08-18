/* =============================================================
 * PLATFORM CONFIG — o único arquivo que você edita por cliente.
 * Cliente: Meger — Clínica Financeira (Mentoria Método MMD)
 * =============================================================
 * Tudo aqui é MUTÁVEL. A estrutura do layout (header, banner,
 * cards, gaps) é IMUTÁVEL e vive em src/styles.css.
 * ============================================================= */

window.PLATFORM_CONFIG = {
  /* ---------- Identidade ---------- */
  brand: {
    name: "Meger — Clínica Financeira",
    /* Lockup MEGER em SVG vetorial — nítido em qualquer resolução/zoom. */
    logo: {
      src: "assets/logo/logo.svg",
      alt: "Meger — Clínica Financeira",
      height: 34, // px — largura é automática (proporcional)
    },
  },

  /* ---------- Cores ----------
     Apenas DUAS cores são editáveis por cliente. Tudo o mais (fundo
     branco, textos em preto/cinza, bordas) é fixo — ver README.md. */
  colors: {
    primary: "#B8863B",       // dourado da marca — botão do header + botão "Iniciar"
    sectionAccent: "#B8863B", // ícone/forma 8x20 ao lado do título da sessão
  },

  /* ---------- Header (textos fixos, apenas rótulos) ---------- */
  header: {
    searchPlaceholder: "Pesquisar",
    ctaLabel: "Entrar",
    ctaHref: "#",
    cartHref: "#",
  },

  /* ---------- Banner ----------
     Imagem 1440x800px, salva em assets/banner/. */
  banner: {
    src: "assets/banner/banner.jpg",
    alt: "Bem-vindo à Mente Médica Milionária",
  },

  /* ---------- Sessões de aulas ----------
     layout: "horizontal" (cards 400x190) ou "vertical" (cards 334x508).
     Uma sessão NUNCA mistura os dois tipos.
     As capas em assets/covers/ já vêm exportadas no tamanho exato de
     cada layout — não redimensione nem recorte.
     coverTint: true aplica um véu na cor --c-primary (color-mix) sobre
     as capas da sessão, para unificar fotos/artes heterogêneas dentro
     da identidade da marca. Use nas sessões com capas mais soltas;
     omita nas que já têm identidade visual própria (ex.: capas de
     livro). */
  sections: [
    {
      title: "Boas-vindas",
      layout: "horizontal",
      coverTint: true, // capas variadas (foto/abstrato) → tinge com --c-primary p/ harmonizar com a marca
      lessons: [
        { title: "Boas-Vindas", cover: "assets/covers/01-boas-vindas.png", href: "#" },
        { title: "Método MMD", cover: "assets/covers/02-metodo-mmd.png", href: "#" },
        { title: "Ferramenta (Tutorial)", cover: "assets/covers/03-ferramenta.png", href: "#" },
        { title: "Cronograma / Materiais de Apoio", cover: "assets/covers/04-cronograma.png", href: "#" },
      ],
    },
    {
      title: "Finanças Comportamentais - Método MMD",
      layout: "vertical",
      coverTint: true,
      lessons: [
        { title: "Desvendando suas Finanças: O Caminho para o Autoconhecimento", cover: "assets/covers/05-autoconhecimento.png", href: "#" },
        { title: "Rumo à Liberdade Financeira: Negociação e Gestão de Riscos", cover: "assets/covers/06-negociacao.png", href: "#" },
        { title: "Construindo Futuros: Planejamento de Metas de Médio Prazo", cover: "assets/covers/07-medio-prazo.png", href: "#" },
        { title: "Sonhos em Ação: Estrategizando Metas de Longo Prazo", cover: "assets/covers/08-longo-prazo.png", href: "#" },
      ],
    },
    {
      title: "4 pilares",
      layout: "horizontal",
      coverTint: true,
      lessons: [
        { title: "Fase 1 – Fundamentos (Clareza e Organização)", cover: "assets/covers/09-fase-1-fundamentos.png", href: "#" },
        { title: "Fase 2 – Planejamento e Gestão (Previsibilidade Financeira)", cover: "assets/covers/10-fase-2-planejamento.png", href: "#" },
        { title: "Fase 3 – Gestão de Clientes (CX) (Previsibilidade de Receita)", cover: "assets/covers/11-fase-3-clientes.png", href: "#" },
        { title: "Fase 4 – Expansão e Extratégia (Crescimento com Controle)", cover: "assets/covers/12-fase-4-expansao.png", href: "#" },
      ],
    },
    {
      title: "Análise de Livros",
      layout: "vertical",
      lessons: [
        { title: "Rápido e Devagar", cover: "assets/covers/13-rapido-e-devagar.png", href: "#" },
        { title: "Casal Inteligente Enriquece Juntos", cover: "assets/covers/14-casal-inteligente.png", href: "#" },
        { title: "O Homem Mais Rico da Babilônia", cover: "assets/covers/15-babilonia.png", href: "#" },
        { title: "Pai Rico e Pai Pobre", cover: "assets/covers/16-pai-rico-pai-pobre.png", href: "#" },
      ],
    },
  ],
};
