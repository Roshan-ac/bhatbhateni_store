import React, { useState } from 'react'
import store from '../pages/assets/storename.png'
import Image from 'next/image'

function Account() {
  const [createAccount, setCreateAccount] = useState(true)
  return (
    <div className='h-screen'>
      <div className='md:flex  md:space-x-10 md:pt-10'>
        <div className=" mx-auto titleContainer md:mx-10  md:py-10 my-10 w-3/5 h-fit -z-1 text-black rounded-lg">
          <div className="md:w-max logo my-3 bg-purple-300 bg-opacity-50 shadow-md shadow-black rounded-lg p-2">
            <Image
              src={store}
              height={80}
              width={350}
              quality={100}
            />
          </div>
          <div className="slogan md:p-5 space-y-4 my-5">
            {
              createAccount ? <>
                <h1 className=' md:text-2xl uppercase'>Create A New Account</h1>
                <h1 className=''>Already have an account <span onClick={() => setCreateAccount(false)} className='mx-2  cursor-pointer text-yellow-900 tracking-wider underline uppercase underline-offset-4 text-md'>login</span></h1>
              </>
                : <>
                  <h1 className='md:text-2xl uppercase'>Login to your Account</h1>
                  <h1 className=''>Don&apos;t have account ?<span onClick={() => setCreateAccount(true)} className='mx-2  cursor-pointer text-yellow-900 tracking-wider underline uppercase underline-offset-4 text-md'>Signup</span></h1>
                </>
            }
            <h1 className=' md:w-2/3 md:text-lg tracking-wide hidden md:block'>
              Welcome to BhatBhateni app store. We are very thankfull to all customers
              and members. We&apos;ve been intregrating a fully fexible and intractive online
              shopping platform in nepal as we appericiate your presence and your valuable time
              spending on our store. We&apos;ve provided so many products with posible details.
              <br /> if you have any queries related to products and wanna join our membership program then kindly
              join with us <span className=' text-blue-900 underline underline-offset-4'>simply clicking this</span>. As we have fully automative chat bot where we suggested you to put your queries
            </h1>
          </div>
        </div>
        <div className="formContainer h-max  md:my-10 flex justify-center  md:py-14 md:px-16 rounded-lg">
          <div className=" rounded-md formData w-max border-2 border-purple-600 bg-purple-400  md:p-5 p-4">
            <h1 className=' absolute md:mx-16 mx-14 md:top-52 top-96 bg-purple-900 text-white  p-1 rounded-lg px-3 items-center font-serif font-medium tracking-wide'>{createAccount ? 'create a new account' : 'login to your account'}</h1>
            <div className=' bg-purple-900 my-5 space-y-5 bg-opacity-50 shadow-black shadow-md md:p-10 p-8 rounded-xl text-white font-semibold tracking-wider capitalize'>

            {
              createAccount &&
              <div className="username space-y-2">
                <h1>Username</h1>
                <input className='bg-white text-black px-5 py-2 rounded-md' type="text" placeholder='Enter Your Username' />
              </div>
            }
            <div className="email space-y-2">
              <h1>Email</h1>
              <input className='bg-white  text-black px-5 py-2 rounded-md' type="text" placeholder='Enter Your Email' />
            </div>
            <div className="password space-y-2">
              <h1>Password</h1>
              <input className=' bg-white border-2 text-black border-purple-900 outline-none  px-5 py-2 rounded-md' type="text" placeholder='Set New Password' />
            </div>
            </div>
            <div className="submit flex justify-center md:py-5 my-5 py-5 bg-purple-800 rounded-md shadow-xl bg-opacity-50">
              <button onClick={()=>{console.log('hello world')}} className=' shadow-black text-white bg-purple-900 px-10 py-2 shadow-md bg-opacity-40 border-t-2 border-l-2 rounded-md font-sans font-semibold tracking-wider'>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Account
















