<script lang="ts">
	import { services } from '../data/site'
</script>

<section id="services" class="section">
	<div class="section-inner">
		<span class="kicker">What I actually do</span>
		<h2>Hire the human, not the slide.</h2>
		<p class="lede">
			If you need a person who can sit with a designer in the morning and a Java service in the
			afternoon, that is the product.
		</p>
		<div class="grid">
			{#each services as service}
				<article class="card">
					<span class="n">{service.kicker}</span>
					<h3>{service.title}</h3>
					<p>{service.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--coral);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.grid {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	article {
		padding: 1.25rem 1.15rem 1.4rem;
		background: var(--white);
	}

	.n {
		font-family: var(--display);
		font-size: 1.6rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	h3 {
		margin-bottom: 0.5rem;
	}

	@media (min-width: 800px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		article:nth-child(2),
		article:nth-child(3) {
			transform: translateY(0.6rem);
		}
	}
</style>
