import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  // Ignorer les routes API et les fichiers statiques
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Vérifier si le cookie existe déjà
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return response;
  }

  // Détecter la langue via Accept-Language
  const acceptLanguage = request.headers.get('accept-language');
  let detectedLocale: Locale = defaultLocale;

  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().split('-')[0])
      .filter((lang): lang is Locale => locales.includes(lang as Locale));

    if (browserLocales.length > 0) {
      detectedLocale = browserLocales[0];
    }
  }

  // Définir le cookie avec la langue détectée
  response.cookies.set('NEXT_LOCALE', detectedLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 an
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)'],
};
