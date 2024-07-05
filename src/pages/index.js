import * as React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'

export default function Home( { data } ) {
  return(
    <Layout>
      <HeroSection />
      <Features />
    </Layout>
  )
}
