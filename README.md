# Portfolio Julce (React)

Projeto de portfolio pessoal migrado para React com Vite.

## Stack

- React 18
- Vite 5
- React Icons
- CSS customizado (sem framework)

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Inicie em desenvolvimento:

```bash
npm run dev
```

3. Gere build de producao:

```bash
npm run build
```

4. Visualize a build localmente:

```bash
npm run preview
```

## SEO implementado

- Meta tags essenciais (`description`, `keywords`, `author`, `robots`)
- Open Graph para partilha em redes sociais
- Twitter Cards
- Dados estruturados JSON-LD (`Person`)
- `canonical`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/favicon.svg`

## Deploy pronto

### Netlify

Este repositorio ja inclui `netlify.toml` com:

- Build command: `npm run build`
- Publish directory: `dist`
- Redirect SPA para `index.html`

### Vercel

Este repositorio ja inclui `vercel.json` com:

- Framework: `vite`
- Rewrite SPA para `index.html`

Para publicar, basta importar o repositorio na plataforma desejada.

