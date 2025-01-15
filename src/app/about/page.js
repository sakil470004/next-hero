import AboutContents from '@/components/AboutContents'
import React from 'react'

// const getTime = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/time`, {
//     next: {
//       revalidate: 5,
//     }
//   });
//   const data = await res.json();
//   return data.currentTime
// };
async function AboutPage() {
  // const currentTime = await getTime();
  return (
    <div>
      <AboutContents />
      <div className="text-center text-2xl mt-10">
        {/* Current Time: {currentTime} */}
      </div>
    </div>
  )
}

export default AboutPage