import { profile } from "../../data/profile";

export default function Manifesto() {
	return (
		<section className="manifesto container">
			<span className="meta section-label manifesto__label" data-reveal>
				02 — Statement
			</span>
			<div className="manifesto__body">
				{profile.statement.map((p, i) => (
					<p key={i} data-reveal>
						{p}
					</p>
				))}
			</div>
			<span className="manifesto__mark" aria-hidden="true" />
		</section>
	);
}
