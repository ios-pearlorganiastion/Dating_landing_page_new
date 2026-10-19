import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Calendar,
  CheckCircle2,
  Star,
  RotateCcw,
  X,
  Zap,
  Compass,
  MessageCircle,
  User,
  Sparkles,
  Wifi,
  Battery,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logoImg from "../assets/logo.png";
import phoneImg1 from "../assets/Phone/1.jpg";
import phoneImg2 from "../assets/Phone/2.jpg";
import phoneImg3 from "../assets/Phone/3.jpg";
import phoneImg4 from "../assets/Phone/4.jpg";
import phoneImg5 from "../assets/Phone/5.jpg";
import phoneImg6 from "../assets/Phone/6.jpg";
import phoneImg7 from "../assets/Phone/7.jpg";
import phoneImg8 from "../assets/Phone/8.jpg";
import phoneImg9 from "../assets/Phone/9.jpg";
import phoneImg10 from "../assets/Phone/10.jpg";
import phoneImg11 from "../assets/Phone/11.jpg";
import phoneImg12 from "../assets/Phone/12.jpg";
import phoneImg13 from "../assets/Phone/13.jpg";
import phoneImg14 from "../assets/Phone/14.jpg";

const AppleIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0"
    viewBox="0 0 170 170"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.87-11.93-14.48-5.64-8.8-10.15-18.77-13.54-29.9-3.39-11.13-5.08-21.72-5.08-31.78 0-14.9 3.88-27.18 11.66-36.85 7.78-9.67 17.58-14.61 29.41-14.83 5.43 0 11.24 1.34 17.43 4.02 6.19 2.68 10.3 4.09 12.33 4.22 1.64 0 5.93-1.44 12.87-4.33 6.94-2.89 12.87-4.18 17.8-3.88 13.54.84 24.32 5.86 32.34 15.06-11.89 7.23-17.7 17.07-17.43 29.53.27 9.8 4.09 18.04 11.45 24.71 7.36 6.67 16.03 10.42 26.01 11.25-2.27 7.08-5.11 14.2-8.52 21.36zM119.22 33.56c0-7.39 2.7-14.36 8.09-20.91 5.39-6.55 12.1-10.77 20.13-12.65.27 1.09.41 2.21.41 3.36 0 7.39-2.76 14.54-8.28 21.44-5.52 6.9-12.3 11.08-20.35 12.54z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4z"
    />
    <path
      fill="#FBBC04"
      d="M17.2 8.6L14.7 11.1 13.8 12l.9.9 2.5 2.5 3.9-2.2c1.1-.6 1.1-1.6 0-2.2l-3.9-2.4z"
    />
    <path
      fill="#EA4335"
      d="M3.6 22.2l10.2-10.2 3.4 3.4-11.4 6.4c-.8.5-1.7.5-2.2.4z"
    />
    <path
      fill="#34A853"
      d="M3.6 1.8c.5-.1 1.4-.1 2.2.4l11.4 6.4-3.4 3.4L3.6 1.8z"
    />
  </svg>
);

/**
 * Interactive Logo Component
 * - Normal: Same original logo image
 * - Hover: Typewriter 'bummps.' animation + glowing floating hearts & sparkles
 * - Mouse Leave: Reverts back to normal original logo
 */
