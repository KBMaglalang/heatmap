// components

import HomepageHero from "@/components/features/HomepageHero";
import HomepageCallToAction from "@/components/features/HomepageCallToAction";
import HomepageFeatureSection from "@/components/features/HomepageFeatureSection";
import HomepageGallery from "@/components/features/HomepageGallery";
import HomepageContent from "@/components/features/HomepageContent";
import HomepageContactForm from "@/components/features/HomepageContactForm";

export default function Home() {
  return (
    <main className="h-screen">
      {/* hero */}
      <HomepageHero />

      {/* call to action */}
      <HomepageCallToAction />

      {/* feature */}
      <HomepageFeatureSection />

      {/* gallery */}
      <HomepageGallery />

      {/* content */}
      <HomepageContent />

      {/* contact form */}
      <HomepageContactForm />
    </main>
  );
}
