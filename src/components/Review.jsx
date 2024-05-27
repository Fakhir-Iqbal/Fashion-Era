import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import img1 from "./../assest/avtar1.jpg";
// import img2 from "./../assest/avtar2.jpg";
// import img3 from "./../assest/avtar3.jpg";

export default function Review() {
  const imagesWithText = [
    { image: img1, text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",name: "Sameer Jain" } ,
    { image: img1, text: "Numerous versions of Lorem Ipsum exist, but most have undergone some form of alteration, whether through injected humor or the inclusion of randomized words that appear far from believable....",name: "Jhon Wick" },
    { image: img1, text: "Lorem Ipsum comes in many forms, yet the majority have been altered in some way, either with injected humor or with random words that lack believability. If you're considering using a passage of Lorem Ipsum...", name: "Jacky Hobbs" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesWithText.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesWithText.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Container maxWidth="lg" className="bg-[#f6f6f6]">
      <div className="flex flex-col items-center justify-center mt-5 ">
        <h1 className="font-bold mt-3 text-center">Review</h1>
        <p className="text-sm text-gray-400 text-center">
          This is what our customers have to say{" "}
        </p>
        <Row className="g-4 ">
        <div className="">
            <div className="flex gap-2 md:gap-4 rounded-br-[35px] rounded-tl-[35px] border-2 mb-4" >
              <img src={imagesWithText[currentImageIndex].image} alt="Avatar" className="h-[140px] md:h-[190px] w-[160px] md:w-[200px] rounded-tl-[35px]"/>
              <div className="h-auto w-[300px] md:w-[370px] flex flex-col  justify-center">
              <p className="text-xs md:text-sm" >{imagesWithText[currentImageIndex].text}</p>
              <h6 className="font-bold">{imagesWithText[currentImageIndex].name}</h6>
              <div className="flex justify-end mr-4 text-gray-400 text-4xl gap-2">
              <button onClick={handlePrev}><IoArrowBackCircleOutline/></button>
            <button onClick={handleNext}><IoArrowForwardCircleOutline/></button>
              </div>
              </div>
            </div>
            
          </div>
        </Row>
        </div>
      </Container>
    </>
  );
}
