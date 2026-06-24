import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10" style={{ background: "#060F1E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded">
                <Zap size={15} className="text-navy-900" fill="#0A1628" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base tracking-wide leading-none">RD TECHNOLOGIES</p>
                <p className="text-[10px] text-steel-400 tracking-widest uppercase leading-none">& Projects Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed">
              Trusted manufacturer of High Mast and Flag Mast systems across India. Quality. Strength. Reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-steel-400 text-sm hover:text-amber-500 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Products</p>
            <ul className="space-y-2">
              {["High Mast Tower", "Flag Mast – Tubular", "Flag Mast – Conical", "Intermediate High Mast", "Decorative Flag Pole", "Sports Ground High Mast"].map((p) => (
                <li key={p}>
                  <a href="#products" className="text-steel-400 text-sm hover:text-amber-500 transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-500 text-xs">
            © 2025 RD Technologies and Projects Pvt. Ltd. All rights reserved.</p>
          <p className="text-steel-500 text-xs">CIN: U28000XXXXXXXXX | GST: XXXXXXXXXXXXXXXXX</p>
        </div>
      </div>
    </footer>
  );
}