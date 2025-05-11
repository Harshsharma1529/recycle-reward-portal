
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

// This is a placeholder for the map. In a real application, 
// you would integrate with a mapping library like Mapbox or Google Maps
const MapLocation: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0 h-[400px] relative">
        {!mapLoaded ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <div className="h-12 w-12 rounded-full border-4 border-ewaste-green-500 border-t-transparent animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Loading map...</p>
          </div>
        ) : (
          <div className="h-full w-full bg-[#E8F5E9] relative">
            {/* This would be replaced with an actual map component */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect width=\"50\" height=\"50\" fill=\"%23D3E8D3\" /><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\" fill=\"%23D3E8D3\" /><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\" fill=\"%23E8F5E9\" /><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\" fill=\"%23E8F5E9\" /></svg>')] opacity-30"></div>
            
            {/* Roads */}
            <div className="absolute left-0 right-0 top-[50%] h-4 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-[30%] w-4 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 right-[20%] w-4 bg-gray-300"></div>
            <div className="absolute left-0 right-0 bottom-[30%] h-4 bg-gray-300"></div>
            
            {/* Map Labels */}
            <div className="absolute top-[20%] left-[15%] bg-white p-1 text-xs shadow-sm">Green Park</div>
            <div className="absolute bottom-[15%] right-[25%] bg-white p-1 text-xs shadow-sm">City Center</div>
            <div className="absolute top-[40%] right-[10%] bg-white p-1 text-xs shadow-sm">Recycling Hub</div>
            
            {/* Map Pins */}
            <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-ewaste-green-500">
              <MapPin size={32} className="animate-bounce" />
              <div className="mt-1 bg-white px-2 py-1 rounded text-xs shadow-sm">Pickup Location</div>
            </div>
            <div className="absolute top-[60%] right-[30%] transform -translate-x-1/2 -translate-y-1/2 text-ewaste-blue-500">
              <MapPin size={24} />
              <div className="mt-1 bg-white px-2 py-1 rounded text-xs shadow-sm">Drop-off Center</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapLocation;
