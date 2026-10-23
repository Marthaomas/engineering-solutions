import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/ServiceDetails";
import Industries from "./components/Industries";
import Markets from "./components/Markets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HowWeWork from "./components/HowWeWork";
import Careers from "./components/Careers";
import CareersPage from "./components/CareersPage";
import CareersOpportunities from "./components/CareersOpportunities";
import AboutPage from "./components/AboutPage";
import ProjectServices from "./components/ProjectServices";
import EngineeringSolutions from "./components/EngineeringSolutions";
import ServicePage from "./components/ServicePage";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Industries />
      <HowWeWork />
      <Careers />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f5ef]">
        <Header />

        <main>
          <Routes>
            {/* HOMEPAGE */}
            <Route path="/" element={<Home />} />

            {/* MARKETS PAGE */}
            <Route path="/markets" element={<Markets />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route
              path="/careers/opportunities"
              element={<CareersOpportunities />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project-services" element={<ProjectServices />} />
            <Route path="/project-services/:service" element={<ProjectServices />} />
<Route
  path="/engineering-solutions"
  element={<EngineeringSolutions />}
/>
<Route
  path="/engineering-solutions/:service"
  element={<EngineeringSolutions />}
/> {/* OTHER SERVICE PAGES - ONE REUSABLE COMPONENT */}
            <Route
              path="/services/:service"
              element={<ServicePage />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;