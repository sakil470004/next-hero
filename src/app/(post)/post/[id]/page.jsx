"use client";
import { getDataById } from '@/services/postApi';
import { useParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

function CurrentPost() {
    const [postData, setPostData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getDataById(id).then((data) => {
            setPostData(data);
        })
    }, [id]);
    return (
        <div>
            <h1>Post Details </h1>
            <div className='border border-1 border-blue-100 p-12 '>
                <h3 className='font-bold underline text-xl'>{postData.title}</h3>
                <p>{postData.body}</p>
            </div>
        </div>
    )
}

export default CurrentPost