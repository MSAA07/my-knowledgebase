<script>
  export let article;

  $: cardHref = article?.href ?? `#/article/${article.slug}`;
</script>

<a href={cardHref} class="card">
  <div class="card-inner">
    <div class="card-top">
      <span class="card-badge">{article.category}</span>
    </div>

    <h3 class="card-title">{article.title}</h3>
    <p class="card-description">{article.description}</p>

    <div class="card-bottom">
      <span class="card-read-time">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {article.readTime}
      </span>
      <span class="card-arrow" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </div>
  </div>
</a>

<style>
  .card {
    display: block;
    text-decoration: none;
    color: var(--color-text);
    border-radius: 1rem;
    position: relative;
    background: linear-gradient(135deg, var(--color-border), var(--color-border-light));
    padding: 1px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(96, 165, 250, 0.08);
  }

  .card-inner {
    background: var(--color-surface);
    border-radius: calc(1rem - 1px);
    padding: 2rem;
    height: 100%;
  }

  .card-top {
    margin-bottom: 1.25rem;
  }

  .card-badge {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-accent);
    background: var(--color-accent-bg);
    border: 1px solid rgba(96, 165, 250, 0.15);
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 0.75rem;
    line-height: 1.35;
    color: var(--color-text);
    transition: color 0.2s ease;
  }

  .card:hover .card-title {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-description {
    font-size: 0.925rem;
    color: var(--color-text-secondary);
    margin: 0 0 1.5rem;
    line-height: 1.7;
  }

  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.25rem;
    border-top: 1px solid var(--color-border);
  }

  .card-read-time {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.8rem;
    color: var(--color-text-tertiary);
  }

  .card-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: var(--color-accent);
    background: var(--color-accent-bg);
    transition: all 0.3s ease;
  }

  .card:hover .card-arrow {
    background: var(--color-accent);
    color: var(--color-bg);
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    .card-inner {
      padding: 1.5rem;
    }

    .card-title {
      font-size: 1.1rem;
    }

    .card-description {
      font-size: 0.875rem;
    }
  }
</style>
