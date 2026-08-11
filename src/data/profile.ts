export interface Education {
	degree: string;
	school: string;
	year: string;
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Language {
	lang: string;
	level: string;
}

export interface Profile {
	name: string;
	firstName: string;
	title: string;
	location: string;
	email: string;
	phone: string;
	socials: { label: string; href: string }[];
	statement: string[];
	about: string[];
	education: Education[];
	skills: SkillGroup[];
	languages: Language[];
	tools: string[];
	availability: string;
}

export const profile: Profile = {
	name: "Younes Ben Ali",
	firstName: "Younes",
	title: "Graphic designer, developer & 3D artist",
	location: "Belgium",
	email: "younes.ben.ali.business@gmail.com",
	phone: "+32 485 60 68 29",
	socials: [
		{ label: "Instagram", href: "https://www.instagram.com/yns___bnl/" },
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/younes-ben-ali-70877b261/",
		},
	],
	statement: [
		"I design identities, interfaces and interactive experiences that feel considered, precise and slightly alive.",
		"I work across branding, digital products & 3D Design — from the first sketch to the last line of code.",
	],
	about: [
		"I am a graphic designer, developer & 3D artist based in Belgium, trained in graphic design at Erasmushogeschool Brussel and self-taught in code. My practice sits between the printed page and the browser",
		"I care about the details people feel rather than notice: spacing, pacing, the weight of a title, the timing of a transition. Most of my work lives at the intersection of design and development, where the two disciplines sharpen each other.",
	],
	education: [
		{
			degree: "Bachelor in Graphic Design",
			school: "Erasmushogeschool Brussel",
			year: "2023-2026",
		},
	],
	skills: [
		{
			category: "Graphic design",
			items: ["Figma", "Photoshop", "Illustrator", "InDesign", "Canva"],
		},
		{ category: "UI / UX", items: ["Figma", "Adobe XD", "Penpot"] },
		{ category: "Motion", items: ["After Effects", "Rive", "Capcut"] },
		{ category: "3D", items: ["Blender", "Maya", "Spline"] },
		{
			category: "Development",
			items: [
				"HTML / CSS",
				"JavaScript",
				"React",
				"TypeScript",
				"GSAP",
				"Tailwind CSS",
				"Vite",
				"Node.js",
				"SQL",
				"NoSQL",
				"MongoDB",
			],
		},
	],
	languages: [
		{ lang: "Dutch", level: "C2" },
		{ lang: "French", level: "C2" },
		{ lang: "English", level: "B2" },
		{ lang: "Arabic", level: "A2" },
	],
	tools: ["Word", "Excel", "PowerPoint"],
	availability: "Currently available for freelance and collaborations",
};

export const emailjsConfig = {
	publicKey: "3Jj-MoOTDuMRSi42F",
	serviceId: "service_18o8mc8",
	templateId: "template_dkpyk39",
};
