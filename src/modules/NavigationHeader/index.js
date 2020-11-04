import React from 'react'
import Logo from '../../components/contactBar/Logo/index'
import Navigation from '../../components/contactBar/Navigation/index'
import ContactBar from '../../components/contactBar/index'

import styles from './style.module.css'
 
const NavigationHeader = ({activeTab}) => (
  <>
  <ContactBar />

  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation activeTab={activeTab}/>
  </section>
  </>
)
 
export default NavigationHeader