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
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
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
      setDragPosition({ x: 0, y: 0 });
    }, 300);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Prevent default touch behavior
    if (e.type === 'touchstart') {
      e.preventDefault();
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    setDragPosition({ x, y });

    // Calculate rotation based on drag position
    const rotate = x * 0.1; // Adjust rotation sensitivity

    (e.currentTarget as HTMLElement).style.transform = 
      `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    const threshold = 100; // Minimum distance to trigger swipe

    if (Math.abs(dragPosition.x) > threshold) {
      handleVote(dragPosition.x > 0);
    } else {
      // Reset position if not swiped far enough
      setDragPosition({ x: 0, y: 0 });
      (e.currentTarget as HTMLElement).style.transform = 
        'translate(0px, 0px) rotate(0deg)';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div 
        className="relative aspect-square rounded-3xl overflow-hidden border-4 border-artcoin-purple bg-white shadow-xl cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <img
          src={placeholderImages[currentImageIndex]}
          alt="Artwork"
          className={`w-full h-full object-cover transition-all duration-300 ${
            isAnimating
              ? swipeDirection === 'right'
                ? 'translate-x-full rotate-12 scale-95'
                : '-translate-x-full -rotate-12 scale-95'
              : 'translate-x-0 rotate-0 scale-100'
          }`}
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