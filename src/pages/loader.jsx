import { useEffect, useRef } from "react";
import "./style.css";

export default function Loader() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.style.transition = "opacity 1s ease";

    const timer1 = setTimeout(() => {
      video.style.opacity = "0";

      const timer2 = setTimeout(() => {
        video.style.display = "none";
      }, 1000);

      return () => clearTimeout(timer2);
    }, 5000);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        className="loaderImg"
        src="/images/loader.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
