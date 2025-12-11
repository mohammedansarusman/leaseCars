"use client";
import { MenuIcon, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { DialogTitle } from "../ui/dialog";
import { useState } from "react";
import MobileNavigationBar from "./MobileNavigationBar";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* hamburger menu icon or close button */}
        <SheetTrigger asChild>
          <button className="md:hidden text-black flex justify-center items-center">
            {open ? (
              <X className="text-sky-800" />
            ) : (
              <MenuIcon className=" text-sky-800" />
            )}
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="mt-[10vh] w-full md:hidden">
          <DialogTitle></DialogTitle>
            {/* mobile view navigation bar */}
            <MobileNavigationBar setOpen = {setOpen}/>
        </SheetContent>
      </Sheet>
    </>
  );
};
