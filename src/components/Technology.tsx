import { publications } from '../data/publications';
import { ExternalLink, BookOpen, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const B = {
  purple: '#9986bf',
  purpleDark: '#7e6aa7',
  purpleSoft: 'rgba(153,134,191,0.12)',
  purpleBorder: 'rgba(153,134,191,0.28)',
  orange: '#ce7f57',
  orangeDark: '#b96d46',
  orangeSoft: 'rgba(206,127,87,0.12)',
  orangeBorder: 'rgba(206,127,87,0.28)',
  ink: '#2f2738',
  muted: '#6e647b',
  line: 'rgba(47,39,56,0.10)',
  bg: '#fcfaf8',
  card: '#ffffff',
};

function getStats(pubs: typeof publications) {
  const total = pubs.length;
  const journals = new Set(pubs.map((p) => p.journal).filter(Boolean)).size;
  return { total, journals };
}

function getPublicationLabel(pub: (typeof publications)[number]) {
  const title = pub.title?.toLowerCase() || '';
  const journal = pub.journal?.toLowerCase() || '';

  const isEpiScalp =
    title.includes('episcalp') ||
    title.includes('scalp eeg') ||
    journal.includes('annals of neurology');

  const isEZTrack =
    title.includes('fragility') ||
    title.includes('eztrack') ||
    journal.includes('nature');

  if (isEpiScalp) {
    return {
      label: 'EpiScalp Foundation',
      color: B.purpleDark,
      soft: B.purpleSoft,
      border: B.purpleBorder,
    };
  }

  if (isEZTrack) {
    return {
      label: 'EZTrack Foundation',
      color: B.orangeDark,
      soft: B.orangeSoft,
      border: B.orangeBorder,
    };
  }

  return {
    label: 'Featured Research',
    color: B.purpleDark,
    soft: B.card,
    border: B.line,
  };
}

export default function Technology() {
  const featuredPubs = publications.filter((p) => p.featured);
  const { total, journals } = getStats(publications);

  const showStats = total >= 5;

  const stats = [
    { label: 'Publications', value: `${total}+` },
    { label: 'Journals', value: `${journals}` },
  ];

  return (
    <section
      className="py-16 px-6 sm:py-20"
      style={{ backgroundColor: B.bg, color: B.ink }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <div
              className="text-[11px] uppercase tracking-[0.22em] mb-4"
              style={{ color: B.purpleDark, fontWeight: 600 }}
            >
              Research Foundation
            </div>

            <h2
              className="text-4xl sm:text-5xl leading-[1.05]"
              style={{ fontWeight: 300 }}
            >
              Built on{' '}
              <span style={{ color: B.purpleDark, fontStyle: 'italic' }}>
                peer-reviewed science
              </span>
              .
              <br />
              Validated in{' '}
              <span style={{ color: B.orangeDark, fontStyle: 'italic' }}>
                clinical research
              </span>
              .
            </h2>

            <p
              className="mt-5 max-w-3xl text-base leading-7"
              style={{ color: B.muted }}
            >
              Our technology is grounded in over a decade of peer-reviewed
              research with foundational findings published in Nature
              Neuroscience, Brain, and Annals of Neurology. Both tools have been
              developed and validated in collaboration with leading academic
              medical centers, with the science continuously informing clinical
              application.
            </p>
          </div>

          {showStats && (
            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border px-5 py-3 text-center"
                  style={{
                    borderColor: B.purpleBorder,
                    backgroundColor: B.purpleSoft,
                  }}
                >
                  <div
                    className="text-2xl leading-none"
                    style={{ color: B.purpleDark, fontWeight: 300 }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: B.muted, fontWeight: 600 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredPubs.map((pub, index) => {
            const publicationStyle = getPublicationLabel(pub);

            return (
              <a
                key={index}
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[1.5rem] border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-7"
                style={{
                  borderColor: publicationStyle.border,
                  backgroundColor: publicationStyle.soft,
                  boxShadow: `inset 3px 0 0 ${publicationStyle.color}`,
                }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em]"
                    style={{
                      borderColor: publicationStyle.border,
                      color: publicationStyle.color,
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      fontWeight: 600,
                    }}
                  >
                    {publicationStyle.label}
                  </span>

                  {pub.journal && (
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{
                        color: publicationStyle.color,
                        fontWeight: 500,
                      }}
                    >
                      <BookOpen className="h-3 w-3" />
                      {pub.journal}
                    </span>
                  )}

                  <span
                    className="ml-auto text-xs tabular-nums"
                    style={{ color: B.muted }}
                  >
                    {pub.year}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-5 flex-1">
                  <Quote
                    className="h-4 w-4 shrink-0 mt-0.5 opacity-40"
                    style={{ color: publicationStyle.color }}
                  />
                  <p
                    className="text-base leading-7"
                    style={{ color: B.ink, fontWeight: 400 }}
                  >
                    {pub.title}
                  </p>
                </div>

                <div
                  className="mt-4 flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: publicationStyle.color }}
                >
                  <ExternalLink className="h-3 w-3" />
                  View publication
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              backgroundColor: B.purpleDark,
              color: '#fff',
            }}
          >
            <BookOpen className="h-4 w-4" />
            View all publications
          </Link>
        </div>
      </div>
    </section>
  );
}