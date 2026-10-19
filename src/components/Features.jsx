import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiSparkleFill,
  PiShieldCheckFill,
  PiChatCircleTextFill,
  PiSlidersHorizontalFill,
  PiMapPinFill,
  PiRobotFill,
} from "react-icons/pi";
import { features } from "../data";
import featuresBg from "../assets/features/features.png";

const icons = {
  match: PiSparkleFill,
  verified: PiShieldCheckFill,
  chat: PiChatCircleTextFill,
  filters: PiSlidersHorizontalFill,
  nearby: PiMapPinFill,
  ai: PiRobotFill,
};

const defaultInstructions = {
  match: "Swipe right on verified profiles to create instant mutual connections.",
  verified: "Submit your live selfie verification to earn a trusted blue checkmark.",
  chat: "Break the ice with prompts and start secure real-time messaging.",
  filters: "Set your preferred age, radius, habits, and interest preferences.",
  nearby: "Allow location access to discover active matches around your neighborhood.",
  ai: "Use AI smart assistants to craft the perfect profile bio and opener.",
};

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="features"
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 text-white overflow-hidden font-sans"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={featuresBg}
          alt="Features Background"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full object-cover object-center will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>

      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 lg:h-16"
        >
          <path
            d="M0,60 C200,10 400,110 600,60 C800,10 1000,110 1200,60"
            fill="none"
            stroke="url(#golden-wave-gradient-top)"
            strokeWidth="3"
            className="filter drop-shadow-[0_0_10px_rgba(218,178,90,0.8)]"
          />
          <defs>
            <linearGradient id="golden-wave-gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DAB25A" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#F1D58B" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFF4D0" stopOpacity="1" />
              <stop offset="75%" stopColor="#F1D58B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DAB25A" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 xs:px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 border border-[#DAB25A]/60 backdrop-blur-md shadow-[0_0_20px_rgba(218,178,90,0.3)]"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="text-[#DAB25A] text-xs sm:text-sm"
            >
              ✦
            </motion.span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#F1D58B] uppercase">
              Why bummps
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 sm:mt-5 font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
          >
            <motion.span
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="inline-block bg-gradient-to-r from-[#DAB25A] via-[#FFF9E6] via-[#F4CA64] via-[#FFFFFF] via-[#E6BA55] to-[#DAB25A] bg-[length:200%_auto] bg-clip-text text-transparent filter drop-shadow-[0_0_18px_rgba(241,213,139,0.9)] drop-shadow-[0_0_40px_rgba(218,178,90,0.65)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]"
            >
              Built for better connections
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-white font-medium text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto [text-shadow:_0_2px_12px_rgba(0,0,0,1),_0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Everything you need to discover, match, and meet your right person seamlessly.
          </motion.p>
        </div>

        <div className="mt-10 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((f, i) => {
            const Icon = icons[f.icon] || PiSparkleFill;
            const instruction =
              f.instruction ||
              defaultInstructions[f.icon] ||
              `Check out ${f.title}`;

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-full rounded-2xl sm:rounded-3xl"
              >
                <AnimatePresence>
                  {hoveredCard === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0],
                      }}
                      exit={{ opacity: 0, scale: 0.5, y: 15 }}
                      transition={{
                        opacity: { duration: 0.25 },
                        scale: { type: "spring", stiffness: 350, damping: 20 },
                        y: { repeat: Infinity, duration: 2.8, ease: "easeInOut" },
                      }}
                      className="hidden md:block absolute -top-24 sm:-top-28 left-1/2 -translate-x-1/2 w-64 sm:w-72 z-30 pointer-events-none drop-shadow-[0_18px_25px_rgba(0,0,0,0.6)]"
                    >
                      <div className="relative bg-white text-zinc-900 rounded-3xl px-5 py-3 text-center">
                        <span className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-white" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white" />
                        <span className="absolute -top-3 right-6 h-8 w-8 rounded-full bg-white" />
                        <span className="absolute top-2 -left-2 h-7 w-7 rounded-full bg-white" />
                        <span className="absolute top-2 -right-2 h-7 w-7 rounded-full bg-white" />

                        <span className="absolute -bottom-2.5 left-10 h-3.5 w-3.5 rounded-full bg-white" />
                        <span className="absolute -bottom-5 left-7 h-2 w-2 rounded-full bg-white" />

                        <div className="relative z-10">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#B88E28] block">
                            Instruction
                          </span>
                          <p className="mt-0.5 text-xs font-semibold text-zinc-800 leading-snug">
                            {instruction}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative h-full rounded-2xl sm:rounded-3xl bg-black/50 backdrop-blur-md border border-white/20 p-5 xs:p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 group-hover:border-[#DAB25A] group-hover:bg-black/70 group-hover:shadow-[0_12px_35px_rgba(218,178,90,0.25)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl sm:rounded-2xl bg-black/60 border border-[#DAB25A]/60 text-[#DAB25A] text-xl sm:text-2xl transition-all duration-300 group-hover:border-[#DAB25A] group-hover:bg-[#DAB25A] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(218,178,90,0.6)]">
                        <Icon className="transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <span className="text-2xl sm:text-3xl font-black text-white/80 tracking-tight transition-colors duration-300 group-hover:text-[#DAB25A] [text-shadow:_0_2px_10px_rgba(0,0,0,1)]">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 sm:mt-6 font-bold text-lg sm:text-xl lg:text-2xl text-white transition-colors duration-300 group-hover:text-[#F3E5AB] [text-shadow:_0_2px_12px_rgba(0,0,0,1),_0_4px_20px_rgba(0,0,0,0.9)]">
                      {f.title}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-neutral-200 font-normal sm:font-medium text-xs sm:text-sm lg:text-base leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,1)]">
                      {f.desc}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <motion.span
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-2 w-2 rounded-full bg-[#DAB25A] shadow-[0_0_8px_#DAB25A]"
                      />
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#F1D58B] uppercase [text-shadow:_0_2px_8px_rgba(0,0,0,1)]">
                        Bummps Exclusive
                      </span>
                    </div>

                    <span className="text-white text-xs sm:text-sm font-bold transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#DAB25A] [text-shadow:_0_2px_8px_rgba(0,0,0,1)]">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 lg:h-16"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40"
            fill="none"
            stroke="url(#golden-wave-gradient-bottom)"
            strokeWidth="3.5"
            className="filter drop-shadow-[0_0_12px_rgba(218,178,90,0.85)]"
          />
          <defs>
            <linearGradient id="golden-wave-gradient-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DAB25A" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#F1D58B" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFF4D0" stopOpacity="1" />
              <stop offset="75%" stopColor="#F1D58B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DAB25A" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}