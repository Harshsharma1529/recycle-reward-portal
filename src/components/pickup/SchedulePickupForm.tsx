
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const SchedulePickupForm: React.FC = () => {
  const [date, setDate] = useState<Date>();

  const ewasteTypes = [
    "Computers & Laptops", 
    "Mobile Phones", 
    "Tablets", 
    "Printers", 
    "Monitors", 
    "TVs", 
    "Gaming Consoles",
    "Home Appliances",
    "Batteries",
    "Other Electronics"
  ];

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pickup scheduled', { date });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Schedule a Pickup</CardTitle>
        <CardDescription>
          Tell us what e-waste you need collected, and we'll take care of the rest
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="flex">
                  <Input id="address" placeholder="123 Green St" className="rounded-r-none" required />
                  <Button type="button" variant="outline" className="rounded-l-none border-l-0">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* E-Waste Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">E-Waste Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wasteType">Type of E-Waste</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {ewasteTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Approximate Quantity</Label>
                <Input id="quantity" placeholder="e.g., 2 laptops, 3 phones" required />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="description">Additional Details</Label>
              <Textarea 
                id="description" 
                placeholder="Please provide any additional information about your e-waste..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Pickup Schedule */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Pickup Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and weekends for example
                        const now = new Date();
                        now.setHours(0, 0, 0, 0);
                        return date < now || [0, 6].includes(date.getDay());
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time Slot</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Select a time slot</span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot.toLowerCase().replace(/\s+/g, '-')}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-ewaste-green-500 hover:bg-ewaste-green-600 text-white"
            >
              Schedule Pickup
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SchedulePickupForm;
