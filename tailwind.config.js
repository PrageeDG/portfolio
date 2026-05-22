/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        seraBlue: "#3B82F6",
        darkBg: "#020617",
        darkNavy: "#0F172A",
        cardBg: "#111827",
        softBlue: "#60A5FA",
        cyanAccent: "#22D3EE",
        textWhite: "#F8FAFC",
        mutedText: "#94A3B8",
      },
      borderColor: {
        sera: "rgba(59,130,246,0.25)",
      },
      boxShadow: {
        seraGlow: "0 0 40px rgba(59,130,246,0.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
