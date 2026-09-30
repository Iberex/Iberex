// Alle persoonlijke gegevens op één plek: vervang elke 'x', de pagina's passen zich aan.
// Een 'x' wordt gedimd getoond, zodat je ziet wat nog ingevuld moet worden.
// Lege strings ('') worden niet getoond.
export const site = {
  name: 'Ibe Kimpe',
  role: 'Digital Design & Development',
  // de opleiding: staat vóór de rol, als link
  school: { name: 'Devine', href: 'https://devine.be/' },
  description: 'Portfolio of Ibe Kimpe, digital designer & developer looking for an internship.',

  // ── About: bovenaan ──
  photo: '/ibe.jpg',
  basedIn: 'Serskamp',
  studyingAt: 'Howest Kortrijk',
  status: 'Student, searching for an internship',

  // korte intro (1 tot 3 zinnen, in de ik-vorm)
  intro: "I'm Ibe, a digital designer and developer from Belgium with a passion for creating visually striking digital products. From the brand identity to the app or website it lives in, I design it and build it too. Currently studying Devine at Howest Kortrijk.",

  // ── About: wat je doet en waarmee (grote woorden, gescheiden door schuine strepen) ──
  skills: {
    Design: ['Branding', 'App Design', 'UI/UX Design', 'Web Design'],
    Tools: ['Figma', 'Adobe Photoshop', 'Procreate', 'Adobe Illustrator', 'After Effects', 'Blender (starter)'],
    Code: ['HTML & CSS', 'JavaScript', 'React', 'GSAP', 'Supabase', 'Astro', 'Git'],
  },
  // href (optioneel) = de naam wordt een link
  education: [
    { name: 'Howest Kortrijk', href: 'https://devine.be/', detail: 'Devine Digital Design & Development', years: '2024 – now' },
    { name: 'GO! Talent Dendermonde', href: 'https://www.go-talent.be/', detail: 'Informatica', years: '2021 – 2024' },
  ],
  experience: [
    { name: 'La Roy', href: 'https://www.laroy.eu/', detail: 'Studentenjob: opbouw & afbraak, licht (Wetteren)', years: 'Now' },
    { name: 'Speelplein Kwispeltje', detail: 'Animator, elke zomer', years: '2021 – now' },
    { name: 'Speelplein Kwispeltje', detail: 'Bestuurslid', years: '3 years' },
    { name: 'Jeugdraad Wichelen', href: 'https://www.jeugdwichelen.be/', detail: 'Lid van de jeugdraad', years: '2.5 years' },
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
