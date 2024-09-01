import { forwardRef } from 'react';
import './VideoComponent.css';

const VideoComponent = forwardRef<HTMLCanvasElement>((_, ref) => {
  return (
    <canvas
      ref={ref}
      className='canvas'
      style={{
        aspectRatio: '640 / 480',
        width: '100%', // Это масштабирует холст, сохраняя пропорции
        height: 'auto',
      }}
    />
  );
});

export default VideoComponent;
