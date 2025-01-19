import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { ArtDisplay } from "@/components/ArtDisplay";
import { Statistics } from "@/components/Statistics";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="mb-8 space-y-4">
          <div className="flex justify-center gap-2 text-4xl font-bold text-purple-900">
            🎨 💩 🎨 💩 🎨
          </div>
          <h1 className="text-5xl font-bold text-purple-900">ArtCoin</h1>
          <h2 className="text-3xl font-bold text-purple-800">ARTCOIN WILL FIX IT</h2>
          <p className="text-lg text-purple-700 italic">
            "You probably won't be eligible for the unfair airdrop due to your questionable taste,
            but you can farm some by testing your artistic judgment!"
          </p>
          <div className="pt-4">
            <ConnectWalletButton />
          </div>
        </div>

        <ArtDisplay />
        <Statistics />

        <footer className="mt-12 text-purple-700 space-y-2">
          <p>© 2025 ArtCoin - Making Web3 Weird Again ✨</p>
          <div className="flex justify-center gap-2 text-2xl font-bold text-purple-900">
            🎨 💩 🎨 💩 🎨
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;