"use client"
import React, { use } from "react";


 function page({params}) {
  // console.log(params?.slug)
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
  const { slug } = use(params);
  console.log(slug)
  const singleBlog= blogs.find( item=>item?.id==slug)
  // console.log(singleBlog)
    return (
    <div className='h-screen'>
        Details
        <div className='p-12 border-2 space-y-4'>
          <p>{singleBlog?.title}</p>
          <p>{singleBlog?.description}</p>
          
        </div>
    </div>
  )
}

export default page