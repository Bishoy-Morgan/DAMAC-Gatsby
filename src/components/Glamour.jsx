import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Glamour() {
    return (
        <section className='relative w-full h-[1500px] md:h-[1300px]'>
            <StaticImage 
                className='absolute z-10 top-0 w-full h-full'
                src='../Images/Glamour1.png'
                alt='Glamour Damac'
                // layout='fullWidth'
            />
            <div className='absolute z-50 top-0 left-0 h-full md:py-5 w-full flex flex-col justify-evenly items-center'>
                <div className='w-full md:w-4/5 h-[58%] md:h-[530px] flex flex-col-reverse md:flex-row justify-evenly items-center md:items-start '>
                    <div className='w-[90%] md:w-1/2 h-[490px]'>
                        <div className='relative w-[90%] md:w-4/5 '>
                            <StaticImage 
                                src='../Images/Glamour2.png'
                                alt='image'
                                width={475}
                                height={475}
                            /><StaticImage
                                className='absolute w-[170px] h-[170px] md:w-[220px] md:h-[220px] -bottom-10 -right-5 md:-bottom-10 md:-right-12'
                                src='../Images/Glamour3.png'
                                alt='img'
                            />
                        </div>
                    </div>
                    <div className='w-[90%] md:w-1/2 min-h-[600px] md:min-h-[450px] md:px-8 flex flex-col justify-evenly items-start'>
                        <span className='text-base md:text-lg font-normal text-[#17ABFF] '>DAMAC PRESENTS</span>
                        <h3 className='main-title text-[31px] md:text-4xl leading-[47px] text-[#FCFCFC]  '>Welcome to the Glamour of HARBOUR LIGHTS</h3>
                        <span className='text-base text-[#FCFCFC] leading-[24px] font-normal '>Here waves, wonder, and love for the sea converge in a stunning 52-storey collection of waterfront apartments.</span>
                        <p className='text-base text-[#FCFCFC] leading-[24px] font-normal '>Harbour Lights, a beacon of luxury and maritime passion, is the epitome of a waterfront dream. Experience the magic of Harbour Lights, where the beauty of the sea merges with residential bliss, offering a lifestyle of tranquility in the heart of a bustling maritime hub.</p>
                        <div className='w-full min-h-36 md:min-h-16 flex flex-col items-start justify-evenly md:flex-row md:justify-between md:items-end '>
                            <button className='bg-[#17ABFF] w-4/5 md:w-[47%] h-12 text-[#FCFCFC] uppercase font-bold text-[13px] tracking-[3%] rounded-[5px] '>REGISTER YOUR INTEREST</button>
                            <button className='bg-[#17ABFF] w-4/5 md:w-[47%] h-12 text-[#FCFCFC] uppercase font-bold text-[13px] tracking-[3%] rounded-[5px] '>PRICING & PAYMENT PLAN </button>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] md:w-4/5 md:h-32 md:-translate-y-12 grid grid-cols-2 grid-rows-2 gap-5 md:flex justify-between '>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>52</h3>
                        <span className='text-sm md:text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>Floors Building</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>520</h3>
                        <span className='text-sm md:text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>APARTMENTS</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>835</h3>
                        <span className='text-sm md:text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>PARKINGS</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>74-158 m<sup>2</sup></h3>
                        <span className='text-sm md:text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>LIVING AREA</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div> 
                </div>
                <div className='w-[90%] h-[250px] md:w-3/5 md:h-[500px] rounded-[14px] '>
                    <iframe  className='w-full h-full rounded-[14px]' src="https://www.youtube.com/embed/YsMrvWgK6V4?autoplay=1&mute=1" title="Dubai - The Most Luxurious City In The World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}
