export type MediaImage = {
  base: string;
  widths: number[];
  fallbackWidth: number;
  alt: string;
};

export type MediaVideoItem = {
  id: string;
  kind: 'video';
  outlet: string;
  title: string;
  date: string;
  meta?: string;
  url: string;
  image?: MediaImage;
  posterLabel?: string;
  originalLang?: 'en' | 'he' | 'it' | 'ru';
};

export type MediaPressItem = {
  id: string;
  kind: 'press';
  outlet: string;
  title: string;
  date: string;
  url: string;
  imageBase?: string;
  originalLang?: 'en' | 'fr' | 'it' | 'nl';
};

export type MediaArchiveItem = {
  id: string;
  outlet: string;
  title: string;
  date: string;
  url: string;
  note?: string;
  originalLang?: 'en' | 'he' | 'fr' | 'it' | 'pl';
};

export const lead = {
  outlet: 'RAI · Codice: La vita è digitale',
  title: 'Networks, digital society and resilience after lockdown',
  date: '10 May 2020',
  meta: 'RAI 1 · Italian',
  url: 'https://www.raiplay.it/',
  image: {
    base: 'codice-2020',
    widths: [480, 768, 1024],
    fallbackWidth: 1024,
    alt: 'Lior Tabansky speaking on RAI Codice: La vita è digitale',
  } satisfies MediaImage,
  secondaryImage: {
    base: 'codice-network',
    widths: [480, 768, 1024],
    fallbackWidth: 1024,
    alt: 'Network visualization shown in the RAI Codice episode',
  } satisfies MediaImage,
};

export const videos: MediaVideoItem[] = [
  {
    id: 'channel-economy-2026',
    kind: 'video',
    outlet: 'Channel Economy',
    title: 'Bank Leumi v. Meta Israel: responsibility for fraudulent advertising',
    date: '18 August 2026',
    meta: 'Hebrew',
    url: 'https://youtu.be/-M2fTsR8YC8',
    image: {
      base: 'channel-economy',
      widths: [480, 640],
      fallbackWidth: 640,
      alt: 'Lior Tabansky discussing Bank Leumi and Meta Israel on Channel Economy',
    },
  },
  {
    id: 'channel14-pegasus-2022',
    kind: 'video',
    outlet: 'Channel 14',
    title: 'Is the police hacking phones using Pegasus?',
    date: '19 January 2022',
    meta: 'Hebrew',
    url: 'https://www.youtube.com/',
    image: {
      base: 'channel14-2022',
      widths: [480, 768],
      fallbackWidth: 768,
      alt: 'Lior Tabansky discussing police phone hacking and Pegasus on Channel 14',
    },
  },
  {
    id: 'ntv-innovation-2021',
    kind: 'video',
    outlet: 'NTV',
    title: 'Building innovation ecosystems: Silicon Valley, universities and the Israeli experience',
    date: '8 December 2021',
    meta: 'Russian national broadcast',
    url: 'https://www.ntv.ru/novosti/2642205/',
    image: {
      base: 'ntv-2021',
      widths: [480, 768],
      fallbackWidth: 768,
      alt: 'Lior Tabansky discussing innovation systems on NTV',
    },
  },
  {
    id: 'rainews-russia-2019',
    kind: 'video',
    outlet: 'RaiNews',
    title: 'Russia and national cybersecurity strategy',
    date: '12 May 2019',
    meta: 'Interview by Annamaria Esposito · Italian',
    url: 'https://www.rainews.it/archivio-rainews/media/La-Russia-e-le-strategie-informatiche-per-la-sicurezza-nazionale-intervista-a-Lior-Tabansky-0b82acc3-a13f-4956-83d7-eccd5bee6229.html',
    posterLabel: 'RAINEWS · RUSSIA · 2019',
  },
  {
    id: 'channel10-undersea-2015',
    kind: 'video',
    outlet: 'Channel 10 · London et Kirschenbaum',
    title: 'Could Russian ships cut off the internet?',
    date: '27 October 2015',
    meta: 'Hebrew',
    url: 'https://www.youtube.com/@ltabansky6248/videos',
    image: {
      base: 'channel10-2015',
      widths: [480, 768],
      fallbackWidth: 768,
      alt: 'Lior Tabansky on Channel 10 discussing threats to undersea internet cables',
    },
  },
];

