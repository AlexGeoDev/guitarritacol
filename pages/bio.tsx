import React from 'react';
import styles from './bio.module.css';

const Bio = () => {
  return (
    <>
      <div className={styles.bio}>
        <section className={styles.bio_card}>
          <picture className={styles.bio_picture}>
            <img 
              className={styles.bio_img}
              src="/images/CarlosPerfil_small.jpg"
              alt="Calor Jimenez playing guitar" />
          </picture>
          <div className={styles.bio_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo, exercitationem consequuntur? Culpa perspiciatis natus nam at. 
              Magnam placeat quod, expedita nesciunt recusandae exercitationem 
              perspiciatis vitae pariatur vero cupiditate voluptas in?</p>
          </div>          
        </section>

        <section className={styles.bio_card}>
          <div className={styles.bio_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo, exercitationem consequuntur? Culpa perspiciatis natus nam at. 
              Magnam placeat quod, expedita nesciunt recusandae exercitationem 
              perspiciatis vitae pariatur vero cupiditate voluptas in?</p>
          </div>
          <picture className={styles.bio_picture}>
            <img 
              className={styles.bio_img}
              src="/images/CarlosPerfil_small.jpg"
              alt="Calor Jimenez playing guitar" />
          </picture>        
        </section>
      </div>
    </>
  )
}

export default Bio;