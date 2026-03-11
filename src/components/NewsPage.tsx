import { Calendar, ArrowRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

const newsItems = [
  {
    date: '1 April 2021',
    category: 'Regulatory',
    title:
      'Neurologic Solutions Granted FDA 510K Clearance for its Seizure Onset Zone Detection Software',
    excerpt:
      'Neurologic Solutions receives FDA 510(k) clearance for its seizure onset zone detection software, enabling clinical use.',
    image: 'bg-gradient-to-br from-blue-500 to-blue-700',
    link: 'https://neurologicsolutions.net/neurologic-solutions-granted-fda-510k-clearance-for-its-seizure-onset-zone-detection-software/',
  },
  {
    date: '17 June 2021',
    category: 'Funding + Grants',
    title:
      'Neurologic Solutions Awarded A Phase 1 Small Business Innovation Research Grant from the National Science Foundation',
    excerpt:
      'The company secures an NSF Phase 1 SBIR grant to advance its EEG analytics and seizure detection research.',
    image: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    link: 'https://time.com/collection/best-inventions-2024/7083065/oura-ring-gen3/',
  },
  {
    date: '31 August 2021',
    category: 'Awards',
    title: 'Sarma named a recipient of Thalheimer Fund Grant',
    excerpt:
      'Sri Sarma receives the Thalheimer Fund Grant supporting translational neuroscience research.',
    image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    link: 'https://www.bme.jhu.edu/news-events/news/sarma-named-a-recipient-of-thalheimer-fund-grant/',
  },
  {
    date: '1 April 2021',
    category: 'Awards',
    title: 'Sri Sarma wins inaugural Pitch It On! competition',
    excerpt:
      'Sri Sarma wins the inaugural Pitch It On! competition for innovation and commercialization leadership.',
    image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    link: 'https://hub.jhu.edu/2020/11/03/sri-sarma-wins-accelherator-pitch-competition/',
  },
  {
    date: '15 June 2024',
    category: 'Company',
    title: 'Neurologic Solutions Hires Andrew Gotshalk',
    excerpt:
      'Neurologic Solutions expands its leadership team with the hiring of Andrew Gotshalk.',
    image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    link: 'https://www.linkedin.com/posts/andrew-gotshalk-7814433_newbeginnings-neurologicsolutions-leadership-activity-7229653386155941888-701y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM',
  },
  {
    date: '15 August 2024',
    category: 'Funding + Grants',
    title: 'Neurologic Solutions Receives the SBIR Phase 2 Award',
    excerpt:
      'Neurologic Solutions receives a Phase 2 SBIR award to scale development and validation of its EEG technology.',
    image: 'bg-gradient-to-br from-green-400 to-green-600',
    link: 'https://www.sbir.gov/awards/213755',
  },
  {
    date: '15 September 2024',
    category: 'Company',
    title: 'Neurologic Solutions Hires Mark Hays and Golnoosh Kamali',
    excerpt:
      'The company strengthens its team with the addition of Mark Hays and Golnoosh Kamali.',
    image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    link: 'https://www.linkedin.com/posts/golnoosh-kamali_starting-off-the-new-year-with-a-professional-activity-7280311008026353664-cpr2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM',
  },
  {
    date: '3 November 2024',
    category: 'Awards',
    title: 'Sri Sarma wins inaugural Pitch It On! competition',
    excerpt:
      'Sri Sarma wins the inaugural Pitch It On! competition, recognizing innovation and entrepreneurship.',
    image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    link: 'https://hub.jhu.edu/2020/11/03/sri-sarma-wins-accelherator-pitch-competition/',
  },
  {
    date: '22 January 2025',
    category: 'Product',
    title: 'New epilepsy tool could cut misdiagnoses by nearly 70% using routine EEGs',
    excerpt:
      'Johns Hopkins research shows EpiScalp significantly reduces epilepsy misdiagnosis using routine EEG data.',
    image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    link: 'https://hub.jhu.edu/2025/01/22/episcalp-epilepsy-diagnosis/',
  },
  {
    date: '25 September 2025',
    category: 'Media',
    title: 'Baltimore biotech researchers court investors at Johns Hopkins showcase',
    excerpt:
      'Neurologic Solutions presents its technology to investors at the Johns Hopkins innovation showcase.',
    image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    link: 'https://technical.ly/entrepreneurship/johns-hopkins-innovation-summit-2025/?nab=1',
  },
];

const categories = [
  'All',
  'Product',
  'Company',
  'Funding + Grants',
  'Awards',
  'Regulatory',
  'Media',
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    return newsItems
      .filter((item) => {
        const matchesCategory =
          activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .slice()
      .reverse();
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <section className="px-6 pt-10 pb-10 md:pt-12 md:pb-14 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
            News & Updates
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-3 mb-4 leading-tight">
            Latest from Neurologic Solutions
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Stay informed about our latest product, funding, team, and company
            developments.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <a
                key={`${item.title}-${item.date}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className={`h-48 ${item.image}`}></div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3 gap-3">
                      <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500 shrink-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">{item.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-light mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light text-sm flex-1 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-light group-hover:translate-x-1 transition-transform">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 font-light text-lg">
                No news found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Subscribe to our newsletter for the latest news and announcements.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-light">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}