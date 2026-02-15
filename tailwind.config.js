/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#e8b923",
        "accent-light": "#f5cc4a",
        background: "#0a0f14",
        "card-bg": "#10161c",
        "card-bg-hover": "#141c24",
        surface: "#12181f",
        footer: "#080b0e",
      },
      fontFamily: {
        sans: ["Jost", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
