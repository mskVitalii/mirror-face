import { forwardRef } from 'react';
import './VideoComponent.css';

type Props = {
  isMirror?: true;
};

const VideoComponent = forwardRef<HTMLCanvasElement, Props>(
  ({ isMirror }, ref) => {
    return (
      <div className={`full ${isMirror ? 'mirror' : ''}`}>
        <canvas
          ref={ref}
          className='canvas'
          style={{
            width: '100%', // Это масштабирует холст, сохраняя пропорции
            height: 'auto',
          }}
        />
        <h2 className='h2'>
          {isMirror ? 'Your face in the mirror' : 'How people see you'}
        </h2>
      </div>
    );
  }
);

export default VideoComponent;
