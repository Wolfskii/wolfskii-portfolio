export const profile = {
	name: 'Dawid Kaleta',
	handle: 'Wolfskii',
	role: 'Fullstack developer',
	city: 'Gothenburg, Sweden',
	email: 'dawid.kaleta@outlook.com',
	emailHref: 'mailto:dawid.kaleta@outlook.com',
	github: 'https://github.com/Wolfskii',
	linkedin: 'https://linkedin.com/in/dawid-kaleta',
	webble: 'https://webble.se',
	site: 'https://wolfskii.dev'
}

export const navLinks = [
	{ label: 'Start', href: '#start' },
	{ label: 'About', href: '#about' },
	{ label: 'Work', href: '#projects' },
	{ label: 'XP', href: '#experience' },
	{ label: 'Hire me', href: '#contact' }
]

export const marqueeItems = [
	'Telia-scale Angular',
	'Knightec specialist',
	'Webble since 2018',
	'Go backends',
	'Rust when it matters',
	'Svelte for the fun ones',
	'C# + MonoGame',
	'WordPress that clients can actually edit',
	'Home lab named Yggdrasil',
	'No laptop-on-a-desk stock photos',
	'Thick borders, thin excuses',
	'Gothenburg, not Stockholm, on purpose'
]

export const stats = [
	{ value: '2018', label: 'Webble founded' },
	{ value: '2022', label: 'Knightec / Telia' },
	{ value: 'Day + night', label: 'Enterprise & indie' },
	{ value: 'GBG', label: 'Sweden' }
]

export const nowItems = [
	{
		status: 'SHIPPING',
		title: 'Deathborn',
		detail: 'Permadeath sandbox MMORPG. MonoGame client, Go server, one life, no take-backs.'
	},
	{
		status: 'BUILDING',
		title: 'Healthii',
		detail: 'Privacy-first health OS. Rust API, web + desktop + phone. Not a step counter in a hoodie.'
	},
	{
		status: 'PLAYING',
		title: 'AdventurePhones',
		detail: 'Jackbox-style D&D. TV is the dungeon master. Phones are the party. 3D dice, because of course.'
	},
	{
		status: 'HUMMING',
		title: 'Yggdrasil',
		detail: 'Homelab: VoxWeaver TTS, queues, DNS that follows the public IP, and too many containers.'
	}
]

export type Project = {
	name: string
	blurb: string
	tags: string[]
	category: 'Games' | 'Products' | 'Client' | 'Lab'
	color: string
	mark: string
	live?: string
	repo?: string
	cta: string
}

