<script lang="ts">
	import { skillGroups } from '../data/site'
</script>

<section id="skills" class="section">
	<div class="section-inner">
		<span class="kicker">Stack</span>
		<h2>Tools I will not apologize for.</h2>
		<p class="lede">
			I pick the boring tool when it ships. I pick the sharp one when the problem deserves it. I do
			not pick a new framework because a talk had good lighting.
		</p>
		<div class="groups">
			{#each skillGroups as group, i}
				<article class="card" class:shift={i === 1}>
					<h3>{group.title}</h3>
					<ul>
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
		<p class="footnote">
			Also fluent in: standups, Jira archaeology, “it works on my cluster”, and explaining flowcharts
			to people who asked for flowcharts.
		</p>
	</div>
</section>

<style>
	.section {
		background: var(--violet);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--white));
	}

	.groups {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	article {
		padding: 1.25rem 1.15rem 1.4rem;
		background: var(--white);
	}

	h3 {
		font-size: 1.15rem;
		line-height: 1.15;
		margin-bottom: 0.9rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	li {
		background: var(--yellow);
		border: 2px solid var(--ink);
		padding: 0.35rem 0.6rem;
		font-weight: 700;
		font-size: 0.88rem;
	}

	.footnote {
		margin-top: 1.5rem;
		font-weight: 600;
		max-width: 40rem;
	}

	@media (min-width: 800px) {
		.groups {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.shift {
			transform: translateY(0.8rem);
		}
	}
</style>
