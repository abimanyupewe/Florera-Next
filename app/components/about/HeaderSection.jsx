"use client";

import React, { useEffect, useRef } from "react";

const HeaderSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ketika video masuk viewport
            video.muted = false;
            video.play().catch(e => console.log("Autoplay error:", e));
          } else {
            // Ketika video keluar viewport
            video.muted = true;
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div>
      <div className="w-full h-auto lg:h-screen relative pt-16">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted
          src="/videos/Profile-Florera.mp4"
          className="h-auto lg:h-screen w-full object-cover"
          aria-label="Florera Banner"
        />
      </div>
    </div>
  );
};

export default HeaderSection;