export const projects: Project[] = [
	{
		name: 'Deathborn',
		blurb: 'You are born to die. Only skill decides when. Authoritative Go server, C# MonoGame client, full-loot PvP energy.',
		tags: ['C#', 'Go', 'PostgreSQL', 'WebSocket'],
		category: 'Games',
		color: '#ff7051',
		mark: '01',
		repo: 'https://github.com/Wolfskii/Deathborn',
		cta: 'Loot the repo'
	},
	{
		name: 'AdventurePhones',
		blurb: 'Multiplayer dungeon crawl for a living room. Host on the big screen, friends join from the sofa. Combat, towns, merchants, cloned-voice narration.',
		tags: ['React', 'Socket.IO', 'TypeScript'],
		category: 'Games',
		color: '#fede65',
		mark: '02',
		repo: 'https://github.com/Webble-SE/AdventurePhones',
		cta: 'Roll a d20'
	},
	{
		name: 'Healthii',
		blurb: 'Your entire health history in one private place. Labs, meds, workouts, documents. Rust in the basement, React everywhere else.',
		tags: ['Rust', 'React', 'Tauri', 'Postgres'],
		category: 'Products',
		color: '#ceeadd',
		mark: '03',
		repo: 'https://github.com/Wolfskii/healthii',
		cta: 'Open the chart'
	},
	{
		name: 'Zen-Zei',
		blurb: 'Glassmorphism mixer for rain, ASMR, and loops you will leave on for seven hours. Vote the good ones. Ignore the rest.',
		tags: ['SvelteKit', 'Postgres', 'Docker'],
		category: 'Products',
		color: '#7df9ff',
		mark: '04',
		live: 'https://wolfskii.github.io/zen-zei/',
		repo: 'https://github.com/Wolfskii/zen-zei',
		cta: 'Start a mix'
	},
	{
		name: 'Stepify',
		blurb: 'Desktop player for ballroom & latin practice. Tempo stretch that keeps pitch, dance categories, loudness leveling. Built for studios, not Spotify mood boards.',
		tags: ['Electron', 'Svelte', 'Web Audio'],
		category: 'Products',
		color: '#ff90e8',
		mark: '05',
		repo: 'https://github.com/Wolfskii/Stepify',
		cta: 'Cue the rumba'
	},
	{
		name: 'BeachGuard',
		blurb: 'Anti-theft alarm for the bag you left while swimming. Motion, light, GPS, Bluetooth, charger. Pre-alarm so your friend does not become the siren.',
		tags: ['Flutter', 'Android', 'iOS'],
		category: 'Products',
		color: '#b8ff3c',
		mark: '06',
		cta: 'Arm the bag'
	},
	{
		name: 'Bookii',
		blurb: 'WordPress booking plugin from Webble. Calendars, reminders, Stripe if you must. Made so salon owners do not have to learn PHP.',
		tags: ['WordPress', 'PHP', 'Stripe'],
		category: 'Client',
		color: '#ffc700',
		mark: '07',
		live: 'https://webble.se',
		cta: 'Book a slot'
	},
	{
		name: 'AstroDeck',
		blurb: 'Context-aware control deck for a touchscreen on the side of your desk. Sees which app is focused. Changes the buttons. Tauri + Rust, because why not.',
		tags: ['Tauri', 'Rust', 'Svelte'],
		category: 'Lab',
		color: '#c4b5fd',
		mark: '08',
		repo: 'https://github.com/Wolfskii/AstroDeck',
		cta: 'Press the big buttons'
	},
	{
		name: "Lázárs Dansstudio",
		blurb: 'Gothenburg dance school since 1953. Custom WordPress theme, deploy pipelines, and a site that still looks like it belongs on a real street.',
		tags: ['WordPress', 'SCSS', 'CI/CD'],
		category: 'Client',
		color: '#ff7051',
		mark: '09',
		live: 'https://lazar.se',
		cta: 'Take a class'
	},
	{
		name: 'StonksGPT',
		blurb: 'Daily long-term buy/sell/hold notes from market data, news, and the conspiracy theories you typed in the notes field. Memory lives in Postgres, not vibes.',
		tags: ['Svelte', 'Node', 'AI'],
		category: 'Lab',
		color: '#fede65',
		mark: '10',
		repo: 'https://github.com/Wolfskii/StonksGPT',
		cta: 'Hold, probably'
	}
]

export const labChips = [
	{ name: 'Lunchie', href: 'https://lunch.wolfskii.dev/', note: 'CityGate lunch scrape' },
	{ name: 'WP-BackupKit', href: 'https://webble.se', note: 'WordPress backup/restore' },
	{ name: 'DanceMatcher', href: 'https://github.com/Wolfskii', note: 'Ballroom Tinder, but useful' },
	{ name: 'Kalorikoll', href: 'https://github.com/Wolfskii', note: 'Swedish calorie tracker' },
	{ name: 'VoxWeaver', href: 'https://voxweaver.wolfskii.dev', note: 'Cloned-voice TTS' },
	{ name: 'RK Photo', href: 'https://rk-photo.se', note: 'Photography platform' },
	{ name: 'MirrorMe', href: 'https://github.com/Wolfskii', note: 'AI styling assistant' },
	{ name: 'Drink Drank Drunk', href: 'https://github.com/Wolfskii', note: 'Discord party game' }
]

export const skillGroups = [
	{
		title: 'Languages I will actually use',
		items: ['TypeScript', 'Java', 'Go', 'Rust', 'C#', 'PHP', 'SQL', 'SCSS']
	},
	{
		title: 'Frontends that survive design review',
		items: ['Angular', 'Svelte / SvelteKit', 'React', 'Next.js', 'WordPress']
	},
	{
		title: 'Backends, games & glue',
		items: ['Spring Boot', 'Node', 'Postgres', 'Socket.IO', 'MonoGame', 'Docker', 'GitHub Actions']
	}
]

export type Experience = {
	company: string
	title: string
	year: string
	location: string
	description: string
}

