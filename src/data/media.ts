export type MediaImage = {
  base: string;
  widths: readonly number[];
  width: number;
  height: number;
  alt: string;
};

type MediaStatus = 'verified' | 'owner-archive' | 'source-pending';

export type MediaVideoItem = {
  id: string;
  kind: 'video';
  outlet: string;
  title: string;
  date: string;
  meta?: string;
  url?: string;
  image?: MediaImage;
  posterLabel?: string;
  visualMode: 'poster' | 'typography';
  status: MediaStatus;
  originalLang?: 'en' | 'he' | 'it' | 'ru';
};

export type MediaPressItem = {
  id: string;
  kind: 'press';
  outlet: string;
  title: string;
  date: string;
  url: string;
  image: MediaImage;
  status: Extract<MediaStatus, 'verified'>;
  originalLang?: 'en' | 'fr' | 'it' | 'nl';
};

export type MediaArchiveItem = {
  id: string;
  outlet: string;
  title: string;
  date: string;
  url: string;
  note?: string;
  status: MediaStatus;
  originalLang?: 'en' | 'he' | 'fr' | 'it' | 'pl';
};

export type MediaStageItem = {
  city: string;
  event: string;
  date: string;
  url: string;
};

export type PressKitItem = {
  id: string;
  label: string;
  detail: string;
  kind: 'download' | 'external' | 'contact' | 'todo';
  url?: string;
};

