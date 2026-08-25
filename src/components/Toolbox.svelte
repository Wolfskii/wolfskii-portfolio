<script lang="ts">
	import Interactions from '../utils/interactions'
	import { toolbox } from '../data/site'

	let active = 0

	function pick(i: number) {
		Interactions.click()
		active = i
	}
</script>

<section id="toolbox" class="section">
	<div class="section-inner">
		<span class="kicker">Toolbox</span>
		<h2>Click a tool. Get an opinion.</h2>
		<p class="lede">
			Not a logo salad. Each one has a job and a personality disorder I have made peace with.
		</p>
		<div class="layout">
			<ul>
				{#each toolbox as tool, i}
					<li>
						<button type="button" class:on={active === i} on:click={() => pick(i)}>
							{tool.name}
						</button>
					</li>
				{/each}
			</ul>
			<aside class="card">
				<p class="n">{String(active + 1).padStart(2, '0')}</p>
				<h3>{toolbox[active].name}</h3>
				<p>{toolbox[active].note}</p>
				<a class="btn btn-white" href="#projects" on:click={() => Interactions.click()}>See it used</a>
			</aside>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--cyan);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--white));
	}

	.layout {
		display: grid;
		gap: 1.2rem;
		margin-top: 2rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	button {
		border: var(--border);
		background: var(--white);
		padding: 0.5rem 0.75rem;
		font-weight: 800;
		box-shadow: 3px 3px 0 var(--ink);
	}

	button.on {
		background: var(--ink);
		color: var(--yellow);
	}

	aside {
		padding: 1.3rem 1.2rem 1.4rem;
		background: var(--white);
		min-height: 12rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	.n {
		font-family: var(--display);
		font-size: 2rem;
		line-height: 1;
	}

	.btn {
		align-self: flex-start;
		margin-top: auto;
	}

	@media (min-width: 860px) {
		.layout {
			grid-template-columns: 1.2fr 0.8fr;
			align-items: start;
		}
	}
</style>
