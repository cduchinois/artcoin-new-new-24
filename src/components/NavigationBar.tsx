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
    <div className="w-full bg-white/50 backdrop-blur-sm border-b border-gray-200 fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <NavigationMenu className="py-2">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/manifesto" className={navigationMenuTriggerStyle()}>
                <Scroll className="mr-2 h-4 w-4" />
                Manifesto
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/leaderboard" className={navigationMenuTriggerStyle()}>
                <Award className="mr-2 h-4 w-4" />
                Leaderboard
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};