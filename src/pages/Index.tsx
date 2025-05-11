
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Calendar, MapPin, Recycle, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-ewaste-green-100 to-white pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Recycle Your E-Waste, <span className="text-ewaste-green-500">Earn Rewards</span>
              </h1>
              <p className="text-lg text-gray-700">
                Join our e-waste recycling program and help make the world greener while earning rewards for your contributions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services/pickup">
                  <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                    Schedule Pickup <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-ewaste-green-500 text-ewaste-green-500 hover:bg-ewaste-green-500 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-ewaste-green-300 rounded-full opacity-20 animate-pulse-gentle"></div>
              <div className="absolute top-1/3 left-1/4 w-[80px] h-[80px] bg-ewaste-blue-300 rounded-full opacity-30 animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[60px] h-[60px] bg-ewaste-green-500 rounded-full opacity-20 animate-spin-slow"></div>
              
              {/* Main illustration */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 z-10">
                <div className="flex justify-center">
                  <svg className="h-64 w-64 text-ewaste-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21,15a1,1,0,0,0-1-1h-.764l-.9-2.708A1,1,0,0,0,17.439,11H16a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h2V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V15h.589L5.5,12.392A1,1,0,0,0,4.561,12H3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.92l-1.313,2.633A1,1,0,0,0,3.5,20H5a1,1,0,0,0,.8-.4L8,16.333,10.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.77-.37l2.73-3.413L18.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.894-1.447L20.081,16H20A1,1,0,0,0,21,15ZM4,14V13H4.94l.333,1Zm14,0-.333-1H18v1ZM14,7h1a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2ZM8,5h8V9H14V8a3,3,0,0,0-3-3H8Zm1,12.667L7.2,16H4.5l1-2H9ZM16,11V10h1.439L18,12.333V13H16Zm3.5,7H19l-1-2h2Z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mt-4">E-Waste Management Portal</h3>
                <p className="text-center text-gray-600 mt-2">Simple, convenient, rewarding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our process is simple and efficient. Follow these steps to recycle your e-waste and start earning rewards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-ewaste-green-100 text-ewaste-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mt-4">Schedule Pickup</h3>
              <p className="text-gray-600 mt-2">
                Use our online portal to schedule a convenient pickup time for your e-waste items.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-ewaste-blue-100 text-ewaste-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Trash className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mt-4">We Collect</h3>
              <p className="text-gray-600 mt-2">
                Our team will come to your location to collect and transport your e-waste items.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-ewaste-earth-100 text-ewaste-earth-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mt-4">Earn Rewards</h3>
              <p className="text-gray-600 mt-2">
                Get reward points for your contribution that can be redeemed for discounts and gifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-ewaste-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Making E-Waste Recycling Easier Than Ever</h2>
              <p className="text-gray-600 mt-4">
                Our platform provides a seamless experience for responsible e-waste disposal, with features designed to make recycling convenient and rewarding for everyone.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-ewaste-green-100 text-ewaste-green-500 w-10 h-10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Convenient Pickup</h3>
                    <p className="text-gray-600 mt-1">
                      Schedule pickups at your convenience from your home or office location.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-ewaste-blue-100 text-ewaste-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                      <Recycle className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Certified Recycling</h3>
                    <p className="text-gray-600 mt-1">
                      All e-waste is processed by certified recycling partners following environmental standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-ewaste-earth-100 text-ewaste-earth-500 w-10 h-10 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Rewards Program</h3>
                    <p className="text-gray-600 mt-1">
                      Earn points with every recycling contribution that can be redeemed for various rewards.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/services">
                  <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* This would be an actual image in a real app */}
              <div className="bg-gradient-to-br from-ewaste-green-200 to-ewaste-blue-200 h-96 flex items-center justify-center p-8">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg w-full max-w-sm">
                  <div className="flex justify-center text-ewaste-green-500 mb-6">
                    <Recycle className="h-16 w-16" />
                  </div>
                  <h3 className="text-center text-xl font-bold mb-4">Why Recycle E-Waste?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Prevent toxic materials from entering landfills</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Recover valuable materials for reuse</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Reduce carbon footprint and energy consumption</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-ewaste-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Protect sensitive data through secure disposal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-500 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold">Ready to Recycle Your E-Waste?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Join thousands of others who are making a difference by recycling their electronic waste responsibly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button className="bg-white text-ewaste-green-500 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/services/pickup">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule Pickup
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
