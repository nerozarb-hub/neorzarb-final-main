export const SITE_URL =
  import.meta.env.VITE_SITE_URL || 'https://nerozarb.com';

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || 'hello@nerozarb.com';

const rawWhatsAppNumber = String(import.meta.env.VITE_WHATSAPP_NUMBER || '923196507110')
  .replace(/[^\d]/g, '');

export const hasWhatsAppNumber = rawWhatsAppNumber.length >= 10;

export const primaryContactLabel = hasWhatsAppNumber ? 'WhatsApp' : 'Email';

export function buildContactHref(message: string, subject = 'NEROZARB growth audit') {
  if (hasWhatsAppNumber) {
    return `https://wa.me/${rawWhatsAppNumber}?text=${encodeURIComponent(message)}`;
  }

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

export function getExternalLinkProps() {
  return hasWhatsAppNumber
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
}
