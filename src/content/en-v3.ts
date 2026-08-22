import { sources } from '~/content/sources';

export const homeV3 = {
  hero: {
    title: 'Advantage is created, not bought.',
    standfirst:
      'Technology creates strategic advantage only when people, institutions and systems can turn it into a decision that works.',
  },
  workTitle: 'Work',
  areas: [
    {
      title: 'Innovation systems',
      paragraphs: [
        'Innovation does not come from a laboratory alone. Governments, industry and universities create it when they share goals, knowledge and risk.',
        'In “Towards a Theory of Cyber Power,” I examine Israel as a case in which institutions, not tools alone, shaped strategic capability.',
      ],
      citations: [sources.cyberPower.url, sources.cybersecurityInIsrael.url],
    },
    {
      title: 'AI and organizational advantage',
      paragraphs: [
        'A useful AI program begins with a decision someone needs to improve, not with a model to buy.',
        'The work is to define the capability, prepare the organization and make the technology change what happens next.',
      ],
      citations: [],
    },
    {
      title: 'Digital trust and critical systems',
      paragraphs: [
        'Digital trust is built where essential services meet their users: in the people who govern data, operating systems and infrastructure.',
        'Sectoral cybersecurity has to account for energy, health, finance and digital infrastructure together, rather than treating cyber risk as an isolated technical problem.',
      ],
      citations: [
        sources.sectoralCybersecurityMaturityModel.url,
        sources.progressInternationalJournal.url,
        sources.progressJournalOfCyberPolicy.url,
      ],
    },
    {
      title: 'National resilience',
      paragraphs: [
        'Resilience is the ability of a country or sector to keep essential services working under pressure, learn from failure and recover capacity.',
        'PROGRESS applies systems thinking to sector-level cybersecurity so that the capability remains after the project ends.',
      ],
      citations: [
        sources.sectoralCybersecurityMaturityModel.url,
        sources.progressInternationalJournal.url,
        sources.progressJournalOfCyberPolicy.url,
      ],
    },
  ],
  record: {
    title: 'Selected record',
    items: [
      'Doctorate, Tel Aviv University',
      'Cybersecurity in Israel, Springer, with Major General Isaac Ben-Israel',
      '“Towards a Theory of Cyber Power,” presented at NATO CCDCOE',
      'Singapore National Cybersecurity Strategy: vision, goals and 70+ tailored policy recommendations',
      'Briefings to the parliaments of Poland, Denmark and Italy',
      'Consulting across 14 developed and emerging economies',
    ],
  },
  method: {
    title: 'Method',
    paragraphs: [
      'I use systems thinking to examine how sectors make decisions, share responsibility and keep working under stress.',
      'The point is not another assessment. It is a capability that remains after the project ends.',
    ],
    citations: [
      sources.systemsThinking.url,
      sources.progressInternationalJournal.url,
      sources.progressJournalOfCyberPolicy.url,
    ],
  },
  publicRecord: {
    title: 'Public record',
    description: 'Selected interviews, commentary and coverage across several languages.',
    linkLabel: 'Media',
  },
};
