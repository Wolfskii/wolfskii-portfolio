<script lang="ts">
	import { onMount } from 'svelte'
	import { terminalLines } from '../data/site'

	let shown = 0
	let reduce = false

	onMount(() => {
		reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		if (reduce) {
			shown = terminalLines.length
			return
		}
		const id = setInterval(() => {
			shown += 1
			if (shown >= terminalLines.length) clearInterval(id)
		}, 420)
		return () => clearInterval(id)
	})
</script>

<section id="term" class="section">
	<div class="section-inner">
		<span class="kicker">Shell</span>
		<h2>whoami, but make it yellow.</h2>
		<div class="window card">
			<div class="bar">
				<span class="dot" />
				<span class="dot" />
				<span class="dot" />
				<em>wolfskii — zsh — 80×24</em>
			</div>
			<pre>
{#each terminalLines.slice(0, shown) as line, i}<span class:cmd={i % 2 === 0}>{line}{'\n'}</span>{/each}<span class="caret">█</span>
			</pre>
		</div>
	</div>
</section>

<style>
	.section {
		background: #111;
		color: var(--white);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--lime));
	}

	.window {
		margin-top: 1.6rem;
		background: #0b0b0b;
		color: var(--lime);
		overflow: hidden;
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.7rem 0.9rem;
		background: #1c1c1c;
		border-bottom: var(--border);
		color: var(--white);
	}

	.dot {
		width: 0.7rem;
		height: 0.7rem;
		border: 2px solid var(--white);
		border-radius: 99px;
		background: var(--coral);
	}

	.dot:nth-child(2) {
		background: var(--yellow);
	}

	.dot:nth-child(3) {
		background: var(--lime);
	}

	em {
		margin-left: 0.6rem;
		font-style: normal;
		font-size: 0.8rem;
		font-weight: 700;
		opacity: 0.8;
	}

	pre {
		margin: 0;
		padding: 1.1rem 1.15rem 1.3rem;
		font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
		font-size: clamp(0.82rem, 2vw, 1rem);
		line-height: 1.65;
		min-height: 16rem;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.cmd {
		color: var(--cyan);
	}

	.caret {
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
