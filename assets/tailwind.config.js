module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./js/**/*.js", "./css/**/*.*css", "../lib/*_web/**/*.*ex", "../extra/**/*_web/**/*.*ex"],
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#0F131A"
        },
        // Serendipity Technology brand colors
        emerald: {
          50: "#f0fbff",
          100: "#e0f7fe",
          200: "#b9ecfd",
          300: "#7ddcfb",
          400: "#4FC4F0",
          500: "#2ba8d4",
          600: "#1a8ab8",
          700: "#146e95",
          800: "#0f5573",
          900: "#0a3d55"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
}
