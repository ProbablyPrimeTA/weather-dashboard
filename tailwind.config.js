/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        blue: {
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
        },
        gray: {
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
        indigo: {
          50: '#eef2ff',
          600: '#4f46e5',
          700: '#4338ca',
        },
        yellow: {
          500: '#eab308',
        },
        red: {
          500: '#ef4444',
        },
      },
    },
  },
  plugins: [],
} 