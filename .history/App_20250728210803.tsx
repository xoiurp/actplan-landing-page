import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Statistics } from "./components/Statistics";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Statistics />
      <Services />
      <Features />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;