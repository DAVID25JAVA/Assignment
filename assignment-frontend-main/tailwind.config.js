/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "custom-darkblue": "#000033",
      "custom-lightblue": "#001a4d",
      "custom-white":"#ffffff",
      "custom-red":"#ff0066",
    }
  },
  plugins: [],
}