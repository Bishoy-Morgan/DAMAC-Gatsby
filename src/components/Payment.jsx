import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Payment( { formOpen } ) {
    return (
      <section className='w-full h-screen flex justify-center items-center '>
        <div className='payment mx-auto w-[90%] md:w-4/5 h-[90%] rounded-[14px] pl-8 flex justify-between items-center lg:items-end'>
          <div className='w-[90%] lg:w-[55%] h-full px-2 md:px-0 flex flex-col justify-evenly'>
            <h4 className='main-title font-medium text-[31px] md:text-4xl text-[#FCFCFC] md:pl-5 uppercase '>payment plan</h4>
            <div className='w-full h-[65%] bg-[#5790BE]/30 md:bg-transparent border rounded-[14px]'>
              <div className='w-full h-[70%] md:h-[55%] flex flex-col md:flex-row'>
                <div className='w-full h-2/5 md:w-1/2 md:h-full border-b md:border-b-0 md:border-r pl-5 py-1 md:py-5'>
                  <h5 className='main-title text-[35px] md:text-[42px] font-medium tracking-wide text-[#FCFCFC] '>80%</h5>
                  <span className='text-[16px] md:text-[20px] font-semibold leading-[25px] tracking-wide text-[#FCFCFC]'>During the<br/>construction period</span>  
                </div>
                <div className='w-full h-3/5 md:w-1/2 md:h-full p-5 '>
                  <div className='w-full h-full flex flex-col '>
                    <div className='w-full h-1/3 flex justify-start'>
                      <div className='w-[9.7px] h-[10px] md:w-[11px] md:h-[11px] rounded-full bg-[#FFFFFF] mt-1 mr-3'></div>
                      <span className='w-3/4 text-[#FFFFFF] text-[16px] md:text-[17px] font-semibold leading-[22px] '>20% + 4% DLD* when booking</span>
                    </div>
                    <div className='w-full h-1/3 flex justify-start'>
                      <div className='w-[9.7px] h-[10px] md:w-[11px] md:h-[11px] rounded-full bg-[#FFFFFF] mt-4 mr-3'></div>
                      <span className='w-3/4 text-[#FFFFFF] text-[16px] md:text-[17px] font-semibold leading-[22px] mt-3'>10% after 9 months</span>
                    </div>
                    <div className='w-full h-2/5 flex justify-start '>
                      <div className='w-[9.7px] h-[10px] md:w-[11px] md:h-[11px] rounded-full bg-[#FFFFFF] mt-3 mr-3'></div>
                      <span className='w-3/4 text-[#FFFFFF] text-[16px] md:text-[17px] font-semibold leading-[22px] mt-2 '>5 payments of 10% every 6 months</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full h-[30%] md:h-2/5 border-t pl-5 py-3'>
                <h5 className='main-title text-[35px] md:text-[42px] font-medium tracking-wide text-[#FCFCFC]'>20%</h5>
                <span className='text-[16px] md:text-[20px] font-semibold leading-[25px] tracking-wide text-[#FCFCFC] '>After<br/>completion</span>
              </div>
            </div>
            <div className='w-full h-[15%] md:h-[12%] flex flex-col lg:flex-row justify-between md:items-start '>
              <span className='text-[#E0E0E0] text-[13px] pl-1 md:pl-5'>*DLD - Dubai Land Department <br/>4% - registration fee</span>
              <button 
                className='text-[#FFFFFF] bg-[#17ABFF] font-bold text-[13px] rounded-[5px] uppercase w-[90%] md:w-[248px] h-12 mx-auto md:mx-0'
                onClick={formOpen}
              >GET DETAILED CALCULATION</button>
            
            </div>
          </div>
          <div className='hidden lg:block lg:w-[45%] lg:h-4/5 '>
            <StaticImage
              className='lg:h-full lg:w-full rounded-br-[14px] '
              src='../Images/payment.png'
              alt='Visa Card'
              width={450}
              height={400}
            />
          </div>
        </div>
      </section>
  )
}