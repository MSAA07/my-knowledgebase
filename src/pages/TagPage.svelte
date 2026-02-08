<script>
  import { getArticlesByTag } from '../stores/articles.js';
  import ArticleCard from '../components/ArticleCard.svelte';

  export let tag;

  $: tagArticles = getArticlesByTag(tag).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
</script>

<div class="tag-page">
  <a href="#/" class="back-link">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
    All articles
  </a>

  <h1>#{tag}</h1>
  <p class="subtitle">{tagArticles.length} {tagArticles.length === 1 ? 'article' : 'articles'} with this tag</p>

  {#if tagArticles.length > 0}
    <div class="articles-grid">
      {#each tagArticles as article (article.id)}
        <ArticleCard {article} />
      {/each}
    </div>
  {:else}
    <p class="empty">No articles with this tag yet.</p>
  {/if}
</div>

<style>
  .tag-page {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
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
    transition: color 0.15s;
  }

  .back-link:hover {
    color: var(--color-primary);
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.375rem;
    color: var(--color-primary);
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
