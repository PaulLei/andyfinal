import { useMemo, useState, type ReactNode } from 'react';
import {
  BookOpen,
  ExternalLink,
  Filter,
  Sparkles,
  Microscope,
  Layers3,
  Star,
  Brain,
  Activity,
} from 'lucide-react';
import {
  publications,
  ProductTag,
  PublicationCategory,
  eztrackPublicationTitles,
  episcalpPublicationTitles,
} from '../data/publications';

/**
 * Brand colors from your notes:
 * Purple: #9986bf
 * Orange: #ce7f57
 *
 * This version:
 * - removes old/fake publication entries
 * - uses only papers provided in the latest publication update
 * - removes poster / abstract language
 * - removes the visible "Journal / venue:" label but keeps the actual journal / venue name
 * - shows author labels in both key-paper cards and product publication cards
 * - uses citation only as a fallback source for authors, but does not render citation again
 * - prevents duplicate author display such as "Burns et al." appearing twice
 * - pulls authors from ../data/publications instead of hardcoding author names here
 * - highlights the Annals of Neurology EpiScalp paper as the main publication
 * - adds Peer-Reviewed visibility for the LTI Models paper
 * - groups highlighted EpiScalp and EZTrack papers clearly
 * - tightens card and section spacing to reduce extra white space
 */

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

const yearOptions = [
  'All',
  ...Array.from(new Set(publications.map((pub) => pub.year.toString()))).sort(
    (a, b) => Number(b) - Number(a)
  ),
];

const typeOptions: Array<'All' | PublicationCategory> = [
  'All',
  'Peer-Reviewed',
  'Conference',
];

const productOptions: Array<'All' | ProductTag> = [
  'All',
  'EpiScalp',
  'EZTrack',
  'Foundational',
];

function getTagStyles(tag: ProductTag) {
  if (tag === 'EpiScalp') {
    return {
      bg: BRAND.purpleSoft,
      border: BRAND.purpleBorder,
      color: BRAND.purpleDark,
    };
  }

  if (tag === 'EZTrack') {
    return {
      bg: BRAND.orangeSoft,
      border: BRAND.orangeBorder,
      color: BRAND.orangeDark,
    };
  }

  return {
    bg: 'rgba(47, 39, 56, 0.06)',
    border: 'rgba(47, 39, 56, 0.12)',
    color: BRAND.ink,
  };
}

function getTypeStyles(type: PublicationCategory) {
  if (type === 'Peer-Reviewed') {
    return {
      bg: BRAND.purpleSoft,
      border: BRAND.purpleBorder,
      color: BRAND.purpleDark,
    };
  }

  return {
    bg: BRAND.orangeSoft,
    border: BRAND.orangeBorder,
    color: BRAND.orangeDark,
  };
}

