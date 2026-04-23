import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ChapterPage from "./pages/ChapterPage.tsx";
import Layer1Page from "./pages/Layer1Page.tsx";
import Layer2Page from "./pages/Layer2Page.tsx";
import ExamplePage from "./pages/ExamplePage.tsx";
import Layer3Page from "./pages/Layer3Page.tsx";
import ReadPage from "./pages/ReadPage.tsx";
import TrailPage from "./pages/TrailPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chapter/:number" element={<ChapterPage />} />
          <Route path="/c/:id" element={<Layer1Page />} />
          <Route path="/c/:id/more" element={<Layer2Page />} />
          <Route path="/c/:id/example" element={<ExamplePage />} />
          <Route path="/c/:id/read" element={<Layer3Page />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/saved" element={<TrailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
