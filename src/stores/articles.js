import { writable, derived } from 'svelte/store';

const articleData = [
  {
    id: 'getting-started',
    title: 'Getting Started with the Knowledge Base',
    slug: 'getting-started',
    category: 'General',
    tags: ['introduction', 'guide', 'basics'],
    date: '2026-02-01',
    excerpt: 'Learn how to navigate and use this knowledge base effectively.',
    content: `
# Getting Started with the Knowledge Base

Welcome to the Knowledge Base! This guide will help you navigate and make the most of the resources available here.

## Navigation

Use the **sidebar** on the left to browse articles by category. On mobile devices, tap the menu icon to open the sidebar.

## Searching

The search bar at the top of the page lets you find articles by title, content, or tags. Results update as you type.

## Categories

Articles are organized into categories:

- **General** — Overview and introductory content
- **JavaScript** — JavaScript language features and patterns
- **Svelte** — Svelte framework guides and tutorials
- **DevOps** — Deployment, CI/CD, and infrastructure

## Features

- **Dark/Light Mode** — Toggle the theme using the button in the top-right corner
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Markdown Support** — All articles are written in Markdown with full formatting support

## Code Examples

Articles can include syntax-highlighted code blocks:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
\`\`\`

> **Tip:** Use the table of contents within articles to jump to specific sections.
    `
  },
  {
    id: 'javascript-promises',
    title: 'Understanding JavaScript Promises',
    slug: 'javascript-promises',
    category: 'JavaScript',
    tags: ['javascript', 'async', 'promises'],
    date: '2026-02-02',
    excerpt: 'A comprehensive guide to JavaScript Promises, async/await, and error handling patterns.',
    content: `
# Understanding JavaScript Promises

Promises are a fundamental part of modern JavaScript. They represent a value that may be available now, in the future, or never.

## Creating a Promise

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation completed successfully');
  } else {
    reject(new Error('Operation failed'));
  }
});
\`\`\`

## Consuming Promises

### Using .then() and .catch()

\`\`\`javascript
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
\`\`\`

### Using async/await

\`\`\`javascript
async function doWork() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Promise Combinators

| Method | Description |
|--------|-------------|
| \`Promise.all()\` | Waits for all promises to resolve |
| \`Promise.allSettled()\` | Waits for all promises to settle |
| \`Promise.race()\` | Returns the first settled promise |
| \`Promise.any()\` | Returns the first fulfilled promise |

## Example: Fetching Data

\`\`\`javascript
async function fetchUsers() {
  const response = await fetch('/api/users');

  if (!response.ok) {
    throw new Error(\`HTTP error: \${response.status}\`);
  }

  return response.json();
}

// Usage
const users = await fetchUsers();
\`\`\`

## Error Handling Best Practices

1. Always handle rejections — unhandled promise rejections can crash your app
2. Use \`try/catch\` with \`async/await\` for cleaner error handling
3. Create specific error types for different failure cases
4. Consider using \`.finally()\` for cleanup logic

> **Note:** In modern JavaScript, top-level \`await\` is supported in ES modules.
    `
  },
  {
    id: 'svelte-reactivity',
    title: 'Svelte Reactivity In Depth',
    slug: 'svelte-reactivity',
    category: 'Svelte',
    tags: ['svelte', 'reactivity', 'state management'],
    date: '2026-02-03',
    excerpt: 'Explore how Svelte\'s reactivity system works under the hood and learn advanced patterns.',
    content: `
# Svelte Reactivity In Depth

Svelte's reactivity system is one of its most powerful features. Unlike other frameworks that use a virtual DOM, Svelte compiles your code into efficient imperative updates.

## Reactive Declarations

Use the \`$:\` label to create reactive declarations:

\`\`\`svelte
<script>
  let count = 0;
  $: doubled = count * 2;
  $: quadrupled = doubled * 2;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  {count} x2 = {doubled} x4 = {quadrupled}
</button>
\`\`\`

## Reactive Statements

You can also run arbitrary statements reactively:

\`\`\`svelte
<script>
  let count = 0;

  $: if (count >= 10) {
    alert('Count is getting high!');
    count = 0;
  }

  $: console.log(\`The count is \${count}\`);
</script>
\`\`\`

## Updating Arrays and Objects

Svelte's reactivity is triggered by **assignments**. Mutating methods like \`.push()\` won't trigger updates:

\`\`\`svelte
<script>
  let items = [];

  function addItem() {
    // Won't trigger reactivity:
    // items.push('new item');

    // Do this instead:
    items = [...items, 'new item'];
  }
</script>
\`\`\`

## Stores

For state that needs to be shared across components, use Svelte stores:

\`\`\`javascript
import { writable, derived } from 'svelte/store';

// Writable store
const count = writable(0);

// Derived store
const doubled = derived(count, $count => $count * 2);

// Update the store
count.update(n => n + 1);
\`\`\`

## Key Takeaways

- Reactivity is based on **assignments**, not references
- Use \`$:\` for reactive declarations and statements
- Stores provide shared reactive state
- Svelte compiles reactivity into vanilla JS at build time
    `
  },
  {
    id: 'css-grid-guide',
    title: 'A Practical Guide to CSS Grid',
    slug: 'css-grid-guide',
    category: 'CSS',
    tags: ['css', 'layout', 'grid', 'responsive'],
    date: '2026-02-04',
    excerpt: 'Master CSS Grid layout with practical examples and common patterns.',
    content: `
# A Practical Guide to CSS Grid

CSS Grid is a two-dimensional layout system that makes it easy to create complex, responsive layouts.

## Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}
\`\`\`

## Common Layout Patterns

### Holy Grail Layout

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
\`\`\`

### Responsive Card Grid

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
\`\`\`

## Alignment

Grid provides powerful alignment controls:

\`\`\`css
.container {
  /* Align items along the row axis */
  justify-items: center;

  /* Align items along the column axis */
  align-items: center;

  /* Align the grid within its container */
  justify-content: space-between;
  align-content: center;
}
\`\`\`

## Grid vs Flexbox

| Feature | Grid | Flexbox |
|---------|------|---------|
| Dimensions | Two-dimensional | One-dimensional |
| Best for | Page layouts | Component layouts |
| Content-based | \`auto\` sizing | Flex-grow/shrink |
| Overlap | Supported | Not supported |

## Tips

- Use \`minmax()\` for flexible yet constrained sizing
- \`auto-fill\` vs \`auto-fit\`: use \`auto-fit\` to stretch items when there's extra space
- Use \`grid-area\` names for readable, maintainable templates
- Combine Grid with Flexbox — Grid for the overall layout, Flexbox for component internals
    `
  },
  {
    id: 'docker-basics',
    title: 'Docker Fundamentals',
    slug: 'docker-basics',
    category: 'DevOps',
    tags: ['docker', 'containers', 'devops', 'deployment'],
    date: '2026-02-05',
    excerpt: 'Learn the essentials of Docker: images, containers, volumes, and Docker Compose.',
    content: `
# Docker Fundamentals

Docker is a platform for building, shipping, and running applications in containers. Containers package your application with all its dependencies into a standardized unit.

## Key Concepts

- **Image** — A read-only template with instructions for creating a container
- **Container** — A runnable instance of an image
- **Dockerfile** — A text file with instructions to build an image
- **Volume** — Persistent storage for container data
- **Network** — Communication between containers

## Writing a Dockerfile

\`\`\`dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
\`\`\`

## Essential Commands

\`\`\`bash
# Build an image
docker build -t myapp:latest .

# Run a container
docker run -d -p 3000:3000 --name myapp myapp:latest

# List running containers
docker ps

# View logs
docker logs myapp

# Stop a container
docker stop myapp

# Remove a container
docker rm myapp
\`\`\`

## Docker Compose

For multi-container applications, use Docker Compose:

\`\`\`yaml
version: "3.9"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret

volumes:
  pgdata:
\`\`\`

## Best Practices

1. Use specific base image tags (not \`latest\`)
2. Leverage multi-stage builds to reduce image size
3. Order Dockerfile instructions from least to most frequently changing
4. Use \`.dockerignore\` to exclude unnecessary files
5. Run as a non-root user for security
6. Keep images small — use Alpine variants when possible
    `
  },
  {
    id: 'git-workflow',
    title: 'Git Branching Strategies',
    slug: 'git-workflow',
    category: 'DevOps',
    tags: ['git', 'workflow', 'branching', 'collaboration'],
    date: '2026-02-06',
    excerpt: 'Compare popular Git branching strategies and find the right one for your team.',
    content: `
# Git Branching Strategies

Choosing the right branching strategy helps teams collaborate effectively and maintain a clean project history.

## GitHub Flow

A simple strategy with one rule: \`main\` is always deployable.

1. Create a branch from \`main\`
2. Make changes and commit
3. Open a pull request
4. Review and discuss
5. Merge to \`main\` and deploy

\`\`\`bash
git checkout -b feature/user-auth
# ... make changes ...
git add .
git commit -m "Add user authentication"
git push origin feature/user-auth
# Open PR on GitHub
\`\`\`

**Best for:** Small teams, continuous deployment, web applications.

## Trunk-Based Development

All developers work on a single branch (\`main\`/\`trunk\`) with short-lived feature branches.

\`\`\`
main ──●──●──●──●──●──●──●──
        \\──●──/    \\──●──/
       (feature)  (feature)
\`\`\`

**Key rules:**
- Feature branches live less than a day
- Use feature flags for incomplete work
- Automated tests gate all merges

**Best for:** Experienced teams, CI/CD pipelines, high-frequency releases.

## Gitflow

A structured model with dedicated branches for different purposes:

| Branch | Purpose |
|--------|---------|
| \`main\` | Production-ready code |
| \`develop\` | Integration branch |
| \`feature/*\` | New features |
| \`release/*\` | Release preparation |
| \`hotfix/*\` | Production fixes |

**Best for:** Scheduled releases, versioned software, larger teams.

## Comparison

| Criteria | GitHub Flow | Trunk-Based | Gitflow |
|----------|-------------|-------------|---------|
| Complexity | Low | Low | High |
| Release cadence | Continuous | Continuous | Scheduled |
| Team size | Any | Experienced | Large |
| Best for | Web apps | SaaS | Versioned software |

## Tips

- Start simple (GitHub Flow) and adopt complexity only when needed
- Automate your merge checks with CI
- Write clear commit messages following conventional commits
- Delete merged branches to keep the repo clean
    `
  },
  {
    id: 'svelte-components',
    title: 'Building Reusable Svelte Components',
    slug: 'svelte-components',
    category: 'Svelte',
    tags: ['svelte', 'components', 'patterns', 'props'],
    date: '2026-02-07',
    excerpt: 'Best practices for creating flexible, reusable components in Svelte.',
    content: `
# Building Reusable Svelte Components

Well-designed components are the foundation of maintainable Svelte applications. Here are patterns and practices for building reusable components.

## Props and Defaults

\`\`\`svelte
<script>
  export let variant = 'primary';
  export let size = 'md';
  export let disabled = false;
</script>

<button
  class="btn btn-{variant} btn-{size}"
  {disabled}
  on:click
>
  <slot />
</button>
\`\`\`

## Slots for Composition

Use slots to make components flexible:

\`\`\`svelte
<!-- Card.svelte -->
<div class="card">
  <div class="card-header">
    <slot name="header">Default Header</slot>
  </div>
  <div class="card-body">
    <slot />
  </div>
  <div class="card-footer">
    <slot name="footer" />
  </div>
</div>

<!-- Usage -->
<Card>
  <h2 slot="header">My Card Title</h2>
  <p>Card content goes here.</p>
  <button slot="footer">Action</button>
</Card>
\`\`\`

## Event Forwarding

Forward DOM events with the \`on:event\` directive without a handler:

\`\`\`svelte
<button on:click on:mouseenter on:mouseleave>
  <slot />
</button>
\`\`\`

Or dispatch custom events:

\`\`\`svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleSelect(item) {
    dispatch('select', { item });
  }
</script>
\`\`\`

## Component Patterns

### Compound Components

\`\`\`svelte
<!-- Tabs.svelte -->
<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  const activeTab = writable(0);
  setContext('tabs', { activeTab });
</script>

<div class="tabs">
  <slot />
</div>
\`\`\`

### Render Props via Slot Props

\`\`\`svelte
<!-- Hoverable.svelte -->
<script>
  let hovering = false;
</script>

<div
  on:mouseenter={() => hovering = true}
  on:mouseleave={() => hovering = false}
>
  <slot {hovering} />
</div>

<!-- Usage -->
<Hoverable let:hovering>
  <div class:highlighted={hovering}>
    Hover over me!
  </div>
</Hoverable>
\`\`\`

## Guidelines

1. **Single responsibility** — each component does one thing well
2. **Props down, events up** — data flows down, actions flow up
3. **Use slots** for content composition over props
4. **Keep styles scoped** — Svelte scopes styles by default
5. **Document your props** with comments or TypeScript
    `
  },
  {
    id: 'rest-api-design',
    title: 'REST API Design Principles',
    slug: 'rest-api-design',
    category: 'General',
    tags: ['api', 'rest', 'design', 'backend'],
    date: '2026-02-08',
    excerpt: 'Key principles for designing clean, consistent, and developer-friendly REST APIs.',
    content: `
# REST API Design Principles

A well-designed REST API is intuitive, consistent, and easy to use. These principles will help you build APIs that developers enjoy working with.

## URL Structure

Use nouns for resources, not verbs:

\`\`\`
GET    /api/users          # List users
POST   /api/users          # Create a user
GET    /api/users/123      # Get user 123
PUT    /api/users/123      # Update user 123
DELETE /api/users/123      # Delete user 123
\`\`\`

### Nested Resources

\`\`\`
GET /api/users/123/posts        # Posts by user 123
GET /api/users/123/posts/456    # Post 456 by user 123
\`\`\`

## HTTP Status Codes

| Code | Meaning | When to Use |
|------|---------|-------------|
| 200 | OK | Successful GET, PUT |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Validation error |
| 401 | Unauthorized | Missing authentication |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate resource |
| 500 | Server Error | Unexpected failure |

## Pagination

\`\`\`
GET /api/articles?page=2&limit=20

Response:
{
  "data": [...],
  "meta": {
    "page": 2,
    "limit": 20,
    "total": 156,
    "totalPages": 8
  }
}
\`\`\`

## Filtering and Sorting

\`\`\`
GET /api/articles?category=svelte&sort=-date&fields=title,date
\`\`\`

- Use query parameters for filtering
- Prefix with \`-\` for descending sort
- Support field selection to reduce payload size

## Error Responses

Return consistent error objects:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ]
  }
}
\`\`\`

## Versioning

Include the API version in the URL:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## Best Practices

1. Use consistent naming conventions (camelCase or snake_case)
2. Always return JSON with proper \`Content-Type\` headers
3. Implement rate limiting and document the limits
4. Use HATEOAS links for discoverability where practical
5. Write comprehensive API documentation (OpenAPI/Swagger)
    `
  }
];

export const articles = writable(articleData);

export const categories = derived(articles, ($articles) => {
  const cats = [...new Set($articles.map((a) => a.category))];
  return cats.sort();
});

export const allTags = derived(articles, ($articles) => {
  const tagSet = new Set();
  $articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
});

export function getArticleBySlug(slug) {
  return articleData.find((a) => a.slug === slug) || null;
}

export function getArticlesByCategory(category) {
  return articleData.filter((a) => a.category === category);
}

export function getArticlesByTag(tag) {
  return articleData.filter((a) => a.tags.includes(tag));
}

export function searchArticles(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return articleData.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.category.toLowerCase().includes(q)
  );
}
