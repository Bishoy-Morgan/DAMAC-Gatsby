import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Offers from './Offers'
import { StaticImage } from 'gatsby-plugin-image'
import Navbar from './Navbar'

export default function HeroSection( { formOpen } ) {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {sourceInstanceName: {eq: "offer"}}) {
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
    let markData = data.allFile.nodes
    return (
        <section className='relative w-full min-h-[650px] pt-[3%] flex justify-center items-start mb-4 lg:mb-0 '>
            <div className='absolute top-0 left-0 w-full h-full z-20 hidden md:block '>
                <StaticImage
                    className='h-full '
                    src='../Images/Rectangle.png'
                    alt='DAMAC property'
                    layout='fullWidth'
                    loading='eager'
                    placeholder='dominantColor'
                />
                
            </div>
            <div className='absolute top-0 left-0 w-full h-full max-sm:max-h-[800px] object-cover z-20 md:hidden'>
                <StaticImage
                    className='max-h-[760px]'
                    src='../Images/Rectangle Mobile-view.png'
                    alt='DAMAC property Mobile'
                    layout='fullWidth'
                    loading='eager'
                    placeholder='dominantColor'
                />
            </div>
            <div className='z-40 w-[82%] max-w-[1760px] h-auto mb-[2%] flex flex-col'>
                <Navbar />
                <section className='w-full mt-[17%] md:mt-[9%] flex flex-col md:flex-row justify-between items-center md:items-start text-[#FCFCFC]'>
                <div className='w-full md:h-full mb-[13%] md:mb-0 flex flex-col justify-start '>
                    <h2 className='font-["Oswald"] text-[37px] md:text-5xl font-medium leading-10 md:leading-[62.4px] uppercase'>Harbour Lights<br />de <span className='text-[#17ABFF]'>GRESOGONO</span></h2>
                    <span className='text-[14px] md:text-[25px] font-bold md:leading-[33px] mt-4 mb-4 md:mb-10'>1, 2 & 3 Bedrooms Seaside Apartments<br /> in Dubai Maritime City</span>
                    <div className='w-full max-w-[400px] xl:w-4/5 h-24 flex flex-col justify-around'>
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
                <div className='w-[303.076px] h-80 bg-[#5790BE1F] backdrop-blur-md rounded-[14px] flex flex-col justify-between'>
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
            </div>
        </section>
    )
}
