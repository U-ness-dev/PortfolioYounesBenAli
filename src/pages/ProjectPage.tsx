import { useEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractiveImage from "../components/InteractiveImage";
import { useTransition } from "../components/Transition";
import { getAdjacentProject, getProject } from "../data/projects";
import { useDevicePrefs } from "../hooks/useDevicePrefs";
import { useScrollReveals } from "../hooks/useScrollReveals";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
	const { slug: rawSlug } = useParams<{ slug: string }>();
	const slug = rawSlug ? decodeURIComponent(rawSlug) : undefined;
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
				yPercent: 8,
				ease: "none",
				scrollTrigger: {
					trigger: hero,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});
		}
	}, [project, fine, reduced]);

	if (!project) return <Navigate to="/" replace />;

	const next = getAdjacentProject(project.slug);

	const meta = [
		{ label: "Year", value: project.year },
		{ label: "Role", value: project.role },
		{ label: "Disciplines", value: project.disciplines.join(", ") },
		{ label: "Tools", value: project.tools.join(", ") },
	];

	return (
		<main className="project" ref={ref}>
			<div className="container">
				<Link
					to="/#work"
					className="project__back"
					onClick={(e) => {
						e.preventDefault();
						begin("/#work", { x: e.clientX, y: e.clientY });
					}}
				>
					Index
				</Link>

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
				</header>

				<div className="project__intro">
					<p className="project__statement" data-reveal>
						{project.statement}
					</p>

					<dl className="project__meta">
						{meta.map((row) => (
							<div className="project__meta-row" key={row.label} data-reveal>
								<dt className="meta project__meta-label">{row.label}</dt>
								<dd className="project__meta-value">{row.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			<div className="container project__hero" data-reveal>
				<InteractiveImage
					src={project.media[0]?.src ?? ""}
					alt={project.media[0]?.alt ?? project.title}
					className={project.media[0]?.className}
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
								<InteractiveImage
									src={m.src}
									alt={m.alt}
									className={m.className}
								/>
								<figcaption className="meta chapter__caption">
									{m.alt}
								</figcaption>
							</figure>
						))}
					</section>
				))}
			</div>

			<div className="container project__end">
				{next ? (
					<Link
						to={`/work/${encodeURIComponent(next.slug)}`}
						className="project__next"
						onClick={(e) => {
							e.preventDefault();
							begin(`/work/${encodeURIComponent(next.slug)}`, {
								x: e.clientX,
								y: e.clientY,
							});
						}}
					>
						<span className="meta project__next-label">Next project</span>
						<span className="project__next-title">{next.title}</span>
					</Link>
				) : (
					<div className="project__next project__soon">
						<span className="meta project__next-label">The end — for now</span>
						<p className="project__soon-title">New work is brewing</p>
						<p className="project__soon-note">
							Fresh projects are in the pipeline. Come back soon to see what
							I&apos;m making.
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
