export const pageKeys = ['home', 'media', 'about'] as const;
export const launchPageKeys = ['home', 'media'] as const;

export type Locale = 'en' | 'he';
export type PageKey = (typeof pageKeys)[number];

export interface LocaleContent {
  languageName: string;
  switchLabel: string;
  privateInquiries: string;
  pages: Record<PageKey, { nav: string; title: string; description: string }>;
}

export const siteContent: Record<Locale, LocaleContent> = {
  en: {
    languageName: 'English',
    switchLabel: 'עברית',
    privateInquiries: 'Private inquiries',
    pages: {
      home: {
        nav: 'Profile',
        title: 'Dr. Lior Tabansky — Strategic technology adviser',
        description:
          'Strategic technology adviser to governments and institutions working across cyber, AI, critical systems and national capability.',
      },
      media: {
        nav: 'Media',
        title: 'Media — Dr. Lior Tabansky',
        description:
          'Selected interviews, television appearances and international press coverage on innovation systems, AI, cybersecurity and national resilience.',
      },
      about: {
        nav: 'Profile',
        title: 'Profile — Dr. Lior Tabansky',
        description: 'The current profile is available on the home page.',
      },
    },
  },
  he: {
    languageName: 'עברית',
    switchLabel: 'EN',
    privateInquiries: 'לפניות פרטיות',
    pages: {
      home: { nav: 'בית', title: 'ליאור טבנסקי', description: 'סייבר לאומי וחדשנות ביטחונית.' },
      media: { nav: 'מדיה', title: 'מדיה', description: 'הופעות ופרשנות נבחרות.' },
      about: { nav: 'אודות', title: 'אודות', description: 'רקע מקצועי ונקודות ציון נבחרות.' },
    },
  },
};

export const paths: Record<PageKey, string> = {
  home: '',
  media: 'media/',
  about: 'about/',
};

export function pagePath(locale: Locale, page: PageKey): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${locale}/${paths[page]}`;
}
