import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Offers from './Offers'
import { StaticImage } from 'gatsby-plugin-image'

export default function HeroSection( { formOpen } ) {
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
    // console.log(data)
    let markData = data.allFile.nodes
    return (
        <section className='main-section relative w-full h-screen '>
            <div className='absolute top-0 left-0 w-full h-full z-20 hidden md:block'>
                <StaticImage
                    className='h-full'
                    src='../Images/Rectangle.png'
                    alt='DAMAC property'
                    layout='fullWidth'
                    loading='eager'
                    placeholder='dominantColor'
                />
                
            </div>
            <div className='absolute top-0 left-0 w-full h-full z-20 md:hidden'>
                <StaticImage
                    className='h-full'
                    src='../Images/Rectangle Mobile-view.jpg'
                    alt='DAMAC property Mobile'
                    layout='fullWidth'
                    loading='eager'
                    placeholder='dominantColor'
                />
            </div>
            <section className='absolute z-40 top-20 left-1/2 md:left-1/2 md:top-1/2 -translate-x-1/2 md:-translate-y-[40%] lg:-translate-y-1/3 w-[90%] md:w-4/5 h-[85%] md:h-[70%] lg:h-3/5 flex flex-col md:flex-row justify-around items-center md:items-start text-[#FCFCFC]'>
                <div className='w-full max-w-[350px] md:max-w-none h-[42%] md:w-1/2 md:h-3/5 lg:h-[65%] xl:h-full flex flex-col justify-between items-start '>
                    <h2 className='font-["Oswald"] text-[37px] md:text-5xl font-medium leading-10 md:leading-[62.4px] uppercase'>Harbour Lights<br />de <span className='text-[#17ABFF]'>GRESOGONO</span></h2>
                    <span className='text-[14px] md:text-[25px] font-bold md:leading-[33px] md:-mt-10'>1, 2 & 3 Bedrooms Seaside Apartments<br /> in Dubai Maritime City</span>
                    <div className='w-full max-w-[400px] xl:w-4/5 h-2/5 md:h-1/4 xl:h-24 flex flex-col justify-around'>
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
                <div className='w-full md:w-[45%] lg:w-1/3 xl:w-[306px] max-w-[306px] h-80 bg-[#5790BE1F] backdrop-blur-md rounded-[14px] flex flex-col justify-between'>
                    <div className='w-full h-4/5 px-5 text-[#FCFCFC] flex flex-col justify-center items-center shadow-sm shadow-black/50'>
                        <div className='w-full h-3/5'>
                            <span className='uppercase text-[13px] tracking-[2px]'>pricing starts from</span>
                            <h4 className='font-["Oswald"] font-medium text-5xl mt-1 mb-4'>$ 425,000</h4>
                            <h5 className='font-["Oswald"] text-2xl '>AED 1.3 Million</h5>
                        </div>
                        <button 
                            className='w-[248px] h-12 bg-[#17ABFF] rounded-[5px] text-[#FFFFFF] font-bold text-[13px] tracking-widest'
                            onClick={formOpen}    
                        >GET A PRESENTATION</button>
                    </div>
                    <div className='w-full h-1/5 flex items-center px-5 '>
                        <span className='text-[13px] text-[#98C5E8] leading-[17px] '>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
