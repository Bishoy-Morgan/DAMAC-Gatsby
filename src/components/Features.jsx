import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"

export default function Features() {
    const data = useStaticQuery(graphql`
      query feature {
        allFile(
          filter: {sourceInstanceName: {eq: "feature"}}
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
                          width: 52
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
        <div className='w-full h-52 lg:h-48 bg-[#F4F9FF] flex justify-center items-center '>
            <div className='w-full max-w-[1920px] md:w-[77%] overflow-x-scroll lg:overflow-x-hidden h-full flex flex-col justify-center md:pt-5'>
                <div className='h-[150px] w-full flex justify-center '>
                    {featuresData.map((item, key) => {
                        const image = getImage(item.childMarkdownRemark.frontmatter.featureImg)
                        return (
                          <div className='h-full lg:mx-[70px]'>
                              <div key={key} className='w-[173px] lg:w-[155px] h-full flex flex-col justify-around lg:justify-center items-center text-[#00357B] uppercase '>
                                <GatsbyImage
                                  image={image}
                                  alt='Feature Image'
                                />
                                <span className='text-xs md:text-base mt-3 '>{item.childMarkdownRemark.frontmatter.feature}</span>
                                <span className='font-["Oswald"] text-[25px] md:text-3xl font-medium mb-2'>{item.childMarkdownRemark.frontmatter.offer}</span>
                                <div className='w-[73px] h-[5px] bg-[#00357B] opacity-[12%] rounded-[13px]'></div>
                              </div>
                          </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


