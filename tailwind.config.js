/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Koulen: ["Koulen"],
      IBMPlexSans: ["IBM Plex Sans", "sans-serif"],
      IBMPlexSansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#275DAD",
        primaryBase: "#5288D8",
        primaryligth: "#97B7E8",
        primaryLigther: "#dce7f7",
        primaryDark: "#173868",
        primaryDarker: "#081323",

        secondry: "#22b36b",
        secondryBase: "#4cdd96",
        secondryligth: "#94ebc0",
        secondryLigther: "#DBF8EA",
        secondryDark: "#146B41",
        secondryDarker: "#072415",

        purple: "#3920B5",
        purpleBase: "#644ADF",
        purpleligth: "#A293EC",
        purpleLigther: "#E0DBF9",
        purpleDark: "#22136C",
        purpleDarker: "#0B0624",

        red: "#BF3115",
        redBase: "#EA5B3F",
        redligth: "#F29D8C",
        redLigther: "#FBDED9",
        redDark: "#731D0D",
        redDarker: "#260A04",
      },
      spacing: {
        card: "94vw",
      },
      boxShadow: {
        oval: "-16px 16px 32px #0e213e,16px -16px 32px #163562",
      },
    },
  },
  plugins: [],
};
