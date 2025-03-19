/** @type {import('tailwindcss').Config} */
// This JSDoc comment enables TypeScript type checking for the Tailwind config

module.exports = {
  // Specify which files Tailwind should scan for class names
  content: [
    // Look for classes in all JavaScript/TypeScript/JSX/TSX/MDX files in these directories
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',     // Pages directory
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Components directory
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',       // App directory (Next.js 13+ App Router)
  ],

  // Configure dark mode behavior - 'media' means it follows system preferences
  darkMode: 'media',

  // Customize the default Tailwind theme
  theme: {
    extend: {
      // Extend the typography plugin's default styles
      typography: {
        DEFAULT: {
          css: {
            // Use CSS variables for dynamic color theming
            color: 'var(--foreground)',
            // Style all links within typography
            a: {
              color: 'var(--foreground)',
              // Style link hover states
              '&:hover': {
                color: 'var(--foreground)',
              },
            },
          },
        },
      },
    },
  },

  // Add additional Tailwind plugins
  plugins: [
    // Enable the Typography plugin for prose styling of markdown content
    require('@tailwindcss/typography'),
  ],
} 

/*
With @tailwindcss/typography:
Adds the prose class that automatically styles all markdown content
Provides consistent typography across all markdown elements
Handles spacing, lists, quotes, code blocks automatically
Example:
Apply to tailwind.con...
The key difference is:
Without typography plugin: Manual styling of each element
With typography plugin: One prose class handles everything with sensible defaults
It's not that you can't style markdown without it, but the plugin makes it much easier and more consistent.
*/