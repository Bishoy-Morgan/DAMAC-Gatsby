import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Brochure() {
    return (
        <section className='w-full h-3/4 md:w-4/5 md:h-[420px] md:rounded-[14px] bg-[#00357B] mx-auto translate-y-0 md:-translate-y-20 flex flex-col md:flex-row justify-center items-center '>
            <div className='w-[90%] h-3/5 md:w-1/2 md:h-[90%] flex flex-col justify-around items-start pt-8 md:p-8'>
                <span className='uppercase text-[#17ABFF] text-base md:text-[18px] font-medium '>IN A NUTSHELL</span>
                <h4 className='main-title uppercase text-[#FCFCFC] text-[31px] md:text-4xl font-medium '>Download Brochure</h4>
                <p className='text-base font-normal text-[#FCFCFC] leading-[24px] my-5'>Harbour Lights de GRISOGONO Geneve is a residential tower in the heart of Dubai Maritime City. Future residents can choose from a number of 1–3 bedroom branded residences. Certain premises come with a private swimming pool, letting you enjoy resort-like living without the need to leave home</p>
                <button className='uppercase text-[13px] font-bold text-[#FCFCFC] bg-[#17ABFF] w-4/5 md:w-3/5 h-12 rounded-[5px] '>DOWNLOAD FREE PDF BROCHURE</button>
            </div>
            <div className='w-full h-2/5 md:w-1/2 md:h-full '>
                <StaticImage
                    className='w-full h-full md:scale-105 md:translate-y-5'
                    src='../Images/brochure.png'
                    alt='brochure'
                    // layout='fullWidth'
                />
            </div>
        </section>
    )
}
