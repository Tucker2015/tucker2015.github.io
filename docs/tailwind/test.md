---
sidebar_position: 7
---

# Tailwind

### Sample tailwind.config.js with custom fonts

```tsx title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```
