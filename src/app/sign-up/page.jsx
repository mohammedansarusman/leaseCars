
import { SignUpPage } from "@/components/signInOut/SignUpPage";

export default function SignPage() {
  return (
    <div className="pt-20 w-full bg-gray-50 grid grid-cols-1 lg:grid-cols-2">
      {/* Image */}
      <div className="hidden lg:block w-1/2 "></div>
      {/* form */}
      <SignUpPage />
    </div>
  );
}
