// components/Globe.tsx
import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent: React.FC = () => {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 2;

      // Prevent mouse scroll from affecting the globe zoom
      globeRef.current.controls().enableZoom = false;
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none', // Prevent interaction blocking page scroll
      }}
    >
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        onZoom={() => {}}
        // onMouseWheel prop removed as it is not valid
      />
    </div>
  );
};

export default GlobeComponent;
