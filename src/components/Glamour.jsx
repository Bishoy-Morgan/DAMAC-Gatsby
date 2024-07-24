import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import damacVedio from '../Images/DAMAC - Google Chrome 2024-06-20 11-32-50.mp4'

export default function Glamour( { formOpen } ) {
    return (
        <section className='relative w-full h-[1400px] max-h-[1401px] md:h-[1100px] lg:h-[1250px] 2xl:h-[1350px]'>
            <StaticImage 
                className='absolute z-10 top-0 w-full h-full'
                src='../Images/Glamour1.png'
                alt='Glamour Damac'
                layout='constrained'
                width={1470}
                height={1400}
                quality={100}
            />
            <div className='absolute max-w-[1920px] z-40 top-0 left-1/2 -translate-x-1/2 h-full py-5 w-full flex flex-col justify-evenly items-center'>
                <div className='w-full md:w-4/5 h-[70%] md:h-1/2 lg:h-2/5 flex flex-col-reverse md:flex-row items-center md:items-start '>
                    <div className='w-[90%] md:w-1/2 h-[45%] lg:h-full '>
                        <div className='w-[90%] lg:h-[90%] md:w-4/5 '>
                            <div className='hidden lg:block'>
                                <StaticImage
                                    src='../Images/Glamour.png'
                                    alt='Damac building'
                                    width={530}
                                    height={530}
                                />
                            </div>
                            <div className='block lg:hidden'>
                                <StaticImage
                                    src='../Images/GlamourMobile.png'
                                    alt='Damac building'
                                    width={400}
                                    height={400}
                                />
                            </div>
                            {/* <div className='absolute top-0 left-0 w-full h-full'>
                                <StaticImage
                                className='hidden lg:block'
                                    src='../Images/Glamour2.png'
                                    alt='Damac building'
                                    width={475}
                                    height={475}
                                />
                                <StaticImage
                                    className='block lg:hidden max-w-[400px]'
                                    src='../Images/Glamour4.png'
                                    alt='Damac building'
                                    width={475}
                                    height={475}
                                />
                                <StaticImage
                                    className='absolute w-[170px] h-[170px] md:max-w-[130px] md:max-h-[130px] lg:max-w-[220px] lg:max-h-[220px] -bottom-10 -right-5 md:-bottom-10 md:-right-12'
                                    src='../Images/Glamour3.png'
                                    alt='Damac building'
                                />
                            </div> */}
                        </div>
                    </div>
                    <div className='w-[90%] md:w-1/2 h-[55%] md:min-h-[450px] md:max-h-[500px] md:overflow-scroll lg:overflow-hidden lg:h-4/5 md:px-8 flex flex-col justify-evenly '>
                        <span className='text-base md:text-lg font-medium text-[#17ABFF] '>DAMAC PRESENTS</span>
                        <h3 className='font-["Oswald"] text-[31px] md:text-4xl font-medium leading-[47px] uppercase text-[#FCFCFC]  '>Welcome to the Glamour of HARBOUR LIGHTS</h3>
                        <span className='text-[#FCFCFC] leading-[24px]  '>Here waves, wonder, and love for the sea converge in a stunning 52-storey collection of waterfront apartments.</span>
                        <p className=' text-[#FCFCFC] leading-[24px]  '>Harbour Lights, a beacon of luxury and maritime passion, is the epitome of a waterfront dream. Experience the magic of Harbour Lights, where the beauty of the sea merges with residential bliss, offering a lifestyle of tranquility in the heart of a bustling maritime hub.</p>
                        <div className='w-full min-h-36 md:min-h-16 flex flex-col justify-evenly md:flex-row md:justify-between md:items-end '>
                            <button 
                                className='bg-[#17ABFF] w-4/5 md:w-[47%] h-12 text-[#FCFCFC] uppercase font-bold text-[13px] tracking-wide rounded-[5px] '
                                onClick={formOpen}
                            >REGISTER YOUR INTEREST</button>
                            <a
                                className='w-4/5 md:w-[47%] h-12'
                                href='/sample.pdf' 
                                download
                            >
                                <button className='bg-[#17ABFF] w-full h-12 text-[#FCFCFC] uppercase font-bold text-[13px] tracking-wide rounded-[5px] '>PRICING & PAYMENT PLAN </button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className='w-[90%] h-[13%] -translate-y-10 xl:-translate-y-10 2xl:translate-y-0 md:w-4/5 grid grid-cols-2 grid-rows-2 gap-5 md:flex justify-between '>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly '>
                        <h3 className='font-["Oswald"] text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>52</h3>
                        <span className='text-sm md:text-base tracking-wide  uppercase text-[#FCFCFC]'>Floors Building</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly '>
                        <h3 className='font-["Oswald"] text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>520</h3>
                        <span className='text-sm md:text-base tracking-wide  uppercase text-[#FCFCFC]'>APARTMENTS</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-auto md:w-1/5 md:h-full flex flex-col justify-evenly '>
                        <h3 className='font-["Oswald"] text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>835</h3>
                        <span className='text-sm md:text-base tracking-wide  uppercase text-[#FCFCFC]'>PARKINGS</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div>
                    <div className='w-auto xl:w-1/5 md:h-full flex flex-col justify-evenly '>
                        <h3 className='font-["Oswald"] text-[35px] md:text-5xl text-[#FCFCFC] font-medium '>74-158 m<sup>2</sup></h3>
                        <span className='text-sm md:text-base tracking-wide  uppercase text-[#FCFCFC]'>LIVING AREA</span>
                        <div className='w-[90%] md:w-4/5 h-[6px] md:h-[8px] rounded-full bg-[#D9D9D926] '></div>
                    </div> 
                </div>
                <div className='w-[90%] h-[225px] md:w-[65%] md:h-1/4 lg:h-[475px] rounded-[14px] overflow-hidden'>
                    <video className='w-full h-full rounded-[14px]' controls >
                        <source src={damacVedio} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}
