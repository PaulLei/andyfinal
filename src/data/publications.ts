export type ProductTag = 'EpiScalp' | 'EZTrack' | 'Foundational';

export type PublicationCategory = 'Peer-Reviewed' | 'Conference';

export type Publication = {
  year: number;
  title: string;
  citation: string;
  journal: string;
  category: PublicationCategory;
  href: string;
  tags: ProductTag[];
  featured?: boolean;
  mainFeature?: boolean;
  blurb?: string;
};

export const publications: Publication[] = [
  {
    year: 2024,
    title:
      'Diagnosing Epilepsy with Normal Interictal EEG Using Dynamic Network Models',
    citation:
      'Diagnosing Epilepsy with Normal Interictal EEG Using Dynamic Network Models.',
    journal: 'Annals of Neurology.',
    category: 'Peer-Reviewed',
    href: 'https://pubmed.ncbi.nlm.nih.gov/39817338/',
    tags: ['Foundational', 'EpiScalp'],
    featured: true,
    mainFeature: true,
    blurb:
      'A main EpiScalp publication describing the use of dynamic network models to support epilepsy diagnosis from interictal EEG, including patients with normal interictal EEG findings.',
  },
  {
    year: 2022,
    title:
      'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
    citation:
      'Gunnarsdottir KM, Li A, Smith RJ, Kang JY, Korzeniewska A, Crone NE, Rouse AG, et al.',
    journal: 'Brain. 2022;145(11):3901-3915.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1093/brain/awac300',
    tags: ['EpiScalp', 'Foundational'],
    featured: true,
    blurb:
      'Introduces source-sink connectivity as an interictal EEG marker for seizure localization.',
  },
  {
    year: 2021,
    title: 'Neural fragility as an EEG marker of the seizure onset zone',
    citation:
      'Li A, Huynh C, Fitzgerald Z, Cajigas I, Brusko D, Jagid J, Claudio AO, Kanner AM, Hopp J, Chen S, Haagensen J, Johnson E, Anderson W, Crone N, Inati S, Zaghloul KA, Bulacio J, González-Martínez J, Sarma SV.',
    journal: 'Nature Neuroscience. 2021;24(10):1465-1474.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1038/s41593-021-00901-w',
    tags: ['EpiScalp', 'EZTrack', 'Foundational'],
    featured: true,
    blurb:
      'A foundational publication supporting neural fragility as a marker of seizure onset zones.',
  },
  {
    year: 2021,
    title:
      'Sources and Sinks in Interictal iEEG Networks: An iEEG Marker of the Epileptogenic Zone',
    citation:
      'Sources and Sinks in Interictal iEEG Networks: An iEEG Marker of the Epileptogenic Zone.',
    journal: 'IEEE EMBC. 2021.',
    category: 'Conference',
    href: 'https://ieeexplore.ieee.org/abstract/document/9630035',
    tags: ['Foundational', 'EpiScalp'],
    featured: true,
    blurb:
      'A peer-reviewed conference paper describing sources and sinks in interictal invasive EEG networks as markers of the epileptogenic zone.',
  },
  {
    year: 2018,
    title:
      'Using network analysis to localize the epileptogenic zone from invasive EEG recordings in intractable focal epilepsy',
    citation:
      'Using network analysis to localize the epileptogenic zone from invasive EEG recordings in intractable focal epilepsy.',
    journal: 'Network Neuroscience.',
    category: 'Peer-Reviewed',
    href: 'https://direct.mit.edu/netn/article/02/02/218/2206',
    tags: ['Foundational', 'EZTrack'],
    blurb:
      'A foundational network-analysis paper focused on localizing the epileptogenic zone from invasive EEG recordings.',
  },
  {
    year: 2017,
    title: 'Fragility in epileptic networks: The epileptogenic zone',
    citation: 'Fragility in epileptic networks: The epileptogenic zone.',
    journal: 'IEEE ACN. 2017.',
    category: 'Conference',
    href: 'https://ieeexplore.ieee.org/document/7963378',
    tags: ['Foundational', 'EpiScalp', 'EZTrack'],
    featured: true,
    blurb:
      'A peer-reviewed conference paper connecting network fragility concepts with epileptogenic zone localization.',
  },
  {
    year: 2017,
    title:
      'Linear time-varying model characterizes invasive EEG signals generated from complex epileptic networks',
    citation:
      'Li A, Gunnarsdottir KM, Inati S, Zaghloul K, Gale J, Bulacio J, Martinez-Gonzalez J, Sarma SV.',
    journal:
      '2017 39th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC). 2017:2802-2805.',
    category: 'Conference',
    href: 'https://doi.org/10.1109/EMBC.2017.8037439',
    tags: ['Foundational'],
    blurb:
      'A peer-reviewed conference paper describing the modeling approach that underlies later fragility and source-sink work.',
  },
  {
    year: 2014,
    title:
      'Network dynamics of the brain and influence of the epileptic seizure onset zone',
    citation:
      'Network dynamics of the brain and influence of the epileptic seizure onset zone.',
    journal: 'Proceedings of the National Academy of Sciences.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1073/pnas.1401752111',
    tags: ['Foundational', 'EpiScalp', 'EZTrack'],
    blurb:
      'A foundational paper on brain network dynamics and the influence of the epileptic seizure onset zone.',
  },
  {
    year: 2014,
    title:
      'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
    citation: 'Sritharan D, Sarma SV.',
    journal: 'Neural Computation. 2014;26(10):2294-2327.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1162/NECO_a_00644',
    tags: ['Foundational', 'EZTrack'],
    featured: true,
    blurb:
      'An early foundational paper on fragility in epileptic neural networks.',
  },
];

export const eztrackPublicationTitles = [
  'Fragility in epileptic networks: The epileptogenic zone',
  'Neural fragility as an EEG marker of the seizure onset zone',
  'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
];

export const episcalpPublicationTitles = [
  'Sources and Sinks in Interictal iEEG Networks: An iEEG Marker of the Epileptogenic Zone',
  'Fragility in epileptic networks: The epileptogenic zone',
  'Diagnosing Epilepsy with Normal Interictal EEG Using Dynamic Network Models',
  'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
  'Neural fragility as an EEG marker of the seizure onset zone',
];