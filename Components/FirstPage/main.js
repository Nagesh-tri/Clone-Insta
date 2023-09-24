import React from 'react';
import './main.css'
import FbLogBut from '../FbLogBut';
import Last from '@/Components/last';

const main = () => {
    return <>
        <div className='main'>
            <div className='sec-left mr-8 mb-4'>

                <a href="#"><img src="images/insta-ss.png" alt='instaPage'/> </a>
            </div>
            <div className='sec-right'>
                <div className='div-login cont'>
                    <div role='button' className='logo mt-9 mb-3'>
                        <i role="img" id='logo'></i>
                    </div>
                    <div className='form'>
                        {/* login form */}
                        <form id='loginForm'>
                            <div className='overflow-y-visible mt-6'>
                                <div className='margin'>
                                    <div className='phone bor'>
                                        <label className='label'><span className='labelIn '>Phone number, username, or email</span><input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" class="input" dir="" type="text" value="" name="username" /></label>
                                    </div>

                                </div>
                                <div className='margin'>
                                    <div className='bor '><label className='label'><span className='labelIn'>Password</span><input aria-label="Password" aria-required="true" autocapitalize="off" autocorrect="off" class="input" type="password" value="" name="password" /></label></div>

                                </div>
                                <div className='login margin'>
                                    <button>
                                        <div> Log in</div>
                                    </button>
                                </div>


                            </div>
                        </form>
                    </div>
                    <div className='flex flex-row w-full ml-16'>
                        <div className=' h-px bg-black w-1/3 m-2 '>

                        </div>
                        <div className='m-0.5'>
                            OR
                        </div>
                        <div className=' h-px bg-black w-1/3 m-2'>

                        </div>
                    </div>
                    <div className='mx-10 my-2 flex flex-row '>
                        <button>
                            <FbLogBut />

                        </button>
                    </div>
                    <a className='forget'><span> forget password?</span></a>
                </div>
                <div className='cont signup'>
                    <div>Don't have an account? <a><span>Sign up</span></a></div>

                </div>
                <Last/>
            </div>
        </div>
    </>
}

export default main