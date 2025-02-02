import React, { useEffect, useState, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";

interface Emoji {
  id: number;
  x: number;
  y: number;
  text: string;
  size: number;
  xSpeed: number;
  ySpeed: number;
}

const Manifesto = () => {
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
      const height = document.documentElement.scrollHeight; // Use full document height
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
    <div className="min-h-screen bg-gradient-to-br from-artcoin-pink via-artcoin-pink to-artcoin-pink/80 relative">
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

      <div className="container mx-auto px-4 text-center pb-12">
        <div className="pt-8">
          <Navigation />
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-purple-900 flex items-center justify-center gap-2">
              What is ArtCoin? 🤔
            </h2>
            <p className="text-lg">
              ArtCoin is the world's first aesthetic prediction market, where art criticism meets crypto absurdity. The polymarket of aesthetic prediction. The tinder of the artworks.
            </p>
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900 flex items-center justify-center gap-2">
              ⚡ Core Mechanics ⚡
            </h2>
            <ul className="text-left space-y-2">
              <li>Submit artwork for 10,000 $ARTCOIN</li>
              <li>Form $ARTCOIN by Voting daily</li>
              <li>Earn rewards for correctly predicting the community's aesthetic judgment</li>
            </ul>
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl italic text-purple-800">
            "I must tokens so they won't be forgotten, even if nobody buys them." - Frida Kahlo
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900 flex items-center justify-center gap-2">
              🚀 The Unfair Launch 🤪
            </h2>
            <div className="text-left">
              <p>All airdrops will be unfair, based of your taste regarding your nft collection.</p>
              <ul className="mt-2 space-y-1">
                <li>If you own a CryptoPunk (x3 on your allocation)</li>
                <li>If you own an BoredApe (allocation divided by 2)</li>
              </ul>
            </div>
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900 flex items-center justify-center gap-2">
              🏛️ Build the Artcoin Metaverse Museum Together 🏛️
            </h2>
            <ul className="text-left space-y-1">
              <li>No entrance</li>
              <li>No exit</li>
              <li>No art</li>
              <li>Just vibes</li>
            </ul>
          </Card>
        </div>

        <footer className="mt-12 mb-12 text-purple-700 space-y-2">
          <p>© 2025 ArtCoin - Making Web3 Weird Again ✨</p>
          <div className="flex justify-center gap-2 text-2xl">
            🎨 💩 🎨 💩 🎨
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Manifesto;
