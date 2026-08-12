// ------------------------------------------------------------------
// PROJECT DATA
// All names, copy and media below are STRUCTURED PLACEHOLDERS.
// Swap in real projects by editing these objects — the layout,
// routing and animations adapt automatically.
// Drop real images into src/assets/images/work/ and update `src`.
// ------------------------------------------------------------------

export interface ProjectMedia {
	type: "image" | "video";
	src: string;
	alt: string;
	className?: string;
}

export interface Chapter {
	title: string;
	body: string;
	media?: ProjectMedia[];
}

export interface Project {
	slug: string;
	title: string;
	subtitle: string;
	year: string;
	role: string;
	disciplines: string[];
	tools: string[];
	summary: string;
	statement: string;
	media: ProjectMedia[];
	chapters: Chapter[];
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: "Branding",
		title: "Leglift",
		subtitle: "First full stack website",
		year: "2023-2026",
		role: "Brand identity · Art direction",
		disciplines: ["Branding", "Graphic design"],
		tools: ["Illustrator", "InDesign"],
		summary:
			"A visual system for a studio that builds with light, shadow and plain materials.",
		statement:
			"A logo for a leg excercises website that I made for my first full stack website.",
		media: [
			{
				type: "image",
				src: "/images/leglift.png",
				alt: "Leglift — identity",
				className: "media--logo",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The studio had grown beyond its founder and needed an identity that could carry many hands. It had to feel stable, calm and slightly permanent — closer to an institution than a start-up.",
				media: [
					{
						type: "image",
						src: "/images/web2Home.png",
						alt: "Leglift — home page",
					},
				],
			},
			{
				title: "Concept",
				body: "The inspiration was first found from Basic fit's website, Smooth and calm coulours were used to make the website feel more welcoming and friendly. The logo was designed to be simple and memorable, with a focus on the letter 'L' and a leg excercise icon.",
			},
			{
				title: "Process",
				body: "We built the grid first, then the wordmark, then let the system generate collateral. Letterheads, plans, sign-off sheets and a minimal presentation template all fall out of the same rulebook.",
				media: [
					{
						type: "image",
						src: "/images/web2EX.png",
						alt: "Leglift — exercises page",
					},
				],
			},
			{
				title: "Outcome",
				body: "Leglift was born for people who aren't familiar with leg excercises and want to learn how to do them. The website is easy to use and navigate, and discover leg excercises for beginners to experts.",
			},
		],
	},
	{
		slug: "Navisgo",
		title: "Navisgo",
		subtitle: "An editorial web experience for new music",
		year: "2024",
		role: "Design & development",
		disciplines: ["Web design", "Interaction"],
		tools: ["Figma", "React", "GSAP"],
		summary:
			"A digital publication that treats listening as a spatial act — each issue is a room.",
		statement:
			"Cantata is a periodical about contemporary classical music. Instead of a feed, each issue is an environment you move through: score fragments, essays and recordings placed in space, revealed by scrolling and listening.",
		media: [
			{
				type: "image",
				src: "/images/work/plate-02.svg",
				alt: "Cantata — issue environment",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The editor wanted an online home for a print magazine that could do what paper cannot: place sound next to text, and give composition a spatial dimension.",
			},
			{
				title: "Concept",
				body: "Treat each issue as a room. Typography is set against an empty ground, and content moves at different depths — a paragraph recedes while a score fragment stays close.",
				media: [
					{
						type: "image",
						src: "/images/work/plate-02.svg",
						alt: "Cantata — typography studies",
					},
				],
			},
			{
				title: "Process",
				body: "Prototypes explored scroll pacing: how fast sound should enter, how long a page must breathe before the next element appears. Everything tuned for attention, not retention.",
			},
			{
				title: "Outcome",
				body: "A publication whose rhythm slows you down. Listeners reported reading more deeply than they expected — the environment did the pacing.",
			},
		],
	},
	{
		slug: "Flash Vision",
		title: "Flash Vision",
		subtitle: "A gallery guide for walking, not browsing",
		year: "2024",
		role: "Product design",
		disciplines: ["UI / UX"],
		tools: ["Figma", "Adobe XD"],
		summary:
			"A mobile companion for a Paris gallery quarter that works one-handed and outside.",
		statement:
			"Marais is a wayfinding and exhibition app for a neighbourhood full of galleries. It was designed for one hand, one thumb and bright daylight — information in the fewest possible steps.",
		media: [
			{
				type: "image",
				src: "/images/work/plate-03.svg",
				alt: "Marais — mobile interface",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "Gallery visitors in the Marais were juggling three apps and a printed map. The brief: a single companion that knows where you are and what is near.",
			},
			{
				title: "Concept",
				body: "The interface is a walking rhythm — a large, thumb-reachable primary action, and a map that only appears when you move. Reading, choosing, walking.",
				media: [
					{
						type: "image",
						src: "/images/work/plate-03.svg",
						alt: "Marais — interface studies",
					},
				],
			},
			{
				title: "Process",
				body: "User testing on the street drove every change. Buttons grew, text shrank, and the whole flow was rebuilt around a single gesture repeated.",
			},
			{
				title: "Outcome",
				body: "A guide visitors actually keep open. Session data showed people walking more and scrolling less — the design working as intended.",
			},
		],
	},
	{
		slug: "terrain",
		title: "Terrain",
		subtitle: "3D art direction for a materials campaign",
		year: "2025",
		role: "3D & motion direction",
		disciplines: ["3D", "Art direction"],
		tools: ["Cinema 4D", "Blender", "After Effects"],
		summary:
			"A campaign that photographs the weight, grain and fall of raw stone.",
		statement:
			"Terrain is a campaign for a quarry stone supplier. Instead of glossy renders, the work treats materials honestly — real geometry, brutal light, slow camera moves that show how stone sits in space.",
		media: [
			{
				type: "image",
				src: "/images/work/plate-04.svg",
				alt: "Terrain — stone studies",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The client sells natural stone to architects. Previous campaigns looked like stock imagery; the brief was to make the material itself the hero.",
			},
			{
				title: "Concept",
				body: "We shot nothing. Everything is built, lit and rendered as close to nature as possible — then graded like film, so the digital origin never shows.",
				media: [
					{
						type: "image",
						src: "/images/work/plate-04.svg",
						alt: "Terrain — render studies",
					},
				],
			},
			{
				title: "Process",
				body: "A library of procedural stone textures, a single disciplined lighting setup, and a camera language borrowed from slow documentary. Every frame earned its place.",
			},
			{
				title: "Outcome",
				body: "Architects requested sample boxes at a rate the client had never seen. The campaign ran across print, web and an exhibition stand.",
			},
		],
	},
	{
		slug: "editions-lumen",
		title: "Éditions Lumen",
		subtitle: "Editorial system for a publishing house",
		year: "2023",
		role: "Art direction · Editorial design",
		disciplines: ["Editorial design", "Branding"],
		tools: ["InDesign", "Illustrator"],
		summary:
			"A cover system where every book is a variant of the same set of rules.",
		statement:
			"Lumen publishes essays on art and light. The identity is a single cover architecture — a grid, a horizon line, one material per title — so the catalogue reads as one continuous library.",
		media: [
			{
				type: "image",
				src: "/images/work/plate-05.svg",
				alt: "Éditions Lumen — cover system",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "With a growing backlist, the house needed covers that recognised each other as family without repeating.",
			},
			{
				title: "Concept",
				body: "A fixed structure with a variable material. Each title swaps the surface — paper, varnish, foil — while the typography never moves.",
				media: [
					{
						type: "image",
						src: "/images/work/plate-05.svg",
						alt: "Éditions Lumen — typography",
					},
				],
			},
			{
				title: "Process",
				body: "We printed a dozen test covers in the first week to find materials that photographed and handled well. The system was locked when the structure survived every experiment.",
			},
			{
				title: "Outcome",
				body: "The catalogue now reads as a library, not a shelf of accidents. Bookshops report the covers stopping browsers at the table.",
			},
		],
	},
	{
		slug: "signaux",
		title: "Signaux",
		subtitle: "An interactive window into urban data",
		year: "2025",
		role: "Concept & creative development",
		disciplines: ["Creative development", "Interaction"],
		tools: ["React", "TypeScript", "Canvas"],
		summary:
			"A generative installation that turns city signals into a slow visual score.",
		statement:
			"Signaux is an interactive piece for a public exhibition: real traffic and weather data from a city drawn as a slowly evolving composition — generative, but never decorative.",
		media: [
			{
				type: "image",
				src: "/images/work/plate-06.svg",
				alt: "Signaux — installation",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "A festival asked for a work about the city. The idea: make the city itself the author, and the screen a patient observer.",
			},
			{
				title: "Concept",
				body: "Data becomes line, rhythm and density. Traffic becomes pace, weather becomes texture — a drawing that rewrites itself every second, guided by rules rather than noise.",
				media: [
					{
						type: "image",
						src: "/images/work/plate-06.svg",
						alt: "Signaux — composition studies",
					},
				],
			},
			{
				title: "Process",
				body: "Built a small realtime pipeline from public data feeds to a canvas renderer, then spent the longest time on restraint: making the artwork calm when the data is loud.",
			},
			{
				title: "Outcome",
				body: "Installed for three weeks, running live. Visitors stayed — which for an artwork about data is the strongest metric there is.",
			},
		],
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
	const i = projects.findIndex((p) => p.slug === slug);
	return projects[(i + 1) % projects.length];
}
