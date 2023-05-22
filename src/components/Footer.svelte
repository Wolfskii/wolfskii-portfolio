<script lang="ts">
	import ghIcon from '../assets/icons/github.svg'
	import liIcon from '../assets/icons/linkedin.svg'
	import fbIcon from '../assets/icons/facebook.svg'
	import twIcon from '../assets/icons/twitter.svg'
	import emailIcon from '../assets/icons/email.svg'

	let links = [
		{ label: 'Start', href: '#' },
		{ label: 'Om mig', href: '#' },
		{ label: 'Projekt', href: '#' },
		{ label: 'Kontakt', href: '#' }
	]
</script>

<footer>
	<div class="footer-left">
		<div class="footer-logo">
			<p>Dawid Kaleta</p>
		</div>

		<div class="footer-socials">
			<a href="http://" target="_blank" rel="noopener noreferrer" class="social-link">
				<img src={ghIcon} alt="GitHub-icon" class="social-icon wobble" />
			</a>

			<a href="http://" target="_blank" rel="noopener noreferrer" class="social-link">
				<img src={liIcon} alt="LinkedIn-icon" class="social-icon wobble" />
			</a>

			<a href="http://" target="_blank" rel="noopener noreferrer" class="social-link">
				<img src={fbIcon} alt="Facebook-icon" class="social-icon wobble" />
			</a>

			<a href="http://" target="_blank" rel="noopener noreferrer" class="social-link">
				<img src={twIcon} alt="Twitter-icon" class="social-icon wobble" />
			</a>

			<a href="mailto:dawid.kaleta@outlook.com" class="social-link">
				<img src={emailIcon} alt="Email-icon" class="social-icon wobble" />
			</a>
		</div>
	</div>

	<div class="footer-right">
		<nav class="footer-links">
			<ul>
				{#each links as link}
					<li>
						<a href={link.href}>{link.label} </a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="footer-copyright">
			<p>Copyright {new Date().getFullYear()} - Dawid Kaleta</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: #000000;
		color: #ffffff;
		display: flex;
		justify-content: space-between;
		padding: 4rem;
	}

	.footer-left,
	.footer-right {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.footer-left {
		align-items: flex-start;
	}

	.footer-right {
		align-items: flex-end;
	}

	.footer-logo p {
		font-size: 1.8rem;
	}

	.footer-socials {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}
	.social-icon {
		width: 2rem;
	}

	.footer-links ul {
		display: flex;
		gap: 2rem;
	}
</style>
