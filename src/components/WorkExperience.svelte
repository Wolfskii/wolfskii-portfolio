<script lang="ts">
	import Interactions from '../utils/interactions'
	import { experiences } from '../data/site'

	let openIndex: number | null = 0

	function toggle(index: number) {
		Interactions.click()
		openIndex = openIndex === index ? null : index
	}
</script>

<section id="experience" class="section">
	<div class="section-inner">
		<span class="kicker">Experience</span>
		<h2>Where the hours went.</h2>
		<p class="lede">
			Consulting that has to survive operators. A company that has to survive invoices. Freelance
			that had to survive ISO audits and Saturday bookings.
		</p>

		<div class="list">
			{#each experiences as experience, i}
				<article class="card">
					<header>
						<div>
							<p class="company">{experience.company}</p>
							<h3>{experience.title}</h3>
						</div>
						<div class="meta">
							<p class="year">{experience.year}</p>
							<p class="place">{experience.location}</p>
						</div>
					</header>
					<div class="body" class:open={openIndex === i}>
						<p>{@html experience.description.replace(/\n/g, '<br />')}</p>
					</div>
					<button type="button" class="btn btn-white" on:click={() => toggle(i)}>
						{openIndex === i ? 'Fold it' : 'Read more'}
					</button>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--mint);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	article {
		padding: 1.25rem 1.1rem 1.3rem;
		background: var(--white);
	}

	header {
		display: grid;
		gap: 0.75rem;
		margin-bottom: 0.85rem;
	}

	.company {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0.35rem;
	}

	h3 {
		font-size: clamp(1.15rem, 2.6vw, 1.45rem);
		line-height: 1.15;
	}

	.year {
		font-weight: 800;
		font-size: 1rem;
	}

	.place {
		font-size: 0.88rem;
		opacity: 0.75;
	}

	.body {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		margin: 0;
		transition: max-height 0.45s ease, opacity 0.3s ease, margin 0.3s ease;
	}

	.body.open {
		max-height: 80rem;
		opacity: 1;
		margin: 0 0 1rem;
	}

	.body p {
		font-size: 1rem;
	}

	.btn {
		padding: 0.55rem 0.9rem;
		font-size: 0.85rem;
	}

	@media (min-width: 720px) {
		article {
			padding: 1.5rem 1.5rem 1.4rem;
		}

		header {
			grid-template-columns: 1fr auto;
			align-items: start;
		}

		.meta {
			text-align: right;
		}
	}
</style>
