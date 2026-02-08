import { writable } from 'svelte/store';

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
const prefersDark =
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const theme = writable(stored || (prefersDark ? 'dark' : 'light'));

theme.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', value);
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
  }
});

export function toggleTheme() {
  theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
}
