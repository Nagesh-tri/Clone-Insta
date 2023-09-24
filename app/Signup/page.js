import React from 'react';
import Logo from '@/Components/logo';
import SignupForm from '@/Components/SignupForm';
import Last from '@/Components/last';

const signup = () => {
  return <>
    <div className='w-full flex justify-center mb-11'>
      <div className='signup-main'>
        <div className="div-login insta-box">
          <Logo />
          <div>
            <SignupForm />
          </div>
        </div><div className='insta-box signup my-4'>
          <div>have an account? <a><span>Sign In</span></a></div>

        </div>
        <div>
          <Last/>
        </div>

      </div>

    </div>
  </>
}

export default signup;
