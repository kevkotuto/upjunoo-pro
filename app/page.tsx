import {
  HeroSection,
  ServicesSection,
  ServiceTaxiSection,
  ServiceLivraisonSection,
  ServiceLocationSection,
  ServiceFretSection,
  ServicePartenaireSection,
  StatsSection,
  FeaturesSection,
  WhyUpjunooSection,
  DriveSection,
  DownloadSection,
  CountriesSection,
  CTASection,
  NewsletterSection,
  FAQSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ServiceTaxiSection />
      <ServiceLivraisonSection />
      <ServiceLocationSection />
      <ServiceFretSection />
      <ServicePartenaireSection />
      <WhyUpjunooSection />
      <FeaturesSection />
      <DriveSection />
      <StatsSection />
      <DownloadSection />
      <CountriesSection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
