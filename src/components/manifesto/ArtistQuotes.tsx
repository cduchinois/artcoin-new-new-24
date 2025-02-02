import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface Quote {
  name: string;
  quote: string;
  image?: string;
}

const quotes: Quote[] = [
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
];

export const ArtistQuotes = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-graffiti text-purple-900 mb-8">Artist Quotes</h2>
      <div className="grid gap-6">
        {quotes.map((artist, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/80 hover:bg-white/90 transition-colors shadow-lg transform hover:-translate-y-1">
            <Avatar className="w-12 h-12 border-2 border-artcoin-purple">
              <AvatarImage src={artist.image ? `https://images.unsplash.com/${artist.image}` : undefined} />
              <AvatarFallback>
                <User className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="relative bg-artcoin-yellow p-4 rounded-lg shadow-md before:content-[''] before:absolute before:left-[-8px] before:top-4 before:w-4 before:h-4 before:bg-artcoin-yellow before:transform before:rotate-45">
                <p className="font-graffiti italic mb-2">{artist.quote}</p>
                <p className="font-bold text-purple-900">{artist.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};