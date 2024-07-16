import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Brochure() {
    return (
        <section className='w-full h-[650px] md:w-4/5 md:max-h-[900px] lg:h-[420px] md:rounded-[14px] bg-[#00357B] mx-auto md:-translate-y-20 flex flex-col lg:flex-row justify-center items-center '>
            <div className='w-[90%] h-2/3 md:h-[55%] lg:w-1/2 lg:h-[90%] flex flex-col justify-evenly items-start pt-8 md:p-8'>
                <span className='uppercase text-[#17ABFF] text-base md:text-[18px] font-medium '>IN A NUTSHELL</span>
                <h4 className='main-title uppercase text-[#FCFCFC] text-[31px] md:text-4xl font-medium '>Download Brochure</h4>
                <p className='text-base font-normal text-[#FCFCFC] leading-[24px] my-5'>Harbour Lights de GRISOGONO Geneve is a residential tower in the heart of Dubai Maritime City. Future residents can choose from a number of 1–3 bedroom branded residences. Certain premises come with a private swimming pool, letting you enjoy resort-like living without the need to leave home</p>
                <a 
                    className='w-4/5 md:w-3/5 h-12 '
                    href='/sample.pdf' 
                    download
                >
                    <button className='w-full h-12 uppercase text-[13px] font-bold text-[#FCFCFC] bg-[#17ABFF] rounded-[5px] '>DOWNLOAD FREE PDF BROCHURE</button>
                </a>
            </div>
            <div className='w-full h-1/3 md:h-[45%] lg:w-1/2 lg:h-full rounded-[14px] overflow-hidden '>
                <StaticImage
                    className='w-full h-full max-w-[550px] max-h-[320px] xl:max-w-none xl:max-h-none xl:translate-y-5 '
                    src='../Images/brochure.png'
                    alt='brochure'
                    layout='fullWidth'
                />
            </div>
        </section>
    )
}
