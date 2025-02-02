import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { usePrivy } from '@privy-io/react-auth';

export const ConnectWalletButton = () => {
  const { toast } = useToast();
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { login, logout, user } = usePrivy();

  const metaMaskConnector = connectors.find((c) => c.name === 'MetaMask');

  const handleConnect = async () => {
    try {
      // Try Privy login first
      await login();
    } catch (error: any) {
      console.error('Privy login error:', error);
      
      // Fallback to MetaMask if Privy fails
      if (!metaMaskConnector) {
        toast({
          title: "Connection Error",
          description: "MetaMask connector not found. Please install MetaMask.",
          variant: "destructive",
        });
        return;
      }

      try {
        const result = await connectAsync({
          connector: metaMaskConnector,
        });
        
        if (result?.accounts[0]) {
          toast({
            title: "Wallet Connected",
            description: `Connected to ${result.accounts[0].slice(0, 6)}...${result.accounts[0].slice(-4)}`,
          });
        }
      } catch (error: any) {
        console.error('MetaMask connection error:', error);
        toast({
          title: "Connection Error",
          description: error.message || "Failed to connect wallet",
          variant: "destructive",
        });
      }
    }
  };

  const handleDisconnect = async () => {
    try {
      if (user) {
        await logout();
      } else {
        await disconnectAsync();
      }
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected",
      });
    } catch (error: any) {
      console.error('Disconnection error:', error);
      toast({
        title: "Disconnection Error",
        description: error.message || "Failed to disconnect wallet",
        variant: "destructive",
      });
    }
  };

  const isUserConnected = isConnected || user;
  const displayAddress = user?.farcaster?.username || 
    (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '');

  if (isUserConnected) {
    return (
      <Button
        onClick={handleDisconnect}
        className="bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue 
                  hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%]
                  text-purple-900 font-bold rounded-full px-8 py-6"
      >
        <Wallet className="mr-2 h-5 w-5" />
        {displayAddress}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleConnect}
      className="bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue 
                hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%]
                text-purple-900 font-bold rounded-full px-8 py-6"
    >
      <Wallet className="mr-2 h-5 w-5" />
      🌈 Connect Wallet/Farcaster 🌈
    </Button>
  );
};