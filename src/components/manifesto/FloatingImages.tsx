import React from 'react';

const images = [
  '/lovable-uploads/a93cd07d-ad8e-4f52-be49-56e943f586a9.png',
  '/lovable-uploads/86d454a1-84ae-4168-b9f1-d558db6de51f.png',
  '/lovable-uploads/59a839a3-b59d-4abb-9e9d-d57ebe0aaf8f.png',
  '/lovable-uploads/0502e859-7e6c-4ae8-bfff-79e43b2b2845.png',
  '/lovable-uploads/de8ff1dc-3385-48a6-b706-f374fbbe6550.png',
  '/lovable-uploads/930a21a4-ccc0-44ad-b74f-2e824b18c665.png',
  '/lovable-uploads/4aa91d88-134a-49f2-92c1-4e2dbe306f61.png',
  '/lovable-uploads/93006b3d-c7fe-4df9-8b61-6f4c1f6ce6dc.png',
  '/lovable-uploads/de475294-a580-4550-8aa1-c68b7295e5b3.png',
  '/lovable-uploads/ce634809-3fd4-4fe9-bf2f-f18e2fc794b3.png',
  '/lovable-uploads/088f9119-5fd4-4bf3-a3c7-c2501e047025.png',
  '/lovable-uploads/02786f26-ba25-440b-a56d-bcbde72322ba.png',
  '/lovable-uploads/e22ca444-2cec-4317-b1bd-a2f1375e17f3.png',
  '/lovable-uploads/d1ca1cc7-1c31-47d8-a39a-976ff5f0eb0e.png',
  '/lovable-uploads/b91ee013-4581-4b5a-9a71-303bb4a32c3e.png',
  '/lovable-uploads/4de56b70-bb4f-48fe-94df-fdf1658af485.png',
  '/lovable-uploads/df783872-4606-40dd-969f-96eeed0f55b6.png',
  '/lovable-uploads/e3a9ae8d-b842-495e-8c1a-706ef38248e2.png',
  '/lovable-uploads/7015c80d-bd15-42b0-ae47-a79fbc54526c.png',
  '/lovable-uploads/21953fa7-ec45-4175-bf5d-0b31691ffc92.png',
  '/lovable-uploads/37b8e7db-0d7b-448a-a146-b2ab0526f0af.png',
  '/lovable-uploads/2c28ef0b-47dc-42b0-8acb-fde595635d70.png',
  '/lovable-uploads/278f6332-d838-4b9b-9790-21a3e830b668.png',
  '/lovable-uploads/8f0665a1-6032-4124-a785-72df54eff675.png',
  '/lovable-uploads/d1afd3d4-0e75-4a64-ac56-969e5af413cd.png',
];

export const FloatingImages = () => {
  // Create a grid system to avoid overlaps
  const gridSize = 5; // 5x5 grid
  const positions = Array(gridSize * gridSize).fill(null);
  
  // Assign random positions while maintaining minimum distance
  const getRandomPosition = (index: number) => {
    const gridX = (index % gridSize) * (100 / gridSize);
    const gridY = Math.floor(index / gridSize) * (100 / gridSize);
    
    // Add some randomness within the grid cell
    const x = gridX + (Math.random() * (100 / gridSize) * 0.6);
    const y = gridY + (Math.random() * (100 / gridSize) * 0.6);
    
    return { x, y };
  };

  // Determine if an image should be larger
  const getImageSize = (index: number) => {
    // Make every 5th image larger
    return index % 5 === 0 ? 'w-48 h-48' : 'w-32 h-32';
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {images.map((src, index) => {
        const pos = getRandomPosition(index);
        return (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${10 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              // Add margin-top to avoid overlapping with navigation
              marginTop: '200px'
            }}
          >
            <img
              src={src}
              alt=""
              className={`object-contain ${getImageSize(index)}`}
            />
          </div>
        );
      })}
    </div>
  );
};