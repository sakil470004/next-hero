"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Meals() {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])
    const handler = (e) => {
        setSearch(e.target.value)
    }
    const loadMeals = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json()
        setMeals(data.meals)
    }
    useEffect(() => {
        loadMeals()
    }, [])
    
    if (meals?.length<=0 || !meals) return <div className='text-white'>No Data Found</div>
    return (
        <div className='p-12'>
       <div className='w-full mb-4 flex justify-center align-center'>

        <input 
            type="text" 
            value={search} 
            onChange={handler} 
            placeholder="Search for meals..." 
            className="border text-black p-2  min-w-60"
        />
        <button onClick={loadMeals} className="bg-blue-500 text-white p-2 rounded">Search</button>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals?.map(meal => (
                <div key={meal.idMeal} className="border p-4 rounded shadow">
                    <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500} className=" h-48 object-cover rounded mb-4"/>
                    <h2 className="text-xl font-bold mb-2">{meal.strMeal}</h2>
                    <p>{meal.strInstructions.substring(0, 100)}...</p>
                </div>
            ))}
        </div>

            
        </div>
    )
}

export default Meals