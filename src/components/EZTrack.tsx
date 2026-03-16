import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Mail,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  Building2,
  Microscope,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── Brand tokens (matches About page) ────────────────────────────────────────
const B = {
  purple:       "#9986bf",
  purpleDark:   "#7e6aa7",
  purpleSoft:   "rgba(153,134,191,0.12)",
  purpleBorder: "rgba(153,134,191,0.28)",
  orange:       "#ce7f57",
  orangeDark:   "#b96d46",
  orangeSoft:   "rgba(206,127,87,0.12)",
  orangeBorder: "rgba(206,127,87,0.28)",
  ink:          "#2f2738",
  muted:        "#6e647b",
  line:         "rgba(47,39,56,0.10)",
  bg:           "#fcfaf8",
  card:         "#ffffff",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Capture EEG and preprocess",
    description:
      "Import scalp EEG recordings and run a short preprocessing pipeline to produce clean, analysis-ready signals. Artifacts are removed, channels are validated, and the data is structured for fragility computation.",
    detail:
      "Supports standard EEG formats. The pipeline is designed to minimize setup time so clinicians can focus on results rather than configuration.",
    image:
      "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    title: "Compute neural fragility",
    description:
      "EpiScalp applies a validated network model to measure the fragility of each electrode over time. The result is a rich spatio-temporal map that quantifies how susceptible each brain region is to seizure onset.",
    detail:
      "Fragility is computed from the linear time-varying model of brain network dynamics — a method developed and validated across multiple academic medical centers.",
    image:
      "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    title: "Review, export, and collaborate",
    description:
      "Outputs are presented as interpretable heatmaps and overlay summaries designed for quick scanning and clinical discussion. Export figures and summaries for integration into planning workflows.",
    detail:
      "Designed to complement the existing clinical workflow, not replace it. Outputs are structured to fit naturally into multidisciplinary team review.",
    image:
      "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const institutions = [
  {
    name: "Johns Hopkins University",
    department: "Department of Biomedical Engineering & Neurology",
    role: "Algorithm development and retrospective validation",
    icon: Building2,
  },
  {
    name: "Cleveland Clinic",
    department: "Epilepsy Center",
    role: "Clinical research collaboration and prospective study",
    icon: Microscope,
  },
  {
    name: "University of Pittsburgh Medical Center",
    department: "Department of Neurological Surgery",
    role: "Multi-site validation and data collection",
    icon: FlaskConical,
  },
];

const publications = [
  {
    title:
      "Neural Fragility as an EEG Measure for the Seizure Onset Zone",
    authors: "Li A, Huynh C, Fitzgerald Z, et al.",
    journal: "Nature Neuroscience",
    year: "2021",
    episcalp: true,
    href: "#",
  },
  {
    title:
      "EEG Fragility Biomarker Predicts Surgical Outcomes in Patients with Drug-Resistant Epilepsy",
    authors: "Sarma SV, Li A, et al.",
    journal: "Brain",
    year: "2022",
    episcalp: true,
    href: "#",
  },
  {
    title:
      "Scalp EEG-Based Neural Fragility Maps in Focal Epilepsy",
    authors: "Kamali G, Li A, Sarma SV, et al.",
    journal: "Epilepsia",
    year: "2023",
    episcalp: true,
    href: "#",
  },
  {
    title:
      "A Linear Time-Varying Model of Brain Network Dynamics",
    authors: "Sarma SV, et al.",
    journal: "IEEE Transactions on Neural Systems & Rehabilitation Engineering",
    year: "2019",
    episcalp: false,
    href: "#",
  },
  {
    title:
      "Validation of EZTrack for Intracranial EEG Source Localization",
    authors: "González-Martínez J, Hays M, et al.",
    journal: "Neurosurgery",
    year: "2020",
    episcalp: false,
    href: "#",
  },
];

