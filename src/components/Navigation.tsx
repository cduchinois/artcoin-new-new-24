import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
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
      ) : (
        <div className="mb-8">
          <div className="text-2xl mb-4 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-purple-900">
              <Link to="/" className="hover:opacity-75">HOME</Link>
            </div>
            <div className="text-2xl font-bold text-purple-900">
              <Link to="/manifesto" className="hover:opacity-75">MANIFESTO</Link>
            </div>
            <div className="text-2xl font-bold text-purple-900">
              <Link to="/leaderboard" className="hover:opacity-75">LEADERBOARD</Link>
            </div>
          </div>
          <div className="text-2xl mt-4 text-purple-900">
            🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
          </div>
        </div>
      )}
    </>
  );
};