<script lang="ts">
	export let text = 'Thick borders. Working software. Bad stock photos: banned.'
</script>

<aside class="quote">
	<p>“{text}”</p>
</aside>

<style>
	.quote {
		padding: clamp(2.2rem, 6vw, 3.5rem) clamp(1rem, 4vw, 3.25rem);
		background: var(--ink);
		color: var(--yellow);
		border-bottom: var(--border);
		text-align: center;
	}

	p {
		font-family: var(--display);
		font-size: clamp(1.4rem, 4.5vw, 2.6rem);
		line-height: 1.1;
		letter-spacing: -0.03em;
		max-width: 50rem;
		margin: 0 auto;
	}
</style>
