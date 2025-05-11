
import React, { useState, useEffect } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import StatsCard from '@/components/dashboard/StatsCard';
import WasteTrackingCard from '@/components/dashboard/WasteTrackingCard';
import RewardsCard from '@/components/rewards/RewardsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Package, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // For new users, we'll start with empty waste tracking data
  const wasteItems = user?.wasteItems || [];
  
  // For new users, we'll initialize with 0 points
  const userPoints = user?.points || 0;
  const userLevel = userPoints < 1000 ? "Bronze" : userPoints < 2500 ? "Silver" : "Gold";
  const nextLevel = userLevel === "Bronze" ? "Silver" : userLevel === "Silver" ? "Gold" : "Platinum";
  const nextLevelPoints = userLevel === "Bronze" ? 1000 : userLevel === "Silver" ? 2500 : 5000;

  // For new users, no rewards history
  const recentRewards = user?.recentRewards || [];

  // Empty state for upcoming pickups
  const hasUpcomingPickups = user?.upcomingPickups?.length > 0 || false;

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Dashboard</h1>
          <Link to="/services/pickup">
            <Button className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
              Schedule New Pickup
            </Button>
          </Link>
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
              points={userPoints} 
              level={userLevel} 
              nextLevel={nextLevel} 
              nextLevelPoints={nextLevelPoints}
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
              {!hasUpcomingPickups ? (
                <div className="text-center py-6">
                  <div className="h-16 w-16 mx-auto bg-ewaste-green-100 text-ewaste-green-500 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="font-medium mb-1">No upcoming pickups</h3>
                  <p className="text-sm text-muted-foreground mb-4">Schedule your first e-waste pickup today</p>
                  <Link to="/services/pickup">
                    <Button variant="outline" className="bg-ewaste-green-50 text-ewaste-green-600 border-ewaste-green-200 hover:bg-ewaste-green-100">
                      Schedule Now
                    </Button>
                  </Link>
                </div>
              ) : (
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
              )}
            </CardContent>
            <CardFooter>
              <Link to="/services/history" className="w-full">
                <Button variant="outline" className="w-full">View All Appointments</Button>
              </Link>
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
                <Link to="/services/pickup" className="w-full">
                  <Button variant="outline" className="h-auto py-4 w-full flex flex-col items-center justify-center">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span>Schedule Pickup</span>
                  </Button>
                </Link>
                <Link to="/services/locations" className="w-full">
                  <Button variant="outline" className="h-auto py-4 w-full flex flex-col items-center justify-center">
                    <MapPin className="h-6 w-6 mb-2" />
                    <span>Drop-off Locations</span>
                  </Button>
                </Link>
                <Link to="/services/rewards" className="w-full">
                  <Button variant="outline" className="h-auto py-4 w-full flex flex-col items-center justify-center">
                    <svg className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Redeem Points</span>
                  </Button>
                </Link>
                <Link to="/contact" className="w-full">
                  <Button variant="outline" className="h-auto py-4 w-full flex flex-col items-center justify-center">
                    <LinkIcon className="h-6 w-6 mb-2" />
                    <span>Get Help</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserDashboard;
