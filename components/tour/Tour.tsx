import Link from 'next/link';
import React from 'react'
import styles from "./tour.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css'

const Tour = ({setDate, setLocation, setEvent, setUrlConcert}) => {
  return (
    <>
      <div className={styles.tour}>
        <ul>
          <li className={styles.tour_events}>
            <h3>{setDate}</h3>
            <div className={styles.tour_eventsData}>
              <p>{setLocation}</p>
              <p >{setEvent}</p>
              <Link href={setUrlConcert}>
                <button className={styles.tour_button}>Information
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Tour