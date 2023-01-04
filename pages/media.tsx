import YoutubeEmbed from '../components/video/YoutubeEmbed';
import styles from './media.module.css';

const media = () => {
  return (
    <>
      <div className={styles.media}>
        <h2 className={styles.title}>My Concerts</h2>
        <div className={styles.media_card}>
          <div className={styles.media_card_videoContainer}>
            <div className={styles.mediaCard_video}>
            <YoutubeEmbed embedId='f6FUQUf8wlw' />
            </div>
          </div>
          <div className={styles.media_card__description}>
            <h3 className={styles.mediaCard_title}>
              Name of concert
            </h3>

            <p className={styles.mediaCard_p}>
              Description of video.
              <br />              
              Mega concierto en Alemania, fue mero gentio y se armo tremendo pogo.
              Las gruppies estaba very hot, en fin todo un rockstar ese Carlangas
            </p>
          </div>
        </div>

        <div className={styles.media_card}>          
          <div className={styles.mediaCard_video}>
            <YoutubeEmbed embedId='CwSyKAtk9gI' />
          </div>
          <div className={styles.media_card__description}>
            <h3 className={styles.mediaCard_title}>
              Name of concert
            </h3>

            <p className={styles.mediaCard_p}>
              Description of video.
              <br />              
              Mega concierto en Alemania, fue mero gentio y se armo tremendo pogo.
              Las gruppies estaba very hot, en fin todo un rockstar ese Carlangas
            </p>
          </div>
        </div>

        <div className={styles.media_card}>          
          <div className={styles.mediaCard_video}>
            <YoutubeEmbed embedId='f6FUQUf8wlw' />
          </div>
          <div className={styles.media_card__description}>
            <h3 className={styles.mediaCard_title}>
              Name of concert
            </h3>

            <p className={styles.mediaCard_p}>
              Description of video.
              <br />              
              Mega concierto en Alemania, fue mero gentio y se armo tremendo pogo.
              Las gruppies estaba very hot, en fin todo un rockstar ese Carlangas
            </p>
          </div>
        </div>        
      </div>
    </>
  )
}

export default media;