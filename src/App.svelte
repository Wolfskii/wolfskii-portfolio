<script lang="ts">
	import Header from './components/Header.svelte'
	import Hero from './components/Hero.svelte'
	import Marquee from './components/Marquee.svelte'
	import AboutMe from './components/AboutMe.svelte'
	import NowBuilding from './components/NowBuilding.svelte'
	import Projects from './components/Projects.svelte'
	import Skills from './components/Skills.svelte'
	import WorkExperience from './components/WorkExperience.svelte'
	import Services from './components/Services.svelte'
	import Process from './components/Process.svelte'
	import FunFacts from './components/FunFacts.svelte'
	import Contact from './components/Contact.svelte'
	import Footer from './components/Footer.svelte'
	import CtaBanner from './components/CtaBanner.svelte'
	import DayNight from './components/DayNight.svelte'
	import Faq from './components/Faq.svelte'
	import Rules from './components/Rules.svelte'
	import Toolbox from './components/Toolbox.svelte'
	import Terminal from './components/Terminal.svelte'
	import Stamps from './components/Stamps.svelte'
	import Compare from './components/Compare.svelte'
	import Availability from './components/Availability.svelte'
	import Quote from './components/Quote.svelte'
	import Dock from './components/Dock.svelte'
	import Progress from './components/Progress.svelte'
	import Tape from './components/Tape.svelte'
	import CharacterSheet from './components/CharacterSheet.svelte'
	import Timeline from './components/Timeline.svelte'
	import Receipt from './components/Receipt.svelte'
	import Colophon from './components/Colophon.svelte'
	import IdMap from './components/IdMap.svelte'
	import Wanted from './components/Wanted.svelte'
	import Easter from './components/Easter.svelte'
</script>

<Progress />
<a class="skip-link" href="#main">Skip to content</a>
<Header />

<main id="main">
	<Hero />
	<Tape />
	<Marquee />
	<AboutMe />
	<DayNight />
	<Marquee reverse tone="coral" />
	<NowBuilding />
	<CtaBanner
		text="Need a developer who can talk to designers and Java backends in the same sprint?"
		cta="I’m that person"
	/>
	<Projects />
	<Toolbox />
	<Skills />
	<CharacterSheet />
	<WorkExperience />
	<Timeline />
	<CtaBanner
		tone="pink"
		text="Got a dance school, a telco form, or a game that wants a pulse?"
		cta="Start a plot"
	/>
	<Services />
	<Process />
	<Rules />
	<Stamps />
	<Compare />
	<Quote text="Thick borders. Working software. Bad stock photos: banned." />
	<Wanted />
	<Terminal />
	<FunFacts />
	<IdMap />
	<Faq />
	<Availability />
	<Tape flip />
	<Receipt />
	<Contact />
	<Colophon />
</main>

<Footer />
<Dock />
<Easter />
