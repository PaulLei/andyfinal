import { BookOpen, ExternalLink, Filter, Download } from 'lucide-react';
import { useMemo, useState } from 'react';

const publications = [
  {
    year: 2014,
    title:
      'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
    authors: 'Sridevi S.',
    journal: 'Neural Computation',
    category: 'Peer-Reviewed',
    doi: 'https://direct.mit.edu/neco/article-abstract/26/10/2294/8025',
  },
  {
    year: 2017,
    title:
      'Linear time-varying model characterizes invasive EEG signals generated from complex epileptic networks',
    authors: 'Adam L.',
    journal: 'IEEE Transactions on Biomedical Engineering',
    category: 'Peer-Reviewed',
    doi: 'https://ieeexplore.ieee.org/document/8037439',
  },
  {
    year: 2021,
    title: 'Neural fragility as an EEG marker of the seizure onset zone',
    authors: 'Adam L.',
    journal: 'Nature Neuroscience',
    category: 'Peer-Reviewed',
    doi: 'https://www.nature.com/articles/s41593-021-00901-w.epdf',
  },
  {
    year: 2022,
    title:
      'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
    authors: 'Kristin M.',
    journal: 'Brain',
    category: 'Peer-Reviewed',
    doi: 'https://academic.oup.com/brain/article/145/11/3901/6835751?login=false',
  },
];

const publicationYears = [
  'All',
  ...Array.from(new Set(publications.map((pub) => pub.year.toString())))
    .sort((a, b) => Number(b) - Number(a)),
];

const categories = ['All', 'Peer-Reviewed', 'White Paper'];

export default function PublicationsPage() {
  const [activeYear, setActiveYear] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPubs = useMemo(() => {
    return publications
      .filter((pub) => {
        const yearMatch =
          activeYear === 'All' || pub.year.toString() === activeYear;
        const catMatch =
          activeCategory === 'All' || pub.category === activeCategory;
        return yearMatch && catMatch;
      })
      .slice()
      .sort((a, b) => b.year - a.year);
  }, [activeYear, activeCategory]);

  const getYearButtonClasses = (year: string) => {
    const active = activeYear === year;

    if (year === 'All') {
      return active
        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
        : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
    }

    if (year === '2022') {
      return active
        ? 'bg-slate-600 text-white border-slate-600 shadow-sm'
        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';
    }

    if (year === '2021') {
      return active
        ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
        : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100';
    }

    if (year === '2017') {
      return active
        ? 'bg-violet-600 text-white border-violet-600 shadow-sm'
        : 'bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100';
    }

    if (year === '2014') {
      return active
        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
        : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
    }

    return active
      ? 'bg-gray-700 text-white border-gray-700 shadow-sm'
      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
  };

  const getCategoryButtonClasses = (category: string) => {
    const active = activeCategory === category;

    if (category === 'All') {
      return active
        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
        : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
    }

    if (category === 'Peer-Reviewed') {
      return active
        ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
        : 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100';
    }

    return active
      ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
      : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100';
  };

  const getCategoryBadgeClasses = (category: string) => {
    if (category === 'Peer-Reviewed') {
      return 'bg-cyan-50 text-cyan-700 border-cyan-200';
    }

    return 'bg-rose-50 text-rose-700 border-rose-200';
  };

  const getYearBadgeClasses = (year: number) => {
    const yearString = year.toString();

    if (yearString === '2022') {
      return 'bg-slate-50 text-slate-700 border-slate-200';
    }

    if (yearString === '2021') {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }

    if (yearString === '2017') {
      return 'bg-violet-50 text-violet-700 border-violet-200';
    }

    if (yearString === '2014') {
      return 'bg-blue-50 text-blue-700 border-blue-200';
    }

    return 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-emerald-100/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-teal-100/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-5 flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-emerald-600" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              Research
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Scientific Publications
          </h1>

          <p className="max-w-2xl text-lg font-light text-gray-600">
            Peer-reviewed research and technical papers advancing the field of
            epilepsy diagnosis and treatment.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 border-y border-gray-100 bg-white/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-700" />
                <h3 className="text-sm font-semibold text-gray-700">
                  Filter publications
                </h3>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span className="min-w-fit text-sm font-semibold text-gray-700">
                    Year
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {publicationYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setActiveYear(year)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${getYearButtonClasses(
                          year
                        )}`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span className="min-w-fit text-sm font-semibold text-gray-700">
                    Type
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${getCategoryButtonClasses(
                          cat
                        )}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-4xl space-y-4">
          {filteredPubs.map((pub, index) => (
            <div
              key={`${pub.title}-${pub.year}`}
              className="group animate-fade-in rounded-xl border border-gray-200 bg-white p-8 opacity-0 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${getCategoryBadgeClasses(
                        pub.category
                      )}`}
                    >
                      {pub.category}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${getYearBadgeClasses(
                        pub.year
                      )}`}
                    >
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-light leading-tight transition-colors group-hover:text-emerald-600">
                    {pub.title}
                  </h3>

                  <p className="mb-2 text-sm font-light text-gray-600">
                    {pub.authors}
                  </p>

                  <p className="text-sm font-light italic text-gray-500">
                    {pub.journal}
                  </p>
                </div>

                <div className="ml-4 flex items-center space-x-2">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-emerald-100 hover:text-emerald-600"
                    title="View DOI"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>

                </div>
              </div>
            </div>
          ))}

          {filteredPubs.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg font-light text-gray-600">
                No publications found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-light">Featured Research</h2>
          <p className="mb-12 text-lg font-light text-gray-600">
            Check out our latest peer-reviewed publication on automated seizure
            detection.
          </p>
          <button className="rounded-full bg-emerald-600 px-8 py-4 font-light text-white transition-all hover:bg-emerald-700">
            View Featured Paper
          </button>
        </div>
      </section>
    </div>
  );
}