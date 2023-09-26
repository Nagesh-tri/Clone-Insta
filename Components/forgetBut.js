import React from 'react';


const forgetBut = () => {
    return <>
   
        <div className='mx-10 my-2 flex flex-row justify-center'>
            <button>
                <span className='fb-logo mr-2 pt-4'></span>
                <span className='pb-2 fb-login'>Log in with Fackebook</span>

            </button>
        </div>
        <a className='forget'><span> forget password?</span></a>
    </>
}

export default forgetBut;