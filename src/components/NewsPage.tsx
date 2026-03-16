import { Calendar, ArrowRight, Search, Newspaper, Filter } from 'lucide-react';
import { useMemo, useState } from 'react';
import { newsItems, NewsCategory } from '../data/news';

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


const categories: Array<'All' | NewsCategory> = [
  'All',
  'Product',
  'Company',
  'Funding',
  'Awards',
  'Regulatory',
  'Media',
];

function parseDate(dateString: string) {
  return new Date(dateString);
}

function getCategoryStyles(category: NewsCategory) {
  switch (category) {
    case 'Product':
      return {
        bg: BRAND.purpleSoft,
        border: BRAND.purpleBorder,
        text: BRAND.purpleDark,
      };
    case 'Funding':
      return {
        bg: BRAND.orangeSoft,
        border: BRAND.orangeBorder,
        text: BRAND.orangeDark,
      };
    case 'Awards':
      return {
        bg: 'rgba(206, 127, 87, 0.10)',
        border: BRAND.orangeBorder,
        text: BRAND.orangeDark,
      };
    case 'Regulatory':
      return {
        bg: 'rgba(153, 134, 191, 0.10)',
        border: BRAND.purpleBorder,
        text: BRAND.purpleDark,
      };
    case 'Company':
    case 'Media':
    default:
      return {
        bg: 'rgba(47, 39, 56, 0.06)',
        border: 'rgba(47, 39, 56, 0.10)',
        text: BRAND.ink,
      };
  }
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | NewsCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    return newsItems
      .filter((item) => {
        const matchesCategory =
          activeCategory === 'All' || item.category === activeCategory;

        const q = searchTerm.trim().toLowerCase();
        const matchesSearch =
          q.length === 0 ||
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .slice()
      .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  }, [activeCategory, searchTerm]);

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
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-14 pb-10 md:pt-16 md:pb-12">
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
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background: BRAND.purpleSoft,
                  border: `1px solid ${BRAND.purpleBorder}`,
                }}
              >
                <Newspaper
                  className="h-5 w-5"
                  style={{ color: BRAND.purpleDark }}
                />
              </div>

              <span
                className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: BRAND.purpleDark }}
              >
                News & Updates
              </span>
            </div>

            <h1
              className="text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ fontWeight: 300 }}
            >
              Latest from
              <span
                className="block"
                style={{ color: BRAND.purpleDark, fontStyle: 'italic' }}
              >
                Neurologic Solutions
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-lg leading-8"
              style={{ color: BRAND.muted, fontWeight: 300 }}
            >
              Product updates, funding news, company milestones, media coverage,
              and announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Filter */}
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
                  Filter news
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-4 xl:max-w-5xl xl:flex-row xl:items-center xl:justify-end">
                <div className="relative w-full xl:max-w-sm">
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
                    style={{ color: BRAND.muted }}
                  />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-full border bg-white py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200"
                    style={{
                      borderColor: BRAND.line,
                      color: BRAND.ink,
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const active = activeCategory === category;

                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: active
                            ? category === 'Funding'
                              ? BRAND.orange
                              : BRAND.purple
                            : 'white',
                          color: active ? 'white' : BRAND.ink,
                          borderColor: active
                            ? category === 'Funding'
                              ? BRAND.orange
                              : BRAND.purple
                            : BRAND.line,
                          boxShadow: active
                            ? '0 8px 24px rgba(47,39,56,0.10)'
                            : 'none',
                        }}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: BRAND.purpleDark, fontWeight: 600 }}
            >
              All News
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 300 }}>
              Browse updates
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredNews.map((item) => {
              const categoryStyles = getCategoryStyles(item.category);

              return (
                <a
                  key={`${item.title}-${item.date}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article
                    className="flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ borderColor: BRAND.line }}
                  >
                    <div className={`h-48 w-full ${item.image}`} />

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <span
                          className="rounded-full border px-3 py-1 text-xs font-semibold"
                          style={{
                            background: categoryStyles.bg,
                            borderColor: categoryStyles.border,
                            color: categoryStyles.text,
                          }}
                        >
                          {item.category}
                        </span>

                        <div
                          className="inline-flex items-center gap-1 text-xs"
                          style={{ color: BRAND.muted }}
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <h3
                        className="text-xl leading-tight transition-colors duration-300"
                        style={{ fontWeight: 300 }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-4 flex-1 text-sm leading-7"
                        style={{ color: BRAND.muted, fontWeight: 300 }}
                      >
                        {item.excerpt}
                      </p>

                      <div
                        className="mt-5 inline-flex items-center gap-2 text-sm transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: BRAND.purpleDark }}
                      >
                        <span>Read more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </a>
              );
            })}
          </div>

          {filteredNews.length === 0 && (
            <div
              className="rounded-3xl border px-6 py-14 text-center"
              style={{
                borderColor: BRAND.line,
                backgroundColor: 'rgba(255,255,255,0.7)',
              }}
            >
              <p className="text-lg" style={{ color: BRAND.muted, fontWeight: 300 }}>
                No news found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}