// import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='absolute z-50 top-0 left-0 w-full min-h-16 md:min-h-20 px-5 md:px-0 flex justify-between md:justify-center items-center'>
            <div className='w-4/5 h-full flex justify-between items-center'>
                <StaticImage
                    className='w-[112px] h-[15px] md:w-[165px] md:h-[20px]'
                    src='../Images/Damac.png'
                    alt='DAMAC Logo'
                    
                />
                <button className='hidden md:block w-[184px] h-12 text-[13px] font-bold uppercase text-[#17ABFF] rounded-[5px] border-2 border-[#17ABFF]'>enquire now</button>
                <svg 
                    className='md:hidden translate-x-10'
                    width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="0.0974426" width="21" height="2" rx="1" fill="white"/>
                    <rect x="3" y="5.09744" width="21" height="2" rx="1" fill="white"/>
                    <rect x="3" y="10.0974" width="21" height="2" rx="1" fill="white"/>
                </svg>
            </div>
        </nav>
    )
}
