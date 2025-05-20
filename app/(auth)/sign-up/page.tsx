import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const SignUp = async () => {
    const loggedInUser = await getLoggedInUser();
console.log(loggedInUser)
  return (
           <AuthForm type="Sign-Up" />
  )
}

export default SignUp
