import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'

export default function Request() {
    const [userName, setUserName] = useState({name: ''})
    const [userEmail, setUserEmail] = useState({email: ''})
    const [userPhone, setUserPhone] = useState({phone: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        if( userName.name === '' || userEmail.email === '' || userPhone.phone === '' )
            return( alert('You must fill up all the form') )
        else
            setUserName(...userName)
            setUserName(...userName)
            setUserName(...userName)
        setTimeout(() => {
            window.location='/successSubmit'
        }, 1000)
    }
    return (
        <section className='w-full h-[800px] lg:h-[550px] md:w-4/5 bg-[#FDFDFD] mx-auto lg:px-5 mt-10 lg:mt-0 md:-translate-y-40 flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-[90%] lg:w-[45%] h-1/2 lg:h-4/5 flex flex-col items-start '>
                <div className='w-full h-1/4 lg:h-1/5 flex flex-col justify-between md:justify-evenly '>
                    <h3 className='font-["Oswald"] text-[#00357B] text-4xl font-medium '>LEAVE A REQUEST</h3>
                    <span className='text-base font-normal text-[#343434] max-w-[274px]'>to get a unique offer from our consultant.</span>
                </div>
                <div className='w-full h-1/2 flex flex-col justify-evenly'>
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Full Name*'
                        type='text'
                        required
                        value={userName.name}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Email*'
                        type='email'
                        required
                        value={userEmail.email}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Phone number*'
                        type='number'
                        required
                        value={userPhone.phone}
                        onChange={(e) => setUserPhone(e.target.value)}
                    />
                </div>
                <div className='w-full h-[35%] flex flex-col justify-evenly '>
                    <button 
                        className='w-3/4 h-[54px] max-w-[301px] rounded-[8px] bg-[#00357B] text-lg text-[#FFFFFF] font-bold tracking-wide block '
                        onClick={(e) => handleSubmit(e)}
                    >SUBMIT NOW</button>
                    <span className='italic text-[11px] md:text-[13px] leading-[20px] underline text-[#B2B2B2]  '>By Sumbmitting the data, you agree to the terms of the privacy policy and data return</span>
                </div>
            </div>
            <div className='w-[85%] lg:w-[50%] h-[40%] lg:h-full lg:max-w-[510px] flex justify-center'>
                <StaticImage
                    className='w-[300px] h-[300px] lg:w-[500px] lg:h-[515px] ' 
                    src='../Images/SalesmanCo.png'
                    alt='Frame'
                />
                {/* <StaticImage
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
                    alt='Sales man'
                    layout='fullWidth'
                /> */}
            </div>
        </section>
    )
}
