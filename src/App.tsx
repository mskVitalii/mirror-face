import { useRef } from 'react';
import './App.css';
import useVideoStreams from './useVideoStreams';
import VideoComponent from './VideoComponent';

function App() {
  const videoRef1 = useRef<HTMLCanvasElement>(null);
  const videoRef2 = useRef<HTMLCanvasElement>(null);

  useVideoStreams([
    { ref: videoRef1, rotate: true },
    { ref: videoRef2, rotate: false },
  ]);

  return (
    <>
      <h1 className='h1'>WebRTC mirror 🪞</h1>
      <div className='video-container'>
        <div className='full'>
          <VideoComponent ref={videoRef1} />
          <h2 className='h2'>How people see you</h2>
        </div>
        <div className='divider'>
          <hr />
          VS
        </div>
        <div className='full mirror'>
          <VideoComponent ref={videoRef2} />
          <h2 className='h2'>Your face in the mirror</h2>
        </div>
      </div>
    </>
  );
}

export default App;
