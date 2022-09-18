import React from 'react'
import {BsFacebook,BsTelephoneFill} from 'react-icons/bs'
import {FaGithub,FaTwitterSquare,FaLocationArrow} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
function Footer() {
  return (
    <div className='FooterContainer bg-slate-700 text-white  p-5'>
      <div className="footerContent md:flex space-x-10 justify-around my-8">
        <div className="rightContent space-y-4">
          <div className="address flex items-center space-x-5">
        <FaLocationArrow/>
            <h1 className=' tracking-wide font-semibold font-sans text-sm'>Lalmatiya, Dang ( Lumbeni Pardesh )</h1>
          </div>
          <div className="contact flex space-x-5 items-center">
           <BsTelephoneFill/>
            <h1 className=' tracking-wide font-semibold font-sans text-sm'>+977 9806227485</h1>
          </div>
          <div className="emailaddr flex items-center space-x-5">
           <MdEmail/>
            <h1 className=' tracking-wide font-semibold font-sans text-sm'>store.bhatbhateni@gmail.com</h1>
          </div>
        </div>
        <div className="leftContent my-5 md:my-0">
          <div className="aboutPage space-y-3">
            <h1 className='tracking-wide font-semibold font-sans text-md'>About</h1>
            <h1 className='tracking-wide font-semibold font-sans text-sm'>
              Bhatbhateni Store is e-commerce site for shoping <br /> products online, customers can simply make their <br />
              oder which is shiped in their location within a week<br /> Thank you
            </h1>
          </div>

          <div className="socialMedia space-x-4 my-8 flex">
          <BsFacebook/>
          <FaGithub/>
          <FaTwitterSquare/>
          </div>
        </div>
      </div>
      <div className='text-center'><h1 className=' tracking-wide text-md font-mono font-semibold'>
        BhatBhateni Store Ⓒ 2022 - All Rights Reserved 
        </h1></div>
    </div>
  )
}

export default Footer