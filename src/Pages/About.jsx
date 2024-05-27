import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import background_Pic from "../assest/clothbackground.jpg";
import Pic from "../assest/smallbackground.jpg";

const About = () => {
  return (
    <>
      <Nav />
      <div class="relative">
        <img
          src={background_Pic}
          alt="background_Image"
          class="h-[85vh] w-screen"
        />
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
          <h1 class="text-4xl font-bold underline">About Us</h1>
          <br />
          <p className="text-xs md:text-base">
            Fashion Era - where style meets simplicity. Discover a handpicked
            selection of trendy and timeless clothing for every occasion. Shop
            effortlessly from the comfort of your home and elevate your wardrobe
            with ease. Welcome to a world where fashion is just a click away.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-3 justify-between max-w-screen-lg mx-auto p-4">
        <div class="w-70 bg-[#004743] p-4">
          <h1 class="text-white text-3xl font-bold">Mission Statement</h1>
          <p class="text-white text-xs md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.....{" "}
          </p>
        </div>
        <div class="w-30 bg-[#d7b300] p-4">
          <h1 class="text-white text-3xl font-bold">Vision Statement</h1>
          <p class="text-white text-xs md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-3 justify-between max-w-screen-lg mx-auto p-4">
        <div
          className="relative w-full md:w-[50%] bg-cover bg-center p-4 brightness-50 hidden md:block"
          style={{ backgroundImage: `url(${Pic})` }}
        >
          {/* <h1 class="absolute bottom-0 text-white text-3xl font-bold">Target Market</h1> */}
        </div>

        <div class="flex flex-col justify-between w-full md:w-30">
          <div class="bg-[#d7b300] p-4 mb-3 md:mb-0">
            <h1 class="text-white text-3xl font-bold">Core Values</h1>
            <p class="text-white text-xs md:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
            </p>
          </div>
          <div class="bg-[#004743] p-4">
            <h1 class="text-white text-3xl font-bold">Brief Company History</h1>
            <p class="text-white text-xs md:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
