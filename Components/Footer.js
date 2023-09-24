import React from 'react';
let arr=["Meta", "About","Blog","jobs","Help","API","Privacy","Terms","Location","Instagram Lite","Threads","Contact Uploading & Non-Users" , "Meta Verified"];


const Footer = () => {

return <>
<footer className='flex flex-col shrink-0 px-4 items-stretch mb-12'>
  <div className='flex flex-row mt-6 justify-items-center justify-center'>
      {arr.map((e)=>{
          return <>

          <div className='f-ele'><a><span>{e}</span></a></div>
          </>
      })}
  </div>
  <div className='flex flex-row my-3 justify-items-center justify-center'>
  <div className='f-ele'><a><span>English </span></a></div>
  <div className='f-ele'><a><span>© 2023 Instagram from Meta</span></a></div>
  </div>
</footer>
</>
}

export default Footer;