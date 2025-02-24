import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SplineScene: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      
      // Adjust scaling based on viewport width
      if (screenWidth < 768) {
        setScale(0.7); // Zoom out for mobile
      } else if (screenWidth < 1024) {
        setScale(0.85); // Slight zoom-out for tablets
      } else {
        setScale(1); // Default scale for larger screens
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div 
      className="spline-container" 
      style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
    >
      <Spline scene="https://prod.spline.design/8DfhO7IyUPI07Ddb/scene.splinecode" />
    </div>
  );
};

export default SplineScene;
