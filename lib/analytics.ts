// Google Analytics 4 / GTM Event Tracking Utility
// Configuration: Remplacez GA_MEASUREMENT_ID par votre ID GA4 (format: G-XXXXXXXXXX)

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Types pour les événements
type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

// Déclaration du type gtag pour TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Vérifie si gtag est disponible
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Page view tracking
export const pageview = (url: string) => {
  if (!isGtagAvailable() || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Event tracking générique
export const event = ({ action, category, label, value, ...params }: GTagEvent) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...params,
  });
};

// ============================================
// ÉVÉNEMENTS SPÉCIFIQUES UPJUNOO PRO
// ============================================

// --- DOWNLOAD EVENTS ---

export const trackDownloadClick = (
  appType: 'client' | 'driver',
  platform: 'apk' | 'playstore' | 'appstore'
) => {
  event({
    action: 'download_click',
    category: 'Download',
    label: `${appType}_${platform}`,
    app_type: appType,
    platform: platform,
  });
};

export const trackQRCodeView = (appType: 'client' | 'driver' | 'universal') => {
  event({
    action: 'qr_code_view',
    category: 'Download',
    label: appType,
    app_type: appType,
  });
};

// Platform detection tracking
export const trackPlatformDetection = (
  detected: 'ios' | 'android' | 'desktop' | 'unknown',
  isMobile: boolean
) => {
  event({
    action: 'platform_detection',
    category: 'Download',
    label: detected,
    platform: detected,
    is_mobile: isMobile,
  });
};

// App selection tracking
export const trackAppSelection = (
  appType: 'rider' | 'driver',
  platform: 'ios' | 'android' | 'desktop'
) => {
  event({
    action: 'app_selection',
    category: 'Download',
    label: `${appType}_${platform}`,
    app_type: appType,
    platform: platform,
  });
};

// Auto redirect tracking
export const trackAutoRedirect = (
  appType: 'rider' | 'driver',
  platform: 'ios' | 'android'
) => {
  event({
    action: 'auto_redirect',
    category: 'Download',
    label: `${appType}_${platform}`,
    app_type: appType,
    platform: platform,
  });
};

// Platform toggle tracking
export const trackPlatformToggle = (
  from: string,
  to: string
) => {
  event({
    action: 'platform_toggle',
    category: 'Download',
    label: `${from}_to_${to}`,
    from_platform: from,
    to_platform: to,
  });
};

// --- CONTACT EVENTS ---

export const trackContactFormView = (source?: string) => {
  event({
    action: 'contact_form_view',
    category: 'Contact',
    label: source || 'direct',
    source: source,
  });
};

export const trackContactFormSubmit = (subject: string, source?: string) => {
  event({
    action: 'contact_submit',
    category: 'Contact',
    label: subject,
    subject: subject,
    source: source,
  });
};

export const trackContactFormError = (errorType: string) => {
  event({
    action: 'contact_form_error',
    category: 'Contact',
    label: errorType,
  });
};

// --- LEAD EVENTS ---

export const trackFranchiseLead = (action: 'page_view' | 'cta_click' | 'email_click' | 'website_click') => {
  event({
    action: 'franchise_lead',
    category: 'Lead',
    label: action,
    lead_type: 'franchise',
  });
};

export const trackPartnerLead = (
  partnerType: 'chauffeur' | 'partenaire' | 'franchise',
  action: 'page_view' | 'cta_click' | 'form_submit' | 'email_click'
) => {
  event({
    action: 'partner_lead',
    category: 'Lead',
    label: `${partnerType}_${action}`,
    partner_type: partnerType,
    lead_action: action,
  });
};

export const trackDriverApplication = (action: 'page_view' | 'cta_click' | 'form_start' | 'form_submit') => {
  event({
    action: 'driver_application',
    category: 'Lead',
    label: action,
    lead_type: 'driver',
  });
};

// --- NEWSLETTER EVENTS ---

export const trackNewsletterSignup = (status: 'submit' | 'success' | 'error') => {
  event({
    action: 'newsletter_signup',
    category: 'Newsletter',
    label: status,
  });
};

// --- NAVIGATION EVENTS ---

export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'CTA',
    label: ctaName,
    location: location,
  });
};

export const trackExternalLink = (url: string, linkType: string) => {
  event({
    action: 'external_link_click',
    category: 'Navigation',
    label: url,
    link_type: linkType,
  });
};

export const trackSocialClick = (platform: string) => {
  event({
    action: 'social_click',
    category: 'Social',
    label: platform,
  });
};

// --- SERVICE EVENTS ---

export const trackServiceView = (serviceName: string) => {
  event({
    action: 'service_view',
    category: 'Service',
    label: serviceName,
  });
};

export const trackServiceCTA = (serviceName: string, ctaType: string) => {
  event({
    action: 'service_cta_click',
    category: 'Service',
    label: `${serviceName}_${ctaType}`,
    service: serviceName,
    cta_type: ctaType,
  });
};

// --- SCROLL & ENGAGEMENT EVENTS ---

export const trackScrollDepth = (percentage: 25 | 50 | 75 | 100, pageName: string) => {
  event({
    action: 'scroll_depth',
    category: 'Engagement',
    label: pageName,
    value: percentage,
  });
};

export const trackTimeOnPage = (seconds: number, pageName: string) => {
  event({
    action: 'time_on_page',
    category: 'Engagement',
    label: pageName,
    value: seconds,
  });
};

// --- BLOG EVENTS ---

export const trackBlogPostView = (postTitle: string, postSlug: string) => {
  event({
    action: 'blog_post_view',
    category: 'Blog',
    label: postTitle,
    post_slug: postSlug,
  });
};

export const trackBlogShare = (postTitle: string, platform: string) => {
  event({
    action: 'blog_share',
    category: 'Blog',
    label: `${postTitle}_${platform}`,
    share_platform: platform,
  });
};
