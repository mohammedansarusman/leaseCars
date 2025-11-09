import Link from "next/link";

export const Heading = () => {
  return (
    <Link href={"/"}>
      <h1 className={`text-3xl font-bold  text-gray-800 -tracking-widest`}>CAR<span className="text-sky-700"> LEASE</span></h1>
    </Link>
  );
};
