import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
