import React from 'react';
import styles from "./video_item.module.css"


const VideoItem = ({video:{snippet}}) => ( //비디오 안에 있는 snippet을 찾기
            <li className={styles.container}>
                <div className={styles.video}>
                    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail'/>
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
    );

export default VideoItem;