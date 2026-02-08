<script>
  import { theme, toggleTheme } from '../stores/theme.js';
  import { router } from '../stores/router.js';

  export let sidebarOpen = false;

  let searchQuery = '';

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }
</script>

<header class="header">
  <button class="menu-btn" on:click={() => (sidebarOpen = !sidebarOpen)} aria-label="Toggle menu">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>

  <form class="search-form" on:submit={handleSearch}>
    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <input
      type="text"
      placeholder="Search articles..."
      bind:value={searchQuery}
      class="search-input"
    />
  </form>

  <button class="theme-btn" on:click={toggleTheme} aria-label="Toggle theme">
    {#if $theme === 'dark'}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    {:else}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    {/if}
  </button>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1.5rem;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    padding: 0.375rem;
    border-radius: 0.375rem;
  }

  .menu-btn:hover {
    background: var(--color-hover);
  }

  .search-form {
    flex: 1;
    max-width: 480px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: 0.75rem;
    color: var(--color-text-tertiary);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    background: var(--color-bg);
    color: var(--color-text);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  .search-input::placeholder {
    color: var(--color-text-tertiary);
  }

  .search-input:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-bg);
  }

  .theme-btn {
    background: none;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    margin-left: auto;
  }

  .theme-btn:hover {
    background: var(--color-hover);
  }

  @media (max-width: 768px) {
    .menu-btn {
      display: flex;
    }
  }
</style>
