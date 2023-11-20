/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00D3EB",
        "secondary": "#0088EB",
        "tertiary": "#0040EB",
      },
    },
  },
  plugins: [],
}

