
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { Award, Gift, ShoppingBag, CreditCard, Coffee, Zap } from 'lucide-react';

const RedeemRewards = () => {
  const { toast } = useToast();
  
  // Mock user points data
  const userPoints = 1250;
  const userLevel = "Silver";
  const nextLevel = "Gold";
  const pointsToNextLevel = 750;

  // Mock available rewards
  const rewards = [
    {
      id: 1,
      name: "10% Discount Coupon",
      description: "Get 10% off your next purchase at participating eco-friendly stores",
      points: 500,
      icon: <ShoppingBag className="h-6 w-6 text-ewaste-green-500" />,
      category: "Discount",
    },
    {
      id: 2,
      name: "Free Coffee",
      description: "Enjoy a free coffee at GreenBean Coffee Shops",
      points: 300,
      icon: <Coffee className="h-6 w-6 text-ewaste-green-500" />,
      category: "Food & Drink",
    },
    {
      id: 3,
      name: "$20 Gift Card",
      description: "Receive a $20 gift card for EcoMart",
      points: 1000,
      icon: <Gift className="h-6 w-6 text-ewaste-green-500" />,
      category: "Gift Card",
    },
    {
      id: 4,
      name: "Movie Tickets",
      description: "Two tickets to any movie at CineGreen Theaters",
      points: 800,
      icon: <CreditCard className="h-6 w-6 text-ewaste-green-500" />,
      category: "Entertainment",
    },
    {
      id: 5,
      name: "Plant a Tree",
      description: "We'll plant a tree in your name in a reforestation area",
      points: 250,
      icon: <Zap className="h-6 w-6 text-ewaste-green-500" />,
      category: "Environment",
    },
    {
      id: 6,
      name: "Premium Membership",
      description: "One month of premium membership with special perks",
      points: 2000,
      icon: <Award className="h-6 w-6 text-ewaste-green-500" />,
      category: "Membership",
    },
  ];

  const handleRedeemReward = (reward: any) => {
    if (userPoints >= reward.points) {
      toast({
        title: "Reward Redeemed!",
        description: `You have successfully redeemed ${reward.name}. Check your email for details.`,
      });
    } else {
      toast({
        title: "Not enough points",
        description: `You need ${reward.points - userPoints} more points to redeem this reward.`,
        variant: "destructive",
      });
    }
  };

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Redeem Your Rewards</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Turn your recycling efforts into exciting rewards and benefits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Your Points</CardTitle>
                <CardDescription>Earn more points by recycling e-waste</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-ewaste-green-600">{userPoints}</span>
                  <span className="ml-2 text-gray-500">points</span>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current Level: <span className="font-medium">{userLevel}</span></span>
                    <span>Next: <span className="font-medium">{nextLevel}</span></span>
                  </div>
                  <Progress value={(userPoints / (userPoints + pointsToNextLevel)) * 100} className="h-2" />
                  <p className="text-xs text-gray-500 mt-2">
                    {pointsToNextLevel} points to reach {nextLevel} level
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="text-sm font-medium">How to earn points:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ewaste-green-500 mr-2"></div>
                      Recycle small electronics: 50-200 points
                    </li>
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ewaste-green-500 mr-2"></div>
                      Recycle computers/laptops: 200-500 points
                    </li>
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ewaste-green-500 mr-2"></div>
                      Recycle large appliances: 300-800 points
                    </li>
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ewaste-green-500 mr-2"></div>
                      Refer friends: 100 points per referral
                    </li>
                  </ul>
                </div>

                <Button className="w-full mt-6 bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
                  View Point History
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map((reward) => (
                <Card key={reward.id} className="overflow-hidden">
                  <div className="bg-ewaste-green-50 p-6 flex justify-center items-center">
                    {reward.icon}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{reward.name}</CardTitle>
                    <span className="inline-block bg-ewaste-green-100 text-ewaste-green-800 text-xs px-2 py-1 rounded">
                      {reward.category}
                    </span>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-500 mb-4">{reward.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-ewaste-green-600">{reward.points} points</span>
                      <Button 
                        onClick={() => handleRedeemReward(reward)}
                        variant={userPoints >= reward.points ? "default" : "outline"}
                        className={userPoints >= reward.points ? "bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white" : ""}
                        disabled={userPoints < reward.points}
                      >
                        Redeem
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RedeemRewards;
