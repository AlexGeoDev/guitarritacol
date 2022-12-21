import ReactPlayer from 'react-player';
import styles from './media.module.css';

const media = () => {
  return (
    <>
      <section className={styles.media}>
        <div className={styles.media_card}>
          <h2>My Concerts</h2>
          <br />
          <p>Here you can see my concerts</p>

          <ReactPlayer 
            url='https://www.youtube.com/watch?v=pLBuFxMYkx8'
            width='50%'
            height='50%'
          />
          
        </div>
      </section>
    </>
  )
}

export default media;