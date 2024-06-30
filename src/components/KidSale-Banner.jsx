import "./style.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../assest/salebanner.png";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function KidBanner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="KidBanner" data-aos="zoom-in" data-aos-duration="1000">
      <Container>
        <Grid container spacing={0} className="flex justify-center">
          <Grid
            item
            xs={12}
            md={10}
            className="flex overflow-hidden h-[320px] rounded-2xl background-image text-white"
          >
            <div className="p-4 ml-8 w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-5xl font-black md:text-black md:text-6xl">
                Flash Sale
              </h1>
              <h1 className="md:text-[#004743] text-2xl md:text-3xl italic font-semibold mt-0">
                Get Discount <span className="text-[#fbd103]">30%</span> Off
              </h1>
              <p className="italic text-sm md:text-black">
                Enjoy a generous 30% discount voucher on your upcoming purchase
                when you spend a minimum of $100.
              </p>

              <Link
                variant="contained"
                className="order-btn !bg-[#004743] text-white"
                to="/coat"
              >
                Shop Now
              </Link>
            </div>

            <div className="overflow-hidden w-1/2 hidden md:block">
              <img
                src={banner}
                alt=""
                className="h-60 object-cover ml-[100px] rounded md:h-72 mt-8"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
