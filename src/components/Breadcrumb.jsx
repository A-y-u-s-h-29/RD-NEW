// components/Breadcrumb.jsx
"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-[#040316]/40 hover:text-[#003194] transition-colors flex items-center gap-1"
      >
        <Home size={14} />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-[#040316]/20" />
            {isLast ? (
              <span className="text-[#003194] font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-[#040316]/40 hover:text-[#003194] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}