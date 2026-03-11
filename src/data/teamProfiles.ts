export type TeamProfile = {
  slug: string;
  name: string;
  role: string;
  image?: string;
  shortBio?: string;
  bio: string[];
};

export const teamProfiles: TeamProfile[] = [
  {
    slug: "andrew-gotshalk",
    name: "Andrew Gotshalk",
    role: "CEO",
    image: "/AndrewG.jpg",
    shortBio: "CEO of Neurologic Solutions.",
    bio: [
      "Andy Gotshalk joined Neurologic Solutions as acting Chief Executive Officer in January 2023. Mr. Gotshalk is a medical device executive with over 20 years’ experience. Recently, Mr. Gotshalk was the founder and CEO of Blackrock Neuromed. Blackrock Neuromed was an innovative EEG technology company that developed and commercialized high-definition EEG and was acquired by Natus Medical Inc in 2017. Prior to Blackrock Neuromed, he was the CEO of Blackrock Microsystems where he successfully commercialized research products in the neurophysiology space. Prior to that, Mr. Gotshalk was responsible for sales and operations for the US Surgical Division of Haemonetics Corp.",
    ],
  },
  {
    slug: "sridevi-sarma",
    name: "Sridevi Sarma, PhD",
    role: "President and Co-Founder",
    image: "/SrideviS.jpg",
    shortBio: "President and Co-Founder of Neurologic Solutions.",
    bio: [
      "Dr. Sridevi Sarma holds a B.S. in Electrical Engineering from Cornell University and an M.S. and Ph.D. in Electrical Engineering and Computer Science from the Massachusetts Institute of Technology (MIT). She also completed a Postdoctoral Fellowship at MIT’s Department of Brain and Cognitive Sciences. Currently, she serves as a Professor at Johns Hopkins University in the Department of Biomedical Engineering and the Institute for Computational Medicine. She is also a PI for NeuroTech Harbor, an NIH funded Blueprint MedTech hub.",
      "Dr. Sarma’s work focuses on advancing neural system technologies, particularly in modeling, estimation, and electrical stimulation-based control for applications in epilepsy and chronic pain. Her contributions to the field include 64 peer-reviewed journal articles, 89 conference proceedings, 11 patents and disclosures, two book chapters, one FDA-cleared medical device, and one published book. Her innovations have not only enhanced scientific understanding, but also translated into impactful solutions in healthcare.",
      "A globally recognized thought leader, Dr. Sarma has delivered over 60 invited talks worldwide. She has received numerous accolades, including the Burroughs Wellcome Fund Careers at the Scientific Interface Award, the Krishna Kumar New Investigator Award from the North American Neuromodulation Society, the Presidential Early Career Award for Scientists and Engineers (PECASE), the NIH Outstanding Investigator Award for her pioneering research in epilepsy ($5.5M over 8 years), and the Whiting School of Engineering’s Robert B. Pond Excellence in Teaching Award.",
      "Dr. Sarma’s work exemplifies the intersection of cutting-edge research, innovation, and impactful mentorship, making her a leader in advancing neurotechnology and healthcare solutions.",
    ],
  },
  {
    slug: "jorge-gonzelez-martinez",
    name: "Jorge Gonzelez-Martinez, MD PhD",
    role: "CMO and Co-Founder",
    image: "/JorgeG.jpg",
    shortBio: "CMO and Co-Founder of Neurologic Solutions.",
    bio: [
      "Jorge González-Martínez, MD, PhD, FAANS is a board-certified neurosurgeon specializing in epilepsy and functional neurosurgery. He serves as Director of the Epilepsy and Movement Disorders Surgery Division and holds the Stuart Niles Rowe Chair in Neurosurgery at the University of Pittsburgh.Dr. González-Martínez is internationally recognized for his expertise in stereoelectroencephalography (SEEG), neuromodulation, and robotic-assisted neurosurgery, with over 3,000 successful procedures and 1,000 robotic surgeries performed. He played a pivotal role in introducing and advancing SEEG methodology in North America, establishing the University of Pittsburgh as a leader in robotic neurosurgery.",
      "With more than 300 peer-reviewed publications and book chapters, Dr. González-Martínez’s research focuses on innovative techniques for brain mapping and neurosurgical interventions for medically intractable epilepsy and movement disorders. His collaboration with Dr. Sridevi Sarma in computational bioengineering has generated translational advancements that are reshaping the field of epilepsy, enhancing both surgical precision and patient outcomes.Dr. González-Martínez’s research bridges clinical practice and translational science, partnering with leading institutions such as Carnegie Mellon University, Johns Hopkins University, and Aix-Marseille University. He leads the University of Pittsburgh Cortical Systems Laboratory, advancing safer and more effective treatments for epilepsy and neurological disorders.",
      "In addition to his clinical and research contributions, Dr. González-Martínez has served on the Executive Committees of the American Society for Stereotactic and Functional Neurosurgery and the American Epilepsy Society, driving initiatives that improve outcomes for patients worldwide.",
    ],
  },
  {
    slug: "mark-hays",
    name: "Mark Hays, PhD",
    role: "Director of Product Development",
    image: "/MarkH.jpg",
    shortBio: "Director of Product Development.",
    bio: [
      "Mark Hays, PhD, received a B.S. in Biomedical Engineering from Brown University and a Ph.D. in Biomedical Engineering from Johns Hopkins University (JHU) where he was advised by epileptologists Dr. Nathan Crone and Dr. Joon Kang. His research specialized in validating computational markers for seizure localization in epilepsy patients undergoing intracranial EEG (iEEG) monitoring, and he regularly conducted neural recordings and stimulations with patients in the Epilepsy Monitoring Unit. His work further established the utilization of brain stimulation for delineating epileptogenic networks and predicting surgical outcomes, leading to 9 peer-reviewed journal articles and 13 conference proceedings. Dr. Hays also completed a Postdoctoral Fellowship at JHU, applying his experience with brain stimulation to improve the diagnostic validity of passive iEEG language mapping for epilepsy surgical considerations. Dr. Hays’s experience in medical settings and exposure to clinical workflows complements his expertise in engineering, enabling him to drive forward translational innovations in neurotechnology.",
    ],
  },
  {
    slug: "golnoosh-kamali",
    name: "Golnoosh Kamali, PhD",
    role: "Director of Site Engagement",
    image: "/GolnooshK.jpg",
    shortBio: "Director of Site Engagement.",
    bio: [
      "Golnoosh Kamali, PhD, Director of Software Development, received her PhD in Electrical and Computer Engineering from Johns Hopkins University under the advisement of Dr. Sarma. Her research specialized on mathematical and computational modeling of complex dynamical systems of human intracranial electroencephalograms (iEEGs). Most recently, Golnoosh worked at Johns Hopkins Technology Ventures (JHTV) on the Technology Development Team where she assisted with market research, commercialization strategies, and developing support processes focusing on healthcare software innovations and startups. During her time at JHTV, Golnoosh participated as the technical product lead in the startup generator program Hexcite, supported Dr. Therese Canares of CurieDx during National I-Corp, and served as a project manager for a SaaS platform for clinical trial management.",
    ],
  },
  {
    slug: "john-gale",
    name: "John Gale, PhD",
    role: "Domain Expert",
    image: "/JohnG.jpg",
    shortBio: "Domain expert in electrophysiology and clinical data systems.",
    bio: [
      "John Gale, PhD, co-founder and acting CSO, is an electrophysiologist with over 20 years of experience in data collection, analysis and archiving of clinical data. He has held academic positions at Massachusetts General Hospital/Harvard University, the Cleveland Clinic and Emory University where he investigated the neural control of behavior in humans. He also served as a clinical human electrophysiologist for the placement of deep brain stimulation leads. Currently, Dr. Gale is the owner of Gale Neurotechnologies Inc., which provides educational, technical guidance and intellectual property assessment and development services for a number of electrophysiology and neurosurgical companies.",
    ],
  },
  {
    slug: "kristin-gunnarsdottir",
    name: "Kristín Gunnarsdóttir",
    role: "Data Scientist",
    image: "/KristinG.jpg",
    shortBio: "",
    bio: [],
  },
  {
    slug: "chas-mckhann",
    name: "Chas McKhann",
    role: "Business Consultant",
    image: "/ChasM.jpg",
    shortBio: "",
    bio: [],
  },
  {
    slug: "william-s-anderson",
    name: "William S Anderson, MA, MD, PhD",
    role: "Advisor",
    image: "/WilliamA.jpg",
    shortBio: "Advisor with deep clinical and academic experience.",
    bio: [
      "William S. Anderson, MA, MD, PhD provides comprehensive treatments, including deep brain stimulation (DBS) therapies, for movement disorders including Parkinson’s disease, essential tremor, and dystonia. Dr. Anderson is also a member of the Epilepsy Surgery team, and performs both resectional procedures such as temporal lobectomy, diagnostic procedures such as implantation of monitoring grids and depth electrodes, and therapeutic neuromodulation using vagal nerve and cortical stimulation. His research focuses on the computational modeling of epilepsy to understand the time and spatial evolutionary properties of seizures.",
    ],
  },
  {
    slug: "chuck-montague",
    name: "Chuck Montague, PhD",
    role: "Advisor",
    image: "/ChuckM.jpg",
    shortBio: "Advisor with business development experience in biomedical engineering.",
    bio: [
      "Charles Montague, PhD is the Director of Business Development for the Department of Biomedical Engineering (BME) at Johns Hopkins University. He works with faculty, students, and staff on all aspects of commercializing technology, from disclosures to funding. From 2009 to 2016 he managed translational research funds, first at Maryland’s Dept. of Business and Economic Development and then the JHU-Coulter Translational Partnership. He funded and supported almost 60 projects to move the research toward commercialization. His experience spans basic research at the Naval Research lab, 12 years commercial experience in the analytical instrument industry, and he has been actively involved in the start-up ecosystem of Maryland for the past 15 years. He received a PhD in Biophysics from Johns Hopkins University.",
    ],
  },
  {
    slug: "ian-tolfree",
    name: "Ian Tolfree, PhD",
    role: "Advisor",
    image: "/IanT.jpg",
    shortBio: "Advisor and startup operator.",
    bio: [
      "Ian Tolfree, PhD is CEO of TBT Pharma and an entrepreneur in residence for Emerald Development Managers and Vesta VFO, two family offices. Dr. Tolfree received his PhD in theoretical physics in 2009. From 2012-2015 he was the venture manager of Johns Hopkins tech incubator where he worked with over 70 research groups helping faculty members transition their patent backed research into startups. After a short period as Director of Operations at a medical device company, he founded Tarsier Optics and Imogin, an optics and semiconductor company where he oversaw the development of the world’s first camera based on quantum optics. He supports the family offices with venture and private equity deal sourcing and evaluation, leads fund raising efforts for TBT, and advises a number of startups on a variety of issues, including strategic positioning and drug development strategy.",
    ],
  },
  {
    slug: "myron-weisfeldt",
    name: "Myron Weisfeldt, MD",
    role: "Advisor",
    image: "/MyronW.jpg",
    shortBio: "",
    bio: [],
  },
];

export const teamProfilesBySlug = Object.fromEntries(
  teamProfiles.map((profile) => [profile.slug, profile])
);

export const hasProfileBio = (slug?: string) => {
  if (!slug) return false;
  const profile = teamProfilesBySlug[slug];
  return !!profile && profile.bio.length > 0;
};