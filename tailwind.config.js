module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        loginSocial: "0px 4px 15px rgba(0, 0, 0, 0.11);",
        navItem: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02);",
        card: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02);",
        balance:
          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);",
        expenseCard:
          "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);",
        accountEdit: "0px 2px 5.5px rgba(0, 0, 0, 0.06);",
      },
      width: {
        "9/25": "45%",
        "340": "340px",
        "450": "450px",
        "500": "500px",
        "517": "517px",
        "368": "368px",
        "585": "585px",
        "600": "600px",
        "700": "700px",
      },
      minWidth: {
        loginPage: "580px",
      },
      height: {
        360: "360px",
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
