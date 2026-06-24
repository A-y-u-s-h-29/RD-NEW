"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const products = [
  "High Mast Tower",
  "Flag Mast – Tubular",
  "Flag Mast – Conical Pole",
  "Intermediate High Mast",
  "Decorative Flag Pole",
  "Sports Ground High Mast",
  "Other / Custom Requirement",
];

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", product: "", height: "", quantity: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section id="inquiry" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="eyebrow mb-3">Get In Touch</p>
            <h2 className="font-display font-extrabold text-navy-900 text-5xl leading-none mb-6">
              REQUEST A <span className="text-amber-500">QUOTE</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Share your project requirements and our team will get back to you within 24 hours with a detailed proposal, specifications sheet, and pricing.
            </p>

            <div className="space-y-5">
              {[
                { label: "📍 Office Address", value: "RD Technologies and Projects Pvt. Ltd., India" },
                { label: "📞 Phone", value: "+91 XXXXX XXXXX" },
                { label: "✉️ Email", value: "info@rdtechnologies.in" },
                { label: "🕐 Business Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{c.label}</p>
                    <p className="text-navy-900 font-medium mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle size={56} className="text-green-500" />
                <h3 className="font-display font-bold text-navy-900 text-3xl">Inquiry Received!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with a detailed response.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", product: "", height: "", quantity: "", message: "" }); }}
                  className="mt-2 px-5 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded hover:bg-amber-500 hover:text-navy-900 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Phone *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Product of Interest *</label>
                  <select name="product" value={form.product} onChange={handleChange} required className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                    <option value="">Select a product</option>
                    {products.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Required Height (m)</label>
                    <input name="height" value={form.height} onChange={handleChange} placeholder="e.g. 20m" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Quantity Required</label>
                    <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 10 nos." className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Project Details / Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your project, site location, and any special requirements..." className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy-900 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-amber-500 hover:text-navy-900 transition-all duration-200 disabled:opacity-70"
                >
                  {loading ? "Sending..." : <><Send size={16} /> Submit Inquiry</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}