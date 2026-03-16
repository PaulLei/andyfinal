import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductCards from "./components/ProductCards";
import EpiscalpFeatureCarousel from "./components/EpiscalpFeatureCarousel.tsx";
import EzTrackFeatureCarousel from "./components/EzTrackFeatureCarousel.tsx";
import Technology from "./components/Technology.tsx";
import PressSection from "./components/PressSection";
import Footer from "./components/Footer";
import EZTrack from "./components/EZTrack";
import Episcalp from "./components/EpiScalp";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import NewsPage from "./components/NewsPage";
import PublicationsPage from "./components/PublicationsPage";
import ClinicalEvidencePage from "./components/ClinicalEvidence.tsx";
import ContactPage from "./components/ContactPage";
import SupportPage from "./components/SupportPage";
import ProfilePage from "./components/ProfilePage";
import ScrollToTop from "./ScrollToTop";


function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
      <EpiscalpFeatureCarousel />
      <EzTrackFeatureCarousel />
      <Technology />
      <PressSection />
      <Footer />
    </>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-black">{title}</h1>
        <p className="mt-3 text-black/70">Page coming soon.</p>
        <div className="mt-6">
          <Link to="/" className="underline text-black/70 hover:text-black">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation scrolled={scrolled} />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/about/:person" element={<ProfilePage />} />

          {/* Products */}
          <Route path="/products" element={<Placeholder title="Products" />} />
          <Route path="/episcalp" element={
            <>
              <Episcalp />
              <Footer />
            </>
            }
          />
          <Route path="/eztrack" element={
            <>
              <EZTrack />
              <Footer />
            </>
            }
          />

          {/* Clinical */}
          <Route path="/clinical" element={<Placeholder title="Clinical" />} />
          <Route
            path="/clinical-evidence"
            element={
              <>
                <ClinicalEvidencePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/publications"
            element={
              <>
                <PublicationsPage />
                <Footer />
              </>
            }
          />
          <Route path="/use-cases" element={<Placeholder title="Use cases" />} />

          {/* Company */}
          <Route path="/company" element={<Placeholder title="Company" />} />
          <Route
            path="/about-us"
            element={
              <>
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <TeamPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/Contact-Us"
            element={
              <>
                <ContactPage />
                <Footer />
              </>
            }
          />

          {/* Resources */}
          <Route path="/resources" element={<Placeholder title="Resources" />} />
          <Route
            path="/blog-news"
            element={
              <>
                <NewsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/for-investors"
            element={<Placeholder title="For Investors" />}
          />
          <Route
            path="/support"
            element={
              <>
                <SupportPage />
                <Footer />
              </>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Placeholder title="Not Found" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}