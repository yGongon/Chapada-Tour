import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { tours } from './src/data/tours';
import { blogPosts } from './src/data/blogPosts';
import { rooms } from './src/data/accommodations';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  const tourRoutes = tours.map(t => `/passeios/${t.slug}`);
  const blogRoutes = blogPosts.map(p => `/blog/${p.slug}`);
  const roomRoutes = rooms.map(a => `/hospedagem/${a.slug}`);

  const staticRoutes = [
    '/',
    '/passeios',
    '/hospedagem',
    '/sobre',
    '/blog',
    '/contato',
    '/politica-de-privacidade',
    '/termos-de-uso',
    '/404', // Gera o 404.html estático para o servidor servir em erros reais
  ];

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom', 'react-helmet-async'],
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    optimizeDeps: {
      exclude: ['vite-ssg-react'],
    },
    ssr: {
      noExternal: ['react-helmet-async', 'motion'],
    },
    ssgOptions: {
      script: 'async',
      formatting: 'none',
      includedRoutes() {
        return [...staticRoutes, ...tourRoutes, ...blogRoutes, ...roomRoutes];
      },
    },
  };
});