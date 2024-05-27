import React, { useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import bg_Picture from "../assest/conatctbackground.jpg";
import { BiLogoWhatsapp } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiInstagramLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineFacebook } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Nav />
      <div
        className="bg-cover contact-main bg-center w-full h-auto"
        style={{
          backgroundImage: `url(${bg_Picture})`,
        }}
      >
        <div className="p-4 text-center text-white ">
          <h1 className="underline">Contact Us</h1>
          <p className="text-xs md:text-sm">
            Ask Any Question Or Remarks? Just Write Us A Message!
          </p>
        </div>
        <div className="max-w-lg mx-auto lg:max-w-full lg:flex justify-center gap-3 ">
        <div className="bg-[#004743] text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full lg:w-auto">
            <h1 class="text-3xl font-bold mt-3">Contact Information</h1>
            <p className="text-xs ">Say something to start a live chat!</p>

            <div class="flex items-center">
              <BiLogoWhatsapp class="text-2xl mr-3" />
              <p className="mt-3">+92 315 1082822</p>
            </div>

            <div class="flex items-center">
              <MdMailOutline class="text-2xl mr-3" />
              <p className="mt-3">fakhiriqbal52@gmail.com</p>
            </div>

            <div class="flex items-center">
              <IoLocationOutline class="text-2xl mr-3" />
              <p className="mt-3">
                75800, Gulshan-e-Zia, Orangi Town, Karachi.
              </p>
            </div>
            <div className="text-4xl flex gap-3 pt-5 ">
              <a
                className="text-white border-2 rounded-[100%] p-1"
                href="https://www.instagram.com/itz_fakhir338/"
                target="blank"
              >
                <RiInstagramLine />
              </a>
              <a
                className="text-white border-2 rounded-[100%] p-1"
                href="https://www.linkedin.com/in/fakhir-iqbal-a900b4293/"
                target="blank"
              >
                <TbBrandLinkedin />
              </a>
              <a
                className="text-white border-2 rounded-[100%] p-1"
                href="https://www.facebook.com/profile.php?id=100075801510873"
                target="blank"
              >
                <AiOutlineFacebook />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full lg:w-auto"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow resize-none  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#004743] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
