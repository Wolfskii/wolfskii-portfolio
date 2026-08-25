<script lang="ts">
	import { nowItems } from '../data/site'
</script>

<section id="now" class="section">
	<div class="section-inner">
		<span class="kicker">Status</span>
		<h2>Currently compiling.</h2>
		<p class="lede">
			The day job is Telia. The nights are a small studio that refuses to pick one genre. Here is
			what is on the desk right now — not a roadmap slide, the actual tabs.
		</p>
		<ol>
			{#each nowItems as item, i}
				<li class="card">
					<div class="meta">
						<span class="n">{String(i + 1).padStart(2, '0')}</span>
						<span class="status">{item.status}</span>
					</div>
					<h3>{item.title}</h3>
					<p>{item.detail}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.section {
		background: var(--paper);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--coral));
	}

	ol {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	li {
		padding: 1.2rem 1.1rem 1.3rem;
		background: var(--white);
	}

	.meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.7rem;
	}

	.n {
		font-family: var(--display);
		font-size: 0.9rem;
	}

	.status {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		background: var(--yellow);
		border: 2px solid var(--ink);
		padding: 0.2rem 0.45rem;
	}

	h3 {
		margin-bottom: 0.45rem;
	}

	@media (min-width: 800px) {
		ol {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
