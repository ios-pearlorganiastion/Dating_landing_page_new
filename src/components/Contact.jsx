import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiPaperPlaneTiltFill,
  PiCheckCircleFill,
  PiUserBold,
  PiEnvelopeSimpleBold,
  PiChatTextBold,
  PiShieldCheckBold,
  PiClockBold,
  PiSparkleFill,
  PiCaretDownBold,
  PiLightningFill,
} from "react-icons/pi";
import footerBg from "../assets/footer/footer.png";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState({
    label: "General Inquiry",
    value: "general",
  });

  const dropdownRef = useRef(null);

  const categories = [
    { label: "General Inquiry", value: "general" },
    { label: "Member VIP Support", value: "membership" },
    { label: "Trust & Safety Escalation", value: "safety" },
    { label: "Brand Partnerships", value: "partnerships" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1200);
  };

  const inputStyle =
    "w-full rounded-2xl border border-white/20 bg-black/25 py-3.5 sm:py-4 pl-11 sm:pl-12 pr-4 text-xs sm:text-sm text-white placeholder:text-neutral-300 focus:border-[#DAB25A] focus:outline-none focus:ring-1 focus:ring-[#DAB25A] focus:shadow-[0_0_20px_rgba(218,178,90,0.2)] transition-all duration-300 [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] [&:-webkit-autofill]:[-webkit-text-fill-color:white]";

  return (
    <div className="bg-[#121214] text-white font-sans select-none min-h-screen flex flex-col justify-between">
      <section
        id="contact"
        className="relative pt-24 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 text-white overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={footerBg}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#DAB25A] uppercase bg-black/30 border border-[#DAB25A]/40 px-3.5 py-1.5 rounded-full shadow-lg">
              <PiSparkleFill className="text-xs" />
              Direct Support Line
            </span>

            <h2 className="mt-5 font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Let's start a conversation with{" "}
              <span className="font-sans font-extrabold text-[#DAB25A] bg-gradient-to-r from-[#DAB25A] via-[#F3E5AB] to-[#DAB25A] bg-clip-text text-transparent">
                bummps.
              </span>
            </h2>

            <p className="mt-4 text-white text-sm sm:text-base font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Connect directly with our core concierge team for fast,
              confidential assistance.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-black/20 border border-white/20 hover:border-[#DAB25A]/50 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300"
            >
              <div className="space-y-6 sm:space-y-8 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#DAB25A]/40 bg-black/30 px-3 py-1 text-[11px] font-semibold text-[#DAB25A] mb-3">
                    <PiLightningFill />
                    <span>Instant Reach Desk</span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Let's build meaningful connections together.
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-100 mt-3 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    Send us a message and our support team will respond within
                    24 hours guaranteed.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/15">
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/15 space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#DAB25A]">
                      Global Support Desk
                    </span>

                    <p className="text-sm font-semibold text-white flex items-center gap-2 drop-shadow">
                      <PiEnvelopeSimpleBold className="text-[#DAB25A]" />
                      BIGBUMMPS@gmail.com
                    </p>

                    <p className="text-xs text-neutral-200">
                      Available 24 hours a day, 7 days a week.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-white/15 mt-6 sm:mt-8 flex items-center justify-between text-[11px] sm:text-xs text-neutral-200 relative z-10 drop-shadow">
                <span className="flex items-center gap-1.5">
                  <PiShieldCheckBold className="text-[#DAB25A]" />
                  Encrypted Data
                </span>

                <span className="flex items-center gap-1.5">
                  <PiClockBold className="text-[#DAB25A]" />
                  24/7 Monitored
                </span>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-black/20 border border-white/20 hover:border-[#DAB25A]/50 shadow-2xl space-y-4 sm:space-y-6 flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-100 block mb-1.5 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      Your Name
                    </label>

                    <div className="relative">
                      <PiUserBold className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#DAB25A] text-base sm:text-lg z-10" />

                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-100 block mb-1.5 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <PiEnvelopeSimpleBold className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#DAB25A] text-base sm:text-lg z-10" />

                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-100 block mb-1.5 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Inquiry Category
                  </label>

                  <div className="relative" ref={dropdownRef}>
                    <PiEnvelopeSimpleBold className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#DAB25A] text-base sm:text-lg z-10" />

                    <button
                      type="button"
                      onClick={() =>
                        setIsDropdownOpen(!isDropdownOpen)
                      }
                      className={`w-full rounded-2xl border bg-black/25 py-3.5 sm:py-4 pl-11 sm:pl-12 pr-10 text-xs sm:text-sm text-left text-white transition-all duration-300 flex items-center justify-between ${
                        isDropdownOpen
                          ? "border-[#DAB25A] ring-1 ring-[#DAB25A] shadow-[0_0_20px_rgba(218,178,90,0.2)]"
                          : "border-white/20 hover:border-[#DAB25A]/50"
                      }`}
                    >
                      <span>{selectedCategory.label}</span>

                      <PiCaretDownBold
                        className={`text-[#DAB25A] text-base transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 mt-2 w-full rounded-2xl border border-white/20 bg-[#121214]/95 p-1.5 shadow-2xl overflow-hidden"
                        >
                          {categories.map((item) => (
                            <li key={item.value}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCategory(item);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full rounded-xl px-4 py-2.5 text-xs sm:text-sm text-left transition-all duration-200 flex items-center justify-between ${
                                  selectedCategory.value === item.value
                                    ? "bg-[#DAB25A] text-black font-bold"
                                    : "text-neutral-200 hover:bg-[#DAB25A]/20 hover:text-[#DAB25A]"
                                }`}
                              >
                                <span>{item.label}</span>

                                {selectedCategory.value ===
                                  item.value && (
                                  <PiCheckCircleFill className="text-base text-black" />
                                )}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-100 block mb-1.5 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  >
                    Your Message
                  </label>

                  <div className="relative">
                    <PiChatTextBold className="pointer-events-none absolute left-4 top-3.5 sm:top-4 text-[#DAB25A] text-base sm:text-lg z-10" />

                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us what's on your mind..."
                      className="w-full rounded-2xl border border-white/20 bg-black/25 py-3.5 sm:py-4 pl-11 sm:pl-12 pr-4 text-xs sm:text-sm text-white placeholder:text-neutral-300 focus:border-[#DAB25A] focus:outline-none focus:ring-1 focus:ring-[#DAB25A] focus:shadow-[0_0_20px_rgba(218,178,90,0.2)] transition-all duration-300 resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#DAB25A] hover:bg-[#c49e48] text-black shadow-[0_4px_25px_rgba(218,178,90,0.3)] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 outline-none mt-4 disabled:opacity-60"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : submitted ? (
                  <>
                    <PiCheckCircleFill className="text-lg sm:text-xl" />
                    <span>Message Sent Successfully ✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <PiPaperPlaneTiltFill className="text-sm sm:text-base" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}