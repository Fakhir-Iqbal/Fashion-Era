import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 justify-center bg-[#f6f6f6] pt-4">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex md:flex-row flex-col gap-4 justify-center md:items-start items-center footer">
          <div className="w-full md:w-1/2 flex flex-col gap-3 footer_links">
            {/* <img src={Mail_png} alt="logo" className="h-10 w-1/2 md:w-[70%]" /> */}
            <h1 className="text-3xl font-semibold text-[#004743]">
              Fashion <span className="text-[#fbd103]">Era</span>
            </h1>
            <p className="w-[70%]">
              There are many variations of passages of Lorem Ipsum available,
              majority have suffered alteration in some.
            </p>
          </div>

          <div className="w-1/2 md:w-[35%] footer_links">
            <h1 className="text-3xl">Help</h1>
            <Link to="/">Privacy Policy</Link>
            <br />
            <Link to="/">Shipping Delivery</Link>
            <br />
            <Link to="/">Refund Policy</Link>
            <br />
          </div>

          <div className="w-1/2 md:w-[35%] footer_links">
            <h1 className="text-3xl">Store</h1>
            <Link to="/coat">Coat / Pent</Link>
            <br />
            <Link to="/kurta">Kurta</Link>
            <br />
            <Link to="/sherwani">Sherwani</Link>
            <br />
            {/* <Link to="/">Other</Link> */}
          </div>

          <div className="w-1/2 md:w-[35%] footer_links">
            <h1 className="text-3xl">Support</h1>
            <Link to="/">Feedback</Link>
            <br />
            <Link to="/">Contact Us</Link>
            <br />
            <Link to="/">Term & Condition</Link>
          </div>
        </div>

        <div className="text-center">
          <p className="">
            <hr />
            Copyright© 2024 Fashion Era. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
