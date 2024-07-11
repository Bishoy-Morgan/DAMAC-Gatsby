import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function HarbourLights() {
    const data = useStaticQuery(graphql`
        query amenities {
            allFile(
                filter: {sourceInstanceName: {eq: "amenities"}}
                sort: {childMarkdownRemark: {frontmatter: {name: ASC}}}
                ) {
                nodes {
                childMarkdownRemark {
                    frontmatter {
                    ameniteInfo1
                    ameniteInfo2
                    ameniteImage {
                        childImageSharp {
                        gatsbyImageData(
                            width: 193
                        )
                        }
                    }
                    }
                }
                }
            }
            }
        `)
        let amenitiesData = data.allFile.nodes
    return (
        <>
            <section className='w-4/5 h-[850px] md:h-[600px] lg:h-[650px] mx-auto  flex flex-col justify-between items-center'>
                <div className='mt-8 h-[10%] md:h-[12%]  '>
                    <StaticImage
                        className='max-w-[165] max-h-[70px] md:max-w-[180] md:max-h-[77px] '
                        src='../Images/HarbourLights.png' 
                        alt='Harbour-Lights Logo'
                        width={180}
                        height={77}
                        />
                </div>
                <div className='w-full h-1/4 md:w-3/4 text-center  '>
                    <h3 className='main-title uppercase text-3xl md:text-4xl text-[#00357B] font-medium mb-5'>features & Amenities</h3>
                    <p className='text-base leading-[24px] text-[#343434]'>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
                </div> 
                <div className='w-full h-1/2 md:h-2/5 lg:h-[45%] grid grid-cols-2 gap-8 md:flex md:justify-between '>
                    {amenitiesData.map((item, key) => {
                        const image = getImage(item.childMarkdownRemark.frontmatter.ameniteImage)
                        return (
                            <div key={key} className='relative max-w-[130px] lg:max-w-[210px] 2xl:max-w-[230px] max-h-[180px] md:max-h-[210px] lg:max-h-[250px] xl:max-h-[255px] md:w-1/5 md:h-full pt-2 flex flex-col justify-start items-center'>   
                                    <GatsbyImage
                                        className='z-50 max-sm:w-[92%] md:max-w-[150px] lg:max-w-[92%]'
                                        image={image}
                                        alt='Damac Features and Amenities'
                                    />
                                <div className='absolute top-1 left-1/2 -translate-x-1/2 z-10 w-[95%] h-4/5 rounded-full bg-[#D9D9D98A] flex justify-center'></div>
                                <div className='amenities absolute bottom-0 z-40 translate-y-3 md:translate-y-0 xl:translate-y-5 w-full h-1/2 pb-3 bg-[#FCFCFC] rounded-[20px] flex flex-col justify-end items-center'>
                                    <span className='text-[#00357B] text-xs md:text-sm font-semibold'>
                                        {item.childMarkdownRemark.frontmatter.ameniteInfo1}
                                    </span>
                                    <span className='text-[#00357B] text-xs md:text-sm font-semibold'>
                                        {item.childMarkdownRemark.frontmatter.ameniteInfo2}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </section>
            <div className='w-4/5 max-h-32 mx-auto text-center md:text-right flex flex-col justify-start items-end'>
                <span className='text-[10px] text-[#686868] font-light mb-10'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. <u>Source 1</u> | <u>Source 2</u></span>
            </div> 
        </>
    )
}
