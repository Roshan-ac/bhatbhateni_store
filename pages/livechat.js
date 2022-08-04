import React,{useState} from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faMultiply, faSubtract } from "@fortawesome/free-solid-svg-icons";
const livechat = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div className="liveChatSection md:flex">
      <div className="titleContainer md:w-3/4 mt-10 md:my-20 mx-10">
        <div className="title space-y-6">
          <h1 className=' font-extrabold tracking-wider md:text-xl text-lg underline underline-offset-4'>Welcome to live Chat Section.<br />of BhatBhateni App store</h1>
          <h1 className=' tracking-wide text-md'>Feel free to leave your any Queries,we've integrated fully automated chatBot in the system to response your queries.<br /> Our motive is to make this system safe and user firendly.
            We're pleased to inform you that chatBot always ignore <br /> nonsense queries, hope you will handle this gentely.
          </h1>
        </div>
      </div>

      {
        showModal &&
        <div className="chatContainer md:my-20 bg-slate-900 md:w-2/5 mx-5 rounded-md">
        <div className="w-full h-16 flex items-center px-2  justify-between">
          <div className="avtarTitle flex space-x-4 items-center">
            <Image src="https://static.vecteezy.com/system/resources/previews/003/225/540/original/robot-chatbot-head-icon-sign-vector.jpg" width={40} height={40} className="rounded-full"></Image>
            <h1 className=' font-semibold text-white tracking-widest uppercase'> Pinky chatBot </h1>
          </div>
          <div className="iconButton space-x-10 mx-5">
            <FontAwesomeIcon size='lg' className='mr-5' icon={faQuestionCircle} color={'white'}></FontAwesomeIcon>
            <FontAwesomeIcon size='xl' onClick={()=>showModal?setShowModal(false):setShowModal(true)} className='mr-5' icon={faMultiply} color={'red'}></FontAwesomeIcon>
          </div>
        </div>
        <div className="chatbody h-96 bg-slate-500"></div>
        <div className="form h-14 space-x-5 p-3 flex justify-between">
          <input placeholder='Write Something here !' type="text" className=' bg-white text-black py-1 px-2 rounded w-96' />
          <button className='bg-green-400 py-1 px-6 tracking-widest rounded-full font-semibold'>Send</button>
        </div>
      </div>
      }
      {
        !showModal &&
        <div className="chatResponser md:w-2/5 mr-10 absolute top-3/4 left-3/4">
          <div className="restBody flex items-center space-x-4">
          <Image src="https://static.vecteezy.com/system/resources/previews/003/225/540/original/robot-chatbot-head-icon-sign-vector.jpg" width={60} height={60} className="rounded-full border-2 border-blue-500 p-1"></Image>
          <h1 className=' font-semibold tracking-widest text-lg'>Do you Want to Chat ?</h1>
          <button onClick={()=>showModal?setShowModal(false):setShowModal(true)} className=' font-semibold tracking-wide bg-blue-300 px-4 p-1 rounded-full'>OK</button>
          </div>
        </div>
      }
    </div>
  )
}

export default livechat