<script>
  const article = {
    slug: 'procurement-process',
    category: 'Procurement',
    title: 'Procurement in Project Management',
    description: 'Understanding the procurement process and its critical role in successful project delivery',
    readTime: '8 min read',
  };
</script>

<div class="home">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-glow"></div>
    <h1 class="hero-title">IT Project Management</h1>
    <p class="hero-tagline">Know your Agile Industry</p>
    <div class="hero-divider"></div>
  </section>

  <!-- Article Card -->
  <section class="cards-section">
    <a href="#/article/{article.slug}" class="card">
      <div class="card-inner">
        <div class="card-top">
          <span class="card-badge">{article.category}</span>
        </div>

        <h2 class="card-title">{article.title}</h2>
        <p class="card-description">{article.description}</p>

        <div class="card-bottom">
          <span class="card-read-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readTime}
          </span>
          <span class="card-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  </section>
</div>

<style>
  .home {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ---- Hero ---- */
  .hero {
    text-align: center;
    padding: 4rem 1rem 3rem;
    position: relative;
  }

  .hero-glow {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(96, 165, 250, 0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .hero-title {
    font-size: 3.25rem;
    font-weight: 800;
    margin: 0;
    line-height: 1.15;
    background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 40%, #e0eeff 60%, #93c5fd 80%, #60a5fa 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s ease-in-out infinite;
    position: relative;
    z-index: 1;
  }

  @keyframes shimmer {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 200% center; }
  }

  .hero-tagline {
    font-size: 1.15rem;
    color: var(--color-text-secondary);
    margin: 0.75rem 0 0;
    font-weight: 400;
    letter-spacing: 0.02em;
    position: relative;
    z-index: 1;
  }

  .hero-divider {
    width: 60px;
    height: 3px;
    background: var(--gradient-accent);
    border-radius: 2px;
    margin: 2rem auto 0;
    opacity: 0.6;
  }

  /* ---- Cards Section ---- */
  .cards-section {
    display: flex;
    justify-content: center;
    padding: 0 1rem 4rem;
  }

  .card {
    display: block;
    max-width: 600px;
    width: 100%;
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
    font-size: 1.5rem;
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

  /* ---- Responsive ---- */
  @media (max-width: 640px) {
    .hero {
      padding: 2.5rem 1rem 2rem;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-tagline {
      font-size: 1rem;
    }

    .cards-section {
      padding: 0 0.5rem 2rem;
    }

    .card-inner {
      padding: 1.5rem;
    }

    .card-title {
      font-size: 1.25rem;
    }

    .card-description {
      font-size: 0.875rem;
    }
  }
</style>
