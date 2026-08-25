<script lang="ts">
	import { processSteps } from '../data/site'
</script>

<section id="process" class="section">
	<div class="section-inner">
		<span class="kicker">Process</span>
		<h2>How the sausage compiles.</h2>
		<p class="lede">
			Four steps. No discovery workshop that lasts a season. No “we’ll know it when we see it”
			unless you are paying for that kind of poetry.
		</p>
		<ol>
			{#each processSteps as step}
				<li class="card">
					<span>{step.n}</span>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.section {
		background: var(--gold);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--white));
	}

	ol {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
		counter-reset: none;
	}

	li {
		padding: 1.2rem 1.1rem 1.35rem;
		background: var(--white);
		position: relative;
	}

	li > span {
		font-family: var(--display);
		font-size: 2rem;
		line-height: 1;
		display: block;
		margin-bottom: 0.55rem;
		color: var(--coral);
		-webkit-text-stroke: 1px var(--ink);
	}

	h3 {
		margin-bottom: 0.45rem;
	}

	@media (min-width: 900px) {
		ol {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		li:nth-child(even) {
			transform: translateY(1rem);
		}
	}
</style>
