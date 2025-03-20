import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  /*Styles */
  const hamburgerMenuStyles =
    "block w-8 h-0.5 bg-black transition-transform duration-300";

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        <div className="space-y-2">
          <span
            className={`${hamburgerMenuStyles} ${isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
          />
          <span
            className={`${hamburgerMenuStyles} ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`${hamburgerMenuStyles} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-1/2 left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 dark:text-black">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
