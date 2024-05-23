import "./style.css";
import {useEffect } from "react";
import Mail_png from "./../assest/mail.png";
import { React } from "react";
// import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { TbSend } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mail() {
  useEffect(() => {

    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="mail flex flex-col items-center w-full h-[450px]">
        <img
          src={Mail_png}
          alt="Mail Icon"
          className="h-[100px] w-[100px] mt-14"
        />
        <h1 className="text-2xl font-semibold pt-3">Subscibe Newsletter</h1>
        <p className="text-[#323232] text-xs ">
          Subscribe to our email and get updates right in your inbox
        </p>

        <Paper
          component="form"
          sx={{
            display: "flex",
            // justifyContent: "space-between",
            width: '100%',
            bgcolor: "#F7F7F7",
            height: "70px",
            // border: "none" ,
            borderRadius: "35px",
            "@media (min-width: 768px)": {
              width: "400px", // yahaan size ko 400px se shuru karo
            },
            "@media (max-width: 767px)": {
              width: "350px", // aur yahaan 300px se
            },
            "@media (max-width: 375px)": {
              width: "320px", // aur yahaan 200px se
            },
          }}
        >
          <InputBase
            sx={{ ml: 3, flex: 1 }}
            placeholder="Enter Your Mail"
            inputProps={{ '"Ubuntu", sans-serif': "Enter Your Mail" }}
          />
          <IconButton
            type="button"
            sx={{
              position: "relative",
              marginTop: "3px",
              left: "5px",
              height: "63px",
              bgcolor: "#fbd103",
              width: "65px",
              ":hover": {
                backgroundColor: "#fbd103",
              },
            }}
            aria-label="search"
          >
            <TbSend className="text-3xl" />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>

        <div className="flex gap-3 mt-3" >
        <span className="bg-[#f3f3f3] text-sm h-10 w-10 rounded-full flex items-center justify-center">
          <FaFacebookF className="text-xl hover:cursor-pointer" />
        </span>
        <span className="bg-[#f3f3f3] text-sm h-10 w-10 rounded-full flex items-center justify-center">
          <FaInstagram className="text-xl hover:cursor-pointer" />
        </span>
        <span className="bg-[#f3f3f3] text-sm h-10 w-10 rounded-full flex items-center justify-center">
          <FaTwitter className="text-xl hover:cursor-pointer" />
        </span>
        </div>
      </div>
    </>
  );
}
