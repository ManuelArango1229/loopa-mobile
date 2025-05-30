/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkbg: "#09090A",
        lightbg: "#FFFAFA",

        card: "#18181B",
        lightCard: "#F8FAFC",

        button: "#8B5CF6",

        text: "#FFFFFF",
        lightText: "#1A1A1A",

        mutedText: "#A1A1AA",
        lightMutedText: "#52525B",

        border: "#27272A",
        lightBorder: "#E4E4E7",

        primary: "#8B5CF6",
        lightPrimary: "#7C3AED",

        primarySoft: "#A78BFA",
        lightPrimarySoft: "#DDD6FE",

        inputText: "#EDE9FE",
      },
    },
  },
  plugins: [],
};
