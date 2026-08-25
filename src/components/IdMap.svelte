<script lang="ts">
	import Interactions from '../utils/interactions'
	import { siteMap } from '../data/site'
</script>

<section id="ids" class="section">
	<div class="section-inner">
		<span class="kicker">Load-bearing IDs</span>
		<h2>A map of the yelling.</h2>
		<p class="lede">
			Every section has a real hash. Deep-link it. Bookmark the weird one. I will not rename them
			for a rebrand.
		</p>
		<ul>
			{#each siteMap as item}
				<li>
					<a class="card" href={item.href} on:click={() => Interactions.click()}>
						<code>{item.href}</code>
						<span>{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.section {
		background: var(--cyan);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--ink));
	}

	ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.65rem;
		margin-top: 1.8rem;
	}

	a {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.85rem 0.8rem;
		background: var(--white);
		height: 100%;
	}

	a:hover {
		background: var(--yellow);
	}

	code {
		font-size: 0.78rem;
		font-weight: 700;
	}

	span {
		font-family: var(--display);
		font-size: 1.05rem;
		letter-spacing: -0.03em;
	}

	@media (min-width: 720px) {
		ul {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}
</style>
