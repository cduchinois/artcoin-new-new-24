import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export const ConnectWalletButton = () => {
  const { toast } = useToast();
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect({
    mutation: {
      onSuccess(data) {
        toast({
          title: "Wallet Connected",
          description: `Connected to ${data.accounts[0].slice(0, 6)}...${data.accounts[0].slice(-4)}`,
        });
      },
      onError(error) {
        toast({
          title: "Connection Error",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  })
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <Button
        onClick={() => disconnect()}
        className="bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue 
                  hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%]
                  text-purple-900 font-bold rounded-full px-8 py-6"
      >
        <Wallet className="mr-2 h-5 w-5" />
        {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
      </Button>
    )
  }

  return (
    <>
      {connectors.map((connector) => (
        <Button
          disabled={!connector.ready}
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="bg-gradient-to-r from-artcoin-yellow via-artcoin-pink to-artcoin-blue 
                    hover:opacity-90 transition-opacity animate-shimmer bg-[length:200%_100%]
                    text-purple-900 font-bold rounded-full px-8 py-6"
        >
          <Wallet className="mr-2 h-5 w-5" />
          {connector.name === 'Injected' ? '🌈 Connect MetaMask 🌈' : '🌈 Connect Coinbase Wallet 🌈'}
        </Button>
      ))}
    </>
  );
};