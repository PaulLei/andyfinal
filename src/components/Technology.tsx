import { publications } from '../data/publications';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
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

type Publication = (typeof publications)[number];

function getStats(pubs: typeof publications) {
  const total = pubs.length;
  const journals = new Set(pubs.map((p) => p.journal).filter(Boolean)).size;
  return { total, journals };
}

function asText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getLastNameFromAuthorName(authorName: string) {
  const cleaned = authorName
    .replace(/\s+/g, ' ')
    .replace(/\.$/, '')
    .trim();

  if (!cleaned) return '';

  if (cleaned.includes(',')) {
    return cleaned.split(',')[0].trim();
  }

  const parts = cleaned.split(' ').filter(Boolean);

  if (parts.length === 1) {
    return parts[0];
  }

  const lastPart = parts[parts.length - 1];
  const secondToLastPart = parts[parts.length - 2];

  const lastPartLooksLikeInitial =
    /^[A-Z]\.?$/i.test(lastPart) || /^[A-Z]{1,3}\.?$/i.test(lastPart);

  if (lastPartLooksLikeInitial && secondToLastPart) {
    return parts[0];
  }

  return lastPart;
}

function getAuthorLabel(pub: Publication) {
  const record = pub as Record<string, unknown>;

  const directLastName =
    asText(record.firstAuthorLastName) ||
    asText(record.first_author_last_name) ||
    asText(record.authorLastName) ||
    asText(record.author_last_name);

  if (directLastName) {
    return `${directLastName} et al.`;
  }

  const authors = record.authors;

  if (Array.isArray(authors) && authors.length > 0) {
    const firstAuthor = asText(authors[0]);
    const lastName = getLastNameFromAuthorName(firstAuthor);

    if (lastName) {
      return `${lastName} et al.`;
    }
  }

  const authorText =
    asText(record.authors) ||
    asText(record.author) ||
    asText(record.authorText) ||
    asText(record.author_text);

  if (authorText) {
    const firstAuthor = authorText
      .split(';')[0]
      .split(' and ')[0]
      .split(' & ')[0]
      .trim();

    const lastName = getLastNameFromAuthorName(firstAuthor);

    if (lastName) {
      return `${lastName} et al.`;
    }
  }

  const citation = asText(record.citation);
  const title = asText(record.title);

  if (citation && title) {
    const titleIndex = citation.toLowerCase().indexOf(title.toLowerCase());

    if (titleIndex > 0) {
      const firstAuthor = citation
        .slice(0, titleIndex)
        .replace(/[.;:\s]+$/g, '')
        .split(';')[0]
        .split(' and ')[0]
        .split(' & ')[0]
        .trim();

      const lastName = getLastNameFromAuthorName(firstAuthor);

      if (lastName) {
        return `${lastName} et al.`;
      }
    }
  }

  return '';
}

function getPublicationLabel(pub: Publication) {
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
      className="px-6 py-9 sm:py-11"
      style={{ backgroundColor: B.bg, color: B.ink }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <div
              className="mb-2 text-[11px] uppercase tracking-[0.22em]"
              style={{ color: B.purpleDark, fontWeight: 600 }}
            >
              Research Foundation
            </div>

            <h2
              className="text-3xl leading-tight sm:text-4xl lg:text-5xl"
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
              className="mt-4 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7"
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
            <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border px-4 py-2.5 text-center"
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

        <div className="grid gap-3 md:grid-cols-2">
          {featuredPubs.map((pub, index) => {
            const publicationStyle = getPublicationLabel(pub);
            const authorLabel = getAuthorLabel(pub);

            return (
              <a
                key={index}
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[1.25rem] border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: publicationStyle.border,
                  backgroundColor: publicationStyle.soft,
                  boxShadow: `inset 3px 0 0 ${publicationStyle.color}`,
                }}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
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

                  <span
                    className="ml-auto text-xs tabular-nums"
                    style={{ color: B.muted }}
                  >
                    {pub.year}
                  </span>
                </div>

                {authorLabel && (
                  <div
                    className="mb-1.5 text-sm"
                    style={{ color: publicationStyle.color, fontWeight: 600 }}
                  >
                    {authorLabel}
                  </div>
                )}

                <p
                  className="text-sm leading-6"
                  style={{ color: B.ink, fontWeight: 400 }}
                >
                  {pub.title}
                </p>

                {pub.journal && (
                  <p
                    className="mt-2 text-xs leading-5"
                    style={{ color: B.muted }}
                  >
                    {pub.journal}
                  </p>
                )}

                <div
                  className="mt-3 flex items-center gap-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color: publicationStyle.color }}
                >
                  <ExternalLink className="h-3 w-3" />
                  View publication
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              backgroundColor: B.purpleDark,
              color: '#fff',
            }}
          >
            <BookOpen className="h-4 w-4" />
            View all publications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}