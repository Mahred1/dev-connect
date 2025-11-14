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
const MobileSideBar = () => {
  return (
    <Sheet >
      <section className="md:hidden">
           <SheetTrigger>
        <Image className="cursor-pointer" src='icons/menu.svg' width={24} height={24} alt="menu" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="hidden"></SheetTitle>
        {NavLinks.map((link) => (
          <SheetClose key={link.lable}>
            <Link href={link.route}>{link.lable}</Link>
          </SheetClose>
        ))}
      </SheetContent>
      </section>
   
    </Sheet>
  );
};

export default MobileSideBar;
