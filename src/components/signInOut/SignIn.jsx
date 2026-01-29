import doSocialLogin from '@/app/action'
import React from 'react'

export const SignIn = () => {
  return (
    <div>
        <h1>Sign In</h1>
        <form className='flex gap-10' action={doSocialLogin}>
            <button className='w-20 h-10 bg-sky-600' type='submit' name='action' value="google">Google</button>
            <button className='w-20 h-10 bg-sky-600' type='submit' name='action' value="github">Github</button>
            
        </form>
    </div>
  )
}