export const experiences: Experience[] = [
	{
		company: 'Knightec Group',
		title: 'Fullstack developer / Specialist — Telia UC ServiceHub',
		year: '2022 — now',
		location: 'Gothenburg',
		description: `Days look like this: Angular, TypeScript, Java, Spring Boot, and the occasional Go service, on Telia's Unified Communications platform.\n\nOn NTS I helped operators manage companies, numbers, and routing. I also built the Complex Configuration canvas — drag-and-drop flowcharts for phone-number logic that used to live in a 40-page wiki nobody wanted to read. On MI and related ServiceHub apps the stack is Angular 18, Java 21, two-week sprints, standups, and software that has to work when a real customer is on the line.\n\nKnightec is the consulting home. Telia is the arena. Scrum is the sport. I still like it.`
	},
	{
		company: 'Webble',
		title: 'Owner — web agency, products, and odd commissions',
		year: '2018 — now',
		location: 'Gothenburg',
		description: `Webble is my company: sites that clients can edit, booking systems that actually send the SMS, backups that restore, and the occasional dance-school rebrand.\n\nThe pitch has not changed since 2018. Great websites should not require a second mortgage. WordPress when it is the right hammer. Custom apps when it is not. Bookii, WP-BackupKit, Lázárs Dansstudio, photography platforms, and a long trail of small businesses who still email me like I am their IT department. I am. Sort of.`
	},
	{
		company: 'Ramax Mekaniska Verkstad AB',
		title: 'Website, CMS, and logo — two weeks, ISO deadline',
		year: '2019 — 2021',
		location: 'Sweden',
		description: `Industrial workshop making custom mechanical parts for, among others, the Swedish army and space companies. Their site was stuck in a previous decade and not mobile. They needed a portal they could update themselves, a logo that respected the old brand colors, and all of it before an ISO certification date.\n\nWordPress, custom design, news/machines/employees they could publish without calling me every Thursday. Shipped on time. The ISO people did not have to look at a 2009 table layout. Everyone won.`
	},
	{
		company: 'Frigga Salong',
		title: 'Website, booking system, and SEO that actually moved the needle',
		year: '2018 — 2020',
		location: 'Gothenburg',
		description: `Hair salon at Svingeln / Odinsplatsen. New site, new logo, booking with calendar sync, SMS/email confirmations, and a staff portal tied to Google Calendar.\n\nCustomer base jumped over 40% in a year. They became the top result for nearby salon searches — not because of a 12-slide SEO strategy deck, because the pages were fast, local, and not written by a keyword blender. Wordpress CMS so they could post holiday hours without a developer stand-up.`
	},
	{
		company: 'BDDance',
		title: 'International web shop for dancesport footwear',
		year: '2018',
		location: 'China / worldwide',
		description: `One of the larger dancesport shoe manufacturers wanted to stop selling world-class footwear over chat apps. I built a WooCommerce shop they could run themselves: catalog, media of athletes in the shoes, MySQL, the unglamorous checkout path that has to work in more than one timezone.\n\nThey already had a brand. I did not invent a new one. I gave it a storefront that did not look like a Facebook inbox.`
	}
]

export const services = [
	{
		kicker: '01',
		title: 'Enterprise fullstack',
		text: 'Angular + Java (and Go when the monolith needs a friend). Telco-grade forms, auth, jobs, and UIs operators will not mutiny over.'
	},
	{
		kicker: '02',
		title: 'Products from zero',
		text: 'Games, health tools, booking, dashboards. Thin vertical slice first, polish second, tweet never.'
	},
	{
		kicker: '03',
		title: 'Sites people can edit',
		text: 'WordPress, custom themes, booking, backups. You get the keys. I do not hold your content hostage.'
	},
	{
		kicker: '04',
		title: 'Realtime & weird',
		text: 'WebSockets, dice on a TV, TTS from a homelab, touch decks, Discord activities. If it needs a pulse, I can wire it.'
	}
]

export const processSteps = [
	{
		n: '01',
		title: 'Listen like a wolf',
		text: 'What is actually broken, who is afraid of it, and which deadline is real. I take notes. I do not start in Figma out of panic.'
	},
	{
		n: '02',
		title: 'Ship a mean slice',
		text: 'One path that works in production. Not a prototype graveyard. Not a 40-page architecture novel.'
	},
	{
		n: '03',
		title: 'Make it boringly solid',
		text: 'Tests where they pay rent, CI that is not a prayer, mobile that does not require landscape and tears.'
	},
	{
		n: '04',
		title: 'Hand over the keys',
		text: 'Docs, deploy, a joke in the README. Then I am reachable, not a mysterious vendor in the fog.'
	}
]

