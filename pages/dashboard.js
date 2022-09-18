import React, { useEffect} from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser} from './Slices/userSlice';
const Dashboard = () => {
  const dispatch = useDispatch()
  const { data, success } = useSelector((state) => state.user.data)
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      dispatch(getUser)
    }
  }, [])

  return (
    <div>
      {
        success &&
        <div className="container mx-auto my-5 p-5 overflow-hidden">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white text-center">
                <div className="image mb-4">
                  <img className=" w-52 rounded-full mx-auto"
                    src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-user-management-icon-png-image_4101806.jpg"
                    alt="" />
                </div>
                <h1 className=" text-gray-900 font-bold text-xl leading-8 my-1">{data.username}</h1>
                <ul
                  className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                  <li className="flex items-center py-3">
                    <button onClick={() => { router.push('/edituserinfo') }} className=' bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-green-300 hover:text-black'>Edit info</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">First Name</div>
                      <div contentEditable="true" className="px-1 py-2">{data.firstname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Last Name</div>
                      <div className="px-1 py-2">{data.lastname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Contact No.</div>
                      <div className="px-1 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Address</div>
                      <div className="px-1 py-2">Arlington Heights, IL, Illinois</div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="px-1 py-2 font-semibold">Email.</div>
                      <div className="px-1 py-2">
                        <a className="text-blue-800" href="mailto:jane@example.com">{data.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Dashboard
