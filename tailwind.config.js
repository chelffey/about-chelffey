/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { color: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" }
        },
        clr: {
          "100%": { color: "red" }
        }
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "change-colour": "clr 2s ease-in 1"
      }
    }
  },
  plugins: []
};
