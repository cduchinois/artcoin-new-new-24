import React from "react";
import { User } from "lucide-react";

interface Quote {
  name: string;
  quote: string;
  position: "left" | "right";
}

const quotes: Quote[] = [
  { name: "Pablo Picasso", quote: "Every JPEG is art. The problem is how to remain bullish when the floor price drops.", position: "left" },
  { name: "Jake Paul", quote: "My Pokémon cards are worth almost nothing today.", position: "right" },
  { name: "Vincent van Gogh", quote: "What would life be if we had no courage to ape into a rug-pull?", position: "left" },
  { name: "Frida Kahlo", quote: "I mint tokens so they won't be forgotten, even if nobody buys them.", position: "right" },
  { name: "Leonardo da Vinci", quote: "Crypto is never finished, only abandoned wallets.", position: "left" },
  { name: "MrBeast", quote: "I just gave away 1,000 Ethereum to strangers because why not?", position: "right" },
  { name: "Georgia O'Keeffe", quote: "I found I could say things with memes and shitposts that I couldn't say with traditional art—like 'gm' a thousand times.", position: "left" },
  { name: "Henri Matisse", quote: "Liquidity takes courage. Or at least a MetaMask login.", position: "right" },
  { name: "Andy Warhol", quote: "Don't think about the roadmap, just mint the NFT. Let everyone else decide if it's a scam. While they're deciding, mint more.", position: "left" },
  { name: "Claude Monet", quote: "I must have gas fees, always, and always.", position: "right" },
  { name: "Salvador Dalí", quote: "Have no fear of FOMO—you'll never beat the whales anyway.", position: "left" },
  { name: "Yayoi Kusama", quote: "With just one blockchain, nothing can be achieved. In the metaverse, there are tokens, apes, rugs, and hundreds of millions of Discord servers.", position: "right" }
];

export const ArtistQuotes = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-graffiti text-purple-900 mb-8">What they are talking about ArtCoin</h2>
      <div className="grid gap-6">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className={`flex items-start gap-4 ${quote.position === 'right' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`flex-1 ${quote.position === 'right' ? 'text-right' : 'text-left'}`}>
              <div className={`relative p-4 rounded-lg shadow-md ${
                quote.position === 'right' 
                  ? 'bg-artcoin-blue before:right-[-8px] before:transform before:rotate-45' 
                  : 'bg-artcoin-yellow before:left-[-8px] before:transform before:rotate-45'
              } before:content-[''] before:absolute before:top-4 before:w-4 before:h-4 before:bg-inherit`}>
                <p className="font-graffiti italic mb-2">{quote.quote}</p>
                <p className="font-bold text-purple-900">{quote.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};