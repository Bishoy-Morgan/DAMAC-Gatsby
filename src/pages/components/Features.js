import React from 'react'
import SingleFeature from './SingleFeature'

export default function Features( ) {
    return (
        <div className='w-full min-h-32 py-2 flex justify-center items-center bg-[#F4F9FF] '>
            <div className='w-3/4 h-4/5 flex flex-col justify-around border border-blue-500'>
                <div className='w-full h-full flex justify-around items-center'>
                    <SingleFeature img={'./../Images/Feature1.png'} />
                    {/* <SingleFeature img={'../Images/Feature1.png'} featureName={'BOOK WITH'} featureValue={'Only 20%'}/> */}
                    {/* <SingleFeature featureImg={'../Images/Feature 2.png'} featureName={'PAYMENT PLAN'} featureValue={'Easy 70/30'}/>
                    <SingleFeature featureImg={'../Images/Feature 3.png'} featureName={'HANDOVER ON'} featureValue={'Q2 2027'}/>
                    <SingleFeature featureImg={'../Images/Feature 4.png'} featureName={'AREA STARTS FROM'} featureValue={'700 sqmt'}/> */}
                </div>
                <div className='w-full h-1/5 flex justify-between border border-blue-500'>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                </div>
            </div>
        </div>
    )
}
