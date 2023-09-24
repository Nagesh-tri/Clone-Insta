import React from 'react'

const Button = ({children}) => {

    return <>
        <div className='btn-fb'>
            <button className='text-white'>
                {children}
            </button>
        </div>
    </>
}

export default Button;
