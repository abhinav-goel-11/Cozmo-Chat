/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D5663F",
        gray: "#bfbfbf",
        "secondry-gray":"#9098A1",
        "warn-red":"#FB5757",
        "warn-text":"#F07878",
        "online-green": "#14A661",
        "bg-gradient-1": "rgb(var(--bg-gradient-1))",
        "bg-gradient-2": "rgb(var(--bg-gradient-2))",
        "border-light": "rgba(var(--border-light))",
        "primary-title": "#D9D9D9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
