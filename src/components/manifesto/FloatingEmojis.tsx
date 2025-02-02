import React, { useEffect, useState, useCallback } from "react";

interface Emoji {
  id: number;
  x: number;
  y: number;
  text: string;
  size: number;
  xSpeed: number;
  ySpeed: number;
}

export const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const emojisText = ["🎨", "💩", "🚽"];

  const createEmoji = useCallback((windowWidth: number, windowHeight: number): Emoji => {
    const speedMultiplier = Math.random() > 0.5 ? 1 : 2;
    return {
      id: Math.random(),
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      text: emojisText[Math.floor(Math.random() * emojisText.length)],
      size: Math.random() * (30 - 18) + 18,
      xSpeed: (Math.random() - 0.5) * 4 * speedMultiplier,
      ySpeed: (Math.random() - 0.5) * 4 * speedMultiplier
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      setEmojis(Array.from({ length: 15 }, () => createEmoji(width, height)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [createEmoji]);

  useEffect(() => {
    const updateEmojis = () => {
      setEmojis(prevEmojis => 
        prevEmojis.map(emoji => {
          let newX = emoji.x + emoji.xSpeed;
          let newY = emoji.y + emoji.ySpeed;
          let newXSpeed = emoji.xSpeed;
          let newYSpeed = emoji.ySpeed;

          const height = document.documentElement.scrollHeight;
          if (newX < 0 || newX > window.innerWidth) newXSpeed *= -1;
          if (newY < 0 || newY > height) newYSpeed *= -1;

          return {
            ...emoji,
            x: newX,
            y: newY,
            xSpeed: newXSpeed,
            ySpeed: newYSpeed
          };
        })
      );
    };

    const animationFrame = setInterval(updateEmojis, 50);
    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="absolute select-none"
          style={{
            left: `${emoji.x}px`,
            top: `${emoji.y}px`,
            fontSize: `${emoji.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {emoji.text}
        </div>
      ))}
    </div>
  );
};