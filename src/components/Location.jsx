import React from 'react'
import arrow from '../Images/icons/rightArrow.svg'
import plane from '../Images/icons/Plane_icon.svg'
import tower from '../Images/icons/tower.svg'
import marine from '../Images/icons/Marina.svg'

export default function Location() {
    return (
        <section className='w-full h-[1300px] md:h-[850px] pt-5 md;pt-0 flex flex-col justify-between md:justify-evenly items-center md:-translate-y-20 pb-8 '>
            <div className='w-[90%] md:w-3/5 h-[18%] flex flex-col justify-evenly items-center '>
                <h4 className='font-["Oswald"] text-[#004572] text-4xl font-medium uppercase  '>location</h4>
                <p className='text-base leading-[24px] text-[#343434] text-center '>Strategically located between Port Rashid and Dubai’s Drydocks World, Dubai Maritime City capitalises on its strengths, bringing together the entire maritime industry and offering residents a dynamic, urban lifestyle. KNOW MORE</p>
            </div>
            <div className='w-[90%] md:w-4/5 h-1/5 md:h-[52%] rounded-[14px]'>
                <iframe 
                    className='w-full h-full rounded-[14px]'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.958973153104!2d55.266061074156525!3d25.271965528670545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43142458cfa5%3A0xb76489680228dc08!2sDamac%20Harbour%20Lights!5e0!3m2!1sen!2seg!4v1720588007443!5m2!1sen!2seg" 
                    width="600" 
                    height="450" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="video"
                    ></iframe>
            </div>
            <div className='w-[90%] md:w-4/5 h-[55%] md:h-1/4 lg:h-1/5 p-3 rounded-[14px] bg-[#00357B] flex flex-col md:flex-row justify-evenly items-center'>
                <div className='w-[88%] md:w-[24%] h-[23%] md:h-full'>
                    <h4 className='uppercase inline text-[29px] font-medium text-[#FCFCFC]'>Famous Landmarks Nearby</h4>
                    <img 
                        className='inline mb-3 ml-3 rotate-90 md:rotate-0 '
                        src={arrow} 
                        alt='Arrow' 
                        width={30}
                        height={30}
                    />
                </div>
                <div className='w-[90%] md:w-[24%] h-[23%] md:h-full bg-[#5790BE]/20 rounded-[14px] flex flex-col justify-center items-center '>
                    <img 
                        src={plane} 
                        alt='Plane icon' 
                        width={39.5}
                        height={38}
                    />
                    <span className='text-sm text-[#FCFCFC] mt-2 '>To Dubail Airport</span>
                    <span className='font-["Oswald"] text-[23px] font-bold text-[#FCFCFC] tracking-wider'>25-Minutes</span>
                </div>
                <div className='w-[90%] md:w-[24%] h-[23%] md:h-full bg-[#5790BE]/20 rounded-[14px] flex flex-col justify-center items-center '>
                    <img 
                        src={tower} 
                        alt='Plane icon' 
                        width={39.5}
                        height={38}
                    />
                    <span className='text-sm text-[#FCFCFC] mt-2 '>To Downtown Dubai</span>
                    <span className='font-["Oswald"] text-[23px] font-bold text-[#FCFCFC] tracking-wider'>20-Minutes</span>
                </div>
                <div className='w-[90%] md:w-[24%] h-[23%] md:h-full  bg-[#5790BE]/20 rounded-[14px] flex flex-col justify-center items-center '>
                    <img 
                        src={marine} 
                        alt='Dubai Towers' 
                        width={39.5}
                        height={38}
                    />
                    <span className='text-sm text-[#FCFCFC] mt-2 '>To Dubai Marina</span>
                    <span className='font-["Oswald"] text-[23px] font-bold text-[#FCFCFC] tracking-wider'>28-Minutes</span>
                </div>
            </div>
        </section>
    )
}
