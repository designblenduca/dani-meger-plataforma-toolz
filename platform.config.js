/* =============================================================
 * PLATFORM CONFIG — o único arquivo que você edita por cliente.
 * =============================================================
 * Tudo aqui é MUTÁVEL. A estrutura do layout (header, banner,
 * cards, gaps) é IMUTÁVEL e vive em src/styles.css.
 * ============================================================= */

window.PLATFORM_CONFIG = {
  /* ---------- Identidade ---------- */
  brand: {
    name: "Lorem Ipsum Platform",
    /* Logo: altura e largura livres. Coloque o arquivo em assets/logo/.
       O header reserva 68px de altura; recomenda-se logo com até 40px de altura. */
    logo: {
      src: "assets/logo/logo.svg",
      alt: "Logo do cliente",
      height: 34, // px — largura é automática (proporcional)
    },
  },

  /* ---------- Cores (apenas cores são mutáveis) ---------- */
  colors: {
    headerBg: "#F5F5F5",
    headerBorder: "#E0E0E0",
    headerText: "#1A1A1A",
    searchBg: "#FFFFFF",
    searchBorder: "#D6D6D6",
    searchPlaceholder: "#8A8A8A",
    iconColor: "#1A1A1A",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    pageBg: "#FFFFFF",
    sectionTitle: "#1A1A1A",
    sectionAccent: "#1A1A1A", // a forma 8x20 ao lado do título
    cardTitle: "#FFFFFF",
  },

  /* ---------- Header (textos fixos, apenas rótulos) ---------- */
  header: {
    searchPlaceholder: "Pesquisar",
    ctaLabel: "Entrar",
    ctaHref: "#",
    cartHref: "#",
  },

  /* ---------- Banner ----------
     Imagem 1440x800px exportada do Figma, salva em assets/banner/.
     Preenche 100% da largura da página, altura fixa de 800px. */
  banner: {
    src: "assets/banner/banner.jpg",
    alt: "Banner da plataforma",
  },

  /* ---------- Sessões de aulas ----------
     layout: "horizontal" (cards 400x190) ou "vertical" (cards 334x508).
     Uma sessão NUNCA mistura os dois tipos. */
  sections: [
    {
      title: "Lorem ipsum dolor sit amet",
      layout: "horizontal",
      lessons: [
        { title: "Consectetur adipiscing", cover: "https://picsum.photos/seed/h1/800/380", href: "#" },
        { title: "Sed do eiusmod tempor", cover: "https://picsum.photos/seed/h2/800/380", href: "#" },
        { title: "Incididunt ut labore", cover: "https://picsum.photos/seed/h3/800/380", href: "#" },
        { title: "Et dolore magna aliqua", cover: "https://picsum.photos/seed/h4/800/380", href: "#" },
        { title: "Ut enim ad minim", cover: "https://picsum.photos/seed/h5/800/380", href: "#" },
      ],
    },
    {
      title: "Ut enim ad minim veniam",
      layout: "vertical",
      lessons: [
        { title: "Quis nostrud exercitation", cover: "https://picsum.photos/seed/v1/668/1016", href: "#" },
        { title: "Ullamco laboris nisi", cover: "https://picsum.photos/seed/v2/668/1016", href: "#" },
        { title: "Aliquip ex ea commodo", cover: "https://picsum.photos/seed/v3/668/1016", href: "#" },
        { title: "Duis aute irure dolor", cover: "https://picsum.photos/seed/v4/668/1016", href: "#" },
        { title: "Reprehenderit in voluptate", cover: "https://picsum.photos/seed/v5/668/1016", href: "#" },
      ],
    },
    {
      title: "Excepteur sint occaecat",
      layout: "horizontal",
      lessons: [
        { title: "Cupidatat non proident", cover: "https://picsum.photos/seed/h6/800/380", href: "#" },
        { title: "Sunt in culpa qui officia", cover: "https://picsum.photos/seed/h7/800/380", href: "#" },
        { title: "Deserunt mollit anim", cover: "https://picsum.photos/seed/h8/800/380", href: "#" },
        { title: "Id est laborum", cover: "https://picsum.photos/seed/h9/800/380", href: "#" },
      ],
    },
    {
      title: "Sed ut perspiciatis unde omnis",
      layout: "vertical",
      lessons: [
        { title: "Iste natus error sit", cover: "https://picsum.photos/seed/v6/668/1016", href: "#" },
        { title: "Voluptatem accusantium", cover: "https://picsum.photos/seed/v7/668/1016", href: "#" },
        { title: "Doloremque laudantium", cover: "https://picsum.photos/seed/v8/668/1016", href: "#" },
        { title: "Totam rem aperiam", cover: "https://picsum.photos/seed/v9/668/1016", href: "#" },
      ],
    },
  ],
};
