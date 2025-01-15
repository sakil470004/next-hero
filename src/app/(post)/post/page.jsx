
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
    title: "Posts",
    description: "A Superpower I got from Next.js",
  };
  export const getData=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data=await res.json();
//    for redirecting to a specific post
    // if(data){
    //     redirect(`post/${data[0].id}`)
    // }
    return data;
}

const PostPage = async () => {
const postData=await getData();
   
    return (
        <div className='p-12'>
            <h1>All Post Page</h1>
            <div className='grid grid-cols-3 px-12 gap-5'>
                {postData.map((post) => (
                    <div className='border border-1 border-blue-100 p-12 ' key={post.id}>
                        <h3 className='font-bold underline text-xl'>{post.title}</h3>
                        <p>{post.body}</p>
                         <Link href={`/post/${post.id}`}><button className='text-blue-500'> 
                            Read More
                            </button> </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostPage