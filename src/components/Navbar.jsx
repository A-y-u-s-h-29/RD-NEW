// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, Building2, Target, Users, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Update this section in Navbar.jsx
const aboutSubLinks = [
  { label: "About Company", href: "/about/company", icon: <Building2 size={16} /> },
  { label: "Why Choose Us", href: "/about/why-choose-us", icon: <Sparkles size={16} /> },
  { label: "How We Work", href: "/about/how-we-work", icon: <Zap size={16} /> },
  { label: "Vision & Mission", href: "/about/vision-mission", icon: <Target size={16} /> },
];

// Also update the main links
const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact Us", href: "/#inquiry" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const aboutRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key to close dropdown
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsAboutOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Only check sections on home page
      if (pathname === "/") {
        const scrollPosition = window.scrollY + 120;
        const sections = ["home", "projects", "products", "industries", "inquiry"];
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveLink(`#${sectionId}`);
              break;
            }
          }
        }
      } else if (pathname === "/about") {
        setActiveLink("/about");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsAboutOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200);
  }, []);

  const handleSubLinkClick = (href) => {
    setIsAboutOpen(false);
    setOpen(false);
  };

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen);
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/about") {
      return pathname === "/about";
    }
    return activeLink === href;
  };

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
              <Link
                href="/"
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
              </Link>

              {/* Desktop Nav */}
              <nav
                className="hidden lg:flex items-center gap-1"
                aria-label="Main navigation"
              >
                {links.map((link) => {
                  if (link.label === "About Us") {
                    return (
                      <div
                        key={link.label}
                        ref={aboutRef}
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          href="/about"
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                            pathname === "/about"
                              ? "bg-[#003194] text-white"
                              : "text-white hover:text-black hover:bg-[#003194]/5"
                          }`}
                          aria-expanded={isAboutOpen}
                          aria-haspopup="true"
                        >
                          About Us
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-300 ${
                              isAboutOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Link>

                        {/* Dropdown */}
                        <div
                          ref={dropdownRef}
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                          className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl shadow-[#003194]/10 transition-all duration-300 origin-top-left ${
                            isAboutOpen
                              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                          }`}
                          role="menu"
                        >
                          <div className="p-2">
                            {aboutSubLinks.map((subLink) => (
                              <Link
                                key={subLink.label}
                                href={subLink.href}
                                onClick={() => handleSubLinkClick(subLink.href)}
                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[#040316]/80 hover:text-[#003194] hover:bg-[#003194]/5 transition-all duration-200 group"
                                role="menuitem"
                              >
                                <span className="text-[#003194]/40 group-hover:text-[#003194] transition-colors">
                                  {subLink.icon}
                                </span>
                                <span className="flex-1">{subLink.label}</span>
                                <span className="w-0.5 h-4 bg-[#003194]/10 group-hover:bg-[#003194] transition-all duration-300 group-hover:h-6" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? "bg-[#003194] text-white"
                          : "text-white hover:text-black hover:bg-[#003194]/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="w-px h-6 bg-[#5d709b]/20 mx-2" />

                <Link
                  href="/#inquiry"
                  className="ml-2 px-5 py-2.5 rounded-xl bg-[#003194] text-white text-sm font-semibold shadow-md shadow-[#003194]/20 hover:bg-[#6D67E4] hover:shadow-[#003194]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Quote
                </Link>
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
              {links.map((link) => {
                if (link.label === "About Us") {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={toggleMobileAbout}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          pathname === "/about"
                            ? "bg-[#003194] text-white"
                            : "text-[#040316]/80 hover:bg-[#003194]/5 hover:text-[#003194]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-300 ${
                            isMobileAboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isMobileAboutOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 pr-2 py-2 space-y-1">
                          {aboutSubLinks.map((subLink, index) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              onClick={() => {
                                setIsMobileAboutOpen(false);
                                setOpen(false);
                              }}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[#040316]/70 hover:text-[#003194] hover:bg-[#003194]/5 transition-all duration-200 group animate-fadeInSlideUp`}
                              style={{
                                animationDelay: `${index * 50}ms`,
                                animationFillMode: 'both'
                              }}
                            >
                              <span className="text-[#003194]/40 group-hover:text-[#003194] transition-colors">
                                {subLink.icon}
                              </span>
                              <span>{subLink.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive(link.href)
                        ? "bg-[#003194] text-white"
                        : "text-[#040316]/80 hover:bg-[#003194]/5 hover:text-[#003194]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/#inquiry"
                onClick={() => setOpen(false)}
                className="mt-3 flex justify-center items-center rounded-xl py-3 font-semibold text-white bg-[#003194] hover:bg-[#6D67E4] transition-colors shadow-md shadow-[#003194]/20"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}