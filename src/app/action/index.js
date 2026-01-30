'use server'
import { signIn } from "@/auth";
import { signOut } from "@/auth";
export default async function doSocialLogin(formData){
    const action = formData.get('action');
    await signIn(action,{ redirectTo: "/" });
}
export default async function doLogout(formData){
    const action = formData.get('action');
    await signOut(action,{ redirectTo: "/sign-in" });
}