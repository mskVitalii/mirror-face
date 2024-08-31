import './App.css';
import VideoComponent from './VideoComponent';

function App() {
  return (
    <>
      <h1 className='h1'>WebRTC mirror 🪞</h1>
      <div className='video-container'>
        <div>
          <VideoComponent rotate />
          <h2>How people see you</h2>
        </div>
        <div className='divider'>
          <hr />
          VS
        </div>
        <div>
          <VideoComponent />
          <h2>Your face in the mirror</h2>
        </div>
      </div>
    </>
  );
}

export default App;
