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
        primary10: "#E8F7FF",
        primary20: "#D7F0FE",
        primary30: "#9CD9FC",
        primary40: "#53BDFB",
        primary50: "#24ABF9",
        primary60: "#10A4F9",
        primary70: "#068DDB",
        primary80: "#068DDB",
        primary90: "#034D77",
        primary100: "#023350",

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

        bgGray: "#e0e0e0",
      },
      spacing: {
        card: "94vw",
        doubleScreen: "200vw",
        gridWidth: "82.09vw",
      },
      boxShadow: {
        oval: "-16px 16px 32px #0e213e,16px -16px 32px #b7c0cd",
        hole: " inset 8px 8px 16px #c1c1c1,inset -8px -8px 16px  #F6F6F6",
        flat: "0px 0px 8px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        blob: "70% 70% 10% 10%;",
        20: "22px",
      },
      aspectRatio: {
        btn: "6 / 2",
        btnOutlined: "4.45 / 1",
      },
    },
  },
  plugins: [],
};
