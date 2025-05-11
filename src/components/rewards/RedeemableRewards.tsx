
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Reward = {
  id: number;
  name: string;
  description: string;
  pointsRequired: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isNew?: boolean;
};

const RedeemableRewards: React.FC = () => {
  const rewards: Reward[] = [
    {
      id: 1,
      name: '10% Discount Coupon',
      description: 'Get 10% off your next online purchase at GreenTech Store',
      pointsRequired: 500,
      image: 'discount-coupon.png',
      category: 'Discount',
      isPopular: true,
    },
    {
      id: 2,
      name: 'Plant a Tree',
      description: 'We plant a tree in your name through our reforestation partners',
      pointsRequired: 1000,
      image: 'plant-tree.png',
      category: 'Environmental',
      isNew: true,
    },
    {
      id: 3,
      name: 'Eco-Friendly Tote Bag',
      description: 'Reusable tote bag made from recycled materials',
      pointsRequired: 750,
      image: 'tote-bag.png',
      category: 'Merchandise',
    },
    {
      id: 4,
      name: '$20 Gift Card',
      description: 'Redeem for a $20 gift card at partner stores',
      pointsRequired: 2000,
      image: 'gift-card.png',
      category: 'Gift Card',
      isPopular: true,
    },
    {
      id: 5,
      name: 'Phone Charging Cable',
      description: 'Eco-friendly USB charging cable made from recycled plastics',
      pointsRequired: 1200,
      image: 'charging-cable.png',
      category: 'Electronics',
    },
    {
      id: 6,
      name: '20% Repair Discount',
      description: 'Get 20% off electronics repair services',
      pointsRequired: 1500,
      image: 'repair-discount.png',
      category: 'Service',
      isNew: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Redeem Your Points</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <Card key={reward.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gradient-to-r from-ewaste-green-100 to-ewaste-blue-100 flex items-center justify-center">
              {/* This would be an actual image in a real app */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm">
                {reward.category === 'Discount' && '🏷️'}
                {reward.category === 'Environmental' && '🌳'}
                {reward.category === 'Merchandise' && '👜'}
                {reward.category === 'Gift Card' && '🎁'}
                {reward.category === 'Electronics' && '🔌'}
                {reward.category === 'Service' && '🛠️'}
              </div>

              {/* Badges */}
              <div className="absolute top-2 left-2 flex space-x-2">
                {reward.isNew && (
                  <Badge className="bg-ewaste-blue-500">New</Badge>
                )}
                {reward.isPopular && (
                  <Badge className="bg-ewaste-earth-400">Popular</Badge>
                )}
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{reward.name}</h3>
                <span className="text-sm font-medium text-ewaste-green-600">
                  {reward.pointsRequired} pts
                </span>
              </div>
            </CardHeader>
            <CardContent className="py-0">
              <p className="text-sm text-muted-foreground">{reward.description}</p>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="w-full bg-ewaste-green-500 hover:bg-ewaste-green-600">
                Redeem Reward
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RedeemableRewards;
