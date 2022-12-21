import Image from 'next/image'
import React from 'react'
import styles from './wallpaper.module.css'

const Wallpaper = () => {
  return (
    <>
      {/* <div className={styles.wallpaper}>
        <Image 
          className={styles.wallpaper_image}
          src={'/images/guitarra3.png'}
          width={200}
          height={466}
          alt='Imagen de una guitarra'
        />
      </div> */}
      <div className={styles.picture}>
        <picture>
        <source media='(min-width: 900px)' srcSet='/images/guitarra.png'/>
        <source media='(min-width: 600px)' srcSet='/images/guitarra2.png'/>
        <img 
          className={styles.img}
          src="/images/guitarra3.png" 
          alt="Imagen para small devices" />
        </picture>
      </div>
    </>
  )
}

export default Wallpaper