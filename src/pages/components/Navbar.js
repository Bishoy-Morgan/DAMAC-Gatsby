// import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='absolute z-50 top-0 left-0 w-full min-h-20 flex justify-center items-center'>
            <div className='w-4/5 h-full flex justify-between items-center'>
                <StaticImage 
                    src='../Images/Logo.png'
                    alt='DAMAC Logo'
                    layout='fixed'
                    width={165.84}
                    height={20.86}
                />
                <button className='w-[184px] h-12 text-[13px] font-bold uppercase text-[#17ABFF] rounded-[5px] border-2 border-[#17ABFF]'>enquire now</button>
            </div>
        </nav>
    )
}
