<script lang="ts">
	import { onMount } from 'svelte'
	import Interactions from '../utils/interactions'
	import { profile } from '../data/site'

	let muted = false
	let showKeys = false
	let showTop = false

	onMount(() => {
		const unsub = Interactions.subscribe((value) => {
			muted = value
		})
		const onScroll = () => {
			showTop = window.scrollY > 500
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => {
			unsub()
			window.removeEventListener('scroll', onScroll)
		}
	})

	function isTyping(event: KeyboardEvent) {
		const el = event.target as HTMLElement | null
		if (!el) return false
		const tag = el.tagName
		return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable
	}

	function onKey(event: KeyboardEvent) {
		if (isTyping(event)) return
		if (event.key === '?' || (event.shiftKey && event.key === '/')) {
			event.preventDefault()
			showKeys = !showKeys
			Interactions.click()
		} else if (event.key === 'Escape') {
			showKeys = false
		} else if (event.key === 'm' || event.key === 'M') {
			Interactions.toggleMute()
		} else if (event.key === 'g' || event.key === 'G') {
			window.open(profile.github, '_blank', 'noopener')
		} else if (event.key === 'c' || event.key === 'C') {
			Interactions.click()
			window.location.hash = 'contact'
		} else if (event.key === 'p' || event.key === 'P') {
			Interactions.click()
			window.location.hash = 'projects'
		} else if (event.key === 'r' || event.key === 'R') {
			Interactions.click()
			window.location.hash = 'receipt'
		}
	}

	function mute() {
		Interactions.toggleMute()
	}

	function top() {
		Interactions.click()
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	function keys() {
		Interactions.click()
		showKeys = !showKeys
	}
</script>

<svelte:window on:keydown={onKey} />

<div class="dock">
	<button type="button" class="btn btn-white" on:click={mute} aria-pressed={muted}>
		{muted ? 'Sound off' : 'Sound on'}
	</button>
	<button type="button" class="btn btn-yellow" on:click={keys}>?</button>
	{#if showTop}
		<button type="button" class="btn" on:click={top}>Top</button>
	{/if}
</div>

{#if showKeys}
	<div class="overlay" role="dialog" aria-label="Keyboard shortcuts">
		<button class="scrim" type="button" aria-label="Close shortcuts" on:click={() => (showKeys = false)} />
		<div class="panel card">
			<h3>Hotkeys</h3>
			<ul>
				<li><kbd>?</kbd> this panel</li>
				<li><kbd>M</kbd> mute the click</li>
				<li><kbd>C</kbd> contact</li>
				<li><kbd>P</kbd> projects</li>
				<li><kbd>R</kbd> invoice</li>
				<li><kbd>G</kbd> GitHub</li>
				<li><kbd>Esc</kbd> close</li>
			</ul>
			<p>Some traditions are load-bearing. The click is one of them.</p>
		</div>
	</div>
{/if}

<style>
	.dock {
		position: fixed;
		z-index: 90;
		right: 0.8rem;
		bottom: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		align-items: flex-end;
	}

	.dock .btn {
		padding: 0.55rem 0.75rem;
		font-size: 0.8rem;
	}

	.overlay {
		position: fixed;
		inset: 0;
		z-index: 120;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	.scrim {
		position: absolute;
		inset: 0;
		background: rgba(17, 17, 17, 0.45);
		border: 0;
		box-shadow: none;
		border-radius: 0;
	}

	.panel {
		position: relative;
		z-index: 1;
		background: var(--yellow);
		padding: 1.3rem 1.25rem 1.4rem;
		max-width: 22rem;
		width: 100%;
	}

	h3 {
		margin-bottom: 0.8rem;
	}

	li {
		display: flex;
		gap: 0.7rem;
		align-items: center;
		padding: 0.4rem 0;
		font-weight: 700;
		border-top: 2px solid var(--ink);
	}

	kbd {
		font-family: var(--display);
		border: 2px solid var(--ink);
		background: var(--white);
		padding: 0.15rem 0.45rem;
		min-width: 1.8rem;
		text-align: center;
	}

	.panel p {
		margin-top: 0.9rem;
		font-size: 0.9rem;
	}

	@media (max-width: 640px) {
		.dock {
			right: 0.6rem;
			bottom: 0.6rem;
		}
	}
</style>
