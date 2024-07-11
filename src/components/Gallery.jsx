import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import rightArrow from '../Images/icons/galleryRight.svg'
import leftArrow from '../Images/icons/galleryLeft.svg'

export default function Gallery() {
    const data = useStaticQuery(graphql`
        query gallery {
            allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
                nodes {
                childMarkdownRemark {
                    frontmatter {
                    galleryImage {
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
    const galleryData = data.allFile.nodes
    const image = galleryData.map((img) => getImage(img.childMarkdownRemark.frontmatter.galleryImage))
    return (
        <section className='w-full h-[480px] md:h-[600px] lg:h-[700px] 2xl:h-[800px] flex flex-col justify-evenly items-center lg:mb-10 '>
            <div className='w-4/5 h-[15%] xl:h-[10%] flex justify-center items-center md:justify-end'>
                <button className='w-40 h-12 font-bold text-[13px] bg-[#00357B] text-[#FCFCFC] rounded-[5px] mr-3'>EXTERIORS</button>
                <button className='w-40 h-12 font-bold text-[13px] border-[#00357B] border text-[#00357B] rounded-[5px] '>INTERIORS</button>
            </div>
            <div className='relative w-[98%] lg:w-4/5 h-[70%] lg:h-4/5 2xl:h-[85%] max-h-[500px] md:max-h-[600px] lg:max-h-[700px] 2xl:max-h-none flex flex-col justify-between '>
                <div className='absolute top-1/3 left-4 w-[98%] h-12 z-50 flex justify-between items-center '>
                    <div>
                        <img src={leftArrow}
                        alt='Arrow' />
                    </div>
                    <div>
                        <img src={rightArrow}
                        alt='Arrow' />
                    </div>
                </div>
                <div className='w-full h-[73%]'>
                    <GatsbyImage
                        className='w-full h-full rounded-[14px]'
                        image={image[0]}
                        alt='Damac Building'
                    />
                </div>
                <div className='w-full h-[24%] md:h-1/4 flex justify-between items-center '>
                    <div className='w-[23%] md:w-[24%] h-full'>
                        <GatsbyImage
                            className='w-full h-full rounded-[14px]'
                            image={image[1]}
                            alt='Damac interiors'
                        />
                    </div>
                    <div className='w-[23%] md:w-[24%] h-full'>
                        <GatsbyImage
                            className='w-full h-full rounded-[14px]'
                            image={image[2]}
                            alt='Damac interiors'
                        />
                    </div>
                    <div className='w-[23%] md:w-[24%] h-full'>
                        <GatsbyImage
                            className='w-full h-full rounded-[14px]'
                            image={image[3]}
                            alt='Damac interiors'
                        />
                    </div>
                    <div className='w-[23%] md:w-[24%] h-full'>
                        <GatsbyImage
                            className='w-full h-full rounded-[14px]'
                            image={image[4]}
                            alt='Damac interiors'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
