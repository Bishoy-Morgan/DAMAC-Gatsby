import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Request() {
    return (
        <section className='w-full h-[900px] lg:h-[550px] md:w-4/5 bg-[#FDFDFD] mx-auto lg:px-5 mt-10 lg:mt-0 md:-translate-y-40 flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-[90%] lg:w-[45%] h-1/2 lg:h-4/5 flex flex-col items-start '>
                <div className='w-full h-1/4 lg:h-1/5 flex flex-col justify-between md:justify-evenly '>
                    <h3 className='main-title text-[#00357B] text-4xl font-medium '>LEAVE A REQUEST</h3>
                    <span className='text-base font-normal text-[#343434] max-w-[274px]'>to get a unique offer from our consultant.</span>
                </div>
                <div className='w-full h-1/2 flex flex-col justify-evenly'>
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Full Name*'
                        type='text'
                    />
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Email*'
                        type='email'
                    />
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Phone number*'
                        type='number'
                    />
                </div>
                <div className='w-full h-[35%] flex flex-col justify-evenly '>
                    <button className='w-3/4 h-[54px] max-w-[301px] rounded-[8px] bg-[#00357B] text-lg text-[#FFFFFF] font-bold tracking-[3%] block  '>SUBMIT NOW</button>
                    <span className='italic text-[11px] md:text-[13px] leading-[20px] underline text-[#B2B2B2]  '>By Sumbmitting the data, you agree to the terms of the privacy policy and data return</span>
                </div>
            </div>
            <div className='relative w-[85%] lg:w-[45%] h-[45%] lg:h-4/5 lg:max-w-[500px]  '>
                <StaticImage
                    className='absolute -top-6 right-0' 
                    src='../Images/Frame.png'
                    alt='Frame'
                    width={84}
                />
                <StaticImage 
                    className='absolute top-5 -left-3 z-20'
                    src='../Images/Frame2.png'
                    alt='Frame'
                    width={303}
                />
                <StaticImage 
                    className='absolute top-0 left-0 w-full md:max-w-[350px] lg:max-w-[486px] lg:max-h-[493px] z-10 '
                    src='../Images/Salesman.png'
                    alt='Frame'
                    layout='fullWidth'
                />
            </div>
        </section>
    )
}
