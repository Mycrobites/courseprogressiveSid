import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
export default function LeftSide() {
  return (
    <div>
      <h3 className="border border-dark w-50 mb-2">Maths</h3>
      <img
        src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
        alt="Course pic"
        className="border border-dark w-50 my-2"
      />
      <p className="border border-dark w-50 my-2 p-2">
        Start with our maths course for your JEE
      </p>
      <blockquote>
        Share our course <FaWhatsapp /> <FaFacebook /> <FaInstagram />{" "}
      </blockquote>
      <div>
        <p>Contact Us</p>
        <p>Email:- test@test.com</p>
        <p>Phone Number:- 9922331155</p>
      </div>
    </div>
  );
}
