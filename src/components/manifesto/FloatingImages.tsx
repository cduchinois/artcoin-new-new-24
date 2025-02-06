import React, { useEffect, useState, useCallback } from "react";

interface FloatingImage {
  id: number;
  x: number;
  y: number;
  src: string;
  size: number;
  xSpeed: number;
  ySpeed: number;
  rotation: number;
  rotationSpeed: number;
}

export const FloatingImages = () => {
  const [images, setImages] = useState<FloatingImage[]>([]);
  const imageSources = [
    "/lovable-uploads/1830a4b4-6944-49b7-be0b-68cd2be441eb.png",
    "/lovable-uploads/bc051da6-277e-4a8c-aade-663de74c2bdb.png",
    "/lovable-uploads/3b9a7b79-e5cf-4618-81da-607f23403d4a.png",
    "/lovable-uploads/c60fbf5f-723d-48b3-9a4f-4975a094d031.png",
    "/lovable-uploads/8d339d1c-7504-4241-8ff2-e318bc1cf10e.png"
  ];

  const createImage = useCallback((windowWidth: number, windowHeight: number): FloatingImage => {
    return {
      id: Math.random(),
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      src: imageSources[Math.floor(Math.random() * imageSources.length)],
      size: Math.random() * (150 - 100) + 100,
      xSpeed: (Math.random() - 0.5) * 2,
      ySpeed: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      setImages(Array.from({ length: 5 }, () => createImage(width, height)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [createImage]);

  useEffect(() => {
    const updateImages = () => {
      setImages(prevImages => 
        prevImages.map(image => {
          let newX = image.x + image.xSpeed;
          let newY = image.y + image.ySpeed;
          let newXSpeed = image.xSpeed;
          let newYSpeed = image.ySpeed;
          let newRotation = image.rotation + image.rotationSpeed;

          const height = document.documentElement.scrollHeight;
          if (newX < 0 || newX > window.innerWidth) newXSpeed *= -1;
          if (newY < 0 || newY > height) newYSpeed *= -1;

          return {
            ...image,
            x: newX,
            y: newY,
            xSpeed: newXSpeed,
            ySpeed: newYSpeed,
            rotation: newRotation
          };
        })
      );
    };

    const animationFrame = setInterval(updateImages, 50);
    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 40 }}>
      {images.map(image => (
        <div
          key={image.id}
          className="absolute select-none opacity-20 hover:opacity-40 transition-opacity duration-300"
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
            width: `${image.size}px`,
            height: `${image.size}px`,
            transform: `translate(-50%, -50%) rotate(${image.rotation}deg)`,
          }}
        >
          <img 
            src={image.src} 
            alt="Floating artwork"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};