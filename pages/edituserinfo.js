import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { statuses } from './Slices/userSlice';
const DashboardEdit = () => {
    const { data } = useSelector((state) => state.user.data)
    const [userInfo, setUserInfo] = useState({
        firstname: data.firstname,
        lastname: data.lastname,
        phonenumber: data.phonenumber,
        address: data.address
    })
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            router.push('/register')
            return (<></>)
        }
    }, [])

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const updateUserInfo = async () => {
        if (userInfo.firstname !== '' && userInfo.lastname !== '' && userInfo.phonenumber !== '' && userInfo.address !== '') {
           console.log('hello world')
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: JSON.stringify({ firstname: userInfo.firstname, lastname: userInfo.lastname, phonenumber: userInfo.phonenumber, address: userInfo.address })
            };
            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API}updateUser`, requestOptions)
            const jsonData = await response.json()
            console.log(jsonData)
        }
    }
    return (
        <div className="container mx-auto my-5 p-5 h-max overflow-clif">
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
                            <li className="items-center py-3 space-x-2">
                                <span><button onClick={updateUserInfo} className=' bg-green-400 rounded-md text-white px-2 py-1'>Save</button></span>
                                <span className="ml-auto"><button className=' bg-green-400 rounded-md text-white px-2 py-1'>back</button></span>
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
                            <div className="grid md:grid-cols-2">
                                <div className="grid grid-cols-2 mt-1">
                                    <div className="px-1 py-2 font-semibold">First Name</div>
                                    <input name='firstname' onChange={onChange} type="text" className="py-1 bg-slate-200 rounded-md outline-red-400 w-max px-2" value={userInfo.firstname} />
                                </div>
                                <div className="grid grid-cols-2 mt-1">
                                    <div className="px-1 py-2 font-semibold">Last Name</div>
                                    <input name='lastname' onChange={onChange} type="text" className="py-1 bg-slate-200 rounded-md outline-red-400 w-max px-2" value={userInfo.lastname} />
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <div className="px-1 py-2 font-semibold">Contact No.</div>
                                    <input name='phonenumber' onChange={onChange} type="text" className="py-1 bg-slate-200 rounded-md outline-red-400 w-max px-2" value={userInfo.contact} />
                                </div>
                                <div className="grid grid-cols-2 mt-2">
                                    <div className="px-1 py-2 font-semibold">Address</div>
                                    <input name='address' onChange={onChange} type="text" className="py-1 bg-slate-200 rounded-md outline-red-400 w-max px-2" value={userInfo.address} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardEdit
