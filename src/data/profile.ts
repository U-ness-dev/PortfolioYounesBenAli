export interface Education {
  degree: string
  school: string
  year: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Language {
  lang: string
  level: string
}

export interface Profile {
  name: string
  firstName: string
  title: string
  location: string
  email: string
  phone: string
  socials: { label: string; href: string }[]
  statement: string[]
  about: string[]
  education: Education[]
  skills: SkillGroup[]
  languages: Language[]
  tools: string[]
  availability: string
}

export const profile: Profile = {
  name: 'Younes Ben Ali',
  firstName: 'Younes',
  title: 'Graphic designer & developer',
  location: 'Belgium',
  email: 'hello@younesbenali.com',
  phone: '+33 6 00 00 00 00',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  statement: [
    'I design identities, interfaces and interactive experiences that feel considered, precise and slightly alive.',
    'I work across branding, digital products and motion — from the first sketch to the last line of code.',
  ],
  about: [
    'I am a graphic designer and developer based in Belgium, trained in graphic design at ESAAT and self-taught in code. My practice sits between the printed page and the browser — editorial thinking, disciplined systems and a quiet sense of movement.',
    'I care about the details people feel rather than notice: spacing, pacing, the weight of a title, the timing of a transition. Most of my work lives at the intersection of design and development, where the two disciplines sharpen each other.',
  ],
  education: [
    { degree: 'Bachelor in Graphic Design', school: 'ESAAT', year: '2019' },
  ],
  skills: [
    { category: 'Graphic design', items: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects'] },
    { category: 'UI / UX', items: ['Figma', 'Adobe XD', 'Sketch'] },
    { category: '3D', items: ['Blender', 'Cinema 4D'] },
    { category: 'Development', items: ['HTML / CSS', 'JavaScript', 'React', 'TypeScript'] },
  ],
  languages: [
    { lang: 'French', level: 'Native' },
    { lang: 'Arabic', level: 'Native' },
    { lang: 'English', level: 'Professional' },
    { lang: 'Dutch', level: 'Intermediate' },
  ],
  tools: [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'After Effects',
    'Figma',
    'Blender',
    'Cinema 4D',
    'React',
    'TypeScript',
    'GSAP',
  ],
  availability: 'Currently available for freelance and collaborations',
}

export const emailjsConfig = {
  publicKey: '3Jj-MoOTDuMRSi42F',
  serviceId: 'service_18o8mc8',
  templateId: 'template_dkpyk39',
}