export const press: MediaPressItem[] = [
  {
    id: 'figaro-ai-war-2023',
    kind: 'press',
    outlet: 'Le Figaro',
    title: 'Guerre Hamas-Israël: Tsahal fait entrer l’intelligence artificielle dans la bataille',
    date: '4 December 2023',
    url: 'https://www.lefigaro.fr/international/guerre-hamas-israel-tsahal-fait-entrer-l-intelligence-artificielle-dans-la-bataille-20231204',
    imageBase: 'figaro',
    originalLang: 'fr',
  },
  {
    id: 'ap-iran-steel-2022',
    kind: 'press',
    outlet: 'Associated Press',
    title: 'Cyberattack forces Iran steel company to halt production',
    date: '27 June 2022',
    url: 'https://apnews.com/article/technology-middle-east-iran-dubai-b0404963ae23e5008439a0b607952de1',
    imageBase: 'ap',
    originalLang: 'en',
  },
  {
    id: 'nrc-surveillance-2022',
    kind: 'press',
    outlet: 'NRC',
    title: 'Surveillance-industrie Israël in schijnwerpers door Pegasus-schandaal',
    date: '4 January 2022',
    url: 'https://www.nrc.nl/nieuws/2022/01/04/surveillance-industrie-israel-in-schijnwerpers-door-pegasus-schandaal-a4075654',
    imageBase: 'nrc',
    originalLang: 'nl',
  },
  {
    id: 'france24-nso-2021',
    kind: 'press',
    outlet: 'France 24',
    title: 'Entre NSO et le pouvoir israélien, des liens troubles',
    date: '21 July 2021',
    url: 'https://www.france24.com/fr/moyen-orient/20210721-entre-nso-et-le-pouvoir-isra%C3%A9lien-des-liens-troubles',
    originalLang: 'fr',
  },
  {
    id: 'repubblica-israel-iran-2020',
    kind: 'press',
    outlet: 'la Repubblica',
    title: 'Israele vs Iran: il nuovo fronte di guerra è il cyberspazio',
    date: '20 May 2020',
    url: 'https://www.repubblica.it/tecnologia/sicurezza/2020/05/20/news/israele_vs_iran_il_nuovo_fronte_di_guerra_e_il_cyberspazio-257140929/',
    imageBase: 'repubblica',
    originalLang: 'it',
  },
  {
    id: 'ilgiornale-italy-2018',
    kind: 'press',
    outlet: 'Il Giornale',
    title: 'Difesa e cyber-sicurezza, l’Italia è in ritardo di 10 anni',
    date: '7 July 2018',
    url: 'https://www.ilgiornale.it/news/politica/difesa-e-cyber-sicurezza-litalia-ritardo-10-anni-1549933.html',
    originalLang: 'it',
  },
];

export const archive: MediaArchiveItem[] = [
  {
    id: 'rai-codice-2017',
    outlet: 'RAI · Codice: La vita è digitale',
    title: 'Cybersicurezza, esperti a confronto',
    date: '18 August 2017',
    url: 'https://www.raiplay.it/video/2017/08/Cybersicurezza-esperti-a-confronto---18082017-753fa4f2-2a8e-4437-827f-7e2053734062.html',
    note: 'First-season RAI appearance',
    originalLang: 'it',
  },
  {
    id: 'jpost-nso-2021',
    outlet: 'The Jerusalem Post',
    title: 'NSO, surveillance and the double-edged sword of the Start-Up Nation',
    date: '22 July 2021',
    url: 'https://www.jpost.com/israel-news/nso-surveillance-and-the-double-edged-sword-of-the-start-up-nation-674635',
  },
  {
    id: 'ynet-technology-2007',
    outlet: 'Ynet',
    title: 'Early work on technology and military adaptation',
    date: '4 July 2007',
    url: 'https://www.ynet.co.il/articles/0,7340,L-3421276,00.html',
    note: 'From the archive',
    originalLang: 'he',
  },
];

export const mediaTodo = [
  'Assess the owner-supplied i24 English appearance when the main video is available.',
];
