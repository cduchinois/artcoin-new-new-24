import { Trophy, ArrowUp, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const MOCK_USERS = [
  {
    rank: 1,
    username: "ArtWhisperer",
    pfp: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    address: "0x1234...5678",
    votes: 150,
    artcoin: 2500,
    movement: "up",
  },
  {
    rank: 2,
    username: "CryptoCreative",
    pfp: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    address: "0x8765...4321",
    votes: 120,
    artcoin: 2000,
    movement: "up",
  },
  {
    rank: 3,
    username: "PixelPioneer",
    pfp: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    address: "0x9876...1234",
    votes: 100,
    artcoin: 1800,
    movement: "down",
  },
  {
    rank: 4,
    username: "ArtisticAlpha",
    pfp: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    address: "0x5432...8765",
    votes: 80,
    artcoin: 1500,
    movement: "down",
  },
];

const getRankEmoji = (rank: number) => {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return rank;
  }
};

const Leaderboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue">
      <div className="container mx-auto px-4 py-8 text-center">
        {!isMobile ? (
          <div className="mb-8">
            <div className="text-2xl mb-4 text-purple-900">
              🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
            </div>
            <div className="text-2xl font-bold mb-4 text-purple-900">
              🎨 <Link to="/" className="hover:opacity-75">HOME</Link> 💩 <Link to="/manifesto" className="hover:opacity-75">MANIFESTO</Link> 🏆 LEADERBOARD 🎨
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
              🎨 LEADERBOARD 🎨
            </div>
            <div className="text-2xl mb-8 text-purple-900">
              🎨 💩 🎨 💩 🎨 💩 🎨 💩🎨
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-8 h-8 text-purple-900" />
            <h1 className="text-3xl font-bold text-purple-900">Leaderboard</h1>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead className="text-center">Votes</TableHead>
                  <TableHead className="text-center">$ARTCOIN</TableHead>
                  <TableHead className="text-center">Movement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_USERS.map((user) => (
                  <TableRow key={user.address}>
                    <TableCell className="text-center font-bold text-xl">
                      {getRankEmoji(user.rank)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={user.pfp} alt={user.username} />
                          <AvatarFallback>{user.username[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.username}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono">{user.address}</TableCell>
                    <TableCell className="text-center">{user.votes}</TableCell>
                    <TableCell className="text-center">{user.artcoin}</TableCell>
                    <TableCell className="text-center">
                      {user.movement === "up" ? (
                        <ArrowUp className="inline-block w-5 h-5 text-green-500" />
                      ) : (
                        <ArrowDown className="inline-block w-5 h-5 text-red-500" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <footer className="mt-12 text-purple-700 space-y-2 mb-12">
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