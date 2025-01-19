import { Link } from "react-router-dom";
import { Home, BookOpen, Trophy } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div className="mb-8">
        <div className="text-2xl mb-4 text-purple-900">
          🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
        </div>
        <div className="text-2xl font-bold mb-4 text-purple-900">
          🎨 <Link to="/" className="hover:opacity-75">HOME</Link> 💩 <Link to="/manifesto" className="hover:opacity-75">MANIFESTO</Link> 🎨 <Link to="/leaderboard" className="hover:opacity-75">LEADERBOARD</Link> 🎨
        </div>
        <div className="text-2xl mb-8 text-purple-900">
          🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-4 mb-8 pt-4">
      <Link to="/" className="flex items-center gap-1 text-purple-900 hover:opacity-75">
        <Home className="w-5 h-5" />
        <span>HOME</span>
      </Link>
      🎨
      <Link to="/manifesto" className="flex items-center gap-1 text-purple-900 hover:opacity-75">
        <BookOpen className="w-5 h-5" />
        <span>MANIFESTO</span>
      </Link>
      🎨
      <Link to="/leaderboard" className="flex items-center gap-1 text-purple-900 hover:opacity-75">
        <Trophy className="w-5 h-5" />
        <span>LEADERBOARD</span>
      </Link>
      🎨
    </div>
  );
};