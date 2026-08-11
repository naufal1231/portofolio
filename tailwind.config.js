/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pg-bg":           "#FFFFFF",
        "pg-bg-alt":       "#F7F7F7",
        "pg-bg-card":      "#FAFAFA",
        "pg-text":         "#111111",
        "pg-text-sec":     "#6B6B6B",
        "pg-border":       "#EAEAEA",
        "pg-accent":       "#B6FF3C",
        "pg-accent-dark":  "#7AC500",
        "pg-accent-soft":  "#E8FFD1",
        "pg-white":        "#FFFFFF",
        "pg-black":        "#111111",
        "pg-gray-1":       "#222222",
        "pg-gray-2":       "#444444",
        "pg-gray-3":       "#888888",
        "pg-gray-4":       "#BBBBBB",
        "pg-gray-5":       "#DDDDDD",
        "pg-error":        "#E53E3E",
      },
      fontFamily: {
        sans:  ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg":     "1rem",
        "xl":     "1.5rem",
        "2xl":    "1.25rem",
        "3xl":    "1.5rem",
        "full":   "9999px",
      },
    },
  },
  plugins: [],
}
