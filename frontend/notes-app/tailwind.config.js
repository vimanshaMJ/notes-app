/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensures all files in src are included
    "./pages/**/*.{html,js,jsx}", // Include files in pages directory
    "./components/**/*.{html,js,jsx}", // Include files in components directory
  ],
  theme: {
    extend: {
      //colors user in the project
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E",
        primaryBlue: "#80CAFF",
      },
    },
  },
  plugins: [],
};
