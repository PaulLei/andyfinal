import { Link } from "react-router-dom";
import LogoWhite from "/neurologic_solutions.horizontal.color_.white_.png";

const BRAND = {
  purple: '#9986bf',
  purpleDark: '#7e6aa7',
  purpleSoft: 'rgba(153, 134, 191, 0.12)',
  purpleBorder: 'rgba(153, 134, 191, 0.28)',
  orange: '#ce7f57',
  orangeDark: '#b96d46',
  orangeSoft: 'rgba(206, 127, 87, 0.12)',
  orangeBorder: 'rgba(206, 127, 87, 0.28)',
  ink: '#2f2738',
  muted: '#6e647b',
  line: 'rgba(47, 39, 56, 0.10)',
  bg: '#fcfaf8',
  card: '#ffffff',
};

export default function Footer() {
  const sectionTitleClass =
    "mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70";
  const linkClass =
    "text-sm font-light text-white/65 transition-colors hover:text-white";
  const bodyClass = "text-sm font-light leading-relaxed text-white/65";

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4 xl:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src={LogoWhite}
                alt="Neurologic Solutions"
                className="h-10 w-auto origin-left scale-[1.2] sm:h-11 sm:scale-[1.45] lg:h-12 lg:scale-[1.6]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/65">
              Neurologic Solutions pioneers precision neurodata analysis to help
              clinicians achieve accurate diagnosis and optimal treatment. We
              deliver reliable EEG analytics, actionable insights, and
              quantitative biomarkers that turn brain data into better clinical
              outcomes across neurological disorders.
            </p>

            <div className="mt-6">
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-yellow-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-6 lg:grid-cols-4 lg:gap-6 xl:col-span-5">
            <div>
              <h4 className={sectionTitleClass}>Products</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/episcalp" className={linkClass}>
                    EpiScalp
                  </Link>
                </li>
                <li>
                  <Link to="/eztrack" className={linkClass}>
                    EZTrack
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={sectionTitleClass}>Clinical</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/clinical-evidence" className={linkClass}>
                    Clinical evidence
                  </Link>
                </li>
                <li>
                  <Link to="/publications" className={linkClass}>
                    Publications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={sectionTitleClass}>Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about-us" className={linkClass}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className={linkClass}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={sectionTitleClass}>News</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog-news" className={linkClass}>
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 xl:col-span-3 lg:pl-2">
            <h4 className={sectionTitleClass}>Contact</h4>
            <ul className="space-y-3">
              <li className={bodyClass}>
                Phone:{" "}
                <a className={linkClass} href="tel:+16175498316">
                  +1 (617) 549-8316
                </a>
              </li>
              <li className={bodyClass}>
                Email:{" "}
                <a
                  className={linkClass}
                  href="mailto:help@neurologicsolutions.net"
                >
                  help@neurologicsolutions.net
                </a>
              </li>
              <li className={bodyClass}>
                Address: Neurologic Solutions Inc. 301 W 29th ST. Baltimore, MD
                21218
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-light text-white/45">
            © {new Date().getFullYear()} Neurologic Solutions. All rights
            reserved.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 md:justify-end">
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms of Use
            </Link>

            <a
              href="https://patadigitalservices.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-light transition-colors"
            >
              site by{" "}
              <span className="text-orange-400 hover:text-orange-300">
                PATA Digital Services
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}