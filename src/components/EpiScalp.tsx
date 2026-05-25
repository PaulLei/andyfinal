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
  Waves,
  Check,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── Contact ──────────────────────────────────────────────────────────────────
// Replace this if Andy uses a different email.
const CONTACT_NAME = "Andrew Gotshalk ";
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
    title: "Upload scalp EEG",
    description:
      "Upload any scalp EEG recording: routine, long-term monitoring, or ambulatory. EpiScalp is designed to work with studies that appear normal or inconclusive on standard visual review.",
    detail:
      "EpiScalp supports diagnostic evaluation from scalp EEG data, including EEG studies without obvious epileptiform discharges.",
    image:
      "epsstep1.png",
  },
  {
    number: "2",
    title: "Analyze brain network dynamics",
    description:
      "EpiScalp preprocesses the EEG and applies dynamic network modeling to quantify imbalances in the brain network that are characteristic of epilepsy. These validated features capture unique interactions that are not visible on the EEG trace, but reflect the underlying epileptic dysfunction.",
    detail:
      "The analysis emphasizes source/sink network dynamics and quantitative features that provide information beyond standard visual EEG review.",
    image:
      "epsstep2.png",
  },
  {
    number: "3",
    title: "Generate epilepsy risk score",
    description:
      "EpiScalp reports a 0-100 epilepsy risk score and an Epilepsy Likely or Unlikely prediction, integrating the EEG network features and relevant patient information to provide personalized, quantitative support for the clinician’s diagnostic assessment.",
    detail:
      "The output is designed to be easily interpretable and to support, not replace, clinical judgment.",
    image:
      "epsstep3.png",
  },
];

const institutions = [
  {
    name: "Thomas Jefferson University",
    department: "Epilepsy Center",
    role: "Prospective validation and clinical research collaboration",
    icon: Building2,
  },
  {
    name: "University of Maryland",
    department: "Epilepsy Center",
    role: "Prospective data collection and clinical workflow evaluation",
    icon: Microscope,
  },
];

const publications = [
  {
    title:
      "EpiScalp clinical validation study supporting quantitative epilepsy risk assessment from scalp EEG",
    authors: "Patrick et al.",
    journal: "Annals of Neurology",
    year: "2024",
    episcalp: true,
    href: "#",
  },
  {
    title:
      "Source/sink network dynamics for identifying epileptic dysfunction from EEG",
    authors: "Sarma Lab and collaborators",
    journal: "Peer-reviewed research",
    year: "Published",
    episcalp: true,
    href: "#",
  },
  {
    
  },
];

