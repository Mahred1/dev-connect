"use client";

import Image from "next/image";
import React from "react";
import SideBarActions from "./SideBarActions";
import { NavLinks } from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <section className="bg-slate-50 min-h-screen hidden md:block min-w-fit px-4  pt-20">
      <SideBarActions />
      <div className="flex flex-col w-full  lg:gap-1 gap-3">
        {NavLinks.map((link) => {
          const isActive = pathname === link.route;
          const LinkComponent = () => (
            <Link
              href={link.route}
              className={`${
                isActive && "bg-teal-800"
              } flex items-center gap-3 px-3 py-4 rounded-lg w-fit lg:w-70 `}
              key={link.lable}
            >
              <Image
                className={`${
                  isActive && "invert"
                } sm:w-8  sm:h-8  lg:w-6 lg:h-6`}
                src={link.icon}
                alt={link.lable}
                width={24}
                height={24}
              />

              <p
                className={`${
                  pathname === link.route && "invert"
                } sm:hidden lg:block`}
              >
                {link.lable}
              </p>
            </Link>
          );

          return <LinkComponent key={link.lable} />;
        })}
      </div>
    </section>
  );
};

export default SideBar;
