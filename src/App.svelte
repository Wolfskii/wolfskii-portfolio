<script lang="ts">
	import Hero from './components/Hero.svelte'
	import Header from './components/Header.svelte'
	import svelteLogo from './assets/svelte.svg'
	import viteLogo from '/vite.svg'
	import ClientLogos from './components/ClientLogos.svelte'
	import AboutMe from './components/AboutMe.svelte'
	import Projects from './components/Projects.svelte'
	import WorkExperience from './components/WorkExperience.svelte'
	import Footer from './components/Footer.svelte'
</script>

<Header />

<main>
	<Hero />
	<ClientLogos />
	<AboutMe />
	<Projects />
	<WorkExperience />
	<Footer />
</main>

<style>
</style>
