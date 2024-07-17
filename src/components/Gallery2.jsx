import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import rightArrow from '../Images/icons/galleryRight.svg'
import leftArrow from '../Images/icons/galleryLeft.svg'
import closeBtn from '../Images/icons/close-btn.svg'
import { disableBodyScroll } from 'body-scroll-lock'

export default function Gallery2( { type, setType } ) {
    const [openGallery, setOpenGallery] = useState(false)
    const data = useStaticQuery(graphql`
        query gallery2 {
            allFile(filter: {sourceInstanceName: {eq: "gallery2"}}) {
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
    // Gallery Images
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1 
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isFirstSlide = currentIndex === image.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1 
        setCurrentIndex(newIndex)
    }  
    return (
        <section className='overflow-hidden w-full h-[480px] md:h-[600px] lg:h-[700px] 2xl:h-[800px] flex flex-col justify-evenly items-center lg:mb-10 '>
            <div className='w-4/5 h-[15%] xl:h-[10%] flex justify-center items-center md:justify-end'>
                <button 
                onClick={() => setType('exterior')}
                className='w-40 h-12 font-bold text-[13px] focus:bg-[#00357B] focus:text-[#FCFCFC] border-[#00357B] border text-[#00357B] rounded-[5px] mr-3'>EXTERIORS</button>
                <button 
                onClick={() => setType('interior')}
                className='w-40 h-12 font-bold text-[13px] border-[#00357B] border text-[#00357B] rounded-[5px] hover:bg-[#00357B] hover:text-[#FCFCFC] '>INTERIORS</button>
            </div>
                <div className='relative w-[98%] lg:w-4/5 h-[70%] lg:h-4/5 2xl:h-[85%] max-h-[500px] md:max-h-[600px] lg:max-h-[700px] 2xl:max-h-none flex flex-col justify-between '>
                    <div className='absolute top-1/3 left-4 w-[98%] h-12 z-40 flex justify-between items-center '>
                        <div>
                            <img src={leftArrow}
                            alt='Arrow' />
                        </div>
                        <div>
                            <img src={rightArrow}
                            alt='Arrow' />
                        </div>
                    </div>
                    {openGallery && (
                        <section className='fixed top-0 left-0 z-50 w-full h-full bg-black/90 flex justify-center items-center'>
                            <img 
                                className='absolute top-5 right-5 cursor-pointer'
                                src={closeBtn}
                                alt='close button'
                                onClick={() => setOpenGallery(!openGallery)} 
                            />
                            <div className='absolute top-[45%] left-1/2 -translate-x-1/2 w-[93%] h-12 z-40 flex justify-between items-center '>
                                <button 
                                    onClick={goToPrevious}
                                >
                                    <img
                                        className='border-2 border-[#00357B] rounded-full'
                                        src={leftArrow}
                                        alt='Arrow'
                                    />
                                </button>
                                <button
                                    onClick={goToNext}
                                >
                                    <img 
                                        className='border-2 border-[#00357B] rounded-full rotate-180 '
                                        src={leftArrow}
                                        alt='Arrow' 
                                    />
                                </button>
                            </div>
                            <div className='w-4/5 h-4/5 '>
                                <GatsbyImage
                                    className='w-full h-full rounded-[14px]'
                                    image={image[currentIndex]}
                                    alt='Damac Building'
                                />
                            </div>
                        </section>
                    )}
                    <div 
                        onClick={() => setOpenGallery(!openGallery)}
                        className='w-full h-[73%] cursor-pointer'
                    >
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
