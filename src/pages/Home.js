import Hero from "../components/Hero";
import Benifits from "../components/Benifits";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/ServicesSection";
import SiteLayout from "../layouts/SiteLayout";

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Features />
      <Benifits />
    </>
  );
};
export default SiteLayout(Home);
