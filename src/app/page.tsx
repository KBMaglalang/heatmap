// components

import HomepageHero from "@/components/features/HomepageHero";
import HomepageCallToAction from "@/components/features/HomepageCallToAction";
import HomepageFeatureSection from "@/components/features/HomepageFeatureSection";
import HomepageGallery from "@/components/features/HomepageGallery";
import HomepageContent from "@/components/features/HomepageContent";
import HomepageContactForm from "@/components/features/HomepageContactForm";

export default function Home() {
  return (
    <main className="">
      {/* hero */}
      <HomepageHero />

      {/* call to action */}
      <HomepageCallToAction />

      {/* feature */}
      <HomepageFeatureSection />

      {/* content */}
      <HomepageContent />

      {/* gallery */}
      <HomepageGallery />

      {/* contact form */}
      <HomepageContactForm />
    </main>
  );
}
