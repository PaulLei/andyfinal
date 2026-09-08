import { Link } from "react-router-dom";
import { useEffect, type ReactNode } from "react";

export const LEGAL_BRAND = {
  purple: "#9986bf",
  purpleDark: "#7e6aa7",
  purpleSoft: "rgba(153, 134, 191, 0.12)",
  orange: "#ce7f57",
  orangeSoft: "rgba(206, 127, 87, 0.12)",
  ink: "#2f2738",
  muted: "#6e647b",
  line: "rgba(47, 39, 56, 0.10)",
  bg: "#fcfaf8",
  card: "#ffffff",
};

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2
        className="text-2xl leading-tight md:text-[1.65rem]"
        style={{ fontWeight: 300, color: LEGAL_BRAND.ink }}
      >
        {title}
      </h2>
      <div
        className="mt-4 space-y-4 text-base leading-8"
        style={{ color: LEGAL_BRAND.muted, fontWeight: 300 }}
      >
        {children}
      </div>
    </section>
  );
}

export default function LegalDocument({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Neurologic Solutions Inc.`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <div
      className="min-h-screen pt-24"
      style={{
        backgroundColor: LEGAL_BRAND.bg,
        color: LEGAL_BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      <section className="relative overflow-hidden px-6 pt-20 pb-12 md:pt-24 md:pb-14">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: LEGAL_BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-3rem] bottom-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: LEGAL_BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: LEGAL_BRAND.purpleDark }}
          >
            {eyebrow}
          </span>
          <h1
            className="mt-4 text-4xl leading-tight md:text-5xl"
            style={{ fontWeight: 300 }}
          >
            {title}
          </h1>
          <p className="mt-5 text-sm" style={{ color: LEGAL_BRAND.muted }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <article
          className="mx-auto max-w-3xl space-y-12 rounded-[2rem] border p-8 md:p-12"
          style={{
            borderColor: LEGAL_BRAND.line,
            backgroundColor: LEGAL_BRAND.card,
          }}
        >
          {children}

          <p className="text-sm leading-7" style={{ color: LEGAL_BRAND.muted }}>
            Questions about this document? Contact us at{" "}
            <a
              href="mailto:info@neurologicsolutions.net"
              className="underline underline-offset-4"
              style={{ color: LEGAL_BRAND.ink }}
            >
              info@neurologicsolutions.net
            </a>{" "}
            or visit our{" "}
            <Link
              to="/contact"
              className="underline underline-offset-4"
              style={{ color: LEGAL_BRAND.ink }}
            >
              Contact page
            </Link>
            .
          </p>
        </article>
      </section>
    </div>
  );
}
