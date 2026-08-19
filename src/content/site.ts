export const pageKeys = ['home', 'about', 'media', 'writing'] as const;
export const launchPageKeys = ['home', 'about', 'writing'] as const;

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
        title: 'Dr. Lior Tabansky — strategy for defense innovation, AI, and national resilience',
        description:
          "For twenty years, one question: how a government or a company turns technology into power. The answer is never the technology — it's how you organize around it.",
      },
      about: {
        nav: 'About',
        title: 'About — Dr. Lior Tabansky',
        description:
          'For twenty years, one question: why capable states and companies stay insecure — and how defense innovation, AI, and national resilience actually get built.',
      },
      media: { nav: 'Media', title: 'Media', description: 'Selected appearances and commentary.' },
      writing: {
        nav: 'Writing',
        title: 'Writing — Dr. Lior Tabansky',
        description: 'A few arguments on AI, cyber-power, and national resilience — the thinking behind the work.',
      },
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
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${locale}/${paths[page]}`;
}