export const nightMarquee = [
	'Deathborn never sleeps',
	'Healthii keeps the charts',
	'AdventurePhones needs another d20',
	'Yggdrasil wants one more container',
	'Stepify stretching BPM at 23:47',
	'Click sounds are load-bearing',
	'Borders: 3px, non-negotiable',
	'No, I will not join a 40-person Slack about padding'
]

export const dayShift = {
	title: 'Day shift',
	kicker: 'Knightec × Telia',
	lines: [
		'Angular 18 and Java 21 that operators actually click.',
		'Number translation, service hubs, flowcharts instead of folklore.',
		'Standups, two-week sprints, Jira archaeology included.',
		'The software has to work when a real customer is on the line.'
	]
}

export const nightShift = {
	title: 'Night shift',
	kicker: 'Webble × the lab',
	lines: [
		'Games, health OS, dance tools, Discord activities.',
		'Go servers, Rust APIs, Svelte UIs, a homelab named Yggdrasil.',
		'Products that start as a thin slice and refuse to stay a demo.',
		'The software has to work when the Wi-Fi at the dance school dies.'
	]
}

export const faqItems = [
	{
		q: 'Are you available, or is this a museum?',
		a: 'Days are Knightec / Telia. Evenings and weekends are Webble, games, and the weird stuff. If the plot is good I will make room. If the plot is “we need a ninja rockstar by Friday”, I will send a stamp that says NO.'
	},
	{
		q: 'Do you only do WordPress?',
		a: 'I do WordPress when a business should own its site. I also do Angular, Java, Go, Rust, Svelte, C#, Flutter, and WebSockets. The tool follows the problem. The problem does not follow a blog post from 2019.'
	},
	{
		q: 'Remote?',
		a: 'Gothenburg, CET. Remote is fine. On-site in town is fine. A six-hour standup about a 4px gap is not fine.'
	},
	{
		q: 'Can you join our 14-person Slack about a button color?',
		a: 'I can join a channel that decides things. I will not live in a thread that is allergic to decisions. Send the Figma, the deadline, and who actually signs.'
	},
	{
		q: 'Why is this site yelling?',
		a: 'Neo-brutalism. Thick borders so you cannot pretend the interface is shy. The copy is a person, not a brand deck that went to finishing school.'
	},
	{
		q: 'Do you do AI?',
		a: 'Yes, as a tool with a job: StonksGPT, MirrorMe, cloned-voice TTS on Yggdrasil. No, I will not wrap someone else’s API in a landing page and call it a company.'
	},
	{
		q: 'What do you charge?',
		a: 'Depends on the animal. A salon booking plugin is not a telco canvas. Write the plot, the deadline, and whether you need a specialist or a studio. I will be honest before anyone opens Excel.'
	},
	{
		q: 'Can you talk about Telia internals?',
		a: 'No. High-level stack and the kind of problems, yes. Secrets, tickets, and anything that would make a security person twitch, no. That is the point of being a specialist, not a leak.'
	}
]

export const wills = [
	'Ship a thin slice that works in production.',
	'Pick the boring tool when it ships, the sharp one when it must.',
	'Hand over keys, docs, and a deploy that is not a ritual.',
	'Make it work on a phone without landscape and tears.',
	'Tell you when the idea is a trap, before the invoice is a novel.'
]

export const wonts = [
	'Hold a CMS hostage so you have to call me every Thursday.',
	'A six-month discovery workshop with no software at the end.',
	'Crypto, gambling, or “it’s like Uber but for vibes”.',
	'Pixel-perfect on IE11. It is 2026. We buried that horse.',
	'A 40-page architecture PDF that nobody implements.'
]

