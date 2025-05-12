
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NotificationOption {
  id: string;
  name: string;
  enabled: boolean;
}

interface NotificationSettingsProps {
  onSubmit: (e: React.FormEvent, settings: NotificationOption[]) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onSubmit }) => {
  const [notificationSettings, setNotificationSettings] = useState<NotificationOption[]>([
    { id: 'email', name: 'Email Notifications', enabled: true },
    { id: 'sms', name: 'SMS Notifications', enabled: true },
    { id: 'push', name: 'Push Notifications', enabled: true },
    { id: 'pickups', name: 'Pickup Reminders', enabled: false },
    { id: 'rewards', name: 'Reward Updates', enabled: false },
    { id: 'newsletter', name: 'Newsletter', enabled: false },
  ]);

  const handleToggle = (index: number) => {
    setNotificationSettings(prev => 
      prev.map((setting, i) => 
        i === index ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e, notificationSettings);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage how you receive notifications and updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            {notificationSettings.map((setting, index) => (
              <div key={setting.id} className="flex items-center justify-between">
                <span>{setting.name}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={setting.enabled}
                    onChange={() => handleToggle(index)}
                    className="sr-only peer" 
                  />
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
