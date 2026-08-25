<script lang="ts">
	import { colophonLines, profile } from '../data/site'
</script>

<section id="colophon" class="section">
	<div class="section-inner">
		<span class="kicker">Colophon</span>
		<h2>How this page was made.</h2>
		<p class="lede">
			The credits at the back of the book. No framework worship. Just the tools that actually
			compiled.
		</p>
		<ul>
			{#each colophonLines as line}
				<li class="card">
					<p class="k">{line.k}</p>
					<p>{line.v}</p>
				</li>
			{/each}
		</ul>
		<p class="src">
			Source lives on GitHub if you want to steal a border.
			<a href="https://github.com/Wolfskii/wolfskii-portfolio" target="_blank" rel="noreferrer"
				>{profile.site.replace('https://', '')} repo →</a
			>
		</p>
	</div>
</section>

<style>
	.section {
		background: var(--ink);
		color: var(--white);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--coral));
	}

	.lede {
		opacity: 0.9;
	}

	ul {
		display: grid;
		gap: 0.8rem;
		margin: 2rem 0 1.4rem;
	}

	li {
		padding: 1.05rem 1rem 1.15rem;
		background: #1c1c1c;
		color: var(--white);
		box-shadow: 4px 4px 0 var(--yellow);
	}

	.k {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--yellow);
		margin-bottom: 0.35rem;
	}

	.src {
		font-weight: 600;
		max-width: 40rem;
	}

	a {
		text-decoration: underline;
		text-underline-offset: 4px;
		color: var(--yellow);
	}

	@media (min-width: 720px) {
		ul {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