export const toolbox = [
	{ name: 'TypeScript', note: 'Daily driver. Types that argue so humans don’t have to.' },
	{ name: 'Angular', note: 'Enterprise forms, i18n, and operators who do not care about your blog.' },
	{ name: 'Java / Spring', note: 'The telco basement. Jobs, auth, REST, two-week sprints.' },
	{ name: 'Go', note: 'When the server should be boring, fast, and honest.' },
	{ name: 'Rust', note: 'Healthii’s spine. The compiler is mean. That is the point.' },
	{ name: 'Svelte', note: 'This site. Stepify. Zen-Zei. Less runtime, more shipping.' },
	{ name: 'C# / MonoGame', note: 'Deathborn. Full-loot opinions. No scene editor required.' },
	{ name: 'React', note: 'When the room already speaks React. I am not precious.' },
	{ name: 'WordPress', note: 'Clients edit on a Tuesday. I sleep on a Tuesday.' },
	{ name: 'Postgres', note: 'Memory that survives a redeploy. Unlike vibes.' },
	{ name: 'Docker', note: 'Yggdrasil has too many containers. I remain the suspect.' },
	{ name: 'Socket.IO', note: 'Dice on a TV. Phones in the sofa. A pulse.' }
]

export const clientStamps = [
	{ name: 'Telia', note: 'UC ServiceHub', color: 'var(--yellow)' },
	{ name: 'Knightec', note: 'Home base', color: 'var(--coral)' },
	{ name: 'Webble', note: 'My company', color: 'var(--mint)' },
	{ name: 'Lázárs', note: 'Dance school', color: 'var(--cyan)' },
	{ name: 'Ramax', note: 'Industry', color: 'var(--lime)' },
	{ name: 'Frigga', note: 'Salon', color: 'var(--pink)' },
	{ name: 'BDDance', note: 'Footwear', color: 'var(--gold)' },
	{ name: 'RK Photo', note: 'Photography', color: 'var(--violet)' }
]

export const languages = [
	{ name: 'Swedish', level: 'Daily', note: 'Standups, clients, complaints about the weather.' },
	{ name: 'English', level: 'Work', note: 'Code, docs, and the internet’s default setting.' },
	{ name: 'Polish', level: 'Family', note: 'Enough to argue about food. CSS is language-agnostic.' }
]

export const terminalLines = [
	'$ whoami',
	'dawid@gothenburg — fullstack, specialist, stubborn wolf',
	'$ uptime',
	'since 2018, still compiling, 0 unpaid invoices in production',
	'$ cat ./now',
	'Deathborn, Healthii, AdventurePhones, Yggdrasil',
	'$ grep -i fluff ./portfolio',
	'(no matches)',
	'$ sudo make tea',
	'password: ••••••  →  kettle: OK'
]

export const compareRows = [
	{ label: 'Reply', me: 'Same day, CET', them: 'Let’s circle back Q3' },
	{ label: 'Borders', me: '3px, load-bearing', them: '0px and a soft gradient' },
	{ label: 'CMS keys', me: 'Yours', them: 'In a PDF nobody can open' },
	{ label: 'First ship', me: 'A slice that works', them: 'A workshop about workshops' },
	{ label: 'Stack religion', me: 'The problem picks', them: 'Whatever was on Hacker News' },
	{ label: 'Aftercare', me: 'Docs + deploy + a joke', them: 'A Slack ghost' }
]

export const funFacts = [
	{
		title: 'The nickname',
		text: 'Wolfskii. Yes, like a wolf. No, I will not howl on sales calls. Maybe on a good deploy.'
	},
	{
		title: 'The day job',
		text: 'Consultant at Knightec Group. I help Telia keep Unified Communications software in the land of the living.'
	},
	{
		title: 'The night job',
		text: 'Indie games, health apps, dance tools, and a server rack named after Norse mythology because of course it is.'
	},
	{
		title: 'The dance thing',
		text: 'I keep building for dancers: Stepify, DanceMatcher, Lázárs, BDDance. The floor does not lie. Neither should the software.'
	},
	{
		title: 'The stack mood',
		text: 'TypeScript is the daily driver. Go and Rust when I want the compiler to be honest. PHP when the client already has WordPress and a business.'
	},
	{
		title: 'The click',
		text: 'Buttons on this site still click. It is 2026. I kept the sound. Some traditions are load-bearing.'
	}
]

