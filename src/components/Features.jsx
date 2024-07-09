import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"

export default function Features() {
    const data = useStaticQuery(graphql`
      query features {
            allFile(filter: {sourceInstanceName: {eq: "f"}}) {
              nodes {
                childMarkdownRemark {
                  frontmatter {
                    feature
                    offer
                    featureImg {
                      childImageSharp {
                        gatsbyImageData(
                        width: 50
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        `)
    let featuresData = data?.allFile?.nodes
    return (
        <div className='w-[175%] overflow-hidden -translate-x-[22%] md:translate-x-0 md:w-full -translate-y-16 md:translate-y-0 min-h-32 h-48 bg-[#F4F9FF] flex justify-center items-center'>
            <div className='w-full md:w-3/4 h-full flex flex-col justify-center md:pt-5'>
                <div className='w-full flex justify-around items-center'>
                    {featuresData.map((item, key) => {
                        const image = getImage(item.childMarkdownRemark.frontmatter.featureImg)
                        console.log(image)
                        return (
                            <div key={key} className='w-1/5 h-full flex flex-col items-center text-[#00357B] uppercase '>
                                <GatsbyImage
                                  image={image}
                                  alt='Feature Image'
                                />
                                <span className='text-[12px] md:text-base font-normal mt-3'>{item.childMarkdownRemark.frontmatter.feature}</span>
                                <span className='main-title text-[25px] md:text-3xl font-medium'>{item.childMarkdownRemark.frontmatter.offer}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='w-full h-[10%] flex justify-around items-center'>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                </div>
            </div>
        </div>
    )
}


