import React from 'react';
import Logo from '@/Components/logo';
import SignInForm from '@/Components/SignInForm';
import Last from '@/Components/last';
import Footer from '@/Components/Footer';

const signIn = () => {
  return <>
    <div className='w-full flex justify-center mb-11'>
      <div className='signin-main '>
        <div className="div-login insta-box">
          <Logo className='mt-3'/>
          <div>
            <SignInForm />
          </div>
        </div><div className='insta-box signup my-4'>
          <div>have an account? <a href='/Signup'><span>Sign up</span></a></div>

        </div>
        <div>
          <Last/>
        </div>

      </div>

    </div>
    <Footer/>
  </>
}

export default signIn;
