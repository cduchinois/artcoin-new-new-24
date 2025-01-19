import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, ArrowDown } from "lucide-react";

const Leaderboard = () => {
  const isMobile = useIsMobile();

  const leaderboardData = [
    {
      rank: 1,
      avatar: "/placeholder.svg",
      address: "0x1234...5678",
      votes: 1500,
      artcoin: 25000,
      movement: "up",
    },
    // ... Add more mock data as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue">
      <div className="container mx-auto px-4 py-8">
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
              🎨 💩 🎨 💩 🎨 💩 🎨 💩🎨
            </div>
            <div className="text-2xl font-bold mb-4 text-purple-900">
              🎨 <Link to="/" className="hover:opacity-75">HOME</Link> 🎨
            </div>
            <div className="text-2xl mb-4 text-purple-900">
              🎨 💩 🎨 💩 🎨 💩 🎨 💩🎨
            </div>
            <div className="text-2xl font-bold mb-4 text-purple-900">
              🎨 <Link to="/manifesto" className="hover:opacity-75">MANIFESTO</Link> 🎨
            </div>
            <div className="text-2xl mb-4 text-purple-900">
              🎨 💩 🎨 💩 🎨 💩 🎨 💩🎨
            </div>
            <div className="text-2xl font-bold mb-4 text-purple-900">
              🎨 <Link to="/leaderboard" className="hover:opacity-75">LEADERBOARD</Link> 🎨
            </div>
            <div className="text-2xl mb-8 text-purple-900">
              🎨 💩 🎨 💩 🎨 💩 🎨 💩🎨
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Votes</TableHead>
                <TableHead>$ARTCOIN</TableHead>
                <TableHead>Movement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                  </TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.votes}</TableCell>
                  <TableCell>{user.artcoin}</TableCell>
                  <TableCell>
                    {user.movement === "up" ? (
                      <ArrowUp className="text-green-500" />
                    ) : (
                      <ArrowDown className="text-red-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <footer className="mt-12 text-purple-700 space-y-2">
          <p>© 2025 ArtCoin - Making Web3 Weird Again ✨</p>
          <div className="flex justify-center gap-2 text-2xl">
            🎨 💩 🎨 💩 🎨
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Leaderboard;