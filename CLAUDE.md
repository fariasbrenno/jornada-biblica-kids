# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento Vite (HMR)
npm run build    # build de produção para dist/
npm run preview  # serve o build de dist/ localmente
npm run lint     # ESLint em todo o projeto
npm run deploy   # build + publica dist/ no GitHub Pages (gh-pages)
```

Não há suíte de testes neste projeto.

## Visão geral

Landing page de página única (one-page) em **React 18 + Vite + Tailwind CSS** para o produto "Jornada Bíblica Kids". Conteúdo todo em português (`lang="pt-BR"`). Deploy via GitHub Pages (`gh-pages -d dist`).

## Arquitetura

A página inteira é uma sequência linear de seções de marketing chamadas **"Dobras"** (folds), compostas em ordem em `src/App.jsx`. Esse é o único ponto que define a ordem e a estrutura da página — para reordenar, adicionar ou remover seções, edite o JSX de `App.jsx`. Cada dobra é um componente autocontido em `src/components/DobraN*.jsx` (a numeração reflete a ordem na página; dobras intermediárias usam decimais, ex.: `Dobra25Transicao`, `Dobra31Mockup`).

Entre cada dobra há um `<WaveDivider topColor bottomColor />` que desenha uma transição SVG ondulada. **Regra importante de continuidade visual:** o `bottomColor` de um divisor deve casar com a cor de fundo da seção que vem logo abaixo, e o `topColor` com a seção acima — caso contrário aparece uma faixa de cor quebrada. `WaveDivider` também adiciona um traço dourado decorativo quando `bottomColor` é o roxo escuro (`#1A1035`).

Componentes compartilhados (sem prefixo "Dobra"):
- `CTAButton` — botão/âncora de conversão padrão. `href` que começa com `http` abre em nova aba automaticamente; o padrão aponta para `#checkout`. Reutilize-o em vez de recriar botões de CTA.
- `CTAFixoMobile` — CTA fixo no rodapé em mobile.
- `NotificacaoSocial` — pop-up de prova social.
- `WaveDivider`, `Rodape`.

## Convenções

- **Cores e fontes vêm do tema do Tailwind** (`tailwind.config.js`), não de valores soltos. Use os tokens nomeados: `primary`, `amber`/`amberDark`, `dark` (`#1A1035`), `cream`, `lilac`, `celeste`, `ink`, `muted`, etc. Fontes: `font-display` (Nunito, títulos) e `font-body` (Inter, corpo).
- **Animações usam `framer-motion`**. O padrão recorrente nas dobras é declarar variantes `fadeUp` + `container` (stagger) no topo do arquivo e animar com `whileInView` / `viewport`. Siga esse padrão ao criar novas seções.
- **CSS global e keyframes** ficam em `src/index.css` (ex.: animação `shimmer-sweep`). As fontes do Google são importadas no topo desse arquivo.
- Elementos puramente decorativos (partículas, gradientes, SVGs de fundo) recebem `aria-hidden="true"` e `pointer-events-none`.
- O layout é mobile-first com `overflow-x-hidden` na raiz; sempre teste responsividade (breakpoints `md:`).

## Notas

- O **Meta Pixel** (Facebook, id `1298939172343164`) está embutido em `index.html`. Ao adicionar rastreamento de conversão, dispare eventos `fbq(...)` consistentes com ele.
- `vite.config.js` usa `base: '/'` — ajuste se o deploy for para um subcaminho do GitHub Pages.
- Imagens ficam em `public/images/` e são referenciadas por caminho absoluto (`/images/...`).
