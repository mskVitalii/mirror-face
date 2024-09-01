import { useEffect, RefObject } from 'react';



type UseVideoStreamsProps = (canvasRefs: {ref:RefObject<HTMLCanvasElement>, isMirror: boolean}[]) => void;

const useVideoStreams: UseVideoStreamsProps = (canvasRefs) => {
  useEffect(() => {
    const getStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        canvasRefs.forEach((canvasRef) => {
          if (canvasRef.ref.current) {
            const videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.playsInline = true;
            videoElement.play();
            videoElement.addEventListener('loadedmetadata', () => {
              if (canvasRef.ref.current) {
                const canvas = canvasRef.ref.current;
                const context = canvas.getContext('2d');

                // Save video proportions
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;

                const drawFrame = () => {
                  if (context) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                
                    if (canvasRef.isMirror) {
                      context.setTransform(1, 0, 0, 1, 0, 0); // Сброс трансформаций
                    } else {
                      context.setTransform(-1, 0, 0, 1, canvas.width, 0); // Зеркально по горизонтали
                    }
                
                    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                    videoElement.currentTime += 0.0416

                    if (!videoElement.paused && !videoElement.ended) {
                      requestAnimationFrame(drawFrame);
                    } else {
                      videoElement.play();
                      requestAnimationFrame(drawFrame);
                    }
                  }
                };
                

                drawFrame();
              }
            });
          }
        });
      } catch (err) {
        console.error('Error accessing the camera: ', err);
      }
    };

    getStream();

    return () => {
      canvasRefs.forEach((canvasRef) => {
        if (canvasRef.ref.current) {
          const stream = canvasRef.ref.current.captureStream();
          stream.getTracks().forEach((track) => track.stop());
        }
      });
    };
  }, [canvasRefs]);
};

export default useVideoStreams;
