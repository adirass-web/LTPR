import { sources } from '~/content/sources';

export const homeV3 = {
  hero: {
    eyebrow: 'First-principles strategy for defense innovation, AI and national resilience.',
    title: 'Advantage is created, not bought.',
    subhead:
      'Superior technology has never been enough to secure strategic advantage. Not in war, cyber or AI.\n\nFor twenty years, I have worked on one question: how do governments and companies turn technology into power? The answer is not the technology. It is how they organize around it.',
  },
  problemsTitle: 'Three problems I work on',
  problems: [
    {
      title: 'Defense innovation — the edge was never the machine.',
      paragraphs: [
        "Nations don't become cyber powers by guarding the perimeter. They do so by organizing innovation.",
        'I set out why in “Towards a Theory of Cyber Power,” presented at NATO CCDCOE. Israel is the case study. The argument reaches well beyond it.',
      ],
      citations: [sources.cyberPower.url],
    },
    {
      title: 'AI — an organizational problem, not a model problem.',
      paragraphs: [
        'Buying the model is the easy part. The harder work is becoming an organization that can use it.',
        'That gap, not the technology, separates organizations that turn AI into strategic advantage from those that merely acquire it.',
      ],
      citations: [],
    },
    {
      title: 'Capacity building — resilience that outlasts the report.',
      paragraphs: [
        'Most “capacity building” evaporates the week the consultants fly home.',
        "PROGRESS, my sectoral method, treats an entire sector as a living system. The World Bank's maturity model draws on it.",
        'With the Bank, I have applied PROGRESS across four critical sectors in eleven economies, within multi-year development programs each worth hundreds of millions of dollars.',
      ],
      citations: [
        sources.sectoralCybersecurityMaturityModel.url,
        sources.progressInternationalJournal.url,
        sources.progressJournalOfCyberPolicy.url,
      ],
    },
  ],
  proof: [
    'PhD, Tel Aviv University',
    'Cybersecurity in Israel, Springer, with Major General Isaac Ben-Israel',
    '“Towards a Theory of Cyber Power,” presented at NATO CCDCOE',
    'Singapore National Cybersecurity Strategy: vision, goals and 70+ tailored policy recommendations',
    'Briefings to the parliaments of Poland, Denmark and Italy',
    'Consulting across 14 developed and emerging economies',
  ],
  close: 'I work quietly with a small number of governments and investors.',
};

export const aboutV3 = {
  opening: {
    title: 'Technology is almost never the real problem.',
    paragraphs: [
      'For twenty years, I have worked on one question: why do capable countries and companies remain insecure?',
      'Rarely for lack of technology. The problem is how they are organized to use it. Defense innovation, AI and national resilience all come back to that.',
    ],
  },
  sections: [
    {
      label: 'Where it comes from',
      paragraphs: [
        "I didn't arrive at this from a lecture hall. I began in an Israel Air Force technology unit built around a hard bet on multi-domain warfare.",
        'That is where I learned that the advantage was never the machine. It was how people and institutions arranged themselves around it.',
        "I've followed that thread ever since.",
        'I turned that insight into a theory — “Towards a Theory of Cyber Power,” presented at NATO CCDCOE — and into a book, Cybersecurity in Israel, written with Major General Isaac Ben-Israel.',
        "The argument, in a line: cyber power is not the sum of a country's tools. It is what that country can make those tools do in pursuit of its goals.",
        'Israel is the case. Capabilities developed for national-security operations later supported an innovation ecosystem, sustained economic growth and statecraft.',
        'The larger point is organizational: technology becomes strategic power only when institutions can turn it into effect.',
        "Michael Porter's point is useful here: strategy requires choosing what not to do.",
      ],
      citations: [sources.cyberPower.url, sources.cybersecurityInIsrael.url],
    },
    {
      label: 'The method',
      paragraphs: [
        'Then I wanted a method that held up in the field.',
        'I call it PROGRESS. It treats an entire sector as a living system, combining complex-systems thinking, established cybersecurity frameworks and two decades of critical-infrastructure operations.',
        "The World Bank's Sectoral Cybersecurity Maturity Model draws on PROGRESS. Working with the World Bank, I applied the method across energy, health, digital infrastructure and finance in eleven emerging and low-income economies in Africa and Asia.",
        'The work sat inside multi-year World Bank development programs, each worth hundreds of millions of dollars and affecting critical services at national scale.',
        'The objective was resilience that outlasted the project.',
      ],
      citations: [
        sources.sectoralCybersecurityMaturityModel.url,
        sources.progressInternationalJournal.url,
        sources.progressJournalOfCyberPolicy.url,
      ],
    },
    {
      label: 'On AI',
      paragraphs: [
        "A minister's office calls. They want “the best AI” by year's end. Another asks for two hundred trained cyber-warriors.",
        'I ask the question that comes first: to do what?',
        'Which decision will it change? What will you gain? How soon?',
        'The room goes quiet. No one had asked.',
        'Defining the goal is the hard part. Organizations often skip it.',
        'Point a frontier model at a broken process and you have bought a more expensive way to fail.',
        'My work is the unglamorous half: define the capability, identify the decision it should improve, and rebuild the organization so the technology changes what actually happens.',
      ],
      citations: [],
    },
    {
      label: 'The case that stays with me',
      paragraphs: [
        'A development program worth hundreds of millions was ready to launch. Its new elements — the data architecture and models — were genuinely state of the art.',
        'Then we looked at the desks.',
        'The people meant to run it were using unmanaged, shared, obsolete machines on networks nobody owned. That mismatch put the entire program at risk: governance, data protection and security.',
        'Our conclusion — that the program could not roll out as designed — was unwelcome. We were urged to soften it.',
        "We didn't.",
        'The findings were measurable. The method was designed to reveal precisely this kind of mismatch.',
        'I take the record over groupthink every time.',
        'That is what I mean by first principles: not a slogan, but what you do when the finding is inconvenient and true.',
      ],
      citations: [],
    },
    {
      label: 'How I read a deal',
      eyebrow: 'For investors',
      paragraphs: [
        'Investors bring me a defense-AI company that dazzles: a flawless demo, a chart that only points up, an already oversubscribed round.',
        'I ask to see the demo second.',
        'First I want the org chart.',
        'Who owns the roadmap? What happens when the two people holding the product in their heads disagree? Who in this company has ever told the customer no?',
        'The metrics tell you what the company has already done. The organization tells you what it can still do.',
        'The difference between “looks like value” and “is value” appears where the metrics stop and the organization begins.',
        "Much of what I'm paid for is explaining, with reasons, why the company everyone loves won't survive contact with its own operating model.",
      ],
      citations: [],
    },
    {
      label: 'The credentials, once',
      list: [
        'Doctorate, Tel Aviv University: Explaining Cyber-Insecurity',
        'Consulting across 14 developed and emerging economies',
        'A national cybersecurity strategy',
        'Cybersecurity in Israel and peer-reviewed research',
        'Briefings to the parliaments of Poland, Denmark and Italy',
      ],
      paragraphs: [
        'I work natively in English, Russian and Hebrew.',
        "But I'd rather be judged by how I think than by where I've been.",
      ],
      citations: [],
    },
    {
      label: 'On discretion',
      paragraphs: [
        'I work primarily with governments and investors, as well as selected enterprises and individuals.',
        'Some of the work is public: a national cybersecurity strategy, World Bank programs, published research and public briefings.',
        'Most of it is not, and will not be. Discretion is part of the work.',
      ],
      citations: [],
    },
  ],
};
