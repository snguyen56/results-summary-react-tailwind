/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%, <alpha-value>)",
        "orangey-yellow": "hsl(39, 100%, 56%, <alpha-value>)",
        "green-teal": "hsl(166, 100%, 37%, <alpha-value>)",
        "cobalt-blue": "hsl(234, 85%, 45%, <alpha-value>)",
        "light-slate-blue": "hsl(252, 100%, 67%, <alpha-value>)",
        "light-royal-blue": "hsl(241, 81%, 54%, <alpha-value>)",
        "violet-blue": "hsla(256, 72%, 46%, <alpha-value>)",
        "persian-blue": "hsla(241, 72%, 46%, <alpha-value>)",
        white: "hsl(0, 0%, 100%, <alpha-value>)",
        "pale-blue": "hsl(221, 100%, 96%, <alpha-value>)",
        "light-lavender": "hsl(241, 100%, 89%, <alpha-value>)",
        'attribution': "hsl(228, 45%, 44%, <alpha-value>)",
        "dark-gray-blue": "hsl(224, 30%, 27%, <alpha-value>)",
      },
    },
  },
  plugins: [],
};
