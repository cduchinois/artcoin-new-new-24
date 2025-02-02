import { Trophy, ArrowUp, ArrowDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MOCK_ARTWORKS = [
  {
    image: "/lovable-uploads/e7c9d1f9-6b61-49a8-b375-97e67191a6f3.png",
    name: "Happy Cat",
    goodVotes: 150,
    badVotes: 20,
    totalVotes: 170,
    trend: "up",
  },
  {
    image: "/lovable-uploads/f1931887-eaf2-445f-92c4-b5165e4d365b.png",
    name: "Dancing Penguin",
    goodVotes: 120,
    badVotes: 30,
    totalVotes: 150,
    trend: "up",
  },
  {
    image: "/lovable-uploads/ad87c205-7cdd-4da0-9b55-d55e48fb2fec.png",
    name: "Untitled",
    goodVotes: 90,
    badVotes: 40,
    totalVotes: 130,
    trend: "down",
  },
  {
    image: "/lovable-uploads/0a8bbc92-eb17-4ee4-9fe6-3fecfda84ff5.png",
    name: "Grumpy Dog",
    goodVotes: 70,
    badVotes: 50,
    totalVotes: 120,
    trend: "down",
  },
  {
    image: "/lovable-uploads/2dc9e872-89c2-490f-b254-388d8d780461.png",
    name: "Untitled",
    goodVotes: 50,
    badVotes: 60,
    totalVotes: 110,
    trend: "up",
  },
  {
    image: "/lovable-uploads/b0f3f7e3-d226-4a6a-bd9b-fde29e7d89b3.png",
    name: "Sleepy Sloth",
    goodVotes: 40,
    badVotes: 70,
    totalVotes: 110,
    trend: "down",
  },
  {
    image: "/lovable-uploads/ee377a21-0a1f-4cf7-9e6c-f80ebdb7c30c.png",
    name: "Party Parrot",
    goodVotes: 30,
    badVotes: 80,
    totalVotes: 110,
    trend: "up",
  },
  {
    image: "/lovable-uploads/f12d21e6-14cb-462a-aaa0-41c90f13df32.png",
    name: "Untitled",
    goodVotes: 20,
    badVotes: 90,
    totalVotes: 110,
    trend: "down",
  },
];

const getRowClass = (goodVotes: number, badVotes: number) => {
  const ratio = goodVotes / (goodVotes + badVotes);
  if (ratio >= 0.7) return "bg-green-100/50";
  if (ratio >= 0.5) return "bg-yellow-100/50";
  return "bg-red-100/50";
};

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue">
      <div className="container mx-auto px-4 py-8 text-center">
        <Navigation />

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-8 h-8 text-purple-900" />
            <h1 className="text-3xl font-bold text-purple-900">Taste Ranking</h1>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search artworks..."
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <Select defaultValue="24h">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 hours</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="1m">Last month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artwork</TableHead>
                  <TableHead className="text-center">Good Votes 🎨</TableHead>
                  <TableHead className="text-center">Bad Votes 💩</TableHead>
                  <TableHead className="text-center">Total Votes</TableHead>
                  <TableHead className="text-center">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_ARTWORKS.map((artwork) => (
                  <TableRow
                    key={artwork.image}
                    className={getRowClass(artwork.goodVotes, artwork.badVotes)}
                  >
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <img
                          src={artwork.image}
                          alt={artwork.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <span className="font-medium">{artwork.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-medium text-green-600">
                      {artwork.goodVotes}
                    </TableCell>
                    <TableCell className="text-center font-medium text-red-600">
                      {artwork.badVotes}
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      {artwork.totalVotes}
                    </TableCell>
                    <TableCell className="text-center">
                      {artwork.trend === "up" ? (
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