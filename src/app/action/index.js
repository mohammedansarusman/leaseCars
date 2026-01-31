'use server'
import { signIn } from "@/auth";
import { signOut } from "@/auth";
export default async function doSocialLogin(formData){
    const action = formData.get('action');
    // the action will be google then we call signIn with google provider;
    await signIn(action,{ redirectTo: "/" });
}
export async function doLogOut(){
    await signOut({ redirectTo: "/sign-in" });
    console.log("Logout action triggered");
}