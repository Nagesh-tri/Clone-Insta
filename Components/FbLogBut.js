import React from 'react'

const FbLogBut = (props) => {
  // console.log(props);
  return <>
    <div className={props.color}><span className='fb-logo mr-2 pt-4 '></span>
    <span className={props.text}>Log in with Fackebook</span></div>
  </>
}

export default FbLogBut;
