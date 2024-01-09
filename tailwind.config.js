/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/components/*.{js,jsx}", "src/pages/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#EAF0EE",
        "amber": "#FFBF00",
        "bookoe": "#8170f2"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
