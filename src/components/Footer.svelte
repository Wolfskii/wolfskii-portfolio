<script lang="ts">
	import ghIcon from '../assets/icons/github.svg'
	import liIcon from '../assets/icons/linkedin.svg'
	import emailIcon from '../assets/icons/email.svg'
	import Interactions from '../utils/interactions'
	import { navLinks, profile } from '../data/site'

	const extra = [
		{ label: 'FAQ', href: '#faq' },
		{ label: 'Rules', href: '#rules' },
		{ label: 'Shifts', href: '#shifts' },
		{ label: 'Sheet', href: '#sheet' },
		{ label: 'Years', href: '#timeline' },
		{ label: 'Invoice', href: '#receipt' },
		{ label: 'Colophon', href: '#colophon' }
	]

	const year = new Date().getFullYear()

	function ping() {
		Interactions.click()
	}
</script>

<footer>
	<div class="inner">
		<div class="left">
			<p class="logo">{profile.handle}</p>
			<p class="tag">{profile.name} · {profile.role} · {profile.city}</p>
			<div class="socials">
				<a href={profile.github} target="_blank" rel="noreferrer" class="social" on:click={ping}>
					<img src={ghIcon} alt="GitHub" />
				</a>
				<a href={profile.linkedin} target="_blank" rel="noreferrer" class="social" on:click={ping}>
					<img src={liIcon} alt="LinkedIn" />
				</a>
				<a href={profile.emailHref} class="social" on:click={ping}>
					<img src={emailIcon} alt="Email" />
				</a>
			</div>
			<a class="webble" href={profile.webble} target="_blank" rel="noreferrer" on:click={ping}
				>Also: webble.se</a
			>
		</div>

		<div class="right">
			<nav aria-label="Footer">
				<ul>
					{#each [...navLinks, ...extra] as link}
						<li>
							<a href={link.href} on:click={ping}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</nav>
			<p class="copy">
				© {year} {profile.name}. Built with Svelte, spite, and a 3px border. The click sound is load-bearing.
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--ink);
		color: var(--white);
		padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 4vw, 3.25rem);
	}

	.inner {
		max-width: var(--max);
		margin: 0 auto;
		display: grid;
		gap: 2rem;
	}

	.logo {
		font-family: var(--display);
		font-size: clamp(2rem, 6vw, 3rem);
		letter-spacing: -0.04em;
		line-height: 0.9;
	}

	.tag {
		margin: 0.7rem 0 1.1rem;
		max-width: 26rem;
		opacity: 0.85;
	}

	.socials {
		display: flex;
		gap: 0.55rem;
	}

	.social {
		display: grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border: 2px solid var(--white);
		border-radius: 6px;
	}

	.social img {
		width: 1.35rem;
		height: 1.35rem;
	}

	.webble {
		display: inline-block;
		margin-top: 1.1rem;
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.right ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.25rem;
	}

	.right a {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.9rem;
	}

	.right a:hover {
		color: var(--yellow);
	}

	.copy {
		margin-top: 1.5rem;
		font-size: 0.9rem;
		opacity: 0.8;
		max-width: 28rem;
	}

	@media (min-width: 800px) {
		.inner {
			grid-template-columns: 1fr 1fr;
			align-items: end;
		}

		.right {
			text-align: right;
		}

		.right ul {
			justify-content: flex-end;
		}

		.copy {
			margin-left: auto;
		}
	}
</style>
