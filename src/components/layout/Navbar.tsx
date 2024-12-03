"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background shadow-md">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary" aria-label="Home">
            Nasr International School
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                    onClick={handleLinkClick}
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <Button
              variant="outline"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 md:hidden z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="relative flex flex-col items-start px-6 py-4 bg-background h-full w-full">
          {/* Close Button */}
          <Button
            variant="outline"
            className="ml-auto"
            onClick={toggleMobileMenu}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </Button>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-6 w-full">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Optional: Add ModeToggle if needed in mobile */}
          <div className="mt-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
