import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artcoin-yellow via-artcoin-pink to-artcoin-blue p-4 md:p-8">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur">
          <CardContent className="p-6 md:p-8 space-y-8">
            <header className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-rainbow from-artcoin-yellow via-artcoin-pink to-artcoin-purple bg-clip-text text-transparent animate-shimmer">
                🎨 The ArtCoin Manifesto 💩
              </h1>
            </header>

            <section className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">What is ArtCoin?</h2>
                <p className="text-lg">ArtCoin is the world's first aesthetic prediction market, where art criticism meets crypto absurdity.</p>
                <p className="text-lg italic">The polymarket of aesthetic prediction.</p>
                <p className="text-lg italic">The tinder of the artworks.</p>
                <p className="text-lg">Using the $ARTCOIN token, users can vote on whether submitted artworks are "good art" or "bad art," creating a decentralized ecosystem of taste arbitration.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">Core Mechanics</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Submit artwork for 10,000 $ARTCOIN</li>
                  <li>Vote daily on the artistic merit of submitted pieces</li>
                  <li>Earn rewards for correctly predicting the community's aesthetic judgment</li>
                  <li>Top-ranked "good art" and "bad art" receive $ARTCOIN rewards</li>
                  <li>Connect your wallet to participate in daily voting sessions</li>
                  <li>Join our Farcaster community for instant voting through frames</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The Unfair Launch</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>All airdrops will be unfair, based of your taste regarding your nft collection.</li>
                  <li className="ml-8">ex: If you own a CryptoPunk (x3 on your allocation), if you own an BoredApe (allocation divided by 2)</li>
                  <li>The list is top secret. But if you send crypto to the team members we could tell you some alpha.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The Path to Aesthetic Liberation</h2>
                <ol className="list-decimal list-inside space-y-2 text-lg">
                  <li>Artcoin will fix it</li>
                  <li>The unfair launch will judge your NFT collection's taste level</li>
                  <li>We will eradicate internet cringe (or make it infinitely worse, we haven't decided)</li>
                  <li>Every critique will be delivered by our AI agent, trained on a diet of pure sass</li>
                  <li>The community will vote exclusively through emojis 🎨</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The Sacred Prophecies</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>At 100M market cap, we will pixel-by-pixel tokenize Piero Manzoni's "Artist's Shit"</li>
                  <li>At 500M market cap, we will turn it upside down</li>
                  <li>At 1B market cap, we will attempt to purchase the Mona Lisa</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The Temple of Bad Taste</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Holders can sacrifice their worthless NFTs to the void</li>
                  <li>Each sacrifice strengthens the temple's aesthetic judgment</li>
                  <li>The temple accepts prayers in the form of code snippets and misattributed art quotes</li>
                  <li>"Art is what you can get away with" - Leonardo da Vinci (probably)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The Artcoin Metaverse Museum</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>No entrance</li>
                  <li>No exit</li>
                  <li>No art</li>
                  <li>Just vibes</li>
                  <li>(Requires 100% token supply to maybe see what's inside)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The ArtCoin Hierarchy</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Unfair Art Monarch: They who hold the most worthless JPEGs</li>
                  <li>Art Fixers: They who judge the judges</li>
                  <li>Taste Architects: They who shitpost in hexcode</li>
                  <li>Human Bot Interns: They who pretend to be AI pretending to be human</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">Future Roadmap (Maybe)</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Create the first on-chain certified museum of "objectively bad art"</li>
                  <li>Host an IRL exhibition where all artworks are invisible but drinks are free</li>
                  <li>Develop an AI art critic that becomes progressively nicer with each $ARTCOIN donation</li>
                  <li>Create an NFT collection where each token is just the AI roasting other NFTs</li>
                  <li>Launch a DAO where governance proposals must be written in emojis</li>
                  <li>Build a virtual museum where visitors can "vandalize" masterpieces with digital crayons</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-800">The Final Truth</h2>
                <p className="text-lg">The more you scroll, the less this makes sense. Just like art. Just like crypto. Just like life.</p>
                <p className="text-lg">Remember: Your taste will be judged. Your judgment will be judged. Everything is art. Nothing is art. Art will fix it. Or break it. We're not sure yet.</p>
                <p className="text-lg italic">PS: If you've read this far, you're probably eligible for our unfair airdrop. Or not. We'll judge that too.</p>
              </div>

              <div className="text-center text-3xl">
                🎨 💩 🎨 💩 🎨 💩 🎨 💩 🎨
              </div>
            </section>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default Manifesto;