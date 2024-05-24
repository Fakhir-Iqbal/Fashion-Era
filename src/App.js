import HeaderMenu from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SalesBanner from "./components/SalesBanner";
import ServiceCard from "./components/ServiceCard";
import KidBanner from "./components/KidSale-Banner";
import Brands from "./components/Brands";
import Productcards from "./components/Cards";
import Mail from "./components/Email";
import Review from "./components/Review";
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
      <Brands/>
      <Productcards/>
      <Review/>
      <Mail />
      <Footer/>
    </>
  );
}

export default App;
