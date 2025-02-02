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
    image: "/lovable-uploads/de0e6c59-976e-48cd-9a78-81cae783c024.png"
  },
  { 
    name: "Pablo Picashflow", 
    role: "Art Fixers", 
    description: "They who judge the judges",
    image: "/lovable-uploads/12295a8e-378a-4210-9f88-0e85552a5ec4.png"
  },
  { 
    name: "Claude MonETH", 
    role: "Taste Architects", 
    description: "They who shitpost in hexcode",
    image: "/lovable-uploads/8499e5bd-89a3-41eb-80e6-d0c29cba239f.png"
  },
  { 
    name: "Human Bot Interns", 
    role: "The Pretenders", 
    description: "They who pretend to be AI pretending to be human",
    image: "/lovable-uploads/506735ef-efbb-4213-9958-7f690723b9a2.png"
  }
];

export const TeamSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-graffiti text-purple-900 mb-8">The ArtCoin team Hierarchy</h2>
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
            <h3 className="text-xl font-graffiti text-purple-900">{member.name}</h3>
            <p className="text-sm font-medium text-purple-700 mb-2">{member.role}</p>
            <p className="text-sm text-purple-600 text-center font-graffiti">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};