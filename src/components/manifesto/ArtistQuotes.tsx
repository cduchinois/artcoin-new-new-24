import React from "react";
import { Palette } from "lucide-react";

interface Quote {
  name: string;
  quote: string;
}

const quotes: Quote[] = [
  { name: "Pablo Picasso", quote: "Every JPEG is art. The problem is how to remain bullish when the floor price drops." },
  { name: "Vincent van Gogh", quote: "What would life be if we had no courage to ape into a rug-pull?" },
  { name: "Frida Kahlo", quote: "I mint tokens so they won't be forgotten, even if nobody buys them." },
  { name: "Leonardo da Vinci", quote: "Crypto is never finished, only abandoned wallets." },
  { name: "MrBeast", quote: "I just gave away 1,000 Ethereum to strangers because why not?" },
  { name: "Georgia O'Keeffe", quote: "I found I could say things with memes and shitposts that I couldn't say with traditional art—like 'gm' a thousand times." }
];

export const ArtistQuotes = () => {
  return (
    <div className="space-y-8 relative">
      <div className="flex items-center gap-2 mb-12">
        <Palette className="w-6 h-6 text-purple-900" />
        <h2 className="text-3xl font-graffiti text-purple-900">Inspirational Artist Quotes</h2>
        <span className="text-2xl">🎨</span>
      </div>

      <div className="space-y-6">
        {quotes.map((quote, index) => (
          <div 
            key={index}
            className={`max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105 ${
              index % 2 === 0 ? 'ml-0' : 'ml-auto'
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200">
              <p className="text-blue-900 font-graffiti text-lg mb-2">
                "{quote.quote}"
              </p>
              <p className="text-purple-900 font-graffiti text-right">
                - {quote.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute -z-10 inset-0">
        <div className="absolute top-12 left-4 text-yellow-400 text-2xl">✨</div>
        <div className="absolute bottom-24 left-12 text-pink-400 text-2xl">🎨</div>
        <div className="absolute top-1/3 right-8 text-purple-400 text-2xl">🎯</div>
      </div>
    </div>
  );
};