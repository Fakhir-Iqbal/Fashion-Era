import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 justify-center">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex md:flex-row flex-col gap-4 justify-center md:items-start items-center footer">
          
          <div className="w-full md:w-1/2 flex flex-col gap-3 footer_links">
            {/* <img src={Mail_png} alt="logo" className="h-10 w-1/2 md:w-[70%]" /> */}
            <h1 className="text-3xl font-semibold text-[#004743]" >Fashion <span className="text-[#fbd103]" >Era</span></h1>
            <p className="w-[70%]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
          </div>

          <div className="w-1/2 md:w-[35%] footer_links">
            <h1 className="text-3xl">Help</h1>
            <a href="/">Privacy Policy</a>
            <br />
            <a href="/">Shipping Delivery</a>
            <br />
            <a href="/">Refund Policy</a>
            <br />
            <a href="/">Track Your Order</a>
            <br />
          </div>

          <div className="w-1/2 md:w-[35%] footer_links">
            <h1 className="text-3xl">Store</h1>
            <a href="/">Coat / Pent</a>
            <br />
            <a href="/">Kurta</a>
            <br />
            <a href="/">Sherwani</a>
            <br />
            <a href="/">Other</a>
          </div>

          <div className="w-1/2 md:w-[35%] footer_links">
            <h1 className="text-3xl">Support</h1>
            <a href="/">Feedback</a>
            <br />
            <a href="/">Contact Us</a>
            <br />
            <a href="/">Term & Condition</a>
            <br />
            <a href="/">Download App</a>
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="">
            <hr />
            Copyright© 2024 Fashion Era. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
