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
		year: "2024",
		role: "Brand identity · Art direction",
		disciplines: ["Branding", "Graphic design", "Web design"],
		tools: ["Illustrator", "Figma", "React", "VSCode"],
		summary:
			"A visual logo for fictional leg excercises website that I made for my first full stack website.",
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
				body: "During a course called WEB2, I was tasked to make a full stack website. I decided to make a leg excercises website called Leglift. I designed the logo and the website to be simple and easy to use.",
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
				body: "During the process, i gather video material from content i made myself in the fitness center. I then edited the videos and made them into gifs to be used on the website. ",
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
		subtitle: "An navigation app for the visually impaired",
		year: "2024",
		role: "Design Ui / UX · Interaction design",
		disciplines: ["App design", "Interaction"],
		tools: ["Figma"],
		summary:
			"A navigation app for the visually impaired that uses audio cues and haptic feedback to guide users through their environment.",
		statement:
			"Navisgo is a navigation app for the visually impaired. It uses audio cues and haptic feedback to guide users through their environment, allowing them to navigate safely and independently.",
		media: [
			{
				type: "image",
				src: "/images/navisgo2.png",
				alt: "Navisgo — issue environment",
				className: "media--small",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The visually impaired often rely on audio cues to navigate their environment. Navisgo was designed to provide a more immersive and intuitive navigation experience, using sound and haptic feedback to guide users through their surroundings.",
			},
			{
				title: "Concept",
				body: "The concept came from Google Maps, but with a focus on the visually impaired. The app uses audio cues and haptic feedback to guide users through their environment, allowing them to navigate safely and independently.",
				media: [
					{
						type: "image",
						src: "/images/navisgo3.png",
						alt: "Navisgo — typography studies",
						className: "media--small",
					},
				],
			},
			{
				title: "Process",
				body: "The design process involved user testing with visually impaired individuals to gather feedback and improve the app's usability. The team iterated on the design based on user feedback, focusing on making the app as intuitive and accessible as possible.",
			},
			{
				title: "Outcome",
				body: "Navisgo was successful in providing a navigation solution for the visually impaired. Users reported feeling more confident and independent when navigating their environment with the app.",
			},
		],
	},
	{
		slug: "Flash Vision",
		title: "Flash Vision",
		subtitle: "A ( fictional ) telescope that can be used to travel ",
		year: "2024",
		role: "Product design",
		disciplines: ["UI / UX"],
		tools: ["Figma", "Adobe Express"],
		summary:
			"Flash vision is the brand name for a fictional telescope that can be used to travel in a flash of light to reach your desired destination.",
		statement:
			"Flash vision is a fictional telescope that can be used to travel in a flash of light to reach your desired destination. The design is inspired by the idea of a telescope that can be used to travel through space and time, allowing users to reach their destination in a unique and immersive way.",
		media: [
			{
				type: "image",
				src: "/images/FlashVision.png",
				alt: "Flash Vision — product design",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The brief was to design a fictional product that could be used to travel through space and time. The design needed to be immersive and intuitive, allowing users to reach their destination in a unique way.	",
			},
			{
				title: "Concept",
				body: "The concept was to create a fiction product and have no limitations on the design. The design is inspired by the idea of a telescope that can be used to travel through space and time, allowing users to reach their destination in a unique and immersive way.",
				media: [
					{
						type: "image",
						src: "/images/FlashVisionFooter.png",
						alt: "Flash Vision — product design",
					},
				],
			},

			{
				title: "Outcome",
				body: "Flash vision was successful in providing a unique and immersive experience for users. The design was well-received and praised for its creativity and innovation.",
			},
		],
	},
	{
		slug: "Calmify",
		title: "Calmify",
		subtitle: "A meditation app for stress relief",
		year: "2024",
		role: "Product design",
		disciplines: ["UI / UX"],
		tools: ["Figma"],
		summary:
			"Calmify is a meditation app that helps users reduce stress and anxiety through guided meditation sessions and mindfulness exercises.",
		statement:
			"Calmify is a meditation app that helps users reduce stress and anxiety through guided meditation sessions and mindfulness exercises. The app provides a variety of meditation techniques and exercises to help users relax and improve their mental well-being.",
		media: [
			{
				type: "image",
				src: "/images/Calmify.png",
				alt: "Calmify — meditation app",
				className: "media--small",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The brief was to design a meditation app that helps users reduce stress and anxiety through guided meditation sessions and mindfulness exercises. The design needed to be calming and intuitive, allowing users to easily navigate the app and access the meditation sessions.",
			},
			{
				title: "Concept",
				body: "The concept was to create a calming and intuitive meditation app that helps users reduce stress and anxiety through guided meditation sessions and mindfulness exercises. The design is inspired by the idea of a peaceful and serene environment, allowing users to relax and improve their mental well-being.",
			},

			{
				title: "Outcome",
				body: "Calmify was successful in providing a calming and intuitive experience for users. The design was well-received and praised for its creativity and innovation.",
			},
		],
	},
	{
		slug: "BIFFF GUIDE",
		title: "BIFFF GUIDE",
		subtitle:
			"A guide feature app to report during the BIFFF festival for harassment, unsafe behavior.",
		year: "2024",
		role: "Art direction · Branding",
		disciplines: [" Design", "Branding", "Coding"],
		tools: ["Figma", "Illustrator", "VSCode", "AI"],
		summary:
			"A guide feature app to report during the BIFFF festival for harassment, unsafe behavior.",
		statement:
			"A guide feature app to report during the BIFFF festival for harassment, unsafe behavior. The app provides a safe and anonymous way for users to report incidents and seek help.",
		media: [
			{
				type: "image",
				src: "/images/biffhometemplateHome.png",
				alt: "BIFFF GUIDE — home screen",
				className: "media--small",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "The brief was to design a guide feature app to report during the BIFFF festival for harassment, unsafe behavior. The design needed to be intuitive and user-friendly, allowing users to easily navigate the app and access the reporting feature.",
				media: [
					{
						type: "image",
						src: "/images/biffhometemplate3.png",
						alt: "BIFFF GUIDE — context",
						className: "media--small",
					},
				],
			},
			{
				title: "Concept",
				body: "The concept was to create a safe and anonymous way for users to report incidents and seek help during the BIFFF festival. The design is inspired by the idea of a supportive and inclusive environment, allowing users to feel comfortable and confident in reporting incidents.",
				media: [
					{
						type: "image",
						src: "/images/biffhometemplate2.png",
						alt: "BIFFF GUIDE — concept",
						className: "media--small",
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
