import * as React from 'react'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import Features from './components/Features'

export default function Home() {
  return(
    <Layout>
      <HeroSection />
      <Features />
    </Layout>
  )
}
