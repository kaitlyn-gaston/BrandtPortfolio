import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_CODELATEST === 'production' || process.env.NODE_ENV === 'production'
    ? '/BrandtPortfolio/' 
    : '/',
  build: {
    outDir: 'dist',
  }
})