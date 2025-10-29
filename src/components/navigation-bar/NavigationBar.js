import { MenuIcon } from "lucide-react"
import { Heading } from "./Heading"

export const NavigationBar = () => {
  
  return (
    <div className="w-full h-[60px] bg-gray-100 flex items-center px-4 md:px-12 lg:px-20">
        <div className="w-[40%]">
          <Heading/>
        </div>
        <div className="w-[60%] flex items-center justify-end gap-4">
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              <li>Browse Cars</li>
              <li>How it works</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <MenuIcon className="cursor-pointer text-sky-800 hover:bg-gray-200 rounded-sm md:hidden"/>
        </div>
    </div>
  )
}
