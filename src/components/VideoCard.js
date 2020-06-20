import React from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css';

const VideoCard = () => {
  return (
    <article className='video-card'>
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url="https://youtu.be/2h6sPGKSicA"
            controls="true"
            width='100%'
            height='100%'
            />
        </div>
        <div className="video-card-information">
            <ul className="video-card-information-list">
                <li className="video-location">
                    San Jose, California
                </li>
                <li className="twitter-link">
                    <a href="https://twitter.com/bowiezamudio/status/1266598285206106113">
                        Tweet
                    </a>
                </li>
                <li className="doucette-text">
                Another pre-protest reminder, this time out of New Jersey, 
                that unchecked police violence has been a common occurrence 
                for awhile
                </li>

            </ul>
        </div>
    </article>
  );
};

export default VideoCard;
