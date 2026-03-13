import { useMemo, useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Filter,
  Sparkles,
  Microscope,
  Layers3,
} from 'lucide-react';

/**
 * Brand colors from your notes:
 * Purple: #9986bf
 * Orange: #ce7f57
 *
 * This version:
 * - matches the softer rounded look of the other pages
 * - removes the emerald/teal palette
 * - reduces white space
 * - adds product tags (EZTrack / EpiScalp / Foundational)
 * - formats items more like citations
 * - adds a featured / pinned publication section
 * - keeps sticky filters but makes them visually lighter
 */

type ProductTag = 'EpiScalp' | 'EZTrack' | 'Foundational';
type PublicationCategory = 'Peer-Reviewed' | 'Conference';

type Publication = {
  year: number;
  title: string;
  citation: string;
  journal: string;
  category: PublicationCategory;
  href: string;
  tags: ProductTag[];
  featured?: boolean;
  blurb?: string;
};

const publications: Publication[] = [
  {
    year: 2022,
    title:
      'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
    citation:
      'Gunnarsdottir KM, Li A, Smith RJ, Kang JY, Korzeniewska A, Crone NE, Rouse AG, et al.',
    journal: 'Brain. 2022;145(11):3901-3915.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1093/brain/awac300',
    tags: ['EZTrack', 'Foundational'],
    featured: true,
    blurb:
      'Introduces source-sink connectivity as an interictal EEG marker for seizure localization.',
  },
  {
    year: 2021,
    title: 'Neural fragility as an EEG marker of the seizure onset zone',
    citation:
      'Li A, Huynh C, Fitzgerald Z, Cajigas I, Brusko D, Jagid J, Claudio AO, Kanner AM, Hopp J, Chen S, Haagensen J, Johnson E, Anderson W, Crone N, Inati S, Zaghloul KA, Bulacio J, González-Martínez J, Sarma SV.',
    journal: 'Nature Neuroscience. 2021;24(10):1465-1474.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1038/s41593-021-00901-w',
    tags: ['EZTrack', 'Foundational'],
    featured: true,
    blurb:
      'A foundational publication supporting neural fragility as a marker of seizure onset zones.',
  },
  {
    year: 2017,
    title:
      'Linear time-varying model characterizes invasive EEG signals generated from complex epileptic networks',
    citation:
      'Li A, Gunnarsdottir KM, Inati S, Zaghloul K, Gale J, Bulacio J, Martinez-Gonzalez J, Sarma SV.',
    journal:
      '2017 39th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC). 2017:2802-2805.',
    category: 'Conference',
    href: 'https://doi.org/10.1109/EMBC.2017.8037439',
    tags: ['Foundational'],
    blurb:
      'Describes the modeling approach that underlies later fragility and source-sink work.',
  },
  {
    year: 2014,
    title:
      'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
    citation: 'Sritharan D, Sarma SV.',
    journal: 'Neural Computation. 2014;26(10):2294-2327.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1162/NECO_a_00644',
    tags: ['Foundational'],
    blurb:
      'An early foundational paper on fragility in epileptic neural networks.',
  },
];

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

  const featuredPubs = useMemo(() => {
    return publications.filter((pub) => pub.featured);
  }, []);

  const totalPublications = publications.length;
  const totalJournals = new Set(
    publications.map((pub) =>
      pub.journal.includes('. ')
        ? pub.journal.split('. ')[0].trim()
        : pub.journal.trim()
    )
  ).size;
  const yearRange = `${Math.min(...publications.map((p) => p.year))}–${Math.max(
    ...publications.map((p) => p.year)
  )}`;

  const filterButtonBase =
    'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200';
  const cardBase =
    'rounded-3xl border bg-white transition-all duration-300';

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
      {/* =========================================================
          HERO
          - More visually aligned with the newer About page
          - less empty space
      ========================================================== */}
      <section className="relative overflow-hidden px-6 pt-14 pb-12 md:pt-16 md:pb-14">
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
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
                Scientific publications
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
                Peer-reviewed and foundational research supporting Neurologic
                Solutions’ work in quantitative EEG analytics, seizure
                localization, and diagnostic innovation.
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
                  publications listed
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
                  journals / venues
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
                  current range
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED / PINNED
          - gives the page more hierarchy
          - matches feedback about pinning important items
      ========================================================== */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.orangeDark, fontWeight: 600 }}
              >
                Featured
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
                Key publications
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredPubs.map((pub) => {
              const typeStyles = getTypeStyles(pub.category);

              return (
                <article
                  key={`${pub.title}-${pub.year}-featured`}
                  className={`${cardBase} h-full p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg`}
                  style={{
                    borderColor: BRAND.line,
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(153,134,191,0.04) 100%)',
                  }}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full border px-3 py-1 text-xs font-semibold"
                      style={{
                        background: typeStyles.bg,
                        borderColor: typeStyles.border,
                        color: typeStyles.color,
                      }}
                    >
                      {pub.category}
                    </span>

                    <span
                      className="rounded-full border px-3 py-1 text-xs font-semibold"
                      style={{
                        background: 'rgba(47,39,56,0.05)',
                        borderColor: 'rgba(47,39,56,0.10)',
                        color: BRAND.ink,
                      }}
                    >
                      {pub.year}
                    </span>

                    {pub.tags.map((tag) => {
                      const styles = getTagStyles(tag);
                      return (
                        <span
                          key={`${pub.title}-${tag}`}
                          className="rounded-full border px-3 py-1 text-xs font-semibold"
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

                  <h3
                    className="text-2xl leading-tight"
                    style={{ fontWeight: 300 }}
                  >
                    {pub.title}
                  </h3>

                  {pub.blurb && (
                    <p
                      className="mt-4 text-base leading-7"
                      style={{ color: BRAND.muted, fontWeight: 300 }}
                    >
                      {pub.blurb}
                    </p>
                  )}

                  <p
                    className="mt-5 text-sm leading-6"
                    style={{ color: BRAND.muted }}
                  >
                    {pub.citation}
                  </p>

                  <p
                    className="mt-2 text-sm italic leading-6"
                    style={{ color: BRAND.muted }}
                  >
                    {pub.journal}
                  </p>

                  <div className="mt-6">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        borderColor: BRAND.purpleBorder,
                        background: BRAND.purpleSoft,
                        color: BRAND.purpleDark,
                      }}
                    >
                      <span>View publication</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTERS
          - still sticky, but visually cleaner
          - includes year, type, and product tagging
      ========================================================== */}
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
                  Filter publications
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

      {/* =========================================================
          PUBLICATIONS LIST
          - cleaner card hierarchy
          - citation format
          - better spacing
      ========================================================== */}
      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: BRAND.purpleDark, fontWeight: 600 }}
              >
                All Publications
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
                Browse research
              </h2>
            </div>

            <div className="hidden sm:block text-sm" style={{ color: BRAND.muted }}>
              {filteredPubs.length} result{filteredPubs.length === 1 ? '' : 's'}
            </div>
          </div>

          <div className="space-y-4">
            {filteredPubs.map((pub) => {
              const typeStyles = getTypeStyles(pub.category);

              return (
                <article
                  key={`${pub.title}-${pub.year}`}
                  className={`${cardBase} group p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md md:p-7`}
                  style={{
                    borderColor: BRAND.line,
                    backgroundColor: BRAND.card,
                  }}
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-full border px-3 py-1 text-xs font-semibold"
                          style={{
                            background: typeStyles.bg,
                            borderColor: typeStyles.border,
                            color: typeStyles.color,
                          }}
                        >
                          {pub.category}
                        </span>

                        <span
                          className="rounded-full border px-3 py-1 text-xs font-semibold"
                          style={{
                            background: 'rgba(47,39,56,0.05)',
                            borderColor: 'rgba(47,39,56,0.10)',
                            color: BRAND.ink,
                          }}
                        >
                          {pub.year}
                        </span>

                        {pub.tags.map((tag) => {
                          const styles = getTagStyles(tag);
                          return (
                            <span
                              key={`${pub.title}-${tag}-list`}
                              className="rounded-full border px-3 py-1 text-xs font-semibold"
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

                      <h3
                        className="text-xl leading-tight transition-colors md:text-2xl"
                        style={{ fontWeight: 300 }}
                      >
                        {pub.title}
                      </h3>

                      <p
                        className="mt-4 text-sm leading-6"
                        style={{ color: BRAND.muted }}
                      >
                        {pub.citation}
                      </p>

                      <p
                        className="mt-2 text-sm italic leading-6"
                        style={{ color: BRAND.muted }}
                      >
                        {pub.journal}
                      </p>

                      {pub.blurb && (
                        <p
                          className="mt-4 max-w-3xl text-sm leading-7"
                          style={{ color: BRAND.muted, fontWeight: 300 }}
                        >
                          {pub.blurb}
                        </p>
                      )}
                    </div>

                    <div className="md:ml-6 md:shrink-0">
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          borderColor: BRAND.line,
                          backgroundColor: 'white',
                          color: BRAND.ink,
                        }}
                        title={`Open publication: ${pub.title}`}
                      >
                        <span>View</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}

            {filteredPubs.length === 0 && (
              <div
                className="rounded-3xl border px-6 py-14 text-center"
                style={{
                  borderColor: BRAND.line,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <p className="text-lg" style={{ color: BRAND.muted, fontWeight: 300 }}>
                  No publications found for the selected filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}