
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import SchedulePickupForm from '@/components/pickup/SchedulePickupForm';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recycle, Check, Clock, MapPin, Award } from 'lucide-react';

const EWastePickup = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-ewaste-green-100 text-ewaste-green-700 py-1 px-3 text-sm">
            E-Waste Pickup
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Convenient and Responsible E-Waste Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a pickup for your electronic waste and our team will collect it directly from your location
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-ewaste-green-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-ewaste-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Schedule a Pickup</h3>
              <p className="text-gray-600">
                Fill out our simple form to let us know when and where to collect your e-waste
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ewaste-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-ewaste-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. We Collect Your E-Waste</h3>
              <p className="text-gray-600">
                Our professional team arrives at your location to pick up your electronic waste
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ewaste-earth-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-ewaste-earth-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Earn Reward Points</h3>
              <p className="text-gray-600">
                Receive points based on your contribution that can be redeemed for various rewards
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Pickup Form */}
          <div>
            <SchedulePickupForm />
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            <Card className="border-ewaste-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Recycle className="mr-2 text-ewaste-green-500" />
                  Accepted E-Waste Items
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Computers & Laptops</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Mobile Phones</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Tablets & E-readers</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Printers & Scanners</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Monitors & TVs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Gaming Consoles</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Home Appliances</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Audio Equipment</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Batteries</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-ewaste-green-500 mr-2" />
                    <span>Cables & Chargers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-ewaste-green-50 border-ewaste-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <p className="mb-4 text-gray-600">
                  We currently offer pickup services in the following cities:
                </p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-white p-2 rounded text-center">Mumbai</div>
                  <div className="bg-white p-2 rounded text-center">Delhi</div>
                  <div className="bg-white p-2 rounded text-center">Bangalore</div>
                  <div className="bg-white p-2 rounded text-center">Chennai</div>
                  <div className="bg-white p-2 rounded text-center">Hyderabad</div>
                  <div className="bg-white p-2 rounded text-center">Kolkata</div>
                  <div className="bg-white p-2 rounded text-center">Pune</div>
                  <div className="bg-white p-2 rounded text-center">Ahmedabad</div>
                  <div className="bg-white p-2 rounded text-center">Jaipur</div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  And 90+ more cities across India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Is there a charge for pickup service?</h4>
                    <p className="text-gray-600">
                      Our standard pickup service is free of charge for most locations within our service areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">How much advance notice do I need to give?</h4>
                    <p className="text-gray-600">
                      We recommend scheduling at least 2-3 days in advance to ensure availability of our pickup teams.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Is there a minimum amount of e-waste required?</h4>
                    <p className="text-gray-600">
                      While there's no strict minimum, we recommend accumulating a reasonable amount to make the pickup efficient.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EWastePickup;
