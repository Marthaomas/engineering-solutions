import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/ServiceDetails";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#f5f5ef]">

      <Header />

      <main id="home" className="flex min-h-[80vh] items-center justify-center">
        
        <Hero />
       
      </main>
      <About />
      <Service />
      <Industries />
      <CTA />
    <Contact />
    <Footer />

    </div>
  );
}

export default App;