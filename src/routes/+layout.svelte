<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let currentPath: string;

  $: currentPath = $page.url.pathname;

  let mobileMenuOpen = false;
  let dropdownOpen = false;

  const tabs = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contactus', label: 'Contact Us' },
    {
      label: 'Our Projects',
      isDropdown: true,
      submenu: [
        { path: '/projects/commercial', label: 'Commercial' },
        { path: '/projects/residential', label: 'Residential' },
        { path: '/projects/institutional', label: 'Institutional' },
        { path: '/projects/industrial', label: 'Industrial' }
      ]
    }
  ];

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function closeMenus() {
    dropdownOpen = false;
    mobileMenuOpen = false;
  }
</script>

<div class="layout">
  <nav class="nav-container">
    <!-- Hamburger for Mobile -->
    <button class="menu-toggle" aria-label="Toggle menu" on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
      ☰
    </button>

    <!-- Main Tabs -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="tabs" class:open={mobileMenuOpen} on:mouseleave={closeMenus}>
      {#each tabs as tab}
        {#if tab.isDropdown}
          <div class="tab dropdown">
            <button
              class="dropdown-label"
              class:active={currentPath.startsWith('/projects')}
              on:click={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              type="button"
            >
              {tab.label} ▾
            </button>

            {#if dropdownOpen}
              <div class="dropdown-menu">
                {#each tab.submenu as item}
                  <a
                    href={item.path}
                    class="dropdown-item"
                    class:active={currentPath === item.path}
                    on:click|preventDefault={() => {
                      goto(item.path);
                      closeMenus();
                    }}
                  >
                    {item.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a
            href={tab.path}
            class="tab"
            class:active={currentPath === tab.path}
            on:click|preventDefault={() => {
              if (tab.path) {
                goto(tab.path);
                closeMenus();
              }
            }}
          >
            {tab.label}
          </a>
        {/if}
      {/each}
    </div>
  </nav>

  <main>
    <slot />
  </main>
</div>

<style>
  .layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    justify-content: center;
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #1f2937;
  }

  .tabs {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .tabs.open {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }

  .tab,
  .dropdown-label {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #4b5563;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    background: none;
    border: none;
  }

  .tab:hover,
  .dropdown-label:hover {
    color: #1f2937;
    background-color: #f3f4f6;
  }

  .tab.active,
  .dropdown-label.active {
    color: #1f2937;
    border-bottom: 2px solid #1f2937;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 2.6rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 160px;
  }

  .dropdown-item {
    display: block;
    padding: 0.5rem 1rem;
    color: #4b5563;
    font-weight: 500;
    text-decoration: none;
  }

  .dropdown-item:hover {
    background-color: #f3f4f6;
    color: #1f2937;
  }

  .dropdown-item.active {
    font-weight: 700;
    color: #1f2937;
    background-color: #e0e7ff;
  }

  main {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .tabs {
      display: none;
      flex-direction: column;
      width: 100%;
    }

    .tabs.open {
      display: flex;
    }

    .dropdown-menu {
      position: static;
      box-shadow: none;
      border: none;
    }

    .dropdown-item {
      padding-left: 2rem;
    }
  }
</style>
