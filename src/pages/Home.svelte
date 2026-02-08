<script>
  import { articles, categories } from '../stores/articles.js';
  import ArticleCard from '../components/ArticleCard.svelte';

  $: sortedArticles = [...$articles].sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<div class="home">
  <section class="hero">
    <h1>Knowledge Base</h1>
    <p>Guides, tutorials, and reference material for developers.</p>
  </section>

  <section class="categories-bar">
    <a href="#/" class="cat-chip active">All</a>
    {#each $categories as cat}
      <a href="#/category/{encodeURIComponent(cat)}" class="cat-chip">{cat}</a>
    {/each}
  </section>

  <section class="articles-grid">
    {#each sortedArticles as article (article.id)}
      <ArticleCard {article} />
    {/each}
  </section>
</div>

<style>
  .home {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero {
    margin-bottom: 2rem;
  }

  .hero h1 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    color: var(--color-text);
  }

  .hero p {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .categories-bar {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  .cat-chip {
    padding: 0.375rem 0.875rem;
    border: 1px solid var(--color-border);
    border-radius: 2rem;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    color: var(--color-text-secondary);
    transition: all 0.15s;
  }

  .cat-chip:hover,
  .cat-chip.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    .articles-grid {
      grid-template-columns: 1fr;
    }

    .hero h1 {
      font-size: 1.5rem;
    }
  }
</style>
