<script lang="ts">
	import Interactions from '../utils/interactions'
	import { profile } from '../data/site'

	let name = ''
	let email = ''
	let message = ''
	let copied = false

	function ping() {
		Interactions.click()
	}

	async function copyEmail() {
		ping()
		try {
			await navigator.clipboard.writeText(profile.email)
			copied = true
			setTimeout(() => (copied = false), 1800)
		} catch {
			window.location.href = profile.emailHref
		}
	}

	function send(event: Event) {
		event.preventDefault()
		ping()
		const subject = encodeURIComponent(`Hey Dawid — ${name || 'a human'} wrote`)
		const body = encodeURIComponent(
			`${message || 'I saw the thick borders and I have a job for you.'}\n\n— ${name || 'Anonymous wolf'}\n${email}`
		)
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
	}
</script>

<section id="contact" class="section">
	<div class="section-inner">
		<div class="layout">
			<div>
				<span class="kicker">Contact</span>
				<h2>Don’t knock. Write.</h2>
				<p class="lede">
					Days are Knightec / Telia. Evenings are Webble and the weird stuff. If you have a product,
					a messy backlog, or a dance school that still faxes bookings — hello.
				</p>
				<div class="stamps">
					<span class="stamp" style="--r: -7deg; --c: var(--yellow)">Reply person</span>
					<span class="stamp" style="--r: 6deg; --c: var(--mint)">GBG timezone</span>
				</div>
				<div class="quick">
					<button class="btn" type="button" on:click={copyEmail}>
						{copied ? 'Copied. Nice.' : 'Copy email'}
					</button>
					<a class="btn btn-white" href={profile.linkedin} target="_blank" rel="noreferrer" on:click={ping}
						>LinkedIn</a
					>
					<a class="btn btn-ink" href={profile.github} target="_blank" rel="noreferrer" on:click={ping}
						>GitHub</a
					>
				</div>
				<p class="mail">
					<a href={profile.emailHref} on:click={ping}>{profile.email}</a>
				</p>
			</div>

			<form class="card" on:submit={send}>
				<label>
					Your name
					<input bind:value={name} name="name" autocomplete="name" placeholder="A mysterious client" />
				</label>
				<label>
					Your email
					<input
						bind:value={email}
						name="email"
						type="email"
						autocomplete="email"
						placeholder="you@company.se"
						required
					/>
				</label>
				<label>
					The plot
					<textarea
						bind:value={message}
						name="message"
						rows="5"
						placeholder="We have a thing. It needs a human. The borders can stay thick."
						required
					/>
				</label>
				<button class="btn" type="submit">Fire the pigeon</button>
				<p class="hint">Opens your mail app. No dark-pattern newsletter. I already have too many tabs.</p>
			</form>
		</div>
	</div>
</section>

<style>
	.section {
		background: var(--yellow);
	}

	h2 {
		filter: drop-shadow(4px 4px 0 var(--coral));
	}

	.layout {
		display: grid;
		gap: 2rem;
	}

	.stamps {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		margin: 1.3rem 0 1.4rem;
	}

	.quick {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.mail {
		margin-top: 1rem;
		font-weight: 700;
		word-break: break-word;
	}

	form {
		padding: 1.25rem 1.15rem 1.35rem;
		background: var(--white);
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	input,
	textarea {
		border: var(--border);
		border-radius: 6px;
		padding: 0.7rem 0.75rem;
		background: var(--paper);
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 0;
		text-transform: none;
		width: 100%;
	}

	.hint {
		font-size: 0.82rem;
		font-weight: 500;
		opacity: 0.75;
	}

	@media (min-width: 860px) {
		.layout {
			grid-template-columns: 1fr 1fr;
			align-items: start;
			gap: 3rem;
		}
	}
</style>
