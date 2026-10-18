// Alle persoonlijke gegevens op één plek: vervang elke 'x', de pagina's passen zich aan.
// Een 'x' wordt gedimd getoond, zodat je ziet wat nog ingevuld moet worden.
// Lege strings ('') worden niet getoond.
// Tweetalige velden staan als { en, nl } — de site toont beide en wisselt met de EN/NL-knop.
export const site = {
  name: 'Ibe Kimpe',
  role: 'Digital Design & Development',
  // de opleiding: staat vóór de rol, als link
  school: { name: 'Devine', href: 'https://devine.be/' },
  description: {
    en: 'Portfolio of Ibe Kimpe, digital designer & developer looking for an internship.',
    nl: 'Portfolio van Ibe Kimpe, digital designer & developer op zoek naar een stageplaats.',
  },

  // ── About: bovenaan ──
  photo: '/ibe.jpg',
  basedIn: 'Serskamp',
  studyingAt: 'Howest Kortrijk',
  status: {
    en: 'Student, searching for an internship',
    nl: 'Student, op zoek naar een stageplaats',
  },

  // korte intro (1 tot 3 zinnen, in de ik-vorm)
  intro: {
    en: "I'm Ibe, a digital designer and developer from Belgium with a passion for creating visually striking digital products. From the brand identity to the app or website it lives in, I design it and build it too. Currently studying Devine at Howest Kortrijk.",
    nl: 'Ik ben Ibe, een digital designer en developer uit België met een passie voor het creëren van visueel sterke digitale producten. Van de merkidentiteit tot de app of website waarin die leeft: ik ontwerp én bouw het zelf. Momenteel studeer ik Devine aan Howest Kortrijk.',
  },

  // ── About: wat je doet en waarmee (grote woorden, gescheiden door schuine strepen) ──
  skills: {
    Design: ['Branding', 'App Design', 'UI/UX Design', 'Web Design'],
    Tools: ['Figma', 'Adobe Photoshop', 'Procreate', 'Adobe Illustrator', 'After Effects', 'Blender (starter)'],
    Code: ['HTML & CSS', 'JavaScript', 'React', 'GSAP', 'Supabase', 'Astro', 'Git'],
  },
  // href (optioneel) = de naam wordt een link; detail en years zijn tweetalig ({ en, nl })
  education: [
    {
      name: 'Howest Kortrijk', href: 'https://devine.be/',
      detail: { en: 'Devine Digital Design & Development', nl: 'Devine Digital Design & Development' },
      years: { en: '2024 – now', nl: '2024 – nu' },
    },
    {
      name: 'GO! Talent Dendermonde', href: 'https://www.go-talent.be/',
      detail: { en: 'Computer Science', nl: 'Informatica' },
      years: { en: '2021 – 2024', nl: '2021 – 2024' },
    },
  ],
  experience: [
    {
      name: 'La Roy', href: 'https://www.laroy.eu/',
      detail: { en: 'Student job: event build & breakdown, lighting (Wetteren)', nl: 'Studentenjob: opbouw & afbraak, licht (Wetteren)' },
      years: { en: 'Now', nl: 'Nu' },
    },
    {
      name: 'Speelplein Kwispeltje',
      detail: { en: 'Animator, every summer', nl: 'Animator, elke zomer' },
      years: { en: '2021 – now', nl: '2021 – nu' },
    },
    {
      name: 'Speelplein Kwispeltje',
      detail: { en: 'Board member', nl: 'Bestuurslid' },
      years: { en: '3 years', nl: '3 jaar' },
    },
    {
      name: 'Jeugdraad Wichelen', href: 'https://www.jeugdwichelen.be/',
      detail: { en: 'Member of the youth council', nl: 'Lid van de jeugdraad' },
      years: { en: '2.5 years', nl: '2.5 jaar' },
    },
  ],

  cv: '/cv-ibe-kimpe.pdf',              // zet je CV-PDF op deze plek in public/

  // ── Contact ──
  email: 'ibe.kimpe@student.howest.be',
  socials: [
    { label: 'LinkedIn', href: '' },    // vul de link in, dan verschijnt hij
    { label: 'GitHub', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'Behance', href: '' },
  ],
};
