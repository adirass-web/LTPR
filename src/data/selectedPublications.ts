import { sources, type Source } from '~/content/sources';

export type SelectedPublication = {
  id: string;
  source: Source;
  supportingSource?: Source;
  citation: string;
  description: string;
  kind: 'authored' | 'institutional';
};

export const selectedPublications: SelectedPublication[] = [
  {
    id: 'innovation',
    source: sources.cybersecurityInIsrael,
    citation: 'Coauthored book · with Isaac Ben-Israel · Springer · 2015',
    description: "Israel's cyber development, innovation ecosystem, strategy and military cyber warfare.",
    kind: 'authored',
  },
  {
    id: 'cybered-conflict',
    source: sources.cyberPower,
    citation: 'Authored paper · CyCon 2016',
    description:
      'A framework connecting strategic objectives, ways and technological means, using Israel to examine innovation and the economic and military dimensions of cyber power.',
    kind: 'authored',
  },
  {
    id: 'critical-infrastructure',
    source: sources.progressJournalOfCyberPolicy,
    supportingSource: sources.progressFieldRecord,
    citation: 'Coauthored paper · Journal of Cyber Policy · 2025',
    description:
      'World Bank work across 11 countries in energy, healthcare, digital infrastructure and financial services. The institutional field record describes tailored recommendations as being implemented.',
    kind: 'authored',
  },
  {
    id: 'sectoral-cyber-resilience',
    source: sources.progressInternationalJournal,
    citation: 'Coauthored paper · International Journal of Information Security · 2025',
    description:
      'A sectoral capability-maturity model connecting organizations, regulators, IT/OT supply chains and national cyber capabilities.',
    kind: 'authored',
  },
  {
    id: 'sectoral-maturity-model',
    source: sources.sectoralCybersecurityMaturityModel,
    citation: 'Supporting institutional record · World Bank · June 2023 consultation draft',
    description:
      'A methodology for assessing sector cybersecurity maturity, interdependencies and critical-service resilience. Tabansky is credited in the cooperating Tel Aviv University research team.',
    kind: 'institutional',
  },
];
