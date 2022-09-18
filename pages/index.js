import Head from 'next/head'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { setData } from './Slices/itemsSlice'
import { useDispatch } from 'react-redux'

export default function Home(props) {
  const { data } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setData(data))
  }, [])


  return (
    <div className={''}>
      <Head>
        <title>Bhatbhateni Store</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='my-2 md:m-4'>
        <div className="ItemsContainer justify-center md:justify-start flex flex-wrap">
          {
            data.map((data, index) => {
              const { _id, title, img, price, slug } = data;
              return (
                <Link href={`./product/${slug}`} key={_id}>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg my-2 cursor-pointer">
                    <a className=" cursor-pointer block relative h-48 rounded overflow-hidden hover:scale-110 transform transition duration-300">
                      <img alt="ecommerce" className="h-full m-auto" src={img} />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">categeory</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{title.substr(0, 20)}...</h2>
                      <p className="mt-1">रु {price}</p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API}getProducts`)
  const data = await res.json();
  return { props: { data } }
}
