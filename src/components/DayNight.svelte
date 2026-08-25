<script lang="ts">
	import Interactions from '../utils/interactions'
	import { dayShift, nightShift } from '../data/site'

	let mode: 'day' | 'night' = 'day'

	function setMode(next: 'day' | 'night') {
		Interactions.click()
		mode = next
	}
</script>

<section id="shifts" class="section" class:night={mode === 'night'}>
	<div class="section-inner">
		<div class="top">
			<div>
				<span class="kicker">{mode === 'day' ? 'Sunlight' : 'Moonlight'}</span>
				<h2>{mode === 'day' ? 'The day job has a badge.' : 'The night job has a pulse.'}</h2>
			</div>
			<div class="switch" role="tablist" aria-label="Day or night">
				<button type="button" class:on={mode === 'day'} on:click={() => setMode('day')}>Day</button>
				<button type="button" class:on={mode === 'night'} on:click={() => setMode('night')}>Night</button>
			</div>
		</div>

		<div class="split">
			<article class="card pane" class:active={mode === 'day'}>
				<p class="stamp" style="--r: -6deg; --c: var(--yellow)">{dayShift.kicker}</p>
				<h3>{dayShift.title}</h3>
				<ul>
					{#each dayShift.lines as line}
						<li>{line}</li>
					{/each}
				</ul>
			</article>
			<article class="card pane dark" class:active={mode === 'night'}>
				<p class="stamp" style="--r: 7deg; --c: var(--coral)">{nightShift.kicker}</p>
				<h3>{nightShift.title}</h3>
				<ul>
					{#each nightShift.lines as line}
						<li>{line}</li>
					{/each}
				</ul>
			</article>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--yellow);
		transition: background 0.25s ease, color 0.25s ease;
	}

	.section.night {
		background: #141414;
		color: var(--white);
	}

	.night h2 {
		filter: drop-shadow(3px 3px 0 var(--coral));
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--coral));
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
		align-items: end;
		margin-bottom: 2rem;
	}

	.switch {
		display: flex;
		border: var(--border);
		box-shadow: var(--shadow);
		background: var(--white);
		color: var(--ink);
	}

	.switch button {
		padding: 0.7rem 1.15rem;
		font-weight: 800;
		min-width: 5.5rem;
	}

	.switch button.on {
		background: var(--ink);
		color: var(--yellow);
	}

	.split {
		display: grid;
		gap: 1rem;
	}

	.pane {
		padding: 1.3rem 1.15rem 1.45rem;
		opacity: 0.45;
		transform: scale(0.98);
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	.pane.active {
		opacity: 1;
		transform: scale(1);
	}

	.dark {
		background: #1f1f1f;
		color: var(--white);
	}

	.dark li {
		border-top-color: #444;
	}

	h3 {
		margin: 1rem 0 0.8rem;
	}

	li {
		padding: 0.55rem 0;
		border-top: 2px solid var(--ink);
		font-weight: 600;
	}

	@media (min-width: 800px) {
		.split {
			grid-template-columns: 1fr 1fr;
			align-items: stretch;
		}

		.pane:not(.active) {
			transform: rotate(-1.5deg) scale(0.98);
		}
	}
</style>
