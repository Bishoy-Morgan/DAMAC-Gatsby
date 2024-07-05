import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Offers from './Offers'
import { StaticImage } from 'gatsby-plugin-image'

export default function HeroSection() {
    const data = useStaticQuery(graphql`
        query MyQuery {
  allFile(filter: {sourceInstanceName: {eq: "o"}}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          title
          percentage
        }
      }
    }
  }
}
`)
    console.log(data)
    let markData = data.allFile.nodes
    return (
        <section className='main-section relative w-full h-screen'>
            <StaticImage
                src='../Images/Rectangle.png'
                alt='DAMAC property in Dubai Marintime City'
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                loading='eager'
                placeholder='blurred'
            />
            <section className='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-4/5 h-3/5 flex justify-between items-start text-[#FCFCFC]'>
                <div className='w-1/2 h-full flex flex-col justify-between items-start'>
                    <h2 className='main-title text-5xl font-medium leading-[62.4px] uppercase'>Harbour Lights<br />de <span className='text-[#17ABFF]'>GRESOGONO</span></h2>
                    <span className='text-[25px] font-bold leading-[33px] -mt-10'>1, 2 & 3 Bedrooms Seaside Apartments<br /> in Dubai Maritime City</span>
                    <div className='w-4/5 min-h-24 flex flex-col justify-between'>
                        {markData?.map((i, key) => {
                            return (
                                <Offers
                                    key={key}
                                    offerName={i?.childMarkdownRemark?.frontmatter?.title}
                                    offerPercent={i?.childMarkdownRemark?.frontmatter?.percentage}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='w-[306px] h-80 bg-[#5790BE1F] backdrop-blur-md rounded-[14px] flex flex-col justify-between'>
                    <div className='w-full h-4/5 px-5 text-[#FCFCFC] flex flex-col justify-center items-center shadow-sm shadow-black/50'>
                        <div className='w-full h-3/5'>
                            <span className='uppercase text-[13px] tracking-[2px] font-normal'>pricing starts from</span>
                            <h4 className='main-title font-medium text-5xl mt-1 mb-4'>$ 425,000</h4>
                            <h5 className='main-title font-normal text-2xl '>AED 1.3 Million</h5>
                        </div>
                        <button className='w-[248px] h-12 bg-[#17ABFF] rounded-[5px] text-[#FFFFFF] font-bold text-[13px] tracking-widest'>GET A PRESENTATION</button>
                    </div>
                    <div className='w-full h-1/5 flex items-center px-5 '>
                        <span className='text-[13px] text-[#98C5E8] leading-[17px] '>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
