<script>
  import { createEventDispatcher } from 'svelte';
  import { categories } from '../stores/articles.js';
  import { currentPath } from '../stores/router.js';

  export let open = false;

  const dispatch = createEventDispatcher();

  function handleNav() {
    dispatch('close');
  }

  const categoryIcons = {
    General: '📖',
    JavaScript: '⚡',
    Svelte: '🔥',
    CSS: '🎨',
    DevOps: '🚀',
  };
</script>

<aside class="sidebar" class:open>
  <div class="sidebar-header">
    <a href="#/" class="logo" on:click={handleNav}>
      <span class="logo-icon">📚</span>
      <span class="logo-text">Knowledge Base</span>
    </a>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-section">
      <span class="nav-section-title">Menu</span>
      <a href="#/" class="nav-link" class:active={$currentPath === '/' || $currentPath === ''} on:click={handleNav}>
        <span class="nav-icon">🏠</span>
        Home
      </a>
      <a href="#/search" class="nav-link" class:active={$currentPath === '/search'} on:click={handleNav}>
        <span class="nav-icon">🔍</span>
        Search
      </a>
    </div>

    <div class="nav-section">
      <span class="nav-section-title">Categories</span>
      {#each $categories as category}
        <a
          href="#/category/{encodeURIComponent(category)}"
          class="nav-link"
          class:active={$currentPath === `/category/${encodeURIComponent(category)}`}
          on:click={handleNav}
        >
          <span class="nav-icon">{categoryIcons[category] || '📁'}</span>
          {category}
        </a>
      {/each}
    </div>
  </nav>

  <div class="sidebar-footer">
    <span class="footer-text">Built with Svelte</span>
  </div>
</aside>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    background: var(--color-sidebar-bg);
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    z-index: 100;
    overflow-y: auto;
    transition: transform 0.25s ease;
  }

  .sidebar-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--color-text);
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .logo-text {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .sidebar-nav {
    flex: 1;
    padding: 1rem 0;
  }

  .nav-section {
    margin-bottom: 1.5rem;
  }

  .nav-section-title {
    display: block;
    padding: 0 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-tertiary);
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.15s, color 0.15s;
    border-left: 3px solid transparent;
  }

  .nav-link:hover {
    background: var(--color-hover);
    color: var(--color-text);
  }

  .nav-link.active {
    color: var(--color-primary);
    background: var(--color-primary-bg);
    border-left-color: var(--color-primary);
  }

  .nav-icon {
    font-size: 1rem;
    width: 1.25rem;
    text-align: center;
  }

  .sidebar-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--color-border);
  }

  .footer-text {
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
  }

  @media (max-width: 768px) {
    .sidebar {
      transform: translateX(-100%);
    }

    .sidebar.open {
      transform: translateX(0);
    }
  }
</style>
