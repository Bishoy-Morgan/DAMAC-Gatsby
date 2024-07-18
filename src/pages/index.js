import * as React from 'react'
import { useState } from 'react'
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import HarbourLights from '../components/HarbourLights'
import Glamour from '../components/Glamour'
import Gallery from '../components/Gallery'
import Gallery2 from '../components/Gallery2';
import Footer from '../components/Footer'
import Payment from '../components/Payment'
import Floor from '../components/Floor'
import Brochure from '../components/Brochure'
import Location from '../components/Location'
import Invest from '../components/Invest'
import Request from '../components/Request'
import Form from '../components/Form'


export default function Home() {
  const [openForm, setOpenForm] = useState(false)
  const [type, setType] = useState('interior')
  return(
    <>
      {openForm && (<Form closeForm={() => setOpenForm(!openForm)}/>)}
      {/* {openForm ? disableBodyScroll(document) : enableBodyScroll(document)} */}
        <Layout formOpen={() => setOpenForm(!openForm)}>
          <HeroSection formOpen={() => setOpenForm(!openForm)}/>
          <Features />
          <HarbourLights />
          <Glamour formOpen={() => setOpenForm(!openForm)}/>
          {type == 'interior' && <Gallery type={type} setType={setType}/> }
          {type == 'exterior' && <Gallery2 type={type} setType={setType}/>}
          <Payment formOpen={() => setOpenForm(!openForm)}/>
          <Floor formOpen={() => setOpenForm(!openForm)}/>
          <Brochure />
          <Location />
          <Invest formOpen={() => setOpenForm(!openForm)}/>
          <Request />
          <Footer />
        </Layout>
    </>
  )
}
// export function Header() {
//   return(
//     <title>Harbour Lights Damac</title>
//   )
// }