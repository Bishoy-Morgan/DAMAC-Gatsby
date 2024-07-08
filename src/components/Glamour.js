import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Glamour() {
    return (
        <section className='relative w-full h-[1300px]'>
            <StaticImage 
                className='absolute z-10 top-0 w-full h-full'
                src='../Images/Glamour1.png'
                alt='Glamour Damac'
                // width={1466}
                // height={1334}
            />
            <div className='absolute z-50 top-24 left-0 md:top-0 h-full md:py-5 w-full flex flex-col justify-evenly items-center'>
                <div className=' w-4/5 h-[530px] flex flex-col-reverse md:flex-row items-start '>
                    <div className='w-[90%] md:w-1/2 h-[490px] '>
                        <div className='relative w-4/5'>
                            <StaticImage 
                                src='../Images/Glamour2.png'
                                alt='image'
                                width={475}
                                height={475}
                            /><StaticImage
                                className='absolute -bottom-10 -right-12'
                                src='../Images/Glamour3.png'
                                alt='img'
                                width={220}
                                height={220}
                            />
                        </div>
                    </div>
                    <div className='w-[95%] border-2 md:w-1/2 h-[420px] md:px-8 flex flex-col justify-evenly items-start'>
                        <span className='text-lg font-normal text-[#17ABFF] '>DAMAC PRESENTS</span>
                        <h3 className='main-title text-4xl leading-[47px] text-[#FCFCFC]  '>Welcome to the Glamour of HARBOUR LIGHTS</h3>
                        <span className='text-base text-[#FCFCFC] leading-[24px] font-normal '>Here waves, wonder, and love for the sea converge in a stunning 52-storey collection of waterfront apartments.</span>
                        <p className='text-base text-[#FCFCFC] leading-[24px] font-normal '>Harbour Lights, a beacon of luxury and maritime passion, is the epitome of a waterfront dream. Experience the magic of Harbour Lights, where the beauty of the sea merges with residential bliss, offering a lifestyle of tranquility in the heart of a bustling maritime hub.</p>
                        <div className='w-full flex justify-between items-end '>
                            <button className='bg-[#17ABFF] w-[47%] h-12 text-[#FCFCFC] uppercase font-bold text-[13px] tracking-[3%] rounded-[5px] '>REGISTER YOUR INTEREST</button>
                            <button className='bg-[#17ABFF] w-[47%] h-12 text-[#FCFCFC] uppercase font-bold text-[13px] tracking-[3%] rounded-[5px] '>PRICING & PAYMENT PLAN </button>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 h-32 -translate-y-12 flex justify-between items'>
                    <div className='w-1/5 h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-5xl text-[#FCFCFC] font-medium '>52</h3>
                        <span className='text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>Floors Building</span>
                        <div className='w-4/5 h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-1/5 h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-5xl text-[#FCFCFC] font-medium '>520</h3>
                        <span className='text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>APARTMENTS</span>
                        <div className='w-4/5 h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-1/5 h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-5xl text-[#FCFCFC] font-medium '>835</h3>
                        <span className='text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>PARKINGS</span>
                        <div className='w-4/5 h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-1/5 h-full flex flex-col justify-evenly items-start'>
                        <h3 className='main-title text-5xl text-[#FCFCFC] font-medium '>74-158 m<sup>2</sup></h3>
                        <span className='text-base tracking-[3%] font-normal uppercase text-[#FCFCFC]'>LIVING AREA</span>
                        <div className='w-4/5 h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div> 
                </div>
                <div className='w-3/5 h-[500px] rounded-[14px] border '>
                </div>
            </div>
        </section>
    )
}
