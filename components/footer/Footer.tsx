import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <footer className={styles.futer}>
          <div className={styles.futer_main}>
            <div className={styles.contact}>
              <span className={styles.spam}>
                <i>Carlos Jimenez</i>,
                 2023 ©</span>
            </div>
            <div className={styles.socials}>
              <div>
                Contactame en: 
              </div>
              <div>
                <ul className={styles.nav}>
                  <li>
                    <Link 
                      href='https://www.facebook.com/carlosguitarrita'
                      target='_blank'
                    >
                      <Image 
                        src={'/images/facebook.svg'}
                        width={30}
                        height={30}
                        alt='Icono de facebook tomado de "https://icons8.com/icon/118497/facebook-nuevo" '
                      />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href='https://twitter.com/JimiHendrix'
                      target='_blank'
                      >
                      <Image 
                        src={'/images/twitter.svg'}
                        width={43}
                        height={43}
                        alt='Icono clave de Sol'
                      />
                    </Link>
                  </li>
                  <li>
                    <Link                 
                      href='https://www.youtube.com/@duoaustral'
                      target='_blank'
                      >
                      <Image 
                        src={'/images/youtube.svg'}
                        width={48}
                        height={48}
                        alt='Icono de youtube tomado de "https://icons8.com/icon/19318/youtube-play" '
                      />
                    </Link>
                  </li>
                  <li>
                  <Link 
                      href='https://www.instagram.com/guitarritacol/'
                      target='_blank'
                    >
                      <Image 
                        src={'/images/instagram.svg'}
                        width={33}
                        height={33}
                        alt='Icono de facebook tomado de "https://icons8.com/icon/118497/facebook-nuevo" '
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.author}>
            <Link 
              href='https://alexgeodev.vercel.app/'
              className={styles.author_link}>
              <span>Created by Alexgeodev</span>            
            </Link>
          </div>
        </footer>        
      </div>
    </>
  )
}

export  {Footer};