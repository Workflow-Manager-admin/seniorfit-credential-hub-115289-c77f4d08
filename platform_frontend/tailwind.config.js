module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1976d2",
          light: "#42a5f5",
          dark: "#115293",
          contrast: "#fff"
        },
        secondary: {
          DEFAULT: "#43a047",
          light: "#66bb6a",
          dark: "#2b7a2a",
          contrast: "#fff"
        },
        accent: {
          DEFAULT: "#fbc02d",
          light: "#fff263",
          dark: "#c49000",
          contrast: "#212121"
        },
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"]
      },
      fontSize: {
        'base': ['1.125rem', '1.65'],  // Increase base for readability (~18px)
        'lg': ['1.25rem', '1.7'],      // Large default for buttons/inputs
        'xl': ['1.45rem', '1.6'],
        '2xl': ['2.15rem', '1.3'],
      },
      borderRadius: {
        xl: "0.75rem"
      },
      boxShadow: {
        card: "0 2px 12px 0 #0002"
      }
    },
  },
  plugins: [],
};
