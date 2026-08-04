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
  { label: "Cohort", value: "198 patients", note: "Suspected epilepsy, normal initial EEGs." },
  { label: "Classified", value: "168 of 198", note: "Given definitive risk scores." },
  { label: "Accuracy", value: "93%", note: "For definitive classifications." },
  { label: "Sens. / Spec.", value: "92% / 95%", note: "Retrospective study population." },
];

const eztrackHighlights = [
  { label: "Regulatory", value: "FDA 510(k)", note: "Per Neurologic Solutions." },
  { label: "Cohort", value: "91 patients", note: "Neural fragility study." },
  { label: "Accuracy", value: "76%", note: "Surgical outcome prediction." },
  { label: "Failures caught", value: "43 of 47", note: "Predicted in the study." },
];

const evidenceSections: Array<{
  id: string;
  eyebrow: string;
  title: string;
  icon: typeof Brain;
  accent: "purple" | "orange";
  productName: string;
  ctaHref: string;
  ctaLabel: string;
  publicationTitle: string;
  publicationHref: string;
  summary: JSX.Element;
  researchBlurb: JSX.Element;
  bullets: string[];
  cards: Array<{ label: string; value: string; note: string }>;
}> = [
  {
    id: "episcalp-evidence",
    eyebrow: "EpiScalp™ Evidence",
    title: "Diagnostic support from routine scalp EEG",
    icon: Brain,
    accent: "purple",
    productName: "EpiScalp™",
    ctaHref: "/episcalp",
    ctaLabel: "Explore EpiScalp™",
    publicationTitle:
      "Diagnosing Epilepsy with Normal Interictal EEG Using Dynamic Network Models",
    publicationHref: "https://onlinelibrary.wiley.com/doi/10.1002/ana.27168",
    summary: (
      <>
        EpiScalp™ analyzes routine scalp EEG to estimate epilepsy risk, even
        when the initial EEG looks normal. Its strongest evidence is a
        retrospective study of suspected-epilepsy patients, showing strong
        accuracy for definitive risk classifications.
      </>
    ),
    researchBlurb: (
      <>
        The retrospective study anchors this section, showing how EpiScalp™
        turns interictal EEG features into a quantitative risk score. Ongoing
        SBIR-supported work extends this validation but isn't the headline
        claim.
      </>
    ),
    bullets: [
      "Analyzes routine EEG, including cases that initially look normal.",
      "Produces a risk score meant to support, not replace, clinicians.",
      "93% accuracy, 92% sensitivity, 95% specificity in the retrospective study.",
    ],
    cards: episcalpHighlights,
  },
  {
    id: "eztrack-evidence",
    eyebrow: "EZTrack™ Evidence",
    title: "Interpretable seizure localization support",
    icon: Activity,
    accent: "orange",
    productName: "EZTrack™",
    ctaHref: "/eztrack",
    ctaLabel: "Explore EZTrack™",
    publicationTitle: "Neural fragility as an EEG marker of the seizure onset zone",
    publicationHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8547387/",
    summary: (
      <>
        EZTrack™ analyzes intracranial EEG for drug-resistant epilepsy patients
        being evaluated for surgery. Its public evidence is a retrospective,
        91-patient analysis of surgical-outcome prediction — not yet a broad
        prospective trial.
      </>
    ),
    researchBlurb: (
      <>
        The neural fragility publication is the strongest public support:
        91 patients, 76% outcome-prediction accuracy, 43 of 47 surgical
        failures predicted. Framed here as retrospective, cross-validated
        results to avoid overclaiming.
      </>
    ),
    bullets: [
      "Identifies fragile regions in intracranial EEG linked to epileptogenic tissue.",
      "Presents interpretable visuals for surgical planning review.",
      "76% surgical-outcome prediction accuracy in a 91-patient retrospective study.",
    ],
    cards: eztrackHighlights,
  },
];

type AccentCardProps = {
  children: React.ReactNode;
  accent?: "purple" | "orange";
  className?: string;
};

