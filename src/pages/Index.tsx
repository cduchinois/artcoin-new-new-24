import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { ArtDisplay } from "@/components/ArtDisplay";
import { Statistics } from "@/components/Statistics";
import { Navigation } from "@/components/Navigation";
import { Twitter, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue">
      <div className="container mx-auto px-4 py-8 text-center">
        <Navigation />

        <div className="mb-2 space-y-1">
          <div className="flex justify-center gap-2 text-3xl">
            🎨 💩 🎨 💩 🎨
          </div>
          <h1 className="text-4xl font-bold text-purple-900">ArtCoin</h1>
          <h2 className="text-2xl font-bold text-purple-800">ARTCOIN WILL FIX IT</h2>
          <p className="text-base text-purple-700 italic max-w-md mx-auto">
            "You probably won't be eligible for the unfair airdrop 
            due to your questionable taste, but you can farm some 
            by testing your artistic judgment!"
          </p>
          <div className="pt-1">
            <ConnectWalletButton />
          </div>
        </div>

        <ArtDisplay />
        <Statistics />

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

export default Index;