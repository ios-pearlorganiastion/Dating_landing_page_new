import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PiHeartFill, PiSparkleFill } from "react-icons/pi";
import Counter from "./Counter";

import bg1 from "../assets/About/background1.png";
import bg2 from "../assets/About/background2.png";
import bg3 from "../assets/About/background3.png";
import bg4 from "../assets/About/background4.png";
import bg5 from "../assets/About/background5.png";

import img1 from "../assets/About/1.jpg";
import img2 from "../assets/About/2.jpg";
import img3 from "../assets/About/3.jpg";
import img4 from "../assets/About/4.jpg";
import img5 from "../assets/About/5.jpg";
import img6 from "../assets/About/6.jpg";

const bgImages = [bg1, bg2, bg3, bg4, bg5];

const couples = [
  {
    image: img1,
    name: "Liam & Emma",
    story: "What made you fall in love? 'His warmth and the way he makes quiet moments feel like magic.'"
  },
  {
    image: img2,
    name: "Noah & Olivia",
    story: "When did you know they were the one? 'When a single conversation made every past heartbreak make sense.'"
  },
  {
    image: img3,
    name: "Ethan & Sophia",
    story: "What keeps your bond strong? 'Choosing each other every single day with no second thoughts.'"
  },
  {
    image: img4,
    name: "Lucas & Mia",
    story: "What is your definition of love? 'Feeling completely at home whenever we are together.'"
  },
  {
    image: img5,
    name: "James & Charlotte",
    story: "How did it begin? 'A simple hello turned into late-night walks and a lifetime promise.'"
  },
  {
    image: img6,
    name: "Oliver & Amelia",
    story: "Why Bummps? 'Because real connections happen when you strip away the noise.'"
  }
];

export default function About() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const coupleTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % couples.length);
    }, 4500);

    return () => clearInterval(coupleTimer);
  }, []);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5500);

    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen text-white overflow-hidden font-sans pt-16 pb-24 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 bg-[#0a0a0a]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.img
            key={bgIndex}
            src={bgImages[bgIndex]}
            alt="Background Slideshow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            style={{ imageRendering: "auto" }}
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/85 via-black/60 to-black/40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 xs:px-6 sm:px-8 lg:px-12 z-20">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center w-full"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] mx-auto">
              <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] p-2 bg-black/60 border border-[#DAB25A]/70 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-md">
                <div className="rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden relative aspect-[9/16] bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={couples[currentIndex].image}
                      alt={couples[currentIndex].name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ imageRendering: "auto" }}
                      className="absolute inset-0 w-full h-full object-cover object-center select-none"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex items-center z-30">
                    <div className="bg-black/75 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold text-neutral-200 tracking-wider">Live</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-3.5 sm:px-5 z-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-black/85 backdrop-blur-md border border-[#DAB25A]/60 rounded-2xl p-3 sm:p-4 shadow-xl text-left"
                      >
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                          <PiHeartFill className="text-[#DAB25A] text-xs sm:text-sm shrink-0" />
                          <h3 className="font-bold text-xs sm:text-sm md:text-base text-white tracking-wide">
                            {couples[currentIndex].name}
                          </h3>
                        </div>
                        <p className="text-neutral-200 text-[11px] sm:text-xs md:text-[13px] leading-relaxed italic line-clamp-3">
                          "{couples[currentIndex].story}"
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center gap-1.5 mt-2.5 sm:mt-3">
                      {couples.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label={`Slide ${idx + 1}`}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            currentIndex === idx ? "w-5 sm:w-6 bg-[#DAB25A]" : "w-1.5 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 right-2 sm:right-4 bg-black/90 border border-[#DAB25A]/60 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-2xl backdrop-blur-md z-30">
                <PiSparkleFill className="text-[#DAB25A] text-xs sm:text-sm animate-spin" style={{ animationDuration: "8s" }} />
                <span className="text-[9.5px] sm:text-[11px] font-bold text-[#DAB25A] uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
                  Verified Connections
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-[#DAB25A] bg-black/75 border border-[#DAB25A]/70 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                <PiHeartFill className="text-[#DAB25A]" /> ABOUT BUMMPS
              </span>
            </div>

            <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
              Dating, minus the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAB25A] via-[#FFF2B2] to-[#DAB25A]">
                noise.
              </span>
            </h2>

            <p className="text-white text-sm xs:text-base sm:text-lg leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-xl">
              No endless swiping or fake profiles. Bummps brings verified people, meaningful matches, and genuine dates.
            </p>

            <p className="text-neutral-200 text-xs xs:text-sm sm:text-base leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xl">
              Since 2019, helping you move effortlessly from the first message to a real relationship.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-sm">
              <div className="relative pl-3.5 sm:pl-5 border-l-2 border-[#DAB25A] drop-shadow-[0_3px_10px_rgba(0,0,0,1)] py-1.5 sm:py-2 text-left">
                <p className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#DAB25A] tracking-tight drop-shadow-md">
                  <Counter value={12} suffix="M+" />
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm text-neutral-100 mt-1 uppercase tracking-wider font-semibold drop-shadow-md">
                  Happy members
                </p>
              </div>

              <div className="relative pl-3.5 sm:pl-5 border-l-2 border-[#DAB25A] drop-shadow-[0_3px_10px_rgba(0,0,0,1)] py-1.5 sm:py-2 text-left">
                <p className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#DAB25A] tracking-tight drop-shadow-md">
                  <Counter value={7} suffix=" yrs" />
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm text-neutral-100 mt-1 uppercase tracking-wider font-semibold drop-shadow-md">
                  Building connections
                </p>
              </div>
            </div>

            <div className="pt-3 w-full xs:w-auto">
              <button
                onClick={() => navigate("/about-page")}
                className="w-full xs:w-auto relative overflow-hidden bg-gradient-to-r from-[#DAB25A] to-[#c79c3d] text-black font-extrabold uppercase tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:brightness-110 transition-all duration-300 active:scale-95 text-xs sm:text-sm cursor-pointer"
              >
                Learn Our Story
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-10 sm:h-14 md:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,110 520,10 820,70 C1100,120 1280,30 1440,65 L1440,120 L0,120 Z"
            fill="#050505"
            fillOpacity="0.95"
          />
          <path
            d="M0,40 C320,110 520,10 820,70 C1100,120 1280,30 1440,65"
            fill="none"
            stroke="#DAB25A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}