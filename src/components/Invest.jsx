import React from 'react'
import victor1 from '../Images/icons/Invest/Vector1.svg'
import victor2 from '../Images/icons/Invest/Vector2.svg'
import victor3 from '../Images/icons/Invest/Vector3.svg'
import victor4 from '../Images/icons/Invest/Vector4.svg'
import victorA from '../Images/icons/Invest/VectorA.svg'
import victorB from '../Images/icons/Invest/VectorB.svg'
import victorC from '../Images/icons/Invest/VectorC.svg'
import victorD from '../Images/icons/Invest/VectorD.svg'

export default function Invest() {
    return (
        <section className='w-full h-[850px] lg:h-[650px] bg-[#F1F7FD] flex justify-center items-start md:-translate-y-16'>
            <div className='w-4/5 h-full lg:h-4/5 flex flex-col justify-evenly items-center  '>
                <h3 className='main-title text-4xl text-[#00357B] font-medium uppercase '>Why Invest in dubai</h3>
                <div className='w-full h-3/4 lg:h-3/5'>
                    <div className='w-full h-1/2 grid grid-cols-2 lg:flex justify-evenly items-center '>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <img src={victor1} alt='' />
                            <span className='text-[#343434] font-medium text-sm lg:text-base '>Residence Visa</span>
                        </div>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <img src={victor2} alt='' />
                            <span className='text-[#343434] font-medium text-sm lg:text-base '>World-class Education</span>
                        </div>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <img src={victor3} alt='' />
                            <span className='text-[#343434] font-medium text-sm lg:text-base text-center'>Stable Economy & Currency</span>
                        </div>
                        <div className='w-full h-full lg:w-[21%] lg:h-full flex flex-col justify-evenly items-center'>
                            <img src={victor4} alt='' />
                            <span className='text-[#343434] font-medium text-sm lg:text-base text-center'>Sustained  Economic Growth</span>
                        </div>
                    </div>
                    <div className='w-full h-1/2 grid grid-cols-2 lg:flex justify-evenly'>
                        <div className='w-full px-3 md:px-0 lg:w-[21%] h-full flex flex-col justify-start items-center'>
                            <img
                                className='my-5'
                                src={victorA} alt='' />
                            <span className='text-[#343434] font-medium text-base text-center'>Ease of Doing Business</span>
                        </div>
                        <div className='w-full px-3 md:px-0 lg:w-[21%] h-full flex flex-col justify-start items-center'>
                            <img
                                className='my-5'
                                src={victorB} alt='' />
                            <span className='text-[#343434] font-medium text-base text-center'>0% Tax on Residential Real Estate</span>
                        </div>
                        <div className='w-full px-3 md:px-0 lg:w-[21.5%] h-full flex flex-col justify-start items-center'>
                            <img
                                className='my-5'
                                src={victorC} alt='' />
                            <span className='text-[#343434] font-medium text-base text-center'>Readily Available  Financing Options</span>
                        </div>
                        <div className='w-full px-3 md:px-0 lg:w-[21%] h-full flex flex-col justify-start items-center'>
                            <img
                                className='my-5'
                                src={victorD} alt='' />
                            <span className='text-[#343434] font-medium text-base text-center'>High Rental  Returns compared to Major World Cities</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[8%] lg:h-[15%] flex justify-center items-end '>
                    <button className='w-4/5 max-w-[320px ] lg:w-1/4 h-12 bg-[#00357B] rounded-[5px] text-[13px] tracking-[3%] font-bold text-[#FFFFFF]   '>LOOKING FOR INVESTMENT ?</button>
                </div>
            </div>
        </section>
    )
}
