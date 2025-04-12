/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // 👈 Include your root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 This catches all JS/TS/React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
