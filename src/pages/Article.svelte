<script>
  import { marked } from 'marked';
  import { getArticleBySlug } from '../stores/articles.js';

  export let slug;

  $: article = getArticleBySlug(slug);
  $: html = article ? marked(article.content) : '';
</script>

{#if article}
  <article class="article-page">
    <div class="article-header">
      <a href="#/" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to articles
      </a>

      <div class="article-meta">
        <a href="#/category/{encodeURIComponent(article.category)}" class="article-category">
          {article.category}
        </a>
        <span class="article-date">
          {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
    </div>

    <div class="prose">
      {@html html}
    </div>

    <div class="article-footer">
      <div class="article-tags">
        {#each article.tags as tag}
          <a href="#/tag/{encodeURIComponent(tag)}" class="tag">#{tag}</a>
        {/each}
      </div>
    </div>
  </article>
{:else}
  <div class="not-found">
    <h1>Article Not Found</h1>
    <p>The article you're looking for doesn't exist.</p>
    <a href="#/">Back to home</a>
  </div>
{/if}

<style>
  .article-page {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .article-header {
    margin-bottom: 1.5rem;
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

  .article-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .article-category {
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

  .article-date {
    font-size: 0.85rem;
    color: var(--color-text-tertiary);
  }

  /* Markdown/prose styles */
  .prose {
    line-height: 1.75;
    color: var(--color-text);
  }

  .prose :global(h1) {
    font-size: 2rem;
    font-weight: 800;
    margin: 2rem 0 1rem;
    line-height: 1.3;
  }

  .prose :global(h2) {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2rem 0 0.75rem;
    padding-bottom: 0.375rem;
    border-bottom: 1px solid var(--color-border);
  }

  .prose :global(h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.5rem 0 0.5rem;
  }

  .prose :global(p) {
    margin: 0 0 1rem;
  }

  .prose :global(a) {
    color: var(--color-primary);
    text-decoration: none;
  }

  .prose :global(a:hover) {
    text-decoration: underline;
  }

  .prose :global(code) {
    background: var(--color-code-bg);
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
  }

  .prose :global(pre) {
    background: var(--color-code-bg);
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 0 0 1.25rem;
    border: 1px solid var(--color-border);
  }

  .prose :global(pre code) {
    background: none;
    padding: 0;
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .prose :global(blockquote) {
    border-left: 3px solid var(--color-primary);
    margin: 0 0 1rem;
    padding: 0.5rem 1rem;
    background: var(--color-primary-bg);
    border-radius: 0 0.375rem 0.375rem 0;
  }

  .prose :global(blockquote p:last-child) {
    margin-bottom: 0;
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin: 0 0 1rem;
    padding-left: 1.5rem;
  }

  .prose :global(li) {
    margin-bottom: 0.375rem;
  }

  .prose :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 1.25rem;
    font-size: 0.9rem;
  }

  .prose :global(th),
  .prose :global(td) {
    padding: 0.625rem 0.75rem;
    border: 1px solid var(--color-border);
    text-align: left;
  }

  .prose :global(th) {
    background: var(--color-code-bg);
    font-weight: 600;
  }

  .prose :global(hr) {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 2rem 0;
  }

  .prose :global(strong) {
    font-weight: 600;
  }

  .article-footer {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }

  .article-tags {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.85rem;
    color: var(--color-text-tertiary);
    text-decoration: none;
    transition: color 0.15s;
  }

  .tag:hover {
    color: var(--color-primary);
  }

  .not-found {
    text-align: center;
    padding: 4rem 1rem;
  }

  .not-found h1 {
    color: var(--color-text);
    margin: 0 0 0.5rem;
  }

  .not-found p {
    color: var(--color-text-secondary);
    margin: 0 0 1.5rem;
  }

  .not-found a {
    color: var(--color-primary);
    text-decoration: none;
  }

  @media (max-width: 480px) {
    .prose :global(h1) {
      font-size: 1.5rem;
    }

    .prose :global(h2) {
      font-size: 1.25rem;
    }
  }
</style>
