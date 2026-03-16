import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollCue(window.scrollY < 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-24 sm:pt-28 lg:pt-32">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/60 via-purple-900/30 to-transparent"
          aria-hidden
        />

        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          poster="/images/montage-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/Neurologic.mp4" type="video/mp4" />
          <source src="/Neurologic.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex min-h-screen items-center py-16 sm:py-20 lg:py-24">
            <div className="w-full max-w-4xl">
              <h1 className="mb-6 text-[2.25rem] leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl lg:leading-[1.05]">
                <span className="block font-extralight">
                  Empowering Providers, Transforming Lives:
                </span>

                <span className="mt-2 block bg-gradient-to-r from-[#d4b5ff] to-[#ffa94d] bg-clip-text font-black text-transparent">
                  EEG Analytics for
                </span>

                <span className="mt-2 block bg-gradient-to-r from-[#d4b5ff] to-[#ffa94d] bg-clip-text font-black text-transparent">
                  Diagnostic Excellence
                </span>
              </h1>

              <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-300">
                Mission Statement
              </h2>

              <p className="mb-8 max-w-2xl text-sm font-light leading-7 text-slate-200 sm:text-base sm:leading-8 md:text-lg">
                Neurologic Solutions pioneers precision neurodata analysis to
                help clinicians achieve accurate diagnosis and optimal treatment.
                We deliver reliable EEG analytics, actionable insights, and
                quantitative biomarkers that turn brain data into better
                clinical outcomes across neurological disorders.
              </p>

              
            </div>
          </div>
        </div>

        {/* Mobile premium floating scroll cue */}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-8 z-30 flex justify-center px-4 transition-all duration-500 lg:hidden ${
            showScrollCue
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection("episcalp-process")}
            className="pointer-events-auto inline-flex flex-col items-center rounded-full border border-white/10 bg-black/20 px-5 py-3 text-slate-200 backdrop-blur-md transition-all hover:border-white/20 hover:bg-black/30 hover:text-white"
            aria-label="Scroll to EpiScalp process section"
          >
            <span className="mb-1 text-[11px] uppercase tracking-[0.24em] text-slate-300/90">
              Scroll
            </span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}