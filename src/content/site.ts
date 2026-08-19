export const pageKeys = ['home', 'media', 'about'] as const;
export const launchPageKeys = ['home', 'media', 'about'] as const;

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
        nav: 'Home',
        title: 'Dr. Lior Tabansky — defense innovation, AI and national resilience',
        description:
          'How governments and companies turn technology into power. The decisive factor is not the technology, but how the organization is built around it.',
      },
      media: { nav: 'Media', title: 'Media', description: 'Selected appearances and commentary.' },
      about: {
        nav: 'About',
        title: 'About — Dr. Lior Tabansky',
        description:
          'Why capable governments and companies remain insecure — and how defense innovation, AI and national resilience are built in practice.',
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
