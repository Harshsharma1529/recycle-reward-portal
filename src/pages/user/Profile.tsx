
import React, { useState, useEffect } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileInformation from '@/components/profile/ProfileInformation';
import PasswordSettings, { PasswordFormData } from '@/components/profile/PasswordSettings';
import NotificationSettings from '@/components/profile/NotificationSettings';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, History, Calendar, Package } from 'lucide-react';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || user.name?.split(' ')[0] || '',
        lastName: user.lastName || user.name?.split(' ')[1] || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || ''
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      name: `${formData.firstName} ${formData.lastName}`
    };
    
    const success = await updateProfile(updatedUser);
    
    if (success) {
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated",
      });
    }
  };

  const handleSavePassword = (e: React.FormEvent, passwordData: PasswordFormData) => {
    e.preventDefault();
    // In a real app, we would send this to the backend
    console.log("Password data to update:", passwordData);
    
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully",
    });
  };

  const handleSaveNotifications = (e: React.FormEvent, notificationSettings: any[]) => {
    e.preventDefault();
    // In a real app, we would send this to the backend
    console.log("Notification settings to update:", notificationSettings);
    
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved",
    });
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <AppLayout>
        <div className="container mx-auto py-8 px-4 flex justify-center items-center h-[60vh]">
          <div className="text-center">
            <div className="h-12 w-12 mx-auto rounded-full border-4 border-ewaste-green-500 border-t-transparent animate-spin"></div>
            <p className="mt-4">Loading profile...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Get the user's waste history
  const wasteHistory = user.wasteItems || [];
  // Get the user's rewards
  const userRewards = user.recentRewards || [];
  // Get upcoming pickups
  const upcomingPickups = user.upcomingPickups || [];

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <ProfileSidebar onLogout={handleLogout} />
          </div>
          
          <div className="w-full md:w-3/4">
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="history">My History</TabsTrigger>
                <TabsTrigger value="rewards">My Rewards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <ProfileInformation 
                  formData={formData} 
                  onChange={handleInputChange} 
                  onSubmit={handleSaveProfile} 
                />
              </TabsContent>
              
              <TabsContent value="password">
                <PasswordSettings onSubmit={handleSavePassword} />
              </TabsContent>
              
              <TabsContent value="notifications">
                <NotificationSettings onSubmit={handleSaveNotifications} />
              </TabsContent>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <History className="mr-2 h-5 w-5" />
                      My Recycling History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {wasteHistory.length === 0 ? (
                      <div className="text-center py-8">
                        <Package className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                        <h3 className="text-lg font-medium mb-2">No recycling history yet</h3>
                        <p className="text-gray-500 mb-4">Start recycling your e-waste to see your history</p>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {wasteHistory.map((item: any, index: number) => (
                          <div key={index} className="py-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{item.type}</h3>
                                <p className="text-sm text-gray-500">{item.date}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-ewaste-green-500 font-medium">+{item.points} points</p>
                                <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100">
                                  {item.weight} kg
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {upcomingPickups.length > 0 && (
                      <div className="mt-6">
                        <h3 className="font-medium mb-4 flex items-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          Upcoming Pickups
                        </h3>
                        <div className="divide-y">
                          {upcomingPickups.map((pickup: any, index: number) => (
                            <div key={index} className="py-4">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium">{pickup.date}</h4>
                                  <p className="text-sm text-gray-500">{pickup.timeSlot}</p>
                                  <p className="text-sm text-gray-500">{pickup.address}, {pickup.city}</p>
                                </div>
                                <div className="text-right">
                                  <span className={`inline-block px-2 py-1 text-xs rounded-full 
                                    ${pickup.status === 'scheduled' ? 'bg-blue-100 text-blue-700' : 
                                      pickup.status === 'completed' ? 'bg-green-100 text-green-700' : 
                                      'bg-red-100 text-red-700'}`}>
                                    {pickup.status.charAt(0).toUpperCase() + pickup.status.slice(1)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rewards">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      My Rewards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="bg-ewaste-green-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Current Points</h3>
                            <p className="text-sm text-gray-500">Use your points to redeem rewards</p>
                          </div>
                          <div className="text-2xl font-bold text-ewaste-green-600">
                            {user.points} points
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-medium mb-4">Rewards History</h3>
                    {userRewards.length === 0 ? (
                      <div className="text-center py-8">
                        <Award className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                        <h3 className="text-lg font-medium mb-2">No rewards yet</h3>
                        <p className="text-gray-500 mb-4">Recycle more e-waste to earn rewards</p>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {userRewards.map((reward: any, index: number) => (
                          <div key={index} className="py-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{reward.name}</h3>
                                <p className="text-sm text-gray-500">{reward.date}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-ewaste-green-500 font-medium">{reward.points} points</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