function AccentCard({
  children,
  accent = "purple",
  className = "",
}: AccentCardProps) {
  const isPurple = accent === "purple";

  return (
    <div
      className={`rounded-2xl border bg-white ${className}`}
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

type PublicationLinkProps = {
  href: string;
  title: string;
  accent: "purple" | "orange";
};

function PublicationLink({
  href,
  title,
  accent,
}: PublicationLinkProps) {
  const isPurple = accent === "purple";

  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
        background: isPurple ? BRAND.purpleSoft : BRAND.orangeSoft,
        color: isPurple ? BRAND.purpleDark : BRAND.orangeDark,
      }}
    >
      <span>Read supporting publication</span>
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

export default function ClinicalEvidencePage() {
  return (
    <div
      className="min-h-screen pt-16"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-8 pb-6">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-0 h-56 w-56 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-3rem] bottom-0 h-56 w-56 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-3 flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl border"
              style={{
                background: BRAND.purpleSoft,
                borderColor: BRAND.purpleBorder,
              }}
            >
              <Stethoscope className="h-4 w-4" style={{ color: BRAND.purpleDark }} />
            </div>

            <span
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: BRAND.purpleDark }}
            >
              Clinical Evidence
            </span>
          </div>

          <h1
            className="max-w-3xl text-3xl leading-tight md:text-4xl lg:text-5xl"
            style={{ fontWeight: 300 }}
          >
            Evidence supporting
            <span className="block italic" style={{ color: BRAND.purpleDark }}>
              quantitative epilepsy care
            </span>
          </h1>

          <p
            className="mt-3 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7"
            style={{ color: BRAND.muted, fontWeight: 300 }}
          >
            Neurologic Solutions builds EEG software for epilepsy diagnosis and
            seizure localization. Here's the public research behind EpiScalp™
            and EZTrack™.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-6xl">
          <div
            className="flex flex-wrap gap-2 rounded-2xl border p-2.5"
            style={{
              borderColor: BRAND.line,
              backgroundColor: "rgba(255,255,255,0.78)",
            }}
          >
            <a
              href="#overview"
              className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                background: BRAND.purpleSoft,
                color: BRAND.purpleDark,
              }}
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Overview
            </a>

            <a
              href="#episcalp-evidence"
              className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <Brain className="h-3.5 w-3.5" />
              EpiScalp™
            </a>

            <a
              href="#eztrack-evidence"
              className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm"
              style={{
                borderColor: BRAND.orangeBorder,
                background: "white",
                color: BRAND.ink,
              }}
            >
              <Activity className="h-3.5 w-3.5" />
              EZTrack™
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 max-w-2xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              Overview
            </div>

            <h2 className="mt-2 text-2xl leading-tight sm:text-3xl" style={{ fontWeight: 300 }}>
              Two products, two clinical questions
            </h2>

            <p
              className="mt-2 text-sm leading-6 sm:text-base sm:leading-7"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              EpiScalp™ supports diagnosis from scalp EEG. EZTrack™ supports
              seizure localization from intracranial EEG.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <AccentCard accent="purple" className="p-4">
              <div className="mb-2 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: BRAND.purpleSoft }}
                >
                  <Brain className="h-4 w-4" style={{ color: BRAND.purpleDark }} />
                </div>

                <div>
                  <h3 className="text-lg" style={{ fontWeight: 300 }}>
                    EpiScalp™
                  </h3>
                  <p className="text-xs" style={{ color: BRAND.muted }}>
                    Epilepsy diagnosis support
                  </p>
                </div>
              </div>

              <p className="text-sm leading-6" style={{ color: BRAND.muted }}>
                Turns routine scalp EEG into a quantitative risk score, even
                when the EEG initially looks normal.
              </p>
            </AccentCard>

            <AccentCard accent="orange" className="p-4">
              <div className="mb-2 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: BRAND.orangeSoft }}
                >
                  <Activity className="h-4 w-4" style={{ color: BRAND.orangeDark }} />
                </div>

                <div>
                  <h3 className="text-lg" style={{ fontWeight: 300 }}>
                    EZTrack™
                  </h3>
                  <p className="text-xs" style={{ color: BRAND.muted }}>
                    Seizure localization support
                  </p>
                </div>
              </div>

              <p className="text-sm leading-6" style={{ color: BRAND.muted }}>
                Visualizes neural fragility in intracranial EEG to support
                seizure onset zone assessment and surgical planning.
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
          <section key={section.id} id={section.id} className="px-6 py-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background: isPurple ? BRAND.purpleSoft : BRAND.orangeSoft,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: isPurple ? BRAND.purpleDark : BRAND.orangeDark }}
                      />
                    </div>

                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                      style={{ color: isPurple ? BRAND.purpleDark : BRAND.orangeDark }}
                    >
                      {section.eyebrow}
                    </span>
                  </div>

                  <h2 className="text-2xl leading-tight sm:text-3xl" style={{ fontWeight: 300 }}>
                    {section.title}
                  </h2>

                  <p
                    className="mt-2 text-sm leading-6 sm:text-base sm:leading-7"
                    style={{ color: BRAND.muted, fontWeight: 300 }}
                  >
                    {section.summary}
                  </p>

                  <div
                    className="mt-3 rounded-2xl border p-3.5"
                    style={{
                      borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
                      background: isPurple
                        ? "rgba(153,134,191,0.07)"
                        : "rgba(206,127,87,0.07)",
                    }}
                  >
                    <div
                      className="text-[11px] uppercase tracking-[0.2em]"
                      style={{
                        color: isPurple ? BRAND.purpleDark : BRAND.orangeDark,
                        fontWeight: 600,
                      }}
                    >
                      Research behind it
                    </div>

                    <p
                      className="mt-1.5 text-sm leading-6"
                      style={{ color: BRAND.muted, fontWeight: 300 }}
                    >
                      {section.researchBlurb}
                    </p>

                    <PublicationLink
                      href={section.publicationHref}
                      title={section.publicationTitle}
                      accent={section.accent}
                    />
                  </div>

                  <div className="mt-3 space-y-2">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2.5">
                        <ShieldCheck
                          className="mt-0.5 h-3.5 w-3.5 shrink-0"
                          style={{ color: isPurple ? BRAND.purpleDark : BRAND.orangeDark }}
                        />
                        <p className="text-sm leading-6" style={{ color: BRAND.muted }}>
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a
                      href={section.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
                        background: isPurple ? BRAND.purpleSoft : BRAND.orangeSoft,
                        color: isPurple ? BRAND.purpleDark : BRAND.orangeDark,
                      }}
                    >
                      <span>{section.ctaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {section.cards.map((card) => (
                    <AccentCard
                      key={card.label}
                      accent={section.accent}
                      className="p-3.5"
                    >
                      <div
                        className="text-[10px] uppercase tracking-[0.16em]"
                        style={{
                          color: isPurple ? BRAND.purpleDark : BRAND.orangeDark,
                          fontWeight: 600,
                        }}
                      >
                        {card.label}
                      </div>

                      <div className="mt-1.5 text-2xl leading-none" style={{ fontWeight: 300 }}>
                        {card.value}
                      </div>

                      <p className="mt-1.5 text-xs leading-5" style={{ color: BRAND.muted }}>
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