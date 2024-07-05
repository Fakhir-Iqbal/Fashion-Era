import React from 'react'
import Navbar from "../components/Navbar";
import Herosection from "../components/HeroSection";
import Servicecard from "../components/ServiceCard"
import Salesbanner from "../components/SalesBanner";
import Kidbanner from "../components/KidSale-Banner";
import Collecion from "../components/Cards";
import Review from "../components/Review";
import Mail from "../components/Email";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
        <Navbar/>
        <Herosection/>
        <Servicecard/>
        <Salesbanner/>
        <Kidbanner/>
        <Collecion/>
        <Review/>
        <Mail/>
        <Footer/>
    </>
  )
}

export default Home