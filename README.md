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
src/styles.css           # estrutura imutável + as 2 variáveis de cor mutáveis
src/app.js               # renderiza sessões e injeta as 2 cores a partir do config
assets/logo/              # logo do cliente
assets/banner/            # banner 1440x800 exportado do Figma
assets/covers/            # capas das aulas (400x190 ou 334x508)
```

## O que é MUTÁVEL

| Item | Onde |
|---|---|
| Logo (altura e largura livres) | `platform.config.js → brand.logo` |
| Cor primária (botão do header **e** botão "Iniciar" dos cards — sempre a mesma cor nos dois) | `platform.config.js → colors.primary` |
| Cor do ícone/forma ao lado do título da sessão | `platform.config.js → colors.sectionAccent` |
| Banner (imagem 1440x800) | `assets/banner/` + `banner.src` |
| Título e tipo das sessões | `platform.config.js → sections` |
| Aulas (título, capa, link) | `platform.config.js → sections[].lessons` |

## O que é IMUTÁVEL (regras travadas em `src/styles.css`)

### Cores — regra mais importante

O template só expõe **duas** variáveis de cor. Qualquer outra cor é fixa no
CSS e **não deve** ser adicionada de volta ao `platform.config.js` nem lida
por `src/app.js`, mesmo que pareça "só mais uma cor":

1. **Cor primária** (`colors.primary`) — controla o botão "Entrar" do header
   e o botão "Iniciar" dos cards de aula. **Os dois botões primários sempre
   usam a mesma cor** — não crie uma variável separada para um ou outro.
2. **Cor do ícone da sessão** (`colors.sectionAccent`) — só a forma 8x20 ao
   lado do título de cada sessão. Não afeta mais nada.

**Tudo o resto permanece preto/branco/cinza, sempre:**
- **Fundo da página é sempre branco.** Não crie uma variável de background
  nem troque `--c-page-bg` no CSS.
- **Fontes não mudam de cor.** Texto do header, título de sessão e título de
  aula continuam nos tons neutros fixos (`--c-header-text`,
  `--c-section-title`, `--c-card-title`). Não os ligue ao config.
- Fundo/borda do header, fundo/borda/placeholder da busca e ícones de
  busca/carrinho também são fixos.

Se um cliente pedir uma cor de marca diferente das duas permitidas, ela entra
em `colors.primary` e/ou `colors.sectionAccent` — não em uma variável nova.

### Header

Fixo no topo, 68px de altura, padding lateral 48px, gap 20px entre os
elementos da direita. Barra de pesquisa 320x42 com cantos totalmente
arredondados, carrinho 24x24, botão 36px de altura com radius 6px. Nunca
muda de tamanho ou posição — apenas a cor primária do botão e o logo.

### Banner

100% da largura da página, **800px de altura fixa**. Sem gap entre header e
banner. Exporte do Figma em **1440x800px**.

### Sessões

- Título: Roboto Bold 18px.
- Ao lado esquerdo do título: forma de 8x20px com radius `0 6px 6px 0`.
- Gap título → cards: **24px**.
- Gap entre cards: **12px**.
- Gap entre sessões: **80px**. Gap banner → 1ª sessão: **80px**.

### Cards de aula

- `layout: "horizontal"` → **400x190px**
- `layout: "vertical"` → **334x508px**
- Uma sessão **nunca** mistura os dois tipos.
- Padding interno: 16px laterais, 19px topo/base. Radius 4px.
- Título alinhado à esquerda e na parte de baixo: Roboto Bold 18px / 21px de
  line-height, branco, com drop shadow marcado.
- **Hover:** o card cresce em escala suavemente, o título sobe e, abaixo
  dele, aparecem o botão "Iniciar" (mesma cor primária do header) e um
  círculo com coração outline para favoritar. Sem hover, só imagem + título.
  Isso é comportamento fixo — não desative nem mude a animação por cliente.

## Checklist para um novo cliente

1. Substituir `assets/logo/logo.svg` e ajustar `brand.logo.height`.
2. Exportar o banner do Figma em 1440x800 → `assets/banner/banner.jpg`.
3. Definir `colors.primary` e `colors.sectionAccent` com a paleta do cliente
   — **só essas duas**. Não adicione outras chaves de cor.
4. Colocar as capas em `assets/covers/` e montar `sections`.
5. Conferir que cada sessão usa um único `layout`.
6. Conferir visualmente que fundo continua branco e os textos continuam
   pretos/cinza — se algo mudou de cor além do botão e do ícone da sessão,
   alguém adicionou uma variável que não deveria existir.
