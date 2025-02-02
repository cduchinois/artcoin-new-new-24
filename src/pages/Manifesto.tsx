import React from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Twitter, MessageCircle } from "lucide-react";
import { FloatingEmojis } from "@/components/manifesto/FloatingEmojis";
import { ArtistQuotes } from "@/components/manifesto/ArtistQuotes";
import { TeamSection } from "@/components/manifesto/TeamSection";
import { Roadmap } from "@/components/manifesto/Roadmap";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-pink via-artcoin-pink to-artcoin-pink/80 relative">
      <FloatingEmojis />

      <div className="container mx-auto px-4 text-center pb-12">
        <div className="pt-8">
          <Navigation />
        </div>

        <div className="max-w-3xl mx-auto space-y-8 prose prose-purple">
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h1 className="text-4xl font-graffiti mb-6 text-purple-900">🎨 The ArtCoin Manifesto 💩</h1>
            <div className="text-left space-y-4 font-graffiti">
              <p>Nobody wants to buy your Art?</p>
              <p>Is your NFT collection just a jpeg graveyard?</p>
              <p>You are fed up with cringe internet art shilling?</p>
              <p>Are you rekt with your crypto bag?</p>
              <p>Don't worry</p>
              <p>Artcoin will fix it 🚽</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-3xl font-graffiti mb-4 text-purple-900">What is ArtCoin?</h2>
            <div className="text-left font-graffiti">
              <p>ArtCoin is the world's first aesthetic prediction market, where art criticism meets crypto absurdity.</p>
              <p>The polymarket of aesthetic prediction.</p>
              <p>The tinder of the artworks.</p>
              <p>Using the $ARTCOIN token, users can vote on whether submitted artworks are "good art" or "bad art," creating a decentralized ecosystem of taste arbitration.</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-graffiti mb-4 text-purple-900">Core Mechanics</h2>
            <ul className="text-left list-disc pl-6 space-y-2 font-graffiti">
              <li>Submit artwork for 10,000 $ARTCOIN</li>
              <li>Farm $ARTCOIN by Voting daily on the artistic merit of submitted pieces</li>
              <li>Earn rewards for correctly predicting the community's aesthetic judgment</li>
              <li>Top-ranked "good art" and "bad art" receive $ARTCOIN rewards</li>
              <li>Connect your wallet to participate in daily voting sessions</li>
              <li>Join our Farcaster community for instant voting through frames</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-graffiti mb-4 text-purple-900">The Unfair Launch</h2>
            <div className="text-left font-graffiti">
              <p>All airdrops will be unfair, based of your taste regarding your nft collection.</p>
              <p className="mt-4">ex: If you own a CryptoPunk (x3 on your allocation), if you own an BoredApe (allocation divided by 2)</p>
              <p className="mt-4">The list is top secret. But if you send crypto to the team members we could tell you some alpha.</p>
            </div>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-graffiti mb-4 text-purple-900">White toilet paper</h2>
            <ol className="text-left list-decimal pl-6 space-y-2 font-graffiti">
              <li>Artcoin will fix it</li>
              <li>No taste no coins</li>
              <li>We will eradicate internet cringe (or make it infinitely worse, we haven't decided yet)</li>
              <li>Train an AI agent that can determine the best art and the worst art</li>
              <li>Make art criticism on the internet a battle fought exclusively with emojis and memes 🎨</li>
            </ol>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-graffiti mb-4 text-purple-900">The tokenomics plan</h2>
            <ul className="text-left list-disc pl-6 space-y-2 font-graffiti">
              <li>At 100M market cap, we will pixel-by-pixel tokenize Piero Manzoni's "Artist's Shit"</li>
              <li>At 500M we will Buy the Bored Apes one by one and send them to a burn address</li>
              <li>At 1B market cap, we will attempt to purchase the Mona Lisa</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <ArtistQuotes />
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <TeamSection />
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
            <Roadmap />
          </Card>

          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl italic text-purple-800 font-graffiti">
            <p>PS: If you've read this far, you're probably eligible for our unfair airdrop. Or not. We'll judge that too.</p>
          </Card>
        </div>

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
  );
};

export default Manifesto;