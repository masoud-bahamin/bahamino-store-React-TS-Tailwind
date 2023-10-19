/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1321px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {
      colors: {
        primary: "#029FAE",
        secondary: "#01AD5A",
        Neutral: "#333333",
        page: "#F0F2F3",
        text: "#636270",
        bold: "#272343",
        detail: "#9A9CAA",
        main: "#E5E5E5"
      }
    },
  },
  plugins: [],
}

