import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Cta } from "./components/Cta";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <FAQ />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
