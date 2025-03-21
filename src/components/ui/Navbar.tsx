"use client"; // Indicates this component runs on client-side

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  // Get current path for active link highlighting
  const pathname = usePathname();

  // Base styles for nav links with hover animation
  const linkStyles = `
    relative cursor-pointer font-semibold tracking-wide
    hover:text-accent transition-all duration-300
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-full after:h-[1px] after:bg-accent
    after:scale-x-0 after:origin-bottom-right
    hover:after:origin-bottom-left hover:after:scale-x-100
    after:transition-transform after:duration-300
  `;

  return (
    <nav className="w-full bg-background">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center px-6 md:px-12 backdrop-blur-md">
        {/* Left Section: Logo */}
        <div className="flex items-center w-[240px]">
          <Link href="/" passHref>
            <figure className="flex items-center">
              <img
                src="/images/Small-Logo.svg"
                alt="Kris Verses Logo"
                className="w-[160px] h-[160px] object-contain rounded-full"
              />
            </figure>
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="relative flex-1 flex justify-end items-center">
          {/* Desktop Navigation */}
          <ul
            className="space-x-10 border border-black/50 p-2.5 px-6 rounded-full  items-center
                      shadow-md hidden sm:flex dark:text-black"
          >
            <Link href="/" passHref>
              <li
                className={`${linkStyles} ${
                  pathname === "/" ? "text-accent" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/about" passHref>
              <li
                className={`${linkStyles} ${
                  pathname === "/about" ? "text-accent" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li
                className={`${linkStyles} ${
                  pathname === "/contact" ? "text-accent" : ""
                }`}
              >
                Contact
              </li>
            </Link>
            {/* Right Section: Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </ul>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
 * NAVBAR LAYOUT & CENTERING STRATEGY
 * =================================
 *
 * 1. Container Width Management
 *    -------------------------
 *    max-w-7xl: Limits max width to 1280px to prevent excessive stretching
 *    mx-auto: Centers the navbar container horizontally
 *    w-full: Ensures full width up to the max width
 *
 *    Example:
 *    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
 *
 * 2. Three-Column Layout System
 *    -------------------------
 *    Left/Right sections: w-[240px]
 *    - Provides consistent space for logo and theme toggle
 *    - Prevents layout shift when content changes
 *
 *    Center section: flex-1
 *    - Allows dynamic expansion of navigation area
 *    - Maintains proper spacing between fixed-width sides
 *
 * 3. Spacing Architecture
 *    -------------------
 *    Container padding: px-6 md:px-12
 *    Navigation gaps: space-x-8
 *    Center section margin: mx-8
 *    Purpose: Creates consistent spacing and prevents content overlap
 *
 * 4. Responsive Design
 *    ----------------
 *    Desktop navigation: sm:flex
 *    Mobile menu: sm:hidden
 *    Logo sizing: Adaptive based on breakpoints
 *    Padding: Responsive using Tailwind prefixes
 *
 * 5. Visual Alignment
 *    ---------------
 *    Vertical centering: items-center
 *    Section spacing: justify-between
 *    Navigation centering: justify-center
 *    Theme toggle position: justify-end
 *
 * 6. Implementation Benefits
 *    ---------------------
 *    - Maintains symmetry across screen sizes
 *    - Prevents excessive content spread
 *    - Ensures consistent alignment and spacing
 *    - Facilitates responsive adjustments
 *
 * UNDERLINE ANIMATION
 * ==================
 * Base setup:
 *    relative: Positions link for pseudo-element
 *    after:content-[''] after:absolute: Creates underline element
 *    after:left-0 after:bottom-0: Positions at bottom
 *    after:w-full after:h-[1px]: Sets dimensions
 *
 * Animation:
 *    after:bg-accent: Sets underline color
 *    after:scale-x-0: Initially hidden
 *    after:origin-bottom-right: Starting point
 *    hover:after:origin-bottom-left: Transition point
 *    hover:after:scale-x-100: Show on hover
 *    after:transition-transform after:duration-300: Smooth animation
 *
 * CLIENT-SIDE RENDERING
 * ====================
 * - Component marked with "use client"
 * - Required for usePathname hook
 * - Enables client-side interactivity
 * - Link usage optimized with passHref
 */
