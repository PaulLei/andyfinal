import { Newspaper, ArrowRight, ExternalLink } from 'lucide-react';
import { newsItems } from '../data/news';

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const B = {
  purple:       '#9986bf',
  purpleDark:   '#7e6aa7',
  purpleSoft:   'rgba(153,134,191,0.12)',
  purpleBorder: 'rgba(153,134,191,0.28)',
  orange:       '#ce7f57',
  orangeDark:   '#b96d46',
  orangeSoft:   'rgba(206,127,87,0.12)',
  orangeBorder: 'rgba(206,127,87,0.28)',
  ink:          '#2f2738',
  muted:        '#6e647b',
  line:         'rgba(47,39,56,0.10)',
  bg:           '#fcfaf8',
  card:         '#ffffff',
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PressSection() {
  const latestItems = newsItems
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section
      className="py-20 px-6 sm:py-24"
      style={{ backgroundColor: B.bg, color: B.ink }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.22em] mb-4"
              style={{ color: B.purpleDark, fontWeight: 600 }}
            >
              Media &amp; Press
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-[1.0]"
              style={{ fontWeight: 300 }}
            >
              In the{' '}
              <span style={{ color: B.purpleDark, fontStyle: 'italic' }}>
                press
              </span>
            </h2>
          </div>

          <a
            href="/blog-news"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm shrink-0 transition-colors hover:bg-black/5"
            style={{ borderColor: B.purpleBorder, color: B.purpleDark }}
          >
            <Newspaper className="h-4 w-4" />
            All news &amp; press
          </a>
        </div>

        {/* ── Cards ────────────────────────────────────────────────────────── */}
        <div className="grid gap-4 md:grid-cols-3">
          {latestItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[1.5rem] border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                borderColor: index === 0 ? B.purpleBorder : B.line,
                backgroundColor: index === 0 ? B.purpleSoft : B.card,
                boxShadow: index === 0 ? `inset 3px 0 0 ${B.purpleDark}` : undefined,
              }}
            >
              {/* Date */}
              <p
                className="text-[11px] uppercase tracking-[0.18em] mb-4"
                style={{ color: B.orangeDark, fontWeight: 600 }}
              >
                {formatDate(item.date)}
              </p>

              {/* Title */}
              <h3
                className="flex-1 text-base leading-7 mb-5"
                style={{ color: B.ink, fontWeight: 400 }}
              >
                {item.title}
              </h3>

              {/* Link indicator */}
              <div
                className="flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: B.purpleDark }}
              >
                <ExternalLink className="h-3 w-3" />
                Read article
              </div>
            </a>
          ))}
        </div>

        {/* ── View all CTA ─────────────────────────────────────────────────── */}
        <div className="mt-8 flex justify-center">
          <a
            href="/blog-news"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{ backgroundColor: B.purpleDark, color: '#fff' }}
          >
            <Newspaper className="h-4 w-4" />
            View all news &amp; press
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}