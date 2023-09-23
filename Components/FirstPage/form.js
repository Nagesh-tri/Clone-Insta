import React from 'react'

const form = ({type}) => {
  return <>
  <div className='form'>
                {/* login form */}
                <form id= {type}>
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
  </>
}

export default form;
