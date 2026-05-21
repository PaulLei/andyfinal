import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  ExternalLink,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const BRAND = {
  purple: "#9986bf",
  purpleDark: "#7e6aa7",
  purpleSoft: "rgba(153, 134, 191, 0.12)",
  purpleBorder: "rgba(153, 134, 191, 0.28)",
  orange: "#ce7f57",
  orangeDark: "#b96d46",
  orangeSoft: "rgba(206, 127, 87, 0.12)",
  orangeBorder: "rgba(206, 127, 87, 0.28)",
  ink: "#2f2738",
  muted: "#6e647b",
  line: "rgba(47, 39, 56, 0.10)",
  bg: "#fcfaf8",
  card: "#ffffff",
};

const episcalpHighlights = [
  {
    label: "Retrospective cohort",
    value: "198 patients",
    note: "Patients with suspected epilepsy and normal initial EEGs were used in the retrospective validation study.",
  },
  {
    label: "Definitive classifications",
    value: "168 of 198",
    note: "Patients received very low or very high risk scores, leaving mid-range cases for continued clinical review.",
  },
  {
    label: "Accuracy",
    value: "93%",
    note: "Reported for definitive high- and low-risk classifications.",
  },
  {
    label: "Sensitivity / Specificity",
    value: "92% / 95%",
    note: "Reported performance for the retrospective normal-EEG study population.",
  },
];

const eztrackHighlights = [
  {
    label: "Regulatory status",
    value: "FDA 510(k)",
    note: "EZTrack is described by Neurologic Solutions as FDA 510(k) cleared.",
  },
  {
    label: "Retrospective cohort",
    value: "91 patients",
    note: "The cited neural fragility study evaluated surgical-outcome prediction retrospectively.",
  },
  {
    label: "Prediction accuracy",
    value: "76%",
    note: "Reported cross-validation accuracy for surgical outcome prediction.",
  },
  {
    label: "Failure prediction",
    value: "43 of 47",
    note: "Reported surgical failures predicted in the neural fragility publication.",
  },
];

const evidenceSections = [
  {
    id: "episcalp-evidence",
    eyebrow: "EpiScalp Clinical Evidence",
    title: "Diagnostic support from routine scalp EEG",
    icon: Brain,
    accent: "purple",
    productName: "EpiScalp",
    ctaHref: "/episcalp",
    ctaLabel: "Explore EpiScalp",
    publicationTitle:
      "Diagnosing Epilepsy with Normal Interictal EEG Using Dynamic Network Models",
    publicationHref: "https://onlinelibrary.wiley.com/doi/10.1002/ana.27168",
    summary: (
      <>
        EpiScalp is being developed as a diagnostic-support tool that analyzes
        routine scalp EEG to help estimate epilepsy risk, including in patients
        whose initial EEG appears normal. The clearest current evidence story is
        the retrospective normal-EEG study, which evaluated patients with
        suspected epilepsy and reported strong performance for definitive
        high- and low-risk classifications.
      </>
    ),
    researchBlurb: (
      <>
        The retrospective study is the best anchor for this section: it explains
        how EpiScalp uses dynamic network features from interictal scalp EEG to
        produce a quantitative epilepsy-risk score. The SBIR work can be
        mentioned as part of the continuing development and validation path, but
        it should not replace the retrospective study as the main evidence
        message.
      </>
    ),
    bullets: [
      "Analyzes routine resting-state scalp EEG, including cases where the initial EEG does not show clear epileptiform abnormalities.",
      "Produces a quantitative risk score intended to support, not replace, clinician judgment.",
      "Reported 93% accuracy, 92% sensitivity, and 95% specificity for definitive classifications in the retrospective normal-EEG study.",
      "SBIR-supported work can be framed as the next development and validation layer rather than the primary evidence claim.",
    ],
    cards: episcalpHighlights,
  },
  {
    id: "eztrack-evidence",
    eyebrow: "EZTrack Clinical Evidence",
    title: "Interpretable seizure localization support",
    icon: Activity,
    accent: "orange",
    productName: "EZTrack",
    ctaHref: "/eztrack",
    ctaLabel: "Explore EZTrack",
    publicationTitle: "Neural fragility as an EEG marker of the seizure onset zone",
    publicationHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8547387/",
    summary: (
      <>
        EZTrack is positioned around intracranial EEG analysis for patients with
        drug-resistant epilepsy being evaluated for surgery. The public evidence
        should be described carefully: the cited neural fragility work reports a
        retrospective 91-patient analysis and cross-validation results for
        surgical-outcome prediction, not a broad prospective clinical trial.
      </>
    ),
    researchBlurb: (
      <>
        The strongest public support for EZTrack comes from the neural fragility
        publication and the company’s product language. The study information
        appears directionally consistent across those sources: 91 patients, 76%
        outcome-prediction accuracy, and 43 of 47 surgical failures predicted.
        To avoid overclaiming, the copy below describes these as retrospective
        and cross-validated results.
      </>
    ),
    bullets: [
      "Analyzes intracranial EEG to identify fragile regions associated with epileptogenic tissue.",
      "Presents results through interpretable visual output intended for clinical review and surgical planning.",
      "Public materials report 76% surgical-outcome prediction accuracy in a 91-patient retrospective analysis.",
      "Best framed as localization and surgical-planning support, not as a stand-alone replacement for multidisciplinary epilepsy-surgery review.",
    ],
    cards: eztrackHighlights,
  },
];

