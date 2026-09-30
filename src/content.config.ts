import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Eén markdown-bestand per project in src/content/projects/.
// Beelden horen in public/projects/<slug>/ en worden hier als pad ("/projects/<slug>/cover.webm") opgegeven.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // optioneel: titel over meerdere regels in de trommel op de homepage
    lines: z.array(z.string()).optional(),
    year: z.string(),
    tag: z.string(),                       // korte categorie: Branding, Web Design, ...
    tags: z.array(z.string()).optional(),  // optioneel: meerdere categorieën, rechts naast de titel op de projectpagina
    context: z.enum(['School', 'Personal', 'Client']),
    team: z.enum(['Solo', 'Group']).optional(),   // links naast de titel op de homepage
    client: z.string().optional(),
    role: z.string(),
    tools: z.array(z.string()).default([]),
    summary: z.string(),                   // één zin, voor het overzicht en de meta description
    cover: z.string().optional(),          // beeld of video bovenaan de projectpagina (en naast de titel als er geen thumb is)
    thumb: z.string().optional(),
    // optioneel: video-loop (zonder geluid) die bovenaan de projectpagina de plaats van de cover inneemt;
    // de cover blijft gebruikt in het overzicht
    coverVideo: z.string().optional(),          // optioneel: klein (staand) beeld of loop naast de titel op de homepage
    // size: 'full' = over de volle breedte, 'half' = twee naast elkaar (standaard)
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      size: z.enum(['full', 'half']).default('half'),
    })).default([]),
    // links onder de intro, bv. { label: "Figma", href: "https://..." }
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // optioneel: live mobiele site, getoond in een telefoonkader op de projectpagina
    // (of een lang beeld van het telefoonontwerp, bv. "/projects/<slug>/phone.jpg": dan scrollbaar in het kader)
    mobileDemo: z.string().optional(),
    // optioneel: link naar een Figma-bestand of frame, ingesloten op de projectpagina
    // (werkt voor bezoekers enkel als het bestand gedeeld is met "Anyone with the link can view")
    figma: z.string().optional(),
    // optioneel: tweede Figma-link met het proces (extra tabblad in dezelfde Figma-sectie)
    figmaProcess: z.string().optional(),
    order: z.number(),                     // volgorde in de trommel en het overzicht
    draft: z.boolean().default(false),     // true = nog niet tonen
  }),
});

export const collections = { projects };
