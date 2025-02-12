"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session)
    const links = [
        {
            title: "Home",
            path: '/',
        },
        {
            title: "Comments",
            path: '/comments',
        },
        {
            title: "Gallery",
            path: '/gallery',
        },
        {
            title: "Meals",
            path: '/meals',
        },
        {
            title: "Post",
            path: '/post',
        },
        {
            title: "Blogs",
            path: '/blogs',
        },
        {
            title: "Contacts",
            path: '/contacts',
        },
        {
            title: "About",
            path: '/about',
        },
        {
            title: "Dashboard",
            path: '/dashboard',
        },
        {
            title: "Create User",
            path: '/createuser',
        },
        {
            title: "Services",
            path: '/services',
        },
        {
            title: "Categories",
            path: '/categories',
        },
    ]
    const handlerLogin = () => {
        router.push('/api/auth/signin')
    }
    if (pathName.includes('dashboard'))
        return <div className='bg-blue-100 text-gray-900'>
            Dashboard PRO NAV RAINNING Form nav
        </div>
    return (
        <nav className="bg-blue-500 flex px-6 py-4 justify-between items-center">
            <h2 className='text-3xl text-red-500'>Next Hero</h2>
            <ul className='flex justify-between items-center space-x-4'>
                {
                    links.map(item => <li key={item.title}><Link className={`${pathName === item?.path && "text-red-300"}`} href={item?.path}>{item?.title}</Link></li>)
                }
            </ul>
            {!session.data ? <button onClick={handlerLogin} className='bg-red-200 text-gray-500 px-6 py-4 '>Login</button> : <button onClick={() => router.push('/api/auth/signout')} className='bg-red-200 text-gray-500 px-6 py-4 '>Logout</button>
            }
        </nav>
    )
}

export default Navbar