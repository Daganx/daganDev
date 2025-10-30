import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Timeline from "./components/Timeline/Timeline";
import Headband from "./components/Headband/Headband";

export default function App() {
  return (
    <>
      <Headband />
      <Navigation />
      <Banner />
      <About />
      <Timeline />
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
