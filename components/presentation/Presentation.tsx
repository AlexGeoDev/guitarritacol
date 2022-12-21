import React from 'react'
import styles from './presentation.module.css'

const Presentation = () => {
  return (
    <>
      <div className={styles.presentation}>
        <div className={styles.presentation_title}>
          <h1>Carlos Jimenez</h1>
        </div>
        <br />
        <div className={styles.presentation_subtitle}>
          <h2>Nazi chibchombiano, Guitarist, researcher and 
          composer based in Germany</h2>
        </div>
      </div>
    </>
  )
}

export default Presentation