import React, { useState, useEffect, useRef } from "react";
import { getVideo } from "../../../firebaseConfig";
import ReactPlayer from "react-player";

const Home = ({ seconds = 185}) => {
  const videoPlayerRef = useRef(null);
  const [seekValue, setSeekValue] = useState(seconds);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoName, setVideoName] = useState(
    "https://firebasestorage.googleapis.com/v0/b/auth-react-3d154.appspot.com/o/03-renderizando-pokemon-flatlist.mp4?alt=media&token=9739f8c9-a916-4242-b911-7729da1cfbdb&_gl=1*ygr3mr*_ga*MTg2Mjk4ODQzMS4xNjczNjIxOTI3*_ga_CW55HF8NVT*MTY5ODc1ODQ3Mi4xMzIuMS4xNjk4NzU4NTc2LjU4LjAuMA.."
  );
  const [videoUrl, setVideoUrl] = useState("");

  console.log(seekValue);

  useEffect(() => {
    getVideo(videoName).then((res) => {
      setVideoUrl(res);
    });
  }, [videoName]);

  useEffect(() => {
    if (isPlaying) {
      videoPlayerRef.current.seekTo(seekValue);
    }
  }, [isPlaying, seekValue]);

  console.log(seekValue);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <h1>Hola</h1>
      <ReactPlayer
        ref={videoPlayerRef}
        controls
        // playing={isPlaying}
        url={videoUrl}
        onSeek={(value) => {
          setSeekValue(value);
        }}
        onPlay={() => {
          handlePlay();
        }}
        volume={0.6}
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
      />
      <div
        style={{
          width: "20%",
          backgroundColor: "peru",
          minHeight: "80vh",
        }}
      >
        Clases
        <ul>
          <li
            style={{
              listStyle: "none",
            }}
            onClick={() => {
              setVideoName("react-native/2023-10-30 09-08-03.mp4");
              setSeekValue(0);
            }}
          >
            clase 1
          </li>
          <li
            style={{
              listStyle: "none",
            }}
            onClick={() => {
              setVideoName("react-native/2023-10-30 09-08-15.mp4");
              setSeekValue(0);
            }}
          >
            clase 2
          </li>
          <li
            style={{
              listStyle: "none",
            }}
            onClick={() => {
              setVideoName("react-native/2023-10-30 09-08-24.mp4");
              setSeekValue(0);
            }}
          >
            clase 3
          </li>
          <li
            style={{
              listStyle: "none",
            }}
          >
            clase 4
          </li>
          <li
            style={{
              listStyle: "none",
            }}
          >
            clase 6
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
