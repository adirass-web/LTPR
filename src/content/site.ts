export const pageKeys = ['home', 'about', 'media', 'writing'] as const;

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
      home: { nav: 'Home', title: 'Lior Tabansky', description: 'National cybersecurity and defense innovation.' },
      about: { nav: 'About', title: 'About', description: 'Professional background and selected credentials.' },
      media: { nav: 'Media', title: 'Media', description: 'Selected appearances and commentary.' },
      writing: { nav: 'Writing', title: 'Writing', description: 'Selected writing and analysis.' },
    },
  },
  he: {
    languageName: 'עברית',
    switchLabel: 'EN',
    privateInquiries: 'לפניות פרטיות',
    pages: {
      home: { nav: 'בית', title: 'ליאור טבנסקי', description: 'סייבר לאומי וחדשנות ביטחונית.' },
      about: { nav: 'אודות', title: 'אודות', description: 'רקע מקצועי ונקודות ציון נבחרות.' },
      media: { nav: 'מדיה', title: 'מדיה', description: 'הופעות ופרשנות נבחרות.' },
      writing: { nav: 'כתיבה', title: 'כתיבה', description: 'כתיבה וניתוח נבחרים.' },
    },
  },
};

export const paths: Record<PageKey, string> = {
  home: '',
  about: 'about/',
  media: 'media/',
  writing: 'writing/',
};

export function pagePath(locale: Locale, page: PageKey): string {
  return `/${locale}/${paths[page]}`;
}
