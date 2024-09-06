import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import switchCase from 'svelte-switch-case';

const config = {
  preprocess: [switchCase()],
};

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  config,
  preprocess: vitePreprocess(),
}
