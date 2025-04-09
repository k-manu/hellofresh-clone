import NewAtNomNomBoxSection from "@/components/sections/NewAtHelloFreshSection";
import WhyNomNomBoxSection from "@/components/sections/WhyHelloFreshSection";
import HeroSection from "@/components/sections/HeroSection";
import MenuCategoriesSection from "@/components/sections/MenuCategoriesSection";
import WhatsInsideSection from "@/components/sections/WhatsInsideSection";
import InstagramSection from "@/components/sections/InstagramSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewAtNomNomBoxSection />
      <WhyNomNomBoxSection />
      <MenuCategoriesSection />
      <WhatsInsideSection />
      <InstagramSection />
      <FaqSection />
    </main>
  );
}
