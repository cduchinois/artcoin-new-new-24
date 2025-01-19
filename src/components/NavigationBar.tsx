import { Home, Award, Scroll } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavigationBar = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-2">
          <div className="text-2xl font-bold text-purple-900">
            🎨 💩 🎨 💩 🎨
          </div>
          
          <NavigationMenu className="py-2">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={`${navigationMenuTriggerStyle()} hover:bg-purple-100 text-purple-900 hover:text-purple-800 font-bold`}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/manifesto" 
                  className={`${navigationMenuTriggerStyle()} hover:bg-purple-100 text-purple-900 hover:text-purple-800 font-bold`}
                >
                  <Scroll className="mr-2 h-4 w-4" />
                  Manifesto
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/leaderboard" 
                  className={`${navigationMenuTriggerStyle()} hover:bg-purple-100 text-purple-900 hover:text-purple-800 font-bold`}
                >
                  <Award className="mr-2 h-4 w-4" />
                  Leaderboard
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="text-2xl font-bold text-purple-900">
            🎨 💩 🎨 💩 🎨
          </div>
        </div>
      </div>
    </div>
  );
};