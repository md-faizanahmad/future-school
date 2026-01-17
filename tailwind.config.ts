import type { Config } from "tailwindcss";

export default {
  // In v4, 'content' is often handled automatically,
  // but we keep it for safety in Next.js
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#020617",
          accent: "#3b82f6",
        },
        future: {
          glow: "#fbbf24",
        },
      },
      animation: {
        "heavy-float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
