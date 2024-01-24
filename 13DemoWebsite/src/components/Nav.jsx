import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
    return (
        <>
            <div className='flex justify-around mt-6 bg-transparent sticky'>
                <div>
                    <img className='p-2 h-16' src={logo} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex justify-center items-center space-x-5'>
                        <li><a className='text-[1.5vw]' href="#">Home</a></li>
                        <li><a className='text-[1.5vw]' href="#">Services</a></li>
                        <li><a className='text-[1.5vw]' href="#">Works</a></li>
                        <li><a className='text-[1.5vw]' href="#">About</a></li>
                        <li><a className='text-[1.5vw]' href="#">Pages</a></li>
                        <li><a className='text-[1.5vw]' href="#">Blog</a></li>
                        <li><a className='text-[1.5vw]' href="#">Content</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav
