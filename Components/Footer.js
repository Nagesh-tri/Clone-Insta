import React from 'react';

const Footer = () => {
  let arr=["Meta", "About","Blog","jobs","Help","API","Privacy","Terms","Location","Instagram Lite","Threads","Contact Uploading & Non-Users" , "Meta Verified"];
  let aba=["meta"]
  function createTag(ele) {
    return `<div><a href="https://about.meta.com/" rel="nofollow noopener noreferrer" target="_blank"><span class="" dir="auto">${ele}</span></a></div>
    `;
  }

  let footerEle = aba.map(createTag);
  const element1 =footerEle.join( )
  console.log(typeof(element1));
  let thisElem=document.getElementsByTagName('footer');
  console.log(thisElem);
  return<><footer>Hiii footer here</footer></>
}

export default Footer