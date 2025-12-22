import React from "react";
import NavBar from "../../components/navigation/navbar/NavBar";
import MobileSideBar from "@/components/navigation/sidebar/MobileSideBar";
import SideBar from "@/components/navigation/sidebar/SideBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />

      <MobileSideBar />
      <div className="max-w-screen flex">
        <SideBar />
        <div className="flex-1 p-5 mt-10 ">{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
