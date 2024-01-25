import React from 'react'

function Services() {
    return (
        <>
        <div className='w-full min-h-[50vh] flex flex-col justify-center items-center'>
            <p className='text-yellow-400 text-2xl'>What we Do</p>
            <h1 className='text-8xl font-extrabold'>Our Services</h1>
            <div className='bg-yellow-400 py-1 w-[10%] rounded my-3'></div>
            <div className='w-full flex flex-row gap-5 justify-center items-center mt-[4vw]'>
                <div className='min-h-[50vh] w-[25%] hover:bg-yellow-400 duration-300 flex items-center justify-center rounded-md '>
                    <div className='flex flex-col items-center justify-center px-[3vw] py-[5vw] text-center'>
                        <img className='rounded h-[20vh]' src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h1 className='text-4xl font-bold'>Digital Strategy</h1>
                        <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                    </div>
                </div>
                <div className='min-h-[50vh] w-[25%] hover:bg-yellow-400 duration-300 flex items-center justify-center rounded-md'>
                    <div className='flex flex-col items-center justify-center px-[3vw] py-[5vw] text-center'>
                        <img className='rounded h-[20vh]' src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h1 className='text-4xl font-bold'>Web Development</h1>
                        <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                    </div>
                </div>
                <div className='min-h-[50vh] w-[25%] hover:bg-yellow-400 duration-300 flex items-center justify-center rounded-md'>
                    <div className='flex flex-col items-center justify-center px-[3vw] py-[5vw] text-center'>
                        <img className='rounded h-[20vh]' src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h1 className='text-4xl font-bold'>Social Media</h1>
                        <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Services
