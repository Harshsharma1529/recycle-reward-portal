
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award, Gift, Package } from 'lucide-react';

interface RewardsCardProps {
  points: number;
  level: string;
  nextLevel: string;
  nextLevelPoints: number;
  recentRewards: {
    id: number;
    name: string;
    points: number;
    date: string;
  }[];
}

const RewardsCard: React.FC<RewardsCardProps> = ({ 
  points, 
  level, 
  nextLevel, 
  nextLevelPoints,
  recentRewards 
}) => {
  const progress = Math.min((points / nextLevelPoints) * 100, 100);
  
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Your Rewards</CardTitle>
          <Badge variant="outline" className="bg-gradient-to-r from-ewaste-green-500 to-ewaste-blue-400 text-white">
            {level} Level
          </Badge>
        </div>
        <CardDescription>Earn points for every e-waste recycled</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Total Points</span>
            <span className="font-bold text-ewaste-green-500">{points.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{points} points</span>
            <span>{nextLevelPoints - points} points to {nextLevel}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Recent Rewards</h4>
          <div className="space-y-3">
            {recentRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center">
                  {reward.name.includes('Discount') ? (
                    <div className="h-10 w-10 rounded-full bg-ewaste-blue-100 text-ewaste-blue-500 flex items-center justify-center mr-3">
                      <Gift size={18} />
                    </div>
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-ewaste-green-100 text-ewaste-green-500 flex items-center justify-center mr-3">
                      <Award size={18} />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">{reward.name}</p>
                    <p className="text-xs text-muted-foreground">{reward.date}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-ewaste-green-500">
                  +{reward.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-sm text-muted-foreground flex items-center">
          <Package className="mr-1 h-4 w-4" />
          Recycle more to earn points
        </p>
        <Badge className="bg-ewaste-green-500">View All Rewards</Badge>
      </CardFooter>
    </Card>
  );
};

export default RewardsCard;
