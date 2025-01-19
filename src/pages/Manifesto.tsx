import React, { useEffect, useState, useCallback } from "react";
import { Navigation } from "@/components/Navigation";

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
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue relative">
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

        <div className="prose prose-lg max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl relative z-0 text-left">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">What is ArtCoin?</h2>
          <p className="text-lg mb-6">
            ArtCoin is the world's first aesthetic prediction market, where art criticism meets crypto absurdity.
          </p>
          <p className="text-lg mb-6">The polymarket of aesthetic prediction.</p>
          <p className="text-lg mb-6">The tinder of the artworks.</p>
          <p className="text-lg mb-8">
            Using the $ARTCOIN token, users can vote on whether submitted artworks are "good art" or "bad art," creating a decentralized ecosystem of taste arbitration.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">Core Mechanics</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Submit artwork for 10,000 $ARTCOIN</li>
            <li>Vote daily on the artistic merit of submitted pieces</li>
            <li>Earn rewards for correctly predicting the community's aesthetic judgment</li>
            <li>Top-ranked "good art" and "bad art" receive $ARTCOIN rewards</li>
            <li>Connect your wallet to participate in daily voting sessions</li>
            <li>Join our Farcaster community for instant voting through frames</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The Unfair Launch</h2>
          <p className="mb-4">All airdrops will be unfair, based of your taste regarding your nft collection.</p>
          <p className="mb-8">
            ex: If you own a CryptoPunk (x3 on your allocation), if you own an BoredApe (allocation divided by 2)
          </p>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The Path to Aesthetic Liberation</h2>
          <ol className="list-decimal pl-6 mb-8">
            <li>Artcoin will fix it</li>
            <li>The unfair launch will judge your NFT collection's taste level</li>
            <li>We will eradicate internet cringe (or make it infinitely worse, we haven't decided)</li>
            <li>Every critique will be delivered by our AI agent, trained on a diet of pure sass</li>
            <li>The community will vote exclusively through emojis 🎨</li>
          </ol>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The Sacred Prophecies</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>At 100M market cap, we will pixel-by-pixel tokenize Piero Manzoni's "Artist's Shit"</li>
            <li>At 500M market cap, we will turn it upside down</li>
            <li>At 1B market cap, we will attempt to purchase the Mona Lisa</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The Temple of Bad Taste</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Holders can sacrifice their worthless NFTs to the void</li>
            <li>Each sacrifice strengthens the temple's aesthetic judgment</li>
            <li>The temple accepts prayers in the form of code snippets and misattributed art quotes</li>
            <li>"Art is what you can get away with" - Leonardo da Vinci (probably)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The Artcoin Metaverse Museum</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>No entrance</li>
            <li>No exit</li>
            <li>No art</li>
            <li>Just vibes</li>
            <li>(Requires 100% token supply to maybe see what's inside)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The ArtCoin Hierarchy</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Unfair Art Monarch: They who hold the most worthless JPEGs</li>
            <li>Art Fixers: They who judge the judges</li>
            <li>Taste Architects: They who shitpost in hexcode</li>
            <li>Human Bot Interns: They who pretend to be AI pretending to be human</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">Future Roadmap (Maybe)</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Create the first on-chain certified museum of "objectively bad art"</li>
            <li>Host an IRL exhibition where all artworks are invisible but drinks are free</li>
            <li>Develop an AI art critic that becomes progressively nicer with each $ARTCOIN donation</li>
            <li>Create an NFT collection where each token is just the AI roasting other NFTs</li>
            <li>Launch a DAO where governance proposals must be written in emojis</li>
            <li>Build a virtual museum where visitors can "vandalize" masterpieces with digital crayons</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-900">The Final Truth</h2>
          <p className="mb-4">
            The more you scroll, the less this makes sense. Just like art. Just like crypto. Just like life.
          </p>
          <p className="mb-8">
            Remember: Your taste will be judged. Your judgment will be judged. Everything is art. Nothing is art. Art will fix it. Or break it. We're not sure yet.
          </p>
          <p className="italic">
            PS: If you've read this far, you're probably eligible for our unfair airdrop. Or not. We'll judge that too.
          </p>
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
