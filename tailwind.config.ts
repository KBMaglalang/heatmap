import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-white": "#FAF3E0",
        "brand-black": "#2B2B2B",
        "brand-interface": "#4A90E2",
        "brand-accent": "#E94E77",
        "brand-pair": "#50E3C2",
      },
    },
  },
  plugins: [],
};
export default config;
