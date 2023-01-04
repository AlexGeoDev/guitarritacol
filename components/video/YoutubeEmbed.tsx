import React from 'react';
import PropTypes from "prop-types";
import styles from '../../pages/media.module.css';

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.video_resposive}>
    <iframe 
      className='player'
      width={'100%'}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <style jsx>{`
      .player {
        height: 180px;
      }
      @media (min-width: 375px) {
        .player {
          height: 211px;
        }
      }
      @media (min-width: 425px) {
        .player {
          height: 239px;
        }
      }
      @media (min-width: 500px) {
        .player {
          height: 281px;
        }
      }
      @media (min-width: 650px) {
        .player {
          height: 365px;
        }
      }
      @media (min-width: 768px) {
        .player {
          height: 390px;
        }
      }
      @media (min-width: 900px) {
        .player {
          height: 405px;
        }
      }
      @media (min-width: 1024px) {
        .player {
          height: 460px;
        }
      }
      @media (min-width: 1200px) {
        .player {
          height: 539px;
        }
      }
      @media (min-width: 1440px) {
        .player {
          height: 647px;
        }
      }
    `}</style>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;