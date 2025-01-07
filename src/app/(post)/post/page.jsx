import { getData } from '@/services/postApi';
import React from 'react'



const  PostPage=async()=> {
 const postData= await getData();
    return (
    <div>
        <h1>Post Page</h1>
        <div className='grid grid-cols-3 px-12 gap-5'>
            {postData.map((post) => (
                <div className='border border-1 border-blue-100 p-12 ' key={post.id}>
                    <h3 className='font-bold underline text-xl'>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PostPage