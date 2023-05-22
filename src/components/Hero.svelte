<script lang="ts">
	import sparkles from '../assets/sparkles.svg'
	import Interactions from '../utils/interactions'
</script>

<section class="hero border-bottom">
	<div class="hero-container">
		<div class="hero-heading-image">
			<img src={sparkles} alt="sparkles" />
		</div>
		<h1 class="hero-heading">Knock, knock!</h1>
		<p class="hero-subheading">Who's there? A full-stack web developer!</p>
		<button class="shadow wobble" on:click={() => Interactions.click()}>Click me</button>
	</div>
</section>

<style>
	.hero {
		background-color: #fede65;
		width: 100%;
		height: 60vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15rem 2rem;
		position: relative;
	}

	.hero-container {
		max-width: 800px;
		text-align: left;
	}

	.hero-heading {
		color: #000000;
		font-size: 4rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.hero-subheading {
		color: #000000;
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 1.5rem;
	}

	.hero-heading-image {
		display: flex;
		justify-content: flex-end;
		margin-top: -4rem;
	}

	.hero-heading-image img {
		width: 7rem;
		margin-bottom: -2rem;
	}
</style>
