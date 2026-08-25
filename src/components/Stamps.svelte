<script lang="ts">
	import { clientStamps, languages } from '../data/site'
</script>

<section id="stamps" class="section">
	<div class="section-inner">
		<span class="kicker">Passport</span>
		<h2>Stamps collected.</h2>
		<p class="lede">
			Clients, a company, and three languages. None of them are stock photos of a handshake.
		</p>
		<ul class="wall">
			{#each clientStamps as stamp, i}
				<li class="card" style="--r: {(i % 2 === 0 ? -1 : 1) * (4 + (i % 3))}deg; --c: {stamp.color}">
					<strong>{stamp.name}</strong>
					<span>{stamp.note}</span>
				</li>
			{/each}
		</ul>
		<ul class="langs">
			{#each languages as lang}
				<li class="card">
					<p class="lv">{lang.level}</p>
					<h3>{lang.name}</h3>
					<p>{lang.note}</p>
				</li>
			{/each}
		</ul>
		<p class="school">
			Also: Webbprogrammering at Linnéuniversitetet, 2018. The degree was the on-ramp. The thick
			borders were a lifestyle choice.
		</p>
	</div>
</section>

<style>
	.section {
		background: var(--gold);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--white));
	}

	.wall {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
		margin: 2rem 0 2.2rem;
	}

	.wall li {
		padding: 1.1rem 0.9rem;
		background: var(--c);
		transform: rotate(var(--r));
		text-align: center;
	}

	.wall strong {
		display: block;
		font-family: var(--display);
		font-size: clamp(1.2rem, 4vw, 1.8rem);
		letter-spacing: -0.03em;
		margin-bottom: 0.25rem;
	}

	.langs {
		display: grid;
		gap: 0.8rem;
	}

	.langs li {
		padding: 1.1rem 1rem 1.2rem;
		background: var(--white);
	}

	.lv {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 0.35rem;
	}

	.school {
		margin-top: 1.2rem;
		font-weight: 600;
		max-width: 40rem;
	}

	@media (min-width: 720px) {
		.wall {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.langs {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
