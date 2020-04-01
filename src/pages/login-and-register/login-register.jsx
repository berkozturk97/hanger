import React from 'react';
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up';
import './login-register.scss';


const LoginRegisterPage = () => (
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default LoginRegisterPage;