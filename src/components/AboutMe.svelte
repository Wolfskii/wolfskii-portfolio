<script>
	import selfieImg from '../assets/selfie.jpg'
</script>

<div class="about-me border-bottom">
	<div class="about-me-content">
		<div class="about-me-image shadow wobble">
			<img src={selfieImg} alt="Portrait Selfie" />
		</div>

		<div class="about-me-text">
			<h2>Who am I?</h2>
			<p>
				As a full-stack developer, I am passionate about creating beautiful and functional web applications that not only meet my clients' needs, but also leave
				a lasting impact on their users. I believe in the power of design and innovation to connect people across the world, and I am dedicated to using my
				skills to help make that vision a reality.
			</p>
		</div>
	</div>
</div>

<style>
	.about-me {
		padding: 4rem;
		text-align: left;
		background-color: #ceeadd;
	}

	.about-me-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}

	.about-me-text {
		max-width: 800px;
	}

	.about-me-text h2 {
		margin-bottom: 1rem;
	}

	.about-me-text p {
		font-size: 1.2rem;
		line-height: 1.5;
		margin-bottom: 0;
	}

	.about-me-image {
		width: 200px;
		height: 200px;
		overflow: hidden;
	}

	.about-me-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 767px) {
		.about-me {
			padding: 2rem 1rem;
		}

		.about-me-content {
			flex-direction: column;
			gap: 1rem;
		}

		.about-me-image {
			width: 150px;
			height: 150px;
		}

		.about-me-text h2 {
			font-size: 1.5rem;
		}

		.about-me-text p {
			font-size: 1rem;
		}
	}
</style>
