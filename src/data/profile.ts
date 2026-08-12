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
		"I'm always open to new ideas and believe that the best results come from working together. ",
		"Each project is a chance to learn, grow, and create something special.",
	],
	about: [
		"My name is Younes Ben Ali, a creative graphic designer, 3D artist, and coder with a strong eye for detail and a love for visual storytelling. I enjoy helping brands and entrepreneurs bring their ideas to life through unique and meaningful designs",
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
