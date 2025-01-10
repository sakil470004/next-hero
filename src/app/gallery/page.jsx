import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className='text-4xl'>Gallery Page</h1>
        <div>
           { [1,2,3,4,5].map((item)=>(
                <div key={item} className='border p-4 rounded shadow'>
                    <Image src={`/images/${item}.png`} alt='hero' width="1920" height="1080" className=' object-cover rounded mb-4'/>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default page