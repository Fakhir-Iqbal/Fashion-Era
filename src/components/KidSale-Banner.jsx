import "./style.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kid_img from "../assest/image 10.png";
import { Container, Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function KidBanner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="KidBanner" data-aos="fade-up">
      <Container>
        <Grid container spacing={0} className="flex justify-center">
          <Grid
            item
            xs={12}
            md={10}
            className="flex overflow-hidden h-[320px] bg-[#e8f8f6] text-white rounded-2xl"
          >
            <div className="p-4 w-1/2 flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl font-thin text-black md:text-5xl">
                Baby & Kid's Fashion
              </h1>
              <div className="flex flex-col items-center mt-3">
                <div className="h-20 w-[290px] sm:w-[400px] style_div"></div>
                <div className="text-white z-10 mr-9 md:mr-14">
                  <h1 className="font-bold text-black">SALE!</h1>
                  <p className="text-[#004743] text-sm font-semibold mt-0">
                    07 to 14 February
                  </p>
                </div>
              </div>

              <Button
                variant="contained"
                className="shop-button bg-[#004743] mt-2"
              >
                Shop Now
              </Button>
            </div>

            <div className="overflow-hidden w-1/2 flex justify-center">
              <img src={Kid_img} alt="" className="h-60 object-cover rounded md:h-72 mt-8" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
