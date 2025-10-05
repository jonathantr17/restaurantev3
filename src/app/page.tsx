import RestaurantNavigation from "@/components/RestaurantNavigation";
import RestaurantHero from "@/components/RestaurantHero";
import OurStory from "@/components/OurStory";
import FeaturedMenu from "@/components/FeaturedMenu";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import RestaurantFooter from "@/components/RestaurantFooter";

export default function Home() {
  return (
    <main className="relative">
      <RestaurantNavigation />
      <RestaurantHero />
      <OurStory />
      <FeaturedMenu />
      <Benefits /> 
      <Testimonials /> 
      <FinalCTA />
      <RestaurantFooter />
    </main>
  );
}