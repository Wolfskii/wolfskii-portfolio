<script lang="ts">
	import { onMount } from 'svelte'
	import Interactions from '../utils/interactions'

	const seq = [
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ArrowLeft',
		'ArrowRight',
		'b',
		'a'
	]

	let step = 0
	let open = false

	function isTyping(event: KeyboardEvent) {
		const el = event.target as HTMLElement | null
		if (!el) return false
		const tag = el.tagName
		return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable
	}

	onMount(() => {
		const onKey = (event: KeyboardEvent) => {
			if (isTyping(event)) return
			const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
			const need = seq[step]
			if (key === need || key === need.toLowerCase()) {
				step += 1
				if (step >= seq.length) {
					step = 0
					open = true
					document.body.classList.add('wolf')
					Interactions.click()
				}
			} else {
				step = key === seq[0] ? 1 : 0
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	})

	function close() {
		open = false
		document.body.classList.remove('wolf')
		Interactions.click()
	}
</script>

{#if open}
	<div class="overlay" role="dialog" aria-label="Wolf mode">
		<button class="scrim" type="button" aria-label="Close wolf mode" on:click={close} />
		<div class="panel card">
			<p class="stamp" style="--r: -8deg; --c: var(--coral)">AWOOO</p>
			<h3>Wolf mode.</h3>
			<p>
				You typed the cave code. The borders were already thick. Go look at Deathborn, or write me
				about a real plot.
			</p>
			<button class="btn btn-yellow" type="button" on:click={close}>Back to daylight</button>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 160;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	.scrim {
		position: absolute;
		inset: 0;
		background: rgba(17, 17, 17, 0.55);
		border: 0;
		box-shadow: none;
		border-radius: 0;
	}

	.panel {
		position: relative;
		z-index: 1;
		background: var(--yellow);
		padding: 1.4rem 1.25rem 1.5rem;
		max-width: 24rem;
		width: 100%;
	}

	h3 {
		margin: 0.9rem 0 0.6rem;
	}

	p {
		font-weight: 600;
		margin-bottom: 1.1rem;
	}
</style>
