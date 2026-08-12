# Template Plataforma — repositório coringa

Modelo neutro para desdobrar plataformas de mentoria. Duplique este repositório,
troque logo, banner, cores e conteúdo — **nada mais**.

## Como rodar

```bash
python3 -m http.server 5173
```

Abra `http://localhost:5173`.

## Estrutura

```
index.html              # markup do header/banner/sessões (não editar)
platform.config.js      # ÚNICO arquivo a editar por cliente
src/styles.css          # estrutura imutável + variáveis de cor
src/app.js              # renderiza as sessões a partir do config
assets/logo/            # logo do cliente
assets/banner/          # banner 1440x800 exportado do Figma
assets/covers/          # capas das aulas (400x190 ou 334x508)
```

## O que é MUTÁVEL

| Item | Onde |
|---|---|
| Logo (altura e largura livres) | `platform.config.js → brand.logo` |
| Cores de todos os elementos | `platform.config.js → colors` |
| Banner (imagem 1440x800) | `assets/banner/` + `banner.src` |
| Título e tipo das sessões | `platform.config.js → sections` |
| Aulas (título, capa, link) | `platform.config.js → sections[].lessons` |

## O que é IMUTÁVEL (regras travadas em `src/styles.css`)

**Header** — fixo no topo, 68px de altura, padding lateral 48px, gap 20px entre
os elementos da direita. Barra de pesquisa 320x42 com cantos totalmente
arredondados, carrinho 24x24, botão 36px de altura com radius 6px. Nunca muda,
apenas as cores e o logo.

**Banner** — 100% da largura da página, **800px de altura fixa**. Sem gap entre
header e banner. Exporte do Figma em **1440x800px**.

**Sessões**
- Título: Roboto Bold 18px.
- Ao lado esquerdo do título: forma de 8x20px com radius `0 6px 6px 0`.
- Gap título → cards: **24px**.
- Gap entre cards: **12px**.
- Gap entre sessões: **80px**. Gap banner → 1ª sessão: **80px**.

**Cards de aula**
- `layout: "horizontal"` → **400x190px**
- `layout: "vertical"` → **334x508px**
- Uma sessão **nunca** mistura os dois tipos.
- Padding interno: 16px laterais, 19px topo/base. Radius 4px.
- Título alinhado à esquerda e na parte de baixo: Roboto Bold 18px / 21px de
  line-height, branco, com drop shadow marcado.

## Checklist para um novo cliente

1. Substituir `assets/logo/logo.svg` e ajustar `brand.logo.height`.
2. Exportar o banner do Figma em 1440x800 → `assets/banner/banner.jpg`.
3. Preencher `colors` com a paleta do cliente.
4. Colocar as capas em `assets/covers/` e montar `sections`.
5. Conferir que cada sessão usa um único `layout`.
