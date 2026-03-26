/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      colors: {
        bim: {
          bg: "#0b0b0c",
          panel: "#111113",
          line: "rgba(255,255,255,0.12)",
          text: "#f3f4f6",
          muted: "rgba(243,244,246,0.72)",
          accent: "#7c3aed"
        },
      },
      borderRadius: {
        card: "22px",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
