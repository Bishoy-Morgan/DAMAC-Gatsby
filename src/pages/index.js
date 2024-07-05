import * as React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
// import Features from '../components/Features'
// import { graphql } from 'gatsby'

export default function Home( { data } ) {
  return(
    <Layout>
      <HeroSection />
      {/* <Features /> */}
    </Layout>
  )
}

// export const query = graphql `
//   query MyQuery {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         title
//       }
//     }
//   }
// }
// `