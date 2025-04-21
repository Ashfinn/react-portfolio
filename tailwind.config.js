module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Deep Blue
        secondary: "#5b21b6", // Vibrant Purple
        accent: "#14b8a6", // Teal
        surface: "#f8fafc", // Light Gray
        dark: "#0f172a", // Slate
        muted: "#64748b", // Neutral Gray
        highlight: "#facc15", // Warm Yellow
        darkBg: "#1e293b", // Darker Slate for Dark Mode
        darkAccent: "#2dd4bf", // Brighter Teal for Dark Mode
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
