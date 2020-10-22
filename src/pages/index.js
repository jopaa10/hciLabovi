import React from "react"

import ContactBar from '../components/contactBar'
import NavigationHeader from '../components/contactBar/NavigationHeader'

import Footer from '../components/contactBar/Footer/index'

const IndexPage = () => (
  <main>
   <ContactBar />
   <NavigationHeader activeTab="Home"/>
   <Footer />
  </main>
)

export default IndexPage