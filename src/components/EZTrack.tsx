import { useEffect, useState, useRef } from "react";
import type { ReactNode } from "react";
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
  Check,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { publications as masterPublications } from "../data/publications";

// ─── Contact ──────────────────────────────────────────────────────────────────
const CONTACT_NAME = "Andrew Gotshalk";
const CONTACT_EMAIL = "agotshalk@neurologicsolutions.net";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const B = {
  purple: "#9986bf",
  purpleDark: "#7e6aa7",
  purpleSoft: "rgba(153,134,191,0.12)",
  purpleBorder: "rgba(153,134,191,0.28)",
  orange: "#ce7f57",
  orangeDark: "#b96d46",
  orangeSoft: "rgba(206,127,87,0.12)",
  orangeBorder: "rgba(206,127,87,0.28)",
  green: "#4f9d69",
  greenSoft: "rgba(79,157,105,0.12)",
  greenBorder: "rgba(79,157,105,0.32)",
  ink: "#2f2738",
  muted: "#6e647b",
  line: "rgba(47,39,56,0.10)",
  bg: "#fcfaf8",
  card: "#ffffff",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "1",
    title: "Upload intracranial EEG",
    description:
      "Upload any intracranial EEG recording: SEEG or ECoG. EZTrack allows you to upload additional electrode annotations to exclude channels with non-neural signals from the analysis.",
    detail:
      "Designed for intracranial EEG workflows, including stereoelectroencephalography and electrocorticography recordings used in epilepsy surgery evaluation.",
    image: "/ezstep1.png",
  },
  {
    number: "2",
    title: "Compute neural fragility",
    description:
      "EZTrack preprocesses the data and computes the Fragility Index, a validated neural biomarker for localizing the epileptogenic zone. Regions of high fragility, or instability within the epileptic network, have been shown to correspond to the epileptogenic zone and predict surgical outcome.",
    detail:
      "Fragility analysis helps reduce the burden of manual review by highlighting network instability patterns that may be clinically meaningful for surgical planning.",
    image: "/ezstep2.png",
  },
  {
    number: "3",
    title: "Generate localization heatmap",
    description:
      "EZTrack generates an interpretable spatiotemporal heatmap of the Fragility Index across all electrodes, immediately highlighting regions of high fragility to support neurosurgical planning in patients with drug-resistant epilepsy.",
    detail:
      "The output is designed for clinical review and multidisciplinary discussion, helping teams identify regions that may inform surgical decision-making.",
    image: "/ezstep3.png",
  },
];

const institutions = [
  {
    name: "University of Miami Health System",
    department: "Epilepsy Center",
    role: "Retrospective data collection and clinical research validation",
    logo: "umiami.png",
    logoScale: 1,
    fallbackIcon: Building2,
  },
  {
    name: "University of Maryland",
    department: "Epilepsy Center",
    role: "Retrospective data collection and clinical research validation",
    logo: "umm.png",
    logoScale: 1,
    fallbackIcon: Microscope,
  },
  {
    name: "Johns Hopkins Hospital",
    department: "Epilepsy Center",
    role: "Retrospective data collection and clinical research validation",
    logo: "jhu.png",
    logoScale: 1,
    fallbackIcon: Building2,
  },
  {
    name: "National Institutes of Health",
    department: "Epilepsy Center",
    role: "Retrospective clinical research collaboration and validation support",
    logo: "nih.png",
    logoScale: 1,
    fallbackIcon: Microscope,
  },
  {
    name: "Cleveland Clinic",
    department: "Epilepsy Center",
    role: "Retrospective clinical research collaboration and validation support",
    logo: "cleveland.png",
    logoScale: 1.5,
    fallbackIcon: Microscope,
  },
];

const eztrackPublications = masterPublications
  .filter((publication) => publication.tags.includes("EZTrack"))
  .sort((a, b) => b.year - a.year)
  .slice(0, 3);

