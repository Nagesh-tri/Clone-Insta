import React from 'react';
import Logo from '@/Components/logo';
import SigninForm from '@/Components/SignInForm';
import Last from '@/Components/last';
import Footer from '@/Components/Footer';

const signup = () => {
  return <>
    <div className='w-full flex justify-center mb-11'>
      <div className='signup-main mt-3'>
        <div className="div-login insta-box">
          <Logo />
          <div>
            <SigninForm />
          </div>
        </div><div className='insta-box signup my-4'>
          <div>have an account? <a href='/SignIn'><span>Sign In</span></a></div>

        </div>
        <div>
          <Last/>
        </div>

      </div>

    </div>
    <Footer/>
  </>
}

export default signup;
