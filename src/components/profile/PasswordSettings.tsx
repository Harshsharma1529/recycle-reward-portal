
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordSettingsProps {
  onSubmit: (e: React.FormEvent, passwords: PasswordFormData) => void;
}

export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const PasswordSettings: React.FC<PasswordSettingsProps> = ({ onSubmit }) => {
  const [passwordData, setPasswordData] = useState<PasswordFormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user types
    if (error) setError(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError("All fields are required");
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords don't match");
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    
    // If validation passes, call the parent onSubmit
    onSubmit(e, passwordData);
    
    // Reset form after submission
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Update your password to keep your account secure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input 
              id="currentPassword" 
              type="password" 
              value={passwordData.currentPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input 
              id="newPassword" 
              type="password"
              value={passwordData.newPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input 
              id="confirmPassword" 
              type="password"
              value={passwordData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white">
            Update Password
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PasswordSettings;
