// src/components/ui/HamburgerMenu.tsx
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 focus:outline-none z-50 w-8 h-8 flex items-center justify-center
                   transition-all duration-300 ease-in-out
                   ${isOpen ? 'fixed right-4 top-4' : 'relative ml-auto'}`}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          {/* Top bar */}
          <span
            className={`absolute left-0 h-0.5 w-6 transform transition-all duration-300 ease-in-out
              ${isOpen ? 'top-3 rotate-45' : 'top-1'}`}
            style={{ backgroundColor: 'var(--hamburger-icon)' }}
          />
          {/* Middle bar */}
          <span
            className={`absolute left-0 top-3 h-0.5 w-6 transform transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            style={{ backgroundColor: 'var(--hamburger-icon)' }}
          />
          {/* Bottom bar */}
          <span
            className={`absolute left-0 h-0.5 w-6 transform transition-all duration-300 ease-in-out
              ${isOpen ? 'top-3 -rotate-45' : 'top-5'}`}
            style={{ backgroundColor: 'var(--hamburger-icon)' }}
          />
        </div>
      </button>

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen shadow-lg 
                   transition-all duration-300 ease-in-out
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          backgroundColor: 'var(--menu-background)',
          color: 'var(--menu-foreground)',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
      >
        <div className="pt-24 px-4">
          <Link href="/"
            className="block px-4 py-2.5 rounded-lg
                     transition-all duration-300 ease-in-out
                     hover:bg-accent hover:bg-opacity-10
                     active:bg-accent active:bg-opacity-20
                     hover:translate-x-1
                     hover:text-accent
                     dark:hover:text-accent
                     dark:hover:bg-accent dark:hover:bg-opacity-10"
            style={{ color: 'var(--menu-foreground)' }}
          >
            Home
          </Link>
          <Link href="/about"
            className="block px-4 py-2.5 rounded-lg mt-2
                     transition-all duration-300 ease-in-out
                     hover:bg-accent hover:bg-opacity-10
                     active:bg-accent active:bg-opacity-20
                     hover:translate-x-1
                     hover:text-accent
                     dark:hover:text-accent
                     dark:hover:bg-accent dark:hover:bg-opacity-10"
            style={{ color: 'var(--menu-foreground)' }}
          >
            About
          </Link>
          <Link href="/contact"
            className="block px-4 py-2.5 rounded-lg mt-2
                     transition-all duration-300 ease-in-out
                     hover:bg-accent hover:bg-opacity-10
                     active:bg-accent active:bg-opacity-20
                     hover:translate-x-1
                     hover:text-accent
                     dark:hover:text-accent
                     dark:hover:bg-accent dark:hover:bg-opacity-10"
            style={{ color: 'var(--menu-foreground)' }}
          >
            Contact
          </Link>

          {/* Theme Toggle Section with enhanced border */}
          <div className="mt-6 pt-4 border-t border-accent border-opacity-20">
            <div className="px-4 py-2.5 flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--menu-foreground)' }}>
                Toggle theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;