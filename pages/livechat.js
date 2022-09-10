import React from 'react'
import { IonIcon } from '@ionic/react'



const Livechat = () => {
  // const menus = [
  //   { name: "Home", icon: AiOutlineHome },
  //   { name: "Account", icon: AiOutlineUser },
  //   { name: "Chat", icon: AiFillWechat },
  //   { name: "Setting", icon: AiFillSetting }
  // ]
  return (
    <div className=' bg-black h-screen'>
      <div className="navigation bg-white min-h-[4.1rem] relative top-10 rounded-t-lg mx-5">
        <span></span>
        <ul className=' flex'>
          {/* {
            menus.map((item, i) => {
              return (
                <li key={i}>

                  <span>{item.name}</span>
                </li>
              )
            })
          } */}
        </ul>
      </div>
    </div>
  )
}

export default Livechat