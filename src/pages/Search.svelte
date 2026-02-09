<script>
  import { routeParams } from '../stores/router.js';
  import { searchArticles } from '../stores/articles.js';
  import ArticleCard from '../components/ArticleCard.svelte';

  let query = '';

  $: {
    const q = $routeParams.q;
    if (q) query = q;
  }

  $: results = searchArticles(query);
</script>

<div class="search-page">
  <h1>Search Articles</h1>

  <div class="search-box">
    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      type="text"
      placeholder="Type to search..."
      bind:value={query}
      class="search-input"
      autofocus
    />
    {#if query}
      <button class="clear-btn" on:click={() => (query = '')}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    {/if}
  </div>

  {#if query.trim()}
    <p class="result-count">
      {results.length} {results.length === 1 ? 'result' : 'results'} for "<strong>{query}</strong>"
    </p>

    {#if results.length > 0}
      <div class="results-grid">
        {#each results as article (article.id)}
          <ArticleCard {article} />
        {/each}
      </div>
    {:else}
      <div class="empty-state">
        <p>No articles match your search. Try different keywords.</p>
      </div>
    {/if}
  {:else}
    <div class="empty-state">
      <p>Enter a search term to find articles.</p>
    </div>
  {/if}
</div>

<style>
  .search-page {
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 1.5rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    color: var(--color-text-tertiary);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.875rem 2.75rem 0.875rem 3rem;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: var(--color-surface);
    color: var(--color-text);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .search-input:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 4px var(--color-accent-bg);
  }

  .search-input::placeholder {
    color: var(--color-text-tertiary);
  }

  .clear-btn {
    position: absolute;
    right: 0.75rem;
    background: none;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    display: flex;
  }

  .clear-btn:hover {
    color: var(--color-text);
  }

  .result-count {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin: 0 0 1.5rem;
  }

  .results-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--color-text-secondary);
  }
</style>
