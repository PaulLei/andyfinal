import { ArrowLeft, Calendar, ArrowUpRight } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsItems } from '../data/news';

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

function getCategoryStyles(category: string) {
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

export default function NewsReportPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const newsItem = newsItems.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === id?.toLowerCase()
  );

  if (!newsItem || !newsItem.internalReport) {
    return (
      <div
        className="min-h-screen pt-20"
        style={{
          backgroundColor: BRAND.bg,
          color: BRAND.ink,
          fontFamily:
            '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-8">
          <button
            onClick={() => navigate('/blog-news')}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium transition-transform hover:-translate-x-1"
            style={{ color: BRAND.purpleDark }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </button>

          <h1 className="mb-3 text-4xl font-bold">Report Not Found</h1>

          <p style={{ color: BRAND.muted }}>
            This internal report is not available. Please return to the news page.
          </p>
        </div>
      </div>
    );
  }

  const categoryStyles = getCategoryStyles(newsItem.category);

  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* Back Button */}
      <div className="px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() => navigate('/blog-news')}
            className="inline-flex items-center gap-2 text-sm font-medium transition-transform hover:-translate-x-1"
            style={{ color: BRAND.purpleDark }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </button>
        </div>
      </div>

      {/* Header */}
      <section className="px-6 py-2">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                background: categoryStyles.bg,
                borderColor: categoryStyles.border,
                color: categoryStyles.text,
              }}
            >
              {newsItem.category}
            </span>

            <div
              className="inline-flex items-center gap-1 text-xs"
              style={{ color: BRAND.muted }}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>{newsItem.date}</span>
            </div>
          </div>

          <h1
            className="mb-5 text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{ fontWeight: 300 }}
          >
            {newsItem.title}
          </h1>

          <p
            className="mb-6 text-lg leading-7 md:text-xl md:leading-8"
            style={{ color: BRAND.muted, fontWeight: 300 }}
          >
            {newsItem.excerpt}
          </p>

          {newsItem.image && (
            <div
              className="mb-6 h-64 overflow-hidden rounded-2xl bg-cover bg-center md:h-80"
              style={{
                backgroundImage: `url('${newsItem.image}')`,
                border: `1px solid ${BRAND.line}`,
              }}
            />
          )}
        </div>
      </section>

      {/* Report Content */}
      <section className="px-6 py-4 pb-10">
        <div className="mx-auto max-w-4xl">
          <div
            className="prose prose-lg max-w-none rounded-2xl border p-5 md:p-6"
            style={{
              borderColor: BRAND.line,
              backgroundColor: BRAND.card,
              color: BRAND.ink,
            }}
          >
            {newsItem.internalReport.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h2
                    key={idx}
                    className="mb-3 mt-5 text-3xl font-semibold first:mt-0"
                    style={{ color: BRAND.purpleDark }}
                  >
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              }

              if (paragraph.startsWith('## ')) {
                return (
                  <h3
                    key={idx}
                    className="mb-2 mt-5 text-2xl font-semibold first:mt-0"
                    style={{ color: BRAND.purpleDark }}
                  >
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }

              if (paragraph.startsWith('### ')) {
                return (
                  <h4
                    key={idx}
                    className="mb-2 mt-4 text-xl font-semibold first:mt-0"
                    style={{ color: BRAND.orange }}
                  >
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }

              if (paragraph.startsWith('- ')) {
                const items = paragraph
                  .split('\n')
                  .filter((line) => line.startsWith('- '));

                return (
                  <ul key={idx} className="my-3 list-inside list-disc space-y-1">
                    {items.map((item, i) => (
                      <li key={i} style={{ color: BRAND.ink }}>
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={idx}
                  className="mb-3 text-base leading-7 md:text-lg md:leading-8"
                  style={{ color: BRAND.ink, fontWeight: 300 }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {newsItem.link && newsItem.link.trim() && !newsItem.link.includes('example.com') && (
            <div className="mt-5">
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:shadow-lg"
                style={{
                  backgroundColor: BRAND.purple,
                  color: 'white',
                }}
              >
                <span>View Original Source</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}