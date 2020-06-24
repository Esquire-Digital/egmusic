module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
  },
  theme: {
    extend: {
      spacing: {
        px: "1px",
        "2px": "2px",
        "36": "9rem",
        "72": "18rem",
        "80": "20rem",
      },
      colors: {
        eg: {
          blue: "#3485a7",
          black: "#424b54",
          contact: "#0d1115",
          outline: "#424b54",
        },
      },
      fontSize: {
        mega: "8rem",
        mighty: "12rem",
        monster: "14rem",
        massive: "16rem",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        ant: ["Anton", "sans-serif"],
      },
      inset: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "10": "10%",
        "20": "20%",
        "30": "30%",
        "40": "40%",
        "50": "50%",
        "60": "60%",
        "70": "70%",
        "80": "80%",
        "90": "90%",
        "100": "100%",
      },
      minHeight: {
        "300": "300px",
        "450": "450px",
      },
      screens: {
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
  },
};
