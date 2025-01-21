import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion, useMotionValue, useTransform } from "framer-motion";
import memeData from "@/data/memes.json";

const funnyResponses = {
  good: [
    "You've got exquisite taste! Here's",
    "A true art connoisseur! Take",
    "Your art knowledge is showing! Enjoy",
    "The Louvre called, they want your opinion! Here's",
  ],
  bad: [
    "Brutal honesty pays! Here's",
    "Someone had to say it! Take",
    "The artist might cry, but here's",
    "Keeping it real! Enjoy",
  ],
};

export const ArtDisplay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [totalArtcoins, setTotalArtcoins] = useState(0);
  const { toast } = useToast();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const getRandomReward = () => Math.floor(Math.random() * 91) + 10;
  const getRandomResponse = (type: 'good' | 'bad') => 
    funnyResponses[type][Math.floor(Math.random() * funnyResponses[type].length)];

  const handleVote = (isGood: boolean) => {
    const reward = getRandomReward();
    const response = getRandomResponse(isGood ? 'good' : 'bad');
    
    setTotalVotes(prev => prev + 1);
    setTotalArtcoins(prev => prev + reward);
    
    const voteEl = document.createElement('div');
    voteEl.setAttribute('data-vote', 'true');
    voteEl.style.display = 'none';
    document.body.appendChild(voteEl);

    const rewardEl = document.createElement('div');
    rewardEl.setAttribute('data-reward', reward.toString());
    rewardEl.style.display = 'none';
    document.body.appendChild(rewardEl);
    
    toast({
      title: isGood ? "Great Art! 🎨" : "Bad Art! 💩",
      description: `${response} ${reward} $ARTCOIN! 🪙`,
    });
    
    setCurrentImageIndex((prev) => 
      (prev + 1) % memeData.length
    );
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      handleVote(true);
    } else if (info.offset.x < -threshold) {
      handleVote(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <motion.div 
        className="relative aspect-square rounded-3xl overflow-hidden border-4 border-artcoin-purple bg-white shadow-xl"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, rotate, opacity }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        <img
          src={memeData[currentImageIndex].image_url}
          alt={memeData[currentImageIndex].cast_caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p className="font-bold">{memeData[currentImageIndex].cast_author_displayname}</p>
          <p className="text-sm">{memeData[currentImageIndex].cast_caption}</p>
        </div>
      </motion.div>
      
      <h2 className="text-2xl font-bold text-purple-800 mt-6 mb-4">
        🎨 Good Art or 💩 Bad Art?
      </h2>
      
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => handleVote(true)}
          className="text-4xl bg-transparent hover:bg-green-100/20 px-8 py-6 rounded-full transition-all hover:scale-105 border border-white/30"
        >
          🎨
        </Button>
        
        <Button
          onClick={() => handleVote(false)}
          className="text-4xl bg-transparent hover:bg-pink-100/20 px-8 py-6 rounded-full transition-all hover:scale-105 border border-white/30"
        >
          💩
        </Button>
      </div>
    </div>
  );
};