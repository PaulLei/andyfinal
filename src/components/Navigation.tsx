import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "/neurologic_solutions.horizontal.color_.black_.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

interface NavigationProps {
  scrolled: boolean;
}

const NAV_ITEMS = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "EpiScalp",
        href: "/episcalp",
        desc: "Rapid EEG-Based Epilepsy Risk Assessment",
      },
      {
        label: "EZTrack",
        href: "/eztrack",
        desc: "Simplified EEG Fragility for Surgical Planning",
      },
    ],
  },
  {
    label: "Clinical",
    href: "/clinical",
    children: [
      {
        label: "Clinical Evidence",
        href: "/clinical-evidence",
        desc: "Outcomes and performance results",
      },
      {
        label: "Publications",
        href: "/publications",
        desc: "Papers, posters, and abstracts",
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      {
        label: "About Us",
        href: "/about-us",
        desc: "Mission, vision, and story",
      },
      {
        label: "Team",
        href: "/team",
        desc: "Leadership and contributors",
      },
    ],
  },
  {
    label: "News",
    href: "/blog-news",
  },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0 lg:justify-self-start"
            onClick={() => {
              setMobileOpen(false);
              setActiveDropdown(null);
            }}
          >
            <img
              src={Logo}
              alt="Neurologic Solutions"
              className="h-10 md:h-11 lg:h-12 xl:h-[52px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center space-x-1 lg:justify-self-center">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = activeDropdown === item.label;

              if (!hasChildren) {
                return (
                  <div key={item.label} className="h-20 flex items-center px-4">
                    <Link
                      to={item.href}
                      className="text-[13px] tracking-widest uppercase font-medium text-neutral-500 hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="h-20 flex items-center px-4"
                >
                  <button
                    onClick={() =>
                      setActiveDropdown(isOpen ? null : item.label)
                    }
                    className={`relative text-[13px] tracking-widest uppercase font-medium transition-colors ${
                      isOpen
                        ? "text-black"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${
                        isOpen ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full w-full bg-white border-b border-neutral-200 shadow-xl shadow-black/5 transition-all duration-300 origin-top ${
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 mx-auto max-w-[1600px]">
                      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group p-4 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-200 flex items-start justify-between"
                          >
                            <div>
                              <span className="text-base font-semibold text-neutral-900 group-hover:text-black">
                                {child.label}
                              </span>
                              <p className="text-sm text-neutral-500 mt-1">
                                {child.desc}
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-black transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-black text-white text-[12px] tracking-widest uppercase font-medium hover:bg-neutral-800 transition"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full text-neutral-900 bg-neutral-50 hover:bg-neutral-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 w-full h-[100dvh] bg-white z-40 flex flex-col transition-transform duration-500 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-20 shrink-0" />

        <div className="flex-1 overflow-y-auto px-4 py-2">
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.children?.length;

            if (!hasChildren) {
              return (
                <div key={item.label} className="border-b border-neutral-100">
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-between py-5 px-2"
                  >
                    <span className="text-lg font-semibold text-black">
                      {item.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="border-b border-neutral-100">
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label
                    )
                  }
                  className="w-full flex justify-between py-5 px-2"
                >
                  <span className="text-lg font-semibold text-black">
                    {item.label}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-neutral-400 transition-transform ${
                      mobileExpanded === item.label ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    mobileExpanded === item.label
                      ? "grid-rows-[1fr] opacity-100 mb-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden flex flex-col gap-2">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100"
                      >
                        <span className="text-base font-medium text-neutral-900">
                          {child.label}
                        </span>
                        <p className="text-sm text-neutral-500">{child.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 border-t border-neutral-100">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full h-14 rounded-full bg-black text-white text-sm font-semibold tracking-widest uppercase hover:bg-neutral-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}