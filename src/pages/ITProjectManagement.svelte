<script>
  import ArticleCard from '../components/ArticleCard.svelte';
  import articles from '../data/articles.js';

  const subtopics = [
    articles.find((a) => a.slug === 'procurement-process'),
    {
      slug: 'terminology',
      category: 'Foundation',
      title: 'Terminology',
      description: 'Clear, concise definitions for the most-used delivery and procurement terms.',
      readTime: '4 min read',
    },
    {
      slug: 'roles-to-know',
      category: 'People',
      title: 'Roles to Know',
      description: 'A quick map of project roles, responsibilities, and how they collaborate.',
      readTime: '5 min read',
    },
    {
      slug: 'qa',
      category: 'FAQ',
      title: 'Q&A',
      description: 'Short answers to common questions that unblock day-to-day work.',
      readTime: '3 min read',
      href: '#/quiz',
    },
  ].filter(Boolean);
</script>

<div class="page">
  <a class="back-link" href="#/">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
    Back to home
  </a>

  <section class="hero">
    <span class="badge">CATEGORY</span>
    <h1 class="title">IT Project Management</h1>
    <p class="subtitle">Explore procurement, terminology, roles, and essential Q&A for successful project delivery</p>
  </section>

  <section class="topics-grid">
    {#each subtopics as article (article.slug)}
      <ArticleCard {article} />
    {/each}
  </section>
</div>

<style>
  .page {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: var(--color-accent);
  }

  .hero {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .badge {
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

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 1rem 0 0.5rem;
    background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 40%, #e0eeff 60%, #93c5fd 80%, #60a5fa 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.05rem;
    color: var(--color-text-secondary);
    margin: 0;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .topics-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    .title {
      font-size: 1.75rem;
    }

    .subtitle {
      font-size: 0.95rem;
    }

    .topics-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
