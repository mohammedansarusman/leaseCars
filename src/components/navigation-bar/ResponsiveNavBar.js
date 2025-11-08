import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { setLongNavBar } from "@/store/themeSlice";
export const ResponsiveNavBar = () => {
  const navHeadings = [
    "Browse Cars",
    "How it Works",
    "FAQs",
    "Blog",
    "Contact Us",
  ];
  const linkAddress = [
    "/browse",
    "/how-it-works",
    "/faqs",
    "/blog",
    "/contact-us",
  ];
  const longBar = useSelector((store) => store.theme.longBar);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLongNavBar(false));
  };

  return (
    <div
      className={`w-full h-[90vh] bg-gray-50 absolute top-[10vh] left-0 transition-transform duration-400 
      ${longBar ? "translate-x-0" : "translate-x-full"}`}
    >
      <main className="flex flex-col w-full px-10">
        {navHeadings.map((item, index) => (
          <div key={linkAddress[index]} className="w-full h-25 flex items-center border-b border-gray-400">
            <Link
              href={linkAddress[index]}
              onClick={handleClick}
              key={linkAddress[index]}
              className="hover:underline"
            >
              {item}
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};
