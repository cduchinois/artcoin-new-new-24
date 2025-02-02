import React, { useEffect, useState, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Twitter, MessageCircle } from "lucide-react";

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

        <div className="max-w-3xl mx-auto space-y-8 prose prose-purple">
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h1 className="text-4xl font-bold mb-6 text-purple-900">🎨 The ArtCoin Manifesto 💩</h1>
            <div className="text-left space-y-4">
              <p>Nobody wants to buy your Art?</p>
              <p>Is your NFT collection just a jpeg graveyard?</p>
              <p>You are fed up with cringe internet art shilling?</p>
              <p>Are you rekt with your crypto bag?</p>
              <p>Don't worry</p>
              <p>Artcoin will fix it 🚽</p>
            </div>
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">What is ArtCoin?</h2>
            <div className="text-left">
              <p>ArtCoin is the world's first aesthetic prediction market, where art criticism meets crypto absurdity.</p>
              <p>The polymarket of aesthetic prediction.</p>
              <p>The tinder of the artworks.</p>
              <p>Using the $ARTCOIN token, users can vote on whether submitted artworks are "good art" or "bad art," creating a decentralized ecosystem of taste arbitration.</p>
            </div>
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Core Mechanics</h2>
            <ul className="text-left list-disc pl-6 space-y-2">
              <li>Submit artwork for 10,000 $ARTCOIN</li>
              <li>Farm $ARTCOIN by Voting daily on the artistic merit of submitted pieces</li>
              <li>Earn rewards for correctly predicting the community's aesthetic judgment</li>
              <li>Top-ranked "good art" and "bad art" receive $ARTCOIN rewards</li>
              <li>Connect your wallet to participate in daily voting sessions</li>
              <li>Join our Farcaster community for instant voting through frames</li>
            </ul>
          </Card>

          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg border-4 border-artcoin-yellow bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Artwork Placeholder</span>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">The Unfair Launch</h2>
            <div className="text-left">
              <p>All airdrops will be unfair, based of your taste regarding your nft collection.</p>
              <p className="mt-4">ex: If you own a CryptoPunk (x3 on your allocation), if you own an BoredApe (allocation divided by 2)</p>
              <p className="mt-4">The list is top secret. But if you send crypto to the team members we could tell you some alpha.</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">White toilet paper</h2>
            <ol className="text-left list-decimal pl-6 space-y-2">
              <li>Artcoin will fix it</li>
              <li>No taste no coins</li>
              <li>We will eradicate internet cringe (or make it infinitely worse, we haven't decided yet)</li>
              <li>Train an AI agent that can determine the best art and the worst art</li>
              <li>Make art criticism on the internet a battle fought exclusively with emojis and memes 🎨</li>
            </ol>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">The tokenomics plan</h2>
            <ul className="text-left list-disc pl-6 space-y-2">
              <li>At 100M market cap, we will pixel-by-pixel tokenize Piero Manzoni's "Artist's Shit"</li>
              <li>At 500M we will Buy the Bored Apes one by one and send them to a burn address</li>
              <li>At 1B market cap, we will attempt to purchase the Mona Lisa</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Artists Quotes</h2>
            <div className="text-left space-y-6">
              <div>
                <p className="italic">"Every JPEG is art. The problem is how to remain bullish when the floor price drops."</p>
                <p className="font-bold mt-1">- Pablo Picasso</p>
              </div>
              <div>
                <p>"My Pokémon cards are worth almost nothing today."</p>
                <p className="font-bold mt-1">- Jake Paul</p>
              </div>
              <div>
                <p className="italic">"What would life be if we had no courage to ape into a rug-pull?"</p>
                <p className="font-bold mt-1">- Vincent van Gogh</p>
              </div>
              <div>
                <p className="italic">"I mint tokens so they won't be forgotten, even if nobody buys them."</p>
                <p className="font-bold mt-1">- Frida Kahlo</p>
              </div>
              <div>
                <p className="italic">"Crypto is never finished, only abandoned wallets."</p>
                <p className="font-bold mt-1">- Leonardo da Vinci</p>
              </div>
              <div>
                <p className="italic">"I just gave away 1,000 Ethereum to strangers because why not?"</p>
                <p className="font-bold mt-1">- MrBeast</p>
              </div>
              <div>
                <p className="italic">"I found I could say things with memes and shitposts that I couldn't say with traditional art—like 'gm' a thousand times."</p>
                <p className="font-bold mt-1">- Georgia O'Keeffe</p>
              </div>
              <div>
                <p className="italic">"Liquidity takes courage. Or at least a MetaMask login."</p>
                <p className="font-bold mt-1">- Henri Matisse</p>
              </div>
              <div>
                <p className="italic">"Don't think about the roadmap, just mint the NFT. Let everyone else decide if it's a scam. While they're deciding, mint more."</p>
                <p className="font-bold mt-1">- Andy Warhol</p>
              </div>
              <div>
                <p className="italic">"I must have gas fees, always, and always."</p>
                <p className="font-bold mt-1">- Claude Monet</p>
              </div>
              <div>
                <p className="italic">"Have no fear of FOMO—you'll never beat the whales anyway."</p>
                <p className="font-bold mt-1">- Salvador Dalí</p>
              </div>
              <div>
                <p className="italic">"With just one blockchain, nothing can be achieved. In the metaverse, there are tokens, apes, rugs, and hundreds of millions of Discord servers."</p>
                <p className="font-bold mt-1">- Yayoi Kusama</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Build the Artcoin Metaverse Museum together</h2>
            <ul className="text-left list-disc pl-6 space-y-2">
              <li>No entrance</li>
              <li>No exit</li>
              <li>No art</li>
              <li>Just vibes</li>
              <li>(Requires 100% token supply to maybe see what's inside)</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">The ArtCoin team Hierarchy</h2>
            <ul className="text-left space-y-4">
              <li><strong>Marcel Ducoin</strong>: the Unfair Art Monarch: They who hold the most worthless JPEGs</li>
              <li><strong>Pablo Picashflow:</strong> Art Fixers: They who judge the judges</li>
              <li><strong>Claude MonETH:</strong> Taste Architects: They who shitpost in hexcode</li>
              <li><strong>Human Bot Interns:</strong> They who pretend to be AI pretending to be human</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Future Roadmap (Maybe)</h2>
            <ul className="text-left list-disc pl-6 space-y-2">
              <li>Create the first on-chain certified museum of "objectively bad art"</li>
              <li>Host an IRL exhibition where all artworks are invisible but drinks are free</li>
              <li>Develop an AI art critic that becomes progressively nicer with each $ARTCOIN donation</li>
              <li>Create an NFT collection where each token is just the AI roasting other NFTs</li>
              <li>Launch a DAO where governance proposals must be written in emojis</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl italic text-purple-800">
            <p>PS: If you've read this far, you're probably eligible for our unfair airdrop. Or not. We'll judge that too.</p>
          </Card>
        </div>

        <footer className="mt-12 text-purple-700 space-y-4">
          <p>© 2025 ArtCoin - Making Web3 Weird Again ✨</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://x.com/artcoin_base" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://t.me/ahahahartcoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <div className="flex justify-center gap-2 text-2xl">
            🎨 💩 🎨 💩 🎨
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Manifesto;