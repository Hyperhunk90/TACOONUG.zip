/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212529", // Charcoal Grey
        foreground: "#F8F9FA", // Off-White
        primary: "#D95D39",    // Hunter Orange
        secondary: "#A9C25D",   // Lime Green
        card: "#2c3136",      // Slightly lighter charcoal for cards
        border: "#495057",      // Border color
        "muted-foreground": "#ADB5BD", // Muted text
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