export const lead = {
  outlet: 'RAI · Codice: la vita è digitale',
  title: 'Codice: la vita è digitale',
  date: '10 May 2020',
  url: 'https://youtu.be/pb8YD_ic1xE',
  meta: 'RAI 1 · Italian',
  status: 'owner-archive' as const,
  image: {
    base: 'codice-2020',
    widths: [480, 768, 1024],
    width: 1024,
    height: 576,
    alt: 'Lior Tabansky speaking on RAI Codice: la vita è digitale',
  } satisfies MediaImage,
  secondaryImage: {
    base: 'codice-network',
    widths: [480, 768, 1024],
    width: 1024,
    height: 576,
    alt: 'Network-science installation shown in the RAI Codice episode',
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
      width: 640,
      height: 360,
      alt: 'Lior Tabansky discussing Bank Leumi and Meta Israel on Channel Economy',
    },
    visualMode: 'poster',
    status: 'owner-archive',
  },
  {
    id: 'channel14-pegasus-2022',
    kind: 'video',
    outlet: 'Channel 14',
    title: 'Is the police hacking phones using Pegasus?',
    date: '19 January 2022',
    url: 'https://youtu.be/6e5bnT04vO8',
    meta: 'Hebrew · owner archive',
    image: {
      base: 'channel14-2022',
      widths: [480, 768],
      width: 768,
      height: 432,
      alt: 'Lior Tabansky discussing police phone hacking and Pegasus on Channel 14',
    },
    visualMode: 'poster',
    status: 'owner-archive',
  },
  {
    id: 'ntv-innovation-2021',
    kind: 'video',
    outlet: 'NTV',
    title: 'Building innovation ecosystems: Silicon Valley, universities and the Israeli experience',
    date: '8 December 2021',
    meta: 'Russian · national broadcast',
    url: 'https://www.ntv.ru/novosti/2642205/',
    image: {
      base: 'ntv-2021',
      widths: [480, 768],
      width: 768,
      height: 432,
      alt: 'Lior Tabansky discussing innovation systems on NTV',
    },
    visualMode: 'poster',
    status: 'verified',
  },
  {
    id: 'rainews-russia-2019',
    kind: 'video',
    outlet: 'RaiNews',
    title: 'Russia and national cybersecurity strategy',
    date: '12 May 2019',
    meta: 'Interview by Annamaria Esposito · Italian',
    url: 'https://www.rainews.it/archivio-rainews/media/La-Russia-e-le-strategie-informatiche-per-la-sicurezza-nazionale-intervista-a-Lior-Tabansky-0b82acc3-a13f-4956-83d7-eccd5bee6229.html',
    image: {
      base: 'rainews-2019',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'Lior Tabansky interviewed by RaiNews 24 about Russia and cybersecurity strategy',
    },
    visualMode: 'poster',
    status: 'verified',
  },
  {
    id: 'channel10-undersea-2015',
    kind: 'video',
    outlet: 'Channel 10 · London et Kirschenbaum',
    title: 'Could Russian ships cut off the internet?',
    date: '27 October 2015',
    url: 'https://youtu.be/EyymYGiIbxg',
    meta: 'Hebrew · owner archive',
    image: {
      base: 'channel10-2015',
      widths: [480, 768],
      width: 768,
      height: 432,
      alt: 'Lior Tabansky on Channel 10 discussing threats to undersea internet cables',
    },
    visualMode: 'poster',
    status: 'owner-archive',
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
    image: {
      base: 'press-figaro',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'Le Figaro article preview about artificial intelligence in the Israel-Hamas war',
    },
    status: 'verified',
    originalLang: 'fr',
  },
  {
    id: 'ap-iran-steel-2022',
    kind: 'press',
    outlet: 'Associated Press',
    title: 'Cyberattack forces Iran steel company to halt production',
    date: '27 June 2022',
    url: 'https://apnews.com/article/technology-middle-east-iran-dubai-b0404963ae23e5008439a0b607952de1',
    image: {
      base: 'press-ap',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'Associated Press article preview about the cyberattack on an Iranian steel company',
    },
    status: 'verified',
    originalLang: 'en',
  },
  {
    id: 'nrc-surveillance-2022',
    kind: 'press',
    outlet: 'NRC',
    title: 'Surveillance-industrie Israël in schijnwerpers door Pegasus-schandaal',
    date: '4 January 2022',
    url: 'https://www.nrc.nl/nieuws/2022/01/04/surveillance-industrie-israel-in-schijnwerpers-door-pegasus-schandaal-a4075654',
    image: {
      base: 'press-nrc',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'NRC article preview about the Pegasus surveillance-industry scandal',
    },
    status: 'verified',
    originalLang: 'nl',
  },
  {
    id: 'france24-nso-2021',
    kind: 'press',
    outlet: 'France 24',
    title: 'Entre NSO et le pouvoir israélien, des liens troubles',
    date: '21 July 2021',
    url: 'https://www.france24.com/fr/moyen-orient/20210721-entre-nso-et-le-pouvoir-isra%C3%A9lien-des-liens-troubles',
    image: {
      base: 'press-france24',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'France 24 article preview about links between NSO and Israeli power',
    },
    status: 'verified',
    originalLang: 'fr',
  },
  {
    id: 'repubblica-israel-iran-2020',
    kind: 'press',
    outlet: 'la Repubblica',
    title: 'Israele vs Iran: il nuovo fronte di guerra è il cyberspazio',
    date: '20 May 2020',
    url: 'https://www.repubblica.it/tecnologia/sicurezza/2020/05/20/news/israele_vs_iran_il_nuovo_fronte_di_guerra_e_il_cyberspazio-257140929/',
    image: {
      base: 'press-repubblica',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'la Repubblica article preview about cyber conflict between Israel and Iran',
    },
    status: 'verified',
    originalLang: 'it',
  },
  {
    id: 'ilgiornale-italy-2018',
    kind: 'press',
    outlet: 'Il Giornale',
    title: 'Difesa e cyber-sicurezza, l’Italia è in ritardo di 10 anni',
    date: '7 July 2018',
    url: 'https://www.ilgiornale.it/news/politica/difesa-e-cyber-sicurezza-litalia-ritardo-10-anni-1549933.html',
    image: {
      base: 'press-ilgiornale',
      widths: [480, 768],
      width: 768,
      height: 480,
      alt: 'Il Giornale article preview about Italy and cybersecurity',
    },
    status: 'verified',
    originalLang: 'it',
  },
];

