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
            <h3 className={styles.bio_titleCard}>Origen</h3>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo, exercitationem consequuntur? Culpa perspiciatis natus nam at. 
              Magnam placeat quod, expedita nesciunt recusandae exercitationem 
              perspiciatis vitae pariatur vero cupiditate voluptas in?</p>
          </div>          
        </section>

        <section className={styles.bio_card}>
          <div className={styles.bio_text}>
            <h3 className={styles.bio_titleCard}>Study and Skills</h3>
            <br />
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

        <section className={styles.bio_card}>
          <picture className={styles.bio_picture}>
            <source media='(min-width: 768px)' srcSet='/images/CarlosExperience.png'/>
            <img className={styles.bio_img} src="/images/CarlosExperience_small.png" alt="Calor Jimenez playing guitar" />
          </picture>
          <div className={styles.bio_text}>
            <h3 className={styles.bio_titleCard}>Work and Experience</h3>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo, exercitationem consequuntur? Culpa perspiciatis natus nam at. 
              Magnam placeat quod, expedita nesciunt recusandae exercitationem 
              perspiciatis vitae pariatur vero cupiditate voluptas in?</p>
          </div>          
        </section>
      </div>
    </>
  )
}

export default Bio;