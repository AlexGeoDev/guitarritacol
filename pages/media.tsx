// import ReactPlayer from 'react-player';
import styles from './media.module.css';
// import second from 'next-videos'

const media = () => {
  return (
    <>
      <div className={styles.media}>
        <h2>My Concerts</h2>
        <div className={styles.media_card}>
          <h3 className={styles.mediaCard_title}>Name of concert</h3>

          <div>
            <video src={('watch?v=ElF4Kqy3GRM')}></video>
          </div>
          
          <div className={styles.mediaCard_video}>
            {/* <ReactPlayer 
              url='https://www.youtube.com/watch?v=pLBuFxMYkx8'
              width='80vw'
              height='auto'
            /> */}
          </div>

          <p className={styles.mediaCard_p}>
            Description of video
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Velit iusto temporibus perspiciatis! Tempore modi voluptates, 
            illum fugiat dolores facere nam! Eos non voluptate temporibus 
            quas, molestiae qui rerum voluptates esse.
            </p>
        </div>

        <div className={styles.media_card}>
          <h2 className={styles.mediaCard_title}>Name of concert</h2>
          
          <div className={styles.mediaCard_video}>
            {/* <ReactPlayer 
              url='https://www.youtube.com/watch?v=pLBuFxMYkx8'
              width='80vw'
              height='auto'
              controls
            /> */}
          </div>

          <p className={styles.mediaCard_p}>
            Description of video
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Velit iusto temporibus perspiciatis! Tempore modi voluptates, 
            illum fugiat dolores facere nam! Eos non voluptate temporibus 
            quas, molestiae qui rerum voluptates esse.
            </p>
        </div>
      </div>
    </>
  )
}

export default media;