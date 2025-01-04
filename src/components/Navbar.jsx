"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const pathName=usePathname();
    const router= useRouter();
    const links=[
        {
            title:"Home",
            path:'/',
        },
        {
            title:"Contacts",
            path:'/contacts',
        },
        {
            title:"About",
            path:'/about',
        },
        {
            title:"Services",
            path:'/services',
        },
    ]
    const handlerLogin=()=>{
        router.push('/login')
    }
    return (
        <nav className="bg-blue-500 flex px-6 py-4 justify-between items-center">
            <h2 className='text-3xl text-red-500'>Next Hero</h2>
            <ul className='flex justify-between items-center space-x-4'>
              {
                links.map(item=>  <li key={item.title}><Link className={`${pathName===item?.path && "text-red-300"}`} href={item?.path}>{item?.title}</Link></li>)
              }
            </ul>
            <button onClick={handlerLogin} className='bg-red-200 text-gray-500 px-6 py-4 '>Login</button>
        </nav>
    )
}

export default Navbar