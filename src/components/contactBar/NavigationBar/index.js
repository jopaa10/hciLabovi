import React from 'react'
 
  import styles from './style.module.css'
 
  const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']
 
  const NavigationBar = ({activeTab, useThisStyle}) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
      {navTabs.map(tab => <li className={tab===activeTab ? styles.active : ''}>
        {tab}</li>
      )}
    </nav>
  )
 
  export default NavigationBar