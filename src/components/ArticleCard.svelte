<script>
  export let article;
</script>

<a href="#/article/{article.slug}" class="card">
  <div class="card-inner">
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
  </div>
</a>

<style>
  .card {
    display: block;
    text-decoration: none;
    color: var(--color-text);
    border-radius: 0.875rem;
    background: linear-gradient(135deg, var(--color-border), var(--color-border-light));
    padding: 1px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.25),
      0 0 20px rgba(96, 165, 250, 0.06);
  }

  .card-inner {
    background: var(--color-surface);
    border-radius: calc(0.875rem - 1px);
    padding: 1.5rem;
    height: 100%;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .card-category {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-accent);
    background: var(--color-accent-bg);
    border: 1px solid rgba(96, 165, 250, 0.15);
    padding: 0.15rem 0.5rem;
    border-radius: 2rem;
    text-decoration: none;
    transition: background 0.2s;
  }

  .card-category:hover {
    background: var(--color-accent-bg-hover);
  }

  .card-date {
    font-size: 0.8rem;
    color: var(--color-text-tertiary);
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    line-height: 1.4;
    transition: color 0.2s;
  }

  .card:hover .card-title {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-excerpt {
    font-size: 0.875rem;
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
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
    text-decoration: none;
    transition: color 0.2s;
  }

  .tag:hover {
    color: var(--color-accent);
  }
</style>
