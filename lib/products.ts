/* ============================================================
   ProjeX — productized "for businesses" catalog (Phase 6)

   Single source of truth for the /business catalog and every
   /business/[slug] detail page. Pure data, no JSX — the UI reads
   these records and renders them in the existing "Build Log" system.

   Pricing here is FIXED and transparent (the deliberate contrast with
   the negotiable student-project pricing). priceFrom / monthly are whole
   INR rupees; format at the edge with formatINR().
   ============================================================ */

export type ProductFaq = {
  q: string;
  a: string;
};

export type Product = {
  /** Stable internal id (analytics, keys). */
  id: string;
  /** URL segment under /business/[slug]. */
  slug: string;
  name: string;
  /** One line, sits under the name on cards and the detail hero. */
  tagline: string;
  /** Mono chip on cards (e.g. "Café & Restaurant"). */
  category: string;
  /** Who it's built for — short audience line. */
  forWho: string;
  /** Fixed starting price in INR (whole rupees). */
  priceFrom: number;
  /** Optional monthly maintenance/hosting in INR, or null if none. */
  monthly: number | null;
  /** Typical turnaround in days. */
  timelineDays: number;
  /** Live demo link (placeholder "#" until a real demo exists). */
  demoUrl: string;
  /** Card/hero thumbnail (on-brand SVG in /public). */
  thumb: string;
  /** Detail-page gallery (on-brand SVGs in /public). */
  screenshots: string[];
  /** What the system does — short, scannable. */
  features: string[];
  /** What's in the box — deliverables. */
  included: string[];
  faqs: ProductFaq[];
};

/* Fixed price anchors kept as named constants so they're easy to find
   and adjust without hunting through prose. */
const VAN_LAVINO_PRICE_FROM = 14999;
const VAN_LAVINO_MONTHLY = 799;

const SALON_PRICE_FROM = 12999;
const SALON_MONTHLY = 699;

const LOCAL_SITE_PRICE_FROM = 6999;

export const products: Product[] = [
  {
    id: "van-lavino",
    slug: "van-lavino",
    name: "Van Lavino",
    tagline:
      "QR-menu ordering, Razorpay checkout, and a live kitchen dashboard — your whole counter, online.",
    category: "Café & Restaurant",
    forWho: "Cafés, restaurants, and cloud kitchens",
    priceFrom: VAN_LAVINO_PRICE_FROM,
    monthly: VAN_LAVINO_MONTHLY,
    timelineDays: 5,
    demoUrl: "#",
    thumb: "/products/van-lavino/thumb.svg",
    screenshots: [
      "/products/van-lavino/order.svg",
      "/products/van-lavino/dashboard.svg",
    ],
    features: [
      "Table QR codes open your menu — no app to install",
      "Guests order and pay on their phone via Razorpay (UPI, cards, wallets)",
      "Orders land instantly on a live kitchen + counter dashboard",
      "Edit menu, prices, and sold-out items yourself in seconds",
      "Daily sales, top items, and settlement reports built in",
    ],
    included: [
      "Branded ordering site on your own domain",
      "Razorpay payment integration, wired and tested",
      "Admin dashboard with staff logins",
      "Printable QR table cards in your brand",
      "Setup, menu upload, and a 30-min handover call",
    ],
    faqs: [
      {
        q: "Do my customers need to download anything?",
        a: "No. They scan the table QR, your menu opens in the browser, they order and pay. Nothing to install on either side.",
      },
      {
        q: "How do payments reach me?",
        a: "Payments go straight into your own Razorpay account and settle to your bank on Razorpay's normal cycle. We never touch the money.",
      },
      {
        q: "Can I change the menu after it's live?",
        a: "Yes. Prices, photos, new dishes, and sold-out toggles are all editable from the admin dashboard — no developer needed.",
      },
      {
        q: "What does the monthly fee cover?",
        a: "Hosting, the payment integration staying up to date, backups, and small tweaks. It's optional — you can self-host if you prefer.",
      },
    ],
  },
  {
    id: "salon-booking",
    slug: "salon-booking",
    name: "Booking system for salons & clinics",
    tagline:
      "Let clients book the right slot with the right person — and cut no-shows with reminders. [Placeholder copy]",
    category: "Salon & Clinic",
    forWho: "Salons, spas, and small clinics",
    priceFrom: SALON_PRICE_FROM,
    monthly: SALON_MONTHLY,
    timelineDays: 6,
    demoUrl: "#",
    thumb: "/products/salon-booking/thumb.svg",
    screenshots: [
      "/products/salon-booking/calendar.svg",
      "/products/salon-booking/appointments.svg",
    ],
    features: [
      "Clients pick a service, staff member, date, and time online",
      "Real-time availability that never double-books a chair or room",
      "Automatic WhatsApp / SMS reminders to cut no-shows",
      "Optional deposits at booking via Razorpay",
      "Owner view of the day's schedule across every staff member",
    ],
    included: [
      "Branded booking site on your own domain",
      "Staff, service, and working-hours setup",
      "Reminder messaging wired up",
      "Admin dashboard with per-staff calendars",
      "Setup and a 30-min handover call",
    ],
    faqs: [
      {
        q: "Can each stylist or doctor have their own calendar?",
        a: "Yes. Each staff member gets their own availability and services, and the booking page only offers slots that are genuinely free. [Placeholder copy]",
      },
      {
        q: "Will it reduce no-shows?",
        a: "Automatic reminders before the appointment, plus optional booking deposits, are the two levers that bring no-shows down the most. [Placeholder copy]",
      },
      {
        q: "Can clients reschedule themselves?",
        a: "Yes — a link in their confirmation lets them move or cancel within the rules you set, so your front desk isn't fielding every change. [Placeholder copy]",
      },
    ],
  },
  {
    id: "local-site",
    slug: "local-site",
    name: "Landing & portfolio site",
    tagline:
      "A fast, sharp one-page site that makes a local business look the part and brings in enquiries. [Placeholder copy]",
    category: "Local Business",
    forWho: "Shops, studios, freelancers, and trades",
    priceFrom: LOCAL_SITE_PRICE_FROM,
    monthly: null,
    timelineDays: 3,
    demoUrl: "#",
    thumb: "/products/local-site/thumb.svg",
    screenshots: [
      "/products/local-site/landing.svg",
      "/products/local-site/gallery.svg",
    ],
    features: [
      "One-page site built around your offer and a clear call to action",
      "Gallery or portfolio section to show the work",
      "Click-to-WhatsApp and click-to-call enquiry buttons",
      "Google Maps, hours, and directions built in",
      "Fast on phones and ready for Google to find",
    ],
    included: [
      "Custom one-page site on your own domain",
      "Your branding, copy polish, and images placed",
      "Contact, WhatsApp, and map integration",
      "Basic on-page SEO and social preview",
      "Setup and handover",
    ],
    faqs: [
      {
        q: "Is this just a template?",
        a: "No. It's laid out around your specific offer and brand, not a fill-in-the-blanks theme. [Placeholder copy]",
      },
      {
        q: "Why is there no monthly fee?",
        a: "A static one-page site is cheap to host, so we hand it over and you keep it. Hosting and a domain run a few hundred rupees a year. [Placeholder copy]",
      },
      {
        q: "Can I add more pages later?",
        a: "Yes — start with the landing page and grow into more sections or pages whenever it makes sense. [Placeholder copy]",
      },
    ],
  },
];

/** Look up a single product by its URL slug. */
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** All slugs — used by generateStaticParams to prerender detail pages. */
export function productSlugs(): string[] {
  return products.map((p) => p.slug);
}
