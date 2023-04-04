/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        "my-brown": "#403F3C",
      },
      fontFamily: {
        nanum: ["NanumSquare"],
      },
    },
    screens: {
      sm: "480px",
      md: "600px",
      xmd: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
