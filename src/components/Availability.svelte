<script lang="ts">
	import Interactions from '../utils/interactions'
</script>

<section id="availability" class="section">
	<div class="section-inner">
		<span class="kicker">Calendar</span>
		<h2>When to knock.</h2>
		<div class="grid">
			<article class="card">
				<p class="when">Mon–Fri · days</p>
				<h3>Knightec / Telia</h3>
				<p>The badge is on. Slack is work Slack. I still read interesting plots after lunch.</p>
			</article>
			<article class="card alt">
				<p class="when">Evenings · weekends</p>
				<h3>Webble + lab</h3>
				<p>Games, bookings, dance schools, homelab. This is when the wolf is off the leash.</p>
			</article>
			<article class="card">
				<p class="when">Timezone</p>
				<h3>CET · Gothenburg</h3>
				<p>Usually same-day replies. Unless a dragon is in production. Then: after the dragon.</p>
			</article>
		</div>
		<a class="btn" href="#contact" on:click={() => Interactions.click()}>Send the plot</a>
	</div>
</section>

<style>
	.section {
		background: var(--pink);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--white));
	}

	.grid {
		display: grid;
		gap: 1rem;
		margin: 2rem 0 1.5rem;
	}

	article {
		padding: 1.2rem 1.1rem 1.3rem;
		background: var(--white);
	}

	.alt {
		background: var(--yellow);
	}

	.when {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 0.4rem;
	}

	h3 {
		margin-bottom: 0.45rem;
	}

	@media (min-width: 800px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.alt {
			transform: translateY(-0.7rem);
		}
	}
</style>