function AccentCard({
  children,
  accent = "purple",
  className = "",
}: {
  children: React.ReactNode;
  accent?: "purple" | "orange";
  className?: string;
}) {
  const isPurple = accent === "purple";

  return (
    <div
      className={`rounded-[2rem] border bg-white ${className}`}
      style={{
        borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
        background: isPurple
          ? "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(153,134,191,0.04) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(206,127,87,0.04) 100%)",
      }}
    >
      {children}
    </div>
  );
}

function PublicationLink({
  href,
  title,
  accent,
}: {
  href: string;
  title: string;
  accent: "purple" | "orange";
}) {
  const isPurple = accent === "purple";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
        background: isPurple ? BRAND.purpleSoft : BRAND.orangeSoft,
        color: isPurple ? BRAND.purpleDark : BRAND.orangeDark,
      }}
    >
      <span>Read supporting publication</span>
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

export default function ClinicalEvidencePage() {
  return (
    <div
      className="min-h-screen pt-24"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-24 md:pb-18">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-3rem] bottom-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="w-full">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                style={{
                  background: BRAND.purpleSoft,
                  borderColor: BRAND.purpleBorder,
                }}
              >
                <Stethoscope
                  className="h-5 w-5"
                  style={{ color: BRAND.purpleDark }}
                />
              </div>

              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: BRAND.purpleDark }}
              >
                Clinical Evidence
              </span>
            </div>

            <h1
              className="max-w-4xl text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ fontWeight: 300 }}
            >
              Evidence supporting
              <span
                className="block italic"
                style={{ color: BRAND.purpleDark }}
              >
                quantitative epilepsy care
              </span>
            </h1>

            <p
              className="mt-5 max-w-4xl text-lg leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              Neurologic Solutions develops EEG-based software tools designed to
              support epilepsy diagnosis, seizure localization, and treatment
              planning. The evidence below highlights the public research and
              validation work connected to EpiScalp and EZTrack.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div
            className="flex flex-wrap gap-3 rounded-[2rem] border p-4"
            style={{
              borderColor: BRAND.line,
              backgroundColor: "rgba(255,255,255,0.78)",
            }}
          >
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                background: BRAND.purpleSoft,
                color: BRAND.purpleDark,
              }}
            >
              <BadgeCheck className="h-4 w-4" />
              Overview
            </a>

            <a
              href="#episcalp-evidence"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <Brain className="h-4 w-4" />
              EpiScalp
            </a>

            <a
              href="#eztrack-evidence"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: BRAND.orangeBorder,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <Activity className="h-4 w-4" />
              EZTrack
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              Overview
            </div>

            <h2
              className="mt-3 text-3xl leading-tight sm:text-4xl"
              style={{ fontWeight: 300 }}
            >
              Two products, two clinical questions
            </h2>

            <p
              className="mt-4 text-base leading-7 sm:text-lg sm:leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              EpiScalp focuses on diagnostic support from routine scalp EEG.
              EZTrack focuses on interpretable seizure-localization support from
              intracranial EEG for surgical planning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <AccentCard accent="purple" className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: BRAND.purpleSoft }}
                >
                  <Brain
                    className="h-6 w-6"
                    style={{ color: BRAND.purpleDark }}
                  />
                </div>

                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                    EpiScalp
                  </h3>
                  <p className="text-sm" style={{ color: BRAND.muted }}>
                    Epilepsy diagnosis support
                  </p>
                </div>
              </div>

              <p className="text-base leading-7" style={{ color: BRAND.muted }}>
                Built to turn routine resting-state scalp EEG into a
                quantitative risk score that may help clinicians evaluate
                suspected epilepsy, including cases where the EEG initially
                appears normal.
              </p>
            </AccentCard>

            <AccentCard accent="orange" className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: BRAND.orangeSoft }}
                >
                  <Activity
                    className="h-6 w-6"
                    style={{ color: BRAND.orangeDark }}
                  />
                </div>

                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                    EZTrack
                  </h3>
                  <p className="text-sm" style={{ color: BRAND.muted }}>
                    Seizure localization support
                  </p>
                </div>
              </div>

              <p className="text-base leading-7" style={{ color: BRAND.muted }}>
                Built to help clinicians interpret intracranial EEG using neural
                fragility visualizations that support seizure onset zone
                assessment and neurosurgical planning.
              </p>
            </AccentCard>
          </div>
        </div>
      </section>

      {/* Product evidence sections */}
      {evidenceSections.map((section) => {
        const Icon = section.icon;
        const isPurple = section.accent === "purple";

        return (
          <section
            key={section.id}
            id={section.id}
            className="px-6 py-10 sm:py-12"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background: isPurple
                          ? BRAND.purpleSoft
                          : BRAND.orangeSoft,
                      }}
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{
                          color: isPurple
                            ? BRAND.purpleDark
                            : BRAND.orangeDark,
                        }}
                      />
                    </div>

                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                      style={{
                        color: isPurple
                          ? BRAND.purpleDark
                          : BRAND.orangeDark,
                      }}
                    >
                      {section.eyebrow}
                    </span>
                  </div>

                  <h2
                    className="text-3xl leading-tight sm:text-4xl"
                    style={{ fontWeight: 300 }}
                  >
                    {section.title}
                  </h2>

                  <p
                    className="mt-5 text-base leading-7 sm:text-lg sm:leading-8"
                    style={{ color: BRAND.muted, fontWeight: 300 }}
                  >
                    {section.summary}
                  </p>

                  <div
                    className="mt-5 rounded-[1.5rem] border p-5"
                    style={{
                      borderColor: isPurple
                        ? BRAND.purpleBorder
                        : BRAND.orangeBorder,
                      background: isPurple
                        ? "rgba(153,134,191,0.07)"
                        : "rgba(206,127,87,0.07)",
                    }}
                  >
                    <div
                      className="text-[11px] uppercase tracking-[0.2em]"
                      style={{
                        color: isPurple
                          ? BRAND.purpleDark
                          : BRAND.orangeDark,
                        fontWeight: 600,
                      }}
                    >
                      Research behind the technology
                    </div>

                    <p
                      className="mt-3 text-sm leading-7 sm:text-base"
                      style={{ color: BRAND.muted, fontWeight: 300 }}
                    >
                      {section.researchBlurb}
                    </p>

                    <PublicationLink
                      href={section.publicationHref}
                      title={section.publicationTitle}
                      accent={section.accent as "purple" | "orange"}
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <ShieldCheck
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{
                            color: isPurple
                              ? BRAND.purpleDark
                              : BRAND.orangeDark,
                          }}
                        />
                        <p
                          className="text-sm leading-6 sm:text-base"
                          style={{ color: BRAND.muted }}
                        >
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Link
                      to={section.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: isPurple
                          ? BRAND.purpleBorder
                          : BRAND.orangeBorder,
                        background: isPurple
                          ? BRAND.purpleSoft
                          : BRAND.orangeSoft,
                        color: isPurple
                          ? BRAND.purpleDark
                          : BRAND.orangeDark,
                      }}
                    >
                      <span>{section.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {section.cards.map((card) => (
                    <AccentCard
                      key={card.label}
                      accent={section.accent as "purple" | "orange"}
                      className="p-6"
                    >
                      <div
                        className="text-[11px] uppercase tracking-[0.18em]"
                        style={{
                          color: isPurple
                            ? BRAND.purpleDark
                            : BRAND.orangeDark,
                          fontWeight: 600,
                        }}
                      >
                        {card.label}
                      </div>

                      <div
                        className="mt-3 text-3xl leading-none"
                        style={{ fontWeight: 300 }}
                      >
                        {card.value}
                      </div>

                      <p
                        className="mt-4 text-sm leading-6"
                        style={{ color: BRAND.muted }}
                      >
                        {card.note}
                      </p>
                    </AccentCard>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}