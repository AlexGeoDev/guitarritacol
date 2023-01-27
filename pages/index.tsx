import React from 'react';
import Presentation from '../components/presentation/Presentation';
import styles from './home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <> 
      <main className={styles.home}>
        <div className={styles.home_presentation}>
          <Presentation />
        </div>
      </main>
    </>
  )
}

export default Home;