export const archive: MediaArchiveItem[] = [
  {
    id: 'rai-codice-2017',
    outlet: 'RAI · Codice: la vita è digitale',
    title: 'Cybersicurezza, esperti a confronto',
    date: '18 August 2017',
    url: 'https://www.raiplay.it/video/2017/08/Cybersicurezza-esperti-a-confronto---18082017-753fa4f2-2a8e-4437-827f-7e2053734062.html',
    note: 'First-season RAI appearance',
    status: 'verified',
    originalLang: 'it',
  },
  {
    id: 'jpost-nso-2021',
    outlet: 'The Jerusalem Post',
    title: 'NSO, surveillance and the double-edged sword of the Start-Up Nation',
    date: '22 July 2021',
    url: 'https://www.jpost.com/israel-news/nso-surveillance-and-the-double-edged-sword-of-the-start-up-nation-674635',
    status: 'verified',
  },
  {
    id: 'ynet-technology-2007',
    outlet: 'Ynet',
    title: 'Early work on technology and military adaptation',
    date: '4 July 2007',
    url: 'https://www.ynet.co.il/articles/0,7340,L-3421276,00.html',
    note: 'From the archive',
    status: 'verified',
    originalLang: 'he',
  },
];

export const mediaTodo = ['Assess the owner-supplied i24 English appearance when the main video is available.'];

export const stages: MediaStageItem[] = [
  {
    city: 'Tallinn',
    event: 'NATO CCDCOE · CyCon',
    date: '2016',
    url: 'https://ccdcoe.org/library/publications/8th-international-conference-on-cyber-conflict-proceedings-2016/',
  },
  {
    city: 'Copenhagen',
    event: 'Danish Parliament · public hearing on military cybersecurity',
    date: '11 September 2019',
    url: 'https://www.ft.dk/aktuelt/nyheder/2019/09/20190911-fou-militaer-cybersikkerhed',
  },
  {
    city: 'Rome',
    event: 'Camera dei Deputati · academic session',
    date: '29 September 2015',
    url: 'https://www.camera.it/leg17/1131?shadow_comunicatostampa=9417',
  },
  {
    city: 'Amsterdam',
    event: 'Future of War Conference',
    date: '2022',
    url: 'https://faculteitmilitairewetenschappen.nl/attachment/e03b6308-a385-4ceb-97cd-366cc6231af8',
  },
  {
    city: 'Singapore',
    event: 'APPSNO',
    date: '2018',
    url: 'https://rsis.edu.sg/rsis-news-article/rsis/appsno-2018/',
  },
  {
    city: 'Tel Aviv',
    event: 'Cyber Week · critical-infrastructure protection',
    date: '2023',
    url: 'https://cyberweek.tau.ac.il/2023/Events/Scaling-up-Cyber-Capacity-Building%3A-The-Sectoral-Approach-to-Critical-Infrastructure-Protection',
  },
];

export const pressKit: PressKitItem[] = [
  {
    id: 'portrait-2x3',
    label: 'Portrait headshot',
    detail: '2:3 · high resolution JPG',
    kind: 'download',
    url: 'images/portraits/lior-tabansky-portrait-2x3-1024.jpg',
  },
  {
    id: 'portrait-square',
    label: 'Square headshot',
    detail: '1:1 · high resolution JPG',
    kind: 'download',
    url: 'images/portraits/lior-tabansky-portrait-square-960.jpg',
  },
  {
    id: 'book',
    label: 'Cybersecurity in Israel',
    detail: 'Book details · Springer',
    kind: 'external',
    url: 'https://link.springer.com/book/10.1007/978-3-319-18986-4',
  },
  {
    id: 'world-bank-scmm',
    label: 'Sectoral Cybersecurity Maturity Model',
    detail: 'World Bank publication',
    kind: 'external',
    url: 'https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099062623085028392',
  },
  {
    id: 'press-contact',
    label: 'Press contact',
    detail: 'liortabansky@gmail.com',
    kind: 'contact',
    url: 'mailto:liortabansky@gmail.com',
  },
  {
    id: 'bio-pdf',
    label: 'Downloadable bio PDF',
    detail: 'Coming soon',
    kind: 'todo',
  },
];
