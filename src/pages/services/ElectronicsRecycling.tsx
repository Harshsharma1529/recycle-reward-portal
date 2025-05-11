
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recycle, Laptop, Smartphone, Tv, Battery, Award, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ElectronicsRecycling = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ewaste-green-100 text-ewaste-green-700 py-1 px-3 text-sm">
            Electronics Recycling
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Responsible Electronics Recycling</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turning electronic waste into valuable resources through sustainable recycling processes
          </p>
        </div>

        {/* Why Recycle Electronics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why Recycle Electronics?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-ewaste-green-200 hover:shadow-md transition-all">
              <CardContent className="p-8">
                <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-ewaste-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Resource Recovery</h3>
                <p className="text-gray-600">
                  Electronics contain valuable materials like gold, silver, copper, and rare earth elements that can be recovered and reused.
                </p>
              </CardContent>
            </Card>

            <Card className="border-ewaste-green-200 hover:shadow-md transition-all">
              <CardContent className="p-8">
                <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-ewaste-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Environmental Protection</h3>
                <p className="text-gray-600">
                  Proper recycling prevents hazardous substances found in electronics from contaminating soil, water, and air.
                </p>
              </CardContent>
            </Card>

            <Card className="border-ewaste-green-200 hover:shadow-md transition-all">
              <CardContent className="p-8">
                <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-ewaste-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Energy Conservation</h3>
                <p className="text-gray-600">
                  Recycling electronics requires significantly less energy than manufacturing products from raw materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Recycle */}
        <div className="bg-ewaste-green-50 rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">What We Recycle</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-ewaste-green-600" />
              </div>
              <h3 className="font-bold">Computers & Laptops</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-ewaste-green-600" />
              </div>
              <h3 className="font-bold">Mobile Devices</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="h-8 w-8 text-ewaste-green-600" />
              </div>
              <h3 className="font-bold">TVs & Monitors</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-ewaste-green-600" />
              </div>
              <h3 className="font-bold">Batteries</h3>
            </div>
            
            {/* More categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-ewaste-green-600 font-bold text-xl">🖨️</div>
              </div>
              <h3 className="font-bold">Printers & Scanners</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-ewaste-green-600 font-bold text-xl">🎮</div>
              </div>
              <h3 className="font-bold">Gaming Consoles</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-ewaste-green-600 font-bold text-xl">🔌</div>
              </div>
              <h3 className="font-bold">Small Appliances</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-ewaste-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-ewaste-green-600 font-bold text-xl">💽</div>
              </div>
              <h3 className="font-bold">Storage Media</h3>
            </div>
          </div>
        </div>

        {/* Our Recycling Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Recycling Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 h-full border-l-2 border-dashed border-ewaste-green-300"></div>
              
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-green-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-green-700">Collection</h3>
                    <p className="mt-2 text-gray-600">
                      We collect e-waste through scheduled pickups or drop-off locations across the country.
                      Each item is carefully handled and transported to our recycling facilities.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-green-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-green-700">Sorting & Assessment</h3>
                    <p className="mt-2 text-gray-600">
                      Items are sorted by type and assessed for potential reuse. Devices that can be refurbished
                      are set aside, while others continue to the recycling process.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-green-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-green-700">Dismantling</h3>
                    <p className="mt-2 text-gray-600">
                      Skilled technicians manually dismantle devices to separate components like circuit boards,
                      batteries, screens, plastics, and metals.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-green-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-green-700">Material Recovery</h3>
                    <p className="mt-2 text-gray-600">
                      Using advanced processes, we recover valuable materials such as gold, silver, copper,
                      aluminum, and plastics from the components.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="bg-ewaste-green-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      5
                    </div>
                  </div>
                  <div className="ml-6 mt-1">
                    <h3 className="text-xl font-bold text-ewaste-green-700">Responsible Disposal</h3>
                    <p className="mt-2 text-gray-600">
                      Any hazardous materials that cannot be recycled are safely disposed of according
                      to environmental regulations, ensuring zero landfill impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-gradient-to-r from-ewaste-green-600 to-ewaste-blue-600 text-white rounded-xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Through our recycling efforts, we've made a significant positive impact on the environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Tonnes of E-Waste Recycled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">65%</div>
              <div className="text-lg">Material Recovery Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Trees Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.2M</div>
              <div className="text-lg">kWh Energy Saved</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Recycle Your Electronics?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to create a sustainable future by recycling your electronic waste responsibly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
              Schedule a Pickup
            </Button>
            <Button size="lg" variant="outline" className="border-ewaste-green-500 text-ewaste-green-500 hover:bg-ewaste-green-50">
              Find Drop-off Locations
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ElectronicsRecycling;
