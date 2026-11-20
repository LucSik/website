import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs, so the built site works both at the domain root and under a
  // GitHub Pages project path such as https://<user>.github.io/personal_website/.
  base: './',
});
