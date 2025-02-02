import React, { useEffect, useState, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Twitter, MessageCircle, User, Users, List } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              {[
                { name: "Pablo Picasso", quote: "Every JPEG is art. The problem is how to remain bullish when the floor price drops.", image: "photo-1581092795360-fd1ca04f0952" },
                { name: "Jake Paul", quote: "My Pokémon cards are worth almost nothing today." },
                { name: "Vincent van Gogh", quote: "What would life be if we had no courage to ape into a rug-pull?" },
                { name: "Frida Kahlo", quote: "I mint tokens so they won't be forgotten, even if nobody buys them." },
                { name: "Leonardo da Vinci", quote: "Crypto is never finished, only abandoned wallets." },
                { name: "MrBeast", quote: "I just gave away 1,000 Ethereum to strangers because why not?" },
                { name: "Georgia O'Keeffe", quote: "I found I could say things with memes and shitposts that I couldn't say with traditional art—like 'gm' a thousand times." },
                { name: "Henri Matisse", quote: "Liquidity takes courage. Or at least a MetaMask login." },
                { name: "Andy Warhol", quote: "Don't think about the roadmap, just mint the NFT. Let everyone else decide if it's a scam. While they're deciding, mint more." },
                { name: "Claude Monet", quote: "I must have gas fees, always, and always." },
                { name: "Salvador Dalí", quote: "Have no fear of FOMO—you'll never beat the whales anyway." },
                { name: "Yayoi Kusama", quote: "With just one blockchain, nothing can be achieved. In the metaverse, there are tokens, apes, rugs, and hundreds of millions of Discord servers." }
              ].map((artist, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-artcoin-blue/20 hover:bg-artcoin-blue/30 transition-colors">
                  <Avatar className="w-12 h-12 border-2 border-artcoin-purple">
                    <AvatarImage src={artist.image ? `https://images.unsplash.com/${artist.image}` : undefined} />
                    <AvatarFallback>
                      <User className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="relative bg-white p-4 rounded-lg shadow-md before:content-[''] before:absolute before:left-[-8px] before:top-4 before:w-4 before:h-4 before:bg-white before:transform before:rotate-45">
                      <p className="italic mb-2">{artist.quote}</p>
                      <p className="font-bold text-purple-900">{artist.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Team Hierarchy Section */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl mt-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-900">The ArtCoin team Hierarchy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Marcel Ducoin", role: "the Unfair Art Monarch", description: "They who hold the most worthless JPEGs" },
                { name: "Pablo Picashflow", role: "Art Fixers", description: "They who judge the judges" },
                { name: "Claude MonETH", role: "Taste Architects", description: "They who shitpost in hexcode" },
                { name: "Human Bot Interns", role: "The Pretenders", description: "They who pretend to be AI pretending to be human" }
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-artcoin-purple/20 to-artcoin-blue/20 hover:from-artcoin-purple/30 hover:to-artcoin-blue/30 transition-all">
                  <div className="mb-4 p-4 rounded-full bg-artcoin-yellow/30">
                    <Users className="w-12 h-12 text-purple-900" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900">{member.name}</h3>
                  <p className="text-sm font-medium text-purple-700 mb-2">{member.role}</p>
                  <p className="text-sm text-purple-600 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Roadmap Section */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl mt-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-900">Future Roadmap (Maybe)</h2>
            <div className="relative">
              {[
                "Create the first on-chain certified museum of \"objectively bad art\"",
                "Host an IRL exhibition where all artworks are invisible but drinks are free",
                "Develop an AI art critic that becomes progressively nicer with each $ARTCOIN donation",
                "Create an NFT collection where each token is just the AI roasting other NFTs",
                "Launch a DAO where governance proposals must be written in emojis"
              ].map((step, index) => (
                <div key={index} className="relative flex items-center mb-8 last:mb-0">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-artcoin-purple/30" />
                  <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-artcoin-purple animate-pulse" />
                  <div className="ml-8 p-4 flex-1 rounded-lg bg-gradient-to-r from-artcoin-yellow/20 to-artcoin-blue/20 hover:from-artcoin-yellow/30 hover:to-artcoin-blue/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <List className="w-5 h-5 text-purple-900 flex-shrink-0" />
                      <p className="text-purple-900">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
