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
        <source src="/binary.mp4" type="video/mp4" />
      </video>
      {/* Base dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      {/* Subtle emerald tint to match binary theme */}
      <div className="absolute inset-0 bg-emerald-400/10 mix-blend-overlay pointer-events-none"></div>
      {/* Soft vignette for focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      ></div>
    </div>
  );
};

export default VideoBackground;