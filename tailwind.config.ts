import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cgd-pink": "hsla(343, 61%, 52%, 0.8)",
      },
    },
  },
  plugins: [],
} satisfies Config;
