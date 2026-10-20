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
		slug: "3d-renders",
		title: "3D Renders",
		subtitle: "Renders and experiments made in Blender",
		year: "2025",
		role: "3D design",
		disciplines: ["3D design"],
		tools: ["Blender"],
		summary:
			"A growing collection of 3D renders and scene experiments made in Blender — mythology weapons, prehistoric props and playful scenes.",
		statement:
			"3D Renders is a collection of renders and experiments made in Blender. Each piece focuses on lighting, materials and composition to create a mood and tell a story in a single frame.",
		media: [
			{
				type: "image",
				src: "/images/DonutDONE.png",
				alt: "3D Renders — donut render",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "This project collects my renders and experiments made in Blender. It is a space to explore lighting, materials and composition, and to keep pushing the quality of each scene further.",
			},
			{
				title: "Mythology weapons",
				body: "Renders of weapons inspired by greek mythology — Apollo, Athena, Poseidon and Zeus. Each model was sculpted and shaded in Blender with a focus on materials and dramatic lighting.",
				media: [
					{
						type: "image",
						src: "/images/ApolloWeapon.png",
						alt: "Apollo weapon — 3D render",
					},
					{
						type: "image",
						src: "/images/AthenaWeapon.png",
						alt: "Athena weapon — 3D render",
					},
					{
						type: "image",
						src: "/images/PosseidonWeapon.png",
						alt: "Poseidon weapon — 3D render",
					},
					{
						type: "image",
						src: "/images/ZeusWeapon.png",
						alt: "Zeus weapon — 3D render",
					},
				],
			},
			{
				title: "Prehistoric",
				body: "Props and studies for a prehistoric setting — an axe, a simple stick and a stone that blends into the environment.",
				media: [
					{
						type: "image",
						src: "/images/PrehistoricAxe.png",
						alt: "Prehistoric axe — 3D render",
					},
					{
						type: "image",
						src: "/images/Stick.png",
						alt: "Stick — 3D render",
					},
					{
						type: "image",
						src: "/images/FakeStone1.png",
						alt: "Fake stone — 3D render",
					},
				],
			},
			{
				title: "Playful renders",
				body: "Just for fun — a donut and a starfish character, made to practise modelling, texturing and lighting outside of a serious brief.",
				media: [
					{
						type: "image",
						src: "/images/DonutDONE.png",
						alt: "Donut — 3D render",
					},
					{
						type: "image",
						src: "/images/patrick.jpg",
						alt: "Patrick star — 3D render",
					},
				],
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
				title: "Outcome",
				body: "BIFFF GUIDE was successful in providing a safe and anonymous way for users to report incidents and seek help during the BIFFF festival. The design was well-received and praised for its creativity and innovation.",
			},
		],
	},
	{
		slug: "Where Are You?",
		title: "Where Are You?",
		subtitle: "An interactive window into urban data",
		year: "2026",
		role: "Final Work Bachelor MCT",
		disciplines: [
			"Creative development",
			"Interaction",
			"Game design",
			"Education",
		],
		tools: [
			"Unity",
			"C#",
			"Blender",
			"Figma",
			"Illustrator",
			"Premiere Pro",
			"After Effects",
			"VSCode",
			"Blender",
			"Maya",
			"Substance Painter",
		],
		summary:
			"For my final work for the bachelor in Media and Communication Technology, Me & Hamza Sahmoudi created an interactive 3D Game for 8-12 year olds. The project aims to improve communication skills and educate them with history without them even noticing it. The game is set in a 3D environment  where the player has to find their way to a specific location or do a specific task in the world. The players has to communicate with each other in order to find their way to the destination.",
		statement:
			"Where Are You? is an interactive 3D Game for 8-12 year olds. The project aims to improve communication skills and educate them with history without them even noticing it. The game is set in a 3D environment where the player has to find their way to a specific location or do a specific task in the world. The players has to communicate with each other in order to find their way to the destination.",
		media: [
			{
				type: "image",
				src: "/images/Sleutelbeeld.jpg",
				alt: "Where Are You? — game project",
			},
		],
		chapters: [
			{
				title: "Context",
				body: "History and communication skills are important for children to learn, but they can be boring and unengaging. We want wanted to create a game that would make learning history and communication skills fun and interactive. The game is set in a 3D environment where the player has to find their way to a specific location or do a specific task in the world. The players has to communicate with each other in order to find their way to the destination.",
			},
			{
				title: "Concept",
				body: "The concept came from the games R.E.P.O and Where winds meet. We wanted to create a game that would make learning history and communication skills fun and interactive. The game is set in a 3D environment where the player has to find their way to a specific location or do a specific task in the world. ",
				media: [
					{
						type: "image",
						src: "/images/Front_Texture.jpg",
						alt: "Where Are You? — game project",
					},
				],
			},
			{
				title: "Process",
				body: "The design process involved user testing with children to gather feedback and improve the game's usability. The team iterated on the design based on user feedback, focusing on making the game as intuitive and engaging as possible.",
			},
			{
				title: "Outcome",
				body: "Where Are You? was successful in providing a fun and interactive way for children to learn history and communication skills. Users reported feeling more engaged and motivated to learn when playing the game.",
					media: [
					{
						type: "image",
						src: "/images/EducatiePrehistory.png",
						alt: "Where Are You? — game project",
					},
				],
			},
			
		],
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project | undefined {
	const i = projects.findIndex((p) => p.slug === slug);
	if (i === -1 || i === projects.length - 1) return undefined;
	return projects[i + 1];
}
