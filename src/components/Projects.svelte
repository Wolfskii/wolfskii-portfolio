<script lang="ts">
	import Interactions from '../utils/interactions'
	import { projects, labChips, type Project } from '../data/site'

	const filters = ['All', 'Games', 'Products', 'Client', 'Lab'] as const
	let filter: (typeof filters)[number] = 'All'

	$: visible = projects.filter((p) => filter === 'All' || p.category === filter)

	function setFilter(next: (typeof filters)[number]) {
		Interactions.click()
		filter = next
	}

	function ping() {
		Interactions.click()
	}

	function cardStyle(project: Project) {
		return `background: ${project.color}`
	}
</script>

<section id="projects" class="section">
	<div class="section-inner">
		<span class="kicker">Selected work</span>
		<h2>Receipts, not vibes.</h2>
		<p class="lede">
			A mix of games, products, client sites, and lab experiments. Some are loud. Some just work on
			a Tuesday. All of them had to leave my machine.
		</p>

		<div class="filters" role="tablist" aria-label="Filter projects">
			{#each filters as item}
				<button
					class="chip"
					class:active={filter === item}
					type="button"
					on:click={() => setFilter(item)}
				>
					{item}
				</button>
			{/each}
		</div>

		<div class="grid">
			{#each visible as project (project.name)}
				<article class="project card">
					<div class="thumb" style={cardStyle(project)}>
						<span class="mark">{project.mark}</span>
						<span class="cat">{project.category}</span>
					</div>
					<div class="body">
						<h3>{project.name}</h3>
						<p>{project.blurb}</p>
						<ul class="tags">
							{#each project.tags as tag}
								<li>{tag}</li>
							{/each}
						</ul>
						<div class="links">
							{#if project.live}
								<a class="btn" href={project.live} target="_blank" rel="noreferrer" on:click={ping}
									>{project.cta}</a
								>
							{/if}
							{#if project.repo}
								<a
									class="btn"
									class:btn-white={Boolean(project.live)}
									href={project.repo}
									target="_blank"
									rel="noreferrer"
									on:click={ping}>{project.live ? 'Repo' : project.cta}</a
								>
							{/if}
							{#if !project.live && !project.repo}
								<span class="soon">{project.cta} · soon</span>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="lab">
			<h3>Also on the bench</h3>
			<p>Smaller, weirder, or still growing a spine.</p>
			<ul>
				{#each labChips as chip}
					<li>
						<a class="card" href={chip.href} target="_blank" rel="noreferrer" on:click={ping}>
							<strong>{chip.name}</strong>
							<span>{chip.note}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--white);
	}

	h2 {
		filter: drop-shadow(3px 3px 0 var(--gold));
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1.6rem 0 1.8rem;
	}

	.chip {
		border: var(--border);
		border-radius: 999px;
		padding: 0.4rem 0.85rem;
		font-weight: 700;
		font-size: 0.85rem;
		background: var(--paper);
		box-shadow: 3px 3px 0 var(--ink);
	}

	.chip.active {
		background: var(--coral);
	}

	.grid {
		display: grid;
		gap: 1.15rem;
	}

	.project {
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.thumb {
		min-height: 8.5rem;
		padding: 1rem 1.1rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		border-bottom: var(--border);
	}

	.mark {
		font-family: var(--display);
		font-size: clamp(2.4rem, 8vw, 3.4rem);
		line-height: 0.8;
		letter-spacing: -0.04em;
	}

	.cat {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		background: var(--ink);
		color: var(--white);
		padding: 0.25rem 0.45rem;
	}

	.body {
		padding: 1.1rem 1.1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		flex: 1;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.tags li {
		font-size: 0.72rem;
		font-weight: 700;
		border: 2px solid var(--ink);
		padding: 0.15rem 0.4rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	.links .btn {
		padding: 0.55rem 0.85rem;
		font-size: 0.85rem;
	}

	.soon {
		font-size: 0.85rem;
		font-weight: 700;
	}

	.lab {
		margin-top: 3rem;
	}

	.lab h3 {
		margin-bottom: 0.35rem;
	}

	.lab > p {
		margin-bottom: 1rem;
	}

	.lab ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.7rem;
	}

	.lab a {
		display: block;
		padding: 0.85rem 0.8rem;
		background: var(--paper);
		height: 100%;
	}

	.lab strong {
		display: block;
		font-size: 0.95rem;
		margin-bottom: 0.2rem;
	}

	.lab span {
		font-size: 0.8rem;
	}

	@media (min-width: 720px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.lab ul {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (max-width: 419px) {
		.lab ul {
			grid-template-columns: 1fr;
		}
	}
</style>
