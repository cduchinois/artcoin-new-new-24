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
import { Navigation } from "@/components/Navigation";

const MOCK_USERS = [
  {
    rank: 1,
    username: "ArtWhisperer",
    pfp: "/lovable-uploads/dea6927d-9ab0-45bb-b704-2b96a5837147.png",
    address: "0x1234...5678",
    votes: 150,
    artcoin: 2500,
    movement: "up",
  },
  {
    rank: 2,
    username: "CryptoCreative",
    pfp: "/lovable-uploads/39122cc1-7b70-420c-b451-7451423a0103.png",
    address: "0x8765...4321",
    votes: 120,
    artcoin: 2000,
    movement: "up",
  },
  {
    rank: 3,
    username: "PixelPioneer",
    pfp: "/lovable-uploads/f248528d-001f-4cf6-bac4-d990cd035d82.png",
    address: "0x9876...1234",
    votes: 100,
    artcoin: 1800,
    movement: "down",
  },
  {
    rank: 4,
    username: "ArtisticAlpha",
    pfp: "/lovable-uploads/4a5f3ff0-8838-44b4-b95f-42f6b37e2020.png",
    address: "0x5432...8765",
    votes: 80,
    artcoin: 1500,
    movement: "down",
  },
  {
    rank: 5,
    username: "NFTNinja",
    pfp: "/lovable-uploads/add24722-dcf7-48db-be11-77d5e2638400.png",
    address: "0x1111...2222",
    votes: 75,
    artcoin: 1400,
    movement: "up",
  },
  {
    rank: 6,
    username: "BlockchainBard",
    pfp: "/lovable-uploads/5eaa1886-5e25-4fe9-97c0-cb23ac16e848.png",
    address: "0x3333...4444",
    votes: 70,
    artcoin: 1300,
    movement: "down",
  },
  {
    rank: 7,
    username: "TokenTitan",
    pfp: "/lovable-uploads/9917f859-4de5-4dcc-9d07-d020a35ab8a2.png",
    address: "0x5555...6666",
    votes: 65,
    artcoin: 1200,
    movement: "up",
  },
  {
    rank: 8,
    username: "CryptoKing",
    pfp: "/lovable-uploads/8afbb197-c183-4dd7-af2a-14642cebbdf9.png",
    address: "0x7777...8888",
    votes: 60,
    artcoin: 1100,
    movement: "down",
  },
  {
    rank: 9,
    username: "MetaMaster",
    pfp: "/lovable-uploads/0bd04f6d-d8d6-47dd-9a9c-f0beef4764a6.png",
    address: "0x9999...0000",
    votes: 55,
    artcoin: 1000,
    movement: "up",
  },
  {
    rank: 10,
    username: "WebWizard",
    pfp: "/lovable-uploads/43b6d943-3393-4d6e-b8e0-b384dde07397.png",
    address: "0xAAAA...BBBB",
    votes: 50,
    artcoin: 900,
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue">
      <div className="container mx-auto px-4 py-8 text-center">
        <Navigation />

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
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
                {MOCK_USERS.slice(0, 10).map((user) => (
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
