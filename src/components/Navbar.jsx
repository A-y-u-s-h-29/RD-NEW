// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Contact Us", href: "#inquiry" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 30);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Active link detection
      const scrollPosition = window.scrollY + 120;

      for (const link of links) {
        const section = document.getElementById(
          link.href.replace("#", "")
        );

        if (section) {
          const { offsetTop, offsetHeight } = section;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []); // Empty dependency array - only runs once

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-[#040316]/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <header className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-[120%] opacity-0"
      }`}>
        <div className={`max-w-7xl mx-auto transition-all duration-300 ${scrolled ? "translate-y-0" : ""}`}>
          <div className="h-16 md:h-[72px] rounded-2xl bg-[#5d709b] backdrop-blur-xl border border-white/40 shadow-lg shadow-[#003194]/5">
            <div className="h-full px-5 md:px-8 flex items-center justify-between">
              {/* Logo */}
              <a
                href="#home"
                className="flex items-start gap-3"
                aria-label="RD Technologies"
              >
                <div className="relative w-60 h-15 flex-shrink-0">
                  <img
                    src="/images/RD (1).gif"
                    alt="RD Technologies Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>

              {/* Desktop Nav */}
              <nav
                className="hidden lg:flex items-center gap-1"
                aria-label="Main navigation"
              >
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeLink === link.href
                        ? "bg-[#003194] text-white"
                        : "text-white hover:text-black hover:bg-[#003194]/5"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="w-px h-6 bg-[#5d709b]/20 mx-2" />

                <a
                  href="#inquiry"
                  className="ml-2 px-5 py-2.5 rounded-xl bg-[#003194] text-white text-sm font-semibold shadow-md shadow-[#003194]/20 hover:bg-[#6D67E4] hover:shadow-[#003194]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Quote
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/60 border border-[#5d709b]/20 flex items-center justify-center text-[#040316] hover:bg-[#003194]/5 transition-colors"
                aria-label="Menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-3" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}>
          <div className="mt-3 max-w-7xl mx-auto rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-[#003194]/5 overflow-hidden">
            <div className="p-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeLink === link.href
                      ? "bg-[#003194] text-white"
                      : "text-[#040316]/80 hover:bg-[#003194]/5 hover:text-[#003194]"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#inquiry"
                onClick={() => setOpen(false)}
                className="mt-3 flex justify-center items-center rounded-xl py-3 font-semibold text-white bg-[#003194] hover:bg-[#6D67E4] transition-colors shadow-md shadow-[#003194]/20"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}