import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ConnectWalletButton = () => {
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Wallet Connection",
      description: "This is a demo - wallet connection is not implemented yet!",
    });
  };

  return (
    <Button
      onClick={handleConnect}
      className="bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue 
                hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%]
                text-purple-900 font-bold rounded-full px-8 py-6"
    >
      <Wallet className="mr-2 h-5 w-5" />
      🌈 Connect Wallet 🌈
    </Button>
  );
};