const faqs = [
  {
    q: "What type of EEG data does EpiScalp require?",
    a: "EpiScalp is designed for any standard scalp EEG recordings. It supports common clinical EEG formats and is intended to work with recordings that include both interictal and ictal segments.",
  },
  {
    q: "How long does it take to generate results?",
    a: "Analysis typically runs in minutes. The exact duration depends on recording length and system configuration, but the workflow is designed to be efficient enough for routine clinical use.",
  },
  {
    q: "Has EpiScalp been validated in clinical settings?",
    a: "Yes. EpiScalp has been studied in retrospective and prospective research across multiple academic medical centers. Peer-reviewed publications are available in the section above and can also be found in our Publications page. EpiScalp is also currently being tested and validated as part of a NINDs SBIR Phase 2 study at 3 leading Level 4 Epilepsy Centers.",
  },
  {
    q: "Is EpiScalp FDA cleared?",
    a: "Not yet. EpiScalp is being developed under a Quality Management System in preparation for a 510k submission by Q4 of 2026.",
  },
  {
    q: "Can I participate in a clinical trial?",
    a: "We are currently conducting a prospective clinical trial at three partner institutions. If your center is interested in becoming a research site or participating in an ongoing study, please reach out using the contact information below.",
  },
  {
    q: "What does the output look like?",
    a: "EpiScalp produces a risk score, from 0-100 and an epilepsy prediction (Epilepsy Likely, Epilepsy Unlikely, Uncertain) on the likelihood a patient has epilepsy.",
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
          <ChevronDown className="h-4 w-4 shrink-0" style={{ color: B.muted }} />
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
  status: "complete" | "in-progress" | "preparing";
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

  if (status === "in-progress") {
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

  return (
    <span
      className="ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em]"
      style={{
        borderColor: B.purpleBorder,
        backgroundColor: B.purpleSoft,
        color: B.purpleDark,
        fontWeight: 700,
      }}
    >
      Preparing
    </span>
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

  const visiblePubs = showAllPubs
    ? publications
    : publications.filter((p) => p.episcalp);

  const mailtoGeneral = `mailto:${CONTACT_EMAIL}?subject=EpiScalp%20Inquiry`;
  const mailtoCommercial = `mailto:${CONTACT_EMAIL}?subject=EpiScalp%20Commercialization%20Inquiry`;
  const mailtoTrial = `mailto:${CONTACT_EMAIL}?subject=EpiScalp%20Clinical%20Trial%20Interest`;

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
      <section className="relative overflow-hidden px-6 pt-10 pb-14 md:pt-14 md:pb-16">
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
                EpiScalp · Product Overview
              </span>

              <h1
                className="mt-6 max-w-4xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
                style={{ fontWeight: 300 }}
              >
                Quantitative epilepsy risk assessment from 
              </h1>

               <h1
                className="-mt-2 max-w-4xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
                style={{ fontWeight: 300, color: "#9986bf", fontStyle: "italic" }}
              >
                any scalp EEG
              </h1>


              <p
                className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                EpiScalp translates any scalp EEG into a quantifiable assessment
                to support clinicians in the diagnostic evaluation of patients
                with first-time seizures.
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
                What EpiScalp produces
              </div>

              <p className="mt-4 text-xl leading-8" style={{ fontWeight: 300 }}>
                Epilepsy risk score from 0-100 and an Epilepsy Likely or
                Unlikely prediction.
              </p>

              <div
                className="my-6 h-px w-full"
                style={{ backgroundColor: B.line }}
              />

              <div className="space-y-3">
                {[
                  "Works on normal EEG without epileptiform discharges",
                  "Easily interpretable quantitative output",
                  "Validated across multiple institutions, from neurology offices to epilepsy centers",
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 py-14 sm:py-18 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>How It Works</SectionLabel>
            <h2
              className="mt-4 text-4xl leading-tight sm:text-5xl"
              style={{ fontWeight: 300 }}
            >
              Three steps from EEG to risk assessment
            </h2>
            <p
              className="mt-5 text-lg leading-8"
              style={{ color: B.muted, fontWeight: 300 }}
            >
              EpiScalp is designed to turn scalp EEG data into a quantitative,
              clinically interpretable assessment that supports diagnostic
              decision-making.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-14">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-14 lg:items-center ${
                    !isEven ? "lg:[direction:rtl]" : ""
                  }`}
                >
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
                      <div
                        className="absolute inset-0"
                        style={{ background: "rgba(47,39,56,0.18)" }}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

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
                          Step {step.number}
                        </span>
                      </div>

                      <div className="absolute left-5 bottom-5 right-5">
                        <div className="text-white font-medium text-lg leading-snug">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </div>

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

      {/* COMMERCIALIZATION STAGE */}
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
              <SectionLabel color={B.orangeDark}>
                Commercialization Update
              </SectionLabel>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Preparing EpiScalp for clinical adoption
              </h2>

              <div
                className="mt-6 space-y-5 text-lg leading-8"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                <p>
                  Following the successful completion of a retrospective
                  clinical study, we are now approximately 75% complete with a
                  multi-center prospective study being conducted at three
                  leading epilepsy centers. These studies are designed to
                  further validate EpiScalp’s ability to support earlier and
                  more objective identification of epilepsy using routine scalp
                  EEG data.
                </p>

                <p>
                  In parallel with clinical validation, the EpiScalp platform is
                  being developed within a robust Quality Management System to
                  support scalability, reliability, and regulatory compliance. We
                  are actively preparing for regulatory submission and continuing
                  to strengthen the technical and clinical documentation required
                  to support commercialization.
                </p>

                <p>
                  Beyond clinical and regulatory milestones, we are also building
                  the foundation for successful market adoption. Reimbursement
                  strategy activities are underway to establish a clear pathway
                  for coverage and payment, while discussions with leading
                  epilepsy centers and healthcare organizations are helping
                  identify potential early adopters and beta customers. These
                  partnerships will play an important role in refining clinical
                  workflows, demonstrating real-world utility, and supporting
                  broader deployment following regulatory clearance.
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
                  text: "Algorithm development, retrospective clinical study, and core technical development completed.",
                  status: "complete" as const,
                },
                {
                  label: "Multi-Site Validation",
                  text: "Prospective data collection over 1,000 patients across three premier Level 4 Epilepsy Centers.",
                  status: "in-progress" as const,
                },
                {
                  label: "Regulatory Preparation",
                  text: "Quality system development, documentation, and regulatory submission preparation.",
                  status: "preparing" as const,
                },
                {
                  label: "Commercialization",
                  text: "Reimbursement strategy, early adopter discussions, beta customer identification, and market adoption planning.",
                  status: "preparing" as const,
                },
              ].map((stage) => (
                <div
                  key={stage.label}
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor:
                      stage.status === "complete"
                        ? B.greenBorder
                        : stage.status === "in-progress"
                        ? B.orangeBorder
                        : B.line,
                    backgroundColor:
                      stage.status === "complete"
                        ? B.greenSoft
                        : stage.status === "in-progress"
                        ? B.orangeSoft
                        : "rgba(255,255,255,0.55)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <div
                      className="h-2.5 w-2.5 rounded-full shrink-0"
                      style={{
                        backgroundColor:
                          stage.status === "complete"
                            ? B.green
                            : stage.status === "in-progress"
                            ? B.orange
                            : B.line,
                      }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color:
                          stage.status === "complete"
                            ? B.ink
                            : stage.status === "in-progress"
                            ? B.orangeDark
                            : B.muted,
                      }}
                    >
                      {stage.label}
                    </span>
                    <StatusPill status={stage.status} />
                  </div>

                  <p className="text-sm leading-6 pl-5" style={{ color: B.muted }}>
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INSTITUTIONS */}
      <section className="px-6 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel color={B.purpleDark}>Research Partners</SectionLabel>
              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Active research with
                <span
                  className="block"
                  style={{ color: B.purpleDark, fontStyle: "italic" }}
                >
                  clinical partners
                </span>
              </h2>
            </div>

            <a
              href={mailtoTrial}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 shrink-0"
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
            EpiScalp prospective validation work includes leading epilepsy
            research partners, including Jefferson and UMD. These collaborations
            help evaluate clinical workflows, real-world utility, and broader
            deployment following regulatory clearance.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
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
                    style={{
                      background: isOrange ? B.orangeSoft : B.purpleSoft,
                    }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{
                        color: isOrange ? B.orangeDark : B.purpleDark,
                      }}
                    />
                  </div>

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
                <p className="mt-2 text-sm leading-6" style={{ color: B.muted }}>
                  We welcome inquiries from epilepsy centers, neurology
                  departments, and clinical researchers.
                </p>
              </div>

              <a
                href={mailtoTrial}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm text-white shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
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
        className="px-6 py-14 sm:py-18 scroll-mt-24"
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
                Research behind EpiScalp
              </h2>

              <p
                className="mt-5 max-w-xl text-lg leading-8"
                style={{ color: B.muted, fontWeight: 300 }}
              >
                Peer-reviewed and clinical research supporting source/sink
                network dynamics, quantitative epilepsy risk assessment, and
                clinical validation of EpiScalp.
              </p>
            </div>

            <Link
              to="/publications"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm shrink-0 transition-colors hover:bg-black/5"
              style={{ borderColor: B.purpleBorder, color: B.purpleDark }}
            >
              <BookOpen className="h-4 w-4" />
              All publications
            </Link>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3">
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
              All research
            </button>
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

                    <span className="text-xs" style={{ color: B.muted }}>
                      {pub.journal} · {pub.year}
                    </span>
                  </div>

                  <p
                    className="text-base leading-6 group-hover:underline"
                    style={{ color: B.ink, fontWeight: 400 }}
                  >
                    {pub.title}
                  </p>

                  <p className="mt-1 text-sm leading-5" style={{ color: B.muted }}>
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

          <div
            className="mt-8 rounded-2xl border p-5"
            style={{
              borderColor: B.line,
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          >
            <p className="text-sm leading-7" style={{ color: B.muted }}>
              <strong style={{ color: B.ink }}>Study validation: </strong>
              EpiScalp has completed a retrospective clinical study and is
              approximately 75% complete with a multi-center prospective study
              involving over 1,000 patients across three premier Level 4 Epilepsy
              Centers. These studies are designed to further validate
              EpiScalp’s ability to support earlier and more objective
              identification of epilepsy using routine scalp EEG data.{" "}
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
                  href={mailtoGeneral}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: B.orange, color: "#fff" }}
                >
                  <Mail className="h-4 w-4" />
                  Reach out to us
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={mailtoTrial}
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
                {CONTACT_NAME}
              </h3>

              <p className="mt-1 text-sm text-white/65">
                CEO
              </p>

              <div className="mt-6 space-y-4 text-white/85">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 hover:text-white text-sm break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div
                className="mt-6 pt-5 border-t"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-white/55 mb-3">
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