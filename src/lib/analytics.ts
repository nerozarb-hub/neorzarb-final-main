export type WebsiteEventName =
  | 'website_landing_view'
  | 'website_primary_cta_click'
  | 'website_secondary_cta_click'
  | 'website_case_study_open'
  | 'website_portfolio_project_open'
  | 'website_video_play'
  | 'website_form_start'
  | 'website_form_submit'
  | 'website_form_error'
  | 'website_calendar_open'
  | 'website_whatsapp_click'
  | 'website_faq_open'
  | 'website_industry_select'
  | 'website_package_view'
  | 'website_pricing_view'
  | 'website_package_expand'
  | 'website_package_select'
  | 'website_package_cta_click'
  | 'website_comparison_view'
  | 'website_payment_plan_view'
  | 'website_addon_view'
  | 'website_maintenance_view'
  | 'website_pricing_faq_open'
  | 'website_pricing_form_start'
  | 'website_pricing_form_submit'
  | 'website_pricing_form_error'
  | 'website_pricing_whatsapp_click'
  | 'website_pricing_calendar_click';

type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  landing_route?: string;
};

type EventProperties = Record<string, string | number | boolean | undefined>;

const ATTRIBUTION_KEY = 'nerozarb_website_attribution';

function readStoredAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || '{}') as Attribution;
  } catch {
    return {};
  }
}

export function captureWebsiteAttribution(): Attribution {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const current: Attribution = {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    referrer: document.referrer || undefined,
    landing_route: window.location.pathname,
  };
  const stored = readStoredAttribution();
  const merged = Object.fromEntries(
    Object.entries({ ...stored, ...current }).filter(([, value]) => Boolean(value)),
  ) as Attribution;

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(merged));
  } catch {
    // Analytics must never interrupt the conversion path.
  }

  return merged;
}

export function getWebsiteAttribution() {
  return typeof window === 'undefined' ? {} : captureWebsiteAttribution();
}

export function trackWebsiteEvent(name: WebsiteEventName, properties: EventProperties = {}) {
  if (typeof window === 'undefined') return;

  const payload = {
    event: name,
    ...getWebsiteAttribution(),
    ...properties,
    timestamp: new Date().toISOString(),
  };
  const analyticsWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };

  analyticsWindow.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent('nerozarb:analytics', { detail: payload }));
}
