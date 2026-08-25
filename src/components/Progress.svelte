<script lang="ts">
	import { onMount } from 'svelte'

	let pct = 0

	onMount(() => {
		const onScroll = () => {
			const doc = document.documentElement
			const max = doc.scrollHeight - window.innerHeight
			pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	})
</script>

<div class="track" aria-hidden="true">
	<div class="fill" style="width: {pct}%" />
</div>

<style>
	.track {
		position: fixed;
		top: var(--header-h);
		left: 0;
		z-index: 85;
		width: 100%;
		height: 6px;
		background: var(--ink);
		pointer-events: none;
	}

	.fill {
		height: 100%;
		background: var(--yellow);
		border-right: 3px solid var(--ink);
		min-width: 0;
	}

	@media print {
		.track {
			display: none;
		}
	}
</style>
