<script lang="ts">
	import { tapeItems } from '../data/site'

	export let flip = false

	$: loop = [...tapeItems, ...tapeItems, ...tapeItems]
</script>

<div class="tape" class:flip aria-hidden="true">
	<div class="track">
		{#each loop as item}
			<span>{item}</span>
		{/each}
	</div>
</div>

<style>
	.tape {
		overflow: hidden;
		border-bottom: var(--border);
		background: repeating-linear-gradient(
			-45deg,
			var(--yellow),
			var(--yellow) 14px,
			var(--ink) 14px,
			var(--ink) 28px
		);
		padding: 0.45rem 0;
	}

	.track {
		display: flex;
		width: max-content;
		gap: 1.4rem;
		animation: marquee 28s linear infinite;
	}

	.flip .track {
		animation-direction: reverse;
		animation-duration: 34s;
	}

	span {
		font-family: var(--display);
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		white-space: nowrap;
		background: var(--ink);
		color: var(--yellow);
		padding: 0.2rem 0.45rem;
	}

	.tape:hover .track {
		animation-play-state: paused;
	}
</style>
