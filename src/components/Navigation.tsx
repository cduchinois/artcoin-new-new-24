
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home, ScrollText, Trophy, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl active:shadow-md"
              >
                <Home className="w-6 h-6" />
                HOME
              </Link>
              <Link 
                to="/manifesto" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl active:shadow-md"
              >
                <ScrollText className="w-6 h-6" />
                MANIFESTO
              </Link>
              <Link 
                to="/leaderboard" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl active:shadow-md"
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
        <div className="mb-8 relative">
          <div className="text-2xl mb-4 flex justify-center px-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 shadow-lg hover:shadow-xl active:shadow-md"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <nav className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col items-center space-y-3 p-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-6 py-2 w-48 justify-center rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 text-2xl font-bold hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl active:shadow-md"
              >
                <Home className="w-6 h-6" />
                HOME
              </Link>
              <Link 
                to="/manifesto" 
                className="flex items-center gap-2 px-6 py-2 w-48 justify-center rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 text-2xl font-bold hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl active:shadow-md"
              >
                <ScrollText className="w-6 h-6" />
                MANIFESTO
              </Link>
              <Link 
                to="/leaderboard" 
                className="flex items-center gap-2 px-6 py-2 w-48 justify-center rounded-lg bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%] text-purple-900 text-2xl font-bold hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl active:shadow-md"
              >
                <Trophy className="w-6 h-6" />
                LEADERBOARD
              </Link>
            </div>
          </nav>

          <div className="text-2xl mt-4 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
        </div>
      )}
    </>
  );
};
