export type InternationalForumItem = {
  institution: string;
  context: string;
  detail: string;
  url: string;
};

export const internationalForums: InternationalForumItem[] = [
  {
    institution: 'NATO Cooperative Cyber Defence Centre of Excellence',
    context: 'International Conference on Cyber Conflict (CyCon)',
    detail: 'Tallinn · Towards a Theory of Cyber Power · 2016',
    url: 'https://ccdcoe.org/library/publications/8th-international-conference-on-cyber-conflict-proceedings-2016/',
  },
  {
    institution: 'Danish Parliament · Defence Committee',
    context: 'Parliamentary scrutiny of defence and military affairs',
    detail: 'Copenhagen · Expert hearing on military cybersecurity · 2019',
    url: 'https://www.ft.dk/aktuelt/nyheder/2019/09/20190911-fou-militaer-cybersikkerhed',
  },
  {
    institution: 'University of Oxford · Netherlands Defence Academy',
    context: 'British university and Dutch military higher-education institution',
    detail: 'Amsterdam · Future of War Conference · 2022',
    url: 'https://faculteitmilitairewetenschappen.nl/attachment/e03b6308-a385-4ceb-97cd-366cc6231af8',
  },
  {
    institution: 'S. Rajaratnam School of International Studies',
    context: 'School of international affairs at Nanyang Technological University, Singapore',
    detail: 'Asia-Pacific Programme for Senior National Security Officers · 2018',
    url: 'https://rsis.edu.sg/rsis-news-article/rsis/appsno-2018/',
  },
  {
    institution: 'Italian Chamber of Deputies · NATO Parliamentary Assembly delegation',
    context: 'Italy’s lower house of parliament · Delegation to the alliance’s interparliamentary forum',
    detail: 'Rome · Italian–Israeli cybersecurity session · 2015',
    url: 'https://www.camera.it/leg17/1131?shadow_comunicatostampa=9417',
  },
  {
    institution: 'World Bank · Digital Development Global Practice',
    context: 'The development institution’s digital-development team',
    detail: 'Washington, DC · Expert workshop on critical-infrastructure cyber resilience · 2023',
    url: 'https://www.worldbank.org/en/events/2023/06/21/cybertalk-on-securing-critical-infrastructure1#3',
  },
];
