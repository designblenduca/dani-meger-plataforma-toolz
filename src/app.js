/* Renderiza a plataforma a partir de platform.config.js.
   Não contém decisões de layout — apenas injeta conteúdo e cores. */

(function () {
  const cfg = window.PLATFORM_CONFIG;
  if (!cfg) throw new Error("platform.config.js não foi carregado.");

  /* ---------- cores ----------
     Só estas duas são editáveis por cliente. Qualquer outra chave em
     colors é ignorada de propósito — fundo, textos e bordas são fixos
     e vivem apenas em src/styles.css. Ver README.md. */
  const COLOR_VARS = {
    primary: "--c-primary",
    sectionAccent: "--c-section-accent",
  };

  const root = document.documentElement;
  Object.entries(cfg.colors || {}).forEach(([key, value]) => {
    if (COLOR_VARS[key] && value) root.style.setProperty(COLOR_VARS[key], value);
  });

  document.title = cfg.brand?.name || "Plataforma";

  /* ---------- header ---------- */
  const logo = document.getElementById("brand-logo");
  logo.src = cfg.brand.logo.src;
  logo.alt = cfg.brand.logo.alt || cfg.brand.name;
  logo.style.height = (cfg.brand.logo.height || 34) + "px";

  const search = document.getElementById("search-input");
  search.placeholder = cfg.header.searchPlaceholder;

  const cta = document.getElementById("header-cta");
  cta.textContent = cfg.header.ctaLabel;
  cta.href = cfg.header.ctaHref || "#";

  document.getElementById("cart-link").href = cfg.header.cartHref || "#";

  /* ---------- banner ---------- */
  const banner = document.getElementById("banner-img");
  banner.src = cfg.banner.src;
  banner.alt = cfg.banner.alt || "";

  /* ---------- sessões ---------- */
  const container = document.getElementById("sections");

  (cfg.sections || []).forEach((section) => {
    const layout = section.layout === "vertical" ? "vertical" : "horizontal";

    const el = document.createElement("section");
    el.className = "section";

    const header = document.createElement("div");
    header.className = "section__header";

    const accent = document.createElement("span");
    accent.className = "section__accent";
    accent.setAttribute("aria-hidden", "true");

    const title = document.createElement("h2");
    title.className = "section__title";
    title.textContent = section.title;

    header.append(accent, title);

    const row = document.createElement("div");
    row.className = "section__row";

    (section.lessons || []).forEach((lesson) => {
      const card = document.createElement("a");
      card.className = "card card--" + layout;
      card.href = lesson.href || "#";

      const img = document.createElement("img");
      img.className = "card__img";
      img.src = lesson.cover;
      img.alt = "";
      img.loading = "lazy";

      const cardTitle = document.createElement("h3");
      cardTitle.className = "card__title";
      cardTitle.textContent = lesson.title;

      const actions = document.createElement("div");
      actions.className = "card__actions";

      const startBtn = document.createElement("span");
      startBtn.className = "card__start";
      startBtn.textContent = "Iniciar";

      const likeBtn = document.createElement("button");
      likeBtn.type = "button";
      likeBtn.className = "card__like";
      likeBtn.setAttribute("aria-label", "Favoritar aula");
      likeBtn.setAttribute("aria-pressed", "false");
      likeBtn.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.2S3.5 15.3 3.5 9.3A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.5 2.9c0 6-8.5 10.9-8.5 10.9z"/></svg>';
      likeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const pressed = likeBtn.getAttribute("aria-pressed") === "true";
        likeBtn.setAttribute("aria-pressed", String(!pressed));
        likeBtn.classList.toggle("is-liked", !pressed);
      });

      actions.append(startBtn, likeBtn);

      const body = document.createElement("div");
      body.className = "card__body";
      body.append(cardTitle, actions);

      card.append(img, body);
      row.append(card);
    });

    const clip = document.createElement("div");
    clip.className = "section__clip";
    clip.append(row);

    const viewport = document.createElement("div");
    viewport.className = "section__viewport";

    const prevBtn = navButton("prev", "Aulas anteriores");
    const nextBtn = navButton("next", "Próximas aulas");

    viewport.append(clip, prevBtn, nextBtn);

    el.append(header, viewport);
    container.append(el);

    setupSlider({ clip, row, prevBtn, nextBtn, cardGap: 12 });
  });

  function navButton(dir, label) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "section__nav section__nav--" + dir;
    btn.setAttribute("aria-label", label);
    btn.disabled = true; // só habilita se houver overflow
    btn.innerHTML =
      dir === "prev"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';
    return btn;
  }

  /* Desliza o trilho de cards via transform (não scroll nativo).
     As setas só ficam ativas quando o conteúdo excede a largura visível
     — sem overflow, não há nenhuma animação nem controle disponível. */
  function setupSlider({ clip, row, prevBtn, nextBtn, cardGap }) {
    let offset = 0;

    function firstCardStep() {
      const card = row.children[0];
      return card ? card.getBoundingClientRect().width + cardGap : 0;
    }

    function maxOffset() {
      return Math.max(0, row.scrollWidth - clip.clientWidth);
    }

    function update() {
      const max = maxOffset();
      const hasOverflow = max > 1;

      prevBtn.disabled = !hasOverflow || offset <= 0;
      nextBtn.disabled = !hasOverflow || offset >= max;

      prevBtn.style.display = hasOverflow ? "" : "none";
      nextBtn.style.display = hasOverflow ? "" : "none";

      row.style.transform = "translateX(" + -offset + "px)";
    }

    prevBtn.addEventListener("click", () => {
      offset = Math.max(0, offset - firstCardStep() * 2);
      update();
    });

    nextBtn.addEventListener("click", () => {
      offset = Math.min(maxOffset(), offset + firstCardStep() * 2);
      update();
    });

    window.addEventListener("resize", () => {
      offset = Math.min(offset, maxOffset());
      update();
    });

    update();
  }
})();
