module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: " #1F2937",
        secondary: "#FFFFFF",
        light: "#f1f4f5",
        dark: "#373a3c",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1720px",
        "4xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
