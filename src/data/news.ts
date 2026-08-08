import reportApril1 from './reports/2021-04-01-eztrack-clearance.md?raw';
import reportJune17 from './reports/2021-06-17-sbir-grant.md?raw';
import reportDec5 from './reports/2026-12-05-nih-blueprint-award.md?raw';
import reportSept15 from './reports/2024-09-15-MarkGolnoosh-hiring.md?raw';

export type NewsCategory =
  "Product" | "Company" | "Funding" | "Awards" | "Regulatory" | "Media";

export type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  reportMarkdown?: string; // Optional: full report content for internal pages
};

export const newsItems: NewsItem[] = [
  {
    date: "1 April 2021",
    category: "Regulatory",
    title:
      "Neurologic Solutions Granted FDA 510K Clearance for its Seizure Onset Zone Detection Software",
    excerpt:
      "Neurologic Solutions receives FDA 510(k) clearance for its seizure onset zone detection software, enabling clinical use.",
    image: "/article 8.png",
    link: "",    reportMarkdown: reportApril1,
  },
  {
    date: "17 June 2021",
    category: "Funding",
    title:
      "Neurologic Solutions Awarded A Phase 1 Small Business Innovation Research Grant from the National Science Foundation",
    excerpt:
      "The company secures an NSF Phase 1 SBIR grant to advance its EEG analytics and seizure detection research.",
    image: "/article 7.png",
    link: "",    reportMarkdown: reportJune17,
  },
  {
    date: "31 August 2021",
    category: "Awards",
    title: "Sarma named a recipient of Thalheimer Fund Grant",
    excerpt:
      "Sri Sarma receives the Thalheimer Fund Grant supporting translational neuroscience research.",
    image: "/article 6.png",
    link: "https://www.bme.jhu.edu/news-events/news/sarma-named-a-recipient-of-thalheimer-fund-grant/",
  },
  {
    date: "3 November 2020",
    category: "Awards",
    title: "Sri Sarma wins inaugural Pitch It On! competition",
    excerpt:
      "Sri Sarma wins the inaugural Pitch It On! competition for innovation and commercialization leadership.",
    image: "/SrideviS.jpg",
    link: "https://hub.jhu.edu/2020/11/03/sri-sarma-wins-accelherator-pitch-competition/",
  },
  {
    date: "15 June 2024",
    category: "Company",
    title: "Neurologic Solutions Hires Andrew Gotshalk",
    excerpt:
      "Neurologic Solutions expands its leadership team with the hiring of Andrew Gotshalk.",
    image: "/AndrewG.jpg",
    link: "https://www.linkedin.com/posts/andrew-gotshalk-7814433_newbeginnings-neurologicsolutions-leadership-activity-7229653386155941888-701y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM",
  },
  {
    date: "15 August 2024",
    category: "Funding",
    title: "Neurologic Solutions Receives the SBIR Phase 2 Award",
    excerpt:
      "Neurologic Solutions receives a Phase 2 SBIR award to scale development and validation of its EEG technology.",
    image: "/article 4.png",
    link: "https://www.sbir.gov/awards/213755",
  },
  {
    date: "15 September 2024",
    category: "Company",
    title: "Neurologic Solutions Hires Mark Hays and Golnoosh Kamali",
    excerpt:
      "The company strengthens its team with the addition of Mark Hays and Golnoosh Kamali.",
    image: "/Markgolnoosh.png",
    link: "", reportMarkdown: reportSept15,
  },
  {
    date: "22 January 2025",
    category: "Product",
    title:
      "New epilepsy tool could cut misdiagnoses by nearly 70% using routine EEGs",
    excerpt:
      "Johns Hopkins research shows EpiScalp™ significantly reduces epilepsy misdiagnosis using routine EEG data.",
    image: "/article 2.png",
    link: "https://hub.jhu.edu/2025/01/22/episcalp-epilepsy-diagnosis/",
    reportMarkdown: ``,
  },
  {
    date: "25 September 2025",
    category: "Media",
    title:
      "Baltimore biotech researchers court investors at Johns Hopkins showcase",
    excerpt:
      "Neurologic Solutions presents its technology to investors at the Johns Hopkins innovation showcase.",
    image: "/article 1.png",
    link: "https://technical.ly/entrepreneurship/johns-hopkins-innovation-summit-2025/?nab=1",
  },
  {
    date: "5 December 2026",
    category: "Awards",
    title:
      "Neurologic Solutions Awarded $1 Million NIH Blueprint MedTech Optimizer Award to Advance EpiScalp™",
    excerpt:
      "Neurologic Solutions receives a $1 million NIH Blueprint MedTech Optimizer award to advance EpiScalp™ development, clinical validation, and regulatory readiness.",
    image: "/Blueprint-Medtech4_Logo.jpg",
    link: "",
    reportMarkdown: reportDec5,
  },
];