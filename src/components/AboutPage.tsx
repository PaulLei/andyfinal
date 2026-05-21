import { useEffect, useState } from 'react';
import {
  Heart,
  Users,
  Sparkles,
  Brain,
  Stethoscope,
  ArrowRight,
  Mail,
  Briefcase,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * ABOUT PAGE
 *
 * Updated based on latest company feedback:
 * - revised mission statement
 * - revised EEG problem statement
 * - updated "Why We Exist" language
 * - simplified leadership section with Team page link
 * - updated journey dates and commercialization language
 * - simplified careers section to one email CTA
 * - removed recruiting contact information
 *
 * Assumes the Typo Grotesk font family is loaded globally.
 */

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered',
      description:
        'We start with the patient outcome. Better tools should help care teams reach better decisions with greater confidence.',
    },
    {
      icon: Users,
      title: 'Clinician Empowerment',
      description:
        'Our software is built to support neurologists and epilepsy specialists with practical, interpretable insights.',
    },
    {
      icon: Sparkles,
      title: 'Precision Innovation',
      description:
        'We combine advanced analytics, dynamic network modeling, and clinical insight to make EEG data more actionable.',
    },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Founded',
      description:
        'Neurologic Solutions was founded to improve the diagnosis and treatment of epilepsy through smart EEG analytic software tools.',
    },
    {
      year: '2020',
      title: 'EZTrack Clearance',
      description:
        'The company received FDA 510(k) clearance for EZTrack, an important milestone in translating research into clinical workflow.',
    },
    {
      year: '2021',
      title: 'EpiScalp Funding',
      description:
        'More than $3M in research funding supported EpiScalp development and retrospective study work.',
    },
    {
      year: '2024',
      title: 'Translation / Clinical Validation',
      description:
        'An SBIR Phase II award supported clinical validation and early commercialization activity.',
    },
    {
      year: '2026',
      title: 'Preparation for Commercialization',
      description:
        'NIH Blueprint MedTech support advanced regulatory planning, reimbursement strategy, quality-system implementation and software UI / integration development.',
    },
  ];

  const leadership = [
    {
      name: 'Andrew Gotshalk',
      role: 'CEO',
    },
    {
      name: 'Sridevi Sarma, PhD',
      role: 'President and Co-Founder',
    },
    {
      name: 'Jorge González-Martínez, MD, PhD',
      role: 'CMO and Co-Founder',
    },
    {
      name: 'Mark Hays, PhD',
      role: 'Director of Product Development',
    },
    {
      name: 'Golnoosh Kamali, PhD',
      role: 'Director of Site Engagement',
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-24"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden px-6 pt-14 pb-14 md:pt-16 md:pb-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-4rem] top-1/4 h-96 w-96 rounded-full blur-3xl"
            style={{
              background: BRAND.orangeSoft,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          />
          <div
            className="absolute bottom-[-4rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span
                className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  background: BRAND.purpleSoft,
                  borderColor: BRAND.purpleBorder,
                  color: BRAND.purpleDark,
                }}
              >
                About Neurologic Solutions
              </span>

              <h1
                className="mt-6 max-w-5xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl"
                style={{ fontWeight: 300 }}
              >
                Pioneering precision in
                <span
                  className="block"
                  style={{ color: BRAND.purpleDark, fontStyle: 'italic' }}
                >
                  neurodata analysis
                </span>
              </h1>

              <p
                className="mt-7 max-w-3xl text-lg leading-8 sm:text-xl"
                style={{ color: BRAND.muted, fontWeight: 300 }}
              >
                Neurologic Solutions is dedicated to empowering clinicians with
                reliable EEG analytics and actionable insights for more accurate
                diagnosis and better treatment decisions.
              </p>
            </div>

            {/* Right-side mission card */}
            <div
              className="rounded-[2rem] border p-7 shadow-sm sm:p-8"
              style={{
                borderColor: BRAND.line,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(153,134,191,0.06) 100%)',
              }}
            >
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.orangeDark, fontWeight: 600 }}
              >
                Mission
              </div>

              <p className="mt-4 text-xl leading-8" style={{ fontWeight: 300 }}>
                To transform complex brain data into precise, interpretable
                biomarkers that help clinicians diagnose and treat neurological
                disorders quickly and more effectively.
              </p>

              <div
                className="my-6 h-px w-full"
                style={{ backgroundColor: BRAND.line }}
              />

              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.purpleDark, fontWeight: 600 }}
              >
                Vision
              </div>

              <p
                className="mt-4 text-base leading-7"
                style={{ color: BRAND.muted, fontWeight: 300 }}
              >
                We aim to harness the analytic power of brain data to create
                quantitative markers that improve diagnostic accuracy, guide
                treatment, and support better clinical outcomes across
                neurological disorders.
              </p>
            </div>
          </div>

          {/* Small supporting cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              className="rounded-2xl border p-5 shadow-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                backgroundColor: 'rgba(255,255,255,0.82)',
              }}
            >
              <Brain
                className="mb-3 h-5 w-5"
                style={{ color: BRAND.purpleDark }}
              />
              <p className="text-sm leading-6" style={{ color: BRAND.muted }}>
                EEG contains rich information, but much of it is hidden and
                appears visually inconclusive.
              </p>
            </div>

            <div
              className="rounded-2xl border p-5 shadow-sm"
              style={{
                borderColor: BRAND.orangeBorder,
                backgroundColor: 'rgba(255,255,255,0.82)',
              }}
            >
              <Stethoscope
                className="mb-3 h-5 w-5"
                style={{ color: BRAND.orangeDark }}
              />
              <p className="text-sm leading-6" style={{ color: BRAND.muted }}>
                Delayed or uncertain interpretation can slow diagnosis, treatment
                planning, and care decisions.
              </p>
            </div>

            <div
              className="rounded-2xl border p-5 shadow-sm"
              style={{
                borderColor: BRAND.purpleBorder,
                backgroundColor: 'rgba(255,255,255,0.82)',
              }}
            >
              <Target
                className="mb-3 h-5 w-5"
                style={{ color: BRAND.purpleDark }}
              />
              <p className="text-sm leading-6" style={{ color: BRAND.muted }}>
                Our goal is to turn difficult neurodata into practical insight
                clinicians can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WE EXIST
      ========================================================== */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.orangeDark, fontWeight: 600 }}
              >
                Why We Exist
              </div>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Better neurological care starts with better use of brain data
              </h2>

              <div
                className="mt-6 space-y-5 text-lg leading-8"
                style={{ color: BRAND.muted, fontWeight: 300 }}
              >
                <p>
                  Neurologic Solutions was created to address a practical problem:
                  clinicians often work with complex EEG data that contains
                  important signals, but extracting consistent, meaningful insight
                  can be difficult and time-intensive.
                </p>

                <p>
                  We build analytic software tools that help convert brain signals
                  into clearer, more quantitative information. The goal is not to
                  replace clinical judgment. The goal is to strengthen it.
                </p>

                <p>
                  Our work is rooted in the combination of advanced biomedical
                  engineering, dynamic network modeling, and clinical expertise.
                </p>
              </div>
            </div>

            <div
              className="rounded-[2rem] border p-7 shadow-sm"
              style={{
                borderColor: BRAND.line,
                backgroundColor: BRAND.card,
              }}
            >
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.purpleDark, fontWeight: 600 }}
              >
                What We Focus On
              </div>

              <div className="mt-5 space-y-4">
                {[
                  'Reliable EEG analytics',
                  'Quantitative biomarkers',
                  'Clinician-friendly workflow support',
                  'Better diagnosis and treatment decisions',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border p-4"
                    style={{
                      borderColor: BRAND.line,
                      background: 'rgba(153,134,191,0.04)',
                    }}
                  >
                    <div
                      className="mt-1 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: BRAND.purple }}
                    />
                    <p
                      className="text-sm leading-6"
                      style={{ color: BRAND.muted }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section
        className="px-6 py-16 sm:py-20"
        style={{
          background:
            'linear-gradient(180deg, rgba(153,134,191,0.05) 0%, rgba(255,255,255,0) 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              Our Values
            </div>

            <h2
              className="mt-4 text-4xl leading-tight sm:text-5xl"
              style={{ fontWeight: 300 }}
            >
              What drives our work
            </h2>

            <p
              className="mt-5 text-lg leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              These values shape how we build products, collaborate with
              clinicians, and think about impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isMiddle = index === 1;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: isMiddle
                      ? BRAND.orangeBorder
                      : BRAND.purpleBorder,
                    backgroundColor: BRAND.card,
                  }}
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: isMiddle
                        ? BRAND.orangeSoft
                        : BRAND.purpleSoft,
                    }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{
                        color: isMiddle ? BRAND.orangeDark : BRAND.purpleDark,
                      }}
                    />
                  </div>

                  <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                    {value.title}
                  </h3>

                  <p
                    className="mt-4 text-base leading-7"
                    style={{ color: BRAND.muted, fontWeight: 300 }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP SNAPSHOT
      ========================================================== */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.orangeDark, fontWeight: 600 }}
              >
                Leadership
              </div>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Leadership team
              </h2>

              <p
                className="mt-5 text-lg leading-8"
                style={{ color: BRAND.muted, fontWeight: 300 }}
              >
                Neurologic Solutions brings together expertise in biomedical
                engineering, clinical neurology, product development, and site
                engagement.
              </p>
            </div>

            <Link
              to="/team"
              className="inline-flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: BRAND.purpleBorder,
                background: BRAND.purpleSoft,
                color: BRAND.purpleDark,
              }}
            >
              <span>Meet the full team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <div
                key={person.name}
                className="rounded-3xl border p-6 shadow-sm"
                style={{
                  borderColor:
                    index % 2 === 0 ? BRAND.purpleBorder : BRAND.orangeBorder,
                  backgroundColor: BRAND.card,
                }}
              >
                <div
                  className="text-[11px] uppercase tracking-[0.18em]"
                  style={{
                    color:
                      index % 2 === 0
                        ? BRAND.purpleDark
                        : BRAND.orangeDark,
                    fontWeight: 600,
                  }}
                >
                  Leadership
                </div>

                <h3
                  className="mt-3 text-xl leading-tight"
                  style={{ fontWeight: 300 }}
                >
                  {person.name}
                </h3>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: BRAND.muted }}
                >
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TIMELINE
      ========================================================== */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              Our Journey
            </div>

            <h2
              className="mt-4 text-4xl leading-tight sm:text-5xl"
              style={{ fontWeight: 300 }}
            >
              Building toward smarter neurological care
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px md:block"
              style={{
                background:
                  'linear-gradient(180deg, rgba(153,134,191,0.65), rgba(206,127,87,0.22))',
              }}
            />

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="grid gap-4 rounded-[2rem] border p-6 md:grid-cols-[90px_24px_1fr] md:gap-6"
                  style={{
                    borderColor: BRAND.line,
                    backgroundColor:
                      index % 2 === 0
                        ? 'rgba(255,255,255,0.84)'
                        : 'rgba(153,134,191,0.04)',
                  }}
                >
                  <div
                    className="pt-1 text-sm font-semibold uppercase tracking-[0.18em]"
                    style={{ color: BRAND.purpleDark }}
                  >
                    {item.year}
                  </div>

                  <div className="hidden md:flex md:justify-center">
                    <div
                      className="mt-1 h-6 w-6 rounded-full border-4"
                      style={{
                        backgroundColor: BRAND.bg,
                        borderColor:
                          index % 2 === 0 ? BRAND.purple : BRAND.orange,
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl" style={{ fontWeight: 300 }}>
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 max-w-3xl text-base leading-7"
                      style={{ color: BRAND.muted, fontWeight: 300 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREERS / GENERAL APPLICATION
      ========================================================== */}
      <section className="px-6 pb-20 pt-6 sm:pb-24">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] p-8 text-white sm:p-10 lg:p-12"
          style={{
            background:
              'linear-gradient(135deg, rgba(47,39,56,1) 0%, rgba(85,72,109,1) 50%, rgba(153,134,191,1) 100%)',
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                Careers
              </div>

              <h2
                className="mt-4 text-4xl leading-tight sm:text-5xl"
                style={{ fontWeight: 300 }}
              >
                Interested in joining our team?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                We welcome general inquiries from people who are aligned with our
                mission. Send us your information, resume or CV, and any relevant
                supporting materials for future consideration.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="mailto:info@neurologicsolutions.net?subject=General%20Interest%20-%20Neurologic%20Solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: BRAND.orange,
                  color: '#fff',
                }}
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}