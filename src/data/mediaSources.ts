export type MediaSource = {
  description: string;
  url: string;
  linkLabel: string;
};

// Publisher context is separate from the article or recording URL.
// Historical broadcasters retain their identity; archive hosts are named explicitly.
export const mediaSources: Record<string, MediaSource> = {
  'RAI 1': {
    description: 'Italy’s public broadcaster · Television channel',
    url: 'https://www.rai.it/',
    linkLabel: 'RAI official website',
  },
  NTV: {
    description: 'Russian television broadcaster',
    url: 'https://www.ntv.ru/',
    linkLabel: 'NTV official website',
  },
  'RaiNews 24': {
    description: 'RAI’s rolling news channel · Italy’s public broadcaster',
    url: 'https://www.rainews.it/',
    linkLabel: 'RaiNews official website',
  },
  'Channel 10 · London et Kirschenbaum': {
    description: 'Israeli current-affairs programme on the former Channel 10',
    url: 'https://13tv.co.il/writer/tentv_writer_1568823827/',
    linkLabel: 'Programme archive at Channel 13',
  },
  'Channel 14': {
    description: 'Israeli television news channel',
    url: 'https://www.c14.co.il/',
    linkLabel: 'Channel 14 official website',
  },
  'Channel Economy': {
    description: 'Israeli business and financial news channel · Now TV10',
    url: 'https://tv10.co.il/about/',
    linkLabel: 'About Channel Economy / TV10',
  },
  'POLITICO Europe': {
    description: 'European politics and policy news publication',
    url: 'https://www.politico.eu/',
    linkLabel: 'POLITICO Europe official website',
  },
  'Le Figaro': {
    description: 'French national daily newspaper',
    url: 'https://www.lefigaro.fr/',
    linkLabel: 'Le Figaro official website',
  },
  'Associated Press': {
    description: 'International news agency',
    url: 'https://www.ap.org/about/',
    linkLabel: 'About the Associated Press',
  },
  NRC: {
    description: 'Dutch national newspaper',
    url: 'https://www.nrc.nl/',
    linkLabel: 'NRC official website',
  },
  'France 24': {
    description: 'France’s international news channel',
    url: 'https://www.francemediasmonde.com/en/',
    linkLabel: 'France 24 at France Médias Monde',
  },
  'la Repubblica': {
    description: 'Italian national daily newspaper',
    url: 'https://www.repubblica.it/',
    linkLabel: 'la Repubblica official website',
  },
  Newsweek: {
    description: 'US news magazine and digital publication',
    url: 'https://www.newsweek.com/',
    linkLabel: 'Newsweek official website',
  },
  'Il Sole 24 Ore': {
    description: 'Italian business and financial newspaper',
    url: 'https://www.ilsole24ore.com/',
    linkLabel: 'Il Sole 24 Ore official website',
  },
  'Il Giornale': {
    description: 'Italian national daily newspaper',
    url: 'https://www.ilgiornale.it/',
    linkLabel: 'Il Giornale official website',
  },
};
