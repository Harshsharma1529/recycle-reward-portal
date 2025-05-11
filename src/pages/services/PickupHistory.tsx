
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { CalendarClock, MapPin, Package, Check, Truck, RefreshCw, Download } from 'lucide-react';

const PickupHistory = () => {
  const upcomingPickups = [
    {
      id: "PU-8732",
      date: new Date(2025, 4, 15, 14, 0),  // May 15, 2025, 2:00 PM
      timeSlot: "2:00 PM - 4:00 PM",
      address: "123 Green Street, Eco City",
      status: "scheduled",
      items: [
        { type: "Laptop", quantity: 1 },
        { type: "Mobile Phone", quantity: 2 },
      ]
    },
    {
      id: "PU-8745",
      date: new Date(2025, 4, 22, 10, 0),  // May 22, 2025, 10:00 AM
      timeSlot: "10:00 AM - 12:00 PM",
      address: "456 Recycling Road, Eco City",
      status: "confirmed",
      items: [
        { type: "Television", quantity: 1 },
        { type: "DVD Player", quantity: 1 },
        { type: "Gaming Console", quantity: 1 },
      ]
    }
  ];

  const pastPickups = [
    {
      id: "PU-8654",
      date: new Date(2025, 3, 10, 15, 0),  // April 10, 2025, 3:00 PM
      timeSlot: "3:00 PM - 5:00 PM",
      address: "123 Green Street, Eco City",
      status: "completed",
      items: [
        { type: "Computer Monitor", quantity: 2 },
        { type: "Keyboard", quantity: 3 },
        { type: "Mouse", quantity: 3 },
      ],
      pointsEarned: 350
    },
    {
      id: "PU-8512",
      date: new Date(2025, 2, 5, 11, 0),  // March 5, 2025, 11:00 AM
      timeSlot: "11:00 AM - 1:00 PM",
      address: "123 Green Street, Eco City",
      status: "completed",
      items: [
        { type: "Refrigerator", quantity: 1 },
      ],
      pointsEarned: 450
    },
    {
      id: "PU-8403",
      date: new Date(2025, 1, 18, 9, 0),  // Feb 18, 2025, 9:00 AM
      timeSlot: "9:00 AM - 11:00 AM",
      address: "789 Oak Avenue, Eco City",
      status: "completed",
      items: [
        { type: "Smartphone", quantity: 3 },
        { type: "Tablet", quantity: 1 },
        { type: "Chargers & Cables", quantity: 8 },
      ],
      pointsEarned: 280
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
      case 'in-transit':
        return 'bg-amber-100 text-amber-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'Scheduled';
      case 'confirmed':
        return 'Confirmed';
      case 'in-transit':
        return 'In Transit';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <CalendarClock className="h-4 w-4" />;
      case 'confirmed':
        return <Check className="h-4 w-4" />;
      case 'in-transit':
        return <Truck className="h-4 w-4" />;
      case 'completed':
        return <Check className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Pickup History</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Track and manage all your e-waste collection requests
          </p>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">
              <CalendarClock className="mr-2 h-4 w-4" />
              Upcoming Pickups
            </TabsTrigger>
            <TabsTrigger value="past">
              <Package className="mr-2 h-4 w-4" />
              Past Pickups
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingPickups.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <div className="mx-auto bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                      <CalendarClock className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium">No upcoming pickups</h3>
                    <p className="text-gray-500 mt-2">Schedule your first e-waste pickup today</p>
                    <Button className="mt-4 bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                      Schedule Pickup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {upcomingPickups.map((pickup) => (
                  <Card key={pickup.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-2">
                            <Badge className={getStatusColor(pickup.status)}>
                              {getStatusIcon(pickup.status)}
                              <span className="ml-1">{getStatusLabel(pickup.status)}</span>
                            </Badge>
                            <span className="ml-3 text-sm text-gray-500">#{pickup.id}</span>
                          </div>
                          <CardTitle className="text-xl">
                            Pickup on {format(pickup.date, 'MMMM d, yyyy')}
                          </CardTitle>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Time Slot</p>
                          <p className="font-medium">{pickup.timeSlot}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Address</p>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mt-0.5 mr-1 text-ewaste-blue-500 flex-shrink-0" />
                            <p className="font-medium">{pickup.address}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Items for Collection</p>
                        <div className="flex flex-wrap gap-2">
                          {pickup.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                              {item.quantity}× {item.type}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-wrap gap-2">
                        <Button variant="outline">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Reschedule
                        </Button>
                        <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Cancel Pickup
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastPickups.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <div className="mx-auto bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                      <Package className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium">No past pickups</h3>
                    <p className="text-gray-500 mt-2">Your completed pickups will appear here</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {pastPickups.map((pickup) => (
                  <Card key={pickup.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-2">
                            <Badge className={getStatusColor(pickup.status)}>
                              {getStatusIcon(pickup.status)}
                              <span className="ml-1">{getStatusLabel(pickup.status)}</span>
                            </Badge>
                            <span className="ml-3 text-sm text-gray-500">#{pickup.id}</span>
                          </div>
                          <CardTitle className="text-xl">
                            Pickup on {format(pickup.date, 'MMMM d, yyyy')}
                          </CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="text-ewaste-green-600 font-medium">
                            +{pickup.pointsEarned} points earned
                          </div>
                          <Button variant="link" className="px-0 h-8">
                            <Download className="h-4 w-4 mr-1" />
                            Download Receipt
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Time Slot</p>
                          <p className="font-medium">{pickup.timeSlot}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Address</p>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mt-0.5 mr-1 text-ewaste-blue-500 flex-shrink-0" />
                            <p className="font-medium">{pickup.address}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Collected Items</p>
                        <div className="flex flex-wrap gap-2">
                          {pickup.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                              {item.quantity}× {item.type}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="mt-6">
                        Schedule Similar Pickup
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default PickupHistory;
