module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "semi-white": "#bcbedc",
        "semi-blue": "#3577ff",
        sky: "rgb(18,172,253)",
        blue: "rgb(61,180,242)",
        white: "#ffff",
        color: "rgb(159,173,189)",
        media: "hsl(50,52%,75%)",
        "text-media": "hsl(42,37%,22%)",
        100: "rgb(21,31,46)",
        "#0a1625": "#0a1625",
        "#11161d": "#11161d",
        "#3db4f2": "#3db4f2",
        "#edf1f5": "#edf1f5",
        "#2e3c48": "#2e3c48",
        "#46546b": "#46546b",
        "#2b2d42": "#2b2d42",
        "gray-500": "rgb(100,115,128)",
        "gray-600": "rgb(139,160,178)",
        "gray-700": "rgb(116,136,153)",
        "gray-800": "rgb(64,78,92)",
        "gray-900": "rgb(201,215,227)",
        "color-gray-900": "rgb(81,97,112)",
        card: "hsl(42,37%,22%)",
        "blue-200": "rgb(237,241,245)",
        star: "#f7bf63",
        heart: "#e85d75",
      },
      fontFamily: {
        sans: ["Overpass"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        shadow: "0 2px 10px rgb(8 150 230 / 60%)",
      },
      transform: {
        scale: {
          103: "1.03",
        },
      },
      container: {
        padding: "5rem",
      },
      fontWeight: {
        bold: "700",
      },
      fontSize: {
        site: "1.6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
