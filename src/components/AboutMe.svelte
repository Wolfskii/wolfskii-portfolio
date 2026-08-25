<script lang="ts">
	import selfieImg from '../assets/selfie.jpg'
	import { stats } from '../data/site'
	import Interactions from '../utils/interactions'
</script>

<section id="about" class="section about">
	<div class="section-inner">
		<div class="layout">
			<div class="photo-wrap">
				<div class="photo card wobble">
					<img src={selfieImg} alt="Dawid Kaleta, black-and-white portrait" />
				</div>
				<span class="stamp float-a" style="--r: -10deg; --c: var(--coral)">Human</span>
				<span class="stamp float-b" style="--r: 8deg; --c: var(--yellow)">Not a template</span>
			</div>

			<div class="text">
				<span class="kicker">About</span>
				<h2>Who is knocking?</h2>
				<p class="lede">
					A fullstack developer in Gothenburg who treats production like a contact sport and side
					projects like a second job — because they are.
				</p>
				<p>
					By day I’m a specialist at <strong>Knightec Group</strong>, building Unified Communications
					software for <strong>Telia</strong>: number translation, service hubs, flowcharts that
					replace tribal knowledge. By night I run <strong>Webble</strong> and ship games, health
					tools, dance software, and a homelab with too many opinions.
				</p>
				<p>
					I like interfaces with courage, APIs that tell the truth, and clients who want a site they
					can edit on a Tuesday without summoning me from the forest.
				</p>
				<div class="actions">
					<a class="btn btn-white" href="#projects" on:click={() => Interactions.click()}>Skip to work</a>
					<a class="btn btn-ink" href="https://github.com/Wolfskii" target="_blank" rel="noreferrer"
						on:click={() => Interactions.click()}>GitHub →</a>
				</div>
			</div>
		</div>

		<ul class="stats">
			{#each stats as stat}
				<li class="card">
					<strong>{stat.value}</strong>
					<span>{stat.label}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.about {
		background: var(--mint);
	}

	.layout {
		display: grid;
		gap: 2rem;
		align-items: center;
	}

	.photo-wrap {
		position: relative;
		max-width: 22rem;
		margin: 0 auto;
	}

	.photo {
		overflow: hidden;
		aspect-ratio: 1;
		transform: rotate(-2deg);
	}

	.photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: contrast(1.05);
	}

	.float-a,
	.float-b {
		position: absolute;
	}

	.float-a {
		left: -0.6rem;
		bottom: 1.2rem;
	}

	.float-b {
		right: -0.4rem;
		top: 1rem;
	}

	.text h2 {
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.text p + p {
		margin-top: 0.85rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
		margin-top: 1.4rem;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
		margin-top: 2.5rem;
	}

	.stats li {
		padding: 1rem 0.9rem;
		background: var(--white);
	}

	.stats strong {
		display: block;
		font-family: var(--display);
		font-size: clamp(1.4rem, 4vw, 2rem);
		letter-spacing: -0.03em;
		margin-bottom: 0.25rem;
	}

	.stats span {
		font-size: 0.88rem;
		font-weight: 600;
	}

	@media (min-width: 800px) {
		.layout {
			grid-template-columns: minmax(16rem, 22rem) 1fr;
			gap: 3rem;
		}

		.photo-wrap {
			margin: 0;
		}

		.stats {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (max-width: 420px) {
		.float-b {
			display: none;
		}
	}
</style>
