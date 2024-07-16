import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import submitRight from '../Images/icons/Submit-Right.svg'
import leftLongArrow from '../Images/icons/Group 215.svg'
import Footer from '../components/Footer'

export default function SubmitPage() {
    return (
        <>
            <section className='relative w-full h-screen flex flex-col justify-center items-center'>
                <div className='absolute top-0 w-4/5 mx-auto h-[10%] flex items-center'>
                    <StaticImage
                        className='w-[165px] h-[21px] ' 
                        src='../Images/Logo (1).png'
                        alt='Damac Logo'
                    />
                </div>
                <StaticImage
                    className='absolute top-0 right-0 z-40  '
                    src='../Images/Submitpage.png'
                    alt='Gray feature'
                    width={350}
                    height={370}
                    
                />
                <StaticImage
                    className='absolute -bottom-0 left-0  '
                    src='../Images/Submitpage1.png'
                    alt='Gray feacture'
                    width={220}
                    height={435}
                />
                <div className='w-[45%] h-3/5 flex flex-col justify-evenly items-center'>
                    <img src={submitRight} alt='Submit Right' />
                    <h4 className='main-title text-4xl text-[#343434] font-light '>Thank you for showing interest into our property</h4>
                    <span className='text-base font-normal text-[#343434] text-center w-4/5'>Please check your email for updated Brochure, pricing and Payment plan. Our representative will call you back to present more details and similar properties.</span>
                    <button 
                        className='w-1/4 h-12 bg-[#00357B] text-[#FFFFFF] tracking-[3%] text-[13px] font-bold rounded-[5px] flex justify-center items-center '
                        onClick={() => window.location='/'} 
                    >
                        <img 
                            className='mr-3'
                            src={leftLongArrow}/>
                    Go Home</button>
                </div>
            </section>
            <Footer />
        </>
    )
}
