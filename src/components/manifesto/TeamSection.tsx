import React from "react";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { 
    name: "Marcel Ducoin", 
    role: "the Unfair Art Monarch", 
    description: "They who hold the most worthless JPEGs",
    image: "/lovable-uploads/2e391061-9dea-4ab2-b262-ceb67923e88b.png"
  },
  { 
    name: "Pablo Picashflow", 
    role: "Art Fixers", 
    description: "They who judge the judges",
    image: "/lovable-uploads/d8ffc722-6cce-45c1-afec-1c1de597d202.png"
  },
  { 
    name: "Claude MonETH", 
    role: "Taste Architects", 
    description: "They who shitpost in hexcode",
    image: "/lovable-uploads/3aa10fb5-6d87-4cb1-a85e-b1cce3eea862.png"
  },
  { 
    name: "Human Bot Interns", 
    role: "The Pretenders", 
    description: "They who pretend to be AI pretending to be human",
    image: "/lovable-uploads/5d7bfa07-43ea-49eb-9a99-ae2e2c8e0818.png"
  }
];

export const TeamSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-sans bg-gradient-rainbow from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-shimmer mb-8">The ArtCoin team Hierarchy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-6 rounded-lg hover:from-artcoin-purple/30 hover:to-artcoin-blue/30 transition-all transform hover:-translate-y-1"
          >
            <div className="mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-artcoin-purple">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-sans text-purple-900">{member.name}</h3>
            <p className="text-sm font-sans text-purple-700 mb-2">{member.role}</p>
            <p className="text-sm text-purple-600 text-center font-sans">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};