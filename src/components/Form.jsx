import React, { useState } from 'react'
import close from '../Images/icons/close-btn.svg'

export default function Form( { closeForm } ) {
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
        <section className='fixed w-full h-screen z-50 backdrop-blur-[4px]'>
            <div className='w-2/5 bg-[#FEFEFE] h-3/4 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center  rounded-[14px] '>
                <button 
                    onClick={closeForm}
                >
                    <img
                        className='absolute top-3 right-3'
                        src={close} alt='close button' />
                </button>
                <div className='w-4/5 h-[10%] text-center'>
                    <h3 className='main-title text-[#00357B] text-4xl font-medium'>OFFICIAL SALE HAS STARTED</h3>
                </div>
                <div className='w-4/5 h-2/5 flex flex-col justify-evenly items-center my-3'>
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 outline-none placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Full Name*'
                        type='text'
                        required
                        value={userName.name}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 outline-none placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Email*'
                        type='email'
                        required
                        value={userName.name}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <input 
                        className='w-full h-[42px] md:h-[50px] rounded-[8px] bg-[#F4F4F4] px-4 outline-none placeholder:text-xs md:placeholder:text-sm placeholder:text-[#8F8F8F]  '
                        placeholder='Phone number*'
                        type='number'
                        required
                        value={userName.name}
                        onChange={(e) => setUserPhone(e.target.value)}
                    />
                </div>
                <div className='w-4/5 h-1/4 flex flex-col justify-between items-center '>
                    <button 
                        className='w-3/4 h-[54px] max-w-[301px] rounded-[8px] bg-[#00357B] text-lg text-[#FFFFFF] font-bold tracking-wide block  '
                        onClick={(e) => handleSubmit(e)}
                    >SUBMIT NOW</button>
                    
                    <span className='italic text-[11px] md:text-[13px] leading-[20px] underline text-[#B2B2B2] text-center '>By Sumbmitting the data, you agree to the terms of the privacy policy and data return</span>
                </div>
            </div>
        </section>
    )
}
