import { useRef } from 'react';
import './App.css';
import useVideoStreams from './useVideoStreams';
import VideoComponent from './VideoComponent';

function App() {
  const videoRef1 = useRef<HTMLCanvasElement>(null);
  const videoRef2 = useRef<HTMLCanvasElement>(null);

  useVideoStreams([
    { ref: videoRef1, isMirror: false },
    { ref: videoRef2, isMirror: true },
  ]);

  return (
    <>
      <h1 className='h1'>WebRTC mirror 🪞</h1>
      <div className='video-container'>
        <VideoComponent ref={videoRef1} />
        <div className='divider'>
          <hr />
          VS
        </div>
        <VideoComponent isMirror ref={videoRef2} />
      </div>
    </>
  );
}

export default App;
