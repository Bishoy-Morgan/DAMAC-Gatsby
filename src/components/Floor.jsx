import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Floor() {
    return (
        <section className='floorPlan w-full h-screen -mt-20 md:mt-0 md:pt-5 '>
            <div className='w-[90%] md:w-4/5 h-full mx-auto flex flex-col justify-start items-center '>
                <div className='w-full md:w-[90%] h-1/5 flex flex-col justify-between items-center '>
                    <h3 className='main-title uppercase text-4xl font-medium text-[#00357B] text-center '>Floor Plans of ALL UNITS</h3>
                    <div className='w-full h-2/5 border-[#00357B] md:border-b-[.7px]'>
                        <button className='block md:hidden mx-auto bg-[#00357B] rounded-[5px] w-3/5 h-12 text-[#FCFCFC] text-[13px] font-bold  '>Choose a Bedroom
                            <svg className='inline-block ml-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.07461 1.16879L5.57865 5.54914C5.24701 5.94976 4.73583 5.94976 4.4179 5.54914L0.921936 1.16879C0.590293 0.754017 0.756114 0.436523 1.26729 0.436523H8.72926C9.25459 0.436523 9.40626 0.754459 9.07461 1.16879Z" fill="#FCFCFC"/>
                            </svg>
                        </button>
                        <ul className='max-sm:hidden text-[20px] font-bold text-[#00357B] flex justify-evenly items-center  '>
                            <li>1-Bedroom</li>
                            <li>2-Bedroom Luxury</li>
                            <li>2-Bedroom</li>
                            <li>3-Bedroom Luxury</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-4/5 md:w-[80%] md:h-2/4 md:mt-10 flex flex-col-reverse md:flex-row justify-between items-center'>
                    <StaticImage
                        className='w-full md:w-[45%]'
                        src='../Images/unit.png'
                        alt='plan floor unit'
                    />
                    <div className='w-full md:w-1/2 h-[65%] md:h-[95%] flex flex-col justify-evenly items-start '>
                        <h4 className='text-[20px]  md:text-[29px] font-medium text-[#353535]'>2-BEDROOM APARTMENT</h4>
                        <span className='text-[#353535] text-[14px] md:text-base font-medium  '>Type : 1</span>
                        <span className='block text-sm text-[#343434] leading-[20px] font-normal  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum</span>
                        <div className='dash w-full h-10 flex justify-between items-center border-b-[.4px] border-[#5D5C5C] border-dashed  '>
                            <span className='text-[#343434] text-base font-normal uppercase'>SPACE : <span className='text-[#0C0C0C] text-[15px] md:text-[17px] font-semibold '>72.50 M2</span></span>
                            <span className='text-[#343434] text-base font-normal uppercase'>PRICE : <span className='text-[#0C0C0C] text-[15px] md:text-[17px] font-semibold '>$83,500</span></span>
                        </div>
                        <div className='md:hidden w-full min-h-24 flex'>
                            <div className='w-1/2 h-full flex flex-col justify-evenly items-start border-r-[.4px] border-[#5D5C5C] border-dashed'>
                                <span className=' text-xs font-normal '>Living Area : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs font-normal '>Kitchen : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs font-normal '>Living Area : 72.50 M<sup>2</sup></span>
                            </div>
                            <div className='w-1/2 h-full flex flex-col justify-evenly items-end'>
                                <span className=' text-xs font-normal '>Bathroom : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs font-normal '>Bathroom : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs font-normal '>Balcony : 72.50 M<sup>2</sup></span>
                            </div>
                        </div>
                        <div className='w-full h-32 md:h-12 mt-5 flex flex-col md:flex-row justify-evenly md:justify-between items-center md:items-end'>
                            <button className='w-3/5 md:w-[48%] h-12 font-bold text-[#FFFFFF] bg-[#00358B] tracking-[3%] text-[13px] rounded-[5px] border-[#00357B] '>GET ALL FLOOR PLANS</button>
                            <button className='w-3/5 md:w-[48%] h-12 font-bold text-[#00357B] tracking-[8%] text-[13px] rounded-[5px] border-[#00357B] border '>LEAVE A REQUEST</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
