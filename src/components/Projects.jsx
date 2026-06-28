// components/Projects.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Layers, 
  Play, 
  Image as ImageIcon,
  X,
  Maximize2,
  ChevronLeft,
  ChevronDown,
  Ruler,
  Scale,
  Wind,
  Zap,
  Shield,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Settings,
  Plus,
  Minus,
  Move
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Flag Mast at Sachidananda College, Bihar",
    location: "Bihar, India",
    year: "2024",
    description:
      "Supply and installation of a premium national flag mast for the Sachidananda College campus, enhancing the institution's identity and outdoor infrastructure.",
    category: "Education",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (1).jpeg" },
      { type: "video", src: "/videos/project (1).mp4", poster: "/images/project (1).jpeg" }
    ],
    technical: {
      height: "18 Meters",
      material: "Galvanized Steel",
      windResistance: "150 km/h",
      foundation: "RCC Foundation",
      finish: "Powder Coated",
      weight: "1200 kg",
      installationTime: "5 Days",
      warranty: "10 Years"
    },
    stats: [
      { label: "Mast Type", value: "Flag Mast" },
      { label: "Location", value: "College Campus" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: 2,
    title: "National Flag at Bareilly Railway Station",
    location: "Bareilly, Uttar Pradesh",
    year: "2023",
    description:
      "Installation of a high-quality national flag mast at Bareilly Railway Station, improving the station's visual appeal and civic presence.",
    image: "/images/project (2).jpeg",
    category: "Railways",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (2).jpeg" },
      { type: "video", src: "/videos/project (2).mp4", poster: "/images/project (2).jpeg" }
    ],
    technical: {
      height: "16 Meters",
      material: "Galvanized Steel",
      windResistance: "130 km/h",
      foundation: "RCC Foundation",
      finish: "Powder Coated",
      weight: "950 kg",
      installationTime: "4 Days",
      warranty: "10 Years"
    },
    stats: [
      { label: "Mast Type", value: "Flag Mast" },
      { label: "Sector", value: "Railways" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    id: 3,
    title: "National Flag at DDA Park",
    location: "Delhi, India",
    year: "2023",
    description:
      "Installation of a monumental flag mast in DDA Park to enhance the public space and create a prominent landmark for visitors.",
    image: "/images/project (3).jpeg",
    category: "Public Parks",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (3).jpeg" },
      { type: "video", src: "/videos/project (3).mp4", poster: "/images/project (3).jpeg" }
    ],
    technical: {
      height: "14 Meters",
      material: "Stainless Steel",
      windResistance: "120 km/h",
      foundation: "RCC Foundation",
      finish: "Chrome Plated",
      weight: "800 kg",
      installationTime: "3 Days",
      warranty: "12 Years"
    },
    stats: [
      { label: "Mast Type", value: "Flag Mast" },
      { label: "Project Area", value: "Public Park" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    id: 4,
    title: "National Flag at Jodhpur Railway Station",
    location: "Jodhpur, Rajasthan",
    year: "2024",
    description:
      "Design, fabrication, and installation of a premium national flag mast for Jodhpur Railway Station with durable corrosion-resistant construction.",
    image: "/images/project (4).jpeg",
    category: "Railways",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (4).jpeg" },
    ],
    technical: {
      height: "20 Meters",
      material: "Galvanized Steel",
      windResistance: "160 km/h",
      foundation: "RCC Foundation",
      finish: "Powder Coated",
      weight: "1500 kg",
      installationTime: "6 Days",
      warranty: "15 Years"
    },
    stats: [
      { label: "Mast Type", value: "Flag Mast" },
      { label: "Sector", value: "Railways" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: 5,
    title: "20M National Flag Mast at Rashtrapati Bhavan",
    location: "New Delhi",
    year: "2024",
    description:
      "Installation of a 20-meter national flag mast at Rashtrapati Bhavan using precision engineering and premium-quality materials.",
    image: "/images/project (5).jpeg",
    category: "Government",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (5).jpeg" },
       ],
    technical: {
      height: "20 Meters",
      material: "Telescopic Steel",
      windResistance: "180 km/h",
      foundation: "Deep RCC Foundation",
      finish: "Premium Powder Coated",
      weight: "1800 kg",
      installationTime: "7 Days",
      warranty: "15 Years"
    },
    stats: [
      { label: "Height", value: "20 M" },
      { label: "Mast Type", value: "Flag Mast" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: 6,
    title: "20M High Mast at Pranab Mukherjee Library",
    location: "New Delhi",
    year: "2024",
    description:
      "Installation of a 20-meter high mast lighting system at the Pranab Mukherjee Library to provide efficient illumination across the premises.",
    image: "/images/project (6).jpeg",
    category: "Government",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (6).jpeg" },
    ],
    technical: {
      height: "20 Meters",
      material: "Galvanized Steel",
      windResistance: "150 km/h",
      foundation: "RCC Foundation",
      finish: "Hot Dip Galvanized",
      weight: "1400 kg",
      installationTime: "5 Days",
      warranty: "12 Years"
    },
    stats: [
      { label: "Height", value: "20 M" },
      { label: "Application", value: "High Mast" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: 7,
    title: "12.5M High Mast at Patel Park, Shivpuri",
    location: "Shivpuri, Madhya Pradesh",
    year: "2024",
    description:
      "Supply and installation of a 12.5-meter high mast lighting system for improved visibility and safety within Patel Park.",
    image: "/images/project (7).jpeg",
    category: "Public Parks",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (7).jpeg" },
    ],
    technical: {
      height: "12.5 Meters",
      material: "Galvanized Steel",
      windResistance: "120 km/h",
      foundation: "RCC Foundation",
      finish: "Powder Coated",
      weight: "700 kg",
      installationTime: "3 Days",
      warranty: "10 Years"
    },
    stats: [
      { label: "Height", value: "12.5 M" },
      { label: "Application", value: "High Mast" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: 8,
    title: "20M Stadium Mast at Rashtrapati Bhavan",
    location: "New Delhi",
    year: "2024",
    description:
      "Installation of a 20-meter stadium mast designed to deliver uniform, high-intensity illumination for large outdoor areas.",
    image: "/images/project (8).jpeg",
    category: "Government",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (8).jpeg" },
      { type: "image", src: "/images/project (8)1.jpeg" },
      { type: "image", src: "/images/project (8)2.jpeg" },
        ],
    technical: {
      height: "20 Meters",
      material: "Heavy Duty Steel",
      windResistance: "170 km/h",
      foundation: "Deep RCC Foundation",
      finish: "Hot Dip Galvanized",
      weight: "1600 kg",
      installationTime: "6 Days",
      warranty: "15 Years"
    },
    stats: [
      { label: "Height", value: "20 M" },
      { label: "Application", value: "Stadium Mast" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: 9,
    title: "High Mast at Gandhi Park, Shivpuri",
    location: "Shivpuri, Madhya Pradesh",
    year: "2024",
    description:
      "High mast lighting installation at Gandhi Park to provide reliable illumination, improve public safety, and enhance the overall visitor experience.",
    image: "/images/project (90).jpeg",
    category: "Public Parks",
    status: "Completed",
    media: [
      { type: "image", src: "/images/project (90).jpeg" },
    ],
    technical: {
      height: "15 Meters",
      material: "Galvanized Steel",
      windResistance: "130 km/h",
      foundation: "RCC Foundation",
      finish: "Powder Coated",
      weight: "850 kg",
      installationTime: "4 Days",
      warranty: "10 Years"
    },
    stats: [
      { label: "Application", value: "High Mast" },
      { label: "Project Area", value: "Public Park" },
      { label: "Year", value: "2024" },
    ],
  },
];

// Video Player Component
const VideoPlayer = ({ src, poster, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const val = parseFloat(e.target.value);
    video.volume = val;
    setVolume(val);
    if (val === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const handleProgressChange = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const val = parseFloat(e.target.value);
    video.currentTime = (val / 100) * video.duration;
    setProgress(val);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const changePlaybackRate = () => {
    const video = videoRef.current;
    if (!video) return;
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    video.playbackRate = rates[nextIndex];
    setPlaybackRate(rates[nextIndex]);
  };

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        playsInline
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="text-white text-xs font-medium">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="flex-1 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
            <span className="text-white text-xs font-medium">{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="text-white hover:text-[#6D67E4] transition-colors p-1"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={toggleMute}
                className="text-white hover:text-[#6D67E4] transition-colors p-1"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={changePlaybackRate}
                className="text-white hover:text-[#6D67E4] transition-colors text-xs font-medium px-2 py-1 rounded bg-white/10"
              >
                {playbackRate}x
              </button>
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-[#6D67E4] transition-colors p-1"
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lightbox Component
const Lightbox = ({ media, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const currentMedia = media[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  const navigate = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < media.length) {
      setCurrentIndex(newIndex);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const zoomIn = () => {
    setScale(Math.min(scale + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(Math.max(scale - 0.25, 0.5));
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.min(Math.max(scale + delta, 0.5), 3);
    setScale(newScale);
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
        >
          <X size={28} />
        </button>

        {/* Media Counter */}
        {media.length > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium z-10 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full">
            {currentIndex + 1} / {media.length}
          </div>
        )}

        {/* Media Display */}
        <div 
          ref={containerRef}
          className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {currentMedia.type === 'video' ? (
            <VideoPlayer 
              src={currentMedia.src} 
              poster={currentMedia.poster}
              onClose={onClose}
            />
          ) : (
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onDoubleClick={handleDoubleClick}
              style={{ cursor: scale > 1 ? 'grab' : 'default' }}
            >
              <motion.div
                animate={{
                  scale: scale,
                  x: position.x,
                  y: position.y,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-full max-h-full"
              >
                <Image
                  src={currentMedia.src}
                  alt="Project media"
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-[85vh]"
                  draggable={false}
                />
              </motion.div>
            </div>
          )}
        </div>

        {/* Zoom Controls for Images */}
        {currentMedia.type !== 'video' && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            <button
              onClick={zoomOut}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <Minus size={18} />
            </button>
            <span className="text-white text-xs font-medium">{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <Plus size={18} />
            </button>
            <button
              onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }); }}
              className="text-white/70 hover:text-white transition-colors text-xs px-2 py-1 border border-white/20 rounded"
            >
              Reset
            </button>
          </div>
        )}

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects({ isReady = false }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showTechnical, setShowTechnical] = useState(false);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const currentProject = projects.find((p) => p.id === selectedId) || filteredProjects[0];
  const allMedia = currentProject?.media || [];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-[#f4f3f0]">
      {/* Blueprint grid layout */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #003194 1px, transparent 1px), linear-gradient(to bottom, #003194 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-[#003194]/10 via-transparent to-transparent hidden lg:block" />



        {/* Wrap all animated sections with conditions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="...">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        


        {/* Wrap all animated sections with conditions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="..."></motion.div>
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

        {/* Dynamic Navigation Tabs */}
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
          
          {/* Card Showcase Track (Left Column) */}
          <div className="lg:col-span-4 space-y-4 max-h-[680px] overflow-y-auto pr-2 custom-scrollbar">
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
                    className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 group ${
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
                        <h3 className={`font-bold text-sm sm:text-base transition-colors duration-300 ${isCurrent ? "text-[#003194]" : "text-[#040316]"}`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-[#040316]/50 pt-1">
                          <MapPin size={12} className="text-[#5d709b]" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      
                      <div className={`p-2 rounded-lg border flex-shrink-0 transition-all ${
                        isCurrent ? "bg-[#003194]/5 border-[#003194]/20 text-[#003194]" : "bg-gray-50 border-gray-100 text-gray-400 group-hover:text-[#003194]"
                      }`}>
                        <ChevronRight size={14} className={`transform transition-transform ${isCurrent ? "translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Master Vertical Structural Detail Frame (Right Column) */}
          <div className="lg:col-span-8 sticky top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[#040316]/5 overflow-hidden shadow-xl shadow-[#040316]/5"
              >
                {/* Media Gallery Section */}
                <div className="relative bg-[#003194]/5">
                  {/* Main Media Display */}
                  <div className="relative aspect-[16/9] md:aspect-[16/10] bg-[#003194]/5 group overflow-hidden">
                    {allMedia.length > 0 && (
                      <>
                        {allMedia[0].type === 'video' ? (
                          <VideoPlayer
                            src={allMedia[0].src}
                            poster={allMedia[0].poster}
                          />
                        ) : (
                          <div 
                            className="relative w-full h-full cursor-pointer"
                            onClick={() => openLightbox(0)}
                          >
                            <Image
                              src={allMedia[0].src}
                              alt={currentProject.title}
                              fill
                              className="object-contain bg-[#003194]/5"
                              priority
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                          </div>
                        )}
                        
                        {/* Media Count Badge */}
                        {allMedia.length > 1 && (
                          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-medium border border-white/10">
                            <ImageIcon size={14} />
                            <span>{allMedia.length} media</span>
                          </div>
                        )}

                        {/* Click to Expand - Gallery View */}
                        {allMedia.length > 0 && allMedia[0].type !== 'video' && (
                          <button
                            onClick={() => openLightbox(0)}
                            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-all duration-300 group/expand opacity-0 group-hover:opacity-100"
                          >
                            <Maximize2 size={16} className="group-hover/expand:scale-110 transition-transform" />
                          </button>
                        )}
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {allMedia.length > 1 && (
                    <div className="flex gap-2 p-3 bg-white/50 backdrop-blur-sm overflow-x-auto">
                      {allMedia.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => openLightbox(index)}
                          className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            index === 0 ? 'border-[#003194]' : 'border-transparent hover:border-[#003194]/30'
                          }`}
                        >
                          {item.type === 'video' ? (
                            <div className="w-full h-full bg-[#003194]/10 flex items-center justify-center">
                              <Play size={20} className="text-[#003194]" />
                            </div>
                          ) : (
                            <Image
                              src={item.src}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          )}
                          {item.type === 'video' && (
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <Play size={16} className="text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2 text-[#5d709b] text-xs uppercase tracking-wider font-semibold">
                        <Layers size={13} className="text-[#003194]" />
                        <span>{currentProject.category} Division</span>
                        <span className="w-px h-4 bg-[#040316]/20" />
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-white ${
                          currentProject.status === "Completed" ? "bg-green-500" : "bg-amber-500"
                        }`}>
                          {currentProject.status}
                        </span>
                      </div>

                      <h4 className="text-[#040316] text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                        {currentProject.title}
                      </h4>

                      <div className="space-y-1 pt-2">
                        <span className="text-[10px] font-bold uppercase text-[#5d709b] tracking-wider block">Project Description</span>
                        <p className="text-[#040316]/70 text-sm leading-relaxed">
                          {currentProject.description}
                        </p>
                      </div>

                      {/* Technical Specifications Toggle */}
                      {currentProject.technical && (
                        <div className="pt-2">
                          <button
                            onClick={() => setShowTechnical(!showTechnical)}
                            className="inline-flex items-center gap-2 text-[#003194] text-sm font-semibold hover:gap-3 transition-all"
                          >
                            <Ruler size={16} />
                            <span>Technical Specifications</span>
                            <ChevronDown size={16} className={`transform transition-transform ${showTechnical ? 'rotate-180' : ''}`} />
                          </button>

                          <AnimatePresence>
                            {showTechnical && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 p-4 bg-[#003194]/5 rounded-xl border border-[#003194]/10">
                                  {Object.entries(currentProject.technical).map(([key, value]) => {
                                    const icons = {
                                      height: <Ruler size={14} />,
                                      material: <Shield size={14} />,
                                      windResistance: <Wind size={14} />,
                                      foundation: <Scale size={14} />,
                                      finish: <Award size={14} />,
                                      weight: <Scale size={14} />,
                                      installationTime: <Clock size={14} />,
                                      warranty: <CheckCircle size={14} />
                                    };
                                    return (
                                      <div key={key} className="space-y-0.5">
                                        <span className="text-[9px] uppercase font-bold text-[#040316]/40 tracking-wider block leading-none flex items-center gap-1">
                                          {icons[key] || <Zap size={14} />}
                                          {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <span className="text-sm font-bold text-[#003194] block">
                                          {value}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Quick Stats Sidebar */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="space-y-3 p-4 bg-[#f4f3f0] rounded-xl border border-[#040316]/5">
                        {currentProject.stats.map((stat, i) => (
                          <div key={i} className="space-y-0.5">
                            <span className="text-[9px] uppercase font-bold text-[#040316]/40 tracking-wider block leading-none">
                              {stat.label}
                            </span>
                            <span className="text-sm font-extrabold text-[#003194] block">
                              {stat.value}
                            </span>
                            {i < currentProject.stats.length - 1 && (
                              <div className="w-full h-px bg-[#040316]/5 mt-1.5" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-[#040316]/10">
                    <div className="flex items-center gap-4 text-xs text-[#040316]/50">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {currentProject.year}</span>
                      <span className="hidden sm:inline text-neutral-300">|</span>
                      <span className="flex items-center gap-1 truncate"><MapPin size={12} /> {currentProject.location}</span>
                    </div>
                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003194] to-[#6D67E4] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#003194]/25 transition-all duration-300 group"
                    >
                      <span>Request Specifications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            media={allMedia}
            initialIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </motion.div>
    </section>
  );
}