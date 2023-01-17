/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#122b50",
      gradiantBG:
        "linear-gradient(to left top, #122b50, #1b4572, #216195, #217fb8, #1a9edc)",
      secondry: "#1a9edc",
      accent: "#28d580",
      grayDark: "#273444",
      gray: "#8492a6",
      grayLight: "#d3dce6",
    },
    fontFamily: {
      Koulen: ["Koulen"],
      IBMPlexSans: ["IBM Plex Sans", "sans-serif"],
      IBMPlexSansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
    },

    extend: {
      spacing: {
        card: "94vw",
      },
    },
  },
  plugins: [],
};
