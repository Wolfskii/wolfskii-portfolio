<script lang="ts">
	import Interactions from '../utils/interactions'
	import { profile, receiptLines } from '../data/site'

	const issued = new Date().getFullYear()
</script>

<section id="receipt" class="section">
	<div class="section-inner">
		<span class="kicker">Invoice energy</span>
		<h2>What you actually get.</h2>
		<p class="lede">
			Not a rate card. A receipt for the working relationship, before anyone invents a slide named
			synergy.
		</p>
		<div class="paper card">
			<div class="head">
				<p>WOLF SKII</p>
				<p>#{issued}-GBG</p>
			</div>
			<p class="to">Billed to: a human with a real problem</p>
			<p class="from">From: {profile.name} · {profile.city}</p>
			<ul>
				{#each receiptLines as line}
					<li>
						<span class="item">{line.item}</span>
						<span class="qty">{line.qty}</span>
						<span class="price">{line.price}</span>
					</li>
				{/each}
			</ul>
			<div class="total">
				<span>Total</span>
				<strong>One honest conversation</strong>
			</div>
			<a class="btn" href="#contact" on:click={() => Interactions.click()}>Pay in email</a>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--paper);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--gold));
	}

	.paper {
		margin-top: 2rem;
		max-width: 40rem;
		padding: 1.4rem 1.2rem 1.5rem;
		background: var(--white);
		font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
	}

	.head {
		display: flex;
		justify-content: space-between;
		font-family: var(--display);
		font-size: 1.1rem;
		letter-spacing: 0.08em;
		margin-bottom: 1rem;
		padding-bottom: 0.7rem;
		border-bottom: 3px dashed var(--ink);
	}

	.to,
	.from {
		font-size: 0.88rem;
		font-weight: 600;
	}

	.from {
		margin-bottom: 1rem;
		opacity: 0.75;
	}

	li {
		display: grid;
		grid-template-columns: 1fr auto auto;
		gap: 0.6rem;
		padding: 0.55rem 0;
		border-top: 2px solid var(--ink);
		font-size: clamp(0.78rem, 2vw, 0.92rem);
		font-weight: 600;
		align-items: baseline;
	}

	.qty,
	.price {
		text-align: right;
		white-space: nowrap;
	}

	.total {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: baseline;
		margin: 1rem 0 1.2rem;
		padding-top: 0.8rem;
		border-top: 3px dashed var(--ink);
		font-family: var(--font);
	}

	.total strong {
		font-family: var(--display);
		font-size: clamp(1rem, 3vw, 1.3rem);
		letter-spacing: -0.03em;
		text-align: right;
	}

	.btn {
		font-family: var(--font);
	}

	@media (max-width: 520px) {
		li {
			grid-template-columns: 1fr;
			gap: 0.15rem;
		}

		.qty,
		.price {
			text-align: left;
			opacity: 0.75;
		}
	}
</style>
