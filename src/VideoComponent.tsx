import React, { useRef, useEffect } from 'react';

type Props = {
  rotate?: boolean;
};
const VideoComponent: React.FC<Props> = ({ rotate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          videoRef.current!.srcObject = stream;
          videoRef.current!.play();
        })
        .catch((err: Error) => {
          console.error('Error accessing the camera: ', err);
        });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      style={{
        transform: rotate ? '' : 'scaleX(-1)',
        width: '100%',
        height: 'auto',
      }}
      autoPlay
      muted
    />
  );
};

export default VideoComponent;
