/**
 * Next.js Configuration with Contentlayer Integration
 * 
 * This configuration file sets up Next.js to work with Contentlayer, enabling:
 * 1. Content processing from markdown files
 * 2. Type-safe content data
 * 3. Hot reloading for content changes
 */

// Import the Contentlayer plugin wrapper function
const { withContentlayer } = require('next-contentlayer')

/** 
 * @type {import('next').NextConfig} 
 * TypeScript type annotation for better IDE support and type checking
 */
const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  // SWC is a Rust-based compiler that's much faster than Terser
    //   swcMinify: true, Not needed because it is already enabled by default
}

// Export the Next.js config wrapped with Contentlayer
// This enables Contentlayer to:
// - Process content during builds
// - Generate TypeScript types
// - Enable hot reloading for content
module.exports = withContentlayer(nextConfig) 