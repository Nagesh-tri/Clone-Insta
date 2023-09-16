import React from 'react';
import './main.css'

const main = () => {
  return <>
    <div className='main'>
    <div className='sec-left mr-8 mb-4'>
        
    {/* <a href="#"><img src="images/insta-ss.png" alt='instaPage'/> </a> */}
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
                            <label className='label'><span className='labelIn '>Phone number, username, or email</span><input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" class="input" dir="" type="text" value="" name="username"/></label>
                            </div>

                        </div>
                        <div className='margin'>
                            <div className='bor '><label className='label'><span className='labelIn'>Password</span><input aria-label="Password" aria-required="true" autocapitalize="off" autocorrect="off" class="input" type="password" value="" name="password"/></label></div>

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
                    <span className='fb-logo mr-2 pt-4'></span>
                    <span className='pb-2 fb-login'>Log in with Fackebook</span>
                    
                </button>
            </div>
            <a className='forget'><span> forget password?</span></a>
        </div>
        <div className='cont signup'>
            <div>Don't have an account? <a><span>Sign up</span></a></div>
            
        </div>
        <div className='last'>
            <div last-1><span>Get the app.</span></div>
            <div> <div class="img-p"><a aria-label="Get it on Google Play" class="h-10" href="https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dig_mid%253D8BABBCBA-8D4F-4CAB-87F5-6E2A18FC4FF2%2526utm_campaign%253DloginPage%2526utm_content%253Dlo%2526utm_source%253Dinstagramweb%2526utm_medium%253Dbadge&amp;e=AT1FCm8foZX_SbZ3bg8HskEaCIrnVISQOtVZl-XsSyHtxasRGdOYXJ1HKBq7e_P_UI69YSZV_3VklukV2nl5Ox-am2Yzk-NcGEVDyD7ylq8xRQQfC5qxFSXYSI1pw0PRKKHkXeUrz3kIgiVSItqGxCQe8GyfDOSBCkkX6g" rel="nofollow" role="link" tabindex="0" target="_blank"><img alt="Get it on Google Play" class="h-10 mr-2" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"/></a><a aria-label="Get it from Microsoft" class="" href="ms-windows-store://pdp/?productid=9nblggh5l9xt&amp;referrer=appbadge&amp;source=www.instagram.com&amp;mode=mini&amp;pos=0%2C0%2C1920%2C1080" rel="nofollow" role="link" tabindex="0" target="_blank"><img alt="Get it from Microsoft" class="h-10" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"/></a></div></div>
        </div>
    </div>
    </div>
  </>
}

export default main