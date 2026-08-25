<script lang="ts">
	import selfieImg from '../assets/selfie.jpg'
	import Interactions from '../utils/interactions'
	import { wantedCharges } from '../data/site'
</script>

<section id="wanted" class="section">
	<div class="section-inner layout">
		<div class="poster card">
			<p class="banner">Wanted</p>
			<div class="photo">
				<img src={selfieImg} alt="Dawid Kaleta, black-and-white portrait" />
			</div>
			<p class="aka">also known as Wolfskii</p>
			<span class="stamp" style="--r: -8deg; --c: var(--coral)">Alive, compiling</span>
		</div>
		<div>
			<span class="kicker">Poster</span>
			<h2>For crimes against beige UI.</h2>
			<p class="lede">
				If found, do not approach with a discovery workshop. Send the deadline and who signs.
			</p>
			<ul>
				{#each wantedCharges as charge}
					<li>{charge}</li>
				{/each}
			</ul>
			<a class="btn" href="#contact" on:click={() => Interactions.click()}>Collect the bounty</a>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--coral);
	}

	.layout {
		display: grid;
		gap: 2rem;
		align-items: center;
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.poster {
		max-width: 22rem;
		margin: 0 auto;
		padding: 1rem 1rem 1.3rem;
		background: var(--yellow);
		text-align: center;
		transform: rotate(-2deg);
	}

	.banner {
		font-family: var(--display);
		font-size: clamp(2rem, 8vw, 2.8rem);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 0.7rem;
	}

	.photo {
		overflow: hidden;
		border: var(--border);
		aspect-ratio: 1;
		background: var(--white);
	}

	.photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: contrast(1.15) grayscale(1);
	}

	.aka {
		margin: 0.8rem 0 1rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-size: 0.82rem;
	}

	li {
		padding: 0.55rem 0;
		border-top: 2px solid var(--ink);
		font-weight: 700;
	}

	.btn {
		margin-top: 1.3rem;
	}

	@media (min-width: 860px) {
		.layout {
			grid-template-columns: minmax(16rem, 22rem) 1fr;
			gap: 3rem;
		}

		.poster {
			margin: 0;
			transform: rotate(-3deg);
		}
	}
</style>
