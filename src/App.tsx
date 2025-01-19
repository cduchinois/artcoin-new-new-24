import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { config } from './lib/web3Config';
import { NavigationBar } from "./components/NavigationBar";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Leaderboard from "./pages/Leaderboard";

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <NavigationBar />
            <div className="pt-16"> {/* Add padding to account for fixed navbar */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;