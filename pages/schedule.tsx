import React from 'react';
import ReactPlayer from 'react-player';
import styles from './schedule.module.css';

const schedule = () => {
  return (
    <>
      <section className={styles.schedule}>
        <div className={styles.schedule_events}>
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=ElF4Kqy3GRM&t=1845s'
          />

          <p>Esta es la pagina de schedule

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptates rerum odit adipisci quibusdam voluptate aliquam 
            amet praesentium dolorum aut repellendus possimus corporis 
            voluptatum distinctio sit, nulla sed commodi nostrum aspernatur!
          </p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptates rerum odit adipisci quibusdam voluptate aliquam 
            amet praesentium dolorum aut repellendus possimus corporis 
            voluptatum distinctio sit, nulla sed commodi nostrum aspernatur!
          </p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptates rerum odit adipisci quibusdam voluptate aliquam 
            amet praesentium dolorum aut repellendus possimus corporis 
            voluptatum distinctio sit, nulla sed commodi nostrum aspernatur!
          </p>
        </div>
                
      </section>
    </>
  )
}

export default schedule;