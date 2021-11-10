module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        loginSocial: "0px 4px 15px rgba(0, 0, 0, 0.11);",
        navItem: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02);",
      },
      width: {
        "9/25": "45%",
        "450": "450px",
        "517": "517px"
      },
      minWidth: {
        loginPage: "580px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [require("daisyui")],
};
