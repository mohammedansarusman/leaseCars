import Link from "next/link";
const MobileNavigationBar = ({setOpen}) => {
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
  return (
    <div className="w-full h-full">
      <div className="block w-full h-full md:hidden">
        <ul className="flex flex-col items-start justify-start w-full h-full px-4">
          {navHeadings.map((nav, index) => (
            <Link
              href={linkAddress[index]}
              className="w-full border-b-1 border-gray-200"
              key={index}
              onClick={()=>setOpen(false)}
            >
              <div className="py-5 w-full">
                <li>{nav}</li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigationBar;
