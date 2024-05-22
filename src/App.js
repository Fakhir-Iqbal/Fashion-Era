import HeaderMenu from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SalesBanner from "./components/SalesBanner";
import ServiceCard from "./components/ServiceCard";
import KidBanner from "./components/KidSale-Banner";
import Mail from "./components/Email";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <HeaderMenu />
      <HeroSection />
      <ServiceCard />
      <SalesBanner />
      <KidBanner />
      <Mail />
      <Footer/>
    </>
  );
}

export default App;
