import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import LogoWhite from "/neurologic_solutions.horizontal.color_.white_.png"; // ✅ adjust filename if needed

export default function Footer() {
  const sectionTitleClass =
    "text-[11px] tracking-[0.22em] uppercase opacity-80 mb-5";
  const linkClass =
    "text-gray-400 hover:text-white transition-colors font-light text-sm";

  return (
    <footer className="bg-black text-white">
      {/* ✅ align with navbar container */}
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-7 gap-12">
          {/* Brand (logo + blurb) */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img
                src={LogoWhite}
                alt="Neurologic Solutions"
                className="h-12 w-auto scale-[1.75] origin-left"
              />
            </Link>

            <p className="mt-5 text-gray-400 font-light text-sm leading-relaxed max-w-sm">
              Neurologic Solutions pioneers precision neurodata analysis to help clinicians achieve accurate diagnosis and optimal treatment. We deliver reliable EEG analytics, actionable insights, and quantitative biomarkers that turn brain data into better clinical outcomes across neurological disorders.
            </p>


            <div className="mt-7">
              <Link
                to="/Contact-Us"
                className="inline-flex items-center rounded-full px-4 py-2 text-[11px] tracking-[0.22em] uppercase bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-1">
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

          {/* Clinical */}
          <div className="md:col-span-1">
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

          {/* Company */}
          <div className="md:col-span-1">
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

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className={sectionTitleClass}>News</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog-news" className={linkClass}>
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ New: Contact column (far right) */}
          <div className="md:col-span-1 md:justify-self-end">
            <h4 className={sectionTitleClass}>Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 font-light text-sm">
                Phone:{" "}
                <a className={linkClass} href="tel:+16175498316">
                  +1 (617) 549-8316
                </a>
              </li>
              <li className="text-gray-400 font-light text-sm">
                Email:{" "}
                <a className={linkClass} href="mailto:help@neurologicsolutions.net">
                  help@neurologicsolutions.net
                </a>
              </li>
              <li className="text-gray-400 font-light text-sm leading-relaxed">
                Address: Neurologic Solutions Inc. 301 W 29th ST. Baltimore, MD
                21218
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Neurologic Solutions. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms of Use
            </Link>

            {/* ✅ “site by PATA…” orange external link */}
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
