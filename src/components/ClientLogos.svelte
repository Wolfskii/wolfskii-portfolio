<script>
  import { onMount } from "svelte"

  import spotifyLogo from '../assets/spotify.png'
  import dellLogo from '../assets/dell.png'

  const clients = [
    { name: 'Company A', logo: spotifyLogo },
    { name: 'Company B', logo: dellLogo },
    { name: 'Company C', logo: spotifyLogo },
    { name: 'Company D', logo: dellLogo },
    { name: 'Company E', logo: spotifyLogo },
    { name: 'Company F', logo: dellLogo },
    { name: 'Company G', logo: spotifyLogo },
    { name: 'Company H', logo: dellLogo },
    { name: 'Company I', logo: spotifyLogo },
    { name: 'Company J', logo: dellLogo }
  ];

  let scrollX = 0;
  let animationFrameId = null;
  let isPaused = false;

  function animate() {
    scrollX++;
    const clientLogos = document.querySelector('.client-logos-container');
    const clientLogo = document.querySelector('.client-logo');

    if (clientLogo instanceof HTMLElement) {
      const clientLogoWidth = clientLogo?.offsetWidth || 0;
      const clientLogosWidth = clientLogoWidth * clients.length;

      if (scrollX >= clientLogosWidth) {
        scrollX = 0;
        clients.push(clients.shift());
      } else if (scrollX < -clientLogoWidth) {
        scrollX = clientLogosWidth - clientLogoWidth;
        clients.unshift(clients.pop());
      }
    }

    if (clientLogos instanceof HTMLElement) {
      clientLogos.style.transform = `translateX(-${scrollX}px)`;
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  function pauseAnimation() {
    isPaused = true;
    cancelAnimationFrame(animationFrameId);
  }

  function resumeAnimation() {
    isPaused = false;
    animate();
  }

  onMount(() => {
    const clientLogos = document.querySelector('.client-logos-container');
    const clientLogo = document.querySelector('.client-logo');

    if (clientLogos instanceof HTMLElement && clientLogo instanceof HTMLElement) {
      clientLogos.style.width = `${clientLogo.offsetWidth * clients.length}px`;
      scrollX = window.innerWidth - clientLogos.offsetWidth;
    }

    // Pause and resume animation on hover
    if (clientLogos instanceof HTMLElement) {
      clientLogos.addEventListener('mouseenter', pauseAnimation);
      clientLogos.addEventListener('mouseleave', resumeAnimation);
    }

    animate();
  });
</script>

<div class="client-logos border-bottom">
  <div class="client-logos-container">
    {#each clients as client}
    <div class="client-logo">
      <img src={client.logo} alt={client.name} />
    </div>
    {/each}
  </div>
</div>

<style>
  .client-logos {
    width: 100%;
    overflow: hidden;
    background: #1F1F1F;
    padding: 2rem 0;
  }

  .client-logos-container {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin: 0;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    transition: transform 0.1s linear;
  }

  .client-logo {
    margin-right: 1rem;
  }

  .client-logo img {
    height: 3rem;
    width: auto;
    object-fit: contain;
  }
</style>

