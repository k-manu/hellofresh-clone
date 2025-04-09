"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">NomNom<span className="text-green-600">Box</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu("plans")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-orange-600"
                >
                  Our Plans <ChevronDown className="h-4 w-4" />
                </button>
                {activeSubmenu === "plans" && (
                  <div className="absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white p-2 shadow-md">
                    <Link href="/plans/vegetarian" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Vegetarian
                    </Link>
                    <Link href="/plans/veg-special" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Veg Special
                    </Link>
                    <Link href="/plans/non-veg" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Non-Veg Delights
                    </Link>
                    <Link href="/plans/family" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Family Feasts
                    </Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu("menus")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-orange-600"
                >
                  Our Menus <ChevronDown className="h-4 w-4" />
                </button>
                {activeSubmenu === "menus" && (
                  <div className="absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white p-2 shadow-md">
                    <Link href="/menus/north-indian" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      North Indian
                    </Link>
                    <Link href="/menus/south-indian" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      South Indian
                    </Link>
                    <Link href="/menus/indo-chinese" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Indo-Chinese
                    </Link>
                    <Link href="/menus/street-food" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Street Food
                    </Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu("about")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-orange-600"
                >
                  About Us <ChevronDown className="h-4 w-4" />
                </button>
                {activeSubmenu === "about" && (
                  <div className="absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white p-2 shadow-md">
                    <Link href="/about/our-story" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Our Story
                    </Link>
                    <Link href="/about/how-it-works" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      How It Works
                    </Link>
                    <Link href="/about/careers" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600">
                      Careers
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link href="/sustainability" className="block px-4 py-2 text-sm font-medium hover:text-orange-600">
                  Sustainability
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login Button */}
          <button className="rounded-md border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50">
            Log in
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => toggleSubmenu("plans")}
                  className="flex w-full items-center justify-between py-2"
                >
                  <span>Our Plans</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      activeSubmenu === "plans" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeSubmenu === "plans" && (
                  <ul className="mt-2 ml-4 space-y-2">
                    <li>
                      <Link href="/plans/vegetarian" className="block py-1">
                        Vegetarian
                      </Link>
                    </li>
                    <li>
                      <Link href="/plans/veg-special" className="block py-1">
                        Veg Special
                      </Link>
                    </li>
                    <li>
                      <Link href="/plans/non-veg" className="block py-1">
                        Non-Veg Delights
                      </Link>
                    </li>
                    <li>
                      <Link href="/plans/family" className="block py-1">
                        Family Feasts
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => toggleSubmenu("menus")}
                  className="flex w-full items-center justify-between py-2"
                >
                  <span>Our Menus</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      activeSubmenu === "menus" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeSubmenu === "menus" && (
                  <ul className="mt-2 ml-4 space-y-2">
                    <li>
                      <Link href="/menus/north-indian" className="block py-1">
                        North Indian
                      </Link>
                    </li>
                    <li>
                      <Link href="/menus/south-indian" className="block py-1">
                        South Indian
                      </Link>
                    </li>
                    <li>
                      <Link href="/menus/indo-chinese" className="block py-1">
                        Indo-Chinese
                      </Link>
                    </li>
                    <li>
                      <Link href="/menus/street-food" className="block py-1">
                        Street Food
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => toggleSubmenu("about")}
                  className="flex w-full items-center justify-between py-2"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      activeSubmenu === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeSubmenu === "about" && (
                  <ul className="mt-2 ml-4 space-y-2">
                    <li>
                      <Link href="/about/our-story" className="block py-1">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/how-it-works" className="block py-1">
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/careers" className="block py-1">
                        Careers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/sustainability" className="block py-2">
                  Sustainability
                </Link>
              </li>
              <li className="pt-2">
                <button className="w-full rounded-md border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50">
                  Log in
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