export const timeline = [
	{
		year: '2018',
		title: 'Webble + Linnéuniversitetet',
		text: 'Webbprogrammering as the on-ramp. The company as the real exam. BDDance’s shop, Frigga’s salon, clients who still email like I am their IT department.'
	},
	{
		year: '2019',
		title: 'Ramax, ISO clock',
		text: 'Industrial workshop. Mobile site, CMS, logo that kept the old colors. Two weeks. Certification date. Shipped. The ISO people did not have to look at a 2009 table.'
	},
	{
		year: '2022',
		title: 'Knightec × Telia',
		text: 'Specialist on UC ServiceHub. Angular, Java, NTS, MI, flowcharts instead of folklore. The day job that funds the night job’s servers.'
	},
	{
		year: 'now',
		title: 'Still compiling',
		text: 'Deathborn, Healthii, AdventurePhones, Yggdrasil. Days in the telco. Nights in the lab. Same person. Different Slack.'
	}
]

export const sheet = {
	name: 'Dawid Kaleta',
	alias: 'Wolfskii',
	klass: 'Fullstack specialist',
	origin: 'Gothenburg, CET',
	alignment: 'Lawful Shipful',
	hp: 'Production',
	mp: 'Evenings',
	feats: ['ISO in two weeks', 'Flowcharts instead of wikis', 'Clients keep the CMS keys'],
	inventory: ['TypeScript', 'A homelab named Yggdrasil', 'A click sound, on purpose'],
	weakness: 'A 40-person Slack about padding'
}

export const diceFlavor: Record<string, string> = {
	crit: 'Natural 1. The standup ate the morning. Ship anyway.',
	low: 'You notice a 4px gap. You do not start a thread. You fix it.',
	mid: 'The thin slice compiles. Nobody clapped. Perfect.',
	high: 'The client edited the site on a Tuesday. You slept on a Tuesday.',
	nat: 'Natural 20. The deploy was boring. That is the highest loot.'
}

export const receiptLines = [
	{ item: 'Listening before Figma panic', qty: '1', price: 'included' },
	{ item: 'Thin slice in production', qty: '1', price: 'the point' },
	{ item: 'Borders', qty: '3px', price: 'non-negotiable' },
	{ item: 'Laptop-on-a-desk stock photos', qty: '0', price: 'banned' },
	{ item: 'CMS keys handed over', qty: 'yours', price: '0 kr hostage fee' },
	{ item: 'Docs + deploy + a joke in the README', qty: '1', price: 'standard' }
]

export const colophonLines = [
	{ k: 'UI', v: 'Svelte 3, Vite 4, SCSS. No component library. The borders are handmade.' },
	{ k: 'Type', v: 'Archivo Black for yelling. Space Grotesk for talking.' },
	{ k: 'Host', v: 'GitHub Pages. Custom domain wolfskii.dev.' },
	{ k: 'Photo', v: 'Me. Not Unsplash. Not a man pointing at a graph.' },
	{ k: 'Sound', v: 'clickcomp.mp3. Press M if you are in an open office.' },
	{ k: 'Analytics', v: 'None. I do not need a heatmap of your scroll. You are here. Hi.' }
]

export const siteMap = [
	{ href: '#start', label: 'Knock' },
	{ href: '#about', label: 'Who' },
	{ href: '#shifts', label: 'Shifts' },
	{ href: '#now', label: 'Now' },
	{ href: '#projects', label: 'Work' },
	{ href: '#toolbox', label: 'Tools' },
	{ href: '#sheet', label: 'Sheet' },
	{ href: '#experience', label: 'XP' },
	{ href: '#timeline', label: 'Years' },
	{ href: '#rules', label: 'Rules' },
	{ href: '#stamps', label: 'Stamps' },
	{ href: '#vs', label: 'Versus' },
	{ href: '#wanted', label: 'Wanted' },
	{ href: '#term', label: 'Shell' },
	{ href: '#faq', label: 'FAQ' },
	{ href: '#receipt', label: 'Invoice' },
	{ href: '#contact', label: 'Write' },
	{ href: '#colophon', label: 'Colophon' }
]

export const wantedCharges = [
	'Shipping software that operators actually click',
	'Naming a homelab after a world tree',
	'Keeping the click sound in 2026',
	'Handing CMS keys to the people who own the content',
	'Building dance tools as if the floor can sue'
]

export const tapeItems = [
	'Load-bearing IDs',
	'3px or go home',
	'No stock photos',
	'CET replies',
	'Keys included',
	'Yggdrasil humming'
]
