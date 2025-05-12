
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, KeyRound, Bell, ShieldCheck, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileSidebarProps {
  onLogout: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onLogout }) => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://ui.shadcn.com/avatars/03.png" />
            <AvatarFallback>{user.name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-bold">{user.name || 'User'}</h2>
          <p className="text-sm text-gray-500">{user.email || 'user@example.com'}</p>
          <div className="mt-3 bg-ewaste-green-100 text-ewaste-green-800 text-sm px-3 py-1 rounded-full">
            Recycling Hero
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            My Profile
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <KeyRound className="mr-2 h-4 w-4" />
            Security
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Privacy
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={onLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSidebar;
