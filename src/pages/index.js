import * as React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import HarbourLights from '../components/HarbourLights'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Glamour from '../components/Glamour'

export default function Home( ) {
  return(
    <Layout>
      <HeroSection />
      <Features />
      <HarbourLights />
      <Glamour />
      <Gallery />
      <Footer />
    </Layout>
  )
}
