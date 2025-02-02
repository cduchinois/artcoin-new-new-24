import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { config } from './lib/web3Config';
import { PrivyProvider } from '@privy-io/react-auth';
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Leaderboard from "./pages/Leaderboard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const queryClient = new QueryClient();

// Check if the Privy App ID is available
const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID;

// Create a fallback component for when Privy App ID is missing
const PrivyErrorFallback = () => (
  <div className="container mx-auto p-4">
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Configuration Error</AlertTitle>
      <AlertDescription>
        VITE_PRIVY_APP_ID environment variable is not set. Please set it in your .env file.
      </AlertDescription>
    </Alert>
  </div>
);

const App = () => {
  // If no Privy App ID is available, show the error message
  if (!PRIVY_APP_ID) {
    return <PrivyErrorFallback />;
  }

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['farcaster', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
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