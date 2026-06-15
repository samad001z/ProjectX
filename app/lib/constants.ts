/* Conversion + contact targets. Set these in the environment for production
   (e.g. Vercel env vars). The fallbacks are obvious placeholders for local dev. */
export const GOOGLE_FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ??
  "https://forms.gle/UM94jKEfBAHon7BQ9";

/* WhatsApp number: country code + number, digits only (91 + 10-digit). */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919121019671";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "cracked.ai.tech@gmail.com";

/** Build a wa.me click-to-chat link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
];

/* In-page anchors for the /business page. */
export const BUSINESS_NAV_LINKS = [
  { href: "#catalog", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
];

/* Opening line for businesses reaching out on WhatsApp. */
export const BUSINESS_WHATSAPP_MESSAGE =
  "Hi ProjeX, I run a business and I'm interested in your software solutions. Can we discuss?";

/** Format whole rupees as ₹14,999 (Indian digit grouping). */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
