<script lang="ts">
	import Interactions from '../utils/interactions'

	export let text = 'Need a developer who can talk to both designers and Java backends?'
	export let href = '#contact'
	export let cta = 'Ping me'
	export let tone: 'ink' | 'yellow' | 'pink' = 'ink'

	function ping() {
		Interactions.click()
	}
</script>

<aside class="banner {tone}">
	<p>{text}</p>
	<a class="btn btn-yellow" {href} on:click={ping}>{cta}</a>
</aside>

<style>
	.banner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.4rem clamp(1rem, 4vw, 3.25rem);
		border-bottom: var(--border);
	}

	p {
		font-family: var(--display);
		font-size: clamp(1.2rem, 3.5vw, 1.85rem);
		line-height: 1.1;
		letter-spacing: -0.03em;
		max-width: 44rem;
	}

	.ink {
		background: var(--ink);
		color: var(--white);
	}

	.yellow {
		background: var(--yellow);
	}

	.pink {
		background: var(--pink);
	}
</style>
