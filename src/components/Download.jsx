import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.blackText} ${styles.h1Text}`}>Download the Source Code</h1>
          <p className={`${styles.blackText} ${styles.pText}`}>Get the full source code on GitHub</p>
        </div>
        <button className={styles.btnPrimary}>Source Code</button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download_png" className={styles.fullImg}/>
        </div>
      </div>
    </div>
  )
}

export default Download