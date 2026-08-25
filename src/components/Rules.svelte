<script lang="ts">
	import { wills, wonts } from '../data/site'
</script>

<section id="rules" class="section">
	<div class="section-inner">
		<span class="kicker">Contract energy</span>
		<h2>I will. I won’t.</h2>
		<p class="lede">
			The short version of working together, before anyone opens a spreadsheet named
			<code>final_final_v3.xlsx</code>.
		</p>
		<div class="cols">
			<article class="card yes">
				<h3>I will</h3>
				<ul>
					{#each wills as item}
						<li><span>✓</span>{item}</li>
					{/each}
				</ul>
			</article>
			<article class="card no">
				<h3>I won’t</h3>
				<ul>
					{#each wonts as item}
						<li><span>×</span>{item}</li>
					{/each}
				</ul>
			</article>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--white);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--lime));
	}

	code {
		font-weight: 800;
		background: var(--yellow);
		border: 2px solid var(--ink);
		padding: 0.05rem 0.3rem;
	}

	.cols {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	article {
		padding: 1.25rem 1.15rem 1.4rem;
	}

	.yes {
		background: var(--lime);
	}

	.no {
		background: var(--coral);
	}

	h3 {
		margin-bottom: 0.9rem;
	}

	li {
		display: flex;
		gap: 0.6rem;
		padding: 0.55rem 0;
		border-top: 2px solid var(--ink);
		font-weight: 600;
	}

	span {
		font-family: var(--display);
		flex-shrink: 0;
	}

	@media (min-width: 800px) {
		.cols {
			grid-template-columns: 1fr 1fr;
		}

		.no {
			transform: translateY(0.8rem);
		}
	}
</style>
