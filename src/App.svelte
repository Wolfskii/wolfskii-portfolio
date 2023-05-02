<script lang="ts">
	import Hero from './components/Hero.svelte';
  import Header from './components/Header.svelte';
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import ClientLogos from './components/ClientLogos.svelte'
   import AboutMe from './components/AboutMe.svelte'
  import Projects from './components/Projects.svelte'
</script>

<Header></Header>

<main>
  <Hero></Hero>
  <ClientLogos></ClientLogos>
  <AboutMe></AboutMe>
  <Projects></Projects>
</main>

<style>
</style>
