import React from "react";
import { List } from "lucide-react";

interface RoadmapItem {
  title: string;
}

const roadmapItems: RoadmapItem[] = [
  { title: "Create the first on-chain certified museum of \"objectively bad art\"" },
  { title: "Host an IRL exhibition where all artworks are invisible but drinks are free" },
  { title: "Develop an AI art critic that becomes progressively nicer with each $ARTCOIN donation" },
  { title: "Create an NFT collection where each token is just the AI roasting other NFTs" },
  { title: "Launch a DAO where governance proposals must be written in emojis" }
];

export const Roadmap = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-sans bg-gradient-rainbow from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer mb-8">Future Roadmap (Maybe)</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-artcoin-purple/30" />
        {roadmapItems.map((item, index) => (
          <div key={index} className="relative flex items-center mb-8 last:mb-0">
            <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-artcoin-purple animate-pulse" />
            <div className="ml-8 p-4 flex-1 rounded-lg bg-gradient-to-r from-artcoin-yellow/20 to-artcoin-blue/20 hover:from-artcoin-yellow/30 hover:to-artcoin-blue/30 transition-colors">
              <div className="flex items-center gap-3">
                <List className="w-5 h-5 text-purple-900 flex-shrink-0" />
                <p className="text-purple-900 font-sans">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};