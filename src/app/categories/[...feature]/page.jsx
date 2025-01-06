import React, { use } from 'react'

function CategoriesDetails({ params }) {
    const { feature } = use(params)
    const [id, title, description] = feature
    return (
        <div>Categories Details Page
            <div className='p-12 border-2 space-y-4'>
                <p>{title}</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default CategoriesDetails