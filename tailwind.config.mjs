/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C3A',
        secondary: '#D97706',
        stone: '#F5F5F4',
        text: '#1C1917',
        muted: '#78716C',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1152px',
      },
    },
  },
  plugins: [],
}
