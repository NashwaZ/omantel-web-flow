
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApplicationProvider } from "./context/ApplicationContext";

import Index from "./pages/Index";
import Workflow from "./pages/Workflow";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";
import VisaSearch from "./pages/VisaSearch";
import VisaResults from "./pages/VisaResults";
import VisaApplication from "./pages/VisaApplication";
import ApplicationComplete from "./pages/ApplicationComplete";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ApplicationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/documentation" element={<Documentation />} />
            
            {/* Visa Application Flow */}
            <Route path="/visa-search" element={<VisaSearch />} />
            <Route path="/visa-results" element={<VisaResults />} />
            <Route path="/visa-application" element={<VisaApplication />} />
            <Route path="/application-complete" element={<ApplicationComplete />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ApplicationProvider>
  </QueryClientProvider>
);

export default App;
