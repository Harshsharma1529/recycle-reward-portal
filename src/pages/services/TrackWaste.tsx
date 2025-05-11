
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import WasteTrackingCard from '@/components/dashboard/WasteTrackingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

const TrackWaste = () => {
  // Mock data for waste tracking
  const wasteItems = [
    {
      id: '1',
      type: 'Old Laptop',
      status: 'recycled' as const,
      date: '2023-11-15',
      weight: '2.5 kg',
    },
    {
      id: '2',
      type: 'Mobile Phone',
      status: 'processing' as const,
      date: '2023-12-01',
      weight: '0.2 kg',
    },
    {
      id: '3',
      type: 'Computer Monitor',
      status: 'collected' as const,
      date: '2023-12-10',
      weight: '4.8 kg',
    },
    {
      id: '4',
      type: 'Tablet',
      status: 'collected' as const,
      date: '2023-12-12',
      weight: '0.6 kg',
    },
    {
      id: '5',
      type: 'Printer',
      status: 'recycled' as const,
      date: '2023-10-05',
      weight: '8.3 kg',
    },
    {
      id: '6',
      type: 'Old Television',
      status: 'processing' as const,
      date: '2023-11-22',
      weight: '12.7 kg',
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Track Your E-Waste</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Follow the journey of your electronic waste from collection to recycling
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <h2 className="text-lg font-medium mb-4">Find Your E-Waste</h2>
            <div className="flex gap-4">
              <div className="flex-grow">
                <Input placeholder="Enter tracking ID or item description" />
              </div>
              <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                <SearchIcon className="mr-2 h-4 w-4" /> Track
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <WasteTrackingCard wasteItems={wasteItems} />
          
          {/* Tracking Process Explanation */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border">
            <h2 className="text-lg font-medium mb-4">Understanding the Recycling Process</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Collection</h3>
                  <p className="text-gray-600 mt-1">
                    Your e-waste is picked up from your location or dropped off at one of our collection points. It is then sorted and prepared for processing.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Processing</h3>
                  <p className="text-gray-600 mt-1">
                    The e-waste is disassembled, and components are separated. Hazardous materials are safely removed, and reusable parts are identified.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Recycled</h3>
                  <p className="text-gray-600 mt-1">
                    Materials like plastic, metals, and glass are recycled and reintroduced into the manufacturing process. Your e-waste has been successfully recycled!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <p className="text-gray-700">
                <strong>Note:</strong> Once your e-waste reaches the "Recycled" status, a certificate of recycling can be downloaded from your dashboard. You'll also receive points for your contributions to the environment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TrackWaste;
