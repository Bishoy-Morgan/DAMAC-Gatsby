import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

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
        <section className='w-full h-[350px] md:h-screen md:mt-10 md:mb-40'>
            <div className='w-4/5 py-5 mx-auto flex justify-end'>
                <button className='w-40 h-12 font-bold text-[13px] bg-[#00357B] text-[#FCFCFC] rounded-[5px] mr-3'>EXTERIORS</button>
                <button className='w-40 h-12 font-bold text-[13px] border-[#00357B] border text-[#00357B] rounded-[5px] '>INTERIORS</button>
            </div>
            <div className='w-[98%] md:w-4/5 h-[70%] md:h-full mx-auto flex flex-col justify-between '>
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
