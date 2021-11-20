module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        loginSocial: "0px 4px 15px rgba(0, 0, 0, 0.11);",
        navItem: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02);",
        card: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02);",
      },
      width: {
        "9/25": "45%",
        "450": "450px",
        "517": "517px",
        "368": "368px",
      },
      minWidth: {
        loginPage: "580px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [require("daisyui")],
};
