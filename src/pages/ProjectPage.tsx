import { useEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import gsap from "gsap";
import InteractiveImage from "../components/InteractiveImage";
import { useTransition } from "../components/Transition";
import { getAdjacentProject, getProject } from "../data/projects";
import { useDevicePrefs } from "../hooks/useDevicePrefs";
import { useScrollReveals } from "../hooks/useScrollReveals";

export default function ProjectPage() {
	const { slug } = useParams<{ slug: string }>();
	const project = slug ? getProject(slug) : undefined;
	const ref = useRef<HTMLElement>(null);
	const { fine, reduced } = useDevicePrefs();
	const { begin } = useTransition();

	useScrollReveals(ref);

	useEffect(() => {
		if (!project) return;
		const section = ref.current;
		if (!section || !fine || reduced) return;
		const heroInner = section.querySelector(".project__hero .iimg__inner");
		const hero = section.querySelector(".project__hero");

		if (heroInner) {
			gsap.fromTo(
				heroInner,
				{ scale: 1.06 },
				{ scale: 1, duration: 1.4, ease: "power3.out" },
			);
		}
		if (hero) {
			gsap.to(hero, {
				yPercent: 10,
				ease: "none",
				scrollTrigger: {
					trigger: hero,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
		}
	}, [project, fine, reduced]);

	if (!project) return <Navigate to="/" replace />;

	const next = getAdjacentProject(project.slug);

	return (
		<main className="project" ref={ref}>
			<div className="container">
				<Link
					to="/#work"
					className="project__back"
					onClick={(e) => {
						e.preventDefault();
						begin("/#work");
					}}
				>
					Index
				</Link>

				<div className="project__meta" data-reveal>
					<div className="project__meta-row">
						<span className="meta project__meta-label">Year</span>
						<span className="meta project__meta-value">{project.year}</span>
					</div>
					<div className="project__meta-row">
						<span className="meta project__meta-label">Role</span>
						<span className="meta project__meta-value">{project.role}</span>
					</div>
					<div className="project__meta-row">
						<span className="meta project__meta-label">Disciplines</span>
						<span className="meta project__meta-value">
							{project.disciplines.join(", ")}
						</span>
					</div>
					<div className="project__meta-row">
						<span className="meta project__meta-label">Tools</span>
						<span className="meta project__meta-value">
							{project.tools.join(", ")}
						</span>
					</div>
				</div>

				<header className="project__head">
					<div className="project__kicker">
						<span className="meta">{project.disciplines.join(" · ")}</span>
					</div>
					<h1 className="project__title" data-reveal>
						{project.title}
					</h1>
					<p className="project__subtitle" data-reveal>
						{project.subtitle}
					</p>
					<p className="project__statement" data-reveal>
						{project.statement}
					</p>
				</header>
			</div>

			<div className="container project__hero" data-reveal>
				<InteractiveImage
					src={project.media[0]?.src ?? ""}
					alt={project.media[0]?.alt ?? project.title}
					eager
				/>
			</div>

			<div className="container project__chapters">
				{project.chapters.map((chapter, i) => (
					<section className="chapter" key={chapter.title}>
						<div className="chapter__label" data-reveal>
							<span className="meta chapter__label-number">
								{String(i + 1).padStart(2, "0")}
							</span>
							<h2 className="chapter__title">{chapter.title}</h2>
						</div>
						<p className="chapter__body" data-reveal>
							{chapter.body}
						</p>
						{chapter.media?.map((m) => (
							<figure className="chapter__media" key={m.src} data-reveal>
								<InteractiveImage src={m.src} alt={m.alt} />
								<figcaption className="meta chapter__caption">
									{m.alt}
								</figcaption>
							</figure>
						))}
					</section>
				))}
			</div>

			<div className="container project__end">
				<Link
					to={`/work/${next.slug}`}
					className="project__next"
					onClick={(e) => {
						e.preventDefault();
						begin(`/work/${next.slug}`);
					}}
				>
					<span className="meta project__next-label">Next project</span>
					<span className="project__next-title">{next.title}</span>
				</Link>
			</div>
		</main>
	);
}