function PublicationTags({
  category,
  year,
  tags,
  compact = false,
}: {
  category: PublicationCategory;
  year: number;
  tags: ProductTag[];
  compact?: boolean;
}) {
  const typeStyles = getTypeStyles(category);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`rounded-full border font-semibold ${
          compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1 text-xs'
        }`}
        style={{
          background: typeStyles.bg,
          borderColor: typeStyles.border,
          color: typeStyles.color,
        }}
      >
        {category}
      </span>

      <span
        className={`rounded-full border font-semibold ${
          compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1 text-xs'
        }`}
        style={{
          background: 'rgba(47,39,56,0.05)',
          borderColor: 'rgba(47,39,56,0.10)',
          color: BRAND.ink,
        }}
      >
        {year}
      </span>

      {tags.map((tag) => {
        const styles = getTagStyles(tag);

        return (
          <span
            key={`${tag}-${year}`}
            className={`rounded-full border font-semibold ${
              compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1 text-xs'
            }`}
            style={{
              background: styles.bg,
              borderColor: styles.border,
              color: styles.color,
            }}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}

function JournalLine({ journal }: { journal: string }) {
  return (
    <p className="mt-2 text-sm leading-6" style={{ color: BRAND.muted }}>
      <strong className="font-semibold not-italic" style={{ color: BRAND.ink }}>
        {journal}
      </strong>
    </p>
  );
}

function getFamilyName(authorName: string) {
  const cleaned = authorName
    .replace(/\s+/g, ' ')
    .replace(/[.;]+$/g, '')
    .trim();

  if (!cleaned) {
    return '';
  }

  if (cleaned.includes(',')) {
    return cleaned.split(',')[0].trim();
  }

  const parts = cleaned.split(' ');

  if (parts.length === 1) {
    return parts[0];
  }

  const lastPart = parts[parts.length - 1];

  if (/^[A-Z]\.?$/.test(lastPart)) {
    return parts[0];
  }

  return lastPart;
}

function formatAuthors(authors: string | string[]) {
  if (Array.isArray(authors)) {
    const cleanAuthors = authors.map((author) => author.trim()).filter(Boolean);

    if (cleanAuthors.length === 0) {
      return '';
    }

    if (cleanAuthors.length === 1) {
      return cleanAuthors[0];
    }

    const firstFamilyName = getFamilyName(cleanAuthors[0]);

    return firstFamilyName ? `${firstFamilyName} et al.` : `${cleanAuthors[0]} et al.`;
  }

  return authors.trim();
}

function formatAuthorChunk(authorChunk: string) {
  const cleaned = authorChunk
    .replace(/\s+/g, ' ')
    .replace(/[.;:\s]+$/g, '')
    .trim();

  if (!cleaned) {
    return '';
  }

  const etAlMatch = cleaned.match(/^(.+?)\bet\s+al\.?/i);

  if (etAlMatch?.[1]) {
    const firstAuthor = etAlMatch[1].replace(/[,;&\s]+$/g, '').trim();
    const familyName = getFamilyName(firstAuthor);

    return familyName ? `${familyName} et al.` : `${firstAuthor} et al.`;
  }

  const firstAuthor = cleaned.split(/;\s*|\sand\s/i)[0]?.trim();
  const familyName = firstAuthor ? getFamilyName(firstAuthor) : '';

  return familyName ? `${familyName} et al.` : cleaned;
}

function getAuthorLabelFromCitation(pub: (typeof publications)[number]) {
  const citation = pub.citation?.trim() ?? '';

  if (!citation) {
    return '';
  }

  const titleIndex = citation.toLowerCase().indexOf(pub.title.toLowerCase());

  if (titleIndex > 0) {
    return formatAuthorChunk(citation.slice(0, titleIndex));
  }

  const firstQuoteIndex = citation.search(/["“”]/);

  if (firstQuoteIndex > 0) {
    return formatAuthorChunk(citation.slice(0, firstQuoteIndex));
  }

  const yearMatch = citation.match(/^(.+?)(?:\s*\(?\b(?:19|20)\d{2}\b\)?[.)]?\s*)/);

  if (yearMatch?.[1]) {
    return formatAuthorChunk(yearMatch[1]);
  }

  const etAlMatch = citation.match(/^(.+?\bet\s+al\.?)\b/i);

  if (etAlMatch?.[1]) {
    return formatAuthorChunk(etAlMatch[1]);
  }

  return '';
}

function getAuthorLabel(pub: (typeof publications)[number]) {
  const publicationWithAuthors = pub as typeof pub & {
    authorLabel?: string;
    shortAuthors?: string;
    authors?: string | string[];
  };

  if (publicationWithAuthors.authorLabel?.trim()) {
    return publicationWithAuthors.authorLabel.trim();
  }

  if (publicationWithAuthors.shortAuthors?.trim()) {
    return publicationWithAuthors.shortAuthors.trim();
  }

  if (publicationWithAuthors.authors) {
    return formatAuthors(publicationWithAuthors.authors);
  }

  return getAuthorLabelFromCitation(pub);
}

function AuthorLine({
  authorLabel,
  compact = false,
}: {
  authorLabel: string;
  compact?: boolean;
}) {
  if (!authorLabel) {
    return null;
  }

  return (
    <p
      className={`${compact ? 'mt-2' : 'mt-3'} text-sm leading-6 font-semibold`}
      style={{ color: BRAND.ink }}
    >
      {authorLabel}
    </p>
  );
}

function PublicationCard({
  pub,
  featured = false,
}: {
  pub: (typeof publications)[number];
  featured?: boolean;
}) {
  const authorLabel = getAuthorLabel(pub);

  return (
    <article
      className={`rounded-3xl border bg-white transition-all duration-300 ${
        featured
          ? 'h-full p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg'
          : 'group p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md md:p-6'
      }`}
      style={{
        borderColor: BRAND.line,
        background: featured
          ? 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(153,134,191,0.04) 100%)'
          : BRAND.card,
      }}
    >
      <div className="mb-4">
        <PublicationTags category={pub.category} year={pub.year} tags={pub.tags} />
      </div>

      <h3
        className={`leading-tight ${featured ? 'text-2xl' : 'text-xl md:text-2xl'}`}
        style={{ fontWeight: 300 }}
      >
        {pub.title}
      </h3>

      <AuthorLine authorLabel={authorLabel} />

      {pub.blurb && (
        <p
          className="mt-3 text-sm leading-7 md:text-base"
          style={{ color: BRAND.muted, fontWeight: 300 }}
        >
          {pub.blurb}
        </p>
      )}

      <JournalLine journal={pub.journal} />

      <div className="mt-5">
        <a
          href={pub.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{
            borderColor: featured ? BRAND.purpleBorder : BRAND.line,
            background: featured ? BRAND.purpleSoft : 'white',
            color: featured ? BRAND.purpleDark : BRAND.ink,
          }}
          title={`Open publication: ${pub.title}`}
        >
          <span>View paper</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function ProductPaperList({
  title,
  subtitle,
  icon,
  titles,
  accent,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  titles: string[];
  accent: 'purple' | 'orange';
}) {
  const isPurple = accent === 'purple';

  const papers = titles
    .map((paperTitle) => publications.find((pub) => pub.title === paperTitle))
    .filter(Boolean) as typeof publications;

  return (
    <div
      className="rounded-[2rem] border p-5 md:p-6"
      style={{
        borderColor: isPurple ? BRAND.purpleBorder : BRAND.orangeBorder,
        background: isPurple
          ? 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(153,134,191,0.05) 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(206,127,87,0.05) 100%)',
      }}
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: isPurple ? BRAND.purpleSoft : BRAND.orangeSoft,
          }}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-2xl leading-tight" style={{ fontWeight: 300 }}>
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6" style={{ color: BRAND.muted }}>
            {subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {papers.map((pub) => {
          const authorLabel = getAuthorLabel(pub);

          return (
            <a
              key={`${title}-${pub.title}`}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5"
              style={{ borderColor: BRAND.line }}
            >
              <PublicationTags
                category={pub.category}
                year={pub.year}
                tags={pub.tags}
                compact
              />

              <h4 className="mt-2 text-base leading-snug" style={{ fontWeight: 400 }}>
                {pub.title}
              </h4>

              <AuthorLine authorLabel={authorLabel} compact />

              <p className="mt-1 text-sm leading-6" style={{ color: BRAND.muted }}>
                <strong style={{ color: BRAND.ink, fontWeight: 600 }}>
                  {pub.journal}
                </strong>
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  const [activeYear, setActiveYear] = useState('All');
  const [activeType, setActiveType] = useState<'All' | PublicationCategory>('All');
  const [activeProduct, setActiveProduct] = useState<'All' | ProductTag>('All');

  const filteredPubs = useMemo(() => {
    return publications
      .filter((pub) => {
        const yearMatch =
          activeYear === 'All' || pub.year.toString() === activeYear;
        const typeMatch = activeType === 'All' || pub.category === activeType;
        const productMatch =
          activeProduct === 'All' || pub.tags.includes(activeProduct);

        return yearMatch && typeMatch && productMatch;
      })
      .slice()
      .sort((a, b) => b.year - a.year);
  }, [activeYear, activeType, activeProduct]);

  const mainPublication = useMemo(() => {
    return publications.find((pub) => pub.mainFeature);
  }, []);

  const featuredPubs = useMemo(() => {
    return publications
      .filter((pub) => pub.featured && !pub.mainFeature)
      .slice()
      .sort((a, b) => b.year - a.year);
  }, []);

  const totalPublications = publications.length;

  const totalJournals = new Set(publications.map((pub) => pub.journal.trim()))
    .size;

  const yearRange = `${Math.min(...publications.map((p) => p.year))}–${Math.max(
    ...publications.map((p) => p.year)
  )}`;

  const filterButtonBase =
    'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200';

  const cardBase = 'rounded-3xl border bg-white transition-all duration-300';

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
      <section className="relative overflow-hidden px-6 pt-10 pb-8 md:pt-12 md:pb-10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-[-4rem] top-4 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.purpleSoft }}
          />
          <div
            className="absolute right-[-3rem] bottom-0 h-72 w-72 rounded-full blur-3xl"
            style={{ background: BRAND.orangeSoft }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: BRAND.purpleSoft,
                    border: `1px solid ${BRAND.purpleBorder}`,
                  }}
                >
                  <BookOpen
                    className="h-5 w-5"
                    style={{ color: BRAND.purpleDark }}
                  />
                </div>

                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: BRAND.purpleDark }}
                >
                  Publications
                </span>
              </div>

              <h1
                className="max-w-4xl text-4xl leading-tight md:text-5xl lg:text-6xl"
                style={{ fontWeight: 300 }}
              >
                Scientific papers
                <span
                  className="block"
                  style={{ color: BRAND.purpleDark, fontStyle: 'italic' }}
                >
                  behind our technology
                </span>
              </h1>

              <p
                className="mt-5 max-w-3xl text-lg leading-8"
                style={{ color: BRAND.muted, fontWeight: 300 }}
              >
                Published papers supporting Neurologic Solutions’ work in
                quantitative EEG analytics, seizure localization, and epilepsy
                diagnostic innovation.
              </p>
            </div>

            {/* Stats / visual summary */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div
                className={`${cardBase} p-5 shadow-sm`}
                style={{
                  borderColor: BRAND.purpleBorder,
                  backgroundColor: 'rgba(255,255,255,0.84)',
                }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: BRAND.purpleSoft }}
                >
                  <Microscope
                    className="h-5 w-5"
                    style={{ color: BRAND.purpleDark }}
                  />
                </div>

                <div className="text-3xl" style={{ fontWeight: 300 }}>
                  {totalPublications}
                </div>

                <div className="mt-1 text-sm" style={{ color: BRAND.muted }}>
                  papers listed
                </div>
              </div>

              <div
                className={`${cardBase} p-5 shadow-sm`}
                style={{
                  borderColor: BRAND.orangeBorder,
                  backgroundColor: 'rgba(255,255,255,0.84)',
                }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: BRAND.orangeSoft }}
                >
                  <Layers3
                    className="h-5 w-5"
                    style={{ color: BRAND.orangeDark }}
                  />
                </div>

                <div className="text-3xl" style={{ fontWeight: 300 }}>
                  {totalJournals}
                </div>

                <div className="mt-1 text-sm" style={{ color: BRAND.muted }}>
                  publication sources
                </div>
              </div>

              <div
                className={`${cardBase} p-5 shadow-sm`}
                style={{
                  borderColor: 'rgba(47,39,56,0.10)',
                  backgroundColor: 'rgba(255,255,255,0.84)',
                }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(47,39,56,0.06)' }}
                >
                  <Sparkles className="h-5 w-5" style={{ color: BRAND.ink }} />
                </div>

                <div className="text-3xl" style={{ fontWeight: 300 }}>
                  {yearRange}
                </div>

                <div className="mt-1 text-sm" style={{ color: BRAND.muted }}>
                  publication range
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main featured publication */}
      {mainPublication && (
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-6xl">
            <div
              className="rounded-[2rem] border p-6 shadow-sm md:p-7"
              style={{
                borderColor: BRAND.purpleBorder,
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(153,134,191,0.10) 55%, rgba(206,127,87,0.08) 100%)',
              }}
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
                <div>
                  <div
                    className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor: BRAND.purpleBorder,
                      background: BRAND.purpleSoft,
                      color: BRAND.purpleDark,
                    }}
                  >
                    <Star className="h-4 w-4" />
                    <span>Main publication</span>
                  </div>

                  <h2
                    className="text-3xl leading-tight md:text-4xl"
                    style={{ fontWeight: 300 }}
                  >
                    Highlighted EpiScalp paper
                  </h2>

                  <p
                    className="mt-4 text-base leading-7"
                    style={{ color: BRAND.muted, fontWeight: 300 }}
                  >
                    Our retrospective EpiScalp study demonstrates that our unique
                    dynamic network model features can support epilepsy diagnosis
                    by enabling accurate epilepsy classification (AUC 0.94) in
                    patients with no visible epileptiform discharges.
                  </p>
                </div>

                <PublicationCard pub={mainPublication} featured />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product publication highlights */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.orangeDark, fontWeight: 600 }}
            >
              Product paper highlights
            </div>

            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
              Publications by product
            </h2>

            <p
              className="mt-2 max-w-3xl text-base leading-7"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              These highlighted papers replace the previous publication set and
              should be used for the EpiScalp and EZTrack product evidence
              sections.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <ProductPaperList
              title="EpiScalp"
              subtitle="Papers supporting source-sink connectivity, interictal EEG biomarkers, and diagnostic modeling."
              accent="purple"
              titles={episcalpPublicationTitles}
              icon={
                <Brain
                  className="h-5 w-5"
                  style={{ color: BRAND.purpleDark }}
                />
              }
            />

            <ProductPaperList
              title="EZTrack"
              subtitle="Papers supporting neural fragility, epileptogenic zone localization, and seizure onset zone assessment."
              accent="orange"
              titles={eztrackPublicationTitles}
              icon={
                <Activity
                  className="h-5 w-5"
                  style={{ color: BRAND.orangeDark }}
                />
              }
            />
          </div>
        </div>
      </section>

      {/* Featured publications */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.orangeDark, fontWeight: 600 }}
              >
                Featured
              </div>

              <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
                Key papers
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredPubs.map((pub) => (
              <PublicationCard
                key={`${pub.title}-${pub.year}-featured`}
                pub={pub}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section
        className="sticky z-40 border-y px-6 py-4 backdrop-blur md:top-20"
        style={{
          borderColor: BRAND.line,
          backgroundColor: 'rgba(252, 250, 248, 0.88)',
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-3xl border p-4 shadow-sm"
            style={{
              borderColor: BRAND.line,
              backgroundColor: 'rgba(255,255,255,0.78)',
            }}
          >
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" style={{ color: BRAND.ink }} />

                <h3 className="text-sm font-semibold" style={{ color: BRAND.ink }}>
                  Filter papers
                </h3>
              </div>

              <div className="flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:items-center xl:justify-end xl:gap-6">
                {/* Year filter */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span
                    className="min-w-fit text-sm font-semibold"
                    style={{ color: BRAND.ink }}
                  >
                    Year
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {yearOptions.map((year) => {
                      const active = activeYear === year;

                      return (
                        <button
                          key={year}
                          onClick={() => setActiveYear(year)}
                          className={filterButtonBase}
                          style={{
                            background: active ? BRAND.purple : 'white',
                            color: active ? 'white' : BRAND.ink,
                            borderColor: active ? BRAND.purple : BRAND.line,
                            boxShadow: active
                              ? '0 8px 24px rgba(153, 134, 191, 0.20)'
                              : 'none',
                          }}
                        >
                          {year}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Type filter */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span
                    className="min-w-fit text-sm font-semibold"
                    style={{ color: BRAND.ink }}
                  >
                    Type
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {typeOptions.map((type) => {
                      const active = activeType === type;

                      return (
                        <button
                          key={type}
                          onClick={() => setActiveType(type)}
                          className={filterButtonBase}
                          style={{
                            background:
                              active && type === 'Conference'
                                ? BRAND.orange
                                : active
                                  ? BRAND.purple
                                  : 'white',
                            color: active ? 'white' : BRAND.ink,
                            borderColor:
                              active && type === 'Conference'
                                ? BRAND.orange
                                : active
                                  ? BRAND.purple
                                  : BRAND.line,
                            boxShadow: active
                              ? '0 8px 24px rgba(47,39,56,0.10)'
                              : 'none',
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Product filter */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span
                    className="min-w-fit text-sm font-semibold"
                    style={{ color: BRAND.ink }}
                  >
                    Product
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {productOptions.map((product) => {
                      const active = activeProduct === product;

                      let activeBg = BRAND.purple;
                      let activeBorder = BRAND.purple;

                      if (product === 'EZTrack') {
                        activeBg = BRAND.orange;
                        activeBorder = BRAND.orange;
                      } else if (product === 'Foundational') {
                        activeBg = BRAND.ink;
                        activeBorder = BRAND.ink;
                      }

                      return (
                        <button
                          key={product}
                          onClick={() => setActiveProduct(product)}
                          className={filterButtonBase}
                          style={{
                            background: active ? activeBg : 'white',
                            color: active ? 'white' : BRAND.ink,
                            borderColor: active ? activeBorder : BRAND.line,
                            boxShadow: active
                              ? '0 8px 24px rgba(47,39,56,0.10)'
                              : 'none',
                          }}
                        >
                          {product}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications list */}
      <section className="px-6 py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.purpleDark, fontWeight: 600 }}
              >
                All Papers
              </div>

              <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
                Browse papers
              </h2>
            </div>

            <div className="hidden text-sm sm:block" style={{ color: BRAND.muted }}>
              {filteredPubs.length} result{filteredPubs.length === 1 ? '' : 's'}
            </div>
          </div>

          <div className="space-y-3">
            {filteredPubs.map((pub) => (
              <PublicationCard key={`${pub.title}-${pub.year}`} pub={pub} />
            ))}

            {filteredPubs.length === 0 && (
              <div
                className="rounded-3xl border px-6 py-14 text-center"
                style={{
                  borderColor: BRAND.line,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <p
                  className="text-lg"
                  style={{ color: BRAND.muted, fontWeight: 300 }}
                >
                  No papers found for the selected filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}