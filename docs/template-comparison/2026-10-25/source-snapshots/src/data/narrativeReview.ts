import { lead, press, videos } from './mediaPrestige';
import type { MediaImage } from './media';

export interface NarrativeEvidence {
  id: string;
  role: 'document' | 'broadcast';
  outlet: string;
  year: string;
  caption: string;
  url?: string;
  image: MediaImage;
  companion?: MediaImage;
}

function documentEvidence(id: string, caption: string): NarrativeEvidence {
  const item = press.find((entry) => entry.id === id);
  if (!item?.image) throw new Error(`Missing narrative document: ${id}`);
  return { ...item, role: 'document', year: item.date.slice(-4), caption, image: item.image };
}

function broadcastEvidence(id: string, caption: string): NarrativeEvidence {
  const item = videos.find((entry) => entry.id === id);
  if (!item?.image) throw new Error(`Missing narrative broadcast: ${id}`);
  return { ...item, role: 'broadcast', year: item.date.slice(-4), caption, image: item.image };
}

// Editorial associations, not a quota. No slicing, count limit or mobile-only selection.
export const narrativeEvidence = {
  codice: {
    id: 'codice-2020',
    role: 'broadcast',
    outlet: 'RAI 1 · Codice',
    year: '2020',
    caption: 'La vita è digitale · interview and programme artwork',
    url: lead.url,
    image: lead.image,
    companion: lead.secondaryImage,
  } satisfies NarrativeEvidence,
  ecosystems: broadcastEvidence('ntv-innovation-2021', 'Universities and innovation ecosystems · interview'),
  decisions: documentEvidence('figaro-ai-war-2023', 'Artificial intelligence in warfare · commentary'),
  infrastructure: broadcastEvidence('channel10-undersea-2015', 'Undersea cables and the internet · interview'),
  supplyChains: documentEvidence('politico-pagers-2024', 'The pager operation and supply chains · expert analysis'),
  platforms: broadcastEvidence(
    'channel-economy-2026',
    'Platform responsibility for fraudulent advertising · interview'
  ),
  institutions: documentEvidence('nrc-surveillance-2022', 'The surveillance industry · commentary'),
  statecraft: documentEvidence('france24-nso-2021', 'Technology and the state · commentary'),
};
