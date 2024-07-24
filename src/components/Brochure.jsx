import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Brochure() {
    return (
        <section className='w-full max-w-[1920px] h-[650px] md:w-4/5 lg:h-[400px] md:rounded-[14px] bg-[#00357B] mx-auto md:-translate-y-20 2xl:-translate-y-32 flex flex-col lg:flex-row items-center '>
            <div className='w-[90%] h-2/3 md:h-[55%] lg:w-1/2 lg:h-[90%] flex flex-col justify-start pt-5 md:px-10'>
                <span className='text-[#17ABFF] md:text-[18px] font-medium '>IN A NUTSHELL</span>
                <h4 className='font-["Oswald"] text-[#FCFCFC] text-[31px] md:text-4xl font-medium mt-1'>DOWNLOAD BROCHURE</h4>
                <p className='text-[#FCFCFC] leading-[24px] mt-4 mb-7 max-w-[440px]'>Harbour Lights de GRISOGONO Geneve is a residential tower in the heart of Dubai Maritime City. Future residents can choose from a number of 1–3 bedroom branded residences. Certain premises come with a private swimming pool, letting you enjoy resort-like living without the need to leave home</p>
                <a 
                    className='w-4/5 md:w-3/5 h-12 '
                    href='/sample.pdf' 
                    download
                >
                    <button className='w-full h-12 text-[13px] font-bold text-[#FCFCFC] bg-[#17ABFF] rounded-[5px] '>DOWNLOAD FREE PDF BROCHURE</button>
                </a>
            </div>
            <div className='w-full h-1/3 md:h-[45%] lg:w-1/2 lg:h-full rounded-[14px] overflow-hidden '>
                <StaticImage
                    className='w-full h-full max-w-[550px] max-h-[320px] xl:max-w-none xl:max-h-none '
                    src='../Images/brochure.png'
                    alt='brochure'
                    layout='constrained'
                    width={520}
                    height={325}
                />
            </div>
        </section>
    )
}
