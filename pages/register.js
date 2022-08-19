import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Account() {
  const router = useRouter()
  const [isUser, setIsUser] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsUser(true);
      router.replace('/dashboard')
    }

  }, [])
  const [credentials, setCredentials] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const [isloading, setisloading] = useState(false);
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }

  const register = async (e) => {
    e.preventDefault()
    const { firstname, lastname, email, password } = credentials
    if ((firstname && lastname && email && password)) {
      setisloading(true);
      firstname = credentials.firstname.toLowerCase().trim();
      const username = (firstname + Math.floor((Math.random() * 100) + 10))
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, firstname: credentials.firstname, lastname: credentials.lastname, email: credentials.email, password: credentials.password })
      };
      const response = await fetch('http://localhost:3000/api/signup', requestOptions)
      const jsonData = await response.json()
      if (jsonData.success) {
        setisloading(false);
        toast.success('user register successfully !', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setCredentials({ firstname: '', lastname: '', email: '', password: '' })
        setCredentials({ email: '', password: '' })
        setTimeout(() => {
          router.push('/login')
        }, 1000);
      } else {
        toast.error(jsonData.message, {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setisloading(false)
      }
    }
    else {
      toast.warn('Input field should not be empty', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {
        !isUser &&
        <div className="relative min-h-screen flex ">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
            <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-end justify-end p-10 pr-20 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
              style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" }}>
              <div className="absolute bg-gradient-to-b from-pink-600 to-pink-500 opacity-50 inset-0 z-0"></div>
              <div className="w-full  max-w-lg z-10 mb-20">
                <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Bhatbhateni Store</div>
                <div className="sm:text-sm xl:text-md text-gray-100 font-normal">Likley to inhance the deterrent of individual to make their perfect choice of goods. Store brings with unlimited choices as we keep surviliance to the priority of people and serve as perfect and deserving goods for all of our customers. Apart from it, we strongly consider the privacy of our customers is crucial things and we've mangaged to keep them very securly.</div>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
              <div className="max-w-md w-full space-y-8">
                <div className="mb-10">
                  <h3 className="font-semibold text-2xl text-gray-800">Create a account</h3>
                  <p className="text-gray-500">Please register your account.</p>
                </div>
                <div className="flex">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <button type="submit" className="w-full flex items-center justify-center bg-red-500  hover:bg-red-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      Sign up with
                      <svg className="w-4 ml-2" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z" /></svg>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <button type="submit" className="w-full flex items-center justify-center bg-blue-600  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      Sign up with
                      <svg className="w-4 ml-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22" /></svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-200"></span>
                  <span className="text-gray-300 font-normal">or continue with</span>
                  <span className="h-px w-16 bg-gray-200"></span>
                </div>
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                      </label>
                      <input value={credentials.firstname} onChange={onChange} name='firstname' className="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 border border-gray-200 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" id="grid-first-name" type="text" placeholder="first name" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                      </label>
                      <input value={credentials.lastname} onChange={onChange} name='lastname' className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" id="grid-last-name" type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                      </label>
                      <input value={credentials.email} onChange={onChange} name='email' className=" block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" id="grid-password" type="email" placeholder="email" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                      </label>
                      <input value={credentials.password} onChange={onChange} name='password' className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-300" id="grid-password" type="password" placeholder="******************" />
                    </div>
                  </div>

                  <div className="space-y-6 mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-pink-400 hover:text-pink-400">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button onClick={register} className="w-full items-center flex justify-center bg-pink-400  hover:bg-pink-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                        {
                          isloading ?
                            <>
                              <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                              </svg>
                              Sign in..
                            </>
                            : <>Sign in</>
                        }
                      </button>
                    </div>
                    <div className=' space-x-2 text-center' >
                      <span>Already have an account ?</span>
                      <Link href="./login">
                        <span className=' cursor-pointer font-serif tracking-wider underline underline-offset-4 font-semibold'>Login.</span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Account
















