import type { Metadata } from "next";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";
import { BusinessHero } from "../components/business/business-hero";
import { Catalog } from "../components/business/catalog";
import { BusinessClosing } from "../components/business/business-closing";

export const metadata: Metadata = {
  title: "ProjeX for business: software for your café, salon, or shop",
  description:
    "Done-for-you software for local businesses — QR ordering, bookings, payments, and a one-page site. Branded, built, and live in days, with fixed transparent pricing.",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "ProjeX for business: built, branded, and live in days",
    description:
      "Productized software for cafés, salons, and shops — payments and an admin panel included. Fixed, transparent pricing.",
    url: "/business",
    siteName: "ProjeX",
    type: "website",
    locale: "en_IN",
  },
};

export default function BusinessPage() {
  return (
    <div id="top">
      <SiteNav />
      <main id="main-content">
        <BusinessHero />
        <Catalog />
        <BusinessClosing />
      </main>
      <SiteFooter />
    </div>
  );
}
