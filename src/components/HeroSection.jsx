import "./style.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <div className="hero !max-w-screen-2xl !mx-auto !rounded-md">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className="main">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={0} sm={0} md={2}></Grid>
              <Grid xs={12} sm={6} md={6}>
                <div className="hero-text">
                  <h1>
                    Unlock <span>Your Style</span> With <span>Fashion </span>{" "}
                    Avenue.
                  </h1>
                  <p className="font-sans">
                    Embrace influential and innovative fashion with a
                    professional touch, elevating your style and presence in the
                    industry.
                  </p>
                  <div>
                    {/* <img src={heroVector} alt="vector-img" width={100} /> */}
                    <Button variant="contained" className="shop-button">
                      Shop now
                    </Button>
                  </div>
                </div>
              </Grid>
              {/* <Grid xs={0} sm={6} md={7} className='hero-img'>
              <Image src={Hero_img} alt="modal-image" />
            </Grid> */}
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
