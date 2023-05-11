<script>
	import Interactions from '../utils/interactions'

	export const experiences = [
		{
			company: 'Telia Company, Sweden',
			title: 'Development of Web Application and Flowchart GUI',
			year: '2022-2023',
			description: `As a team member of the UTURN-team in the NTS project for Telia, a leading telecommunications company in Sweden, I collaborated with a group of developers to create an application designed for managing companies, phone numbers, and their simple or complex configurations. The frontend was built using Angular, TypeScript, SCSS, MaterialUI, and I18, while the backend utilized Java and SpringBoot for a REST API, which interfaced with Telia's TCAS backend.
      \nDuring the project, I took the initiative to develop the visual Complex Configuration feature, enabling users to create complex configurations for a phone number using custom flowcharts through an intuitive, drag-and-drop GUI canvas. This innovative feature offered a variety of advanced modules with unique options, inputs, and logic for users to connect and customize their configurations.
      \nThroughout the project, our team followed the SCRUM methodology, conducting standups and operating in two-week sprints. My contributions to the frontend development and the Complex Configuration feature were instrumental in the overall success of the NTS project, ultimately elevating the user experience.`
		},
		{
			company: 'Ramax Mekaniska Verkstad AB, Sweden',
			title: 'Development and design of Website and Logo',
			year: '2019-2021',
			description: `As a freelance developer and designer, I was hired by Ramax AB, an industrial workshop that specializes in custom-made mechanical parts for clients such as the Swedish army and space companies. The company needed a complete overhaul of their outdated website, which was not responsive for mobile devices and did not meet their modern requirements.
      \nTo meet the client's tight two-week deadline and their need for a user-friendly portal, I chose to use Wordpress CMS for the project. I created the website design and logo from scratch, incorporating Ramax's brand colors and design language from previous decades.
      \nIn addition to the new design, I developed a user-friendly portal that allowed the client to update the website and add new information, such as news, machines, and employees, without external assistance. The project was successfully completed in time for the company's ISO certification deadline.
      \nI am proud to have provided Ramax AB with a modern, responsive website that improved their online presence and streamlined their operations.`
		},
		{
			company: 'Frigga Salong, Sweden',
			title: 'Development and design of Website, Booking System and logo',
			year: '2018-2020',
			description: `As a freelance developer and designer, I collaborated with Frigga Salong, a hair salon located in central Gothenburg, to rebrand and enhance their online presence. By creating a new website design and logo, I successfully increased their customer base by over 40% within a year.
      \nUtilizing Wordpress CMS, I enabled Frigga Salong to update their website with news and holiday hours seamlessly. Additionally, I developed a user-friendly booking system with calendar synchronization, allowing customers to conveniently schedule appointments and select their preferred employee. Both customers and assigned employees received email or SMS notifications upon booking confirmation.
      \nTo further optimize operations, I designed a login portal for the owner and employees to manage their schedules and appointments, synchronized with their Google calendars. I also focused on improving their SEO ranking, which led to Frigga Salong becoming the top-ranked search result for hair salons near Svingeln and Odinsplatsen, where they are located. This further contributed to their increased customer base and visibility.
      \nMy work with Frigga Salong not only modernized and professionalized their online presence, but also significantly improved their scheduling and booking processes.`
		},
		{
			company: 'BDDance, China',
			title: 'Development and Design of Web Shop for DanceSport Footwear',
			year: '2018',
			description: `As one of the largest and fastest-growing dance sport footwear manufacturers in the world, based in China, BDDance needed an efficient and professional online platform to expand their reach and facilitate sales to international customers. Previously relying on instant messaging applications and social media for sales, they sought a more streamlined and sophisticated solution for their global clientele.
      \nTo ensure that BDDance could independently manage and update their web shop, I leveraged my prior experience with the Wordpress CMS to build the online store using WooCommerce, complete with a MySQL database. As BDDance already had an established design profile and logotype, I incorporated these elements into the website design, while also adding various forms of visual media, such as videos and photographs of renowned athletes using their shoes in action. This multimedia approach aimed to captivate potential customers and showcase the performance of BDDance's products.
      \nBy developing and designing a comprehensive and visually engaging web shop for BDDance, I provided them with a professional and user-friendly platform, enabling them to reach a broader international audience and streamline their sales process outside of China.`
		}
	]

	function onExpandClick(event) {
		Interactions.click()

		const descriptionWrapper = event.target.parentNode.querySelector('.experience-description-wrapper')
		const expandBtn = event.target
		if (descriptionWrapper.classList.toggle('expanded')) {
			expandBtn.textContent = 'Minimize'
		} else {
			expandBtn.textContent = 'Read more'
		}
	}
</script>

<div class="work-experience" style="background-color: #CEEADD;">
	<h2>Work Experience</h2>
	{#each experiences as experience}
		<div class="experience-item shadow">
			<div class="experience-header">
				<div class="experience-header-left">
					<h6 class="experience-company">{experience.company}</h6>
					<h5 class="experience-title">{experience.title}</h5>
				</div>
				<div class="experience-header-right">
					<p class="experience-year">{experience.year}</p>
				</div>
			</div>
			<div class:expanded={false} class="experience-description-wrapper">
				<p class="experience-description">{@html experience.description.replace(/\n/g, '<br>')}</p>
			</div>
			<button class="expand-btn" on:click={onExpandClick}>Read more</button>
		</div>
	{/each}
</div>

<style>
	.work-experience {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem;
		gap: 1rem;
	}

	.work-experience h2 {
		margin-bottom: 2rem;
	}

	.experience-item {
		max-width: 1000px;
		padding: 2rem;
		margin-bottom: 2rem;
		background: #ffffff;
		overflow: hidden;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.experience-header .experience-title {
		margin: 0;
		font-size: 1.4rem;
		font-weight: 700;
	}

	.experience-header .experience-year {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.experience-item h6 {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.experience-description-wrapper {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
		margin-bottom: 1.5rem;
	}

	.experience-description-wrapper.expanded {
		max-height: 1000px;
		overflow: visible;
		opacity: 1;
		transition: max-height 1s ease-in-out, opacity 1s ease-in-out;
	}

	.experience-item p.experience-description {
		font-size: 1.2rem;
		line-height: 1.5;
	}
</style>
