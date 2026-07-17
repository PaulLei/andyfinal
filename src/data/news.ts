export type NewsCategory =
  "Product" | "Company" | "Funding" | "Awards" | "Regulatory" | "Media";

export type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  internalReport?: string; // Optional: full report content for internal pages
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
    link: "",
    internalReport: `BALTIMORE, Md. (April 1, 2021)—Neurologic Solutions, Inc. announced today that it received 510K clearance from the U.S. Food and Drug Administration (FDA) for its medical software, EZTrack(TM). The novel software was initially developed in Dr. Sridevi Sarma's lab and then scaled to an enterprise-level product. It is licensed from the Johns Hopkins University. EZTrack(TM) is intended to provide easy-to-read visualizations of human brain intracranial electroencephalogram (iEEG) for focal or multifocal drug-resistant epilepsy patients, which can be used to assist, along with other clinical data, in neurosurgical planning. The software analyzes minutes to hours of EEG recordings to generate an EEG biomarker of the epileptogenic zone, called the Fragility Index, which is displayed in a spatiotemporal heatmap that can be analyzed by neurologists and neurosurgeons in seconds.

"EZTrack has the potential to have high clinical impact in a currently underserved patient population," stated Sri Sarma, Neurologic Solutions co-founder and president. "It can improve surgical outcomes and reduce significant costs associated with intracranial EEG monitoring as well as patient risks of monitoring by cutting time to analyze data."

In a retrospective multi-center study of 91 patients, EZTrack(TM) demonstrated the ability of the fragility biomarker to predict surgical outcome improving accuracy from 48% (gold standard) to 76%. This FDA clearance aligns with Neurologic Solution's vision of improving the diagnosis and treatment of patients with neurological disorders.

Medically refractory epilepsy (MRE) is a devastating disease affecting around 50 million people worldwide. In MRE patients, surgery is a feasible and hopeful alternative for seizure freedom. Seizure freedom is achieved through complete resection or ablation of the Epileptogenic Zone (EZ). The localization and anatomical extent of the EZ are essential for surgical success and frequently invasive monitoring (IM) is necessary. Measuring time and space characteristics of the discharges from multiple areas gives access to the EZ organization. The usual tools used in signal processing reach their limits where large-scale network architecture is at stake, making the distinction between the EZ (essential for seizure organization) and propagation zone (PZ – part of the epileptic network but not essential for seizure organization) a difficult task. Mechanistic computational models offer a means to establish causality of etiopathogenic pathways and can be used to systematically explore, map and simulate the precise localization and extent of the EZ and, ultimately, guide successful surgeries. Computational models offer the possibility of simulating such complex electrical dynamics and generating plausible time and space series.

Neurologic Solutions, Inc. received funding from TEDCO's Maryland Innovation Initiative and a Small Business Innovation Research award from the National Science Foundation.

## About Neurologic Solutions, Inc.

Neurologic Solutions, Inc. is a medical software device company that uses complex dynamical network models to develop technologies that reveal underlying mechanisms of the diseased brain, helping provide new insights for treatment. The Company's first commercial product, EZTrack(TM), analyzes intracranial and cortical brain signal recordings to analyze the stability of the brain network, identifying "fragile" regions as possible locations for the seizure onset zone in drug-resistant epilepsy patients. The company is currently developing technologies that we believe will allow expansion into other recording modalities, such as scalp EEG, and other neurological conditions, such as traumatic brain injury.

## Forward-Looking Statements

Beyond this initial market, additional expansion opportunities utilizing EZTrack™ as a biomarker to assess the efficacy of drug therapy for epilepsy and other conditions such as Alzheimer's Disease and dementia are worth more than $1 billion annually.`,
  },
  {
    date: "17 June 2021",
    category: "Funding",
    title:
      "Neurologic Solutions Awarded A Phase 1 Small Business Innovation Research Grant from the National Science Foundation",
    excerpt:
      "The company secures an NSF Phase 1 SBIR grant to advance its EEG analytics and seizure detection research.",
    image: "/article 7.png",
    link: "",
    internalReport: `BALTIMORE, Md. (May 13th, 2021)—Neurologic Solutions, Inc. announced today that it received the National Science Foundation SBIR Phase I grant of $250k. The novel software was initially developed in Dr. Sridevi Sarma's lab and then scaled to an enterprise-level product. It is licensed from the Johns Hopkins University. EZTrack-RS is intended to provide easy-to-read visualizations of human brain scalp electroencephalogram (EEG) for patients with suspected epilepsy, which can be used to assist, along with other clinical data, in diagnosis. The software analyzes minutes to hours of EEG recordings to generate a metric for epilepsy susceptibility, which is displayed in a spatiotemporal heatmap that can be analyzed by neurologists and neurosurgeons in seconds.

"EZTrack has the potential to have high clinical impact in a currently underserved patient population," stated Sri Sarma, Neurologic Solutions co-founder and president. "It can improve surgical outcomes and reduce significant costs associated with intracranial EEG monitoring as well as patient risks of monitoring by cutting time to analyze data."

EZTrack-RS has been evaluated on 24 patients and has demonstrated 87.5% sensitivity in detecting epilepsy patients who had EEGs without IEDs. This is a significant improvement to standard of care today. This SBIR Phase I award aligns with Neurologic Solution's vision of improving the diagnosis and treatment of patients with neurological disorders.

Epilepsy is a devastating disease affecting over 50 million people worldwide. The primary tool for diagnosis of epilepsy is an EEG which is captured for 20-30 minutes. Rarely do these time periods involve a seizure, and from this non-seizure ("resting state") data, physicians attempt to identify the presence of interictal (between seizure) epileptiform discharges (IEDs). The presence of IEDs in a patient will support the diagnosis of epilepsy. However, the sensitivity of the routine EEG for detecting IEDs varies from 29% to 55%, depending on the clinical syndrome. In general, the sensitivity of the first routine EEG is about 50%, which is increased with repeated studies (up to 82-92%). However, many settings of care, such emergency rooms, do not allow for multiple recordings over many weeks. This poses a significant problem in patients for whom the clinical history is incomplete or atypical for epileptic seizures.

Neurologic Solutions, Inc. has previously received multiple funding rounds from TEDCO's Maryland Innovation Initiative, a Small Business Innovation Research award from the National Science Foundation and a Thalheimer grant from the Johns Hopkins University.

## About Neurologic Solutions, Inc.

Neurologic Solutions, Inc. is a medical software device company that uses complex dynamical network models to develop technologies that reveal underlying mechanisms of the diseased brain, helping provide new insights for treatment. The Company's first commercial product, EZTrack(TM), analyzes intracranial and cortical brain signal recordings to analyze the stability of the brain network, identifying "fragile" regions as possible locations for the seizure onset zone in drug-resistant epilepsy patients. The company is currently developing EZTrack-RS, which will allow expansion into other scalp EEG.

## About the National Science Foundation SBIR

In 1977, NSF recognized the need for ongoing support for small business and instituted the Small Business Innovation Applied to National Needs program within the Engineering Division. The program was designed to tap the innovative capabilities of small firms and was the precursor to NSF's Small Business Innovation Research program. The program's first solicitation attracted 329 proposals from small businesses, 42 of which were funded with awards of up to $25,000 each.

America's Seed Fund powered by NSF awards $200 million annually to startups and small businesses, transforming scientific discovery into products and services with commercial and societal impact. Startups working across almost all areas of science and technology can receive up to $2 million to support research and development (R&D), helping de-risk technology for commercial success. America's Seed Fund is congressionally mandated through the Small Business Innovation Research (SBIR) program. The NSF is an independent federal agency with a budget of about $8.5 billion that supports fundamental research and education across all fields of science and engineering. For more information, visit seedfund.nsf.gov.

## Forward-Looking Statements

Neurologic Solutions is a pre-revenue company that aims to improve the diagnosis and treatment of patients with epilepsy by building a portfolio of smart EEG analytic software tools. Over the next five years, we plan to initiate commercialization for our initial product EZTrack-SZ (which is designed to assist in the identification of the epileptogenic zone, EZ, in surgical candidates) while in parallel completing the product development and clinical testing for our second product EZTrack-RS, which is designed to improve the diagnosis of epilepsy using EEGs recorded from the scalp and which greatly expands the market size.`,
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
    image: "/MarkH.jpg",
    link: "https://www.linkedin.com/posts/golnoosh-kamali_starting-off-the-new-year-with-a-professional-activity-7280311008026353664-cpr2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjWI0BQYuNDclI86R8h1NsPG3DZ0WYHsM",
  },
  {
    date: "22 January 2025",
    category: "Product",
    title:
      "New epilepsy tool could cut misdiagnoses by nearly 70% using routine EEGs",
    excerpt:
      "Johns Hopkins research shows EpiScalp significantly reduces epilepsy misdiagnosis using routine EEG data.",
    image: "/article 2.png",
    link: "https://hub.jhu.edu/2025/01/22/episcalp-epilepsy-diagnosis/",
    internalReport: ``,
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
    date: "5 December 2025",
    category: "Company",
    title: "MII Technology Assessment Awards",
    excerpt:
      "Neurologic Solutions Gets the Maryland Innovation Initiative Technology Assessment Award",
    image: "/new article.png",
    link: "https://www.tedcomd.com/mii-universityprojects ",
  },
  {
    date: "5 December 2026",
    category: "Awards",
    title:
      "Neurologic Solutions Awarded $1 Million NIH Blueprint MedTech Optimizer Award to Advance EpiScalp",
    excerpt:
      "Neurologic Solutions receives a $1 million NIH Blueprint MedTech Optimizer award to advance EpiScalp development, clinical validation, and regulatory readiness.",
    image: "/Blueprint-Medtech4_Logo.jpg",
    link: "",
    internalReport: `FOR IMMEDIATE RELEASE

Baltimore, MD – December 5, 2026 – Neurologic Solutions, an innovative digital health and medtech startup focused on advanced neurodiagnostic software, today announced that it has been awarded an NIH Blueprint MedTech Optimizer award to support the further development and clinical validation of EpiScalp, its proprietary software application designed to assist neurologists in diagnosing epilepsy.

The $1 million award will enable Neurologic Solutions to scale the capabilities of EpiScalp, accelerate its path toward regulatory clearance, and expand its clinical implementation to help clinicians make faster, more accurate diagnoses.

The NIH Blueprint MedTech program is a highly competitive, trans-agency initiative designed to accelerate the development of promising neurotechnology innovations toward real-world clinical impact. Neurologic Solutions' selection highlights the significant unmet need for objective, automated, and data-driven tools that streamline the complex process of epilepsy diagnosis and the interpretation of electroencephalograms (EEGs) and other neurological data.

"This award represents a significant moment for Neurologic Solutions and for the millions of individuals impacted by epilepsy," said Andy Gotshalk, CEO of Neurologic Solutions. "Diagnosing epilepsy quickly and accurately remains a substantial challenge due to the immense volume and complexity of neurological data. This program allows us to push the boundaries of clinical software, giving neurologists an intelligent, precise tool to confidently accelerate diagnosis and improve patient outcomes."

EpiScalp leverages advanced computational algorithms to analyze brain activity and assist neurologists in identifying biomarkers associated with epilepsy. By automating time-consuming data parsing and highlighting critical anomalies, the software reduces diagnostic bottlenecks and provides decision-support insights that minimize human error.

The Blueprint Optimizer award will fund not only software refinement but also significant milestones critical for the successful commercialization of a medical device. These components include implementing a right-sized Quality Management System, developing additional intellectual property, advancing a reimbursement strategy, and strengthening cybersecurity.

This award is supported by the National Institutes of Health (NIH) Blueprint for Neuroscience Research and by the National Institute of Biomedical Imaging and Bioengineering through grant 3U54EB033650-04S4.

## About Neurologic Solutions

Neurologic Solutions is an innovative medtech startup dedicated to developing cutting-edge digital health software that transforms neurodiagnostic workflows. The company's flagship platform, EpiScalp, provides neurologists with advanced, intelligent software applications to detect, analyze, and assist in the diagnosis of epilepsy and related neurological conditions. Neurologic Solutions aims to significantly improve clinical efficiency and elevate patient care globally.

For more information, visit www.neurologicsolutions.net.

## Media Contact

Andy Gotshalk, CEO  
Neurologic Solutions  
agotshalk@neurologicsolutions.net  
www.neurologicsolutions.net`,
  },
];