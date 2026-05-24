import Hero from "./sections/Hero/Hero.jsx";
import ServicesPreview from "./sections/ServicesPreview/ServicesPreview.jsx";
import About from "./sections/About/About.jsx";
import Testimonials from "./sections/Testimonials/Testimonials.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import CTA from "./sections/CTA/CTA.jsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <About />
      <Testimonials />
      <Contact />
      <CTA />
    </>
  );
};

export default Home;
