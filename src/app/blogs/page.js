import Link from 'next/link';
import React from 'react'

function page() {
  const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description: "A deep dive into closures in JavaScript and how they work under the hood."
    },
    {
      id: 2,
      title: "React vs Vue: A Comparative Analysis",
      description: "Exploring the key differences between React and Vue to help you decide which one suits your project."
    },
    {
      id: 3,
      title: "10 Tips for Writing Clean Code",
      description: "Practical tips and tricks to improve code readability and maintainability."
    },
    {
      id: 4,
      title: "Introduction to Node.js",
      description: "Learn the basics of Node.js, its architecture, and why it's popular among developers."
    },
    {
      id: 5,
      title: "Mastering Flexbox in CSS",
      description: "A comprehensive guide to mastering Flexbox for modern web layout design."
    }
  ];
  
  return (
    <div className='p-24 '>
       {
        blogs.map(item=><div className='p-12 border-2 space-y-4' key={item.id}>
          <p>{item?.title}</p>
          <p>{item?.description}</p>
          <button className='bg-blue-100 border-1 px-4 py-3 text-gray-800'>
            <Link href={`/blogs/${item?.id}`}>View Details</Link>
          </button>
        </div>)
       }
       <Link href={'/blogs/specialblog'}>Special Blog</Link>
    </div>
  )
}

export default page