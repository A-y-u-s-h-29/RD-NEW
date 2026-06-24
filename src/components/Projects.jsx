// components/Projects.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import { MapPin, Calendar, ChevronRight, Layers } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "National Highway Lighting Project",
    location: "Mumbai-Pune Expressway",
    year: "2024",
    description: "Installation of 250 high mast towers along 50km of national highway with smart lighting controls and real-time monitoring systems.",
    image: "/images/project1.jpg",
    category: "Infrastructure",
    status: "Completed",
    stats: [
      { label: "High Masts Installed", value: "250" },
      { label: "Coverage Span", value: "50 km" },
      { label: "Project Phase", value: "8 Mo." }
    ]
  },
  {
    id: 2,
    title: "International Airport Lighting",
    location: "Rajiv Gandhi International Airport",
    year: "2023",
    description: "Comprehensive lighting solution for runway perimeter and terminal areas with 150 high mast towers featuring advanced wind-resistant technology.",
    image: "/images/project2.jpg",
    category: "Aviation",
    status: "Completed",
    stats: [
      { label: "High Masts Installed", value: "150" },
      { label: "Operational Footprint", value: "120 Ac." },
      { label: "Project Phase", value: "6 Mo." }
    ]
  },
  {
    id: 3,
    title: "Stadium Lighting System",
    location: "Narendra Modi Stadium",
    year: "2023",
    description: "State-of-the-art stadium lighting with 80 high mast towers providing optimal illumination for international cricket matches and events.",
    image: "/images/project3.jpg",
    category: "Sports",
    status: "Completed",
    stats: [
      { label: "High Masts Installed", value: "80" },
      { label: "Seating Capacity", value: "132K" },
      { label: "Project Phase", value: "10 Mo." }
    ]
  },
  {
    id: 4,
    title: "Port Terminal Lighting",
    location: "Kandla Port, Gujarat",
    year: "2024",
    description: "Strategic lighting installation for port operations with corrosion-resistant masts designed for harsh coastal environments.",
    image: "/images/project4.jpg",
    category: "Infrastructure",
    status: "In Progress",
    stats: [
      { label: "High Masts Planned", value: "120+" },
      { label: "Terminal Footprint", value: "250 Ac." },
      { label: "Project Phase", value: "12 Mo." }
    ]
  },
  {
    id: 5,
    title: "Smart City Lighting Project",
    location: "Indore Smart City",
    year: "2024",
    description: "Integration of smart lighting solutions across the city with 300 high mast towers featuring IoT-enabled controls and energy-efficient LEDs.",
    image: "/images/project5.jpg",
    category: "Smart City",
    status: "In Progress",
    stats: [
      { label: "High Masts Planned", value: "300" },
      { label: "Grid Network Coverage", value: "150 km²" },
      { label: "Project Phase", value: "14 Mo." }
    ]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(projects[0].id);

  // Generate unique dynamic structural filter tabs
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Handle setting active project safely during filtering transitions
  const currentProject = projects.find((p) => p.id === selectedId) || filteredProjects[0];

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-[#f4f3f0]">
      {/* Structural Engineering Blueprint Grid Line Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #003194 1px, transparent 1px), linear-gradient(to bottom, #003194 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#003194]/10 via-transparent to-transparent hidden lg:block" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-[#003194]/10 via-transparent to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#040316]/10">
          <div>
            <span className="text-[#5d709b] text-xs uppercase tracking-[0.25em] font-bold block mb-3">
              Corporate Portfolio
            </span>
            <h2 className="font-bold text-[#040316] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
              ENGINEERED <span className="text-[#003194]">IMPACT</span>
            </h2>
          </div>
          <p className="text-[#040316]/60 text-base max-w-md md:text-right">
            High-performance lighting installations delivering mission-critical structural visibility across key Indian sectors.
          </p>
        </div>

        {/* Dynamic Navigation Architecture Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                const firstOfCat = projects.find(p => category === "All" || p.category === category);
                if (firstOfCat) setSelectedId(firstOfCat.id);
              }}
              className={`relative px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "text-white bg-[#003194] shadow-md"
                  : "text-[#040316]/60 hover:text-[#003194] hover:bg-[#003194]/5 bg-white/50 backdrop-blur-sm border border-transparent hover:border-[#003194]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Interactive Workspace Splitter */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Card Showcase Track (Left) */}
          <div className="lg:col-span-5 space-y-4 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const isCurrent = currentProject.id === project.id;
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedId(project.id)}
                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
                      isCurrent
                        ? "bg-white border-[#003194] shadow-lg shadow-[#003194]/5"
                        : "bg-white/60 hover:bg-white border-white/60 hover:border-[#003194]/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#5d709b]">
                            {project.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[#040316]/20" />
                          <span className="text-[10px] font-medium text-[#040316]/50">{project.year}</span>
                        </div>
                        <h3 className={`font-bold text-base transition-colors duration-300 ${isCurrent ? "text-[#003194]" : "text-[#040316]"}`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-[#040316]/50 pt-1">
                          <MapPin size={12} className="text-[#5d709b]" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      
                      <div className={`p-2 rounded-lg border transition-all ${
                        isCurrent ? "bg-[#003194]/5 border-[#003194]/20 text-[#003194]" : "bg-gray-50 border-gray-100 text-gray-400 group-hover:text-[#003194]"
                      }`}>
                        <ChevronRight size={16} className={`transform transition-transform ${isCurrent ? "translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Master Structural Detail Frame (Right) */}
          <div className="lg:col-span-7 sticky top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[#040316]/5 overflow-hidden shadow-xl shadow-[#040316]/5"
              >
                {/* Visual Frame Screen */}
                <div className="relative h-64 sm:h-80 w-full bg-[#003194]/5 group overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Absolute Top Structural Labeling */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-white text-[#040316] text-[10px] font-bold uppercase tracking-widest rounded-md">
                      ID // GRID-00{currentProject.id}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      currentProject.status === "Completed" ? "bg-green-500 text-white" : "bg-amber-500 text-white"
                    }`}>
                      {currentProject.status}
                    </span>
                  </div>

                  {/* Absolute Bottom Title Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-wider mb-1 font-medium">
                      <Layers size={12} />
                      <span>{currentProject.category} Infrastructure</span>
                    </div>
                    <h4 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                      {currentProject.title}
                    </h4>
                  </div>
                </div>

                {/* Technical Metric Specs Frame */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#5d709b] tracking-wider block mb-1">Project Log Description</span>
                    <p className="text-[#040316]/70 text-sm sm:text-base leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Technical Axis Lines & Stats Layout */}
                  <div className="relative border-t border-[#040316]/10 pt-6">
                    {/* Linear Geometric Track Dot */}
                    <div className="absolute -top-1 left-4 w-2 h-2 rounded-full bg-[#003194]" />
                    <div className="absolute -top-1 right-4 w-2 h-2 rounded-full bg-[#003194]/20" />
                    
                    <div className="grid grid-cols-3 gap-4">
                      {currentProject.stats.map((stat, i) => (
                        <div key={i} className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-[#040316]/40 tracking-wider block leading-none">
                            {stat.label}
                          </span>
                          <span className="text-xl sm:text-2xl font-extrabold text-[#003194] tracking-tight block">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Route Accent */}
                  <div className="flex items-center justify-between border-t border-[#040316]/5 pt-4 text-xs">
                    <div className="flex items-center gap-4 text-[#040316]/40">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {currentProject.year}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {currentProject.location}</span>
                    </div>
                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-1 text-[#003194] font-bold uppercase tracking-wider hover:gap-2 transition-all"
                    >
                      Request Specs
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}