// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Blogs from '../components/Blogs'
import Activites from '../components/Activites'
import Accomodation from '../components/Accomodation'
import Rental from '../components/Rental'
import Local from '../components/Local'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
    <Navbar />
    <Map />
    <Blogs />
    <Activites />
    <Accomodation />
    <Rental />
    <Local />
    <Footer />
  </div>
  )
}
