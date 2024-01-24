import React from 'react'
import bg from '../assets/bg.jpg'

function Home() {
    return (
        <>
            <div className="w-full h-[90vh] bg-[url('../assets/bg.jpg')] flex flex-col items-left justify-center px-[10vw] leading-tight">
                <h1 className='text-[8vw] font-extrabold'>Creative</h1>
                <h1 className='text-[8vw] font-extrabold'>Solution</h1>
                <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nostrum.</p>
                <button className='py-4 px-6 bg-yellow-400 rounded-xl w-[15%] mt-3 text-xl'>Getting Started</button>
            </div>
            
        </>
    )
}

export default Home
