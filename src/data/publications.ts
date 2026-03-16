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
  blurb?: string;
};

export const publications: Publication[] = [
  {
    year: 2022,
    title:
      'Source-sink connectivity: a novel interictal EEG marker for seizure localization',
    citation:
      'Gunnarsdottir KM, Li A, Smith RJ, Kang JY, Korzeniewska A, Crone NE, Rouse AG, et al.',
    journal: 'Brain. 2022;145(11):3901-3915.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1093/brain/awac300',
    tags: ['EZTrack', 'Foundational'],
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
    tags: ['EZTrack', 'Foundational'],
    featured: true,
    blurb:
      'A foundational publication supporting neural fragility as a marker of seizure onset zones.',
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
      'Describes the modeling approach that underlies later fragility and source-sink work.',
  },
  {
    year: 2014,
    title:
      'Fragility in Dynamic Networks: Application to Neural Networks in the Epileptic Cortex',
    citation: 'Sritharan D, Sarma SV.',
    journal: 'Neural Computation. 2014;26(10):2294-2327.',
    category: 'Peer-Reviewed',
    href: 'https://doi.org/10.1162/NECO_a_00644',
    tags: ['Foundational'],
    blurb:
      'An early foundational paper on fragility in epileptic neural networks.',
  },
];