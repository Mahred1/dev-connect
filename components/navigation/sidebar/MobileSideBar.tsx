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
const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetContent>
        this is test
        <SheetHeader>header</SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
