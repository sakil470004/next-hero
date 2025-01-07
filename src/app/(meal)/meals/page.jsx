import Meals from '@/components/Meals';


function page() {
    
    return (
        <div className='p-12'>
            {/* style this line */}
            <h1 className='text-3xl text-blue-500'>Meals Page</h1>
            <p className='text-lg text-gray-700 mt-4'>Choose Meal By choice of Search</p>
            <Meals/>
        </div>
    )
}

export default page