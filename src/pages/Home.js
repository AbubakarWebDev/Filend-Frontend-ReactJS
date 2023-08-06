import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Features from "../components/Features";
import SiteLayout from "../layouts/SiteLayout";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/ServicesSection";

const Home = () => {
  return (
    <section>
      <Hero />
      <HowItWorks />
      <Services />
      <Features />
      <Benefits />
    </section>
  );
};
export default SiteLayout(Home);
