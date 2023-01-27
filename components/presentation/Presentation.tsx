import React from 'react'
import styles from './presentation.module.css'

const Presentation = () => {
  return (
    <>
      <div className={styles.presentation}>
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet='./images/body_medium.jpg'/>
            <img 
              src="./images/body_small.jpg" 
              alt="Musician Carlos Jimenez playing guitar"
              className={styles.presentation_imageSmall}
              />
            
          </picture>
        </div>
        <div className={styles.presentation_text}>
          <header className={styles.presentation_title}>
            <h1 className={styles.presentation_h1}>Carlos Jimenez</h1>
          </header>
          <br />          
          <div className={styles.presentation_subtitle}>
            <h2>Happy colombian, guitarist, researcher and 
            composer based in Germany, also a kindermusic teacher </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Presentation