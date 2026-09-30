# Portfolio — Ibe Kimpe

Built with [Astro](https://astro.build).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Content aanpassen

| Wat | Waar |
| --- | --- |
| Naam, bio, skills, stageperiode, e-mail, socials | `src/data/site.ts` |
| Projecten (tekst + gegevens) | `src/content/projects/<slug>.md` — één bestand per project |
| Projectbeelden / video-loops | `public/projects/<slug>/` |
| CV | `public/cv-ibe-kimpe.pdf` |
| Portretfoto | `public/` + pad in `src/data/site.ts` |

Een nieuw project = een nieuw `.md`-bestand kopiëren en aanpassen. `order` bepaalt de volgorde, `draft: true` verbergt het.

## Structuur

- `src/pages/index.astro` — homepage met de draaiende projecttrommel
- `src/pages/projects/` — overzicht + detailpagina per project
- `src/pages/about.astro` — about, skills en contact
- `src/layouts/Layout.astro` — gedeelde head, nav, thema-switch, geluid en CRT-laag
- `src/styles/` — `base.css` (gedeeld), `home.css` (trommel), `page.css` (gewone pagina's)