const faqs = [
  {
    q: "What type of EEG data does EZTrack require?",
    a: "EZTrack is designed for any intracranial EEG recording: SEEG or ECoG. It supports common clinical iEEG formats.",
  },
  {
    q: "How long does it take to generate results?",
    a: "EZTrack takes minutes to run with exact duration depending on recording length and operating system configurations.",
  },
  {
    q: "Has EZTrack been validated in clinical settings?",
    a: "Yes. EZTrack has been clinically validated across 91 surgical cases. Peer-reviewed publications are available in the section above.",
  },
  {
    q: "Is EZTrack FDA cleared?",
    a: "Yes. EZTrack received 510(k) clearance in 2019 (K201910).",
  },
  {
    q: "Can I participate in a clinical trial?",
    a: "At this point we don’t have any clinical trials going on. However, we are always interested in collaborating with other researchers. Please contact us to discuss further.",
  },
  {
    q: "What does the output look like?",
    a: "EZTrack produces spatio-temporal fragility heatmaps and electrode-level summary overlays. These outputs are designed to be interpretable without specialized signal-processing expertise.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({
  children,
  color = B.purpleDark,
}: {
  children: ReactNode;
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
      className="overflow-hidden rounded-2xl border transition-all duration-300"
      style={{
        borderColor: open ? B.purpleBorder : B.line,
        backgroundColor: open ? "rgba(153,134,191,0.04)" : B.card,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span
          className="text-base leading-6"
          style={{ fontWeight: 400, color: B.ink }}
        >
          {q}
        </span>

        {open ? (
          <ChevronUp
            className="h-4 w-4 shrink-0"
            style={{ color: B.purpleDark }}
          />
        ) : (
          <ChevronDown
            className="h-4 w-4 shrink-0"
            style={{ color: B.muted }}
          />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 text-sm leading-7" style={{ color: B.muted }}>
          {a}
        </div>
      )}
    </div>
  );
}

function StatusPill({
  status,
}: {
  status: "complete" | "in-progress";
}) {
  if (status === "complete") {
    return (
      <span
        className="ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em]"
        style={{
          borderColor: B.greenBorder,
          backgroundColor: B.greenSoft,
          color: B.green,
          fontWeight: 700,
        }}
      >
        <Check className="h-3 w-3" />
        Complete
      </span>
    );
  }

  return (
    <span
      className="ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em]"
      style={{
        borderColor: B.orangeBorder,
        backgroundColor: B.orangeSoft,
        color: B.orangeDark,
        fontWeight: 700,
      }}
    >
      <Clock3 className="h-3 w-3" />
      In progress
    </span>
  );
}

function InstitutionLogo({
  logo,
  name,
  isOrange,
  logoScale = 1,
  fallbackIcon: FallbackIcon,
}: {
  logo: string;
  name: string;
  isOrange: boolean;
  logoScale?: number;
  fallbackIcon: typeof Building2;
}) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div
      className="mb-5 flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl border bg-white px-5 py-4"
      style={{
        borderColor: B.line,
      }}
    >
      {!logoError ? (
        <div className="flex h-16 w-full max-w-[240px] items-center justify-center overflow-hidden">
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
            onError={() => setLogoError(true)}
            style={
              logoScale !== 1
                ? {
                    transform: `scale(${logoScale})`,
                    transformOrigin: "center",
                  }
                : undefined
            }
          />
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              backgroundColor: isOrange ? B.orangeSoft : B.purpleSoft,
            }}
          >
            <FallbackIcon
              className="h-6 w-6"
              style={{
                color: isOrange ? B.orangeDark : B.purpleDark,
              }}
            />
          </div>

          <span
            className="text-sm font-semibold leading-5"
            style={{ color: B.ink }}
          >
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EZTrackPage() {
  const [scrollY, setScrollY] = useState(0);
  const pubsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visiblePubs = eztrackPublications;

  const topInstitutions = institutions.slice(0, 3);
  const bottomInstitutions = institutions.slice(3);

  const mailtoGeneral = `mailto:${CONTACT_EMAIL}?subject=EZTrack%20Inquiry`;
  const mailtoCommercial = `mailto:${CONTACT_EMAIL}?subject=EZTrack%20Commercialization%20Inquiry`;
  const mailtoBeta = `mailto:${CONTACT_EMAIL}?subject=EZTrack%20Beta%20Customer%20Inquiry`;

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
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-14 pt-10 md:pb-16 md:pt-14">
        <div className="pointer-events-none absolute inset-0 z-0">
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
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span
                className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  background: B.purpleSoft,
                  borderColor: B.purpleBorder,
                  color: B.purpleDark,
                }}
              >
                EZTrack · Product Overview
              </span>

              <h1
                className="mt-6 max-w-4xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
                style={{ fontWeight: 300 }}
              >
                Epileptogenic localization through an
              </h1>

              <h1
                className="-mt-2 max-w-4xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
                style={{
                  fontWeight: 300,
                  color: B.purple,
                  fontStyle: "italic",
                }}
              >
                interpretable biomarker
              </h1>

              <p
                className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                EZTrack analyzes intracranial EEG to localize epileptogenic
                regions, reducing the burden of manual review and supporting
                surgical planning in patients with drug-resistant epilepsy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={mailtoGeneral}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: B.purpleDark }}
                >
                  <Mail className="h-4 w-4" />
                  Reach out to us
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm transition-colors duration-200 hover:bg-black/5"
                  style={{ borderColor: B.line, color: B.ink }}
                >
                  How it works
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div
              className="rounded-[2rem] border p-6 shadow-sm sm:p-8"
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
                What EZTrack produces
              </div>

              <p className="mt-4 text-xl leading-8" style={{ fontWeight: 300 }}>
                A spatiotemporal heatmap displaying the fragility index across
                all electrodes, highlighting high fragility regions to inform
                surgical planning.
              </p>

              <div
                className="my-6 h-px w-full"
                style={{ backgroundColor: B.line }}
              />

              <div className="space-y-3">
                {[
                  "FDA 510(k) cleared",
                  "Hours of iEEG, analyzed in minutes",
                  "Interpretable visual output designed for clinical review",
                  "Validated across multiple institutions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: B.purpleDark }}
                    />
                    <span
                      className="text-sm leading-6"
                      style={{ color: B.muted }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 px-6 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>How It Works</SectionLabel>

            <h2
              className="mt-4 text-4xl leading-tight sm:text-5xl"
              style={{ fontWeight: 300 }}
            >
              Three steps from iEEG to localization
            </h2>

            <p
              className="mt-5 text-lg leading-8"
              style={{ color: B.muted, fontWeight: 300 }}
            >
              EZTrack is designed to transform intracranial EEG into an
              interpretable localization heatmap that supports surgical planning.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-14">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                    !isEven ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className="overflow-hidden rounded-[2rem] border shadow-sm"
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
                    </div>
                  </div>

                  <div style={{ direction: "ltr" }}>
                    <div
                      className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs"
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
                      <p className="text-sm leading-7" style={{ color: B.muted }}>
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

      {/* COMMERCIALIZATION */}
      <section
        className="px-6 py-14 sm:py-18"
        style={{
          background:
            "linear-gradient(180deg, rgba(153,134,191,0.05) 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionLabel color={B.orangeDark}>Commercialization</SectionLabel>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Advancing EZTrack toward broader clinical deployment
              </h2>

              <div
                className="mt-6 space-y-5 text-lg leading-8"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                <p>
                  EZTrack has been clinically validated across 91 surgical
                  cases, demonstrating strong performance and usability in
                  real-world clinical settings. The platform has already
                  received regulatory clearance, representing a significant
                  milestone in its transition from development to
                  commercialization.
                </p>

                <p>
                  All product development activities for EZTrack were completed
                  within a comprehensive Quality Management System, ensuring the
                  platform was built to meet rigorous standards for quality,
                  reliability, and regulatory compliance.
                </p>

                <p>
                  With development and regulatory milestones achieved, current
                  efforts are focused on commercial readiness, including
                  engagement with prospective beta customers, workflow
                  integration planning, and preparation for broader market
                  launch. These early partnerships will help support initial
                  deployment, gather user feedback, and accelerate adoption
                  within leading epilepsy centers.
                </p>
              </div>

              <a
                href={mailtoCommercial}
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
                  label: "Research & Development",
                  text: "Core biomarker development, product development, and technical foundation completed.",
                  status: "complete" as const,
                },
                {
                  label: "Clinical Validation",
                  text: "Clinical validation on 91 surgical cases.",
                  status: "complete" as const,
                },
                {
                  label: "Regulatory Submission",
                  text: "Quality System Implementation and FDA 510(k) Clearance.",
                  status: "complete" as const,
                },
                {
                  label: "Commercialization",
                  text: "Clinical site partnerships, reimbursement strategy, and deployment.",
                  status: "in-progress" as const,
                },
              ].map((stage) => (
                <div
                  key={stage.label}
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor:
                      stage.status === "complete"
                        ? B.greenBorder
                        : B.orangeBorder,
                    backgroundColor:
                      stage.status === "complete" ? B.greenSoft : B.orangeSoft,
                  }}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <div
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor:
                          stage.status === "complete" ? B.green : B.orange,
                      }}
                    />

                    <span
                      className="text-sm font-semibold"
                      style={{
                        color:
                          stage.status === "complete" ? B.ink : B.orangeDark,
                      }}
                    >
                      {stage.label}
                    </span>

                    <StatusPill status={stage.status} />
                  </div>

                  <p className="pl-5 text-sm leading-6" style={{ color: B.muted }}>
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION PARTNERS */}
      <section className="px-6 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel color={B.purpleDark}>Clinical Validation</SectionLabel>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Built for epilepsy
                <span
                  className="block"
                  style={{ color: B.purpleDark, fontStyle: "italic" }}
                >
                  surgery workflows
                </span>
              </h2>
            </div>

            <a
              href={mailtoBeta}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: B.purpleSoft,
                color: B.purpleDark,
                border: `1px solid ${B.purpleBorder}`,
              }}
            >
              <FlaskConical className="h-4 w-4" />
              Interested in beta access?
            </a>
          </div>

          <p
            className="mb-10 max-w-3xl text-lg leading-8"
            style={{ color: B.muted, fontWeight: 300 }}
          >
            EZTrack was developed and validated for clinical teams evaluating
            patients with drug-resistant epilepsy. The platform supports review
            of intracranial EEG by producing interpretable heatmaps that
            highlight high-fragility regions relevant to surgical planning.
          </p>

          <div className="space-y-5">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {topInstitutions.map((inst, i) => {
                const isOrange = i % 2 === 1;

                return (
                  <div
                    key={inst.name}
                    className="rounded-[2rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                    style={{
                      borderColor: isOrange ? B.orangeBorder : B.purpleBorder,
                      backgroundColor: B.card,
                    }}
                  >
                    <InstitutionLogo
                      logo={inst.logo}
                      name={inst.name}
                      isOrange={isOrange}
                      logoScale={inst.logoScale}
                      fallbackIcon={inst.fallbackIcon}
                    />

                    <h3 className="text-xl leading-snug" style={{ fontWeight: 400 }}>
                      {inst.name}
                    </h3>

                    <p
                      className="mt-2 text-xs uppercase tracking-[0.14em]"
                      style={{
                        color: isOrange ? B.orangeDark : B.purpleDark,
                        fontWeight: 600,
                      }}
                    >
                      {inst.department}
                    </p>

                    <p className="mt-4 text-sm leading-6" style={{ color: B.muted }}>
                      {inst.role}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,22rem))] justify-center items-stretch">
              {bottomInstitutions.map((inst, i) => {
                const isOrange = (i + topInstitutions.length) % 2 === 1;

                return (
                  <div
                    key={inst.name}
                    className="rounded-[2rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                    style={{
                      borderColor: isOrange ? B.orangeBorder : B.purpleBorder,
                      backgroundColor: B.card,
                    }}
                  >
                    <InstitutionLogo
                      logo={inst.logo}
                      name={inst.name}
                      isOrange={isOrange}
                      logoScale={inst.logoScale}
                      fallbackIcon={inst.fallbackIcon}
                    />

                    <h3 className="text-xl leading-snug" style={{ fontWeight: 400 }}>
                      {inst.name}
                    </h3>

                    <p
                      className="mt-2 text-xs uppercase tracking-[0.14em]"
                      style={{
                        color: isOrange ? B.orangeDark : B.purpleDark,
                        fontWeight: 600,
                      }}
                    >
                      {inst.department}
                    </p>

                    <p className="mt-4 text-sm leading-6" style={{ color: B.muted }}>
                      {inst.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

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
                  Is your center interested in evaluating EZTrack?
                </p>

                <p className="mt-2 text-sm leading-6" style={{ color: B.muted }}>
                  We welcome inquiries from epilepsy centers, neurosurgical
                  teams, and clinical leaders interested in beta access or
                  workflow integration.
                </p>
              </div>

              <a
                href={mailtoBeta}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: B.orangeDark }}
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section
        id="publications"
        className="scroll-mt-24 px-6 py-14 sm:py-18"
        style={{
          background:
            "linear-gradient(180deg, rgba(153,134,191,0.06) 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl" ref={pubsRef}>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Research</SectionLabel>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Research behind EZTrack
              </h2>

              <p
                className="mt-5 max-w-xl text-lg leading-8"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                Peer-reviewed work supporting the neural fragility biomarker,
                epileptogenic localization, and clinical validation of EZTrack.
              </p>
            </div>

            <Link
              to="/publications"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm transition-colors hover:bg-black/5"
              style={{ borderColor: B.purpleBorder, color: B.purpleDark }}
            >
              <BookOpen className="h-4 w-4" />
              All publications
            </Link>
          </div>

          <div className="space-y-4">
            {visiblePubs.map((pub) => (
              <a
                key={pub.title}
                href={pub.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-start sm:gap-5 sm:p-6"
                style={{
                  borderColor: B.purpleBorder,
                  backgroundColor: "rgba(153,134,191,0.05)",
                }}
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]"
                      style={{
                        borderColor: B.purpleBorder,
                        color: B.purpleDark,
                        backgroundColor: B.purpleSoft,
                        fontWeight: 600,
                      }}
                    >
                      EZTrack
                    </span>

                    <span className="text-xs" style={{ color: B.muted }}>
                      {pub.journal}
                    </span>
                  </div>

                  <p
                    className="text-base leading-6 group-hover:underline"
                    style={{ color: B.ink, fontWeight: 400 }}
                  >
                    {pub.title}
                  </p>

                  <p className="mt-1 text-sm leading-5" style={{ color: B.muted }}>
                    {pub.citation}
                  </p>
                </div>

                <ExternalLink
                  className="mt-1 h-4 w-4 shrink-0 opacity-40 transition-opacity group-hover:opacity-100"
                  style={{ color: B.purpleDark }}
                />
              </a>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl border p-5"
            style={{
              borderColor: B.line,
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          >
            <p className="text-sm leading-7" style={{ color: B.muted }}>
              <strong style={{ color: B.ink }}>Study validation: </strong>
              EZTrack has been clinically validated across 91 surgical cases and
              uses the Fragility Index to highlight high-fragility regions that
              can inform epileptogenic localization and neurosurgical planning.{" "}
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

      {/* FAQ */}
      <section className="px-6 py-14 sm:py-18">
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
              About EZTrack, how it works, and how to get involved.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                Interested in EZTrack?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Whether you are a clinician exploring the technology, a
                researcher interested in collaboration, or an epilepsy center
                considering workflow integration — we would love to hear from
                you.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={mailtoGeneral}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: B.orange, color: "#fff" }}
                >
                  <Mail className="h-4 w-4" />
                  Reach out to us
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={mailtoBeta}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm text-white transition-colors duration-300 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                >
                  <FlaskConical className="h-4 w-4" />
                  Beta customer inquiry
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
                {CONTACT_NAME}
              </h3>

              <p className="mt-1 text-sm text-white/65">CEO</p>

              <div className="mt-6 space-y-4 text-white/85">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 break-all text-sm hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div
                className="mt-6 border-t pt-5"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/55">
                  More
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <Link
                    to="/publications"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Publications
                  </Link>

                  <Link
                    to="/clinical-evidence"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Clinical Evidence
                  </Link>

                  <Link
                    to="/support"
                    className="underline underline-offset-4 hover:text-white"
                  >
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