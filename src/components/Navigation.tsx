
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home, ScrollText, Trophy } from "lucide-react";

export const Navigation = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <div className="mb-8">
          <div className="text-2xl mb-4 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
          <nav className="text-2xl font-bold mb-4">
            <div className="flex justify-center items-center gap-6">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors text-purple-900 hover:scale-105 transform duration-200"
              >
                <Home className="w-6 h-6" />
                HOME
              </Link>
              <Link 
                to="/manifesto" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors text-purple-900 hover:scale-105 transform duration-200"
              >
                <ScrollText className="w-6 h-6" />
                MANIFESTO
              </Link>
              <Link 
                to="/leaderboard" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors text-purple-900 hover:scale-105 transform duration-200"
              >
                <Trophy className="w-6 h-6" />
                LEADERBOARD
              </Link>
            </div>
          </nav>
          <div className="text-2xl mb-8 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <div className="text-2xl mb-4 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
          <nav className="flex flex-col items-center space-y-3">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-6 py-2 w-48 justify-center rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors text-purple-900 text-2xl font-bold hover:scale-105 transform duration-200"
            >
              <Home className="w-6 h-6" />
              HOME
            </Link>
            <Link 
              to="/manifesto" 
              className="flex items-center gap-2 px-6 py-2 w-48 justify-center rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors text-purple-900 text-2xl font-bold hover:scale-105 transform duration-200"
            >
              <ScrollText className="w-6 h-6" />
              MANIFESTO
            </Link>
            <Link 
              to="/leaderboard" 
              className="flex items-center gap-2 px-6 py-2 w-48 justify-center rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors text-purple-900 text-2xl font-bold hover:scale-105 transform duration-200"
            >
              <Trophy className="w-6 h-6" />
              LEADERBOARD
            </Link>
          </nav>
          <div className="text-2xl mt-4 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
        </div>
      )}
    </>
  );
};
