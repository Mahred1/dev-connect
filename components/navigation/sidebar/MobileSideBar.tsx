import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants/NavLinks";
import Link from "next/link";
import Image from "next/image";
import { Section } from "lucide-react";
const MobileSideBar = () => {
  return (
    <section className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            className="cursor-pointer"
            src="icons/menu.svg"
            width={24}
            height={24}
            alt="menu"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-slate-200 w-[60%] flex items-center"
        >
          <SheetTitle className="hidden"></SheetTitle>
          <SheetHeader className="min-w-full">
            <div className="flex items-center  gap-2">
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
          </SheetHeader>
          <div className="flex flex-col w-full ml-5 gap-2">
            {NavLinks.map((link) => (
              <Link
                href={link.route}
                className=" flex items-center gap-3 px-3 py-4 rounded-lg w-[90%]"
                key={link.lable}
              >
                <Image
                  src={link.icon}
                  alt={link.lable}
                  width={24}
                  height={24}
                />
                <p>{link.lable}</p>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSideBar;
