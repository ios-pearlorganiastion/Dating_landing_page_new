import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiArrowLeft } from "react-icons/hi";
import { PiSparkleFill } from "react-icons/pi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import BummpsLogo from "./BummpsLogo";

const publicNavLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Success Stories", to: "/success-stories" },
  { label: "Plans", to: "/our-plans" },
  { label: "Investors", to: "/investors" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [open]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleLogin = () => {
    setOpen(false);
    navigate("/login");
  };

  const handleRegister = () => {
    setOpen(false);
    navigate("/register");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
          scrolled ? "pt-3 sm:pt-4" : "pt-4 sm:pt-6"
        }`}
      >
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 rounded-full border backdrop-blur-2xl ${
            scrolled
              ? "w-[92%] max-w-6xl px-4 sm:px-6 py-2.5 bg-[#0e0e11]/90 border-[#DAB25A]/35 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(218,178,90,0.12)]"
              : "w-[95%] max-w-7xl px-5 sm:px-8 py-3 bg-[#0e0e11]/65 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          }`}
        >
          <a
            href="/"
            onClick={handleLogoClick}
            className="group relative flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#DAB25A]/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />
            <BummpsLogo className="h-7 sm:h-8 relative z-10" />
          </a>

          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] p-1.5 rounded-full backdrop-blur-md"
          >
            {publicNavLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHoveredPath(link.to)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 z-10 select-none ${
                    isActive
                      ? "text-[#DAB25A]"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {hoveredPath === link.to && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-[#DAB25A]/30 -z-10 shadow-[0_0_15px_rgba(218,178,90,0.15)]"
                    />
                  )}

                  <span className="relative flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="w-1.5 h-1.5 rounded-full bg-[#DAB25A] shadow-[0_0_8px_#DAB25A]"
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={handleLogin}
              className="text-xs uppercase tracking-wider font-semibold text-neutral-300 hover:text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/[0.05] active:scale-95 cursor-pointer border border-transparent hover:border-white/10"
            >
              Log In
            </button>

            <button
              onClick={handleRegister}
              className="group relative overflow-hidden text-xs uppercase tracking-wider font-bold text-black px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e5c575] via-[#DAB25A] to-[#c29b44] shadow-[0_0_20px_rgba(218,178,90,0.35)] hover:shadow-[0_0_30px_rgba(218,178,90,0.6)] active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <PiSparkleFill className="text-sm transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10">Sign Up</span>
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative grid h-10 w-10 place-items-center rounded-full border border-[#DAB25A]/35 bg-white/[0.03] text-[#DAB25A] active:scale-90 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(218,178,90,0.1)]"
            aria-label="Toggle Navigation"
          >
            {open ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenuAlt3 className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden bg-black/70 backdrop-blur-2xl flex flex-col justify-between p-6 pt-6 overflow-hidden"
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#DAB25A]/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-20 flex items-center justify-between pb-4 border-b border-white/10">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#DAB25A] font-bold bg-white/[0.04] px-4 py-2 rounded-full border border-[#DAB25A]/30 active:scale-95 transition-all shadow-[0_0_15px_rgba(218,178,90,0.1)]"
              >
                <HiArrowLeft className="text-sm" />
                Back
              </button>

              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white active:scale-95 transition-all"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {},
              }}
              className="relative z-10 flex flex-col gap-2 my-auto text-center"
            >
              {publicNavLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 16 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 text-2xl font-bold tracking-tight transition-all active:scale-95 ${
                      location.pathname === link.to
                        ? "text-[#DAB25A] drop-shadow-[0_0_15px_rgba(218,178,90,0.4)]"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="relative z-10 flex flex-col gap-3 max-w-sm mx-auto w-full pt-4 border-t border-white/10"
            >
              <button
                onClick={handleLogin}
                className="w-full py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-xs font-bold uppercase tracking-wider text-white active:scale-95 transition-all hover:bg-white/[0.08]"
              >
                Log In
              </button>

              <button
                onClick={handleRegister}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e5c575] via-[#DAB25A] to-[#c29b44] text-black text-xs font-bold uppercase tracking-wider shadow-[0_4px_25px_rgba(218,178,90,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <PiSparkleFill className="text-sm" />
                Sign Up
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}