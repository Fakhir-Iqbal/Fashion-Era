import "./style.css";
import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Grid } from "@mui/material";
import Nike from "./../assest/BrandLogos/pngegg (1).png";
import Adidas from "./../assest/BrandLogos/pngegg (2).png";
import HM from "./../assest/BrandLogos/pngegg (3).png";
import Polo from "./../assest/BrandLogos/pngegg (4).png";
import Levis from "./../assest/BrandLogos/pngegg (5).png";
import Champion from "./../assest/BrandLogos/pngegg.png"

export default function Brands() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="reviewmain" data-aos="fade-up">
      <Container>
        <Grid container spacing={0} className="flex justify-center">
          <Grid
            item
            xs={12}
            md={10}
            className="flex overflow-hidden justify-center pt-5"
          >
            <div className="review h-[230px] w-[80%] bg-[#004743] text-white rounded-2xl text-center">

              <h1 className="mt-4" >Top Brand Deal</h1>
              <p>Up To <span className="text-[#fbd103]" >60%</span> Off On Brands</p>

              <div className="flex w-[80%] pt-3 gap-3">
    <div className="bg-white rounded-md w-full h-16" ><img className="object-cover w-full h-full" src={Nike} alt="logos" /></div>
    <div className="bg-white rounded-md w-full h-16" ><img className="object-cover w-full h-full" src={Adidas} alt="logos" /></div>
    <div className="bg-white rounded-md w-full h-16" ><img className="object-cover w-full h-full" src={HM} alt="logos" /></div>
    <div className="bg-white rounded-md w-full h-16" ><img className="object-cover w-full h-full" src={Polo} alt="logos" /></div>
    <div className="bg-white rounded-md w-full h-16" ><img className="object-cover w-full h-full" src={Champion} alt="logos" /></div>
    <div className="bg-white rounded-md w-full h-16" ><img className="object-cover w-full h-full" src={Levis} alt="logos" /></div>
</div>



              
            </div>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
