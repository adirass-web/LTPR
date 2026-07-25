export const sources = {
  cyberPower: {
    label: 'Towards a Theory of Cyber Power: The Israeli Experience with Innovation and Strategy',
    url: 'https://ccdcoe.org/uploads/2018/10/Art-04-Towards-a-Theory-of-Cyber-Power-the-Israeli-Experience-with-Innovation-and-Strategy.pdf',
  },
  cyberPowerIeee: {
    label: 'Towards a Theory of Cyber Power — IEEE Xplore record',
    url: 'https://ieeexplore.ieee.org/document/7529426/',
  },
  cybersecurityInIsrael: {
    label: 'Cybersecurity in Israel',
    url: 'https://link.springer.com/book/10.1007/978-3-319-18986-4',
  },
  sectoralCybersecurityMaturityModel: {
    label: 'Sectoral Cybersecurity Maturity Model',
    url: 'https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099062623085028392',
  },
  progressInternationalJournal: {
    label: 'PROGRESS: the sectoral approach to cyber resilience',
    url: 'https://doi.org/10.1007/s10207-024-00910-3',
  },
  progressJournalOfCyberPolicy: {
    label: 'Making PROGRESS: a sectoral approach to cyber resilience and its application in sustainable development',
    url: 'https://doi.org/10.1080/23738871.2025.2451779',
  },
  systemsThinking: {
    label: 'Incorporating Systems Thinking Into a Cyber Resilience Maturity Model',
    url: 'https://doi.org/10.1109/EMR.2020.3046533',
  },
  nationalCyberDefense: {
    label: 'Israel Defense Forces and National Cyber Defense',
    url: 'https://connections-qj.org/article/israel-defense-forces-and-national-cyber-defense',
  },
  humanRights: {
    label: 'Can Cyber Intelligence Collection Support Human Rights?',
    url: 'https://nationalinterest.org/blog/techland/can-cyber-intelligence-collection',
  },
  israeliCyberFunding: {
    label: 'Israeli cyber firms raised billions in funding last year',
    url: 'https://insight.scmagazineuk.com/israeli-cyber-firms-raised-billions-in-funding-last-year',
  },
  israeliCyberIndustry: {
    label: 'The Battle for Your Computer: Israel and the Growth of the Global Cybersecurity Industry',
    url: 'https://www.rsaconference.com/library/blog/the-battle-for-your-computer-israel-and-the-growth-of-the-global-cybersecurity-industry',
  },
  israeliCyberVendors: {
    label: 'How Many Cybersecurity Vendors Are from Israel?',
    url: 'https://stiennon.substack.com/p/how-many-cybersecurity-vendors-are',
  },
} as const;

export type Source = (typeof sources)[keyof typeof sources];
