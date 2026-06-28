// components/Footer.jsx
"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight 
} from "lucide-react";

// Social media icons using direct SVG (avoids import issues)
const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#inquiry" },
  ];

  const productLinks = [
    { name: "High Mast Tower", href: "#products" },
    { name: "Flag Mast – Tubular", href: "#products" },
    { name: "Flag Mast – Conical", href: "#products" },
    { name: "Intermediate High Mast", href: "#products" },
    { name: "Decorative Flag Pole", href: "#products" },
    { name: "Sports Ground High Mast", href: "#products" },
  ];

  const socialLinks = [
    { icon: <FacebookIcon size={16} />, name: "Facebook", href: "#" },
    { icon: <TwitterIcon size={16} />, name: "Twitter", href: "#" },
    { icon: <LinkedinIcon size={16} />, name: "LinkedIn", href: "#" },
    { icon: <InstagramIcon size={16} />, name: "Instagram", href: "#" },
    { icon: <YoutubeIcon size={16} />, name: "YouTube", href: "#" },
  ];

  return (
    <footer className="relative bg-[#040316] text-white overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#003194]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#6D67E4]/5 via-transparent to-transparent" />
        
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #ffffff 60px, #ffffff 61px),
                             repeating-linear-gradient(90deg, transparent, transparent 60px, #ffffff 60px, #ffffff 61px)`,
          }}
        />
        
        <div className="absolute top-20 right-20 w-24 h-24 border-l-2 border-b-2 border-white/5 rounded-bl-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border-r-2 border-t-2 border-white/5 rounded-tr-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-14 lg:py-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#003194] to-[#6D67E4] flex items-center justify-center rounded-xl shadow-lg shadow-[#003194]/20">
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base tracking-tight leading-none">
                  RD TECHNOLOGIES
                </p>
                <p className="text-[10px] text-white/40 tracking-widest uppercase leading-none mt-0.5">
                  & Projects Pvt. Ltd.
                </p>
              </div>
            </div>
            
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Trusted manufacturer of High Mast and Flag Mast systems across India. Quality. Strength. Reliability.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#003194]/20 border border-white/5 hover:border-[#003194]/30 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-sm transition-all duration-300 group"
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-sm transition-all duration-300 group"
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/40 hover:text-white/60 transition-colors duration-300 group">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#003194] group-hover:text-[#6D67E4] transition-colors" />
                <span className="text-sm leading-relaxed">
                  68/1523, 5th Floor,
C. M. Mathew Brothers Arcade,
Kannur Road,
Chakkorathukulam,
Kozhikode – 673006,
Kerala, India.
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/40 hover:text-white/60 transition-colors duration-300 group">
                <Phone size={16} className="flex-shrink-0 text-[#003194] group-hover:text-[#6D67E4] transition-colors" />
                <span className="text-sm">+91 85956 52629</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 hover:text-white/60 transition-colors duration-300 group">
                <Mail size={16} className="flex-shrink-0 text-[#003194] group-hover:text-[#6D67E4] transition-colors" />
                <span className="text-sm">info@rdtechnologies.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} RD Technologies and Projects Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-white/30 text-xs">
            {/* <span>CIN: U28000XXXXXXXXX</span>
            <span className="hidden sm:inline w-px h-3 bg-white/10" />
            <span>GST: XXXXXXXXXXXXXXXXX</span> */}
            {/* <span className="hidden sm:inline w-px h-3 bg-white/10" /> */}
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:inline w-px h-3 bg-white/10" />
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}