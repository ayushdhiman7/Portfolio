"use client";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "#services", label: "Services", icon: "services" },
  { href: "#projects", label: "Projects", icon: "projects" },
  { href: "#skills", label: "Skills", icon: "skills" },
  { href: "#process", label: "Process", icon: "process" },
];

// Icon components for navigation
const getIcon = (iconType: string) => {
  const iconClass = "w-6 h-6";
  switch (iconType) {
    case "services":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "projects":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "skills":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "process":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "contact":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-[100px] max-xl:px-[60px] max-sm:px-[20px] max-md:gap-[20px] py-0 relative w-full max-w-[1440px] mx-auto">
      <Link
        href="/"
        className="flex items-start overflow-clip px-0 py-[10px] relative max-md:w-auto max-md:shrink"
        aria-label="Home"
      >
        <Logo className="h-[36px] relative shrink-0 w-[219.537px] max-md:max-w-[150px] max-md:h-[28px]" />
      </Link>
      <div className="flex gap-[40px] items-center justify-center relative shrink-0 max-xl:hidden">
        {navLinks.map(({ href, label }, index) => (
          <Link
            key={index}
            href={href}
            onClick={() => {
              if (href.startsWith("#")) {
                const element = document.querySelector(href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="font-normal leading-[28px] relative shrink-0 text-[20px] text-black ml-px"
          >
            {label}
          </Link>
        ))}
        <Button
          href="#contact"
          variant="secondary"
          className="py-[18px] px-[34px]"
          onClick={() => {
            const href = "#contact";
            if (href.startsWith("#")) {
              const element = document.querySelector(href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        >
          Contact Me
        </Button>
      </div>
      <Button
        variant="secondary"
        className="xl:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        MENU
      </Button>
      {/* Offcanvas Menu */}
      <div
        className={cn(
          "xl:hidden fixed top-0 right-0 h-full w-full max-w-[300px] bg-white z-50 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Top Section: Header with Close Button */}
          <div className="flex items-center justify-between p-[20px] border-b border-gray-200">
            <Logo className="h-[28px] w-[28px]  " />
            <button
              onClick={closeMenu}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          
          {/* Middle Section: Navigation Links */}
          <div className="flex flex-col flex-1 py-[20px]">
            {navLinks.map(({ href, label, icon }, index) => (
              <Link
                key={index}
                href={href}
                onClick={(e) => {
                  closeMenu();
                  if (href.startsWith("#")) {
                    e.preventDefault();
                    setTimeout(() => {
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }
                }}
                className="flex items-center gap-[12px] px-[20px] py-[12px] font-normal text-[16px] text-black hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-600">
                  {getIcon(icon)}
                </span>
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Bottom Section: Contact Button */}
          <div className="p-[20px] border-t border-gray-200">
            <Button
              href="#contact"
              variant="secondary"
              className="py-[14px] px-[20px] w-full bg-black text-white hover:bg-black/90 rounded-[8px] text-[16px] justify-center"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                closeMenu();
                const href = "#contact";
                if (href.startsWith("#")) {
                  e.preventDefault();
                  setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
