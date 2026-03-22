import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Simplified Lavender-based palette (inspired by clash-converter-stitch)
        lavender: {
          50: "#f8f7ff",
          100: "#f0eeff",
          200: "#e1dbff",
          300: "#c9beff",
          400: "#aba4ff",
          500: "#8b7fff",
          600: "#755fff",
        },
        // Simplified neutrals
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Legacy clay colors kept for backward compatibility
        clay: {
          canvas: "#f8f7ff",
          foreground: "#334155",
          muted: "#64748b",
          accent: "#8b7fff",
          accentAlt: "#a855f7",
          accentTertiary: "#06b6d4",
          success: "#10b981",
          warning: "#f59e0b",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Simplified border radius - stitch inspired
        neo: {
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem", // 40px - stitch card radius
          "2xl": "3rem",
        },
      },
      boxShadow: {
        // Simplified 2-layer neumorphic shadows (stitch-inspired)
        "neo": "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
        "neo-sm": "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff",
        "neo-lg": "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "neo-inner": "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
        "neo-button": "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
        "neo-button-active": "inset 4px 4px 8px rgba(166, 171, 189, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.8)",
        "neo-card": "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "neo-input": "inset 4px 4px 8px rgba(166, 171, 189, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.7)",
        // Legacy clay shadows kept for backward compatibility
        "clay-surface": `
          30px 30px 60px #cdc6d9,
          -30px -30px 60px #ffffff,
          inset 10px 10px 20px rgba(139, 92, 246, 0.05),
          inset -10px -10px 20px rgba(255, 255, 255, 0.8)
        `,
        "clay-card": `
          16px 16px 32px rgba(160, 150, 180, 0.2),
          -10px -10px 24px rgba(255, 255, 255, 0.9),
          inset 6px 6px 12px rgba(139, 92, 246, 0.03),
          inset -6px -6px 12px rgba(255, 255, 255, 1)
        `,
        "clay-button": `
          12px 12px 24px rgba(139, 92, 246, 0.3),
          -8px -8px 16px rgba(255, 255, 255, 0.4),
          inset 4px 4px 8px rgba(255, 255, 255, 0.4),
          inset -4px -4px 8px rgba(0, 0, 0, 0.1)
        `,
        "clay-pressed": `
          inset 10px 10px 20px #d9d4e3,
          inset -10px -10px 20px #ffffff
        `,
      },
      animation: {
        "clay-float": "clay-float 8s ease-in-out infinite",
        "clay-float-delayed": "clay-float-delayed 10s ease-in-out infinite",
        "clay-float-slow": "clay-float-slow 12s ease-in-out infinite",
        "clay-breathe": "clay-breathe 6s ease-in-out infinite",
        "blob": "blob 15s ease-in-out infinite",
      },
      keyframes: {
        "clay-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "clay-float-delayed": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(-2deg)" },
        },
        "clay-float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(5deg)" },
        },
        "clay-breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionDuration: {
        "400": "400ms",
        "500": "500ms",
      },
      scale: {
        "92": "0.92",
        "95": "0.95",
      },
    },
  },
  plugins: [],
};

export default config;
