
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-ewaste-green-500 h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,15a1,1,0,0,0-1-1h-.764l-.9-2.708A1,1,0,0,0,17.439,11H16a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h2V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V15h.589L5.5,12.392A1,1,0,0,0,4.561,12H3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.92l-1.313,2.633A1,1,0,0,0,3.5,20H5a1,1,0,0,0,.8-.4L8,16.333,10.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.77-.37l2.73-3.413L18.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.894-1.447L20.081,16H20A1,1,0,0,0,21,15ZM4,14V13H4.94l.333,1Zm14,0-.333-1H18v1ZM14,7h1a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2ZM8,5h8V9H14V8a3,3,0,0,0-3-3H8Zm1,12.667L7.2,16H4.5l1-2H9ZM16,11V10h1.439L18,12.333V13H16Zm3.5,7H19l-1-2h2Z" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-500">
                E-Waste Management
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-ewaste-green-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-ewaste-green-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-ewaste-green-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition ease-out duration-200">
                <div className="py-1">
                  <Link to="/services/pickup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-ewaste-green-100">
                    Schedule Pickup
                  </Link>
                  <Link to="/services/tracking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-ewaste-green-100">
                    Track Your Waste
                  </Link>
                  <Link to="/services/rewards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-ewaste-green-100">
                    Rewards Program
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-ewaste-green-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-2">
            <Link to="/login">
              <Button variant="outline" className="border-ewaste-green-500 text-ewaste-green-500 hover:bg-ewaste-green-500 hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-ewaste-green-500 text-white hover:bg-ewaste-green-600">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" 
              className="text-gray-700 hover:text-ewaste-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/about"
              className="text-gray-700 hover:text-ewaste-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link to="/services/pickup"
              className="text-gray-700 hover:text-ewaste-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Pickup
            </Link>
            <Link to="/services/tracking"
              className="text-gray-700 hover:text-ewaste-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Your Waste
            </Link>
            <Link to="/services/rewards"
              className="text-gray-700 hover:text-ewaste-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards Program
            </Link>
            <Link to="/contact"
              className="text-gray-700 hover:text-ewaste-green-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Link to="/login" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-ewaste-green-500 text-ewaste-green-500 hover:bg-ewaste-green-500 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
              </div>
              <div className="ml-3">
                <Link to="/register" className="w-full">
                  <Button 
                    className="w-full bg-ewaste-green-500 text-white hover:bg-ewaste-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
