This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Short term Roadmap

- [ ] update favicon
- [ ] make header nav a component present in in all pages except Index
- [ ] make footer a component present in all pages
- [ ] responsive mobile first
- [ ] social media og cards for sharing images
- [ ] SEO
- [ ] content for each page

## Medium term Roadmap

- [ ] dynamic page for each delegate, based on their name, using NextJS API
- [ ] dynamic creation of an OG card for sharing delegates profile in the website, check out NextJS HTML OG

## Long term Roadmap

- [ ] PWA would be absolutely awesome, avoid fetching so save data for international delegates, should work offline
- [ ] should spare data as much as possible, make it as light as possible (switch to Astro at one point?)
- [ ] enforce TS ? Use TailwindCSS ? web perf ? A11y?
