"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-navy-900 border border-amber-500 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-amber-500 hover:text-navy-900 transition-all"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}