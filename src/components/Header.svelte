<script lang="ts">
  import logo from '../assets/svelte.svg'
  let links = [
    { label: 'Start', href: '#' },
    { label: 'Om mig', href: '#' },
    { label: 'Projekt', href: '#' },
    { label: 'Erfarenheter', href: '#' },
    { label: 'Färdigheter', href: '#' },
    { label: 'Kontakta mig', href: '#' }
  ];
  let isMenuOpen = false;
  let actionLabel = 'Kontakt'

  function toggleMenu() {
    console.log('Toggle menu clicked');
    isMenuOpen = !isMenuOpen;
  }

  function onActionClick(event) {
    console.log('Action button clicked', event);
  }
</script>

<header>
  <div class="header-left">
    {#if logo}
      <img src={logo} alt="Logo" />
    {/if}
  </div>
  <nav class="header-center">
    <ul class:open={isMenuOpen}>
      {#each links as link}
        <li>
          <a href={link.href}>{link.label}</a>
        </li>
      {/each}
    </ul>
    <button class="menu-toggle" on:click={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <div class="header-right">
    {#if actionLabel && onActionClick && window.innerWidth >= 768}
      <button class="action-button" on:click={onActionClick}>
        {actionLabel}
      </button>
    {/if}
  </div>
</header>


<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .header-left img {
    height: 3rem;
  }

  .header-center ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .header-center ul.open {
    height: 100vh;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: #ffffff;
  }

  .header-center li {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  .header-center a {
    color: #000000;
    font-weight: 500;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .menu-toggle {
    display: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .menu-toggle span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #000000;
    transition: transform 0.3s ease-in-out;
  }

  .menu-toggle span:nth-child(1) {
    top: 0;
  }

  .menu-toggle span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  .menu-toggle span:nth-child(3) {
    bottom: 0;
  }

  .header-right .action-button {
    background-color: #000000;
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.2rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-block;
  }

  @media screen and (max-width: 767px) {
    .header-center {
      position: relative;
      width: 100%;
    }

    .menu-toggle {
      display: block;
    }

    .header-left img {
      height: 2.5rem;
    }

    .header-center ul {
      display: none;
      width: 100%;
    }

    .header-center li {
      margin-bottom: 0.5rem;
    }

    .header-center a {
      font-size: 1.1rem;
    }

    .header-center ul.open {
      height: 100vh;
      position: absolute;
      top: 4rem;
      left: 0;
      right: 0;
      background-color: #ffffff;
    }

  .header-right .action-button {
    display: none;
  }

  @media screen and (min-width: 768px) {
    /* Styles for larger screens (e.g., tablets, desktops) */
    .header-center ul {
      height: 100%;
    }

    .header-center li {
      margin-bottom: 0;
      margin-right: 1rem;
    }

    .menu-toggle {
      display: none;
    }

    .header-right .action-button {
      display: inline-block;
    }
  }
}
  
</style>