import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'

export default function Floor( { formOpen } ) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const data = useStaticQuery(graphql`
        query floor {
            allFile(
                filter: {sourceInstanceName: {eq: "floor"}}
                sort: {childMarkdownRemark: {frontmatter: {floorName: ASC}}}
            ) {
                nodes {
                childMarkdownRemark {
                    frontmatter {
                    floorTitle
                    floorType
                    floorInfo
                    floorSpace
                    floorPrice
                    floorImage {
                        childImageSharp {
                        gatsbyImageData
                        }
                    }
                    }
                }
                }
            }
            }
        `)
    const floorData = data.allFile.nodes
    const filterData = floorData.map((i) => i.childMarkdownRemark.frontmatter)
    return (
        <section className='floorPlan w-full h-screen 2xl:max-h-[1150px] md:mt-0 md:pt-5 '>
            <div className='w-[90%] max-w-[1920px] md:w-4/5 h-full mx-auto flex flex-col items-center  '>
                <div className='w-full md:w-[90%] h-[12%] md:h-1/5 flex flex-col justify-between'>
                    <h3 className='font-["Oswald"] uppercase text-4xl font-medium text-[#00357B] text-center '>Floor Plans of ALL UNITS</h3>
                    <div className='w-full h-[35%] lg:h-2/5 border-[#00357B] md:border-b-[.7px] '>
                        <button className='block md:hidden mx-auto bg-[#00357B] rounded-[5px] w-3/5 h-12 text-[#FCFCFC] text-[13px] font-bold  '>Choose a Bedroom
                            <svg className='inline-block ml-2' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.07461 1.16879L5.57865 5.54914C5.24701 5.94976 4.73583 5.94976 4.4179 5.54914L0.921936 1.16879C0.590293 0.754017 0.756114 0.436523 1.26729 0.436523H8.72926C9.25459 0.436523 9.40626 0.754459 9.07461 1.16879Z" fill="#FCFCFC"/>
                            </svg>
                        </button>
                        <ul className='max-sm:hidden text-[20px] font-bold text-[#00357B] flex justify-evenly  '>
                            <button 
                                className='focus:text-[#17ABFF] focus:border-b-[3px] focus:border-[#17ABFF] lg:pb-4  '
                                onClick={() => setCurrentIndex(0)}
                            >
                                <li>1-Bedroom</li></button>
                            <button 
                                className='focus:text-[#17ABFF] focus:border-b-[3px] focus:border-[#17ABFF] lg:pb-4  '
                                onClick={() => setCurrentIndex(1)}
                            >
                                <li>2-Bedroom Luxury</li></button>
                            <button 
                                className='focus:text-[#17ABFF] focus:border-b-[3px] focus:border-[#17ABFF] lg:pb-4  '
                                onClick={() => setCurrentIndex(2)}
                            >
                                <li>2-Bedroom</li></button>
                            <button 
                                className='focus:text-[#17ABFF] focus:border-b-[3px] focus:border-[#17ABFF] lg:pb-4  '
                                onClick={() => setCurrentIndex(3)}
                            >
                                <li>3-Bedroom Luxury</li></button>
                        </ul>
                    </div>
                </div>
                <div  className='w-full h-4/5 md:w-[85%] md:h-2/4 md:mt-10 flex flex-col-reverse md:flex-row justify-between'>
                    <StaticImage
                        width={430}
                        height={325}
                        className='w-full md:w-[45%]'
                        src='../Images/unit.png'
                        alt='Floor plan'
                    />
                    <div className='w-full md:w-[47%] h-[65%] md:h-[95%] flex flex-col justify-center'>
                        <h4 className='text-[20px] md:text-[29px] font-medium text-[#353535]'>{filterData[currentIndex].floorTitle}</h4>
                        <span className='text-[#353535] text-[14px] md:text-base font-medium '>Type : {filterData[currentIndex].floorType}</span>
                        <span className='block text-sm text-[#343434] leading-[20px]  my-4'>{filterData[currentIndex].floorInfo}</span>
                        <div className='dash w-full h-10 flex justify-between items-center border-b-[.4px] border-[#5D5C5C] border-dashed  '>
                            <span className='text-[#343434] '>SPACE : <span className='text-[#0C0C0C] text-[15px] md:text-[17px] font-semibold '>{filterData[currentIndex].floorSpace}<span> M<sup>2</sup></span></span></span>
                            <span className='text-[#343434] '>PRICE : <span className='text-[#0C0C0C] text-[15px] md:text-[17px] font-semibold '>$ {filterData[currentIndex].floorPrice}</span></span>
                        </div>
                        <div className='md:hidden w-full min-h-24 flex'>
                            <div className='w-1/2 h-full flex flex-col justify-evenly border-r-[.4px] border-[#5D5C5C] border-dashed'>
                                <span className=' text-xs '>Living Area : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs '>Kitchen : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs '>Living Area : 72.50 M<sup>2</sup></span>
                            </div>
                            <div className='w-1/2 h-full flex flex-col justify-evenly items-end'>
                                <span className=' text-xs '>Bathroom : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs '>Bathroom : 72.50 M<sup>2</sup></span>
                                <span className=' text-xs '>Balcony : 72.50 M<sup>2</sup></span>
                            </div>
                        </div>
                        <div className='w-full h-32 md:h-12 mt-8 flex flex-col md:flex-row justify-evenly md:justify-between items-end'>
                            <a
                                className='w-3/5 md:w-[48%] h-12'
                                href='/sample.pdf'
                                download
                            >
                                <button className='w-full h-12 font-bold text-[#FFFFFF] bg-[#00358B] tracking-wide text-[13px] rounded-[5px] border-[#00357B] '>GET ALL FLOOR PLANS</button>
                            </a>
                            <button 
                                className='w-3/5 md:w-[48%] h-12 font-bold text-[#00357B] tracking-wider text-[13px] rounded-[5px] border-[#00357B] border'
                                onClick={formOpen}
                            >LEAVE A REQUEST</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
