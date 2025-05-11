
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IndianRupee, Gift, ShoppingBag } from 'lucide-react';

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
      name: '₹100 Amazon Gift Card',
      description: 'Get a ₹100 gift card for Amazon India',
      pointsRequired: 500,
      image: 'amazon-gift-card.png',
      category: 'Gift Card',
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
      name: '₹500 Flipkart Voucher',
      description: 'Redeem for a ₹500 voucher at Flipkart',
      pointsRequired: 2000,
      image: 'flipkart-voucher.png',
      category: 'Gift Card',
      isPopular: true,
    },
    {
      id: 5,
      name: '₹200 Swiggy Credit',
      description: 'Get ₹200 credit for your next Swiggy order',
      pointsRequired: 1200,
      image: 'swiggy-credit.png',
      category: 'Food',
      isNew: true,
    },
    {
      id: 6,
      name: '20% Repair Discount',
      description: 'Get 20% off electronics repair services',
      pointsRequired: 1500,
      image: 'repair-discount.png',
      category: 'Service',
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
                {reward.category === 'Gift Card' && <Gift size={36} className="text-ewaste-green-500" />}
                {reward.category === 'Environmental' && '🌳'}
                {reward.category === 'Merchandise' && '👜'}
                {reward.category === 'Food' && '🍽️'}
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
              <Button className="w-full bg-ewaste-green-600 hover:bg-ewaste-green-700 text-white">
                {reward.name.includes('₹') ? <IndianRupee className="mr-1 h-4 w-4" /> : <ShoppingBag className="mr-1 h-4 w-4" />} 
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
