import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetch('/api/hello')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          console.log(data);
        })
    }
    fetchData();
  }, [])


  return (
    <div className={''}>
      <Head>
        <title>Bhatbhateni Store</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' m-5'>
        <div className={'pt-4 md:flex justify-end'}>
          <div className="sorlistcontainer md:flex flex justify-start md:my-0">
            <div className="md:absolute md:top-24 md:right-16 md:px-5 sortList bg-gray-700 rounded-md p-2 mx-5 text-white flex space-x-3 justify-center items-center">
              <h1 className=' font-semibold tracking-wide uppercase'>Sort by</h1>
              <select id="price" className='rounded-md p-1 font-semibold tracking-wide '>
                <option value="volvo" unselectable='on'>Price</option>
                <option value="saab">upto 1000</option>
                <option value="opel">upto 5000</option>
                <option value="audi">upto 10000</option>
              </select>
              <select id="categeory" className='rounded-md p-1 font-semibold tracking-wide'>
                <option value="volvo">Categeory</option>
                <option value="saab">Accesories</option>
                <option value="opel">Food</option>
                <option value="audi">cosmetics</option>
                <option value="audi">clothings</option>
                <option value="audi">toys</option>
              </select>
            </div>
          </div>
        </div>
        <div className="ItemDisplay flex space-x-3 border w-72 border-black rounded-lg">
          <div className="categeroy mx-5">
            <h1 className=' font-bold tracking-wider'>Categeory :<span className=' font-serif font-light'> All</span></h1>
          </div>
          <div className="price">
            <h1 className=' font-bold tracking-wider'>Price :<span className=' font-serif font-light'> All</span></h1>
          </div>
        </div>

        <div className="ItemsContainer my-5 flex flex-wrap">
          {data !== null &&
            data.map((data, index) => {
              const { title, category, description, image, price, rating } = data;
              return (
                <div className=" cursor-pointer itemDisplayCard mr-4 w-56  space-y-2 my-5" key={index}>
                  <div className="image bg-slate-500 rounded-md h-52 p-1">
                    <Image className=' rounded-md' src={image}  height={204} width={220} ></Image>
                  </div>
                  <div className="title font-semibold capitalize text-lg text">
                    <h1>{title}</h1>
                  </div>
                  <div className="desc">
                    <h1 className=' font-serif font-medium'>Price - Rs {price}</h1>
                  </div>
                  <div className="desc">
                    <h1 className=' font-serif font-medium'>Rating : {rating.rate}</h1>
                  </div>
                </div>
              )
            })
          }



        </div>
      </main>
    </div>
  )
}
