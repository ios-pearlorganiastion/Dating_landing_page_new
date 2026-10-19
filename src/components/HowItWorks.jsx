import { motion } from "framer-motion";
import {
  PiUserPlusFill,
  PiIdentificationCardFill,
  PiMagnifyingGlassFill,
  PiChatCircleDotsFill,
  PiCoffeeFill,
  PiSparkleFill,
} from "react-icons/pi";
import { steps } from "../data";
import bgImage from "../assets/HowitWorks/background.png";

const icons = [
  PiUserPlusFill,
  PiIdentificationCardFill,
  PiMagnifyingGlassFill,
  PiChatCircleDotsFill,
  PiCoffeeFill,
];

const instructions = [
  "Enter email, verify OTP & set up your secure account in under 1 min.",
  "Upload 3+ clear photos, add your hobbies & write an authentic bio.",
  "Set distance & age filters to browse verified, real profiles.",
  "Reply to profile prompts to break the ice easily and start chatting.",
  "Do a quick video check first & plan your meet at a public cafe.",
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-32 text-white font-sans min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Atmosphere"
          className="h-full w-full object-cover object-center brightness-100 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 xs:px-6 sm:px-8 lg:px-12 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#DAB25A]/60 bg-black/60 px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#F3E5AB] backdrop-blur-md shadow-lg">
              <PiSparkleFill className="text-[#DAB25A] animate-pulse text-xs sm:text-sm" /> THE BUMPPS JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 sm:mt-5 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            Seamlessly{" "}
            <span className="bg-gradient-to-r from-[#DAB25A] via-[#FFF0B8] to-[#DAB25A] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(218,178,90,0.5)]">
              interwoven.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-neutral-200 font-medium max-w-xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            An effortless flow designed for intentional relationships.
          </motion.p>
        </div>

        <div className="relative mt-8 sm:mt-12">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0" aria-hidden="true">
            <svg
              className="w-full h-36 overflow-visible"
              viewBox="0 0 1000 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 50 Q 125 0, 250 50 T 500 50 T 750 50 T 1000 50"
                stroke="url(#goldGradient)"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.85 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DAB25A" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FFF2B2" stopOpacity="1" />
                  <stop offset="100%" stopColor="#DAB25A" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 relative z-10">
            {steps.map((s, i) => {
              const Icon = icons[i];
              const isFloatingUp = i % 2 === 0;

              return (
                <motion.div
                  key={s.title || i}
                  initial={{ opacity: 0, y: isFloatingUp ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className={`group relative flex flex-col items-center sm:last:col-span-2 lg:last:col-span-1 sm:last:max-w-md sm:last:mx-auto lg:last:max-w-none ${
                    isFloatingUp ? "lg:-translate-y-7" : "lg:translate-y-7"
                  }`}
                >
                  <div className="hidden md:block absolute -top-32 left-1/2 -translate-x-1/2 w-56 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 scale-75 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none z-50">
                    <div className="relative filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                      <div className="relative bg-gradient-to-b from-white via-white to-amber-50 text-neutral-900 rounded-[28px] px-4 py-3.5 text-center border border-amber-300/60">
                        <div className="absolute -top-3 left-6 w-9 h-9 bg-white rounded-full pointer-events-none" />
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full pointer-events-none" />
                        <div className="absolute -top-3 right-6 w-9 h-9 bg-white rounded-full pointer-events-none" />
                        <div className="absolute -left-2 top-2.5 w-7 h-7 bg-white rounded-full pointer-events-none" />
                        <div className="absolute -right-2 top-2.5 w-7 h-7 bg-white rounded-full pointer-events-none" />

                        <div className="relative z-10">
                          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#B38528]">
                            How It Works
                          </span>
                          <p className="mt-1 text-xs font-semibold text-neutral-800 leading-snug">
                            {instructions[i]}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1 mt-1.5">
                        <div className="w-3.5 h-3.5 bg-white rounded-full border border-amber-200/80 shadow-sm" />
                        <div className="w-2 h-2 bg-white/95 rounded-full shadow-sm" />
                        <div className="w-1 h-1 bg-white/80 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="relative w-full rounded-2xl sm:rounded-3xl border border-white/20 bg-black/40 hover:bg-black/60 p-5 sm:p-6 lg:p-7 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#DAB25A] hover:shadow-[0_15px_35px_rgba(218,178,90,0.3)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-5 relative z-10">
                        <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-black/50 border border-[#DAB25A]/50 text-[#F3E5AB] text-xl sm:text-2xl group-hover:border-[#DAB25A] group-hover:bg-[#DAB25A] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(218,178,90,0.7)] transition-all duration-300 backdrop-blur-sm">
                          {Icon && <Icon />}
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="text-[11px] font-bold tracking-widest text-[#F3E5AB] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            0{i + 1}
                          </span>
                          <span className="h-2 w-2 rounded-full bg-[#DAB25A] shadow-[0_0_8px_#DAB25A]" />
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide group-hover:text-[#F3E5AB] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-5 h-[1.5px] w-full bg-white/20 group-hover:bg-[#DAB25A] group-hover:shadow-[0_0_8px_#DAB25A] transition-all duration-300" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}