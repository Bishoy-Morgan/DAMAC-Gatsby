import React from 'react'

export default function Offers( { offerName, offerPercent } ) {
    return (
        <div className='w-4/5 h-[37px] bg-black/[26%] text-[#E7EBEF] border-[#17ABFF] border-l-[3px] flex items-center  '>
            <span 
                className='text-sm px-4'>{offerName}
                <span 
                    className='text-base font-semibold'> {offerPercent} {'%**'}</span>
            </span>
        </div>
    )
}
