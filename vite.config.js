import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// غيّر "masirati" هنا إلى اسم الريبو بالضبط لو رفعته GitHub Pages
// (مثال: https://username.github.io/masirati/ ⇒ base: '/masirati/')
// لو تستخدم Vercel أو Netlify، خله '/'
export default defineConfig({
  plugins: [react()],
  base: '/masirati/',
});
