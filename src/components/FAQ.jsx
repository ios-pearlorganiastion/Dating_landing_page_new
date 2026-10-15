import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPlusBold, PiQuestionFill, PiEnvelopeSimpleFill } from "react-icons/pi";
import { faqs } from "../data";
import faqBg from "../assets/Faq/faq.png";

function FaqItem({ item, index, isOpen, onToggle }) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden font-sans ${
        isOpen
          ? "border-[#DAB25A] bg-black/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "border-[#DAB25A]/40 bg-transparent hover:border-[#DAB25A]/70 hover:bg-black/10"
      }`}
    >
      {isOpen && (
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#DAB25A]" />
      )}

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
      >
        <div className="flex items-center gap-2.5 sm:gap-4">
          <span
            className={`font-sans text-sm sm:text-base font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${
              isOpen ? "text-[#DAB25A]" : "text-neutral-300"
            }`}
          >
            {formattedIndex}
          </span>
          <span className="font-semibold text-sm sm:text-base text-white font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {item.q}
          </span>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full transition-colors ${
            isOpen
              ? "bg-[#DAB25A] text-black shadow-[0_0_12px_rgba(218,178,90,0.4)]"
              : "bg-black/50 text-white border border-[#DAB25A]/40 hover:bg-[#DAB25A] hover:text-black"
          }`}
        >
          <PiPlusBold className="text-xs sm:text-sm" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1.5 sm:pt-2 border-t border-[#DAB25A]/20 ml-6 sm:ml-9 font-sans">
              <p className="text-white text-xs sm:text-sm leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 text-white overflow-hidden font-sans">
      <img
        src={faqBg}
        alt="FAQ Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <div className="absolute -top-[1px] left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 lg:h-16"
        >
          <path
            d="M0,0 C300,50 600,60 900,20 C1050,0 1150,15 1200,30"
            fill="none"
            stroke="#DAB25A"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-24 font-sans">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#DAB25A] uppercase bg-black/40 border border-[#DAB25A]/50 px-3 py-1 rounded-full shadow-lg">
                <PiQuestionFill className="text-[#DAB25A] text-xs sm:text-sm" /> FAQ
              </span>

              <h2 className="mt-3 sm:mt-4 font-sans font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">
                Got questions? <br className="hidden sm:inline" />
                We've got{" "}
                <span className="font-sans font-bold text-[#DAB25A] bg-gradient-to-r from-[#DAB25A] via-[#F3E5AB] to-[#DAB25A] bg-clip-text text-transparent">
                  answers.
                </span>
              </h2>

              <p className="mt-3 text-neutral-100 text-sm sm:text-base leading-relaxed font-normal font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Everything you need to know about Bummps, matching, and safety. Can't find the answer you're looking for?
              </p>
            </div>

            <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#DAB25A]/40 bg-transparent relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3.5 sm:gap-4 font-sans relative z-10">
                <span className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-[#DAB25A] text-black shrink-0 text-xl sm:text-2xl font-bold shadow-[0_0_15px_rgba(218,178,90,0.3)]">
                  <PiEnvelopeSimpleFill />
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    Still need help?
                  </h3>
                  <p className="text-xs text-neutral-200 mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    We're here for you 24/7
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="relative z-10 mt-4 sm:mt-5 inline-block text-center w-full bg-[#DAB25A] hover:bg-[#c49e48] text-black font-bold uppercase tracking-wider py-2.5 sm:py-3 rounded-full shadow-md text-xs transition-all duration-300 active:scale-95 cursor-pointer font-sans"
              >
                Contact Support
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                index={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

        </div>
      </div>

      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 lg:h-16"
        >
          <path
            d="M0,0 C300,50 600,60 900,20 C1050,0 1150,15 1200,30"
            fill="none"
            stroke="#DAB25A"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  );
}