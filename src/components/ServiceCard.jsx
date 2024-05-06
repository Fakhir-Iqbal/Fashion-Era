import "./style.css";
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineGift } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function ServiceCard() {
  return (
    <div className="service-card flex justify-center flex-wrap mt-5 mb-5 gap-9">

      <div className="flex font-sans">
        {" "}
        <div>
          <LiaShippingFastSolid className="text-6xl text-[green]" />
        </div>{" "}
        <div className="ml-4 mt-2.5">
          <h6 className="font-bold">Free Shipping</h6>{" "}
          <p className="text-xs">Order Over $100</p>{" "}
        </div>{" "}
      </div>
      <div className="flex font-sans">
        {" "}
        <div>
          <AiOutlineGift className="text-6xl text-[green]" />
        </div>{" "}
        <div className="ml-4 mt-2.5">
          <h6 className="font-bold">Smart Gift Card</h6>{" "}
          <p className="text-xs">Buy $1000 To Get Card</p>{" "}
        </div>{" "}
      </div>
      <div className="flex font-sans">
        {" "}
        <div>
          <IoWalletOutline className="text-6xl text-[green]" />
        </div>{" "}
        <div className="ml-4 mt-2.5">
          <h6 className="font-bold">Quick Payment</h6>{" "}
          <p className="text-xs">100% Secure Payment</p>{" "}
        </div>{" "}
      </div>
      <div className="flex font-sans">
        {" "}
        <div>
          <TfiHeadphoneAlt className="text-6xl text-[green]" />
        </div>{" "}
        <div className="ml-4 mt-2.5">
          <h6 className="font-bold">24/7 Support</h6>{" "}
          <p className="text-sm">Quick Support</p>{" "}
        </div>{" "}
      </div>

    </div>
  );
}
