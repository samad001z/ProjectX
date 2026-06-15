import { SiteNav } from "./components/site-nav";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { HowItWorks } from "./components/how-it-works";
import { WhyUs } from "./components/why-us";
import { BuiltWith } from "./components/built-with";
import { SelectedWork } from "./components/selected-work";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { Faq } from "./components/faq";
import { FinalCta } from "./components/final-cta";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <div id="top">
      <SiteNav />
      <main id="main-content">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <BuiltWith />
        <SelectedWork />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
