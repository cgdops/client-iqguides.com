/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Map utility classes to CSS variables
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        page: 'var(--color-bg)',
        body: 'var(--color-text)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        serif: ['var(--font-heading)'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius-global)',
      }
    },
  },
  plugins: [],
};
