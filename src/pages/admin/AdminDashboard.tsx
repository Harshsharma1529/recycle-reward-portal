
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, CalendarDays, Clock, Package, Recycle, Truck, Users } from 'lucide-react';

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button>Generate Report</Button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">2,453</p>
                </div>
                <div className="rounded-full p-2 bg-ewaste-green-100 text-ewaste-green-500">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>12% increase</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Pickups</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
                <div className="rounded-full p-2 bg-blue-100 text-blue-500">
                  <Truck className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>8% increase</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Items Processed</p>
                  <p className="text-2xl font-bold">8,721</p>
                </div>
                <div className="rounded-full p-2 bg-yellow-100 text-yellow-500">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>24% increase</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Recycled Weight</p>
                  <p className="text-2xl font-bold">12.4 tons</p>
                </div>
                <div className="rounded-full p-2 bg-green-100 text-green-500">
                  <Recycle className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>18% increase</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity & Schedule */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Overview of latest actions and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-ewaste-green-100 text-ewaste-green-500 flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">New user registration</p>
                      <p className="text-sm text-muted-foreground">John Doe created a new account</p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                        <Truck className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Pickup scheduled</p>
                      <p className="text-sm text-muted-foreground">Pickup #12458 scheduled for tomorrow</p>
                      <p className="text-xs text-muted-foreground mt-1">4 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center">
                        <Recycle className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Items recycled</p>
                      <p className="text-sm text-muted-foreground">20 items successfully processed and recycled</p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center">
                        <Package className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">New inventory</p>
                      <p className="text-sm text-muted-foreground">15 new items added to inventory</p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Upcoming pickups and deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">Pickup at 123 Green Street</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - John Doe - 3 items</p>
                    </div>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">Pickup at 45 Elm Avenue</p>
                      <p className="text-sm text-muted-foreground">11:30 AM - Jane Smith - 5 items</p>
                    </div>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">Pickup at 78 Oak Drive</p>
                      <p className="text-sm text-muted-foreground">2:00 PM - Robert Johnson - 2 items</p>
                    </div>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">Pickup at 256 Pine Road</p>
                      <p className="text-sm text-muted-foreground">4:30 PM - Sarah Williams - 7 items</p>
                    </div>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access & Calendar */}
          <div className="space-y-8">
            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <Truck className="h-5 w-5 mb-2" />
                  <span>New Pickup</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <Users className="h-5 w-5 mb-2" />
                  <span>Add User</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <Package className="h-5 w-5 mb-2" />
                  <span>Inventory</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center">
                  <CalendarDays className="h-5 w-5 mb-2" />
                  <span>Schedule</span>
                </Button>
              </CardContent>
            </Card>

            {/* Calendar View */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>December 2023</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simple calendar placeholder - would use an actual calendar component in a real app */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  <div className="text-xs font-medium text-muted-foreground">Su</div>
                  <div className="text-xs font-medium text-muted-foreground">Mo</div>
                  <div className="text-xs font-medium text-muted-foreground">Tu</div>
                  <div className="text-xs font-medium text-muted-foreground">We</div>
                  <div className="text-xs font-medium text-muted-foreground">Th</div>
                  <div className="text-xs font-medium text-muted-foreground">Fr</div>
                  <div className="text-xs font-medium text-muted-foreground">Sa</div>
                  
                  <div className="text-center p-2 text-muted-foreground text-sm">26</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">27</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">28</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">29</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">30</div>
                  <div className="text-center p-2 text-sm">1</div>
                  <div className="text-center p-2 text-sm">2</div>
                  
                  <div className="text-center p-2 text-sm">3</div>
                  <div className="text-center p-2 text-sm">4</div>
                  <div className="text-center p-2 text-sm">5</div>
                  <div className="text-center p-2 text-sm">6</div>
                  <div className="text-center p-2 text-sm">7</div>
                  <div className="text-center p-2 text-sm">8</div>
                  <div className="text-center p-2 text-sm">9</div>
                  
                  <div className="text-center p-2 text-sm">10</div>
                  <div className="text-center p-2 text-sm font-medium bg-ewaste-green-100 rounded-full">11</div>
                  <div className="text-center p-2 text-sm">12</div>
                  <div className="text-center p-2 text-sm">13</div>
                  <div className="text-center p-2 text-sm bg-blue-100 rounded-full">14</div>
                  <div className="text-center p-2 text-sm">15</div>
                  <div className="text-center p-2 text-sm">16</div>
                  
                  <div className="text-center p-2 text-sm">17</div>
                  <div className="text-center p-2 text-sm bg-blue-100 rounded-full">18</div>
                  <div className="text-center p-2 text-sm">19</div>
                  <div className="text-center p-2 text-sm">20</div>
                  <div className="text-center p-2 text-sm">21</div>
                  <div className="text-center p-2 text-sm bg-blue-100 rounded-full">22</div>
                  <div className="text-center p-2 text-sm">23</div>
                  
                  <div className="text-center p-2 text-sm">24</div>
                  <div className="text-center p-2 text-sm">25</div>
                  <div className="text-center p-2 text-sm">26</div>
                  <div className="text-center p-2 text-sm">27</div>
                  <div className="text-center p-2 text-sm bg-blue-100 rounded-full">28</div>
                  <div className="text-center p-2 text-sm">29</div>
                  <div className="text-center p-2 text-sm">30</div>
                  
                  <div className="text-center p-2 text-sm">31</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">1</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">2</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">3</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">4</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">5</div>
                  <div className="text-center p-2 text-muted-foreground text-sm">6</div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-100"></div>
                    <span className="text-xs">Pickups</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-ewaste-green-100"></div>
                    <span className="text-xs">Today</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
