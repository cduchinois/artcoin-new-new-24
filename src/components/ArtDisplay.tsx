import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const placeholderImages = [
  "/lovable-uploads/e7c9d1f9-6b61-49a8-b375-97e67191a6f3.png",
  "/lovable-uploads/f1931887-eaf2-445f-92c4-b5165e4d365b.png",
  "/lovable-uploads/ad87c205-7cdd-4da0-9b55-d55e48fb2fec.png",
  "/lovable-uploads/0a8bbc92-eb17-4ee4-9fe6-3fecfda84ff5.png",
  "/lovable-uploads/2dc9e872-89c2-490f-b254-388d8d780461.png",
  "/lovable-uploads/b0f3f7e3-d226-4a6a-bd9b-fde29e7d89b3.png",
  "/lovable-uploads/ee377a21-0a1f-4cf7-9e6c-f80ebdb7c30c.png",
  "/lovable-uploads/f12d21e6-14cb-462a-aaa0-41c90f13df32.png",
  "/lovable-uploads/d8d82c86-a2e2-4d21-be64-7f5efc3a2be3.png",
  "/lovable-uploads/b597c233-0e4d-48f1-b6b0-ad54cb43b42a.png",
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

// Replace with your actual reCAPTCHA site key from Google reCAPTCHA admin console
// For development, we'll use a key that works in localhost and test environments
const RECAPTCHA_SITE_KEY = "6LfC3oopAAAAAFPbqtqV_oYBV_xQqGEKHOZxZaCT";

export const ArtDisplay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [totalArtcoins, setTotalArtcoins] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [pendingVote, setPendingVote] = useState<boolean | null>(null);
  const { toast } = useToast();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const getRandomReward = () => Math.floor(Math.random() * 91) + 10;
  const getRandomResponse = (type: 'good' | 'bad') => 
    funnyResponses[type][Math.floor(Math.random() * funnyResponses[type].length)];

  const handleVote = (isGood: boolean) => {
    // Check if we need to show CAPTCHA (every 10 votes)
    if ((totalVotes + 1) % 10 === 0) {
      setPendingVote(isGood);
      setShowCaptcha(true);
      return;
    }

    processVote(isGood);
  };

  const processVote = (isGood: boolean) => {
    const reward = getRandomReward();
    const response = getRandomResponse(isGood ? 'good' : 'bad');
    
    setTotalVotes(prev => prev + 1);
    setTotalArtcoins(prev => prev + reward);
    
    // Create hidden elements to track stats
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

  const handleCaptchaSuccess = (token: string | null) => {
    if (!token) {
      toast({
        title: "CAPTCHA Error",
        description: "Please try again",
        variant: "destructive",
      });
      return;
    }

    if (pendingVote !== null) {
      setShowCaptcha(false);
      setPendingVote(null);
      processVote(pendingVote);
    }
  };

  const handleCaptchaError = () => {
    toast({
      title: "CAPTCHA Error",
      description: "Failed to verify. Please try again.",
      variant: "destructive",
    });
    setPendingVote(null);
    setShowCaptcha(false);
  };

  const handleCaptchaClose = () => {
    setPendingVote(null);
    setShowCaptcha(false);
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

      <Dialog open={showCaptcha} onOpenChange={handleCaptchaClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify you're human</DialogTitle>
            <DialogDescription>
              Please complete the CAPTCHA to continue voting
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaSuccess}
              onError={handleCaptchaError}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
