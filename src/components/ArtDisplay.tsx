import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion, useMotionValue, useTransform } from "framer-motion";

const placeholderImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
];

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

  const getRandomReward = () => Math.floor(Math.random() * 91) + 10; // Random between 10-100
  const getRandomResponse = (type: 'good' | 'bad') => 
    funnyResponses[type][Math.floor(Math.random() * funnyResponses[type].length)];

  const handleVote = (isGood: boolean) => {
    const reward = getRandomReward();
    const response = getRandomResponse(isGood ? 'good' : 'bad');
    
    setTotalVotes(prev => prev + 1);
    setTotalArtcoins(prev => prev + reward);
    
    toast({
      title: isGood ? "Great Art! 🎨" : "Bad Art! 💩",
      description: `${response} ${reward} $ARTCOIN! 🪙`,
    });
    
    setCurrentImageIndex((prev) => 
      (prev + 1) % placeholderImages.length
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
          src={placeholderImages[currentImageIndex]}
          alt="Artwork"
          className="w-full h-full object-cover"
        />
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