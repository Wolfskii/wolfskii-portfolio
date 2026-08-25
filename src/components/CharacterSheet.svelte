<script lang="ts">
	import Interactions from '../utils/interactions'
	import { sheet, diceFlavor } from '../data/site'

	let roll = 0
	let flavor = 'Initiative pending. Click the die.'

	function flavorFor(n: number) {
		if (n === 1) return diceFlavor.crit
		if (n === 20) return diceFlavor.nat
		if (n <= 7) return diceFlavor.low
		if (n <= 13) return diceFlavor.mid
		return diceFlavor.high
	}

	function d20() {
		Interactions.click()
		roll = Math.floor(Math.random() * 20) + 1
		flavor = flavorFor(roll)
	}
</script>

<section id="sheet" class="section">
	<div class="section-inner">
		<span class="kicker">Character sheet</span>
		<h2>Stats that are not a LinkedIn slider.</h2>
		<p class="lede">
			If this career were a campaign, the class is fullstack, the alignment is ship-first, and the
			familiar is a rack named Yggdrasil.
		</p>

		<div class="layout">
			<div class="card sheet">
				<header>
					<p class="alias">{sheet.alias}</p>
					<h3>{sheet.name}</h3>
					<p class="klass">{sheet.klass} · {sheet.origin}</p>
				</header>
				<dl>
					<div>
						<dt>Alignment</dt>
						<dd>{sheet.alignment}</dd>
					</div>
					<div>
						<dt>HP</dt>
						<dd>{sheet.hp}</dd>
					</div>
					<div>
						<dt>MP</dt>
						<dd>{sheet.mp}</dd>
					</div>
					<div>
						<dt>Weakness</dt>
						<dd>{sheet.weakness}</dd>
					</div>
				</dl>
				<p class="label">Feats</p>
				<ul>
					{#each sheet.feats as feat}
						<li>{feat}</li>
					{/each}
				</ul>
				<p class="label">Inventory</p>
				<ul>
					{#each sheet.inventory as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>

			<aside class="card die">
				<p class="label">Initiative</p>
				<p class="face" class:nat={roll === 20} class:crit={roll === 1}>
					{roll || '—'}
				</p>
				<p class="flavor">{flavor}</p>
				<button class="btn" type="button" on:click={d20}>Roll a d20</button>
				<p class="hint">Does not affect billing. Does affect morale.</p>
			</aside>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--violet);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.layout {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	.sheet,
	.die {
		padding: 1.25rem 1.15rem 1.4rem;
		background: var(--white);
	}

	.alias {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		margin-bottom: 0.25rem;
	}

	h3 {
		margin-bottom: 0.3rem;
	}

	.klass {
		font-weight: 600;
		margin-bottom: 1rem;
	}

	dl {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.7rem;
		margin-bottom: 1rem;
	}

	dt {
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.7;
	}

	dd {
		font-weight: 700;
	}

	.label {
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin: 0.7rem 0 0.35rem;
	}

	li {
		padding: 0.4rem 0;
		border-top: 2px solid var(--ink);
		font-weight: 600;
	}

	.die {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		background: var(--yellow);
	}

	.face {
		font-family: var(--display);
		font-size: clamp(4.5rem, 14vw, 7rem);
		line-height: 0.85;
		letter-spacing: -0.06em;
		filter: drop-shadow(4px 4px 0 var(--coral));
		margin: 0.4rem 0 0.6rem;
	}

	.face.nat {
		filter: drop-shadow(4px 4px 0 var(--lime));
	}

	.face.crit {
		filter: drop-shadow(4px 4px 0 var(--ink));
	}

	.flavor {
		font-weight: 700;
		margin-bottom: 1.1rem;
		max-width: 22rem;
	}

	.hint {
		margin-top: 0.75rem;
		font-size: 0.82rem;
		opacity: 0.75;
	}

	@media (min-width: 860px) {
		.layout {
			grid-template-columns: 1.25fr 0.75fr;
			align-items: stretch;
		}

		.die {
			transform: rotate(1.5deg);
		}
	}
</style>
