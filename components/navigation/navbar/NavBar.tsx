import React from "react";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="flex  justify-between items-center w-full px-6  fixed top-0 left-0 z-50">
      <div>DevConnect</div>
      <div>Search</div>
      <div className="flex gap-4 items-center">
        <FaMessage className="text-2xl" />
        <FaBell className="text-2xl" />
        <div className="rounded-full bg-green-50 w-12 h-12 flex justify-center items-center  ">
          PR
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
