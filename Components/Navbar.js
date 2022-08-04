import React from 'react'
import Image from 'next/image'
import martLogo from '../pages/assets/mart.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbarItems md:flex justify-between pt-5 px-2">
          <Image src={martLogo} height={110} width={300}></Image>
          <ul className=' text-white flex space-x-2 text-md md:mx-20 pt-5 font-semibold tracking-wider'>
            <Link href={'/'}><a><li className='md:h-10 text-sm bg-purple-900 p-2 rounded w-20 text-center cursor-pointer hover:text-red-300'>Home</li></a></Link>
            <Link href={'/livechat'}><a><li className='md:h-10 text-sm bg-purple-900 p-2 rounded w-20 text-center cursor-pointer hover:text-red-300'>LiveChat</li></a></Link>
            <Link href={'/cart'}><a><li className='md:h-10 text-sm bg-purple-900 p-2 rounded w-20 text-center cursor-pointer hover:text-red-300'>Cart</li></a></Link>
            <Link href={'/account'}><a><li className='md:h-10 text-sm bg-purple-900 p-2 rounded w-20 text-center cursor-pointer hover:text-red-300'>Account</li></a></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
