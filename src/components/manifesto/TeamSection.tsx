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
    image: "https://i.seadn.io/gcs/files/c4dfc6be4d9a0c1fb2eb1c8ee97c5eef.png?auto=format&dpr=1&w=1000"
  },
  { 
    name: "Pablo Picashflow", 
    role: "Art Fixers", 
    description: "They who judge the judges",
    image: "https://i.seadn.io/gcs/files/d0a7245e0cd8cc18b1aa36e0bb075521.png?auto=format&dpr=1&w=1000"
  },
  { 
    name: "Claude MonETH", 
    role: "Taste Architects", 
    description: "They who shitpost in hexcode",
    image: "https://i.seadn.io/gcs/files/ef6bcb8f1d9e5cf04a1ea89e804b4d8b.png?auto=format&dpr=1&w=1000"
  },
  { 
    name: "Human Bot Interns", 
    role: "The Pretenders", 
    description: "They who pretend to be AI pretending to be human",
    image: "https://i.seadn.io/gcs/files/d1460061b6b093d35c10a1c500d0186f.png?auto=format&dpr=1&w=1000"
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