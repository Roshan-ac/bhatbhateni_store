import React from 'react'
import Image from 'next/image'
import iphone from '../pages/assets/cartItems/iphone.png'
import laptop from '../pages/assets/cartItems/laptop.png'
import iphone2 from '../pages/assets/cartItems/iphone2.png'
import samsung from '../pages/assets/cartItems/samsung.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faTrash } from "@fortawesome/free-solid-svg-icons";
function cart() {
  return (
    <div className='cartContainer p-5'>
      <h1 className='text-lg font-bold tracking-widest underline underline-offset-4 uppercase px-5 my-5'>Your cart</h1>
      <div className="itemContainer space-y-5 my-5 border border-black p-2">
        <div className="orderedItem flex justify-between items-center bg-slate-300 p-3 rounded-md">
          <div className="items flex space-x-6 items-center">
            <Image src={iphone} height={40} width={40}></Image>
            <h1 className=' font-semibold tracking-wide '>Iphone 11 Max</h1>
          </div>
          <div className="buttons flex space-x-8 px-5">
            <FontAwesomeIcon icon={faSquareUpRight}></FontAwesomeIcon>
            <FontAwesomeIcon color='red' icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
        <div className="orderedItem flex justify-between items-center bg-slate-300 p-3 rounded-md">
          <div className="items flex space-x-6 items-center">
            <Image src={laptop} height={40} width={40}></Image>
            <h1 className=' font-semibold tracking-wide '>Ryzen 8 Asus A5000G Series</h1>
          </div>
          <div className="buttons flex space-x-8 px-5">
            <FontAwesomeIcon icon={faSquareUpRight}></FontAwesomeIcon>
            <FontAwesomeIcon color='red' icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
        <div className="orderedItem flex justify-between items-center bg-slate-300 p-3 rounded-md">
          <div className="items flex space-x-6 items-center">
            <Image src={iphone2} height={40} width={40}></Image>
            <h1 className=' font-semibold tracking-wide '>Iphone 12 Pro Max</h1>
          </div>
          <div className="buttons flex space-x-8 px-5">
            <FontAwesomeIcon icon={faSquareUpRight}></FontAwesomeIcon>
            <FontAwesomeIcon color='red' icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
        <div className="orderedItem flex justify-between items-center bg-slate-300 p-3 rounded-md">
          <div className="items flex space-x-6 items-center">
            <Image src={samsung} height={40} width={40}></Image>
            <h1 className=' font-semibold tracking-wide '>Samsung Note 8 pro</h1>
          </div>
          <div className="buttons flex space-x-8 px-5">
            <FontAwesomeIcon icon={faSquareUpRight}></FontAwesomeIcon>
            <FontAwesomeIcon color='red' icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <div className="actionButton flex justify-between ">
        <button className='p-2 border border-sky-900 rounded-lg tracking-wide font-semibold text-blue-900'>Continue Shoping</button>
        <button className='text-green-900 border border-green-700 p-2 rounded-lg tracking-wide font-semibold'>Oder Now</button>
      </div>
    </div>
  )
}

export default cart