
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NotificationSettingsProps {
  onSubmit: (e: React.FormEvent) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onSubmit }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage how you receive notifications and updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-4">
            {['Email Notifications', 'SMS Notifications', 'Push Notifications', 'Pickup Reminders', 'Reward Updates', 'Newsletter'].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ewaste-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ewaste-green-500"></div>
                </label>
              </div>
            ))}
          </div>
          <Button type="submit" className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
            Save Preferences
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
