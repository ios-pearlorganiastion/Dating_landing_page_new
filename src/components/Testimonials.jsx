import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  PiStarFill,
  PiQuotesFill,
  PiHeartFill,
  PiSparkleFill,
} from "react-icons/pi";
import bgImage from "../assets/testmonial/bcakground.png";

const testimonialData = [
  {
    name: "Sarah Miller",
    location: "New York, USA",
    rating: 5,
    review:
      "Verified profiles made the biggest difference. I finally felt safe meeting someone I met online for the first time.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Dmitry Sokolov",
    location: "Chicago, IL",
    rating: 5,
    review:
      "I was tired of endless superficial swiping. Bummps connected me with someone who truly shares my core values.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Anastasia Volkova",
    location: "Los Angeles, CA",
    rating: 5,
    review:
      "The connection felt effortless from day one. We had our first coffee date within a week and we've been inseparable since.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Alex Morgan",
    location: "Austin, TX",
    rating: 5,
    review:
      "The community here feels authentic. Found someone genuine when I least expected it. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Elena Rostova",
    location: "Miami, FL",
    rating: 5,
    review:
      "Modern, clean, and actually focused on genuine chemistry. Best dating experience I've ever had online.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 text-white overflow-hidden font-sans border-none outline-none bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
        <div className="text-center max-w-3xl mx-auto font-sans">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#DAB25A] bg-black/40 border border-[#DAB25A]/50 px-3.5 py-1.5 rounded-full shadow-lg">
            <PiSparkleFill className="text-xs" /> Success Stories
          </span>

          <h2 className="mt-5 font-sans font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-lg">
            Real people,{" "}
            <span className="font-sans font-bold text-[#DAB25A] bg-gradient-to-r from-[#DAB25A] via-[#F3E5AB] to-[#DAB25A] bg-clip-text text-transparent">
              real love stories
            </span>
          </h2>

          <p className="mt-4 text-white text-sm sm:text-base leading-relaxed font-medium font-sans drop-shadow-md">
            Thousands of couples found each other on Bummps. Here is what a few of them had to say.
          </p>
        </div>

        <div className="bummps-testimonials w-full mt-12 sm:mt-16 relative font-sans">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={28}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.15}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.8 },
            }}
            className="!py-6 !px-4"
          >
            {testimonialData.map((t, idx) => (
              <SwiperSlide key={t.name || idx} className="!h-auto py-4 font-sans">
                <div className="testimonial-card relative bg-black/25 border border-[#DAB25A]/40 rounded-3xl p-7 sm:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full max-w-md mx-auto transition-all duration-500 flex flex-col justify-between group overflow-hidden font-sans">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#DAB25A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#DAB25A]/20 transition-all" />

                  <div>
                    <div className="flex items-center justify-between">
                      <PiQuotesFill className="text-4xl text-[#DAB25A] drop-shadow-md" />

                      <div className="flex items-center gap-1 bg-black/40 border border-[#DAB25A]/40 px-2.5 py-1 rounded-full text-xs text-[#DAB25A] font-semibold font-sans shadow-sm">
                        <PiHeartFill className="text-xs" />
                        <span>Matched</span>
                      </div>
                    </div>

                    <p className="mt-5 text-white leading-relaxed text-sm sm:text-base font-normal font-sans drop-shadow-md">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/20 font-sans">
                    <div className="flex items-center gap-1 text-[#DAB25A]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <PiStarFill
                          key={i}
                          className={
                            i < t.rating
                              ? "opacity-100 text-[#DAB25A] text-sm drop-shadow-sm"
                              : "opacity-30 text-neutral-400 text-sm"
                          }
                        />
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3.5">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-2xl object-cover border-2 border-[#DAB25A] shadow-lg shrink-0"
                      />
                      <div className="text-left font-sans">
                        <h3 className="font-sans font-bold text-white text-base leading-snug drop-shadow-md">
                          {t.name}
                        </h3>
                        <p className="text-xs text-neutral-200 mt-0.5 font-medium font-sans drop-shadow-sm">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .bummps-testimonials .swiper-slide {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
          opacity: 0.5;
          transform: scale(0.92);
        }

        .bummps-testimonials .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
        }

        .bummps-testimonials .swiper-slide-active .testimonial-card {
          border-color: rgba(218, 178, 90, 0.85);
          background-color: rgba(0, 0, 0, 0.35);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 20px rgba(218, 178, 90, 0.25);
        }
      `}</style>
    </section>
  );
}