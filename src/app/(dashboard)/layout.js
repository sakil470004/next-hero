import React from 'react'

function layout({ children }) {
    return (
        <div>
            <div className='text-red-700 bg-gray-50 w-full'>Dashboard Nav From layout</div>
            {
                children
            }
            <div className='text-red-700 bg-pink-200 w-full'>Dahboard Footer From layout</div>
        </div>
    )
}

export default layout