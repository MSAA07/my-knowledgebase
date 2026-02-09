<script>
  import { router } from '../stores/router.js';

  let searchQuery = '';

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }
</script>

<header class="header">
  <a href="#/" class="logo">
    <span class="logo-icon">📚</span>
    <span class="logo-text">KnowledgeBase</span>
  </a>

  <nav class="nav-links">
    <a href="#/">Home</a>
    <a href="#/search">Search</a>
  </nav>

  <form class="search-form" on:submit={handleSearch}>
    <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <input
      type="text"
      placeholder="Search..."
      bind:value={searchQuery}
      class="search-input"
    />
  </form>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.875rem 2rem;
    background: rgba(10, 14, 39, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--color-text);
    flex-shrink: 0;
  }

  .logo-icon {
    font-size: 1.25rem;
  }

  .logo-text {
    font-size: 1rem;
    font-weight: 700;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-links {
    display: flex;
    gap: 1.25rem;
  }

  .nav-links a {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
    padding: 0.25rem 0;
  }

  .nav-links a:hover {
    color: var(--color-text);
  }

  .search-form {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
    max-width: 260px;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    left: 0.75rem;
    color: var(--color-text-tertiary);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.5rem 0.75rem 0.5rem 2.25rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    background: var(--color-surface);
    color: var(--color-text);
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .search-input::placeholder {
    color: var(--color-text-tertiary);
  }

  .search-input:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent-bg);
    background: var(--color-bg-secondary);
  }

  @media (max-width: 640px) {
    .header {
      padding: 0.75rem 1rem;
      gap: 0.75rem;
    }

    .nav-links {
      display: none;
    }

    .search-form {
      max-width: none;
    }
  }
</style>
