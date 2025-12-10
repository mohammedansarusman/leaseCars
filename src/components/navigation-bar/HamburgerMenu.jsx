'use client'
import { MenuIcon, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { DialogTitle } from "../ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <>
      <Sheet open={open} openChange = {setOpen}>
        <SheetTrigger asChild>
            <div className="md:hidden bg-white text-black" >
              {open ? <MenuIcon className="cursor-pointer text-sky-800 hover:bg-gray-200 hover:rounded-full"/> : <X/>}
            </div>
        </SheetTrigger>
        <SheetContent side="right" className="mt-[10vh] w-full md:hidden">
          <DialogTitle></DialogTitle>
        </SheetContent>
      </Sheet>
    </>
  );
};
