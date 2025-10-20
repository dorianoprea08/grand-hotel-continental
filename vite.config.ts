import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set the base path dynamically so that the built assets are correctly
  // referenced when the site is deployed to GitHub Pages.  During
  // development (with `vite dev`), the base should be `/` so assets load
  // normally.  In production, specify the repository name as the base so
  // that all links and static assets resolve relative to
  // `https://<username>.github.io/<repo>/`.
  base: mode === 'production' ? '/grand-hotel-continental/' : '/',
}));
