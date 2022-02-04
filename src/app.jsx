import React, { useEffect, useState } from "react";
import "./reset.css";
import './app.css';
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect (()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAzSQUcOI7x-r0hMhBmNE8w5l2zl4c25Oo", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <VideoList videos={videos}></VideoList>
  );
}

export default App;
