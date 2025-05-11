
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import StatsCard from '@/components/dashboard/StatsCard';
import WasteTrackingCard from '@/components/dashboard/WasteTrackingCard';
import RewardsCard from '@/components/rewards/RewardsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const UserDashboard = () => {
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
  ];

  // Mock data for rewards
  const recentRewards = [
    {
      id: 1,
      name: 'Laptop Recycling',
      points: 250,
      date: 'Dec 15, 2023',
    },
    {
      id: 2,
      name: '10% Discount Coupon',
      points: 100,
      date: 'Nov 28, 2023',
    },
    {
      id: 3,
      name: 'Battery Recycling',
      points: 50,
      date: 'Nov 10, 2023',
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Dashboard</h1>
          <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
            Schedule New Pickup
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="mb-8">
          <StatsCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Waste Tracking Section */}
          <div className="md:col-span-2">
            <WasteTrackingCard wasteItems={wasteItems} />
          </div>

          {/* Rewards Section */}
          <div>
            <RewardsCard 
              points={1250} 
              level="Silver" 
              nextLevel="Gold" 
              nextLevelPoints={2000}
              recentRewards={recentRewards} 
            />
          </div>
        </div>

        {/* Upcoming Pickups and Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Upcoming Pickups */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Upcoming Pickups</CardTitle>
              <CardDescription>Your scheduled e-waste collection appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex p-4 bg-muted rounded-lg">
                  <div className="mr-4">
                    <div className="h-12 w-12 bg-ewaste-green-100 text-ewaste-green-500 flex items-center justify-center rounded-full">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Home Pickup</h3>
                    <p className="text-sm text-muted-foreground">December 18, 2023 • 2:00 PM - 4:00 PM</p>
                    <div className="flex items-center mt-1 text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-muted-foreground">123 Green Street, Eco City</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Appointments</Button>
            </CardFooter>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
              <CardDescription>Common tasks and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Schedule Pickup</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                  <MapPin className="h-6 w-6 mb-2" />
                  <span>Drop-off Locations</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                  <svg className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Redeem Points</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                  <svg className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Get Help</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserDashboard;
