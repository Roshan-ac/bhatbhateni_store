import React, { useRef } from 'react'
import Image from 'next/image'
import martLogo from '../assets/mart.png'
import Link from 'next/link'
import { SiLivechat } from 'react-icons/si';
import { VscAccount, VscTrash } from 'react-icons/vsc'
import { MdShoppingCart, MdKeyboardBackspace } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { FaShippingFast } from 'react-icons/fa'
import { decrement, increment,clearItem } from '../Slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
  let totalPrice = 0
  const count = useSelector((state) => state.counter.items)
  const dispatch = useDispatch()
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
  return (
    <div className='NavBar shadow-md top-0 sticky z-10 bg-white py-3 md:p-0'>
      <div className="navBarContent">
        <nav className='md:flex space-x-5 items-center'>
            <Link href={'/'} >
          <div className="logo">
              <Image className="cursor-pointer" src={martLogo} height={80} width={200}></Image>
          </div>
            </Link>
          <div className="navigationItems">
            <ul className=' text-black flex space-x-2 text-md md:mx-20 pt-5 font-semibold tracking-wider'>
              <Link href={'/livechat'}>
                <li className='flex items-center space-x-2 rounded-md border-2 h-8 px-5 border-purple-900 cursor-pointer'><span><SiLivechat /></span><span>Chat</span></li>
              </Link>
              <Link href={'/account'}>
                <li className='flex items-center space-x-2 rounded-md border-2 h-8 px-5 border-purple-900 cursor-pointer'><span><VscAccount /></span><span>Account</span></li>
              </Link>
            </ul>
          </div>
          <div className="shopingCart absolute right-8 top-5">
            <MdShoppingCart onClick={toogleSidebar} className='text-2xl mr-5 mt-5 cursor-pointer' />
          </div>
        </nav>
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
                <li>
                  <div key={item.id} className="flex  space-x-2 justify-between">
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
            }):
            <div className='flex justify-center h-36 items-center'>
              <h1 className='font-serif font-normal tracking-wide text-md text-center'>You have'nt oder any products yet</h1>
              <h1></h1>
            </div>
          }
        </ol>
        <div className="ammount my-5">
          <h1 className='mx-10 my-2 font-semibold tracking-wide'>Total : रु <span>{Math.ceil(totalPrice)}</span></h1>
        </div>
        <div className="buttons flex justify-between">
        <li className='mx-10 w-28 flex items-center space-x-2 rounded-md border-2 h-8 px-5 border-purple-900 cursor-pointer'><button className='flex items-center space-x-3 tracking-wide font-serif' onClick={()=>dispatch(clearItem())} ><FaShippingFast /> <span>Oder</span> </button></li>
          <li className='mx-10 w-28 flex items-center space-x-2 rounded-md border-2 h-8 px-5 border-purple-900 cursor-pointer'><button className='flex items-center space-x-3 tracking-wide font-serif' onClick={()=>dispatch(clearItem())} ><VscTrash /> <span>Clear</span> </button></li>
        </div>
      </div>
    </div>
  )
}

export default Navbar


