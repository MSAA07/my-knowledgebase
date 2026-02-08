<script>
  import Sidebar from './components/Sidebar.svelte';
  import Header from './components/Header.svelte';
  import Home from './pages/Home.svelte';
  import Article from './pages/Article.svelte';
  import Category from './pages/Category.svelte';
  import Search from './pages/Search.svelte';
  import TagPage from './pages/TagPage.svelte';
  import { currentPath } from './stores/router.js';
  import { theme } from './stores/theme.js';
  import './styles/global.css';

  let sidebarOpen = false;

  function closeSidebar() {
    sidebarOpen = false;
  }

  $: route = $currentPath;
</script>

<div class="app-layout" data-theme={$theme}>
  <Sidebar open={sidebarOpen} on:close={closeSidebar} />

  {#if sidebarOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="overlay" on:click={closeSidebar}></div>
  {/if}

  <div class="main-area">
    <Header bind:sidebarOpen />

    <main class="content">
      {#if route === '/' || route === ''}
        <Home />
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
  </div>
</div>

<style>
  .app-layout {
    display: flex;
    min-height: 100vh;
  }

  .main-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    margin-left: 280px;
  }

  .content {
    flex: 1;
    padding: 2rem;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .overlay {
    display: none;
  }

  .not-found {
    text-align: center;
    padding: 4rem 1rem;
  }

  .not-found h1 {
    font-size: 4rem;
    margin: 0;
    color: var(--color-primary);
  }

  .not-found p {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin: 0.5rem 0 1.5rem;
  }

  .not-found a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
  }

  .not-found a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .main-area {
      margin-left: 0;
    }

    .overlay {
      display: block;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 90;
    }
  }
</style>
