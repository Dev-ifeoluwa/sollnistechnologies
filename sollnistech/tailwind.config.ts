import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10233f",
        paper: "#f3f6f9",
        sun: "#f2a900",
        suntint: "#fde9b0",
        teal: "#0e8f7e",
        tealtint: "#cdeee8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        joinLeft: {
          from: { transform: "translateX(-48px)", opacity: "0" },
          to: { transform: "none", opacity: "1" },
        },
        joinRight: {
          from: { transform: "translateX(48px)", opacity: "0" },
          to: { transform: "none", opacity: "1" },
        },
      },
      animation: {
        "join-left": "joinLeft 1.1s cubic-bezier(.2,.8,.2,1) both",
        "join-right": "joinRight 1.1s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
