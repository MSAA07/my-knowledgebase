<script>
  import { getArticlesByCategory } from '../stores/articles.js';
  import ArticleCard from '../components/ArticleCard.svelte';

  export let name;

  $: categoryArticles = getArticlesByCategory(name).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
</script>

<div class="category-page">
  <a href="#/" class="back-link">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
    All articles
  </a>

  <h1>{name}</h1>
  <p class="subtitle">{categoryArticles.length} {categoryArticles.length === 1 ? 'article' : 'articles'} in this category</p>

  {#if categoryArticles.length > 0}
    <div class="articles-grid">
      {#each categoryArticles as article (article.id)}
        <ArticleCard {article} />
      {/each}
    </div>
  {:else}
    <p class="empty">No articles in this category yet.</p>
  {/if}
</div>

<style>
  .category-page {
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color 0.2s;
  }

  .back-link:hover {
    color: var(--color-accent);
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.375rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    color: var(--color-text-secondary);
    margin: 0 0 2rem;
    font-size: 1rem;
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.25rem;
  }

  .empty {
    color: var(--color-text-secondary);
    text-align: center;
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    .articles-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
