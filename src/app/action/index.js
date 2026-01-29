'use server'
export default async function doSocialLogin(formData){
    const action = formData.get('action');
    console.log(action)
}