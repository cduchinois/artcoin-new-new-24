import { useState, useEffect } from "react";

export const Statistics = () => {
  const [stats, setStats] = useState({
    totalVotes: 0,
    totalArtcoins: 0
  });

  // Update stats every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Get the cumulative stats from data attributes
      const votes = document.querySelectorAll('[data-vote]').length;
      const artcoins = Array.from(document.querySelectorAll('[data-reward]'))
        .reduce((sum, el) => sum + Number(el.getAttribute('data-reward')), 0);
      
      setStats({
        totalVotes: votes,
        totalArtcoins: artcoins
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-artcoin-purple bg-opacity-30 rounded-xl p-4 max-w-md mx-auto mt-6">
      <h3 className="text-xl font-bold text-purple-800 mb-2">
        ✨ Today's EPIC Statistics ✨
      </h3>
      <div className="space-y-1 text-purple-700">
        <p>Total Votes: {stats.totalVotes} 🌍</p>
        <p>Reward: {stats.totalArtcoins} $ARTCOIN 💰</p>
      </div>
    </div>
  );
};