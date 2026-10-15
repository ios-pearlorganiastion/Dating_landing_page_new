import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PiCheckCircleFill,
  PiSparkleBold,
  PiArrowRightBold,
  PiLockKeyFill,
  PiShieldCheckFill,
  PiCloudFill,
} from "react-icons/pi";

import img from "../assets/2.png";
import bgImage from "../assets/plans/plans (2).png";

export default function BummpsPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState("bummpsPlus");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: "bummps",
      name: "bummps.",
      tagline: "Essential starter access for casual networking.",
      price: "$9.99",
      annualPrice: "$59.88",
      annualMonthlyPrice: "$4.99",
      features: [
        "Up to ~25 swipes per day",
        "Basic matching & chat",
        "Verified profiles only",
      ],
      isPopular: false,
    },
    {
      id: "bummpsPlus",
      name: "bummps Plus",
      tagline: "The optimal mix of reach and high-priority matching.",
      price: "$19.99",
      annualPrice: "$119.88",
      annualMonthlyPrice: "$9.99",
      features: [
        "Up to ~75 swipes per day",
        "Priority visibility in discovery",
        "Advanced search & location filters",
        "Unlimited direct messaging",
        "Verified profiles only",
      ],
      isPopular: true,
    },
    {
      id: "bummpsPro",
      name: "bummps Pro",
      tagline: "Full luxury experience with global reach & maximum status.",
      price: "$29.99",
      annualPrice: "$179.88",
      annualMonthlyPrice: "$14.99",
      features: [
        "Unlimited swipes without daily cap",
        "Passport mode — match anywhere globally",
        "5 Super Bummps included every month",
        "Maximum profile boost & top placement",
        "Priority customer concierge support",
        "Advanced analytics & profile insights",
      ],
      isPopular: false,
    },
  ];

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);

  const getDisplayPrice = (plan) => {
    if (!plan) return "$0.00";
    return billingCycle === "annual" ? plan.annualMonthlyPrice : plan.price;
  };

  const getTotalPrice = (plan) => {
    if (!plan) return "$0.00";
    return billingCycle === "annual" ? plan.annualPrice : plan.price;
  };

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-14 text-white overflow-hidden font-sans select-none min-h-screen flex flex-col justify-between">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-[#DAB25A]/15 via-[#F3E5AB]/5 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#DAB25A]/40 bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-[#DAB25A] mb-3 sm:mb-4 shadow-lg"
          >
            <PiSparkleBold />
            <span>Membership Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Elevate Your{" "}
            <span className="font-sans font-extrabold text-[#DAB25A] bg-gradient-to-r from-[#DAB25A] via-[#F3E5AB] to-[#DAB25A] bg-clip-text text-transparent">
              Journey.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2.5 text-neutral-100 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Select an elite tier crafted to give you unparalleled reach,
            priority status, and global connections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 sm:mt-8 inline-flex items-center p-1.5 rounded-full bg-black/40 border border-[#DAB25A]/30 backdrop-blur-md shadow-xl"
          >
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#DAB25A] text-black shadow-[0_4px_25px_rgba(218,178,90,0.4)]"
                  : "text-neutral-200 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-6 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-[#DAB25A] text-black shadow-[0_4px_25px_rgba(218,178,90,0.4)]"
                  : "text-neutral-200 hover:text-white"
              }`}
            >
              <span>Annual</span>

              <span className="bg-[#121214] text-[#DAB25A] text-[9px] px-2 py-0.5 rounded-full border border-[#DAB25A]/40 font-black">
                Save 50%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch font-sans">
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              const isHovered = hoveredPlan === plan.id;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedPlan(plan.id)}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-black/25 border-[#DAB25A] shadow-[0_0_30px_rgba(218,178,90,0.25)] ring-1 ring-[#DAB25A]"
                      : "bg-black/15 border-[#DAB25A]/30 hover:border-[#DAB25A]/70 hover:bg-black/25"
                  }`}
                >
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute bottom-[calc(100%+14px)] left-4 sm:left-8 z-50 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                      >
                        <div className="relative bg-neutral-950/95 border-2 border-[#DAB25A] rounded-[34px] px-6 py-5 max-w-sm sm:max-w-md shadow-2xl backdrop-blur-2xl">
                          <div className="absolute -top-4 left-6 w-11 h-11 bg-neutral-950 border-t-2 border-l-2 border-[#DAB25A] rounded-full pointer-events-none" />
                          <div className="absolute -top-7 left-14 w-16 h-16 bg-neutral-950 border-t-2 border-[#DAB25A] rounded-full pointer-events-none" />
                          <div className="absolute -top-5 right-10 w-13 h-13 bg-neutral-950 border-t-2 border-r-2 border-[#DAB25A] rounded-full pointer-events-none" />
                          <div className="absolute -bottom-3 left-10 w-9 h-9 bg-neutral-950 border-b-2 border-l-2 border-[#DAB25A] rounded-full pointer-events-none" />
                          <div className="absolute -bottom-4 right-14 w-11 h-11 bg-neutral-950 border-b-2 border-r-2 border-[#DAB25A] rounded-full pointer-events-none" />

                          <div className="absolute -bottom-6 left-8 w-4 h-4 bg-neutral-950 border-2 border-[#DAB25A] rounded-full shadow-lg" />
                          <div className="absolute -bottom-9 left-5 w-2.5 h-2.5 bg-neutral-950 border-2 border-[#DAB25A] rounded-full shadow-lg" />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#DAB25A]/30">
                              <PiCloudFill className="text-[#DAB25A] text-lg" />
                              <span className="text-xs font-black uppercase tracking-wider text-[#DAB25A]">
                                {plan.name} Privileges
                              </span>
                            </div>

                            <p className="text-[11px] text-neutral-300 italic mb-3">
                              {plan.tagline}
                            </p>

                            <div className="space-y-2">
                              {plan.features.map((feat, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-xs text-white"
                                >
                                  <PiCheckCircleFill className="text-[#DAB25A] text-sm shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {plan.isPopular && (
                    <div className="absolute -top-3 right-6 bg-[#DAB25A] text-black text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-[0_4px_15px_rgba(218,178,90,0.4)]">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl sm:text-[20px] font-bold text-[#DAB25A] font-sans flex items-center gap-0 leading-none drop-shadow">
                        <img
                          src={img}
                          alt="bummps"
                          className="h-7 sm:h-8 w-auto object-contain"
                        />

                        {plan.id === "bummpsPlus" && (
                          <span className="text-2xl sm:text-3xl font-extrabold leading-none flex items-center -ml-1 translate-y-[1px]">
                            +
                          </span>
                        )}

                        {plan.id === "bummpsPro" && (
                          <span className="text-xl sm:text-[20px] leading-none -ml-1 relative top-[3px]">
                            Pro
                          </span>
                        )}
                      </h3>

                      <p className="text-xs text-neutral-200 mt-2 max-w-xs leading-relaxed drop-shadow">
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {getDisplayPrice(plan)}
                      </span>

                      <span className="text-xs text-neutral-300 font-medium ml-1">
                        /mo
                      </span>

                      {billingCycle === "annual" && (
                        <div className="text-[9px] text-[#DAB25A] mt-1 font-bold">
                          billed annually
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 border-t border-[#DAB25A]/20 text-xs text-neutral-100">
                    {plan.features.slice(0, 3).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 drop-shadow"
                      >
                        <PiCheckCircleFill className="text-[#DAB25A] text-sm shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.features.length > 3 && (
                      <span className="text-[11px] font-bold text-[#DAB25A] bg-black/40 px-2 py-0.5 rounded-full border border-[#DAB25A]/30">
                        +{plan.features.length - 3} more privileges
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-black/25 border border-[#DAB25A]/35 shadow-2xl flex flex-col justify-between min-h-[420px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#DAB25A]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[#DAB25A]/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                  Selected Tier
                </span>

                <div className="flex items-center gap-1.5 text-[10px] text-neutral-300 font-medium">
                  <PiLockKeyFill className="text-[#DAB25A]" />
                  <span>Instant Activation</span>
                </div>
              </div>

              <div className="mt-5 mb-6">
                <span className="text-[11px] font-bold text-[#DAB25A] bg-[#DAB25A]/20 border border-[#DAB25A]/40 px-3 py-1 rounded-full inline-block mb-3 backdrop-blur-md">
                  {billingCycle === "annual"
                    ? "Annual Billing"
                    : "Monthly Billing"}
                </span>

                <h3 className="text-2xl sm:text-[26px] font-sans font-bold text-[#DAB25A] tracking-wide flex items-center gap-0 leading-none drop-shadow">
                  <img
                    src={img}
                    alt="bummps"
                    className="h-9 sm:h-10 w-auto object-contain"
                  />

                  {selectedPlan === "bummpsPlus" && (
                    <span className="text-2xl sm:text-3xl font-extrabold leading-none flex items-center -ml-1 translate-y-[1px]">
                      +
                    </span>
                  )}

                  {selectedPlan === "bummpsPro" && (
                    <span className="text-2xl sm:text-[26px] leading-none -ml-1 relative top-[4px]">
                      Pro
                    </span>
                  )}
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                  Included Privileges:
                </p>

                {selectedPlanData?.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-white drop-shadow"
                  >
                    <PiCheckCircleFill className="text-[#DAB25A] text-lg shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DAB25A]/20 relative z-10">
              <div className="flex justify-between items-baseline mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                    TOTAL DUE TODAY
                  </span>

                  {billingCycle === "annual" && (
                    <p className="text-[9px] text-neutral-300 mt-1">
                      Annual membership payment
                    </p>
                  )}
                </div>

                <span className="font-sans text-3xl sm:text-4xl font-bold text-[#DAB25A] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {getTotalPrice(selectedPlanData)}
                </span>
              </div>

              <button
                type="button"
                className="w-full py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#DAB25A] hover:bg-[#c49e48] text-black shadow-[0_4px_25px_rgba(218,178,90,0.4)] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 outline-none"
              >
                <PiShieldCheckFill className="text-lg sm:text-xl" />
                <span>Continue to Upgrade</span>
                <PiArrowRightBold className="text-sm" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}