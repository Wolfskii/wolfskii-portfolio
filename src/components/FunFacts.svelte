<script lang="ts">
	import { funFacts } from '../data/site'
</script>

<section id="notes" class="section">
	<div class="section-inner">
		<span class="kicker">Field notes</span>
		<h2>Cool. Funny. Still employed.</h2>
		<p class="lede">
			A bento of things recruiters never ask and clients always find out anyway.
		</p>
		<div class="bento">
			{#each funFacts as fact, i}
				<article class="card" class:wide={i === 0 || i === 5}>
					<h3>{fact.title}</h3>
					<p>{fact.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--paper);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--pink));
	}

	.bento {
		display: grid;
		gap: 0.9rem;
		margin-top: 2rem;
	}

	article {
		padding: 1.2rem 1.1rem 1.3rem;
		background: var(--white);
	}

	article:nth-child(2) {
		background: var(--yellow);
	}

	article:nth-child(4) {
		background: var(--mint);
	}

	article:nth-child(6) {
		background: var(--cyan);
	}

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.45rem;
	}

	@media (min-width: 720px) {
		.bento {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.wide {
			grid-column: span 2;
		}
	}
</style>
