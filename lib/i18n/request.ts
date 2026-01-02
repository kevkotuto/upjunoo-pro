import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { locales, defaultLocale, type Locale } from './config';

export default getRequestConfig(async () => {
  // 1. Vérifier le cookie de préférence
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value as Locale | undefined;

  if (cookieLocale && locales.includes(cookieLocale)) {
    return {
      locale: cookieLocale,
      messages: (await import(`@/messages/${cookieLocale}.json`)).default,
    };
  }

  // 2. Détecter via Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().split('-')[0])
      .filter((lang): lang is Locale => locales.includes(lang as Locale));

    if (browserLocales.length > 0) {
      const detectedLocale = browserLocales[0];
      return {
        locale: detectedLocale,
        messages: (await import(`@/messages/${detectedLocale}.json`)).default,
      };
    }
  }

  // 3. Fallback vers la locale par défaut
  return {
    locale: defaultLocale,
    messages: (await import(`@/messages/${defaultLocale}.json`)).default,
  };
});
