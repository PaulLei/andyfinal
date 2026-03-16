import { Newspaper, ArrowRight, ExternalLink } from 'lucide-react';
import { newsItems } from '../data/news';

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
  const lastThreeItems = newsItems.slice(-3);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Newspaper className="w-6 h-6 text-blue-700" />
            <h2 className="text-3xl font-light text-gray-900">
              In the <span className="text-blue-700"> <strong>Press</strong> </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lastThreeItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="
                  bg-[#F7F9FC]
                  rounded-2xl
                  p-8
                  border-l-4
                  border-blue-700
                  hover:bg-[#EEF3F8]
                  transition-colors
                  duration-300
                "
              >
                <p className="text-sm text-orange-600 mb-4 uppercase tracking-wide">
                  {item.date}
                </p>
                <h3 className="text-xl font-light leading-relaxed text-gray-900">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
         <div className="text-center mt-12">
          <a
            href="./blog-news"
            className="text-xl text-blue-700 hover:text-orange-600 underline transition-colors duration-300"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
