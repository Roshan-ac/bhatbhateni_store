import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './Slices/itemsSlice';

export default function Home(props) {
  const [data, setData] = useState(props.data)
  const dispatch = useDispatch()
  dispatch(addItem(data))

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
              const { title, category, description, image, price, rating } = data;
              return (
                <Link href={`./product/${title}`} key={index}>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg my-2 cursor-pointer">
                  <a class=" cursor-pointer block relative h-48 rounded overflow-hidden hover:scale-110 transform transition duration-300">
                    <img alt="ecommerce" class="h-full m-auto" src={image} />
                  </a>
                  <div class="mt-4 text-center">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{title.substr(0, 20)}...</h2>
                    <p class="mt-1">रु {price}</p>
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
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json();
  return { props: { data } }
}