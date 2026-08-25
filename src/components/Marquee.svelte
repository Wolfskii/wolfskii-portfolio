<script lang="ts">
	import { marqueeItems, nightMarquee } from '../data/site'

	export let reverse = false
	export let tone: 'ink' | 'coral' | 'mint' = 'ink'
	export let items: string[] | undefined = undefined

	$: list = items ?? (reverse ? nightMarquee : marqueeItems)
	$: loop = [...list, ...list]
</script>

<div class="strip {tone}" aria-hidden="true">
	<div class="track" class:flip={reverse}>
		{#each loop as item}
			<span>{item}</span>
			<span class="dot">●</span>
		{/each}
	</div>
</div>

<style>
	.strip {
		overflow: hidden;
		border-bottom: var(--border);
		padding: 0.85rem 0;
	}

	.ink {
		background: var(--ink);
		color: var(--yellow);
	}

	.coral {
		background: var(--coral);
		color: var(--ink);
	}

	.mint {
		background: var(--mint);
		color: var(--ink);
	}

	.track {
		display: flex;
		width: max-content;
		gap: 1rem;
		align-items: center;
		animation: marquee 38s linear infinite;
	}

	.track.flip {
		animation-duration: 46s;
		animation-direction: reverse;
	}

	span {
		font-family: var(--display);
		font-size: clamp(0.95rem, 2.4vw, 1.25rem);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.dot {
		color: var(--coral);
		font-size: 0.7rem;
	}

	.coral .dot,
	.mint .dot {
		color: var(--ink);
	}

	.strip:hover .track {
		animation-play-state: paused;
	}
</style>
