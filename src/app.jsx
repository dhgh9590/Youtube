import React, { useEffect, useState } from "react";
import "./reset.css";
import styles from'./app.module.css';
import VideoList from "./components/video_list/video_list";
import Search_header from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import Aside from "./components/aside/aside";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect (()=>{
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  },[]);

  return (
      <div className={styles.app}>
        <Search_header onSearch={search}></Search_header>
        <div className={styles.wrap}>
          <Aside></Aside>
          <section className={styles.content}>
            {selectedVideo && (
              <div className={styles.detail}>
                <VideoDetail video={selectedVideo}></VideoDetail>
              </div>
            )}
            <div className={styles.list}>
              <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid'}></VideoList>
            </div>
          </section>
        </div>

      </div>
  );
}

export default App;
