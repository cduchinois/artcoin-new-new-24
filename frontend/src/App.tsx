import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { config } from './lib/web3Config';
import { PrivyProvider } from '@privy-io/react-auth';
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Leaderboard from "./pages/Leaderboard";

const queryClient = new QueryClient();

// Hardcoded Privy App ID (in production, use environment variables)
const PRIVY_APP_ID = "cm6nup6nf01e6fcyiopxye976";

const App = () => {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['farcaster', 'wallet', 'email'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        supportedChains: [base, mainnet],
        defaultChain: base,
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </PrivyProvider>
  );
};

export default App;