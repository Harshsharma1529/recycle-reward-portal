
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface WasteItem {
  id: string;
  type: string;
  status: 'collected' | 'processing' | 'recycled';
  date: string;
  weight: string;
}

interface WasteTrackingCardProps {
  wasteItems: WasteItem[];
}

const WasteTrackingCard: React.FC<WasteTrackingCardProps> = ({ wasteItems }) => {
  // Get status percentage for the progress bar
  const getStatusPercentage = (status: string) => {
    switch (status) {
      case 'collected':
        return 33;
      case 'processing':
        return 66;
      case 'recycled':
        return 100;
      default:
        return 0;
    }
  };

  // Get status badge color
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'collected':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'recycled':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Waste Tracking</CardTitle>
        <CardDescription>Track the status of your e-waste collection</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {wasteItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{item.type}</h4>
                <Badge className={getStatusBadgeClass(item.status)} variant="outline">
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
              </div>
              
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Collected</span>
                  <span className="text-muted-foreground">Processing</span>
                  <span className="text-muted-foreground">Recycled</span>
                </div>
                <Progress value={getStatusPercentage(item.status)} className="h-2" />
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <div className="text-muted-foreground">
                  Date: <span className="text-foreground">{item.date}</span>
                </div>
                <div className="text-muted-foreground">
                  Weight: <span className="text-foreground">{item.weight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View All Items</Button>
      </CardFooter>
    </Card>
  );
};

export default WasteTrackingCard;
