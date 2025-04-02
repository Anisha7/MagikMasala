import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  safelist: [
    "text-center",
    "w-full",
    "max-w-xl",
    "max-w-2xl",
    "max-w-4xl",
    "gap-4",
    "gap-6",
    "gap-8",
    "flex",
    "md:flex",
    "flex-col",
    "flex-row",
    "justify-center",
    "items-center",
    "rounded-xl",
    "text-4xl",
    "text-6xl",
    "text-xl",
    "md:text-8xl",
    "md:text-2xl",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d", // richer black
        foreground: "#f5f5f7", // soft Apple-style white
        primary: {
          DEFAULT: "#f7b605",
          foreground: "#0d0d0d",
        },
        secondary: {
          DEFAULT: "#1c1c1e", // dark but clean (like macOS dark mode)
          foreground: "#e5e5e5",
        },
        neutral: {
          100: "#1a1a1a", // still useful for body sections
          200: "#2a2a2e", // subtle bluish-gray
          300: "#3a3a3f",
          500: "#525256", // clean body text gray
          700: "#7e7e87", // muted placeholder gray
        },
        card: {
          DEFAULT: "#141416",
          foreground: "#f5f5f7",
        },
        popover: {
          DEFAULT: "#1c1c1e",
          foreground: "#e5e5e5",
        },
        muted: {
          DEFAULT: "#2d2d2f",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#4A148C", // deep violet accent (keep or replace)
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ff4d4f",
          foreground: "#0d0d0d",
        },
        border: "#292929",
        input: "#1e1e1e",
        ring: "#3f3f46",
        chart: {
          "1": "#f7b605",
          "2": "#4CAF50",
          "3": "#4A148C",
          "4": "#FF6F61",
          "5": "#1E88E5",
        },
        sidebar: {
          DEFAULT: "#121212",
          foreground: "#e0e0e0",
          primary: "#f7b605",
          "primary-foreground": "#0d0d0d",
          accent: "#4A148C",
          "accent-foreground": "#ffffff",
          border: "#292929",
          ring: "#3f3f46",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
export default config

