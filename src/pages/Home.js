import Hero from "../components/Hero";
import Benifits from "../components/Benifits";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/ServicesSection";
import SiteLayout from "../layouts/SiteLayout";

const Home = () => {
  return (
    <section>
      <Hero />
      <HowItWorks />
      <Services />
      <Features />
      <Benifits />
    </section>
  );
};
export default SiteLayout(Home);
