
import { SignUpPage } from "@/components/signInOut/SignUpPage";
import Image from "next/image";

export default function SignPage() {
  return (
    <div className="pt-20 w-full bg-gray-50 grid grid-cols-1 md:grid-cols-2 items-start px-10 gap-5">
      {/* Image */}
      <div className="w-full pt-10 hidden md:block">
        <Image alt="registration-form-image" src="/registrationImage.webp" width={150} height={200} className="w-full object-contain"/>
      </div>
      <div className="w-full">
        {/* form */}
        <SignUpPage />  
      </div>
      
    </div>
  );
}
