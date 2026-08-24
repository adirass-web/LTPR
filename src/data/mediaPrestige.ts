import {
  archive as baseArchive,
  lead as baseLead,
  press as basePress,
  videos as baseVideos,
} from './media';
import type {
  MediaArchiveItem,
  MediaImage,
  MediaPressItem,
  MediaVideoItem,
} from './media';

export type MediaPrestigePressItem = Omit<MediaPressItem, 'image'> & {
  image?: MediaImage;
  visualLabel?: string;
};

const videoById = (id: string) => {
  const item = baseVideos.find((video) => video.id === id);
  if (!item) throw new Error(`Missing media video: ${id}`);
  return item;
};

const pressById = (id: string) => {
  const item = basePress.find((pressItem) => pressItem.id === id);
  if (!item) throw new Error(`Missing media press item: ${id}`);
  return item;
};

export const lead = {
  ...baseLead,
  outlet: 'RAI 1',
  meta: 'Italian',
};

const videoOverrides: Record<string, Partial<MediaVideoItem>> = {
  'ntv-innovation-2021': {
    title: 'Innovation ecosystems: universities, technology clusters and the Israeli model',
  },
  'rainews-russia-2019': {
    outlet: 'RaiNews 24',
  },
  'channel10-undersea-2015': {
    title: 'Russia, undersea cables and internet infrastructure',
  },
  'channel14-pegasus-2022': {
    title: 'Pegasus and police access to private phones',
  },
  'channel-economy-2026': {
    title: 'Platform responsibility for fraudulent advertising',
  },
};

const videoOrder = [
  'ntv-innovation-2021',
  'rainews-russia-2019',
  'channel10-undersea-2015',
  'channel14-pegasus-2022',
  'channel-economy-2026',
];

export const videos: MediaVideoItem[] = videoOrder.map((id) => ({
  ...videoById(id),
  ...videoOverrides[id],
}));

export const press: MediaPrestigePressItem[] = [
  {
    id: 'politico-pagers-2024',
    kind: 'press',
    outlet: 'POLITICO Europe',
    title: 'How did Israel blow up Hezbollah pagers?',
    date: '19 September 2024',
    url: 'https://www.politico.eu/article/israel-pagers-hezbollah-lebanon-health-ministry/',
    visualLabel: 'POLITICO Europe',
    status: 'verified',
    originalLang: 'en',
  },
  pressById('figaro-ai-war-2023'),
  pressById('ap-iran-steel-2022'),
  pressById('nrc-surveillance-2022'),
  pressById('france24-nso-2021'),
  pressById('repubblica-israel-iran-2020'),
];

const ilGiornale = pressById('ilgiornale-italy-2018');

export const archive: MediaArchiveItem[] = [
  {
    id: 'figaro-pagers-2024',
    outlet: 'Le Figaro',
    title: 'Attaque massive au Liban: une opération spectaculaire et complexe à organiser',
    date: '18 September 2024',
    url: 'https://www.lefigaro.fr/international/attaque-massive-au-liban-une-operation-spectaculaire-et-complexe-a-organiser-20240918',
    note: 'Supply-chain sabotage and technological warfare',
    status: 'verified',
    originalLang: 'fr',
  },
  {
    id: 'newsweek-kaspersky-2017',
    outlet: 'Newsweek',
    title: 'Trump Team Leaks About Israel’s Hack of Kaspersky Lab Could Further “Damage” Ties, Experts Warn',
    date: '17 October 2017',
    url: 'https://www.newsweek.com/trump-team-leaks-about-israels-hack-kaspersky-lab-could-further-damage-ties-686500',
    note: 'US–Israel intelligence sharing and Kaspersky Lab',
    status: 'verified',
  },
  {
    id: 'ilsole24ore-digital-identity-2020',
    outlet: 'Il Sole 24 Ore',
    title: 'Tutti i rischi delle identità digitali',
    date: '6 June 2020',
    url: 'https://www.assosoftware.it/attachments/article/2642/AssoSoftwareDayPress06062020.pdf',
    note: 'Industria 4.0 · digital identity and data',
    status: 'verified',
    originalLang: 'it',
  },
  {
    id: ilGiornale.id,
    outlet: ilGiornale.outlet,
    title: ilGiornale.title,
    date: ilGiornale.date,
    url: ilGiornale.url,
    note: 'Full interview on defence and cybersecurity',
    status: 'verified',
    originalLang: 'it',
  },
  ...baseArchive,
];
