---
title: "90 Minuten"
year: "2026"
tag: "Interactive Longread"
tags: ["Web Design", "Development", "Interaction Design"]
context: "School"
team: "Solo"
client: "MoMu – Fashion Museum Antwerp"
role: "Concept, design & development"
tools: ["Figma", "Vite", "GSAP", "Lottie"]
summary: "An interactive longread for MoMu that tells the career of Belgian designer Dirk Bikkembergs as a 90-minute football match: from kick-off to extra time."
cover: "/projects/90-minutes/cover.jpg"
thumb: "/projects/90-minutes/thumb.jpg"
gallery:
  - { src: "/projects/90-minutes/puzzle.jpg", alt: "Paris 1989: rebuild the puzzle invitation of his first show" }
  - { src: "/projects/90-minutes/siro.jpg", alt: "San Siro 2001: 'Color me' brings colour back into the black-and-white photos under your cursor" }
  - { src: "/projects/90-minutes/halftime.jpg", alt: "Half-time: pick a formation for the second half" }
  - { src: "/projects/90-minutes/extra.jpg", alt: "Extra time: a carousel of football × fashion collaborations he inspired" }
  - { src: "/projects/90-minutes/mobile.jpg", alt: "The longread on mobile: kick-off, Paris 1989, half-time, San Siro and extra time", size: "full" }
links:
  - { label: "View live", href: "https://iberex.github.io/Integration3/" }
  - { label: "GitHub", href: "https://github.com/Iberex/Integration3" }
  - { label: "Figma: moodboards & styleboard", href: "https://www.figma.com/design/5tUSdTm0cEewPaC00iJ2vr/INT3?node-id=1-2" }
mobileDemo: "https://iberex.github.io/Integration3/"
order: 3
---

## The brief

MoMu, the fashion museum in Antwerp, wants a series of interactive online stories: one-pagers that make people curious about fashion, teach them something before they visit, and bring in visitors who don't have MoMu on their list yet. I got to tell the first story, about one of three designers. I chose **Dirk Bikkembergs**.

## The concept

Bikkembergs is the designer who brought football and fashion together, so I told his career as a match. The page runs from the **starting line-up** (his youth and the Antwerp Academy) through the **first half** (his first collections and his first women's line), **half-time**, the **second half** (the San Siro show in 2001, the suits for Inter Milan, the sporty identity he became known for) to **extra time**: how clubs and brands still follow his lead today. The last whistle sends you to MoMu, where his pieces are in the collection.

The look comes from the pitch at night: black and white with an electric blue, orange for the moments you can act on, and tight, bold type that reads like a stadium board.

## Things to do along the way

- **Kick-off:** a counter runs to 90 and the "minuten" rows can be dragged.
- **Look me:** a spotlight follows your cursor (or your scroll on mobile) and reveals his portrait.
- **Paris 1989:** guests of his first show got their invitation as puzzle pieces in an envelope. You get to put it back together, or shuffle it again.
- **Half-time:** pick a formation for the second half; each one tells you what that risk means for his next move.
- **Color me:** at San Siro his work gets colour, so the black-and-white photos colour in under your cursor.
- **Extra time:** a carousel of football × fashion collaborations that followed him.

## Under the hood

Built with **Vite** and plain JavaScript, mobile first. The animations run on **GSAP** (with Draggable for the puzzle and the rows), the counter is a **Lottie** animation, and the spotlights are drawn on a canvas. Images are served as responsive AVIF files in several sizes, the page respects reduced motion, and every push to main deploys to GitHub Pages.
