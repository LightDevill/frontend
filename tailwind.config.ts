import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./*.{html,js,ts,jsx,tsx}"],
  theme: {
    "name": "Dark",
    "fontFamily": {
      "sans": ["Oswald", "ui-sans-serif", "system-ui", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""]
    },
    "extend": {
      "fontFamily": {
        "title": ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""],
        "body": ["Oswald", "ui-sans-serif", "system-ui", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""]
      },
      "colors": {
        "neutral": {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
          "DEFAULT": "#6b7280"
        },
        "primary": {
          "50": "#F1F2FF",
          "100": "#EAECFF",
          "200": "#D4D7FF",
          "300": "#747FFF",
          "400": "#6872E6",
          "500": "#5D66CC",
          "600": "#575FBF",
          "700": "#464C99",
          "800": "#343973",
          "900": "#292C59",
          "DEFAULT": "#747FFF"
        },
        "success": {
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d"
        },
        "warning": {
          "50": "#fffbeb",
          "100": "#fef3c7",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309"
        },
        "error": {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c"
        },
        "info": {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8"
        }
      },
      "fontSize": {
        "xs": ["13.5px", { "lineHeight": "21.6px" }],
        "sm": ["15.75px", { "lineHeight": "23.625px" }],
        "base": ["18px", { "lineHeight": "28.8px" }],
        "lg": ["20.25px", { "lineHeight": "30.375px" }],
        "xl": ["22.5px", { "lineHeight": "31.499999999999996px" }],
        "2xl": ["27px", { "lineHeight": "35.1px" }],
        "3xl": ["33.75px", { "lineHeight": "40.5px" }],
        "4xl": ["40.5px", { "lineHeight": "46.574999999999996px" }],
        "5xl": ["54px", { "lineHeight": "59.400000000000006px" }],
        "6xl": ["67.5px", { "lineHeight": "74.25px" }],
        "7xl": ["81px", { "lineHeight": "85.05px" }],
        "8xl": ["108px", { "lineHeight": "113.4px" }],
        "9xl": ["144px", { "lineHeight": "151.20000000000002px" }]
      },
      "borderRadius": {
        "none": "0px",
        "sm": "2px",
        "DEFAULT": "4px",
        "md": "6px",
        "lg": "8px",
        "xl": "12px",
        "2xl": "16px",
        "3xl": "24px",
        "full": "9999px"
      },
      "spacing": {
        "0": "0px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "28": "112px",
        "32": "128px",
        "36": "144px",
        "40": "160px",
        "44": "176px",
        "48": "192px",
        "52": "208px",
        "56": "224px",
        "60": "240px",
        "64": "256px",
        "72": "288px",
        "80": "320px",
        "96": "384px",
        "px": "1px",
        "0.5": "2px",
        "1.5": "6px",
        "2.5": "10px",
        "3.5": "14px"
      },
      "animation": {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      "keyframes": {
        "fadeIn": {
          "0%": { "opacity": "0" },
          "100%": { "opacity": "1" }
        },
        "slideUp": {
          "0%": { "transform": "translateY(10px)", "opacity": "0" },
          "100%": { "transform": "translateY(0)", "opacity": "1" }
        }
      },
      "boxShadow": {
        "auth": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    }
  },
  plugins: [],
  darkMode: 'class',
  important: '#webcrumbs'
};

export default config;