import React from 'react';
import Tour from '../components/tour/Tour';
import styles from './schedule.module.css';

const schedule = () => {

  const [date, setDate] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [urlConcert, setUrlConcert] = React.useState('');
  const [event, setEvent] = React.useState('');

  return (
    <>
      <section className={styles.schedule}>
        <div className={styles.schedule_events}>
          <h2 className={styles.schedule_events__title}>
            FULL 2023 TOUR
          </h2>
          <Tour 
            setDate={'Jan 05'}
            setLocation={'Colonia'}
            setEvent={'New year'}
            setUrlConcert={'https://sternhagel.koeln/'}
          />
          <Tour 
            setDate={'Feb 08'}
            setLocation={'Paris'}
            setEvent={'San Valentine\'s Day'}
            setUrlConcert={'https://www.moulinrouge.fr/'}
          />
          <Tour 
            setDate={'Apr 11'}
            setLocation={'London'}
            setEvent={'Rock at Royalty'}
            setUrlConcert={'https://www.cavernclub.com/'}
          />
          <Tour 
            setDate={'Sep 11'}
            setLocation={'Madrid'}
            setEvent={'Tomatina'}
            setUrlConcert={'https://www.cavernclub.com/'}
          />
        </div>                
      </section>
    </>
  )
}

export default schedule;