
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import UserDashboard from "./pages/user/Dashboard";
import SchedulePickup from "./pages/services/SchedulePickup";
import TrackWaste from "./pages/services/TrackWaste";
import Rewards from "./pages/services/Rewards";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DropoffLocations from "./pages/services/DropoffLocations";
import Profile from "./pages/user/Profile";
import RedeemRewards from "./pages/services/RedeemRewards";
import EducationalResources from "./pages/services/EducationalResources";
import PickupHistory from "./pages/services/PickupHistory";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import EWastePickup from "./pages/services/EWastePickup";
import SecureDisposal from "./pages/services/SecureDisposal";
import ElectronicsRecycling from "./pages/services/ElectronicsRecycling";
import CorporateSolutions from "./pages/services/CorporateSolutions";
import EnvironmentalEducation from "./pages/services/EnvironmentalEducation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          
          {/* Protected user routes */}
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/services/pickup" element={<ProtectedRoute><SchedulePickup /></ProtectedRoute>} />
          <Route path="/services/tracking" element={<ProtectedRoute><TrackWaste /></ProtectedRoute>} />
          <Route path="/services/rewards" element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
          <Route path="/services/redeem" element={<ProtectedRoute><RedeemRewards /></ProtectedRoute>} />
          <Route path="/services/locations" element={<ProtectedRoute><DropoffLocations /></ProtectedRoute>} />
          <Route path="/services/history" element={<ProtectedRoute><PickupHistory /></ProtectedRoute>} />
          <Route path="/services/learn" element={<ProtectedRoute><EducationalResources /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          
          {/* New service pages */}
          <Route path="/services/ewaste-pickup" element={<EWastePickup />} />
          <Route path="/services/secure-disposal" element={<SecureDisposal />} />
          <Route path="/services/electronics-recycling" element={<ElectronicsRecycling />} />
          <Route path="/services/corporate" element={<CorporateSolutions />} />
          <Route path="/services/education" element={<EnvironmentalEducation />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
