<script>
</script>

<div class="home">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-glow"></div>
    <h1 class="hero-title">Your Comprehensive IT Knowledge Base</h1>
    <p class="hero-subtitle">Master the fundamentals and beyond</p>
  </section>

  <!-- Cards Section -->
  <section class="cards-section">
    <div class="cards-header">
      <h2 class="cards-title">Fields of Knowledge</h2>
    </div>
    <div class="cards-grid">
      <!-- Card 1: IT Project Management -->
      <a href="#/it-project-management" class="card">
        <div class="card-inner">
          <div class="card-top">
            <span class="card-badge">CATEGORY</span>
          </div>
          <h3 class="card-title">IT Project Management</h3>
          <p class="card-description">Explore procurement, terminology, roles, and essential Q&A for successful project delivery</p>
          <div class="card-bottom">
            <span class="card-subtopics">4 topics</span>
            <span class="card-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      </a>

      <!-- Card 2: Data -->
      <div class="card card--disabled">
        <div class="card-inner">
          <div class="card-top">
            <span class="card-badge">CATEGORY</span>
          </div>
          <h3 class="card-title">Data</h3>
          <p class="card-description">Coming soon &mdash; Data management, analytics, and insights for IT professionals</p>
          <div class="card-bottom">
            <span class="card-coming-soon">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
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

  .hero-subtitle {
    font-size: 1.15rem;
    color: var(--color-text-secondary);
    margin: 0.75rem 0 0;
    font-weight: 400;
    letter-spacing: 0.02em;
    position: relative;
    z-index: 1;
  }

  /* ---- Cards Section ---- */
  .cards-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem 4rem;
  }

  .cards-header {
    display: flex;
    align-items: center;
  }

  .cards-title {
    margin: 0;
    font-size: 1.4rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  /* ---- Category Cards ---- */
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

  .card:hover:not(.card--disabled) {
    transform: translateY(-6px);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(96, 165, 250, 0.08);
  }

  .card--disabled {
    opacity: 0.55;
    cursor: default;
  }

  .card-inner {
    background: var(--color-surface);
    border-radius: calc(1rem - 1px);
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
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

  .card:hover:not(.card--disabled) .card-title {
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
    flex: 1;
  }

  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.25rem;
    border-top: 1px solid var(--color-border);
  }

  .card-subtopics {
    font-size: 0.8rem;
    color: var(--color-text-tertiary);
  }

  .card-coming-soon {
    font-size: 0.8rem;
    color: var(--color-text-tertiary);
    font-style: italic;
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

  .card:hover:not(.card--disabled) .card-arrow {
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

    .hero-subtitle {
      font-size: 1rem;
    }

    .cards-section {
      padding: 0 0.5rem 2rem;
    }

    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
