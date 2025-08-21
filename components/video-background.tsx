// components/video-background.tsx
import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default VideoBackground;