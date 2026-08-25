<script lang="ts">
	import { timeline } from '../data/site'
</script>

<section id="timeline" class="section">
	<div class="section-inner">
		<span class="kicker">Years</span>
		<h2>A plot, not a ladder.</h2>
		<p class="lede">
			Company first, consulting later. The order is the point: I already knew how a client sounds
			when the site is down on a Saturday.
		</p>
		<ol>
			{#each timeline as item}
				<li class="card">
					<p class="year">{item.year}</p>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.section {
		background: var(--lime);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--white));
	}

	ol {
		display: grid;
		gap: 0.9rem;
		margin-top: 2rem;
		position: relative;
	}

	li {
		padding: 1.2rem 1.1rem 1.3rem;
		background: var(--white);
	}

	.year {
		font-family: var(--display);
		font-size: clamp(1.8rem, 5vw, 2.6rem);
		letter-spacing: -0.04em;
		line-height: 0.9;
		margin-bottom: 0.45rem;
	}

	h3 {
		font-size: 1.15rem;
		margin-bottom: 0.4rem;
	}

	@media (min-width: 800px) {
		ol {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		li:nth-child(even) {
			transform: translateY(1.1rem);
		}
	}
</style>
