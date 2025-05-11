
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Battery, Clock, Recycle } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  positive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, positive }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {change && (
              <p className={`text-xs font-medium mt-1 ${positive ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </p>
            )}
          </div>
          <div className="rounded-full p-3 bg-muted">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Items Recycled" 
        value="145" 
        icon={<Recycle className="h-5 w-5 text-ewaste-green-500" />} 
        change="+12% from last month" 
        positive={true}
      />
      <StatCard 
        title="Total Weight" 
        value="278 kg" 
        icon={<Battery className="h-5 w-5 text-ewaste-blue-500" />} 
        change="+8% from last month" 
        positive={true}
      />
      <StatCard 
        title="Reward Points" 
        value="3,250" 
        icon={<Award className="h-5 w-5 text-ewaste-earth-500" />} 
        change="+210 points this month"
        positive={true} 
      />
      <StatCard 
        title="Next Pickup" 
        value="2 days" 
        icon={<Clock className="h-5 w-5 text-ewaste-blue-400" />} 
      />
    </div>
  );
};

export default StatsCard;
