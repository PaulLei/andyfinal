import { ArrowLeft, Calendar, ArrowUpRight } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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

  // Find the news item by title (URL-encoded)
  const newsItem = newsItems.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === id?.toLowerCase()
  );

  if (!newsItem || !newsItem.internalReport) {
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
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => navigate('/blog-news')}
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-transform hover:-translate-x-1"
            style={{ color: BRAND.purpleDark }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </button>
          <h1 className="text-4xl font-bold mb-4">Report Not Found</h1>
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
      className="min-h-screen pt-24"
      style={{
        backgroundColor: BRAND.bg,
        color: BRAND.ink,
        fontFamily:
          '"Typo Grotesk Rounded", "Typo Grotesk Rounded Light", Arial, sans-serif',
      }}
    >
      {/* Back Button */}
      <div className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
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
      <section className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
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

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            style={{ fontWeight: 300 }}
          >
            {newsItem.title}
          </h1>

          {/* Excerpt */}
          <p
            className="text-xl leading-8 mb-8"
            style={{ color: BRAND.muted, fontWeight: 300 }}
          >
            {newsItem.excerpt}
          </p>

          {/* Image */}
          {newsItem.image && (
            <div
              className="rounded-2xl overflow-hidden mb-12 h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('${newsItem.image}')`,
                border: `1px solid ${BRAND.line}`,
              }}
            />
          )}
        </div>
      </section>

      {/* Report Content */}
      <section className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none rounded-2xl border p-8"
            style={{
              borderColor: BRAND.line,
              backgroundColor: BRAND.card,
              color: BRAND.ink,
            }}
          >
            {/* Parse markdown-style formatting */}
            {newsItem.internalReport.split('\n\n').map((paragraph, idx) => {
              // Handle headers (lines starting with #)
              if (paragraph.startsWith('# ')) {
                return (
                  <h2
                    key={idx}
                    className="text-3xl font-semibold mt-8 mb-4"
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
                    className="text-2xl font-semibold mt-6 mb-3"
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
                    className="text-xl font-semibold mt-4 mb-2"
                    style={{ color: BRAND.orange }}
                  >
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }
              // Handle lists
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter((line) => line.startsWith('- '));
                return (
                  <ul key={idx} className="list-disc list-inside my-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} style={{ color: BRAND.ink }}>
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Regular paragraph
              return (
                <p
                  key={idx}
                  className="text-lg leading-8 mb-4"
                  style={{ color: BRAND.ink, fontWeight: 300 }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* External Link (if available) */}
          {newsItem.link && newsItem.link.trim() && !newsItem.link.includes('example.com') && (
            <div className="mt-8">
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all hover:shadow-lg"
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
