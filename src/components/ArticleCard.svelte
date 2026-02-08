<script>
  export let article;
</script>

<a href="#/article/{article.slug}" class="card">
  <div class="card-meta">
    <a href="#/category/{encodeURIComponent(article.category)}" class="card-category" on:click|stopPropagation>
      {article.category}
    </a>
    <span class="card-date">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
  </div>
  <h3 class="card-title">{article.title}</h3>
  <p class="card-excerpt">{article.excerpt}</p>
  <div class="card-tags">
    {#each article.tags.slice(0, 3) as tag}
      <a href="#/tag/{encodeURIComponent(tag)}" class="tag" on:click|stopPropagation>#{tag}</a>
    {/each}
  </div>
</a>

<style>
  .card {
    display: block;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    text-decoration: none;
    color: var(--color-text);
    transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
  }

  .card:hover {
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px var(--color-shadow);
    transform: translateY(-2px);
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .card-category {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
    background: var(--color-primary-bg);
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    text-decoration: none;
  }

  .card-category:hover {
    opacity: 0.8;
  }

  .card-date {
    font-size: 0.8rem;
    color: var(--color-text-tertiary);
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    line-height: 1.4;
  }

  .card-excerpt {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .card-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.8rem;
    color: var(--color-text-tertiary);
    text-decoration: none;
    transition: color 0.15s;
  }

  .tag:hover {
    color: var(--color-primary);
  }
</style>
