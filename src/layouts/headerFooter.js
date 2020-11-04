// /src/layouts/headerFooter.js
import React from 'react'
import NavigationHeader from '../modules/NavigationHeader'
import Footer from '../modules/Footer/index'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <NavigationHeader activeTab={activeTab} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout