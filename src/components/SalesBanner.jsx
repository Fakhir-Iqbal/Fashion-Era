import "./style.css" ;
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Men from "../assest/Men-Coat.png" ;
import Groom from "../assest/sherwanii.png"
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';

export default function SalesBanner() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="SaleBanner" >
      <Container>
        <Grid container spacing={2} className='flex justify-center gap-5'>
          <Grid item xs={12} md={5} className='flex overflow-hidden h-[220px] bg-[#004743] text-white rounded-2xl' data-aos="fade-up" data-aos-duration="700" >
              <div className="p-4 w-1/2 flex flex-col justify-center">
                <h1 className="text-3xl font-extrabold">Collection For Men</h1>
                <p className="">Up To <span class="font-bold text-[#fbd103]"> 40%</span> Off</p>
                <Button className="order-btn">Shop Now</Button>
            </div>
            <div className="overflow-hidden w-1/2 ">
                <img src={Men} alt="" className="h-72 object-cover rounded"/>
            </div>
          </Grid>
          <Grid item xs={12} md={5} className='flex overflow-hidden h-[220px] bg-[#fbd103] text-white rounded-2xl' data-aos="fade-up" data-aos-duration="700">
              <div className="p-4 w-1/2 flex flex-col justify-center">
                <h1 className="text-3xl font-extrabold text-[#004743]">Collection For Groom</h1>
                <p className="">Up To <span class="font-bold text-[#004743]"> 40%</span> Off</p>
                <Button className="order-btn">Shop Now</Button>
            </div>
            <div className="overflow-hidden w-1/2 ">
                <img src={Groom} alt="" className="h-72 object-cover rounded"/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}