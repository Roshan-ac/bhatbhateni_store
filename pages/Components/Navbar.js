import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import martLogo from '../assets/mart.png'
import Link from 'next/link'
import { SiLivechat } from 'react-icons/si';
import { VscAccount, VscTrash } from 'react-icons/vsc'
import { MdShoppingCart, MdKeyboardBackspace, MdArrowDropDown } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { FaShippingFast } from 'react-icons/fa'
import { decrement, increment, clearItem } from '../Slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { statuses } from '../Slices/userSlice';
import { logout, getUser } from '../Slices/userSlice';




const Navbar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  let totalPrice = 0
  const count = useSelector((state) => state.counter.items)
  const { data, success } = useSelector((state) => state.user.data)
  const { status } = useSelector((state) => state.user)
  const ref = useRef()
  const toogleSidebar = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      dispatch(getUser())
    }
  }, [router.query])

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('auth-token');
  }

  return (
    <nav className='px-4 py-3 shadow-md top-0 sticky bg-white z-10'>
      <div className="md:flex space-y-2 items-center justify-between">
        <div className="logo">
          <Link href={'/'} >
            <div className="logoImage">
              <Image className="cursor-pointer" src={martLogo} height={80} width={200}></Image>
            </div>
          </Link>
        </div>
        <div className="navItem mx-2">
          <div className=' md:flex items-center space-y-5 md:space-y-0'>
            <ul className=' text-black flex space-x-2 text-md md:mx-20 font-semibold tracking-wider'>
              <Link href={'/livechat'}>
                <li className='flex items-center space-x-2 rounded-md border-2 px-5 border-purple-900 cursor-pointer'><span><SiLivechat /></span><span>Chat</span></li>
              </Link>
              {!success &&
                <Link href={'/register'}>
                  <li className='flex items-center space-x-2 rounded-md border-2 px-5 border-purple-900 cursor-pointer'><span><VscAccount /></span><span>Account</span></li>
                </Link>
              }
            </ul>
            <div className="flex items-center">
              <div className="shopingCart">
                <MdShoppingCart onClick={toogleSidebar} className='text-2xl cursor-pointer' />
              </div>
              {
                success &&
                <div className="group inline-block mx-5">
                  <button className=" space-x-2 rounded-b-none outline-none focus:outline-none border px-4 py-1 bg-gray-200  rounded-md flex items-center justify-between w-30">
                    <VscAccount size={20} />
                    <span>{data.username}</span>
                    <MdArrowDropDown className='fill-current w-4 transform hover:-rotate-180
            transition duration-150 ease-in-out' size={12} />
                  </button>
                  <ul className="bg-gray-200 border rounded-md rounded-t-none py-2 px-3 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-[9.3rem] ">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Oders</li>
                    <Link href={'/dashboard'}><a><li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">My account</li></a></Link>
                    <li onClick={handleLogout} className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Logout</li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100 cursor-pointer">Setting</li>
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className=" h-[100vh] md:w-2/5 w-full bg-purple-50  absolute transform translate-x-full top-0 right-0  transition-transform ">
        <h2 className='text-center font-semibold tracking-wide mt-6 '>My Cart</h2>
        <div className="text-red-700 closeButton absolute right-4 text-2xl top-5 cursor-pointer p-1">
          <MdKeyboardBackspace className='rounded-full' onClick={toogleSidebar} />
        </div>
        <ol className='p-5 space-y-5'>
          {
            count.length !== 0 ?
              count.map((item) => {
                totalPrice += item.totalPrice
                return (
                  <li key={item.id}>
                    <div className="flex  space-x-2 justify-between">
                      <div className="flex space-x-5">
                        <img src={item.image} className='h-10 rounded-full w-10' alt="" srcSet="" />
                        <h1 className='font-semibold tracking-wide'>{item.title.substr(0, 40)}..</h1>
                      </div>
                      <div className="flex items-center space-x-2 text-xl text-purple-900">
                        <AiFillMinusCircle onClick={() => dispatch(decrement(item))} />
                        <h1 className=' text-sm font-bold'>{item.count}</h1>
                        <AiFillPlusCircle onClick={() => dispatch(increment(item))} />
                      </div>
                    </div>
                  </li>
                )
              }) :
              <div className='flex justify-center h-36 items-center'>
                <h1 className='font-serif font-normal tracking-wide text-md text-center'>You have&apos;nt oder any products yet</h1>
                <h1></h1>
              </div>
          }
        </ol>
        <div className="ammount my-5">
          <h1 className='mx-10 my-2 font-semibold tracking-wide'>Total : रु <span>{Math.ceil(totalPrice)}</span></h1>
        </div>
        <div className="buttons flex justify-between">
          <li className='mx-10 w-28 flex items-center space-x-2 rounded-md border-2 h-8 px-5 border-purple-900 cursor-pointer'><button className='flex items-center space-x-3 tracking-wide font-serif' onClick={() => dispatch(clearItem())} ><FaShippingFast /> <span>Oder</span> </button></li>
          <li className='mx-10 w-28 flex items-center space-x-2 rounded-md border-2 h-8 px-5 border-purple-900 cursor-pointer'><button className='flex items-center space-x-3 tracking-wide font-serif' onClick={() => dispatch(clearItem())} ><VscTrash /> <span>Clear</span> </button></li>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



// 