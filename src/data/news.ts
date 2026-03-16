export type NewsCategory =
  | 'Product'
  | 'Company'
  | 'Funding'
  | 'Awards'
  | 'Regulatory'
  | 'Media';

export type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  link: string;
};

export const newsItems: NewsItem[] = [
  {
    date: '1 April 2021',
    category: 'Regulatory',
    title:
      'Neurologic Solutions Granted FDA 510K Clearance for its Seizure Onset Zone Detection Software',
    excerpt:
      'Neurologic Solutions receives FDA 510(k) clearance for its seizure onset zone detection software, enabling clinical use.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#7e6aa7]',
    link: 'https://neurologicsolutions.net/neurologic-solutions-granted-fda-510k-clearance-for-its-seizure-onset-zone-detection-software/',
  },
  {
    date: '17 June 2021',
    category: 'Funding',
    title:
      'Neurologic Solutions Awarded A Phase 1 Small Business Innovation Research Grant from the National Science Foundation',
    excerpt:
      'The company secures an NSF Phase 1 SBIR grant to advance its EEG analytics and seizure detection research.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#b96d46]',
    link: 'https://neurologicsolutions.net/neurologic-solutions-awarded-a-phase-1-small-business-innovation-research-grant-from-the-national-science-foundation/',
  },
  {
    date: '31 August 2021',
    category: 'Awards',
    title: 'Sarma named a recipient of Thalheimer Fund Grant',
    excerpt:
      'Sri Sarma receives the Thalheimer Fund Grant supporting translational neuroscience research.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#ce7f57]',
    link: 'https://www.bme.jhu.edu/news-events/news/sarma-named-a-recipient-of-thalheimer-fund-grant/',
  },
  {
    date: '3 November 2020',
    category: 'Awards',
    title: 'Sri Sarma wins inaugural Pitch It On! competition',
    excerpt:
      'Sri Sarma wins the inaugural Pitch It On! competition for innovation and commercialization leadership.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#9986bf]',
    link: 'https://hub.jhu.edu/2020/11/03/sri-sarma-wins-accelherator-pitch-competition/',
  },
  {
    date: '15 June 2024',
    category: 'Company',
    title: 'Neurologic Solutions Hires Andrew Gotshalk',
    excerpt:
      'Neurologic Solutions expands its leadership team with the hiring of Andrew Gotshalk.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#b96d46]',
    link: 'https://www.linkedin.com/posts/andrew-gotshalk-7814433_newbeginnings-neurologicsolutions-leadership-activity-7229653386155941888-701y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM',
  },
  {
    date: '15 August 2024',
    category: 'Funding',
    title: 'Neurologic Solutions Receives the SBIR Phase 2 Award',
    excerpt:
      'Neurologic Solutions receives a Phase 2 SBIR award to scale development and validation of its EEG technology.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#7e6aa7]',
    link: 'https://www.sbir.gov/awards/213755',
  },
  {
    date: '15 September 2024',
    category: 'Company',
    title: 'Neurologic Solutions Hires Mark Hays and Golnoosh Kamali',
    excerpt:
      'The company strengthens its team with the addition of Mark Hays and Golnoosh Kamali.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#ce7f57]',
    link: 'https://www.linkedin.com/posts/golnoosh-kamali_starting-off-the-new-year-with-a-professional-activity-7280311008026353664-cpr2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM',
  },
  {
    date: '22 January 2025',
    category: 'Product',
    title: 'New epilepsy tool could cut misdiagnoses by nearly 70% using routine EEGs',
    excerpt:
      'Johns Hopkins research shows EpiScalp significantly reduces epilepsy misdiagnosis using routine EEG data.',
    image: 'bg-gradient-to-br from-[#9986bf] to-[#7e6aa7]',
    link: 'https://hub.jhu.edu/2025/01/22/episcalp-epilepsy-diagnosis/',
  },
  {
    date: '25 September 2025',
    category: 'Media',
    title: 'Baltimore biotech researchers court investors at Johns Hopkins showcase',
    excerpt:
      'Neurologic Solutions presents its technology to investors at the Johns Hopkins innovation showcase.',
    image: 'bg-gradient-to-br from-[#ce7f57] to-[#9986bf]',
    link: 'https://technical.ly/entrepreneurship/johns-hopkins-innovation-summit-2025/?nab=1',
  },
];