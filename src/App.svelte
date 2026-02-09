<script>
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Article from './pages/Article.svelte';
  import ProcurementArticle from './pages/ProcurementArticle.svelte';
  import Category from './pages/Category.svelte';
  import Search from './pages/Search.svelte';
  import TagPage from './pages/TagPage.svelte';
  import { currentPath } from './stores/router.js';
  import './styles/global.css';

  $: route = $currentPath;
</script>

<div class="app-layout">
  <main class="content">
    {#if route === '/' || route === ''}
      <Home />
    {:else if route === '/article/procurement-process'}
      <ProcurementArticle />
    {:else if route.startsWith('/article/')}
      <Article slug={route.replace('/article/', '')} />
    {:else if route.startsWith('/category/')}
      <Category name={decodeURIComponent(route.replace('/category/', ''))} />
    {:else if route.startsWith('/tag/')}
      <TagPage tag={decodeURIComponent(route.replace('/tag/', ''))} />
    {:else if route === '/search'}
      <Search />
    {:else}
      <div class="not-found">
        <h1>404</h1>
        <p>Page not found.</p>
        <a href="#/">Back to home</a>
      </div>
    {/if}
  </main>

  <Footer />
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--color-bg);
    background-image: var(--gradient-bg-radial);
  }

  .content {
    flex: 1;
    padding: 2rem;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .not-found {
    text-align: center;
    padding: 6rem 1rem;
  }

  .not-found h1 {
    font-size: 5rem;
    font-weight: 800;
    margin: 0;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .not-found p {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin: 0.75rem 0 2rem;
  }

  .not-found a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-accent);
    font-weight: 500;
    padding: 0.5rem 1.25rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .not-found a:hover {
    background: var(--color-accent-bg);
    border-color: var(--color-accent);
  }

  @media (max-width: 640px) {
    .content {
      padding: 1rem;
    }
  }
</style>
