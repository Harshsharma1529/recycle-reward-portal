
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import RewardsCard from '@/components/rewards/RewardsCard';
import RedeemableRewards from '@/components/rewards/RedeemableRewards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, BadgeCheck, Gift } from 'lucide-react';

const Rewards = () => {
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Rewards Program</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Earn points for your e-waste recycling efforts and redeem them for exciting rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-ewaste-green-100 text-ewaste-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">Earn Points</h3>
            <p className="text-gray-600 mt-2">
              Get rewarded for every e-waste item you recycle through our platform
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-ewaste-blue-100 text-ewaste-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">Level Up</h3>
            <p className="text-gray-600 mt-2">
              Progress through different levels to unlock exclusive rewards and benefits
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-ewaste-earth-100 text-ewaste-earth-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">Redeem Rewards</h3>
            <p className="text-gray-600 mt-2">
              Use your accumulated points to claim discounts, gifts, and eco-friendly products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div>
            <RewardsCard
              points={1250} 
              level="Silver" 
              nextLevel="Gold" 
              nextLevelPoints={2000}
              recentRewards={recentRewards}
            />
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="available">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="available">Available Rewards</TabsTrigger>
                  <TabsTrigger value="redeemed">Redeemed Rewards</TabsTrigger>
                  <TabsTrigger value="how">How It Works</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="available" className="space-y-4">
                <RedeemableRewards />
              </TabsContent>
              
              <TabsContent value="redeemed">
                <div className="bg-muted/50 rounded-lg p-12 text-center">
                  <Gift className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">No Redeemed Rewards Yet</h3>
                  <p className="text-muted-foreground mt-2">
                    Once you redeem rewards, they will appear here for tracking
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="how">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">How the Rewards Program Works</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ewaste-green-100 text-ewaste-green-500 flex items-center justify-center mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Earn Points</h4>
                        <p className="text-gray-600 mt-1">
                          Receive points for every item you recycle. Different items are worth different point values:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                          <li>Smartphones: 50-100 points</li>
                          <li>Laptops/Computers: 150-300 points</li>
                          <li>Tablets: 75-150 points</li>
                          <li>Monitors: 100-200 points</li>
                          <li>Small electronics: 25-75 points</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ewaste-blue-100 text-ewaste-blue-500 flex items-center justify-center mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Progress Through Levels</h4>
                        <p className="text-gray-600 mt-1">
                          As you accumulate points, you'll advance through membership levels:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                          <li>Bronze: 0-999 points</li>
                          <li>Silver: 1,000-1,999 points</li>
                          <li>Gold: 2,000-4,999 points</li>
                          <li>Platinum: 5,000+ points</li>
                        </ul>
                        <p className="text-gray-600 mt-2">
                          Each level unlocks new and exclusive rewards.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ewaste-earth-100 text-ewaste-earth-500 flex items-center justify-center mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Redeem Your Rewards</h4>
                        <p className="text-gray-600 mt-1">
                          Use your points to claim various rewards from our catalog:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                          <li>Discount coupons for eco-friendly products</li>
                          <li>Gift cards to popular retailers</li>
                          <li>Eco-friendly merchandise</li>
                          <li>Tree planting donations</li>
                          <li>Electronics repair services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Rewards;
