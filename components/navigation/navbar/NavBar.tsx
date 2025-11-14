import React from "react";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import MobileSideBar from "../sidebar/MobileSideBar";
import Image from "next/image";
import { LogOut } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex bg-slate-50  justify-between items-center w-full px-6 py-3  fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src={"icons/Logo.svg"}
          width={24}
          height={24}
          alt="dev connect logo"
        />
        <p>
          <span className="font-bold text-lg">Dev</span>connect
        </p>
      </div>
      <div>Search</div>
      <div className="flex gap-4 items-center justify-center">
        <Image
          src={"icons/chat-bubble.svg"}
          width={24}
          height={24}
          alt="messages"
        />
        <Image
          src={"icons/bell.svg"}
          width={24}
          height={24}
          alt="notofications"
        />
        <div className="rounded-full relative bg-green-50 w-8 h-8 flex justify-center items-center text-sm overflow-clip ">
          <Image   src={'/images/user.jpg'} fill alt="user profile"/>
        </div>
        <MobileSideBar />
      </div>
    </nav>
  );
};

export default NavBar;
