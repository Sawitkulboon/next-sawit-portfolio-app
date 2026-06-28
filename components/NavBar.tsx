// src/components/NavBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // รายการเมนูและ Route ตามข้อกำหนดของระบบ
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/me/skills" },
    { name: "Projects", path: "/me/projects" },
    { name: "Gallery", path: "/me/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // ฟังก์ชันช่วยเช็คหน้าปัจจุบัน
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="font-prompt text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              MY.PORTFOLIO
            </Link>
          </div>

          {/* Menu สำหรับคอมพิวเตอร์ (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-prompt px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ปุ่ม Hamburger Menu สำหรับหน้าจอมือถือ */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu สำหรับมือถือ (Mobile) */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-slate-950 border-b border-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-prompt block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
