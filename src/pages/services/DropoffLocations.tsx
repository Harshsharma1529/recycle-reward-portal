
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import MapLocation from '@/components/pickup/MapLocation';

const DropoffLocations = () => {
  // Sample drop-off locations
  const locations = [
    {
      id: 1,
      name: 'City Center Recycling Hub',
      address: '123 Green Street, City Center',
      hours: 'Mon-Fri: 9AM-5PM, Sat: 10AM-3PM',
      phone: '(555) 123-4567',
      acceptedItems: ['Computers', 'Phones', 'Tablets', 'Printers', 'Small Electronics'],
    },
    {
      id: 2,
      name: 'Westside Collection Point',
      address: '456 Eco Avenue, West District',
      hours: 'Mon-Sat: 8AM-6PM',
      phone: '(555) 987-6543',
      acceptedItems: ['Large Appliances', 'TVs', 'Monitors', 'Computer Parts', 'Batteries'],
    },
    {
      id: 3,
      name: 'Eastside E-Waste Center',
      address: '789 Recycling Road, East End',
      hours: 'Tue-Sun: 10AM-7PM',
      phone: '(555) 456-7890',
      acceptedItems: ['All Electronics', 'Batteries', 'Cables', 'Peripherals'],
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Drop-off Locations</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Convenient locations where you can drop off your electronic waste for responsible recycling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MapLocation />
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Find a Location Near You</CardTitle>
                <CardDescription>
                  Browse our network of e-waste collection points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {locations.map((location) => (
                  <div key={location.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-lg text-ewaste-green-600">{location.name}</h3>
                    
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mt-1 mr-2 text-ewaste-blue-500 flex-shrink-0" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mt-1 mr-2 text-ewaste-blue-500 flex-shrink-0" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-4 w-4 mt-1 mr-2 text-ewaste-blue-500 flex-shrink-0" />
                        <span className="text-sm">{location.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 font-medium">Accepted items:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {location.acceptedItems.map((item, i) => (
                          <span 
                            key={i}
                            className="bg-ewaste-green-100 text-ewaste-green-800 text-xs px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="mt-4 flex items-center text-ewaste-blue-600 text-sm font-medium">
                      <Navigation className="h-4 w-4 mr-1" />
                      Get Directions
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DropoffLocations;
