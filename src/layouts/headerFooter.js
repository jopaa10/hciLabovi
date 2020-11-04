// /src/layouts/headerFooter.js
import React from 'react'
import NavigationHeader from '../components/contactBar/NavigationHeader'
import Footer from '../components/contactBar/Footer/index'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <NavigationHeader activeTab={activeTab} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout