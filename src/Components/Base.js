import React from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";

const Base = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <ToastContainer />
        {children}
      </div>
    </div>
  );
};
export default Base;
