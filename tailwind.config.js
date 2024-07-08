/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-black": "Inter-Black",
        "inter-bold": "Inter-Bold",
        "inter-extra-bold": "Inter-ExtraBold",
        "inter-extra-light": "Inter-ExtraLight",
        "inter-light": "Inter-Light",
        "inter-medium": "Inter-Medium",
        "inter-regular": "Inter-Regular",
        "inter-semi-bold": "Inter-SemiBold",
        "inter-thin": "Inter-Thin",
      },
    },
  },
  plugins: [],
};
