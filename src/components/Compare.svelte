<script lang="ts">
	import { compareRows } from '../data/site'
</script>

<section id="vs" class="section">
	<div class="section-inner">
		<span class="kicker">Versus</span>
		<h2>Me vs the slide deck.</h2>
		<p class="lede">
			A table, because sometimes the joke is just the truth with a border around it.
		</p>
		<div class="table card">
			<div class="row head">
				<span>Topic</span>
				<span>Wolfskii</span>
				<span>The deck</span>
			</div>
			{#each compareRows as row}
				<div class="row">
					<span>{row.label}</span>
					<span class="me">{row.me}</span>
					<span class="them">{row.them}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--mint);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.table {
		margin-top: 1.8rem;
		overflow: hidden;
		background: var(--white);
	}

	.row {
		display: grid;
		grid-template-columns: 0.7fr 1fr 1fr;
		gap: 0.5rem;
		padding: 0.85rem 0.9rem;
		border-top: 2px solid var(--ink);
		font-weight: 600;
		font-size: clamp(0.82rem, 1.8vw, 1rem);
	}

	.row.head {
		border-top: 0;
		background: var(--ink);
		color: var(--yellow);
		font-family: var(--display);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		font-size: 0.78rem;
	}

	.me {
		font-weight: 800;
	}

	.them {
		opacity: 0.75;
		text-decoration: line-through;
		text-decoration-thickness: 2px;
	}

	@media (max-width: 640px) {
		.row {
			grid-template-columns: 1fr;
			gap: 0.2rem;
		}

		.row.head {
			display: none;
		}

		.row span:first-child {
			font-size: 0.72rem;
			letter-spacing: 0.1em;
			text-transform: uppercase;
			opacity: 0.7;
		}
	}
</style>
