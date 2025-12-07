import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  // Scan all these files for classes
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  
  theme: {
    extend: {
      // 1. Dynamic Colors (Mapped to ThemeHead.astro variables)
      colors: {
        primary: 'var(--color-primary)',     // Use as: bg-primary, text-primary
        secondary: 'var(--color-secondary)', // Use as: bg-secondary
        accent: 'var(--color-accent)',       // Use as: border-accent
        page: 'var(--color-bg)',             // Use as: bg-page (for main background)
        body: 'var(--color-text)',           // Use as: text-body (for main text)
      },
      
      // 2. Dynamic Fonts
      fontFamily: {
        sans: ['var(--font-body)'],    // Overrides default sans-serif
        serif: ['var(--font-heading)'], // Overrides default serif
      },
      
      // 3. Dynamic Border Radius
      borderRadius: {
        DEFAULT: 'var(--radius-global)', // Use as: rounded
      }
    },
  },
  
  // 4. Plugins
  plugins: [
    typography, // Enables the 'prose' class for Markdown styling
  ],
};
