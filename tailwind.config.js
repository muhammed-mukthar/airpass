/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/images/Login photo.png')",
        register: "url('/images/Registration photo.png')",
      },
    },
    screens: {
      "1200px": { max: "1200px" },
      "900px": { max: "900px" },
      "900px-min": { min: "900px" },
      "570px": { max: "570px" },
      "570px-min": { min: "570px" },
      "450px": { max: "450px" },
      "400px": { max: "400px" },
    },
  },
  plugins: [],
};
