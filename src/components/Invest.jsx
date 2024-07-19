import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Invest( { formOpen }) {
    return (
        <section className='w-full h-[850px] lg:h-[650px] bg-[#F1F7FD] flex justify-center items-start md:-translate-y-16'>
            <div className='w-4/5 h-full lg:h-4/5 flex flex-col justify-evenly items-center  '>
                <h3 className='font-["Oswald"] text-4xl text-[#00357B] font-medium uppercase '>Why Invest in dubai</h3>
                <div className='w-full h-3/4 lg:h-3/5'>
                    <div className='w-full h-1/2 grid grid-cols-2 lg:flex justify-evenly  text-[rgb(52,52,52)]'>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <StaticImage
                                width={46}
                                height={46}
                                src='../Images/Invest/Vector1.png' 
                                alt='Invest Feature' 
                            />
                            <span className='font-medium text-sm lg:text-base'>Residence Visa</span>
                        </div>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <StaticImage
                                width={41}
                                height={48}
                                src='../Images/Invest/Vector2.png'
                                alt='Invest Feature' 
                            />
                            <span className=' font-medium text-sm lg:text-base '>World-class Education</span>
                        </div>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <StaticImage
                                width={52}
                                height={47}
                                src='../Images/Invest/Vector3.png' 
                                alt='Invest Feature' 
                            />
                            <span className='font-medium text-sm lg:text-base text-center'>Stable Economy & Currency</span>
                        </div>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <StaticImage
                                width={45}
                                height={49}
                                src='../Images/Invest/Vector4.png' 
                                alt='Invest Feature' 
                            />
                            <span className='font-medium text-sm lg:text-base text-center'>Sustained  Economic Growth</span>
                        </div>
                    </div>
                    <div className='w-full h-1/2 grid grid-cols-2 lg:flex justify-evenly'>
                        <div className='w-full px-3 md:px-0 lg:w-[21%] h-full flex flex-col justify-start items-center'>
                            <StaticImage
                                width={46}
                                height={50}
                                className='my-5'
                                src='../Images/Invest/VectorA.png'
                                alt='Invest Feature'
                            />
                            <span className='font-medium text-center'>Ease of Doing Business</span>
                        </div>
                        <div className='w-full px-3 md:px-0 lg:w-[21%] h-full flex flex-col justify-start items-center'>
                            <StaticImage
                                width={53}
                                height={50}
                                className='my-5'
                                src='../Images/Invest/VectorB.png' 
                                alt='Invest Feature'
                            />
                            <span className='font-medium text-center'>0% Tax on Residential Real Estate</span>
                        </div>
                        <div className='w-full px-3 md:px-0 lg:w-[21.5%] h-full flex flex-col justify-start items-center text-[#343434]'>
                            <StaticImage
                                width={51}
                                height={50}
                                className='my-5 '
                                src='../Images/Invest/VectorC.png' 
                                alt='Invest Feature'
                            />
                            <span className='font-medium text-center'>Readily Available  Financing Options</span>
                        </div>
                        <div className='w-full px-3 md:px-0 lg:w-[21%] h-full flex flex-col justify-start items-center '>
                            <StaticImage
                                width={50}
                                height={50}
                                className='my-5 '
                                src='../Images/Invest/VectorD.png'
                                alt='Invest Feature'
                            />
                            <span className='font-medium text-center'>High Rental  Returns compared to Major World Cities</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[8%] lg:h-[15%] flex justify-center items-end '>
                    <button 
                        className='w-4/5 max-w-[320px ] lg:w-1/4 h-12 bg-[#00357B] rounded-[5px] text-[13px] tracking-wide font-bold text-[#FFFFFF]   '
                        onClick={formOpen}
                    >LOOKING FOR INVESTMENT ?</button>
                </div>
            </div>
        </section>
    )
}
