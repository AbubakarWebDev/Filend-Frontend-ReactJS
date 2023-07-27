import Hero from "../components/Hero";
import Benifits from "../components/Benifits";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/ServicesSection";
import SiteLayout from "../layouts/SiteLayout";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <Services />
      <Features />
      <Benifits />
    </section>
  );
};
export default SiteLayout(Home);
