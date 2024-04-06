import React, { useRef, useState } from "react";
import { Container, PlayButton, Title, Video, VideoPlayer } from "./style";
import TripVideo from "../../assets/video/video.mp4";

const WatchTrips = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Container>
      <Title>Watch Our Memorable Trips</Title>
      <VideoPlayer>
        <Video ref={videoRef} onClick={handleClick}>
          <source src={TripVideo} type="video/mp4" />
          Your browser doesn't support the video tag
        </Video>
        {!isPlaying && <PlayButton onClick={handlePlay}></PlayButton>}
      </VideoPlayer>
    </Container>
  );
};

export default WatchTrips;
