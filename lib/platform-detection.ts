/**
 * Platform Detection Utility
 * Détecte la plateforme de l'utilisateur à partir du User-Agent
 */

export interface PlatformInfo {
  platform: 'ios' | 'android' | 'desktop' | 'unknown';
  isMobile: boolean;
  userAgent: string;
}

/**
 * Détecte la plateforme de l'utilisateur
 * @param userAgent - User-Agent string du navigateur
 * @returns PlatformInfo avec plateforme détectée et informations
 */
export function detectPlatform(userAgent: string): PlatformInfo {
  const ua = userAgent.toLowerCase();

  // iOS Detection (iPhone, iPad, iPod)
  if (/iphone|ipad|ipod/.test(ua)) {
    return { platform: 'ios', isMobile: true, userAgent };
  }

  // Android Detection
  if (/android/.test(ua)) {
    return { platform: 'android', isMobile: true, userAgent };
  }

  // Mobile generic (fallback pour autres mobiles)
  if (/mobile/.test(ua)) {
    return { platform: 'unknown', isMobile: true, userAgent };
  }

  // Desktop (par défaut)
  return { platform: 'desktop', isMobile: false, userAgent };
}

/**
 * Détecte si l'utilisateur est sur iPad
 * (iPad peut être détecté comme desktop sur iOS 13+)
 */
export function isIPad(): boolean {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent.toLowerCase();
  return /ipad/.test(ua) ||
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/**
 * Détecte si l'utilisateur est dans un navigateur in-app
 * (Instagram, Facebook, etc.)
 */
export function isInAppBrowser(userAgent: string): boolean {
  return /FBAN|FBAV|Instagram|Line|KAKAOTALK|Twitter/i.test(userAgent);
}

/**
 * Obtient le nom de la plateforme en format lisible
 */
export function getPlatformDisplayName(platform: PlatformInfo['platform']): string {
  const names = {
    ios: 'iOS',
    android: 'Android',
    desktop: 'Desktop',
    unknown: 'Unknown',
  };
  return names[platform];
}
