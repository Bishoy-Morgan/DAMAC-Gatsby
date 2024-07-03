import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function SingleFeature( { img, featureName, featureValue } ) {
    console.log(img)
    return (
        <div className='w-1/5 h-4/5 flex flex-col items-center border-2 border-black'>
            <StaticImage
                src={img}
                alt='Feature Image'
                // layout='fixed'
                // width={50}
                // height={48}
            />
            <span>{featureName}</span>
            <span>{featureValue}</span>
        </div>
    )
}
