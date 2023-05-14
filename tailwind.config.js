/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#661AE6",

          secondary: "#D926AA",

          accent: "#1FB2A5",

          neutral: "#191D24",

          background: '#F3F3F3',

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#FF3811",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
