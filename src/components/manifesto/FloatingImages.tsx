import React from 'react';

const images = [
  '/lovable-uploads/a93cd07d-ad8e-4f52-be49-56e943f586a9.png',
  '/lovable-uploads/86d454a1-84ae-4168-b9f1-d558db6de51f.png',
  '/lovable-uploads/59a839a3-b59d-4abb-9e9d-d57ebe0aaf8f.png',
  '/lovable-uploads/0502e859-7e6c-4ae8-bfff-79e43b2b2845.png',
  '/lovable-uploads/de8ff1dc-3385-48a6-b706-f374fbbe6550.png',
  '/lovable-uploads/930a21a4-ccc0-44ad-b74f-2e824b18c665.png',
  '/lovable-uploads/4aa91d88-134a-49f2-92c1-4e2dbe306f61.png',
];

export const FloatingImages = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10 hover:opacity-20 transition-opacity"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float ${10 + Math.random() * 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-32 h-32 object-contain mix-blend-multiply"
          />
        </div>
      ))}
    </div>
  );
};