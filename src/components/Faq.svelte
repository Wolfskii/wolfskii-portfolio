<script lang="ts">
	import Interactions from '../utils/interactions'
	import { faqItems } from '../data/site'

	let open = 0

	function toggle(i: number) {
		Interactions.click()
		open = open === i ? -1 : i
	}
</script>

<section id="faq" class="section">
	<div class="section-inner">
		<span class="kicker">FAQ</span>
		<h2>Questions I actually get.</h2>
		<p class="lede">
			Not the ones from a template. The ones that arrive in email at 22:14 with a subject line that
			says “quick question”.
		</p>
		<div class="list">
			{#each faqItems as item, i}
				<article class="card" class:open={open === i}>
					<button type="button" on:click={() => toggle(i)}>
						<span>{item.q}</span>
						<em>{open === i ? '−' : '+'}</em>
					</button>
					{#if open === i}
						<p>{item.a}</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--paper);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--cyan));
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 2rem;
	}

	article {
		background: var(--white);
		overflow: hidden;
	}

	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: center;
		text-align: left;
		padding: 1.05rem 1.1rem;
		font-weight: 800;
		font-size: clamp(1rem, 2.2vw, 1.2rem);
	}

	em {
		font-style: normal;
		font-family: var(--display);
		font-size: 1.4rem;
		line-height: 1;
		flex-shrink: 0;
	}

	p {
		margin: 0;
		padding: 0.9rem 1.1rem 1.15rem;
		border-top: 2px solid var(--ink);
	}

	.open {
		background: var(--yellow);
	}
</style>
