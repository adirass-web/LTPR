import { sources } from '~/content/sources';

export const homeV3 = {
  hero: {
    category: 'Strategic technology adviser',
    title: 'Advantage is created, not bought.',
    standfirst:
      'I work with governments and institutions to turn difficult technology and security problems into capabilities that work. The work sits where cyber, AI and critical systems meet policy, organization and execution.',
    role: {
      title: 'Head, Cyber Resilience Laboratory',
      institution: 'Tel Aviv University',
      url: sources.cyberResilienceLabTeam.url,
    },
  },
  publicWork: {
    title: 'Selected public work',
    items: [
      {
        label: 'Singapore',
        title: 'National cybersecurity strategy',
        description:
          'A structured vision, strategic principles and dozens of tailored policy recommendations.',
        sourceLabel: 'Tel Aviv University record',
        sourceUrl: sources.strategicAdvisoryRecord.url,
        citations: [sources.strategicAdvisoryRecord.url],
      },
      {
        label: 'World Bank / PROGRESS',
        title: 'Four critical sectors across 11 countries',
        description:
          'Applied across energy, healthcare, digital infrastructure and financial services, producing tailored recommendations now being implemented.',
        sourceLabel: 'Published field record',
        sourceUrl: sources.progressFieldRecord.url,
        citations: [
          sources.progressFieldRecord.url,
          sources.sectoralCybersecurityMaturityModel.url,
          sources.progressJournalOfCyberPolicy.url,
        ],
      },
    ],
    disclosure: 'Only work already in the public record is named here.',
  },
  israelExperience: {
    title: 'The Israeli experience',
    paragraphs: [
      'Israel’s cyber advantage did not come from technology alone. It grew from the way government, industry and universities connect talent, knowledge and risk.',
      'My work examines what can be transferred from that system, and what cannot.',
    ],
    citations: [sources.cyberPower.url, sources.cybersecurityInIsrael.url],
    book: {
      title: 'Cybersecurity in Israel',
      detail: 'Springer, with Isaac Ben-Israel',
      url: sources.cybersecurityInIsrael.url,
      alt: 'Cover of Cybersecurity in Israel by Lior Tabansky and Isaac Ben-Israel, Springer Briefs in Cybersecurity',
    },
  },
  work: {
    title: 'Where I work',
    areas: [
      {
        title: 'Cyber power and national capability',
        description:
          'National cyber strategy is not a document. It is the institutional ability to set priorities, coordinate responsibility and sustain action.',
        citations: [sources.cyberPower.url, sources.cybersecurityInIsrael.url],
      },
      {
        title: 'AI and decision advantage',
        description:
          'AI matters when it improves a consequential decision. The work begins with the decision, then the organization, data and operating model required to change what happens next.',
        citations: [],
      },
      {
        title: 'Critical systems and digital trust',
        description:
          'Essential services depend on sectors, not single organizations. Resilience requires providers, regulators, supply chains and state institutions to operate as one system.',
        citations: [
          sources.sectoralCybersecurityMaturityModel.url,
          sources.progressInternationalJournal.url,
          sources.progressJournalOfCyberPolicy.url,
        ],
      },
    ],
  },
  method: {
    title: 'Method',
    paragraphs: [
      'I use systems thinking to define the decision, the institutional capability and the path to implementation.',
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
    description:
      'Selected commentary and interviews for RAI 1, POLITICO Europe, Associated Press, Le Figaro and France 24.',
    linkLabel: 'Media',
  },
};
