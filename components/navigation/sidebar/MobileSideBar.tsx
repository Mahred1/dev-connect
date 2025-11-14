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
import { Button } from "@/components/ui/button";
import { FaBurger } from "react-icons/fa6";
import { NavLinks } from "@/constants/NavLinks";
import Link from "next/link";
import { Key } from "lucide-react";
const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaBurger className="lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="hidden"></SheetTitle>
        {NavLinks.map((link) => (
          <SheetClose key={link.lable}>
            <Link href={link.route}>{link.lable}</Link>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
