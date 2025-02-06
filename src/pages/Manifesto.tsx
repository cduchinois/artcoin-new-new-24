import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Twitter, MessageCircle } from "lucide-react";
import { FloatingEmojis } from "@/components/manifesto/FloatingEmojis";
import { ArtistQuotes } from "@/components/manifesto/ArtistQuotes";
import { TeamSection } from "@/components/manifesto/TeamSection";
import { Roadmap } from "@/components/manifesto/Roadmap";
import { FloatingImages } from "@/components/manifesto/FloatingImages";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-pink via-artcoin-pink to-artcoin-pink/80 relative">
      <FloatingImages />
      <FloatingEmojis />

      <div className="container mx-auto px-4 text-center pb-12 relative z-10">
        <div className="pt-8">
          <Navigation />
        </div>

        <div className="max-w-3xl mx-auto space-y-8 prose prose-purple">
          <div className="p-6 backdrop-blur-sm shadow-xl">
            <h1 className="text-4xl font-sans mb-6 bg-gradient-rainbow from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-shimmer">🎨 The ArtCoin Manifesto 💩</h1>
            <div className="text-left space-y-4 font-sans">
              <p>Nobody wants to buy your Art?</p>
              <p>Is your NFT collection just a jpeg graveyard?</p>
              <p>You are fed up with cringe internet art shilling?</p>
              <p>Are you rekt with your crypto bag?</p>
              <p>Don't worry</p>
              <p>Artcoin will fix it 🚽</p>
            </div>
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-3xl font-sans mb-4 bg-gradient-rainbow from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">What is ArtCoin?</h2>
            <div className="text-left font-sans">
              <p>ArtCoin is the world's first aesthetic prediction market, where art criticism meets crypto absurdity.</p>
              <p>The polymarket of aesthetic prediction.</p>
              <p>The tinder of the artworks.</p>
              <p>Using the $ARTCOIN token, users can vote on whether submitted artworks are "good art" or "bad art," creating a decentralized ecosystem of taste arbitration.</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-sans mb-4 bg-gradient-rainbow from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-shimmer">Core Mechanics</h2>
            <ul className="text-left list-disc pl-6 space-y-2 font-sans">
              <li>Submit artwork for 10,000 $ARTCOIN</li>
              <li>Farm $ARTCOIN by Voting daily on the artistic merit of submitted pieces</li>
              <li>Earn rewards for correctly predicting the community's aesthetic judgment</li>
              <li>Top-ranked "good art" and "bad art" receive $ARTCOIN rewards</li>
              <li>Connect your wallet to participate in daily voting sessions</li>
              <li>Join our Farcaster community for instant voting through frames</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-sans mb-4 bg-gradient-rainbow from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-shimmer">The Unfair Launch</h2>
            <div className="text-left font-sans">
              <p>All airdrops will be unfair, based of your taste regarding your nft collection.</p>
              <p className="mt-4">ex: If you own a CryptoPunk (x3 on your allocation), if you own an BoredApe (allocation divided by 2)</p>
              <p className="mt-4">The list is top secret. But if you send crypto to the team members we could tell you some alpha.</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-sans mb-4 bg-gradient-rainbow from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-shimmer">White toilet paper</h2>
            <ol className="text-left list-decimal pl-6 space-y-2 font-sans">
              <li>Artcoin will fix it</li>
              <li>No taste no coins</li>
              <li>We will eradicate internet cringe (or make it infinitely worse, we haven't decided yet)</li>
              <li>Train an AI agent that can determine the best art and the worst art</li>
              <li>Make art criticism on the internet a battle fought exclusively with emojis and memes 🎨</li>
            </ol>
          </Card>

          <div className="backdrop-blur-sm">
            <ArtistQuotes />
          </div>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <TeamSection />
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <Roadmap />
          </Card>

          <footer className="mt-12 text-purple-700 space-y-4">
            <p className="font-graffiti">© 2025 ArtCoin - Making Web3 Weird Again ✨</p>
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
    </div>
  );
};

export default Manifesto;
