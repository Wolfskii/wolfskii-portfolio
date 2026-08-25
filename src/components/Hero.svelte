<script lang="ts">
	import sparkles from '../assets/sparkles.svg'
	import Interactions from '../utils/interactions'

	const lines = [
		"Who's there? A fullstack developer with production scars.",
		"Who's there? Angular by day. Indie games by night.",
		"Who's there? The guy who named the homelab after a world tree.",
		"Who's there? Thick borders. Working software. Bad stock photos: banned.",
		"Who's there? WordPress when the client should own the keys. Rust when the data should.",
		"Who's there? CET. Same-day replies. Dragons in production first."
	]

	let index = 0

	function cycleLine() {
		Interactions.click()
		index = (index + 1) % lines.length
	}

	function ping() {
		Interactions.click()
	}
</script>

<section id="start" class="hero">
	<div class="hero-grid">
		<div class="copy">
			<div class="row">
				<span class="kicker">Gothenburg · Knightec · Webble</span>
				<span class="stamp" style="--r: 8deg; --c: var(--mint)">Available for fun</span>
			</div>
			<div class="sparkle-wrap">
				<img src={sparkles} alt="" />
			</div>
			<h1>Knock, knock.</h1>
			<p class="punch">{lines[index]}</p>
			<p class="lede">
				I’m Dawid. I ship Telia-scale Unified Communications software for a living, and games, health
				tools, and dance software because weekends exist. This page is neo-brutalist on purpose.
			</p>
			<div class="actions">
				<a class="btn" href="#projects" on:click={ping}>See the receipts</a>
				<a class="btn btn-white" href="#contact" on:click={ping}>Say hi anyway</a>
				<button class="btn btn-ghost" type="button" on:click={cycleLine}>Another punchline →</button>
			</div>
			<ul class="pills">
				<li>TypeScript</li>
				<li>Angular / Java</li>
				<li>Go + Rust</li>
				<li>Svelte</li>
				<li>C# games</li>
			</ul>
		</div>
		<aside class="poster card">
			<p class="poster-kicker">NOW PLAYING</p>
			<h2>Fullstack, but make it bite.</h2>
			<ul>
				<li><strong>Day job</strong> Knightec specialist on Telia ServiceHub</li>
				<li><strong>Company</strong> Webble — sites, booking, backups</li>
				<li><strong>Side quests</strong> Deathborn, Healthii, AdventurePhones</li>
			</ul>
			<div class="poster-stamps">
				<span class="stamp" style="--r: -8deg; --c: var(--coral)">No fluff</span>
				<span class="stamp" style="--r: 6deg; --c: var(--yellow)">Est. 2018</span>
			</div>
		</aside>
	</div>
</section>

<style>
	.hero {
		background: var(--yellow);
		border-bottom: var(--border);
		padding: clamp(2.5rem, 7vw, 5.5rem) clamp(1rem, 4vw, 3.25rem);
		overflow: hidden;
	}

	.hero-grid {
		max-width: var(--max);
		margin: 0 auto;
		display: grid;
		gap: 2rem;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
	}

	.sparkle-wrap {
		display: flex;
		justify-content: flex-end;
		margin: 0.25rem 0 -0.5rem;
	}

	.sparkle-wrap img {
		width: min(5.5rem, 22vw);
		transform: rotate(12deg);
	}

	h1 {
		filter: drop-shadow(4px 4px 0 var(--coral));
	}

	.punch {
		margin: 0.85rem 0 0;
		font-size: clamp(1.15rem, 3vw, 1.7rem);
		font-weight: 700;
		max-width: 38rem;
	}

	.lede {
		margin-top: 1rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.6rem;
	}

	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-top: 1.6rem;
	}

	.pills li {
		border: 2px solid var(--ink);
		background: var(--white);
		padding: 0.28rem 0.55rem;
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.poster {
		padding: 1.35rem 1.25rem 1.5rem;
		background: var(--white);
		transform: rotate(-1.5deg);
	}

	.poster-kicker {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		margin-bottom: 0.6rem;
	}

	.poster h2 {
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		margin-bottom: 1rem;
		filter: drop-shadow(3px 3px 0 var(--yellow));
	}

	.poster li {
		padding: 0.65rem 0;
		border-top: 2px solid var(--ink);
		font-size: 0.98rem;
	}

	.poster strong {
		display: block;
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 0.15rem;
	}

	.poster-stamps {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin-top: 1.2rem;
	}

	@media (min-width: 900px) {
		.hero-grid {
			grid-template-columns: 1.35fr 0.85fr;
			align-items: center;
			gap: 3rem;
		}

		.poster {
			transform: rotate(2deg);
		}
	}
</style>
