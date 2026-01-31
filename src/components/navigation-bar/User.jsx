import { auth } from "@/auth";
import Image from "next/image";
import { doLogOut } from "@/app/action";

export const User = async () => {
  const session = await auth();
  return (
    <>
      <form className="flex gap-2 items-center" action={doLogOut}>
      <h1>{session ? session?.user?.name : "Guest"}</h1>
      <Image
        src={session ? session?.user?.image : "/default-user.png"}
        alt="User Profile"
        width={30}
        height={30}
        className="rounded-full ml-2"
      />
      <button className="bg-sky-800 text-white font-base px-2 rounded-lg"
        type="submit"
      >
        {session?.user?.name && "Sign out"}
      </button>
    </form>
    </>
    
  );
};
