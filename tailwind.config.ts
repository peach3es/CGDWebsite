import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cgd-pink": "hsla(343, 61%, 52%, 0.8)",
        "light-pink": "hsla(343, 73%, 68%, 0.8)",
      },
      transitionProperty: {
        "height-fade": "height, opacity",
      },
      transitionDuration: {
        "300": "0.3s",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
