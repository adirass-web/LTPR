import { homeV3 } from '~/content/en-v3';
import { lead, press, videos } from '~/data/mediaPrestige';
import type { MediaImage } from '~/data/media';

export type A3Evidence = {
  id: string;
  role: 'document' | 'broadcast' | 'context';
  outlet: string;
  year: string;
  caption: string;
  url: string;
  image: MediaImage;
};

function pressProof(id: string, caption: string): A3Evidence {
  const item = press.find((entry) => entry.id === id);
  if (!item?.image) throw new Error(`A3 evidence image missing: ${id}`);
  return {
    id,
    role: 'document',
    outlet: item.outlet,
    year: item.date.slice(-4),
    caption,
    url: item.url,
    image: item.image,
  };
}
const ntv = videos.find((item) => item.id === 'ntv-innovation-2021');
if (!ntv?.image || !ntv.url) throw new Error('A3 requires the existing verified NTV evidence');

export const clusters: A3Evidence[][] = [
  [
    {
      id: 'rai-codice',
      role: 'broadcast',
      outlet: 'RAI 1',
      year: '2020',
      caption: 'Codice: la vita è digitale',
      url: lead.url,
      image: lead.image,
    },
    pressProof('politico-pagers-2024', 'Technology, intelligence and the pager operation'),
  ],
  [
    pressProof('figaro-ai-war-2023', 'Artificial intelligence enters the battlefield'),
    {
      id: 'codice-context',
      role: 'context',
      outlet: 'RAI 1 · Codice',
      year: '2020',
      caption: 'The art of connection',
      url: lead.url,
      image: lead.secondaryImage,
    },
  ],
  [
    {
      id: ntv.id,
      role: 'broadcast',
      outlet: ntv.outlet,
      year: '2021',
      caption: 'Universities and innovation ecosystems',
      url: ntv.url,
      image: ntv.image,
    },
    pressProof('france24-nso-2021', 'NSO and the Israeli state'),
  ],
];

// Review-only excerpts. The full production copy is retained in homeV3 and the offline archive.
export const a3Copy = {
  standfirst: homeV3.hero.standfirst.split('. ')[0] + '.',
  work: [
    {
      ...homeV3.work.areas[0],
      description: 'The institutional ability to set priorities, coordinate responsibility and sustain action.',
    },
    { ...homeV3.work.areas[1], description: 'AI matters when it improves a consequential decision.' },
    {
      ...homeV3.work.areas[2],
      description: 'Providers, regulators, supply chains and state institutions operating as one system.',
    },
  ],
};
