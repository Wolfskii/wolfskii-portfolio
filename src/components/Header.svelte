<script lang="ts">
	import logo from '../assets/logo.svg'
	import Interactions from '../utils/interactions'
	import { navLinks } from '../data/site'

	let isMenuOpen = false

	function setMenu(open: boolean) {
		isMenuOpen = open
		if (typeof document !== 'undefined') {
			document.body.classList.toggle('nav-open', open)
		}
	}

	function toggleMenu() {
		Interactions.click()
		setMenu(!isMenuOpen)
	}

	function onNavClick() {
		Interactions.click()
		setMenu(false)
	}

	function onHireClick() {
		Interactions.click()
		setMenu(false)
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) setMenu(false)
	}
</script>

<svelte:window on:keydown={onKeydown} />

<header>
	<a class="brand" href="#start" on:click={onNavClick}>
		<img src={logo} alt="" width="40" height="40" />
		<span>
			<strong>Wolfskii</strong>
			<small>Dawid Kaleta</small>
		</span>
	</a>

	<nav class="desktop-nav" aria-label="Primary">
		<ul>
			{#each navLinks as link}
				<li>
					<a href={link.href} on:click={onNavClick}>{link.label}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<a class="btn btn-yellow hire" href="#contact" on:click={onHireClick}>Hire me</a>

	<button
		class="menu-toggle"
		class:open={isMenuOpen}
		aria-expanded={isMenuOpen}
		aria-controls="mobile-nav"
		aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
		on:click={toggleMenu}
	>
		<span />
		<span />
		<span />
	</button>
</header>

{#if isMenuOpen}
	<button class="backdrop" type="button" aria-label="Close menu" on:click={() => setMenu(false)} />
{/if}

<nav id="mobile-nav" class="mobile-nav" class:open={isMenuOpen} aria-label="Mobile">
	<ul>
		{#each navLinks as link}
			<li>
				<a href={link.href} on:click={onNavClick}>{link.label}</a>
			</li>
		{/each}
	</ul>
	<a class="btn" href="#contact" on:click={onHireClick}>Let’s talk</a>
</nav>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 80;
		display: flex;
		align-items: center;
		gap: 1rem;
		min-height: var(--header-h);
		padding: 0.65rem 1rem;
		background: var(--white);
		border-bottom: var(--border);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		min-width: 0;
		margin-right: auto;
	}

	.brand img {
		width: 2.5rem;
		height: 2.5rem;
		flex-shrink: 0;
		border: 3px solid var(--ink);
		border-radius: 6px;
		box-shadow: 3px 3px 0 var(--ink);
	}

	.brand span {
		display: flex;
		flex-direction: column;
		line-height: 1.05;
	}

	.brand strong {
		font-family: var(--display);
		font-size: 1.05rem;
		letter-spacing: -0.03em;
	}

	.brand small {
		font-size: 0.72rem;
		font-weight: 600;
		opacity: 0.7;
	}

	.desktop-nav {
		display: none;
	}

	.desktop-nav ul {
		display: flex;
		align-items: center;
		gap: 0.15rem;
	}

	.desktop-nav a {
		display: block;
		padding: 0.45rem 0.7rem;
		font-size: 0.92rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.desktop-nav a:hover {
		background: var(--yellow);
		box-shadow: inset 0 -3px 0 var(--ink);
	}

	.hire {
		display: none;
		padding: 0.6rem 1rem;
		font-size: 0.88rem;
	}

	.menu-toggle {
		position: relative;
		width: 2.6rem;
		height: 2.6rem;
		flex-shrink: 0;
		border: var(--border);
		border-radius: 6px;
		background: var(--yellow);
		box-shadow: 3px 3px 0 var(--ink);
	}

	.menu-toggle span {
		position: absolute;
		left: 0.45rem;
		right: 0.45rem;
		height: 3px;
		background: var(--ink);
		transition: transform 0.2s ease, top 0.2s ease, opacity 0.2s ease;
	}

	.menu-toggle span:nth-child(1) {
		top: 0.7rem;
	}

	.menu-toggle span:nth-child(2) {
		top: 50%;
		transform: translateY(-50%);
	}

	.menu-toggle span:nth-child(3) {
		bottom: 0.7rem;
		top: auto;
	}

	.menu-toggle.open span:nth-child(1) {
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
	}

	.menu-toggle.open span:nth-child(2) {
		opacity: 0;
	}

	.menu-toggle.open span:nth-child(3) {
		top: 50%;
		bottom: auto;
		transform: translateY(-50%) rotate(-45deg);
	}

	.backdrop {
		position: fixed;
		inset: var(--header-h) 0 0;
		z-index: 60;
		width: 100%;
		height: auto;
		padding: 0;
		border: 0;
		border-radius: 0;
		box-shadow: none;
		background: rgba(17, 17, 17, 0.35);
	}

	.mobile-nav {
		position: fixed;
		z-index: 70;
		top: var(--header-h);
		right: 0;
		left: 0;
		display: none;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.5rem 1.25rem 2rem;
		background: var(--yellow);
		border-bottom: var(--border);
		max-height: calc(100vh - var(--header-h));
		overflow: auto;
	}

	.mobile-nav.open {
		display: flex;
		min-height: calc(100vh - var(--header-h));
		min-height: calc(100dvh - var(--header-h));
	}

	.mobile-nav a {
		font-family: var(--display);
		font-size: clamp(1.8rem, 8vw, 2.6rem);
		letter-spacing: -0.03em;
	}

	.mobile-nav .btn {
		align-self: flex-start;
		font-family: var(--font);
		font-size: 1rem;
	}

	@media (min-width: 900px) {
		header {
			padding: 0.65rem 1.5rem;
		}

		.desktop-nav {
			display: block;
		}

		.hire {
			display: inline-flex;
		}

		.menu-toggle,
		.mobile-nav,
		.backdrop {
			display: none !important;
		}
	}

	@media (max-width: 420px) {
		.brand small {
			display: none;
		}
	}
</style>