const BummpsHoverLogo = ({ logoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "bummps.";

  useEffect(() => {
    let timer;
    if (isHovered) {
      setDisplayText("");
      let index = 0;
      timer = setInterval(() => {
        index++;
        setDisplayText(fullText.slice(0, index));
        if (index >= fullText.length) {
          clearInterval(timer);
        }
      }, 95);
    } else {
      setDisplayText("");
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-start self-start -ml-12 sm:-ml-16 md:-ml-20 cursor-pointer select-none py-1 relative"
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          /* DEFAULT NORMAL STATE: Original same logo */
          <motion.div
            key="default-logo"
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="flex items-center"
          >
            <img
              src={logoSrc}
              alt="Bummps Logo"
              className="h-20 xs:h-24 sm:h-28 md:h-32 lg:h-40 w-auto object-contain object-left drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.div>
        ) : (
          /* HOVER STATE: Isolated Icon + Typewriter "bummps." + Sparkles & Heart particles */
          <motion.div
            key="hover-logo"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="relative flex items-center h-20 xs:h-24 sm:h-28 md:h-32 lg:h-40"
          >
            {/* Soft Ambient Gold Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#F5C249]/20 via-[#FFF1B0]/10 to-transparent blur-2xl rounded-full pointer-events-none" />

            {/* Rising Heart Sparkles */}
            <div className="absolute -top-3 left-10 sm:left-14 md:left-16 w-12 h-12 pointer-events-none z-30">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0.3 }}
                  animate={{
                    opacity: [0, 1, 0.85, 0],
                    y: [0, -20 - i * 8, -44 - i * 11],
                    x: [
                      0,
                      (i % 2 === 0 ? 1 : -1) * (6 + i * 4),
                      (i % 2 === 0 ? -1 : 1) * (10 + i * 2),
                    ],
                    scale: [0.3, 0.9 + i * 0.1, 0.25],
                    rotate: [0, i % 2 === 0 ? 18 : -18, i % 2 === 0 ? -25 : 25],
                  }}
                  transition={{
                    duration: 2.2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.32,
                    ease: "easeOut",
                  }}
                  className="absolute top-0 left-0"
                >
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F5C249] text-[#FFF5C0] drop-shadow-[0_0_8px_rgba(245,194,73,0.9)]" />
                </motion.div>
              ))}
            </div>

            {/* Ambient Star Sparkle (Top-Right) */}
            <motion.div
              animate={{
                scale: [0.8, 1.25, 0.8],
                rotate: [0, 180, 360],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1 right-2 sm:right-4 pointer-events-none text-[#FFF5C0]"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5C249] drop-shadow-[0_0_12px_rgba(245,194,73,1)]" />
            </motion.div>

            {/* Ambient Star Sparkle (Bottom-Left) */}
            <motion.div
              animate={{
                scale: [0.6, 1.15, 0.6],
                rotate: [360, 180, 0],
                opacity: [0.35, 0.9, 0.35],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1 left-8 pointer-events-none text-[#FFECA8]"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F5C249] drop-shadow-[0_0_8px_rgba(245,194,73,0.8)]" />
            </motion.div>

            {/* Icon Mark isolated from the original logo image */}
            <div className="relative h-full aspect-square overflow-hidden shrink-0 flex items-center justify-start drop-shadow-[0_4px_25px_rgba(245,194,73,0.55)]">
              <img
                src={logoSrc}
                alt="Bummps Icon"
                className="h-full w-auto max-w-none object-contain object-left pointer-events-none brightness-110"
              />

              {/* Shimmer Light Beam */}
              <motion.div
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "220%", opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-12 pointer-events-none"
              />
            </div>

            {/* Typewriter Text with Gold Cursor */}
            <div className="flex items-baseline font-black tracking-tight font-sans text-3xl xs:text-4xl sm:text-5xl md:text-6xl -ml-2 sm:-ml-3">
              <span className="bg-gradient-to-r from-[#FFF5C0] via-[#F5C249] to-[#D99A1C] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(245,194,73,0.7)]">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                className="inline-block ml-1 w-[3px] sm:w-[4px] h-[0.7em] bg-[#F5C249] shadow-[0_0_10px_#F5C249] rounded-full self-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const globModules = import.meta.glob(
  "../assets/Phone/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

const dynamicPhoneImages = Object.entries(globModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(pathB.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
  })
  .map(([, module]) => module.default || module);

const staticPhoneImages = [
  phoneImg1,
  phoneImg2,
  phoneImg3,
  phoneImg4,
  phoneImg5,
  phoneImg6,
  phoneImg7,
  phoneImg8,
  phoneImg9,
  phoneImg10,
  phoneImg11,
  phoneImg12,
  phoneImg13,
  phoneImg14,
];

const availableImages =
  dynamicPhoneImages.length > 0 ? dynamicPhoneImages : staticPhoneImages;

const profileDetails = [
  { name: "Sophia", age: 24, location: "Model • New York, NY" },
  { name: "Elena", age: 25, location: "Designer • Los Angeles, CA" },
  { name: "Chloe", age: 23, location: "Photographer • Miami, FL" },
  { name: "Amara", age: 26, location: "Architect • Chicago, IL" },
  { name: "Zoe", age: 24, location: "Entrepreneur • Austin, TX" },
  { name: "Mia", age: 25, location: "Artist • San Francisco, CA" },
  { name: "Aria", age: 23, location: "Dancer • Las Vegas, NV" },
  { name: "Hannah", age: 26, location: "Stylist • Seattle, WA" },
  { name: "Lily", age: 24, location: "Musician • Nashville, TN" },
  { name: "Maya", age: 25, location: "Marketing • Boston, MA" },
  { name: "Jessica", age: 27, location: "Consultant • Atlanta, GA" },
  { name: "Serena", age: 24, location: "Filmmaker • Denver, CO" },
  { name: "Camila", age: 23, location: "Writer • San Diego, CA" },
  { name: "Grace", age: 25, location: "Curator • Portland, OR" },
];

const phoneProfiles = availableImages.map((img, index) => {
  const info = profileDetails[index % profileDetails.length];
  return {
    id: index + 1,
    img,
    name: info.name,
    age: info.age,
    location: info.location,
  };
});

const DEFAULT_FALLBACK_VIDEO = [
  {
    _id: "instant-fallback",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
];

export default function Hero() {
  const [videos, setVideos] = useState(() => {
    try {
      const cached = localStorage.getItem("bummps_cached_videos");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}
    return DEFAULT_FALLBACK_VIDEO;
  });

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(1);

  const APP_STORE_URL = "https://apps.apple.com";
  const PLAY_STORE_URL = "https://play.google.com";

  useEffect(() => {
    phoneProfiles.forEach((profile) => {
      if (profile.img) {
        const imageObj = new Image();
        imageObj.src = profile.img;
      }
    });
  }, []);

  useEffect(() => {
    fetch("https://datingapp-oz22.onrender.com/api/auth/carousel-videos")
      .then((res) => res.json())
      .then((data) => {
        if (
          data?.success &&
          Array.isArray(data?.videos) &&
          data.videos.length > 0
        ) {
          setVideos(data.videos);
          try {
            localStorage.setItem(
              "bummps_cached_videos",
              JSON.stringify(data.videos)
            );
          } catch {}
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!videos.length) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentVideoIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentVideoIndex, videos]);

  useEffect(() => {
    if (phoneProfiles.length <= 1) return;

    const swipeTimer = setInterval(() => {
      setSwipeDirection((prev) => (prev === 1 ? -1 : 1));
      setActiveProfileIndex((prev) => (prev + 1) % phoneProfiles.length);
    }, 2800);

    return () => clearInterval(swipeTimer);
  }, []);

  const handleVideoEnded = () => {
    if (videos.length <= 1) return;
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    if (videos.length <= 1) return;
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNextVideo = () => {
    if (videos.length <= 1) return;
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const triggerManualSwipe = (direction) => {
    setSwipeDirection(direction);
    setActiveProfileIndex((prev) => (prev + 1) % phoneProfiles.length);
  };

  const currentProfile = phoneProfiles[activeProfileIndex] || phoneProfiles[0];
  const nextProfile =
    phoneProfiles[(activeProfileIndex + 1) % phoneProfiles.length] ||
    phoneProfiles[0];

  return (
    <section className="relative min-h-[100dvh] w-full bg-black text-white overflow-hidden flex flex-col justify-center select-none py-10 sm:py-14 lg:py-16">
      <div className="hidden" aria-hidden="true">
        {phoneProfiles.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt=""
            loading="eager"
            decoding="sync"
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0d0d0d]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #241a08 0%, #050505 100%)",
          }}
        />

        {videos.map((item, index) => (
          <video
            key={item._id || index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.videoUrl}
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={videos.length === 1}
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out pointer-events-none ${
              index === currentVideoIndex
                ? "opacity-100 z-[1]"
                : "opacity-0 z-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90 via-black/50 to-black/30 z-[2] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-[2] pointer-events-none" />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80 sm:opacity-95 z-[3]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="goldWaveOutline1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#CCA035" />
              <stop offset="25%" stopColor="#F5C249" />
              <stop offset="50%" stopColor="#FFF2B2" />
              <stop offset="75%" stopColor="#E5B842" />
              <stop offset="100%" stopColor="#B37E12" />
            </linearGradient>

            <linearGradient
              id="goldWaveOutline2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#B37E12" />
              <stop offset="30%" stopColor="#FFD966" />
              <stop offset="60%" stopColor="#FFECA8" />
              <stop offset="85%" stopColor="#F5C249" />
              <stop offset="100%" stopColor="#CCA035" />
            </linearGradient>

            <filter
              id="goldWaveGlow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="6" result="glowBlur" />
              <feFlood
                floodColor="#FFD700"
                floodOpacity="0.8"
                result="glowColor"
              />
              <feComposite
                in="glowColor"
                in2="glowBlur"
                operator="in"
                result="coloredGlow"
              />
              <feMerge>
                <feMergeNode in="coloredGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="sparkleIntense"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="3"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M-50,680 C320,720 540,540 820,440 C1100,340 1280,480 1520,380"
            stroke="url(#goldWaveOutline1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#goldWaveGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 3.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />

          <motion.path
            d="M0,740 C380,780 620,580 920,490 C1220,400 1340,530 1550,420"
            stroke="url(#goldWaveOutline2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#goldWaveGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 3.6,
              delay: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />

          <motion.path
            d="M100,640 C450,690 700,480 1000,420 C1300,360 1420,460 1580,360"
            stroke="url(#goldWaveOutline1)"
            strokeWidth="1.8"
            strokeDasharray="8 6"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{
              duration: 3.4,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </svg>

        {videos.length > 1 && (
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            <button
              onClick={handlePrevVideo}
              aria-label="Previous Video"
              className="p-2 rounded-full bg-black/40 border border-[#F5C249]/40 text-[#F5C249] backdrop-blur-md hover:bg-[#F5C249]/20 hover:scale-110 active:scale-95 transition"
            >
              <ChevronLeft className="w-5 h-5 rotate-90" />
            </button>
            {videos.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to video ${idx + 1}`}
                onClick={() => setCurrentVideoIndex(idx)}
                className={`w-2.5 rounded-full transition-all duration-300 ${
                  idx === currentVideoIndex
                    ? "h-8 bg-gradient-to-b from-[#FFF1B0] to-[#E6BA53] shadow-[0_0_12px_rgba(245,194,73,0.9)]"
                    : "h-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <button
              onClick={handleNextVideo}
              aria-label="Next Video"
              className="p-2 rounded-full bg-black/40 border border-[#F5C249]/40 text-[#F5C249] backdrop-blur-md hover:bg-[#F5C249]/20 hover:scale-110 active:scale-95 transition"
            >
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-6"
          >
            {/* Interactive Logo: Default same logo image, Animated on Hover */}
            <BummpsHoverLogo logoSrc={logoImg} />

            <div className="space-y-1 sm:space-y-2 text-left">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider uppercase text-white font-sans drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-tight text-left">
                REAL PEOPLE
              </h2>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase bg-gradient-to-r from-[#FFF1B0] via-[#F2C558] to-[#D99A1C] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight text-left">
                REAL MATCHES.
              </h1>
              <p className="pt-1 text-[11px] xs:text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-sm sm:max-w-none text-left">
                YOUR NEXT CONNECTION STARTS HERE
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4 pt-1 w-full max-w-xs sm:max-w-none">
              <motion.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative group p-[1.5px] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.7)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,183,85,0.7)] cursor-pointer flex-1 xs:flex-initial min-w-[145px]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2B755_0%,#1a1408_50%,#FFF5C0_100%)]" />
                <div className="relative flex items-center justify-center xs:justify-start gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 bg-black/90 rounded-2xl backdrop-blur-xl transition duration-300 group-hover:bg-black/95">
                  <AppleIcon />
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] sm:text-[9px] text-amber-200/80 uppercase tracking-widest font-medium">
                      Download on the
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide leading-none">
                      App Store
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative group p-[1.5px] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.7)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,183,85,0.7)] cursor-pointer flex-1 xs:flex-initial min-w-[145px]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2B755_0%,#1a1408_50%,#FFF5C0_100%)]" />
                <div className="relative flex items-center justify-center xs:justify-start gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 bg-black/90 rounded-2xl backdrop-blur-xl transition duration-300 group-hover:bg-black/95">
                  <PlayStoreIcon />
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] sm:text-[9px] text-amber-200/80 uppercase tracking-widest font-medium">
                      GET IT ON
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide leading-none">
                      Google Play
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Frame Section */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end pt-3 sm:pt-4 pb-4"
          >
            <div className="relative w-[210px] xs:w-[230px] sm:w-[250px] md:w-[260px] mx-auto lg:mr-4">
              <div className="absolute -left-[3px] top-[68px] w-[3px] h-[16px] bg-[#9e9e9e] rounded-l-sm" />
              <div className="absolute -left-[3px] top-[100px] w-[3px] h-[32px] bg-[#9e9e9e] rounded-l-sm" />
              <div className="absolute -left-[3px] top-[140px] w-[3px] h-[32px] bg-[#9e9e9e] rounded-l-sm" />
              <div className="absolute -right-[3px] top-[108px] w-[3px] h-[48px] bg-[#9e9e9e] rounded-r-sm" />

              <div className="relative w-full rounded-[40px] sm:rounded-[44px] p-[2.5px] bg-gradient-to-b from-[#f0f0f0] via-[#8c8c8c] to-[#e8e8e8] shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,255,0.15)]">
                <div className="relative w-full rounded-[38px] sm:rounded-[41px] p-[4.5px] sm:p-[5px] bg-[#1a1a1a] border border-[#ffffff]/25">
                  <div className="relative w-full aspect-[9/18.3] rounded-[33px] sm:rounded-[36px] bg-black overflow-hidden flex flex-col justify-between shadow-inner">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="absolute inset-0 scale-95 opacity-50">
                        <img
                          src={nextProfile.img}
                          alt={nextProfile.name}
                          className="w-full h-full object-cover object-center rounded-[33px] sm:rounded-[36px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/70" />
                      </div>

                      <AnimatePresence initial={false}>
                        <motion.div
                          key={currentProfile.id}
                          initial={{ scale: 0.96, opacity: 0.8 }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                            x: 0,
                            y: 0,
                            rotate: 0,
                          }}
                          exit={{
                            x: swipeDirection * 280,
                            rotate: swipeDirection * 22,
                            opacity: 0,
                            transition: { duration: 0.55, ease: "easeInOut" },
                          }}
                          className="absolute inset-0 w-full h-full will-change-transform"
                        >
                          <img
                            src={currentProfile.img}
                            alt={currentProfile.name}
                            className="w-full h-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/70" />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="relative z-20 flex flex-col gap-1 w-full pt-1.5">
                      <div className="px-3.5 sm:px-4 flex items-center justify-between text-white text-[9px] sm:text-[10px]">
                        <span className="font-semibold tracking-tight">
                          9:41
                        </span>
                        <div className="w-[84px] sm:w-[92px] h-[15px] sm:h-[16px] bg-black rounded-b-[12px] flex items-center justify-center gap-1.5 px-2 shadow-md border-b border-black">
                          <div className="w-5 sm:w-6 h-[2px] bg-[#222] rounded-full" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-stone-800" />
                        </div>
                        <div className="flex items-center gap-1 text-white">
                          <Wifi className="w-2.5 h-2.5" />
                          <Battery className="w-3 h-3" />
                        </div>
                      </div>

                      <div className="px-3 sm:px-3.5 pt-0.5 flex items-center justify-between">
                        <div className="w-4 h-2.5 flex flex-col justify-between cursor-pointer">
                          <span className="w-full h-[1.5px] bg-white/90 rounded" />
                          <span className="w-3/4 h-[1.5px] bg-white/90 rounded" />
                          <span className="w-full h-[1.5px] bg-white/90 rounded" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs sm:text-sm font-black italic bg-gradient-to-r from-[#FFF5C0] via-[#E6BA53] to-[#CCA035] bg-clip-text text-transparent drop-shadow">
                            bummps.
                          </span>
                        </div>
                        <div className="w-4 h-2.5 flex flex-col justify-between items-end cursor-pointer">
                          <span className="w-full h-[1.5px] bg-white/90 rounded" />
                          <span className="w-full h-[1.5px] bg-white/90 rounded" />
                        </div>
                      </div>

                      <div className="px-3 sm:px-3.5 pt-0.5 flex gap-1.5">
                        <span className="px-2 py-0.5 text-[7.5px] sm:text-[8px] font-bold rounded-full bg-gradient-to-r from-[#F2C558] to-[#D99A1C] text-black shadow-md cursor-pointer">
                          Trending
                        </span>
                        <span className="px-2 py-0.5 text-[7.5px] sm:text-[8px] font-semibold rounded-full bg-black/50 text-amber-200 border border-[#F5C249]/40 backdrop-blur-sm cursor-pointer">
                          Nearby
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 p-2.5 sm:p-3 space-y-1.5 sm:space-y-2">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentProfile.id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="flex items-center gap-1">
                            <h3 className="text-sm sm:text-base font-bold text-white drop-shadow">
                              {currentProfile.name}, {currentProfile.age}
                            </h3>
                            <CheckCircle2 className="w-3 h-3 fill-sky-400 text-black" />
                          </div>
                          <p className="text-[8.5px] sm:text-[9px] text-amber-200/90 font-medium">
                            {currentProfile.location}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      <div className="flex items-center justify-between px-0.5 pt-0.5">
                        <button
                          type="button"
                          aria-label="Rewind"
                          onClick={() => triggerManualSwipe(-1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 border border-[#F5C249]/40 flex items-center justify-center text-[#F5C249] hover:scale-110 active:scale-95 transition shadow-sm"
                        >
                          <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </button>
                        <button
                          type="button"
                          aria-label="Pass"
                          onClick={() => triggerManualSwipe(-1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-rose-500 to-rose-700 flex items-center justify-center text-white shadow-md hover:scale-110 active:scale-95 transition"
                        >
                          <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                        </button>
                        <button
                          type="button"
                          aria-label="Super Like"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 border border-sky-400/50 flex items-center justify-center text-sky-400 hover:scale-110 active:scale-95 transition shadow-sm"
                        >
                          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-sky-400" />
                        </button>
                        <button
                          type="button"
                          aria-label="Like"
                          onClick={() => triggerManualSwipe(1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#F2C558] to-[#B37E12] flex items-center justify-center text-black shadow-md hover:scale-110 active:scale-95 transition"
                        >
                          <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-black" />
                        </button>
                        <button
                          type="button"
                          aria-label="Boost"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 border border-purple-400/50 flex items-center justify-center text-purple-400 hover:scale-110 active:scale-95 transition shadow-sm"
                        >
                          <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-purple-400" />
                        </button>
                      </div>

                      <div className="pt-1 sm:pt-1.5 border-t border-white/10 flex items-center justify-around text-amber-100/70 text-[8px] sm:text-[8.5px]">
                        <div className="flex flex-col items-center text-[#F5C249] cursor-pointer">
                          <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#F5C249]" />
                          <span className="scale-90 font-medium">Home</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-white cursor-pointer transition">
                          <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="scale-90 font-medium">Discover</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-white cursor-pointer transition">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="scale-90 font-medium">Events</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-white cursor-pointer transition">
                          <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="scale-90 font-medium">Chat</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-white cursor-pointer transition">
                          <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="scale-90 font-medium">Profile</span>
                        </div>
                      </div>

                      <div className="w-16 sm:w-20 h-0.5 bg-white/40 rounded-full mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-black/90 border border-[#F5C249]/60 backdrop-blur-md rounded-xl px-2 sm:px-2.5 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F5C249]/20 border border-[#F5C249] flex items-center justify-center shrink-0">
                  <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#F5C249]" />
                </div>
                <div className="text-left">
                  <p className="text-[8px] sm:text-[9px] font-bold text-white leading-tight">
                    99.8% Verified
                  </p>
                  <p className="text-[7px] sm:text-[7.5px] text-amber-300/90 leading-tight">
                    Real connections only
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}