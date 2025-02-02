import React from "react";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  { name: "Marcel Ducoin", role: "the Unfair Art Monarch", description: "They who hold the most worthless JPEGs" },
  { name: "Pablo Picashflow", role: "Art Fixers", description: "They who judge the judges" },
  { name: "Claude MonETH", role: "Taste Architects", description: "They who shitpost in hexcode" },
  { name: "Human Bot Interns", role: "The Pretenders", description: "They who pretend to be AI pretending to be human" }
];

export const TeamSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-graffiti text-purple-900 mb-8">The ArtCoin team Hierarchy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-b from-artcoin-purple/20 to-artcoin-blue/20 hover:from-artcoin-purple/30 hover:to-artcoin-blue/30 transition-all transform hover:-translate-y-1"
          >
            <div className="mb-4 p-4 rounded-full bg-artcoin-yellow/30">
              <Users className="w-12 h-12 text-purple-900" />
            </div>
            <h3 className="text-xl font-graffiti text-purple-900">{member.name}</h3>
            <p className="text-sm font-medium text-purple-700 mb-2">{member.role}</p>
            <p className="text-sm text-purple-600 text-center font-graffiti">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};