const faqs = [
  {
    q: "What type of EEG data does EpiScalp require?",
    a: "EpiScalp is designed for scalp EEG recordings. It supports common clinical EEG formats and is intended to work with recordings that include both interictal and ictal segments.",
  },
  {
    q: "How long does it take to generate results?",
    a: "Analysis typically runs in minutes after preprocessing is complete. The exact duration depends on recording length and system configuration, but the workflow is designed to be efficient enough for routine clinical use.",
  },
  {
    q: "Has EpiScalp been validated in clinical settings?",
    a: "Yes. EpiScalp has been studied in retrospective and prospective research across multiple academic medical centers. Peer-reviewed publications are available in the section above.",
  },
  {
    q: "Is EpiScalp FDA cleared?",
    a: "EpiScalp is currently in the regulatory pathway. The foundational EZTrack platform has received FDA 510(k) clearance, and EpiScalp is being developed under a Quality Management System in preparation for submission.",
  },
  {
    q: "Can I participate in a clinical trial?",
    a: "We are currently conducting research at three partner institutions. If your center is interested in becoming a research site or participating in an ongoing study, please reach out using the contact information below.",
  },
  {
    q: "What does the output look like?",
    a: "EpiScalp produces spatio-temporal fragility heatmaps and electrode-level summary overlays. These outputs are designed to be interpretable without specialized signal-processing expertise.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({
  children,
  color = B.purpleDark,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className="text-[11px] uppercase tracking-[0.22em]"
      style={{ color, fontWeight: 600 }}
    >
      {children}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        borderColor: open ? B.purpleBorder : B.line,
        backgroundColor: open ? "rgba(153,134,191,0.04)" : B.card,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-base leading-6" style={{ fontWeight: 400, color: B.ink }}>
          {q}
        </span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0" style={{ color: B.purpleDark }} />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0" style={{ color: B.muted }} />
        )}
      </button>
      {open && (
        <div
          className="px-5 pb-5 text-sm leading-7"
          style={{ color: B.muted }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EpiScalpPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showAllPubs, setShowAllPubs] = useState(false);
  const pubsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visiblePubs = showAllPubs ? publications : publications.filter((p) => p.episcalp);

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-24"
      style={{
        backgroundColor: B.bg,
        color: B.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 pt-14 pb-14 md:pt-16 md:pb-16">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: B.purpleSoft }}
          />
          <div
            className="absolute right-[-4rem] top-1/4 h-96 w-96 rounded-full blur-3xl"
            style={{
              background: B.orangeSoft,
              transform: `translateY(${scrollY * 0.12}px)`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            {/* Left: text */}
            <div>
              <span
                className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  background: B.purpleSoft,
                  borderColor: B.purpleBorder,
                  color: B.purpleDark,
                }}
              >
                EpiScalp · Product Overview
              </span>

              <h1
                className="mt-6 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl"
                style={{ fontWeight: 300 }}
              >
                Scalp EEG fragility
                <span
                  className="block"
                  style={{ color: B.purpleDark, fontStyle: "italic" }}
                >
                  made interpretable
                </span>
              </h1>

              <p
                className="mt-7 max-w-xl text-lg leading-8 sm:text-xl"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                EpiScalp translates complex scalp EEG data into clear,
                spatio-temporal fragility maps to support epilepsy surgical
                planning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:mac.breault@gmail.com?subject=EpiScalp%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: B.purpleDark }}
                >
                  <Mail className="h-4 w-4" />
                  Reach out to us
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm transition-colors duration-200 hover:bg-black/5"
                  style={{ borderColor: B.line, color: B.ink }}
                >
                  How it works
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Minutes to results",
                  "Heatmaps + overlays",
                  "Designed for clinical review",
                  "FDA 510(k) pathway",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: B.purpleBorder,
                      color: B.muted,
                      backgroundColor: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: hero card */}
            <div
              className="rounded-[2rem] border p-7 shadow-sm sm:p-8"
              style={{
                borderColor: B.line,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(153,134,191,0.07) 100%)",
              }}
            >
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: B.orangeDark, fontWeight: 600 }}
              >
                What EpiScalp produces
              </div>
              <p className="mt-4 text-xl leading-8" style={{ fontWeight: 300 }}>
                Spatio-temporal heatmaps and electrode-level summary overlays
                that highlight regions of potential surgical interest — directly
                from routine scalp EEG.
              </p>

              <div className="my-6 h-px w-full" style={{ backgroundColor: B.line }} />

              <div className="space-y-3">
                {[
                  "No intracranial EEG required to run",
                  "Clinician-readable visual output",
                  "Validated across multiple institutions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: B.purpleDark }}
                    />
                    <span className="text-sm leading-6" style={{ color: B.muted }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS — 3 STEPS (ALTERNATING)
      ══════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="px-6 py-16 sm:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>How It Works</SectionLabel>
            <h2
              className="mt-4 text-4xl leading-tight sm:text-5xl"
              style={{ fontWeight: 300 }}
            >
              Three steps from EEG to insight
            </h2>
            <p
              className="mt-5 text-lg leading-8"
              style={{ color: B.muted, fontWeight: 300 }}
            >
              The EpiScalp workflow is designed to be efficient, interpretable,
              and fit naturally into an existing clinical routine.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    !isEven ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className="rounded-[2rem] overflow-hidden border shadow-sm"
                    style={{
                      borderColor: B.line,
                      direction: "ltr",
                    }}
                  >
                    <div className="relative aspect-[16/10]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0" style={{ background: "rgba(47,39,56,0.18)" }} />
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Step badge */}
                      <div
                        className="absolute left-5 top-5 rounded-full border px-3 py-1 backdrop-blur"
                        style={{
                          borderColor: "rgba(255,255,255,0.3)",
                          backgroundColor: "rgba(255,255,255,0.85)",
                        }}
                      >
                        <span
                          className="font-mono text-xs"
                          style={{ color: B.purpleDark }}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Overlay label */}
                      <div className="absolute left-5 bottom-5 right-5">
                        <div className="text-white font-medium text-lg leading-snug">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ direction: "ltr" }}>
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono mb-5"
                      style={{
                        borderColor: isEven ? B.purpleBorder : B.orangeBorder,
                        color: isEven ? B.purpleDark : B.orangeDark,
                        backgroundColor: isEven ? B.purpleSoft : B.orangeSoft,
                      }}
                    >
                      Step {step.number}
                    </div>

                    <h3
                      className="text-3xl leading-tight sm:text-4xl"
                      style={{ fontWeight: 300 }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mt-5 text-lg leading-8"
                      style={{ color: B.muted, fontWeight: 300 }}
                    >
                      {step.description}
                    </p>

                    <div
                      className="mt-5 rounded-2xl border p-4"
                      style={{
                        borderColor: isEven ? B.purpleBorder : B.orangeBorder,
                        backgroundColor: isEven ? B.purpleSoft : B.orangeSoft,
                      }}
                    >
                      <p
                        className="text-sm leading-7"
                        style={{ color: B.muted }}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMERCIALIZATION STAGE
      ══════════════════════════════════════════ */}
      <section
        className="px-6 py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(153,134,191,0.05) 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionLabel color={B.orangeDark}>Where We Are</SectionLabel>
              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Preparing for commercialization
              </h2>
              <div
                className="mt-6 space-y-5 text-lg leading-8"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                <p>
                  EpiScalp has completed multi-site retrospective validation and
                  is currently in preparation for regulatory submission. The
                  product is being developed under a Quality Management System
                  aligned with FDA requirements, and reimbursement strategy work
                  is underway in parallel.
                </p>
                <p>
                  With support from Blueprint MedTech and more than $3M in
                  federal research funding, the team has built a robust
                  evidence base and is now focused on clinical adoption pathways
                  and commercialization planning.
                </p>
                <p>
                  We are engaging with epilepsy centers interested in early
                  access programs and are actively looking for clinical partners
                  who want to be part of the next phase of validation and
                  deployment.
                </p>
              </div>

              <a
                href="mailto:mac.breault@gmail.com?subject=EpiScalp%20Commercialization%20Inquiry"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: B.orangeDark }}
              >
                <Mail className="h-4 w-4" />
                Connect with our team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "Research &amp; Development",
                  text: "Algorithm development, retrospective studies, and peer-reviewed publication.",
                  done: true,
                },
                {
                  label: "Multi-Site Validation",
                  text: "Prospective data collection across three partner institutions.",
                  done: true,
                },
                {
                  label: "Regulatory Preparation",
                  text: "Quality system implementation and FDA submission planning.",
                  done: false,
                  active: true,
                },
                {
                  label: "Commercialization",
                  text: "Clinical site partnerships, reimbursement strategy, and deployment.",
                  done: false,
                },
              ].map((stage, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor: stage.active
                      ? B.purpleBorder
                      : B.line,
                    backgroundColor: stage.active
                      ? B.purpleSoft
                      : stage.done
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(255,255,255,0.3)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="h-2.5 w-2.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: stage.done
                          ? B.purpleDark
                          : stage.active
                          ? B.orange
                          : B.line,
                      }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: stage.active ? B.purpleDark : stage.done ? B.ink : B.muted,
                      }}
                      dangerouslySetInnerHTML={{ __html: stage.label }}
                    />
                    {stage.active && (
                      <span
                        className="ml-auto text-[10px] uppercase tracking-[0.18em] rounded-full px-2 py-0.5"
                        style={{
                          backgroundColor: B.purpleSoft,
                          color: B.purpleDark,
                          borderColor: B.purpleBorder,
                          border: "1px solid",
                          fontWeight: 600,
                        }}
                      >
                        In progress
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm leading-6 pl-5"
                    style={{ color: B.muted }}
                  >
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESEARCH INSTITUTIONS
      ══════════════════════════════════════════ */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel color={B.purpleDark}>Research Partners</SectionLabel>
              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Active research at
                <span
                  className="block"
                  style={{ color: B.purpleDark, fontStyle: "italic" }}
                >
                  three institutions
                </span>
              </h2>
            </div>
            <a
              href="mailto:mac.breault@gmail.com?subject=Clinical%20Trial%20Interest%20-%20EpiScalp"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 shrink-0"
              style={{
                backgroundColor: B.purpleSoft,
                color: B.purpleDark,
                border: `1px solid ${B.purpleBorder}`,
              }}
            >
              <FlaskConical className="h-4 w-4" />
              Interested in a clinical trial?
            </a>
          </div>

          <p
            className="mb-10 max-w-3xl text-lg leading-8"
            style={{ color: B.muted, fontWeight: 300 }}
          >
            Ongoing research is conducted across three leading academic medical
            centers. If your institution is interested in being part of an
            ongoing or future clinical study — whether as a site, collaborator,
            or participant center — we encourage you to reach out.
          </p>

          <div className="grid gap-5 sm:grid-cols-3">
            {institutions.map((inst, i) => {
              const Icon = inst.icon;
              const isOrange = i === 1;
              return (
                <div
                  key={inst.name}
                  className="rounded-[2rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: isOrange ? B.orangeBorder : B.purpleBorder,
                    backgroundColor: B.card,
                  }}
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: isOrange ? B.orangeSoft : B.purpleSoft }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: isOrange ? B.orangeDark : B.purpleDark }}
                    />
                  </div>

                  {/* Logo placeholder — swap img for real logo */}
                  <div
                    className="mb-4 flex items-center justify-center rounded-xl border py-4 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      borderColor: B.line,
                      color: B.muted,
                      backgroundColor: "rgba(0,0,0,0.02)",
                    }}
                  >
                    [Institution Logo]
                  </div>

                  <h3 className="text-xl leading-snug" style={{ fontWeight: 400 }}>
                    {inst.name}
                  </h3>
                  <p
                    className="mt-2 text-xs uppercase tracking-[0.14em]"
                    style={{ color: isOrange ? B.orangeDark : B.purpleDark, fontWeight: 600 }}
                  >
                    {inst.department}
                  </p>
                  <p
                    className="mt-4 text-sm leading-6"
                    style={{ color: B.muted }}
                  >
                    {inst.role}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA banner */}
          <div
            className="mt-8 rounded-[2rem] border p-7 sm:p-8"
            style={{
              borderColor: B.orangeBorder,
              background:
                "linear-gradient(135deg, rgba(206,127,87,0.08), rgba(153,134,191,0.06))",
            }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p
                  className="text-lg leading-7"
                  style={{ fontWeight: 300, color: B.ink }}
                >
                  Is your center interested in participating in research or a
                  clinical trial with EpiScalp?
                </p>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: B.muted }}
                >
                  We welcome inquiries from epilepsy centers, neurology
                  departments, and clinical researchers.
                </p>
              </div>
              <a
                href="mailto:mac.breault@gmail.com?subject=EpiScalp%20Clinical%20Trial%20-%20Site%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: B.orangeDark }}
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PUBLICATIONS
      ══════════════════════════════════════════ */}
      <section
        id="publications"
        className="px-6 py-16 sm:py-20 scroll-mt-24"
        style={{
          background:
            "linear-gradient(180deg, rgba(153,134,191,0.06) 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl" ref={pubsRef}>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Publications</SectionLabel>
              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Research behind EpiScalp
              </h2>
              <p
                className="mt-5 max-w-xl text-lg leading-8"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                Peer-reviewed work supporting the fragility methodology and
                clinical validation of EpiScalp.
              </p>
            </div>

            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm shrink-0 transition-colors hover:bg-black/5"
              style={{ borderColor: B.purpleBorder, color: B.purpleDark }}
            >
              <BookOpen className="h-4 w-4" />
              All publications
            </Link>
          </div>

          {/* Toggle */}
          <div className="mb-6 flex items-center gap-3">
            <button
              onClick={() => setShowAllPubs(false)}
              className="rounded-full px-4 py-2 text-sm transition-colors"
              style={{
                backgroundColor: !showAllPubs ? B.purpleDark : "transparent",
                color: !showAllPubs ? "#fff" : B.muted,
                border: `1px solid ${!showAllPubs ? B.purpleDark : B.line}`,
              }}
            >
              EpiScalp relevant
            </button>
            <button
              onClick={() => setShowAllPubs(true)}
              className="rounded-full px-4 py-2 text-sm transition-colors"
              style={{
                backgroundColor: showAllPubs ? B.purpleDark : "transparent",
                color: showAllPubs ? "#fff" : B.muted,
                border: `1px solid ${showAllPubs ? B.purpleDark : B.line}`,
              }}
            >
              All publications
            </button>
          </div>

          <div className="space-y-4">
            {visiblePubs.map((pub) => (
              <a
                key={pub.title}
                href={pub.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-start sm:gap-5"
                style={{
                  borderColor: pub.episcalp ? B.purpleBorder : B.line,
                  backgroundColor: pub.episcalp
                    ? "rgba(153,134,191,0.05)"
                    : B.card,
                }}
              >
                <div
                  className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{
                    background: pub.episcalp ? B.purpleSoft : "rgba(0,0,0,0.04)",
                  }}
                >
                  <Waves
                    className="h-5 w-5"
                    style={{ color: pub.episcalp ? B.purpleDark : B.muted }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {pub.episcalp && (
                      <span
                        className="rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]"
                        style={{
                          borderColor: B.purpleBorder,
                          color: B.purpleDark,
                          backgroundColor: B.purpleSoft,
                          fontWeight: 600,
                        }}
                      >
                        EpiScalp
                      </span>
                    )}
                    <span
                      className="text-xs"
                      style={{ color: B.muted }}
                    >
                      {pub.journal} · {pub.year}
                    </span>
                  </div>

                  <p
                    className="text-base leading-6 group-hover:underline"
                    style={{ color: B.ink, fontWeight: 400 }}
                  >
                    {pub.title}
                  </p>
                  <p
                    className="mt-1 text-sm leading-5"
                    style={{ color: B.muted }}
                  >
                    {pub.authors}
                  </p>
                </div>

                <ExternalLink
                  className="h-4 w-4 shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ color: B.purpleDark }}
                />
              </a>
            ))}
          </div>

          {/* Validation note */}
          <div
            className="mt-8 rounded-2xl border p-5"
            style={{ borderColor: B.line, backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            <p className="text-sm leading-7" style={{ color: B.muted }}>
              <strong style={{ color: B.ink }}>Study validation: </strong>
              The fragility methodology has been retrospectively validated in
              drug-resistant focal epilepsy cohorts across multiple sites and is
              supported by prospective data collection at partner institutions.{" "}
              <Link
                to="/clinical-evidence"
                className="underline underline-offset-4"
                style={{ color: B.purpleDark }}
              >
                View full clinical evidence summary →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <SectionLabel color={B.orangeDark}>FAQ</SectionLabel>
            <h2
              className="mt-4 text-4xl leading-tight sm:text-5xl"
              style={{ fontWeight: 300 }}
            >
              Frequently asked questions
            </h2>
            <p
              className="mt-5 text-lg leading-8"
              style={{ color: B.muted, fontWeight: 300 }}
            >
              About EpiScalp, how it works, and how to get involved.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA / REACH OUT
      ══════════════════════════════════════════ */}
      <section className="px-6 pb-20 pt-6 sm:pb-24">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] p-8 text-white sm:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,39,56,1) 0%, rgba(85,72,109,1) 50%, rgba(153,134,191,1) 100%)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                Get in touch
              </div>
              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Interested in EpiScalp?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Whether you are a clinician exploring the technology, a
                researcher interested in collaboration, or a site considering
                participating in a clinical trial — we would love to hear from
                you.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:mac.breault@gmail.com?subject=EpiScalp%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: B.orange, color: "#fff" }}
                >
                  <Mail className="h-4 w-4" />
                  Reach out to us
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:mac.breault@gmail.com?subject=EpiScalp%20Clinical%20Trial"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm text-white transition-colors duration-300 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                >
                  <FlaskConical className="h-4 w-4" />
                  Clinical trial inquiry
                </a>
              </div>
            </div>

            <div
              className="rounded-[2rem] border p-7"
              style={{
                borderColor: "rgba(255,255,255,0.16)",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-sm uppercase tracking-[0.18em] text-white/65">
                Contact
              </div>
              <h3 className="mt-4 text-2xl" style={{ fontWeight: 300 }}>
                Macauley Smith Breault
              </h3>
              <p className="mt-1 text-sm text-white/65">Recruiting &amp; Partnerships</p>

              <div className="mt-6 space-y-4 text-white/85">
                <a
                  href="mailto:mac.breault@gmail.com"
                  className="flex items-center gap-3 hover:text-white text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  mac.breault@gmail.com
                </a>
              </div>

              <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <div className="text-xs uppercase tracking-[0.18em] text-white/55 mb-3">
                  More
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <Link to="/publications" className="underline underline-offset-4 hover:text-white">
                    Publications
                  </Link>
                  <Link to="/clinical-evidence" className="underline underline-offset-4 hover:text-white">
                    Clinical Evidence
                  </Link>
                  <Link to="/support" className="underline underline-offset-4 hover:text-white">
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}