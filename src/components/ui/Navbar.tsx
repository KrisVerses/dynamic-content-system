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
    relative cursor-pointer
    hover:text-accent transition-all duration-300
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-full after:h-[1px] after:bg-accent
    after:scale-x-0 after:origin-bottom-right
    hover:after:origin-bottom-left hover:after:scale-x-100
    after:transition-transform after:duration-300
  `;

  return (
    <nav className="w-full flex items-center justify-between px-8">
      {/* Left Section: Logo 
          flex-1: takes up 1/3 of space
          items-center: vertically centers content */}
      <div className="flex-1 flex items-center">
        <figure className="hidden md:flex items-center">
          <img
            src="/images/Logo-Trans.png"
            alt="Kris Verses Logo"
            className="w-[140px] h-[140px] object-contain" // Reduced from 200px
          />
        </figure>
        <figure className="md:hidden flex items-center">
          <img
            src="/images/KV-Logo-Solid.png"
            alt="Kris Verses Mobile Logo"
            className="w-[140px] h-[140px] object-contain" // Reduced from 150px
          />
        </figure>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex-1 flex justify-center items-center">
        {/* Desktop Navigation */}
        <ul className="space-x-10 border border-black p-2 px-6 rounded-full shadow-md bg-gray-50/50 hidden sm:flex">
          {/* Navigation Links with active state highlighting */}
          <Link href="/" passHref>
            <li className={`${linkStyles} ${pathname === "/" ? "text-accent" : ""}`}>
              Home
            </li>
          </Link>
          <Link href="/about" passHref>
            <li className={`${linkStyles} ${pathname === "/about" ? "text-accent" : ""}`}>
              About
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li className={`${linkStyles} ${pathname === "/contact" ? "text-accent" : ""}`}>
              Contact
            </li>
          </Link>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <HamburgerMenu />
        </div>
      </div>

      {/* Right Section: Theme Toggle */}
      <div className="flex-1 flex justify-end items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

/*
TAILWIND BEST PRACTICES EXPLANATION:

1. Layout Structure:
   - Use flex with flex-1 for equal thirds layout
   - items-center ensures vertical alignment
   - justify-between creates equal spacing

2. Responsive Design:
   - hidden/flex classes for conditional rendering
   - md: prefix for desktop styles
   - sm: prefix for tablet and up

3. Image Handling:
   - object-contain preserves aspect ratio
   - Explicit dimensions prevent layout shift
   - Responsive sizes for different screens

4. Interactive Elements:
   - hover: states for interactions
   - after: pseudo-elements for animations
   - transition classes for smooth effects

5. Organization:
   - Group related classes
   - Use comments to separate sections
   - Maintain consistent spacing
*/

/*
 * EXPLANATION:
 * 1. "use client": This directive at the top of the file indicates that this component should be rendered on the client side.
 *    This is necessary because the component uses client-side hooks like usePathname, which are not compatible with server-side rendering.
 * 2. passHref: This prop is used in the Link component to ensure that the href attribute is passed to the child element (li in this case).
 *    This is necessary when the child element is not an anchor (<a>) tag, as the Link component normally expects an anchor tag as its child.
 * 3. Underline Animation:
 *    - relative: Sets the position of the link to relative, which is necessary for the ::after pseudo-element to be positioned absolutely within the link.
 *    - after:content-['']: Creates an empty content for the ::after pseudo-element.
 *    - after:absolute: Positions the ::after pseudo-element absolutely within the link.
 *    - after:left-0 after:bottom-0: Positions the ::after pseudo-element at the bottom left of the link.
 *    - after:w-full after:h-[2px]: Sets the width and height of the ::after pseudo-element to create the underline.
 *    - after:bg-accent: Sets the background color of the ::after pseudo-element to the accent color.
 *    - after:scale-x-0 after:origin-bottom-right: Initially scales the ::after pseudo-element to 0 on the x-axis and sets the transform origin to the bottom right.
 *    - hover:after:origin-bottom-left hover:after:scale-x-100: On hover, changes the transform origin to the bottom left and scales the ::after pseudo-element to 100% on the x-axis.
 *    - after:transition-transform after:duration-300: Adds a transition effect to the transform property with a duration of 300ms.
 */
