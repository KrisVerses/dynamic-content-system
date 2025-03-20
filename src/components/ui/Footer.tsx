// src/components/ui/Footer.tsx
"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`
            w-full py-8 mt-16
            border-t transition-colors duration-300
            ${
              isDark
                ? "border-gray-800 bg-primary"
                : "border-gray-200 bg-gray-50"
            }
        `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/Small-Logo-2.svg"
                alt="Kris Verses Logo"
                className="h-14 w-14 rounded-full"
              />
              <span
                className={`ml-2 text-lg font-semibold
                                ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Dynamic Content System
              </span>
            </Link>
            <p
              className={`mt-4 text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A modern content management system built with Next.js,
              Contentlayer, and MDX for dynamic content creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-sm font-semibold 
                            ${isDark ? "text-gray-100" : "text-gray-900"}`}
            >
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className={`text-sm hover:text-accent transition-colors
                                            ${
                                              isDark
                                                ? "text-gray-400"
                                                : "text-gray-600"
                                            }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className={`text-sm font-semibold 
                            ${isDark ? "text-gray-100" : "text-gray-900"}`}
            >
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/docs"
                  className={`text-sm hover:text-accent transition-colors
                                        ${
                                          isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                        }`}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`text-sm hover:text-accent transition-colors
                                        ${
                                          isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                        }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`
                    mt-8 pt-8 
                    border-t flex flex-col sm:flex-row justify-between items-center
                    ${isDark ? "border-gray-800" : "border-gray-200"}
                `}
        >
          {/* Copyright */}
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            © {new Date().getFullYear()} Dynamic Content System. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {[
              { icon: FaGithub, href: "https://github.com" },
              { icon: FaTwitter, href: "https://twitter.com" },
              { icon: FaLinkedin, href: "https://linkedin.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl hover:text-accent transition-colors
                                    ${
                                      isDark ? "text-gray-400" : "text-gray-600"
                                    }`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
