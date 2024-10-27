import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'br', 'ja', 'es', 'tr', 'ar'] as const;

export const languages = [
  {
    code: "en-US",
    lang: "en",
    language: "English",
  },
  {
    code: "br—BR",
    lang: "br",
    language: "Português",
  },
  {
    code: "es—ES",
    lang: "es",
    language: "Español",
  },
  {
    code: "ja-JP",
    lang: "ja",
    language: "日本語",
  },
  {
    code: "tr-TR",
    lang: "tr",
    language: "Türkçe",
  },
  {
    code: "ar-AR",
    lang: "ar",
    language: "العربية",
  }
]

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`，设置为 as-needed可不显示默认路由
export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;

export const getLanguageByLang = (lang) => {
  for (let i = 0; i < languages.length; i++) {
    if (lang == languages[i].lang) {
      return  languages[i];
    }
  }
}