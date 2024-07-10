import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"

export default function Features() {
    const data = useStaticQuery(graphql`
      query feature {
        allFile(
          filter: {sourceInstanceName: {eq: "f"}}
          sort: {childMarkdownRemark: {frontmatter: {name: ASC}}}
            ) {
              nodes {
                childMarkdownRemark {
                  frontmatter {
                    feature
                    offer
                    featureImg {
                      childImageSharp {
                        gatsbyImageData(
                          width: 50
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
        <div className='w-full h-48 bg-[#F4F9FF] flex justify-center items-center'>
            <div className='w-full md:w-3/4 overflow-x-auto h-full flex flex-col justify-center md:pt-5 '>
                <div className='w-[360px] h-[140px] md:w-full flex justify-around items-center'>
                    {featuresData.map((item, key) => {
                        const image = getImage(item.childMarkdownRemark.frontmatter.featureImg)
                        console.log(image)
                        return (
                            <div className='h-full'>
                              <div key={key} className='w-[150px] h-full flex flex-col items-center justify-center text-[#00357B] uppercase '>
                                <GatsbyImage
                                  image={image}
                                  alt='Feature Image'
                                />
                                <span className='text-[12px] md:text-base font-normal mt-3'>{item.childMarkdownRemark.frontmatter.feature}</span>
                                <span className='main-title text-[25px] md:text-3xl font-medium'>{item.childMarkdownRemark.frontmatter.offer}</span>
                              </div>
                            </div>
                        )
                    })}
                </div>
                <div className='w-[600px] md:w-full h-[10%] flex justify-around items-center'>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                    <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                </div>
            </div>
        </div>
    )
}


