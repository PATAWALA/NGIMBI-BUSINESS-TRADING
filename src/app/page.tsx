import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <TrackingSimulator />
        <SourcingForm />
        <ProductCatalog />
        <ServicesSection />
        <WhyUs />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}