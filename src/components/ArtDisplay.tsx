import { useState } from "react";
import { Heart, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const placeholderImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
];

export const ArtDisplay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const { toast } = useToast();

  const handleVote = (isGood: boolean) => {
    setIsAnimating(true);
    setSwipeDirection(isGood ? 'right' : 'left');
    
    toast({
      title: isGood ? "Great Art! 🎨" : "Bad Art! 💩",
      description: "Your vote has been recorded!",
    });

    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % placeholderImages.length);
      setIsAnimating(false);
      setSwipeDirection(null);
      setOffsetX(0);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isAnimating) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setOffsetX(diff);
  };

  const handleTouchEnd = () => {
    const threshold = 100;
    if (Math.abs(offsetX) > threshold) {
      handleVote(offsetX > 0);
    } else {
      setOffsetX(0);
    }
  };

  const getCardStyle = () => {
    if (isAnimating) {
      return swipeDirection === 'right'
        ? 'translate-x-full rotate-12 scale-95'
        : '-translate-x-full -rotate-12 scale-95';
    }
    
    if (offsetX !== 0) {
      const rotate = (offsetX / window.innerWidth) * 45; // Max rotation of 45 degrees
      return `transform translate-x-[${offsetX}px] rotate-[${rotate}deg]`;
    }
    
    return 'translate-x-0 rotate-0 scale-100';
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div 
        className="relative aspect-square rounded-3xl overflow-hidden border-4 border-artcoin-purple bg-white shadow-xl touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={placeholderImages[currentImageIndex]}
          alt="Artwork"
          className={`w-full h-full object-cover transition-all duration-300 ${getCardStyle()}`}
          draggable="false"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-purple-800 mt-6 mb-4">
        💖 Is this ART or is this FART? 💨
      </h2>
      
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => handleVote(true)}
          className="bg-green-200 hover:bg-green-300 text-green-800 px-8 py-6 rounded-full text-lg font-bold transition-all hover:scale-105"
        >
          <Heart className="mr-2" />
          GREAT ART! ✨
        </Button>
        
        <Button
          onClick={() => handleVote(false)}
          className="bg-pink-200 hover:bg-pink-300 text-pink-800 px-8 py-6 rounded-full text-lg font-bold transition-all hover:scale-105"
        >
          <ThumbsDown className="mr-2" />
          BAD ART! 🤮
        </Button>
      </div>
    </div>
  );
};