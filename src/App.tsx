
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApplicationProvider } from "./context/ApplicationContext";

import Index from "./pages/Index";
import VisaResults from "./pages/VisaResults";
import VisaApplication from "./pages/VisaApplication";
import ApplicationComplete from "./pages/ApplicationComplete";
import NotFound from "./pages/NotFound";
import Workflow from "./pages/Workflow";

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
            <Route path="/visa-results" element={<VisaResults />} />
            <Route path="/visa-application" element={<VisaApplication />} />
            <Route path="/application-complete" element={<ApplicationComplete />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ApplicationProvider>
  </QueryClientProvider>
);

export default App;
