const theme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#fdfcf9",
        "primary-dark": "#1a1a1a",
        pinkish: {
          100: "#fbeec1", // altın tonlu açık vurgu
          200: "#f4d58d", // zengin altın hover
          300: "#ddb347", // ana altın
        },
        blueish: {
          100: "#f6e6dc", // yumuşak nude
          200: "#e9cbb5", // pastel ten rengi
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: theme("colors.pinkish.300"),
              "&:hover": {
                color: theme("colors.pinkish.200"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.blueish.200"),
            a: {
              color: theme("colors.pinkish.100"),
              "&:hover": {
                color: theme("colors.pinkish.200"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
